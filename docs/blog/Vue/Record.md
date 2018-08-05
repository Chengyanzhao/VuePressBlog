# Vue问题记录

## 部署

### 浏览器不支持Promise

Vue项目打包上线测试时，部分老旧浏览器(主要是IE9)会报错：
::: warning
Unhandled promise rejection ReferenceError: “Promise”未定义
:::

* 原因

项目使用`Promise`，而浏览器未支持。

* 解决办法

使用`Promise`polyfill

安装`babel-polyfill`模块，并在项目`main.js`中引用

``` shell
$ npm i babel-polyfill -S
```

``` javascript
import 'babel-polyfill'
import Vue from 'Vue'
// other codes
```