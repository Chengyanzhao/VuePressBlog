# NSSM

使用NSSM部署Node.js项目为Windows服务

## 简介

　　NSSM是一款可将Nodejs项目注册为Windows系统服务的工具。当你的Node.js项目需要部署在Windows Server上时，NSSM是一个不错的选择。

## 特点

　　NSSM将Node.js项目注册为服务后，启动、停止、重启皆由windows来管理，所以我们不必担心NSSM无法处理项目因意外的停止，而Windows的服务管理即可处理这些问题。

## 使用

1.下载[NSSM](http://www.nssm.cc/).
2.根据自己的平台，将32/64位nssm.exe文件解压至任意文件夹。
3.以管理员权限启动Power Shell，定位至nssm.exe所在目录。
4.输入`$ nssm.exe install {serviceName}`，`{serviceName}`即注册服务的名称。注册服务弹出如下NSSM界面。（如果执行部成功并提示`无法将“nssm.exe”项识别为 cmdlet、函数`，可执行`$ .\nssm.exe install {serviceName}`。
5.Application标签设置：
    - Application Path: 选择系统安装的node.exe。
    - Startup directory: 选择nodejs项目的根目录。
    - Arguments: 输入启动参数，如默认的express项目的参数为`./bin/www`
6.上述步骤操作完成，即可点击Install service来注册服务。我们在系统的服务中即可找到刚刚注册的服务。
7.在系统服务中找到刚刚注册的服务，右键`属性 - 恢复`即可设置此服务挂掉重启等内容。


## 更多命令

### 安装服务

`$ nssm install <servicename>`
`$ nssm install <servicename> <program>`
`$ nssm install <servicename> <program> [<arguments>]`

### 删除服务

`$ nssm remove`
`$ nssm remove <servicename>`
`$ nssm remove <servicename> confirm`

### 启动、停止服务

`$ nssm start <servicename>`
`$ nssm stop <servicename>`
`$ nssm restart <servicename>`

### 查询服务状态

`$ nssm status <servicename>`

### 服务控制命令

`$ nssm pause <servicename>`
`$ nssm continue <servicename>`
`$ nssm rotate <servicename>`