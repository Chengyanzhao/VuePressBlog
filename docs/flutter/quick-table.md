# flutter速查表

## 网站

1. [Flutter官网](https://flutter.dev/)
2. [Flutter中文网](https://flutterchina.club/)
    - [Widgets 目录](https://flutterchina.club/widgets/)
    - [布局 Widget](https://flutterchina.club/widgets/layout/)
3. [Dart Package](https://pub.dev)
4. [Dart Package国内镜像](https://pub.flutter-io.cn/)
5. [widgets library](https://api.flutter.dev/flutter/widgets/widgets-library.html)
6. [material library](https://api.flutter.dev/flutter/material/material-library.html)
7. 网络文章
    - [Flutter 即学即用系列 - AndroidTraveler的掘金专栏](https://juejin.im/post/5cec9599e51d45775d516f07)
    - [Flutter完整开发实战详解 - 恋猫de小郭的掘金专栏](https://juejin.im/post/5d0634c7f265da1b91639232)
    - [Flutter图解系列 - 阿策～的云栖社区](https://yq.aliyun.com/users/2qfggvaujt7ks?spm=a2c4e.11153940.blogcont692294.2.15a04744Xh73yv)
8. 大厂教程
    - [alibaba - flutter-go](https://github.com/alibaba/flutter-go)
    - [alibaba - fish-redux](https://github.com/alibaba/fish-redux)

## pubspec.yaml速查表

| 字段名 | 含义 | 可选or必选 |
| - | - | - |
| name | 工程的名字 | 必选 |
| description | 工程的描述 | 发布到Pub时必选 |
| version| 工程的版本号 | 发布到Pub时必选 |
| author or authors | 作者名 | 可选 |
| homepage | 主页 | 可选 |
| environment | 指定Dart版本 | 必选 |
| responsitory | 指向工程的源代码地址 | 可选 |
| issue_tracker | 指向跟踪工程issue的地址 | 可选 |
| documentation | 指向工程文档的地址 | 可选 |
| dependency_overrides | 开发过程中，可能需要暂时覆盖依赖项 | 可选 |
| executables | 用于将包的可执行文件放在PATH上：可将其一个或多个脚本公开为可以直接从命令行运行的可执行文件 | 可选 |
| publish_to | 执行发布包的位置，默认是Pub | 可选 |
| flutter | flutter资源相关的配置，资源 | 必选 |
