# 阿里云oss - 文件上传

* 写在前面

阿里云oss的各种sdk，都是对它的API进行的封装。所以如果我们直接调用API时出错，却又不知道哪里出问题时，可以直接阅读sdk的源码，找到问题所在。

## 1 Authorization的计算方式

首先贴一下[阿里云oss官网](https://help.aliyun.com/document_detail/31951.html?spm=5176.doc31950.6.842.KmlCNR)贴出的签名计算方式：

```javascript
Authorization = "OSS " + AccessKeyId + ":" + Signature
Signature = base64(hmac-sha1(AccessKeySecret,
            VERB + "\n"
            + Content-MD5 + "\n" 
            + Content-Type + "\n" 
            + Date + "\n" 
            + CanonicalizedOSSHeaders
            + CanonicalizedResource))
```
通过计算方法可以看出Authorization是由四部分组成：
1. 字符串`OSS `(注意OSS后面有一个空格)
2. AccessKeyId，也就是oss Bucket的用户名。可以在OSS控制台 - 对象存储OSS - 概览，在页面的右侧即可看到AccessKey选项，点进去可以查看。
3. 字符串`:`
4. Signature签名，这里再贴一下阿里云oss官网给出的计算说明：

  - AccessKeySecret 表示签名所需的密钥
  - VERB表示HTTP 请求的Method，主要有PUT，GET，POST，HEAD，DELETE等
  - \n 表示换行符
  - Content-MD5 表示请求内容数据的MD5值，对消息内容（不包括头部）计算MD5值获得128比特位数字，对该数字进行base64编码而得到。该请求头可用于消息合法性的检查（消息内容是否与发送时一致），如”eB5eJF1ptWaXm4bijSPyxw==”，也可以为空。详情参看RFC2616 Content-MD5
  - Content-Type 表示请求内容的类型，如”application/octet-stream”，也可以为空
  - Date 表示此次操作的时间，且必须为GMT格式，如”Sun, 22 Nov 2015 08:16:38 GMT”
  - CanonicalizedOSSHeaders 表示以 x-oss- 为前缀的http header的字典序排列
  - CanonicalizedResource 表示用户想要访问的OSS资源

　　这里的前几项相信大家都可以看懂，只是后面的CanonicalizedOSSHeaders 、CanonicalizedResource 有些迷惑，不知道具体的规则，真正使用时会发现按照上述计算方式得出的签名，使用时会被oss的服务器拒绝，返回签名错误。当初这里也困扰了我很长时间，下面就写一下这里到底要如何计算。


**例子**

这里拿object的put API举例说明：

 - put文件的[官方api](https://help.aliyun.com/document_detail/31978.html?spm=5176.doc31947.6.869.1e7i7i)
 - 请求工具[Postman](https://www.getpostman.com/)
 - 上传文件 aa.txt
```http
PUT /ObjectName HTTP/1.1
Content-Length：ContentLength
Content-Type: ContentType
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue
```
**步骤**
**1.生成Signature之前的参数**
```http
VERB: "post"
Content-MD5: ""  //如果没有MD5可以为空字符串
Content-Type: "text/plain"
Date: "Tue, 26 Sep 2017 07:10:15 GMT"  //GMT格式时间
CanonicalizedOSSHeaders: ["x-oss-date:Tue, 26 Sep 2017 07:10:15 GMT","x-oss-user-agent:aliyun-sdk-js/4.10.0 Chrome 60.0.3112.113 on Windows 10 64-bit"]
CanonicalizedResource: "/bucket/aa.txt"  //bucket为你的bucket名称
```
上面的CanonicalizedOSSHeaders实际上是一个数组，第一个元素为x-oss-date，值与Date一样，后面的x-oss-user-agent是从oss-sdk源码上拔下来的，可以直观看出包含了sdk、浏览器版本、系统版本等信息。

**2.将前面的参数拼接成一个字符串**
从Signature的规则中，每个参数后面都要加一个换行符，从而组成一个字符串。我们先将以上参数放在一个数组中。(CanonicalizedOSSHeaders有两项则在数组中有两个元素，这里需要注意)
```javascript
0 "PUT"
1 ""
2 "text/plain"
3 "Tue, 26 Sep 2017 07:10:15 GMT"
4 "x-oss-date:Tue, 26 Sep 2017 07:10:15 GMT"
5 "x-oss-user-agent:aliyun-sdk-js/4.10.0 Chrome 60.0.3112.113 on Windows 10 64-bit"
6 "/chengyanzhao/aa.txt"
```
然后使用array的join('\n')方法合并成一个字符串
```
"PUT

text/plain
Tue, 26 Sep 2017 07:10:15 GMT
x-oss-date:Tue, 26 Sep 2017 07:10:15 GMT
x-oss-user-agent:aliyun-sdk-js/4.10.0 Chrome 60.0.3112.113 on Windows 10 64-bit
/chengyanzhao/aa.txt"
```
这样Authorization = "OSS " + AccessKeyId + ":" + Signature中的计算参数我们就有了，套入base64和hmac-sha1计算方式即可得出Authorization。
**3.发送请求**
headers
![这里写图片描述](http://img.blog.csdn.net/20170926153113090?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXE0NTEzNTQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
body
![这里写图片描述](http://img.blog.csdn.net/20170926153205574?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXE0NTEzNTQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
response
![这里写图片描述](http://img.blog.csdn.net/20170926153604051?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXE0NTEzNTQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

另外这里有一个demo，是在阿里云论坛上找到的，为了方便学习我在[网盘](http://pan.baidu.com/s/1c13M5wc)中分享，密码:9d54。

# 2 修改文件的元数据
## 2.1 修改文件的下载名
首先要了解，控制文件的下载名，其实就是控制headers中的Content-Disposition。通过修改它的值来实现修改文件下载名。

修改文件下载名可分两种方式：

1. 上传时设置
2. 上传后设置

这里使用js-oss-sdk来说明。

**1.上传时设置**
阿里oss提供了多种上传方式，但每种上传方法都接受一个options参数，这个参数即可设置文件的元数据。
```javascript
headers:{
  'Content-Disposition': 'attachment;filename=' + encodeURI(fileName)
}
```
**2.上传后设置**
文件上传后修改文件的下载名，其实就是使用阿里提供的接口修改文件的元数据中的Content-Disposition。
在js-oss-sdk中，使用copy方法设置文件的元数据
```javascript
// key为oss中文件的key，也就是在oss控制台中现实的文件名。
client.copy(key, key, {
  headers:{
    'Content-Disposition': 'attachment;filename=' + encodeURI(fileName)
  }
})
```


## 2.2 修改其他元数据
了解本质，oss的文件元数据信息都是通过headers传输，所以这里还是通过copy方法，将新的元数据放在options参数中，与上面的修改文件后修改文件下载名用法相同，这里就不多赘述。