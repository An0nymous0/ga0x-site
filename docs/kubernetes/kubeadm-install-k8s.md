---
title: 'CentOS9 kubeadm 安装 K8s(containerd)'
sidebar_label: 'CentOS9 kubeadm 安装 K8s(containerd)'
tags: [CentOS,Kubeadm,Kubernetes,K8s,containerd,Docker]
---

## 安装 docker 和 containerd 运行时

### 设置存储库

```shell
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

### 安装 Docker 引擎、containerd 和 Docker Compose

```shell
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 启动 Docker

```shell
sudo systemctl start docker
```

### 为containerd创建一个配置文件并将其设置为默认值

```shell
sudo containerd config default | sudo tee /etc/containerd/config.toml
```

### 修改 /etc/containerd/config.toml 配置文件

**将 `cgroupdriver` 设置为 `systemd`**

找到
`[plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]`
并将 `SystemdCgroup` 的值更改为 `true`

**修改 pause 镜像地址**

找到
`[plugins."io.containerd.grpc.v1.cri"]`
并将 `sandbox_image` 的值更改为 `registry.cn-hangzhou.aliyuncs.com/google\_containers/pause:3.6`

**修改 CRI API 的镜像地址**

找到
`[plugins."io.containerd.grpc.v1.cri".registry]`
并将 `config_path` 的值更改为 `/etc/containerd/certs.d`

**保存上面的更改**

### **新建k8s.gcr.io 镜像配置**

```shell
mkdir -p /etc/containerd/certs.d/k8s.gcr.io

cat << EOF > /etc/containerd/certs.d/k8s.gcr.io/hosts.toml
server = "https://k8s.gcr.io"

[host."https://registry.cn-hangzhou.aliyuncs.com/google_containers"]
capabilities = ["pull", "resolve"]
EOF
```

### **新建docker.io镜像配置**

```shell
mkdir -p /etc/containerd/certs.d/docker.io

cat << EOF > /etc/containerd/certs.d/docker.io/hosts.toml
server = "https://registry-1.docker.io"

[host."https://你的地址.mirror.aliyuncs.com"]
  capabilities = ["pull", "resolve", "push"]
EOF
```

### 要完成上面的更改需要重启containerd

```shell
sudo systemctl restart containerd
```

注意 上面`registry`配置部分不会影响 ctr 和 docker 命令的加速，所以 `"io.containerd.grpc.v1.cri"` 配置不适用于 ctr pull&docker pull等等，这么做的目的是为 k8s 加速，如果需要使用 docker-cli 和 ctr 的同学可以单独去配置或者直接用**crictl**，因为我们最终用的是 k8s 所以这里不过多讲述。

## 环境准备

### 关闭交换分区

```shell
sudo swapoff –a
```

### 将 SELinux 设置为 `permissive` 模式

```shell
# 将 SELinux 设置为 permissive 模式（相当于将其禁用）
sudo setenforce 0
sudo sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config
```

### 转发 IPv4 并让 iptables 查看桥接流量

```shell
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

# sysctl params required by setup, params persist across reboots
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

sudo sysctl --system
```

### 开启 ipvs

```shell
mkdir /etc/sysconfig/modules
cat <<EOF | sudo tee /etc/sysconfig/modules/ipvs.modules
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack
EOF
```

tips：高版本的centos内核nf\_conntrack\_ipv4被nf\_conntrack替换了，如果你是低版本的 centos 请把nf\_conntrack改为nf\_conntrack\_ipv4

## 安装 kubeadm&init

### 添加 Kubernetes 的 `yum` 仓库

```shell
# 此操作会覆盖 /etc/yum.repos.d/kubernetes.repo 中现存的所有配置
cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://pkgs.k8s.io/core:/stable:/v1.28/rpm/
enabled=1
gpgcheck=1
gpgkey=https://pkgs.k8s.io/core:/stable:/v1.28/rpm/repodata/repomd.xml.key
exclude=kubelet kubeadm kubectl cri-tools kubernetes-cni
EOF
```

### 安装 kubelet、kubeadm 和 kubectl，并启用 kubelet 以确保它在启动时自动启动

