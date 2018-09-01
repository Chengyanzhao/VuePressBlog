# jsonp

大神的回答
> 很简单，就是利用`<script>`标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的。当需要通讯时，本站脚本创建一个`<script>`元素，地址指向第三方的API网址，形如：     `<script src="http://www.example.net/api?param1=1&param2=2"></script>`     并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。     第三方产生的响应为json数据的包装（故称之为jsonp，即json padding），形如：     callback({"name":"hax","gender":"Male"})     这样浏览器会调用callback函数，并传递解析后json对象作为参数。本站脚本可在callback函数里处理所传入的数据。

[JSONP 的工作原理是什么？ - 贺师俊的回答 - 知乎](https://www.zhihu.com/question/19966531/answer/13502030)

jsonp用来解决跨域请求
比如我们需要从域`a.com`获取一个json对象`{ foo: 'foo' }`
但我们的网站是`b.com`，如果直接请求，浏览器会报错:`cross...`
此时有3种方法解决跨域

- CROS
- jsonp
- 代理

详情见文章[跨域解决方案](http://chengyanzhao.github.io)

这里详解jsonp
## 关键点

1. script可跨域
2. javascript变量提升

## 原理

我们知道在html中可使用`<script>`标签来引用任何域的外部脚本
jsonp就是利用这一特点来实现跨域。
这里我们需要从`b.com`来获取对象`{ foo: 'foo' }`
如何利用`<script>`的跨域呢？
我们需要后端返回这样一个字符串`"func({"foo":"foo"})"`
作为脚本返回前端，则是调用`func`方法，参数为`{"foo":"foo"}`
所以在前端需要定义一个func函数。这里函数名可以前端来约定，将函数名作为get请求的参数。

```javascript
function func (data){
  console.log(data)
}
```
这样当我们的script脚本去后端进行请求，后端返回脚本，浏览器运行脚本，调用func函数，并将实际我们需要的数据作为func函数的参数传入，
这样就可以在func函数内获取实际需要的数据了。


我们来模拟一下。

后端

```javascript
// 后端与普通的请求写法差别不大，只有两个区别
// - 返回对象需要转为字符串，并嵌套在"[function name]([json data string])
// - 返回方式不能为json对象，需要改为文本，在express中使用send方法即可。
router.get('testJsonp', (req, res, next) => {
  const data = { foo: 'foo' }
  // 获取前端约定的函数名
  const { callback } = req.query
  let resString = `${callback}(${JSON.stringify(data)})`
  res.send(resString)
  // 若callback参数为'fff'，这里返回结果为字符串"fff({"foo":"foo"})"
})
```

前端

```html
<body>
  <script>
    // 创建script元素，并负值src属性，append到body中。
    // url既是普通的get请求。func为约定的函数名。
    let url = 'http://localhost:3000/jsonp/testJsonp?callback=func'
    let script = document.createElement('script')
    script.src = url
    document.body.appendChild(script)
    function func(data) {
      console.log(data)  // { foo: 'foo' }
    }
  </script>
</body>
```

在浏览器运行后，上面的代码其实是这样的

```html
<body>
  <script>
    function func(data) {
      console.log(data)  // { foo: 'foo' }
    }
  </script>
  <script>
    func({ foo: 'foo' })
  </script>
</body>
```

一个npm jsonp package
[jsonp](https://github.com/webmodules/jsonp)

## 小结

一门技术被广泛应用总有它的道理，但这种畸形的办法我真心喜欢不起来。我的原则是除非逼不得已，否则不使用。以下两点原因：

1. 利用漏洞或是历史遗留问题而产生的解决方案虽然实用，而且这个漏洞并不会修复(会无限兼容早期ESCMA)，但这并不是设计的初衷。w3c提出了CORS的规范，其实就是对http头的规范，而这种利用`script`漏洞的方式明显有违CORS的初衷。由于前端这种不受强制约束的规范，这种漏洞短期内是无法解决的，但我还是建议避免使用。
2. 由上面的jsonp原理看到，使用jsonp也需要服务端的支持，说明大部分这种情况是拥有服务端的控制权，既然如此不如采用CORS，更加规范。

* 引用知乎用户的评论

[lyrieek](https://www.zhihu.com/question/19966531)

> 真无语，你觉得jsonp用起来很优雅？这是w3c提出来的规范？这不能叫“历史遗迹”，应该叫做“蹩脚的设计”，还什么互联网的精髓，这就是script标签的一个BUG，是ajax的严重设计缺陷，是Access-Control-Allow-Origin白名单的安全漏洞。server不能借此禁止跨域，client也不方便请求，形同虚设的header，毫无意义的跨域限制，除了增加DOM操作，浪费几个byte的内存，耗费页面索引时间，没有任何意义。xhr2就是w3c对ajax跨域问题的遮羞布

> 是啊，本来就应该一句话就禁了的，我还得在server专门做点逻辑，那我写header还有个屁用，jsonp还“基于get的一种实现”，js发不了的请求，HTML却可以，业务数据交互这种事情还交给HTML，这就像后台不方便，让js去操作数据库一样，不搞笑吗？