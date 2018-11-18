# Promise

Promise是异步变成的解决方案，旨在解决异步编程回调地狱的问题。  
Promise最早由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了`Promise`对象。在ES5中也有`polyfill`对其支持，所以不使用ES6的伙计也不用担心因浏览器兼容性而无法使用Promise。

## 关于Promise,promise,promises

* Promise: 代表Promise接口
* promise: 代表promise实例对象
* promises: 代表Promises规范

## 简介

Promise因异步而生，所以介绍Promise就以异步操作为入口。  
在Promise出现之前，如果我们需要依赖一个异步操作的结果进行下一个异步操作，比如嵌套的`ajax`请求，代码会写成这样：

```javascript
// 执行第一个异步请求
$.ajax({
  // options
  success:function(data1){
    // 获取结果，执行第二个异步请求
    $.ajax({
      // options
      data:data1,
      success:function(data2){
        // do something
      }
    })
  }
})
```

由于第二个请求的参数需要依赖第一个请求的结果，所以需要等到第一个请求返回结果时，才能在第一个请求的回调中构造第二个请求。
这样两个请求的代码就形成了嵌套。  
如果有n个这种依赖的请求，就需要嵌套n层代码，这样的代码乱成一团，不易维护。
这里有同学会提出，那我用同步请求如何？同步请求会阻塞代码执行，如果涉及到页面渲染，用户很有可能需要等到执行完成才能操作页面，极大的降低了用户体验，很可能与需求不符合，所非特殊情况不建议使用同步请求。

改用Promise：

```javascript
new Promise(resolve=>{
  $.ajax({
    // options
    success:function(data1){
      resolve(data1)
    }
  })
}).then(data1=>{
   $.ajax({
    // options
    data:data1,
    success:function(data2){
      resolve(data2)
    }
  })
}).then(data=>{
  // do something
})
```

使用Promise后我们把每个回调都拆分开，使用`then`将他们连接起来，代码逻辑更清晰。

## API

### Promise constructor

Promise构造函数接收两个参数，`resolve`和`reject`。  
`resolve`对应异步操作完成的函数，`reject`对应异步操作失败的函数。

```javascript
const promise = new Promise((resolve, reject)=>{
  const syncSuccess = true
  if(syncSuccess){
    const data = {}
    resolve(data)
  }else{
    reject(new Error('错误'))
  }
})

promise.then(data=>{
  // do something success
}).catch(error=>{
  // do something error
})
```

### Promise.all

### Promise.prototype.catch()

### Promise.prototype.finally()

### Promise.prototype.then()

### Promise.race()

### Promise.reject()

### Promise.resolve()

## 应用

## ES5实现

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

将代码改成下面这样可能会更好理解一些：

```js
try{
  Promise.reject('错误').catch(error=>{
    console.log(error)
  })
}catch(error){
  console.log('error')
}
```

所以在使用Promise时请慎重，不要试图使用`try/catch`去捕捉`reject`。

## Reference

1. [ECMAScript 6 入门 - Promise 对象 - 阮一峰](http://es6.ruanyifeng.com/#docs/promise#Promise-%E7%9A%84%E5%90%AB%E4%B9%89)
2. [MDN - Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)