```shell
sudo yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes
sudo systemctl enable --now kubelet
```

### 设置主机名

```shell
sudo hostnamectl set-hostname "master-node-1"
```

### 修改 hosts

```shell
sudo cat <> /etc/hosts
1.1.1.101 master-node-1
EOF
```

### 导出默认kubeadm.yaml

```shell
kubeadm config print init-defaults > kubeadm.yaml
```

**文件尾部添加**

```shell
vi kubeadm.yaml

#尾部添加
---
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration
mode: ipvs
---
kind: KubeletConfiguration
apiVersion: kubelet.config.k8s.io/v1beta1
cgroupDriver: systemd

#修改advertiseAddress地址为本机 ip
localAPIEndpoint:
  advertiseAddress: 1.1.1.101
  bindPort: 6443

#将imageRepository: k8s.gcr.io 修改为
imageRepository: registry.aliyuncs.com/google_containers

#增加certSANs ip，内外网都加进去，否则生成证书无法用外网 master ip 连接
apiServer:
  certSANs:
  - "1.1.1.101"
  - "123.123.123.123"
  extraArgs:
    authorization-mode: Node,RBAC
  timeoutForControlPlane: 4m0s
# name 修改为你的主机名
nodeRegistration:
  criSocket: unix:///var/run/containerd/containerd.sock
  imagePullPolicy: IfNotPresent
  name: master-node-1
  taints: null
```

```shell
# 下载镜像
kubeadm config images pull --config kubeadm.yaml
# 初始化集群
kubeadm init --config kubeadm.yaml
```

```shell
[kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
[addons] Applied essential addon: CoreDNS
[addons] Applied essential addon: kube-proxy

Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

Alternatively, if you are the root user, you can run:

  export KUBECONFIG=/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 1.1.1.101:6443 --token abcdef.0123456789abcdef \
        --discovery-token-ca-cert-hash sha256:cecb4c3d2aedec9789cfea83d8d6886af57c04ec8351d051b9bbbcac5475854d
```

**复制集群配置文件**

```shell
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

**测试IPVS模式正在运行**

```shell
ipvsadm -Ln

IP Virtual Server version 1.2.1 (size=4096)
Prot LocalAddress:Port Scheduler Flags
  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  10.96.0.1:443 rr
  -> 1.1.1.101:6443               Masq    1      0          0
TCP  10.96.0.10:53 rr
  -> 10.244.0.2:53                Masq    1      0          0
  -> 10.244.2.8:53                Masq    1      0          0
```

**测试机群运行是否正常**

```shell
kubectl get node

NAME   STATUS     ROLES           AGE     VERSION
node   NotReady   control-plane   6m51s   v1.28.3
```

我们发现 STATUS 是 NotReady 是因为我们还没有部署 pod 的网络

### 部署 pod 网络

```shell
kubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml
```

**tips:**
如果您使用自定义podCIDR（不是10.244.0.0/16），您首先需要下载上述清单并修改网络以匹配您的清单。
如果发现是flannel的 pod 启动失败可能是集群 cidr 配置问题。
修改 controller-manager 配置，加入

```shell
vim /etc/kubernetes/manifests/kube-controller-manager.yaml
	- --allocate-node-cidrs=true
    - --cluster-cidr=10.88.0.0/16			# 当前集群的 cluster-cidr
systemctl restart kubelet
```

然后等待 controller-manager 启动后自动分发给新 node cidr 即可解决。

如果是多节点后续直接 join 就可以了 如果是 master 节点 join 后面加--control-plane-endpoint

### 如果先想单节点运行需要去除污点

```shell
#查看污点情况
kubectl describe node master-node-1|grep Taints
Taints:             node-role.kubernetes.io/control-plane:NoSchedule

#取消污点
kubectl taint nodes master-node-1 node-role.kubernetes.io/control-plane:NoSchedule-

#生成污点
kubectl taint nodes master-node-1  node-role.kubernetes.io/control-plane:NoSchedule
```

## 其他

如果是阿里云自建的 k8s 可以考虑使用Terway网络插件，好处是可以跟你的 vpc 网络打通具体看官网文档


