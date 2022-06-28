---
title: 'Redis lettuce驱动连接出现 NOAUTH Authentication required.'
authors: gaoxu
tags: [Spring Boot, lettuce, Java]
---

## 问题

命令行连接明明没有问题，Spring Boot 的YML配置也是对的 但是死活出现密码不对。

报错日志

```log
2021-11-23 15:04:02.492  WARN 12681 --- [oundedElastic-1] o.s.b.a.r.RedisReactiveHealthIndicator   : Redis health check failed

org.springframework.data.redis.RedisConnectionFailureException: Unable to connect to Redis; nested exception is org.springframework.data.redis.connection.PoolException: Could not get a resource from the pool; nested exception is io.lettuce.core.RedisConnectionException: Unable to connect to 172.18.150.9:6379
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$ExceptionTranslatingConnectionProvider.translateException(LettuceConnectionFactory.java:1689)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$ExceptionTranslatingConnectionProvider.getConnection(LettuceConnectionFactory.java:1597)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$SharedConnection.getNativeConnection(LettuceConnectionFactory.java:1383)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$SharedConnection.getConnection(LettuceConnectionFactory.java:1366)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory.getSharedReactiveConnection(LettuceConnectionFactory.java:1117)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory.getReactiveConnection(LettuceConnectionFactory.java:509)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory.getReactiveConnection(LettuceConnectionFactory.java:103)
	at reactor.core.publisher.MonoSupplier.call(MonoSupplier.java:86)
	at reactor.core.publisher.FluxSubscribeOnCallable$CallableSubscribeOnSubscription.run(FluxSubscribeOnCallable.java:227)
	at reactor.core.scheduler.SchedulerTask.call(SchedulerTask.java:68)
	at reactor.core.scheduler.SchedulerTask.call(SchedulerTask.java:28)
	at java.base/java.util.concurrent.FutureTask.run$$$capture(FutureTask.java:264)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java)
	at java.base/java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.run(ScheduledThreadPoolExecutor.java:304)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
	at java.base/java.lang.Thread.run(Thread.java:829)
Caused by: org.springframework.data.redis.connection.PoolException: Could not get a resource from the pool; nested exception is io.lettuce.core.RedisConnectionException: Unable to connect to 172.18.150.9:6379
	at org.springframework.data.redis.connection.lettuce.LettucePoolingConnectionProvider.getConnection(LettucePoolingConnectionProvider.java:109)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$ExceptionTranslatingConnectionProvider.getConnection(LettuceConnectionFactory.java:1595)
	... 15 common frames omitted
Caused by: io.lettuce.core.RedisConnectionException: Unable to connect to 172.18.150.9:6379
	at io.lettuce.core.RedisConnectionException.create(RedisConnectionException.java:78)
	at io.lettuce.core.RedisConnectionException.create(RedisConnectionException.java:56)
	at io.lettuce.core.AbstractRedisClient.getConnection(AbstractRedisClient.java:330)
	at io.lettuce.core.RedisClient.connect(RedisClient.java:216)
	at org.springframework.data.redis.connection.lettuce.StandaloneConnectionProvider.lambda$getConnection$1(StandaloneConnectionProvider.java:115)
	at java.base/java.util.Optional.orElseGet(Optional.java:369)
	at org.springframework.data.redis.connection.lettuce.StandaloneConnectionProvider.getConnection(StandaloneConnectionProvider.java:115)
	at org.springframework.data.redis.connection.lettuce.LettucePoolingConnectionProvider.lambda$null$0(LettucePoolingConnectionProvider.java:97)
	at io.lettuce.core.support.ConnectionPoolSupport$RedisPooledObjectFactory.create(ConnectionPoolSupport.java:211)
	at io.lettuce.core.support.ConnectionPoolSupport$RedisPooledObjectFactory.create(ConnectionPoolSupport.java:201)
	at org.apache.commons.pool2.BasePooledObjectFactory.makeObject(BasePooledObjectFactory.java:70)
	at org.apache.commons.pool2.impl.GenericObjectPool.create(GenericObjectPool.java:571)
	at org.apache.commons.pool2.impl.GenericObjectPool.borrowObject(GenericObjectPool.java:298)
	at org.apache.commons.pool2.impl.GenericObjectPool.borrowObject(GenericObjectPool.java:223)
	at io.lettuce.core.support.ConnectionPoolSupport$1.borrowObject(ConnectionPoolSupport.java:122)
	at io.lettuce.core.support.ConnectionPoolSupport$1.borrowObject(ConnectionPoolSupport.java:117)
	at org.springframework.data.redis.connection.lettuce.LettucePoolingConnectionProvider.getConnection(LettucePoolingConnectionProvider.java:103)
	... 16 common frames omitted
Caused by: io.lettuce.core.RedisCommandExecutionException: NOAUTH Authentication required.
	at io.lettuce.core.internal.ExceptionFactory.createExecutionException(ExceptionFactory.java:137)
	at io.lettuce.core.internal.ExceptionFactory.createExecutionException(ExceptionFactory.java:110)
	at io.lettuce.core.protocol.AsyncCommand.completeResult(AsyncCommand.java:120)
	at io.lettuce.core.protocol.AsyncCommand.complete(AsyncCommand.java:111)
	at io.lettuce.core.protocol.CommandWrapper.complete(CommandWrapper.java:63)
	at io.lettuce.core.protocol.CommandHandler.complete(CommandHandler.java:746)
	at io.lettuce.core.protocol.CommandHandler.decode(CommandHandler.java:681)
	at io.lettuce.core.protocol.CommandHandler.channelRead(CommandHandler.java:598)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:379)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:365)
	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:357)
	at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1410)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:379)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:365)
	at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:919)
	at io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:166)
	at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:719)
	at io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:655)
	at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:581)
	at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:493)
	at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:986)
	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)
	at io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)
	... 1 common frames omitted
```

## 具体原因

问题出在客户端上，某些云厂商魔改的redis导致协议跟官方有出入。所以导致lettuce在判断协议时 并不准确。

想了解更多的请参考我提的issues[1543](https://github.com/lettuce-io/lettuce-core/issues/1543)

## 如何解决

### 方式一

降级lettuce客户端到5.3.x，因为自动识别RESP2/RESP3协议是6.x版本加上去的

```gradle title="build.gradle"
implementation 'io.lettuce:lettuce-core:5.3.7.RELEASE'
```
### 方式二

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    /**
     * fix
     * https://github.com/lettuce-io/lettuce-core/issues/1201
     * https://github.com/lettuce-io/lettuce-core/issues/1543
     */
    @Bean
    public LettuceClientConfigurationBuilderCustomizer redisBuilderCustomizer() {
        return builder -> builder.clientOptions(
                ClientOptions
                        .builder()
                        .protocolVersion(ProtocolVersion.RESP2)
                        .build()
        );
    }
}
```