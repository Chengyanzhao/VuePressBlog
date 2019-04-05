# Axios问题汇总

## 设置Content-Type无效

在使用axios发送FormData类型数据时，设置了headers中的Content-Type，但请求发送时，还是被axios强制更改为默认值。
当使用`axios`post`FormData`时，`axios`内部会自动删除参数`headers`设置的`Content-Type`，而后由浏览器根据数据类型自动设置此参数。  
我遇到的情况是需要调用阿里云OSS API，因为涉及到秘钥计算。必须指定`Content-Type`。尝试过以下操作：

1. 在请求前配置options参数修改`headers`。失败，被`axios`删除并重新复制。
2. 在request拦截中修改`headers`。失败，依旧被`axios`删除并重新赋值。

查询源码，找到删除此字段的操作在[axios/lib/adapters/xhr.js - r113](https://github.com/axios/axios/blob/master/lib/adapters/xhr.js)，而且并没有配置或选项可以影响到此删除操作，除非覆盖`adapter`。  
另外在[issues](https://github.com/axios/axios/issues/767)中也印证这点。  

所以只有拷贝源码`axios/lib/adapters/xhr.js`，而后修改删除`Content-Type`处的代码，并在axios调用时设置`adapter`选项，得以解决。

另外注意不要全局配置`adapter`，可能会对其他正常的请求造成影响。