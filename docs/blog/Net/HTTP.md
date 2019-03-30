# HTTP

HTTP对于网络交互来说是必不可少的，这不限于你是否是前端工程师，任何经常与网络请求打交道的程序员都应该掌握它。

然而对于我这种非CS科班专业出身的半吊子来说，虽然在前端开发中经常使用HTTP协议，但也只是会简单使用，对于他的理论知识并不了解，导致遇到问题只能去网上搜寻解决问题的办法。这导致我每次遇到问题时，只能根据过往的经验去猜测解决问题的办法，而无法准确定位问题，提出解决方案。正是由于对HTTP协议原理的知识的缺失，才导致我是一个面向搜索引擎的开发者，这种遇到问题稀里糊涂的状态很是让人崩溃，所以下定决心系统的学习一本书，以弥补自己的无知。

在本章内容中我会记载今后的学习中遇到的HTTP相关知识，补充HTTP相关知识。这是我学习的check，也希望能帮助渴望学习相关知识的同学。

## 1. HTTP协议

1. **HTTP(HyperText Transfer Protocol)**：超文本传输协议。
2. HTTP协议的版本
    - HTTP/1.0：1996年5月，HTTP正式作为标准被公布，版本被命名为HTTP/1.0，记载于RFC1945。
    - HTTP/1.1：1997年1月，HTTP/1.1公布，它也是目前主流的HTTP协议版本，当初的标准是RFC2068，之后发布的修订版RFC2616。这也是当前被广泛应用的版本，本次学习也是基于HTTP1.1版本。
    - HTTP/2：最初命名为HTTP/2.0，2015年5月已RFC7540正式发表，只用于https://的网址。HTTP/2 采用了新的方法来编码、传输客户端——服务器间的数据。
3. HTTP协议基于TCP/IP协议族。TCP协议是双向通道，HTTP协议在TCP协议基础上规定了Request-Response的模式。

## 2. HTTP报文结构

请求报文：

