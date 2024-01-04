---
title: 'helm prometheus-operator ServiceMonitor 和 PodMonitor 不能在其他名称空间中工作'
authors: gaoxu
tags: [Kubernetes,Helm,Prometheus Operator]
---

prometheus 操作员不支持基于注释的服务发现，而是使用`PodMonitor`或`ServiceMonitor`CRD 来代替，因为它们提供了更多的配置选项。有关如何使用PodMonitors/ServiceMonitors的信息，请参阅`prometheus-operator/prometheus-operator`此处文档的说明：

* [服务监控器](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/user-guides/getting-started.md#include-servicemonitors)
* [Pod 监视器](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/user-guides/getting-started.md#include-podmonitors)
* [运行出口商](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/user-guides/running-exporters.md)

默认情况下，Prometheus 会在其命名空间内发现 PodMonitors 和 ServiceMonitors，它们的发布标签与 prometheus-operator 版本相同。有时，您可能需要发现自定义 PodMonitors/ServiceMonitors，例如用于从第三方应用程序中抓取数据。在不影响默认 PodMonitors/ServiceMonitors 发现的情况下，一种简单的方法是允许 Prometheus 发现其命名空间内的所有 PodMonitors/ServiceMonitors，而不应用标签过滤。为此，您可以将`prometheus.prometheusSpec.podMonitorSelectorNilUsesHelmValues`和设置`prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues`为`false`。

## helm -f values.yaml 增加下面配置

```yaml
prometheus:
  prometheusSpec: 
    podMonitorSelectorNilUsesHelmValues: false
    serviceMonitorSelectorNilUsesHelmValues: false
```

## helm --set

```bash
helm --set prometheus.prometheusSpec.podMonitorSelectorNilUsesHelmValues=false --set prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues=false
```
