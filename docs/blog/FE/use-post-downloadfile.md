# 使用POST请求下载文件

在进行前端开发时，经常会遇到实现下载文件的需求。  
对于普通需求，我们可以拿到url而后通过浏览器的能力去下载，相当于在浏览器地址栏输入一个Url来下载。  
若需要在下载时传递参数，一般情况下直接在url后加qs即可：`http://xx.com/download?playform=macOS`。  
但如果参数特别长，如需要传递GeoJSON数据时，由于url长度限制，这种方式不可取，所以需要进行一个POST请求，而后下载文件。

这里有两种方式实现POST下载文件：

- 使用Blob
- 使用WebAPI - Form实现

## 利用Blob实现

利用Blob方式实现Post下载文件，套路是这样的：

1. 获取Blob类型的响应数据
2. 将Blob转为url
3. 利用`a`标签和上一步得到的url实现下载。

下面是一个例子：

``` js
// deps: axios https://github.com/axios/axios
const url = '/download'
function download(url,data){
  axios({
    method:'POST',
    url,
data,
responseType:'blob'
  })
}
```

## 如何获取Blob的响应结果

实际上，我们不应获取到结果再转换成Blob，而是在请求时设置我们需要相应数据的类型。我在另一片文章也简单写过这个内容，您可以[点击这里](/blog/WebAPI/XMLHttpRequest/#设置响应数据类型-responsetype)查看。  
所以在请求时，需要设置XMLHTTPRequest对象的responseType属性，当需要Blob时，这样设置即可：

``` js
request.responseType = 'blob'
```

如果您使用的是jQuery.ajax、axios等库，也不用担心，因为他们都是对`XMLHTTPResuest`的封装，他们必定会提供相应接口来设置这个参数。
