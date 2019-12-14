# 必装工具

## nrm

nrm(npm registry manager)是npm镜像源管理工具。方便查看、添加、切换、删除npm源。并且其中内置了一些常用的源供你选择。

**安装：**

nrm作为npm的一个包，需使用npm来安装，而且毫无疑问的，最好是全局安装。

`npm install nrm -g`

**命令：**

1. 查看可选源：`nrm ls`。其中源名称前带有`*`标志的，是当前选择的源。
2. 切换源：`nrm use <registry name>`。eg.: `nrm use taobao`。
3. 增加源：`nrm add <registry name> <url>`。此命令会将自定义的源添加至可选源的列表中。eg.:`nrm add privateRegistry http://privateRegistry.npm.com/`。
4. 删除源：`nrm del <registry name>`。将源在可选源列表中删除。eg.:`nrm delete privateRegistry`。
5. 测试速度：`nrm test <registry name>`。测试某个源的响应时间。eg.:`nrm test taobao`。
