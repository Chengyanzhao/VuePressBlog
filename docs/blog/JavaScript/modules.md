# 前言
转行前端也有个1年半了，但是nodejs后端也写，每写一个js文件总要写一些exports、module.exports的内容。前端方面使用vue+es6，也总要写一些export、export default。只知道是导出模块，以供其他地方引用，但一直没搞懂这些长得很类似的东西到底怎么回事。只知道照着用是不行滴，还是要搞懂原理、规范，才能用的更稳妥。闲话少续，直接开整。

## 模块化

模块化的思想就是模块随拿随用，不需修改。
举一个类似的例子。
在C#中，编写好的类其实就是一个.cs文件，其他位置如果想引用，直接在头部using xxx...即可。
而在前段中，各式各样开源的轮子、工具等，也需要这种方式去用，即从github或官网下载js文件放到项目中，然后不论是在页面中使用script标签引用，还是在es6模块，或是nodejs中，都可以使用。
拿页面script标签举例来说，需要引用后知道引用的对象变量名，比如jquery你需要知道$或jQuery，但这种方式明显在模块化中比较麻烦，如果变量冲突就很麻烦。
所以出现了一些规范，这样大家遵循这个规范去导出自己的轮子，消费者按照这些规范去引用轮子。

比如下面这段代码：
```javascript
// moment.js
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () { 'use strict';
// ...
})
```

## 常用规范

模块化开发的标准包含以下三个：

1. CommonJS. - NodeJs
2. CMD. - SeaJs
3. AMD. - RequireJs


知识点1：AMD/CMD/CommonJs是JS模块化开发的标准，目前对应的实现是RequireJs/SeaJs/nodeJs.

知识点2：CommonJs主要针对服务端，AMD/CMD主要针对浏览器端，所以最容易混淆的是AMD/CMD。（顺便提一下，针对服务器端和针对浏览器端有什么本质的区别呢？服务器端一般采用同步加载文件，也就是说需要某个模块，服务器端便停下来，等待它加载再执行。这里如果有其他后端语言，如java，经验的‘玩家’应该更容易理解。而浏览器端要保证效率，需要采用异步加载，这就需要一个预处理，提前将所需要的模块文件并行加载好。）

知识点3 : AMD/CMD区别，虽然都是并行加载js文件，但还是有所区别，AMD是预加载，在并行加载js文件同时，还会解析执行该模块（因为还需要执行，所以在加载某个模块前，这个模块的依赖模块需要先加载完成）；而CMD是懒加载，虽然会一开始就并行加载js文件，但是不会执行，而是在需要的时候才执行。

知识点4：AMD/CMD的优缺点.一个的优点就是另一个的缺点， 可以对照浏览。
                AMD优点：加载快速，尤其遇到多个大文件，因为并行解析，所以同一时间可以解析多个文件。
                AMD缺点：并行加载，异步处理，加载顺序不一定，可能会造成一些困扰，甚至为程序埋下大坑。

                CMD优点：因为只有在使用的时候才会解析执行js文件，因此，每个JS文件的执行顺序在代码中是有体现的，是可控的。
                CMD缺点：执行等待时间会叠加。因为每个文件执行时是同步执行（串行执行），因此时间是所有文件解析执行时间之和，尤其在文件较多较大时，这种缺点尤为明显。

知识点5：如何使用？CommonJs的话，因为nodeJs就是它的实现，所以使用node就行，也不用引入其他包。AMD则是通过`<script>`标签引入RequireJs，具体语法还是去看官方文档或者百度一下吧。CMD则是引入SeaJs。

## exports, module.exports, export, export default的区别

1. 归属不同模块规范
 - exports与module.exports是CommonJS中的模块规范
 - export与export default是ES6中的模块规范。

### CommonJS模块规范

Node应用由模块组成，采用CommonJS模块规范。

根据这个规范，每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

```javascript
(function(exports, require, module.exports, __filename, __dirname){
  // your module
  var foo = 'foo'
  // ...
  // 隔离作用域
  exports.foo = fool
})()
```

CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。

模块初始化时，module.exprts与exports指向同一个空对象。模块最终导出结果为module.exports。可以将module看成一个全局变量，而exports是一个局部变量。

```javascript
// xxx.js
var foo = 'foo'
module.exports === exports  // true

exports.foo = foo
module.exports === exports  // true

exports = foo  // 此操作改变exports的指针。
module.exports === exports  // false
```

### ES6模块规范

ES6使用export、Import来导出、导入模块。

```javascript
let foo = 'foo'
export { foo }

export { foo as bar}
```

```javascript
let foo = 'foo'
export default { foo }
```

相关链接：
CommonJS规范，http://javascript.ruanyifeng.com/nodejs/module.html
ES6 Module 的语法，http://es6.ruanyifeng.com/#docs/module