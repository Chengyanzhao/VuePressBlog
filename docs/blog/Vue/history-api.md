# vue-router的history模式处理

express中使用connect-history-api-fallback 中间件
1.安装connect-history-api-fallback 中间件
`$ npm i connect-history-api-fallback -S`
2.在app.js种引用

``` javascript
// ...
const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()
// ...
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 配置history中间件
app.use(history({
  verbose: true,
  index: '/',
  rewrites: [{
    from: /\/textAPI1/,
    to: '/textAPI1'
  }, {
    from: /\/textAPI2/,
    to: '/textAPI2'
  }]
}));
app.use('/', index);
app.use('/users', users);
// ...
```
**注意**
1. 使用history中间件的位置，是在挂在路由之前。
2. 只需为GET请求挂载history中间件。

[github](https://github.com/bripkens/connect-history-api-fallback)