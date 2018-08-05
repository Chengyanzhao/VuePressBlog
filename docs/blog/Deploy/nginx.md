# nginx

nginx大家应该都不会陌生，作为一个高性能的HTTP和反向代理服务器，nginx被许多大厂使用。作为一个伪前端，必然也得懂点，不然没法出去要饭吃。
## 安装
nginx现在已经又跨平台的多版本，由于所在公司多使用windows server，所以先写nginx for windows，后期接触到再将其他平台的补全。

### nginx for Windows
1. 下载Windows版本的nginx,[下载地址](http://nginx.org/en/download.html)，直接将压缩包内容解压至安装目录即可。
2. 配置环境变量。将nginx根目录路径添加至系统环境变量。

* 配置
配置文件所在位置为`nginx根目录/`
可以参考这里http://www.nginx.cn/76.html

* 使用

无论是在Windows平台还是Linux平台，请直接用命令使用nginx，避免引起不必要的麻烦，浪费时间。

## Windows

1. 启动：`$ start nginx`
2. 重新加载配置文件并重启：`$ nginx -s reload`
3. 重新打开日志文件：`$ nginx -s reopen`
4. 快速停止nginx：`$ nginx -s stop`
5. 完整有序的停止nginx：`$ nginx -s quit`

**出错/遇到的问题**  
问题1:`error: CreateFile() "D:\software\nginx-1.13.9/logs/nginx.pid" failed (2: The system cannot find the file specified)`等无法找到nginx.pid文件的错误。  
解决办法：先执行`$ nginx -c D:/software/nginx-1.13.9/conf/nginx.conf`，再执行启动。

## windows服务器部署

1. 首先在windows服务器上下载[nginx](http://nginx.org/en/download.html)的windows版本。
2. 配置nginx如下

```config
worker_processes  1; ## 默认CPU核心数
events {
    worker_connections  65535;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    gzip  on;
    # upstream项与server中proxy_pass配置对应实现分布式。
    upstream a.com {
        server 192.168.1.1:3000;  # 服务器1 默认多个服务器的权重相同，可设置 weight=3设置权重
        server 192.168.1.2:3000;  # 服务器2
        keepalive 64;
    }
    server {
        listen       80;
        server_name  127.0.0.1;
        location / {
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host  $http_host;
            proxy_set_header X-Nginx-Proxy true;
            proxy_set_header Connection "";
            proxy_pass http://a.com;
            proxy_redirect default;
            proxy_connect_timeout 1;        # 超时时间 default = 65 单位s
            proxy_read_timeout 1;
            proxy_send_timeout 1;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```
** 特点 **  
1. 一个Nginx入口，自动实现静态资源负载均衡。
2. 增加服务器时，只需要再`upstream`中增加真实服务地址即可。
3. 健康监测机制：nginx根据预先设置的权重来转发请求，若某个服务器出现宕机情况，达到超时时间，nginx会自动切换其他服务器获取资源。为了保证响应速度需要将超时时间设置的短一些，默认65s。所以proxy_connect_timeout设置为1秒，若A服务器崩溃，则1秒后去B服务器查找资源。
4. 多台服务器上的资源名称需要一致，否则会出现资源不匹配的情况。