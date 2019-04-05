# XMLHttpRequest

在现代浏览器中都内置了`XMLHttpRequest`对象，用于进行ajax交互。  
大家使用的jQuery.ajax、axios等库都是对`XMLHttpRequest`的包装，这样使用起来更方便。  
但是需要注意，Fetch并不是对`XMLHttpRequest`的封装，而是与它平级，都是WebAPI。

## 设置响应数据类型:responseType

在实现前端使用POST请求下载文件时，需要取到Blob类型的结果，由此好奇如axios等上层类库是如何将响应结果包装为Blob的。

在axios中发现是这样设置的：

``` js
// axios: /lib/adapters.js
// line: 133
request.responseType = config.responseType;
```

由此可见，响应数据的类型并不是由axios这种上层应用库去设置，而是在XMLHttpRequest层面对实例的responseType属性设置。