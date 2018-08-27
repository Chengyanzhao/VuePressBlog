# History API

## 基本概念

1. History API由HTML5增加，用来管理浏览器的历史记录，对应浏览器window.history API。
2. HTML5之前，只要浏览器URL改变，就会触发页面刷新。而HTML5新增的History API可实现改变URL不刷新页面。

## window.history

在HTML5之前，window.history API已实现：

1. history.back():后退。
2. history.forward():前进。
3. history.go():跳转至历史记录中的某一个。

HTML5新增：

1. history.pushState():改变Url，并推入历史记录，但页面不刷新。
2. history.replaceState():改变url，不推入历史记录，不刷新页面。

## 关于局部刷新

在HTML5 History API之前，想要不刷新页面而改变url，只能通过`#`页面定位符的hash模式来实现。
但页面定位符的作用并不是用来实现局部刷新的，而是定位页面某个位置。
出现的HTML5 HistoryAPi在原来history API的基础上增加了专门处理此问题的两个方法。

## pushState和replaceState

API:
`pushState(state, title, url)`:

- state Object:状态对象，当用户定向到一个新状态(url)时，会出发window的popstate时间。支持最大64kb的序列化字符串。
- title: 页面标题，现已被多数浏览器弃用，传入null即可。
- url:相对/绝对路径，但必须同域。

`replaceState(state, title, url)`:参数同上。

相同：
1. 参数相同。
2. 都可以实现改变url不刷新页面。

不同：
1.`pushState`会将url推入url历史记录栈中，可通过返回按钮返回。而`replaceState`是改变url，并不会推入历史记录栈中。
