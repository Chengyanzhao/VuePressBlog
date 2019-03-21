# Promise

Promise是异步编程的解决方案，旨在解决异步编程回调地狱的问题。  
Promise最早由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了`Promise`对象。在ES5中也有`polyfill`对其支持，所以不使用ES6的伙计也不用担心因浏览器兼容性而无法使用Promise。  
网上关于Promise的文章已经很多了，ES6的文档中也有详尽的说明，所以这篇文章不会讲关于API的一些东西，咱们来分析分析Promise使用中的一些问题。

## 关于Promise / promise / promises

网上文章中一般默认如下表示：

* Promise: 代表Promise接口
* promise: 代表promise实例对象
* promises: 代表Promises规范

## then方法返回值

在Promise的使用中，then方法会返回已下几类值：

1. promise对象
2. 同步值或undefined
3. 抛出一个同步错误

若返回同步值，Promise会将这个同步值包装成promise对象，作为下一个链式调用then中函数的参数。

``` js
Promise.resolve(()=>{
  return 1
}).then(result=>{
  console.log(result) // 1
})
```

若作为then参数的函数内部没有返回值，则then会隐式返回undefined。

``` js
Promise.resolve(()=>{
  // ...
}).then(result=>{
  console.log(result) // undefined
})
```

## 在循环中使用Promise

有些同学会在循环中使用Promise，像下面这样：

``` js
// I want to remove() all docs
db.allDocs({include_docs: true}).then(function (result) {
    result.rows.forEach(function (row) {
        db.remove(row.doc);
    });
}).then(function () {
    // I naively believe all docs have been removed() now!
});
```

写这段代码的目的是确保所有Doc都被移除后再执行最后一个then中的函数，但实时上，在执行最后一个then中的代码时，文档并不确保全部被删除。

因为第一个then中遍历结束后直接默认返回undefined，后面的then会直接执行，而此时doc的remove操作只是发起了任务，我们无法确定是否所有的删除任务是否都完成。

对于这种情况，有并行、串行两种方案：

**并行方案**

可以使用Promise.all处理多个promise，改造如下：

``` js
// I want to remove() all docs
db.allDocs({include_docs: true}).then(function (result) {
    return Promise.all(result.rows.map(function (row) {
        return db.remove(row.doc)
    }))
}).then(function (resultArr) {
    // I naively believe all docs have been removed() now!
})
```

**串行方案**

推荐使用[async](https://github.com/caolan/async)的[waterfall](https://caolan.github.io/async/docs.html#waterfall)方法来处理：

``` js
const async = require('async')
db.allDocs({ include_docs: true }).then(function (result) {
  return result.rows.map(function (row) {
    return function (callback) {
      db.remove(row.doc, () => {
        callback(null, row.doc._id)
      })
    }
  })
}).then(function (funArr) {
  return new Promise((resolve, reject) => {
    async.waterfall(funArr, (err, result) => {
      // all doc were removed now.
      resolve()
    })
  })
}).then(() => {
  // I naively believe all docs have been removed() now!
})
```

## catch

**1.链式调用中多次使用catch**

Promise中的catch可以在链式调用中多次出现，每个catch都会捕捉前面最近的异常，这样可以更灵活的捕获异常。

``` js
new Promise((resolve, reject) => {
    reject('fail')
}).then(() => {
    // ...
}).catch(err => {
    console.log(err) // fail
}).then(() => {
    // 即使前面发生错误，这里也会运行。
    throw 'fail 2'
}).catch(err => {
    // 只会捕捉前面then中的异常
    console.log(err) // fail 2
})
```

**2.在异步函数中抛出的错误不会被catch捕获到**

``` js
new Promise((resolve, reject) => {
  setTimeout(() => {
    throw 'Uncaught Exception!'
  }, 1000)
}).then(() => {
  // ...
}).catch((e) => {
  console.log(e) // 不会执行
})
```

**3.Promise对象抛出的错误不会传递到外层代码**

在阮老师的文章里有这么一段话：
> 跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。

在Promise外使用try/catch时，Promise抛出的异常不会被外层捕获，所以不要尝试在Promise外层捕获Promise发生的异常。

``` js
try{
  Promise.reject('错误')
}catch(error){
  console.log('error')
}
// Uncaught (in promise) 错误
```

**4.resolve()后的抛出的错误会被忽略**

``` js
new Promise((resolve, reject) => {
  resolve()
  throw 'Silenced Exception!'
}).catch(e => {
  console.log(e) // 不会执行
})
```

**最后，无论如何我要建议在使用Promise时一定添加catch捕捉异常，保证程序的健壮。**

## 使用Promise的polyfill时属于宏任务

如果在不支持Promise的环境中想要使用Promise，就需要用到polyfill。一些polyfill内部会用到setTimeout来实现Promises规范。

我们知道由js引擎发起的原生Promise任务为微任务，但使用上述polyfill时的Promise时，由于利用了setTimeout，此时的promise属于宏任务。

所以在使用polyfill要注意，否则代码的执行顺序可能会与预期不符。

## Promise坠落现象

请思考以下代码的输出结果：

``` js
Promise.resolve('foo').then(Promise.resolve('bar')).then(result=>{
  console.log(result)
})
```

如果你认为输出的事`bar`，那你就要重新看看Promise了，特别是回调函数中的返回值部分知识。

这里的输出结果是`bar`，因为给then传入的值并非一个函数，js引擎会将代码会理解为`then(null)`，导致前一个promise的结果产生的坠落的现象。

这里我们应该给then传入一个函数。

``` js
Promise.resolve('foo').then(()=>{
  return Promise.resolve('bar')
}).then(result=>{
  console.log(result) // bar
})
```

## Promise的缺点

1. 一旦执行，无法中断。

## Reference

1. [ECMAScript 6 入门 - Promise 对象 - 阮一峰](http://es6.ruanyifeng.com/#docs/promise#Promise-%E7%9A%84%E5%90%AB%E4%B9%89)
2. [MDN - Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
3. [谈谈使用promise时候的一些反模式](https://www.tuicool.com/articles/FvyQ3a)
4. [30分钟，让你彻底明白Promise原理](https://segmentfault.com/a/1190000009478377#articleHeader8)