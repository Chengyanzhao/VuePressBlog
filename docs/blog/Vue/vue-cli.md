# Vue-Cli

Vue-Cli的构建依赖于webpack，所以cli的配置也就是对webpack的包装。

## V2

在V2版本中，关于cli的配置都放在项目的`build`和`config`目录中。
`config`目录中的主要配置文件在`index.js`中。
`index.js`中包含`dev`和`build`配置。

* config

## 构建项目的template模板

在Vue-Cli3中，构建项目的模板源自于`@vue/cli-server/generator/template`：

![调试截图](https://i.loli.net/2019/04/04/5ca6258d1b0cc.png)
