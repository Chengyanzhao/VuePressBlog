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

安装`babel-polyfill`模块，在项目`main.js`中引用，或者在webpack中配置。

``` bash
npm i babel-polyfill -S
```

``` js
import 'babel-polyfill'
import Vue from 'Vue'
// other codes
```

``` js
// webpack config
module.exports = {
  entry: {
    app: ['babel-polyfill', './app/js']
  }
}
```