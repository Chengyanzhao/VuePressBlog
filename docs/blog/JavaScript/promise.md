# Promise

Promise是异步编程的解决方案，旨在解决异步编程回调地狱的问题。  
Promise最早由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了`Promise`对象。在ES5中也有`polyfill`对其支持，所以不使用ES6的伙计也不用担心因浏览器兼容性而无法使用Promise。  
网上关于Promise的文章已经很多了，ES6的文档中也有详尽的说明，所以这边文章不写这些已经被大家吃的很透的内容。咱们来分析分析Promise使用中的一些问题。

## 关于Promise,promise,promises

网上文章中一般默认如下表示：

* Promise: 代表Promise接口
* promise: 代表promise实例对象
* promises: 代表Promises规范

## 使用中的问题

首先总结下Promise的几个特点：

1. Promise可将异步过程包装，多个promise可以像管道一样连接，写法更优雅。
2. 在ES6中，Promise可配合`await/async`将异步过程写成同步代码。（注意，此时主线程并没有被占用。）
3. Promise中可以灵活运用`catch`，`catch`后同样返回`promise`对象，可继续执行`then`。
4. Promise一旦创建就会立即执行，无法取消。


## try/catch与Promise

在使用Promise与try/catch时请慎重。  
在阮老师的文章里有这么一段话：
> 跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。

如果在promise中抛出异常，异常是不会像外层代码传递的，只会向promise后的catch传递。看下面代码：

```js
try{
  Promise.reject('错误')
}catch(error){
  console.log('error')
}
```

如果你在浏览器中运行这段代码，浏览器会报错`Uncaught (in promise) 错误`。  
疑问来了，为什么我已经将`reject`放在`try`块中，而捕捉不到？  
实际上**拒绝是发生在未来**，而不是执行`Promise.reject('错误')`时。所以当这行代码执行完毕，`try`块内的代码已正常执行完成，所以不会进入`catch`。  
所以在使用Promise时请慎重，不要试图使用`try/catch`去捕捉`reject`。

## Reference

1. [ECMAScript 6 入门 - Promise 对象 - 阮一峰](http://es6.ruanyifeng.com/#docs/promise#Promise-%E7%9A%84%E5%90%AB%E4%B9%89)
2. [MDN - Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)