---
title: 'Spring Boot 常用异常错误处理方式'
sidebar_label: 'Spring Boot 常用异常错误处理方式'
---

## 通过 @ControllerAdvice和@ExceptionHandler 注解来处理全局异常内容以控制特定Controller和异常类型

> @ControllerAdvice注解是控制全局异常最灵活的一种方式
>

### 自定义整个JSON错误响应

```java
@ControllerAdvice
public class GlobalExceptionHandler {
 
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<CustomErrorResponse> customHandleCustomException(Exception ex) {
 
        CustomErrorResponse errors = new CustomErrorResponse();
        errors.setTimestamp(LocalDateTime.now());
        errors.setError(ex.getMessage());
        errors.setStatus(HttpStatus.NOT_FOUND.value());
 
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
 
	//...
}
```

### 重写特定异常的状态码

```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ValidateException.class)
    public void handleControllerException(HttpServletResponse response) throws IOException {
        response.sendError(HttpStatus.BAD_REQUEST.value());
    }
}
```

### 配合 ResponseEntityExceptionHandler 类用于重写Spring已经实现的异常处理

> Spring为我们提供了一个通用的异常处理类`ResponseEntityExceptionHandler` 内部同样是用`@ExceptionHandler`注解集成了一些默认的异常处理 通过`handleException()`  方法判断异常类型然后交由`handleXXX()` 开头的方法处理 所以我们继承之后重写相应的方法就可以了。
>

```java
@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    /**
     * 处理@RequestParam错误, 即参数不足
     * @return
     */
    @Override
    protected ResponseEntity<Object> handleMissingServletRequestParameter(MissingServletRequestParameterException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {

        return new ResponseEntity<>(new MatrixResponse(ErrorCode.ARG_INVALID), status);
    }
}
```

如果想知道Spring提前帮我们提前集成了哪些异常处理可以看`ResponseEntityExceptionHandler`的实现

```java
package org.springframework.web.servlet.mvc.method.annotation;

//...
public abstract class ResponseEntityExceptionHandler {

	/**
	 * Provides handling for standard Spring MVC exceptions.
	 * @param ex the target exception
	 * @param request the current request
	 */
	@ExceptionHandler({
			HttpRequestMethodNotSupportedException.class,
			HttpMediaTypeNotSupportedException.class,
			HttpMediaTypeNotAcceptableException.class,
			MissingPathVariableException.class,
			MissingServletRequestParameterException.class,
			ServletRequestBindingException.class,
			ConversionNotSupportedException.class,
			TypeMismatchException.class,
			HttpMessageNotReadableException.class,
			HttpMessageNotWritableException.class,
			MethodArgumentNotValidException.class,
			MissingServletRequestPartException.class,
			BindException.class,
			NoHandlerFoundException.class,
			AsyncRequestTimeoutException.class
		})
	@Nullable
	public final ResponseEntity<Object> handleException(Exception ex, WebRequest request) throws Exception {
		HttpHeaders headers = new HttpHeaders();

		if (ex instanceof HttpRequestMethodNotSupportedException) {
			HttpStatus status = HttpStatus.METHOD_NOT_ALLOWED;
			return handleHttpRequestMethodNotSupported((HttpRequestMethodNotSupportedException) ex, headers, status, request);
		}
		else if (ex instanceof HttpMediaTypeNotSupportedException) {
			HttpStatus status = HttpStatus.UNSUPPORTED_MEDIA_TYPE;
			return handleHttpMediaTypeNotSupported((HttpMediaTypeNotSupportedException) ex, headers, status, request);
		}
		else if (ex instanceof HttpMediaTypeNotAcceptableException) {
			HttpStatus status = HttpStatus.NOT_ACCEPTABLE;
			return handleHttpMediaTypeNotAcceptable((HttpMediaTypeNotAcceptableException) ex, headers, status, request);
		}
		else if (ex instanceof MissingPathVariableException) {
			HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
			return handleMissingPathVariable((MissingPathVariableException) ex, headers, status, request);
		}
		else if (ex instanceof MissingServletRequestParameterException) {
			HttpStatus status = HttpStatus.BAD_REQUEST;
			return handleMissingServletRequestParameter((MissingServletRequestParameterException) ex, headers, status, request);
		}
		else if (ex instanceof ServletRequestBindingException) {
			HttpStatus status = HttpStatus.BAD_REQUEST;
			return handleServletRequestBindingException((ServletRequestBindingException) ex, headers, status, request);
		}
		else if (ex instanceof ConversionNotSupportedException) {
			HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
			return handleConversionNotSupported((ConversionNotSupportedException) ex, headers, status, request);
		}
		else if (ex instanceof TypeMismatchException) {
			HttpStatus status = HttpStatus.BAD_REQUEST;
			return handleTypeMismatch((TypeMismatchException) ex, headers, status, request);
		}
		else if (ex instanceof HttpMessageNotReadableException) {
			HttpStatus status = HttpStatus.BAD_REQUEST;
			return handleHttpMessageNotReadable((HttpMessageNotReadableException) ex, headers, status, request);
		}
		else if (ex instanceof HttpMessageNotWritableException) {
			HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
			return handleHttpMessageNotWritable((HttpMessageNotWritableException) ex, headers, status, request);
		}
		else if (ex instanceof MethodArgumentNotValidException) {
			HttpStatus status = HttpStatus.BAD_REQUEST;
			return handleMethodArgumentNotValid((MethodArgumentNotValidException) ex, headers, status, request);
		}
		else if (ex instanceof MissingServletRequestPartException) {
			HttpStatus status = HttpStatus.BAD_REQUEST;
			return handleMissingServletRequestPart((MissingServletRequestPartException) ex, headers, status, request);
		}
		else if (ex instanceof BindException) {
			HttpStatus status = HttpStatus.BAD_REQUEST;
			return handleBindException((BindException) ex, headers, status, request);
		}
		else if (ex instanceof NoHandlerFoundException) {
			HttpStatus status = HttpStatus.NOT_FOUND;
			return handleNoHandlerFoundException((NoHandlerFoundException) ex, headers, status, request);
		}
		else if (ex instanceof AsyncRequestTimeoutException) {
			HttpStatus status = HttpStatus.SERVICE_UNAVAILABLE;
			return handleAsyncRequestTimeoutException((AsyncRequestTimeoutException) ex, headers, status, request);
		}
		else {
			// Unknown exception, typically a wrapper with a common MVC exception as cause
			// (since @ExceptionHandler type declarations also match first-level causes):
			// We only deal with top-level MVC exceptions here, so let's rethrow the given
			// exception for further processing through the HandlerExceptionResolver chain.
			throw ex;
		}
	}

  //..
}
```

