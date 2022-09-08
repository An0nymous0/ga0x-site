"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[192],{224:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var o=n(2374);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),v=a,m=p["".concat(l,".").concat(v)]||p[v]||d[v]||r;return n?o.createElement(m,c(c({ref:t},s),{},{components:n})):o.createElement(m,c({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<r;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(6252),a=(n(2374),n(224));const r={title:"Redis lettuce\u9a71\u52a8\u8fde\u63a5\u51fa\u73b0 NOAUTH Authentication required.",authors:"gaoxu",tags:["Spring Boot","lettuce","Java"]},c=void 0,i={permalink:"/blog/2021/11/23/lettuce-error-noauth",editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/blog/2021-11-23-lettuce-error-noauth.md",source:"@site/blog/2021-11-23-lettuce-error-noauth.md",title:"Redis lettuce\u9a71\u52a8\u8fde\u63a5\u51fa\u73b0 NOAUTH Authentication required.",description:"\u95ee\u9898",date:"2021-11-23T00:00:00.000Z",formattedDate:"2021\u5e7411\u670823\u65e5",tags:[{label:"Spring Boot",permalink:"/blog/tags/spring-boot"},{label:"lettuce",permalink:"/blog/tags/lettuce"},{label:"Java",permalink:"/blog/tags/java"}],readingTime:1.27,hasTruncateMarker:!1,authors:[{name:"xu gao",title:"Full stack developer",url:"https://github.com/an0nymous",imageURL:"https://avatars.githubusercontent.com/u/6836030?v=4",key:"gaoxu"}],frontMatter:{title:"Redis lettuce\u9a71\u52a8\u8fde\u63a5\u51fa\u73b0 NOAUTH Authentication required.",authors:"gaoxu",tags:["Spring Boot","lettuce","Java"]},prevItem:{title:"ncdu \u78c1\u76d8\u5206\u6790\u67e5\u770b\u5de5\u5177\u4f7f\u7528",permalink:"/blog/2022/06/28/ncdu-tools"},nextItem:{title:"graalvm \u5728 macOS Catalina \u4e0a\u63d0\u793a\u65e0\u6cd5\u9a8c\u8bc1\u5f00\u53d1\u4eba\u5458\u8b66\u544a\u95ee\u9898",permalink:"/blog/2021/11/03/graalvm-damaged-error"}},l={authorsImageUrls:[void 0]},u=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u5177\u4f53\u539f\u56e0",id:"\u5177\u4f53\u539f\u56e0",level:2},{value:"\u5982\u4f55\u89e3\u51b3",id:"\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u65b9\u5f0f\u4e00",id:"\u65b9\u5f0f\u4e00",level:3},{value:"\u65b9\u5f0f\u4e8c",id:"\u65b9\u5f0f\u4e8c",level:3}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,a.kt)("p",null,"\u547d\u4ee4\u884c\u8fde\u63a5\u660e\u660e\u6ca1\u6709\u95ee\u9898\uff0cSpring Boot \u7684YML\u914d\u7f6e\u4e5f\u662f\u5bf9\u7684 \u4f46\u662f\u6b7b\u6d3b\u51fa\u73b0\u5bc6\u7801\u4e0d\u5bf9\u3002"),(0,a.kt)("p",null,"\u62a5\u9519\u65e5\u5fd7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"2021-11-23 15:04:02.492  WARN 12681 --- [oundedElastic-1] o.s.b.a.r.RedisReactiveHealthIndicator   : Redis health check failed\n\norg.springframework.data.redis.RedisConnectionFailureException: Unable to connect to Redis; nested exception is org.springframework.data.redis.connection.PoolException: Could not get a resource from the pool; nested exception is io.lettuce.core.RedisConnectionException: Unable to connect to 172.18.150.9:6379\n    at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$ExceptionTranslatingConnectionProvider.translateException(LettuceConnectionFactory.java:1689)\n    at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$ExceptionTranslatingConnectionProvider.getConnection(LettuceConnectionFactory.java:1597)\n    at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$SharedConnection.getNativeConnection(LettuceConnectionFactory.java:1383)\n    at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$SharedConnection.getConnection(LettuceConnectionFactory.java:1366)\n    at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory.getSharedReactiveConnection(LettuceConnectionFactory.java:1117)\n    at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory.getReactiveConnection(LettuceConnectionFactory.java:509)\n    at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory.getReactiveConnection(LettuceConnectionFactory.java:103)\n    at reactor.core.publisher.MonoSupplier.call(MonoSupplier.java:86)\n    at reactor.core.publisher.FluxSubscribeOnCallable$CallableSubscribeOnSubscription.run(FluxSubscribeOnCallable.java:227)\n    at reactor.core.scheduler.SchedulerTask.call(SchedulerTask.java:68)\n    at reactor.core.scheduler.SchedulerTask.call(SchedulerTask.java:28)\n    at java.base/java.util.concurrent.FutureTask.run$$$capture(FutureTask.java:264)\n    at java.base/java.util.concurrent.FutureTask.run(FutureTask.java)\n    at java.base/java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.run(ScheduledThreadPoolExecutor.java:304)\n    at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n    at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n    at java.base/java.lang.Thread.run(Thread.java:829)\nCaused by: org.springframework.data.redis.connection.PoolException: Could not get a resource from the pool; nested exception is io.lettuce.core.RedisConnectionException: Unable to connect to 172.18.150.9:6379\n    at org.springframework.data.redis.connection.lettuce.LettucePoolingConnectionProvider.getConnection(LettucePoolingConnectionProvider.java:109)\n    at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$ExceptionTranslatingConnectionProvider.getConnection(LettuceConnectionFactory.java:1595)\n    ... 15 common frames omitted\nCaused by: io.lettuce.core.RedisConnectionException: Unable to connect to 172.18.150.9:6379\n    at io.lettuce.core.RedisConnectionException.create(RedisConnectionException.java:78)\n    at io.lettuce.core.RedisConnectionException.create(RedisConnectionException.java:56)\n    at io.lettuce.core.AbstractRedisClient.getConnection(AbstractRedisClient.java:330)\n    at io.lettuce.core.RedisClient.connect(RedisClient.java:216)\n    at org.springframework.data.redis.connection.lettuce.StandaloneConnectionProvider.lambda$getConnection$1(StandaloneConnectionProvider.java:115)\n    at java.base/java.util.Optional.orElseGet(Optional.java:369)\n    at org.springframework.data.redis.connection.lettuce.StandaloneConnectionProvider.getConnection(StandaloneConnectionProvider.java:115)\n    at org.springframework.data.redis.connection.lettuce.LettucePoolingConnectionProvider.lambda$null$0(LettucePoolingConnectionProvider.java:97)\n    at io.lettuce.core.support.ConnectionPoolSupport$RedisPooledObjectFactory.create(ConnectionPoolSupport.java:211)\n    at io.lettuce.core.support.ConnectionPoolSupport$RedisPooledObjectFactory.create(ConnectionPoolSupport.java:201)\n    at org.apache.commons.pool2.BasePooledObjectFactory.makeObject(BasePooledObjectFactory.java:70)\n    at org.apache.commons.pool2.impl.GenericObjectPool.create(GenericObjectPool.java:571)\n    at org.apache.commons.pool2.impl.GenericObjectPool.borrowObject(GenericObjectPool.java:298)\n    at org.apache.commons.pool2.impl.GenericObjectPool.borrowObject(GenericObjectPool.java:223)\n    at io.lettuce.core.support.ConnectionPoolSupport$1.borrowObject(ConnectionPoolSupport.java:122)\n    at io.lettuce.core.support.ConnectionPoolSupport$1.borrowObject(ConnectionPoolSupport.java:117)\n    at org.springframework.data.redis.connection.lettuce.LettucePoolingConnectionProvider.getConnection(LettucePoolingConnectionProvider.java:103)\n    ... 16 common frames omitted\nCaused by: io.lettuce.core.RedisCommandExecutionException: NOAUTH Authentication required.\n    at io.lettuce.core.internal.ExceptionFactory.createExecutionException(ExceptionFactory.java:137)\n    at io.lettuce.core.internal.ExceptionFactory.createExecutionException(ExceptionFactory.java:110)\n    at io.lettuce.core.protocol.AsyncCommand.completeResult(AsyncCommand.java:120)\n    at io.lettuce.core.protocol.AsyncCommand.complete(AsyncCommand.java:111)\n    at io.lettuce.core.protocol.CommandWrapper.complete(CommandWrapper.java:63)\n    at io.lettuce.core.protocol.CommandHandler.complete(CommandHandler.java:746)\n    at io.lettuce.core.protocol.CommandHandler.decode(CommandHandler.java:681)\n    at io.lettuce.core.protocol.CommandHandler.channelRead(CommandHandler.java:598)\n    at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:379)\n    at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:365)\n    at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:357)\n    at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1410)\n    at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:379)\n    at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:365)\n    at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:919)\n    at io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:166)\n    at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:719)\n    at io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:655)\n    at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:581)\n    at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:493)\n    at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:986)\n    at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\n    at io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\n    ... 1 common frames omitted\n")),(0,a.kt)("h2",{id:"\u5177\u4f53\u539f\u56e0"},"\u5177\u4f53\u539f\u56e0"),(0,a.kt)("p",null,"\u95ee\u9898\u51fa\u5728\u5ba2\u6237\u7aef\u4e0a\uff0c\u67d0\u4e9b\u4e91\u5382\u5546\u9b54\u6539\u7684redis\u5bfc\u81f4\u534f\u8bae\u8ddf\u5b98\u65b9\u6709\u51fa\u5165\u3002\u6240\u4ee5\u5bfc\u81f4lettuce\u5728\u5224\u65ad\u534f\u8bae\u65f6 \u5e76\u4e0d\u51c6\u786e\u3002"),(0,a.kt)("p",null,"\u60f3\u4e86\u89e3\u66f4\u591a\u7684\u8bf7\u53c2\u8003\u6211\u63d0\u7684issues",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lettuce-io/lettuce-core/issues/1543"},"1543")),(0,a.kt)("h2",{id:"\u5982\u4f55\u89e3\u51b3"},"\u5982\u4f55\u89e3\u51b3"),(0,a.kt)("h3",{id:"\u65b9\u5f0f\u4e00"},"\u65b9\u5f0f\u4e00"),(0,a.kt)("p",null,"\u964d\u7ea7lettuce\u5ba2\u6237\u7aef\u52305.3.x\uff0c\u56e0\u4e3a\u81ea\u52a8\u8bc6\u522bRESP2/RESP3\u534f\u8bae\u662f6.x\u7248\u672c\u52a0\u4e0a\u53bb\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="build.gradle"',title:'"build.gradle"'},"implementation 'io.lettuce:lettuce-core:5.3.7.RELEASE'\n")),(0,a.kt)("h3",{id:"\u65b9\u5f0f\u4e8c"},"\u65b9\u5f0f\u4e8c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n\n    /**\n     * fix\n     * https://github.com/lettuce-io/lettuce-core/issues/1201\n     * https://github.com/lettuce-io/lettuce-core/issues/1543\n     */\n    @Bean\n    public LettuceClientConfigurationBuilderCustomizer redisBuilderCustomizer() {\n        return builder -> builder.clientOptions(\n                ClientOptions\n                        .builder()\n                        .protocolVersion(ProtocolVersion.RESP2)\n                        .build()\n        );\n    }\n}\n")))}d.isMDXComponent=!0}}]);