![请求报文结构.png](https://i.loli.net/2019/03/30/5c9f8c40bc9c1.png)

响应报文：

![响应报文结构.png](https://i.loli.net/2019/03/30/5c9f8c4190bb3.png)

## 3. URI和URL

- URI(Uniform Resource Identifier)： 统一资源标识符。
- URL(Uniform Resource Locator)：统一资源定位符。

URI是某个协议方案表示的资源的定位标识符，用于标识资源。而URL表示资源的地点，用于定位资源。**URL是URI的子集**

比如我们连接mongodb数据库使用uri：`mongodb://username:password@url:port/database`

比如我们在浏览器中输入的url：`www.github.com`

## 4. 方法 Methods

1. GET：语义约定获取资源，使用GET的请求应该只被用于获取数据。通过浏览器地址访问产生的都是GET方法。
2. POST：语义约定更新资源，用于将实体提交到指定的资源，通常导致状态或服务器上的副作用的更改。
3. HEAD：HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体。
4. PUT：语义约定用于添加资源。
5. DELETE：语义约定用于删除资源。
6. CONNECT：建立一个到由目标资源标识的服务器的隧道，多用于HTTPS和WebSocket。
7. OPTIONS：用于描述目标资源的通信选项。
8. TRACE：沿着到目标资源的路径执行一个消息环回测试。
9. PATCH：用于对资源应用部分修改。

更多信息请查看[规范](https://tools.ietf.org/html/rfc7231#section-4)

## 5. 状态码 Status Code

- 1xx：临时回应，表示客户端请继续。
- 2xx：请求成功。
    - 200 OK：请求成功。
- 3xx：请求目标有变化。
    - 301 Moved Permanently：目标永久性转移，下次别来了。
    - 302 Found：目标临时性转移。
    - 304 Not Modified：客户端缓存。客户端本地已经有了缓存版本，并且在Request中告知服务端。服务端通过时间或者tag发现没有更新的时候，就会返回一个不含body的304状态。
- 4xx：客户端请求错误。
    - 401 Unauthorized：当前请求需要用户验证。
    - 403 Forbidden：无权限。
    - 404 Not Found：请求资源不存在。
- 5xx：服务端错误
    - 500 Internal Server Error：服务端错误。
    - 503 Service Unavailable：服务端暂时性错误，可以一会再试。

上面只列部分状态码，[点击这里](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)查看全部状态码。

## 6. 首部字段 Head

HTTP首部字段可以看做是一系列键值对，实际上HTTP首部字段也是一种数据，我们可以自定义键和值，不过在HTTP规范中规定了一些特殊的首部字段。

常用请求首部字段

| Request Header | 规定 |
| - | - |
| Accept | 客户端接收的格式 |
| Accept-Encoding | 客户端接收的编码方式 |
| Accept-Language | 客户端接收的语言，用于服务端判断多语言 |
| Cache-Control | 控制缓存的时效性 |
| Connection | 连接方式，如果是keep-alive，且服务端支持，则会复用连接 |
| Host | HTTP访问使用的域名 |
| If-Modified-Since | 上次访问时的更改时间，如果服务器认为此时间后没有更新，则会给出304响应 |
| If-None-Match | 上次访问时使用的E-Tag，通常是页面的信息摘要，这个比更改时间更准确一些 |
| User-Agent | 客户端标识 |
| Cookie | Cookie |

常用响应首部字段

| Response Header | 规定 |
| - | - |
| Cache-Control | 缓存控制，用于通知各级缓存保存的时间，例如max-age=0，标识不要缓存 |
| Connection | 连接类型，Keep-Alive表示复用连接 |
| Content-Ecoding | 内容编码方式，通常是gzip |
| Content-Length | 内容的长度，有利于浏览器判断内容是否已经结束 |
| Content-Type | 内容类型 |
| Date | 当前服务器日期 |
| ETag | 页面的信息摘要，用于判断是否需要重新到服务端取回页面 |
| Expries | 过期时间，用于判断下次请求是否需要到服务端取回页面 |
| Keep-Alive | 保持连接不断时需要的一些信息，如timeout=5, max=100 |
| Last-Modified | 页面上次修改的时间 |
| Server | 服务端软件的类型 |
| Set-Cookie | 设置cookie |
| Via | 服务端的请求链路 |

更多首部字段，可在[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)、[wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)、[rfc4229](https://tools.ietf.org/html/rfc4229)查看。

### Content-Type

Content-Type常用类型：

- application/json
- application/x-www-form-urlencoded
- multipart/form-data
- text/html

## 7. TCP/IP

TCP/IP协议族按层次分别分为以下4层：

- 应用层：决定向用户提供应用服务时通信的活动，如FTP、DNS、HTTP。
- 传输层：对应用层提供两台计算机之前的数据传输，如TCP、UDP协议。
- 网络层：处理在网络上流动的数据包。数据包是网络传输的最小单位，网络层起到的作用就是选择传输路线。
- 链路层：用来处理连接网络的硬件部分。

### TCP/IP通信传输流

![TCP:IP通信传输流.png](https://i.loli.net/2019/03/31/5c9f9ffaa2862.png)

### 各协议与HTTP协议的关系

![各协议之间的关系.png](https://i.loli.net/2019/03/31/5c9f9ffad86c7.png)

## 8. HTTPS

HTTP协议虽然好用，但在安全方面有以下不足：

- 通信使用明文，内容可能会被窃听。
- 不验证通信方的身份，有可能遭遇伪装。
- 无法证明报文的完整性，有可能遭到篡改。

为防止内容被窃听，产生两种加密方式：

1. 针对通信的加密
2. 针对内容的加密

HTTPS即时针对通信的加密。  

HTTPS并不是新的协议，而是在HTTP协议与SSL(Secure Socket Layer，安全套接字层)或TSL(Transport Layer Security，安全层传输协议)的组合使用，加密通信，以防信息被窃听。
另外HTTP

HTTPS有两个作用，一是确定请求的目标服务器身份，二是保证传输的数据不会被网络中间节点窃听或者篡改。

关于HTTPS的标准，请查看[rfc2818](https://tools.ietf.org/html/rfc2818)

## 9. HTTP2

HTTP2是HTTP1.1的升级版本，目标是改善用户在使用Web时的速度体验。

HTTP2最大的改进有两点：

- 支持服务端推送：服务端推送能在客户端发送第一个请求到服务端前，提前把一部分内容推送给客户端，放入缓存中。
- 支持TCP连接复用：使用同一个TCP连接传输多个HTTP请求，避免多次TCP连接开销。

关于HTTP2的标准，请查看[rfc7540](https://tools.ietf.org/html/rfc7540)

## 10. 学习资源推荐

1. 《图解HTTP》【日】上野宣 著，于均良 译。
2. [HTTP | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)