## 通过继承 BasicErrorController 来处理响应和/error

> 主要用于处理返回结构  场景主要在改变返回的响应内容也可以根据内容类型添加特定的处理比如`text/plain`。 默认处理text/html的
>

### 用法

```java
@Component
public class MyErrorController extends BasicErrorController {
    public MyErrorController(ErrorAttributes errorAttributes) {
        super(errorAttributes, new ErrorProperties());
    }

    /**
     * 覆盖默认的Json响应
     */
    @Override
    public ResponseEntity<Map<String, Object>> error(HttpServletRequest request) {
        Map<String, Object> body = getErrorAttributes(request, getErrorAttributeOptions(request, MediaType.ALL));
        HttpStatus status = getStatus(request);

        //输出自定义的Json格式
        body.put("version", "1.0");

        return new ResponseEntity<Map<String, Object>>(body, status);
    }

    /**
     * 覆盖默认的HTML响应
     */
    @Override
    public ModelAndView errorHtml(HttpServletRequest request, HttpServletResponse response) {
        //请求的状态
        HttpStatus status = getStatus(request);
        response.setStatus(getStatus(request).value());

        Map<String, Object> model = getErrorAttributes(request, getErrorAttributeOptions(request, MediaType.TEXT_HTML));
        ModelAndView modelAndView = resolveErrorView(request, response, status, model);
        response.setStatus(status.value());
        //指定自定义的视图
        return (modelAndView != null) ? modelAndView : new ModelAndView("error", model);
    }
}
```

### 注意

不鼓励在`BasicErrorController` 里处理返回状态码具体请查看Github [issues](https://github.com/spring-projects/spring-boot/issues/18952#issuecomment-557612055)

## 通过继承`DefaultErrorAttributes`来处理错误属性信息

> `BasicErrorController` 控制器利用 `DefaultErrorAttributes` 来获取错误页面的属性，可以根据业务场景选择在哪一层处理。
>

```java
@Component
public class ExtendedErrorAttributes extends DefaultErrorAttributes {
    @Override
    public Map<String, Object> getErrorAttributes(WebRequest webRequest, ErrorAttributeOptions options) {
        final Map<String, Object> errorAttributes =
				super.getErrorAttributes(webRequest, options);
				final Throwable throwable = super.getError(webRequest);
        Throwable cause = throwable.getCause();
        if (cause != null) {
            Map causeErrorAttributes = new HashMap<>();
            causeErrorAttributes.put("exception", cause.getClass().getName());
            causeErrorAttributes.put("message", cause.getMessage());
            errorAttributes.put("cause", causeErrorAttributes);
        }
        return errorAttributes;
    }
}
```

## 自定义异常@ResponseStatus注解自定义状态码和返回信息

```java
/**
* 当发生MyResourceNotFoundException异常时，返回HttpStatus.NOT_FOUND对应的状态码：404
*/
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class MyResourceNotFoundException extends RuntimeException {
    public MyResourceNotFoundException() {
        super();
    }
    public MyResourceNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
    public MyResourceNotFoundException(String message) {
        super(message);
    }
    public MyResourceNotFoundException(Throwable cause) {
        super(cause);
    }
}
```

## 利用异常类ResponseStatusException抛出自定义状态码和异常信息

```java
@GetMapping("weixin/mp/jsapi/signature")
public ResponseEntity getAccessToken(String url) {
    try {
        return ResponseEntity.ok(mpService.createJsapiSignature(url));
    } catch (WxErrorException e) {
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
    }
}
```