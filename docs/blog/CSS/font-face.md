# CSS3 @font-face

## 简介

`@font-face`可以让页面使用自定义字体进行渲染。

当不使用`@font-face`时，页面使用的字体都是客户端所支持的，也就是客户端会去系统中找字体库。
而使用自定义字体时，浏览器会将自定义字体文件加载至浏览器中，而后浏览器使用这些自定义字体渲染指定位置。

## 兼容性: (放心使用)

- ie: 5.5+
- firefox: 3.5+
- chrome: 4.0+
- safari: 3.2+
- opera: 10.0+

## 语法

```css
@font-face {
  font-family: <YourWebFontName>;
  src: <source> [<format>], <source> [<format>], <source> [<format>],...;
  [font-weight: <weight>;]
  [font-style: <style>;]
}
```

提示：

- `[]`: 可选项
- `<>`: 参数

参数:

1. `YourWebFontName`: 指定自定义字体名称，设置元素自定义字体时，使用此名称。建议使用默认名称。
2. `source`: 自定义字体文件的路径。
3. `format`: 字体格式。
4. `font-weight`: 是否粗体。
5. `font-style`: 字体样式。

### font-family 自定义字体名称

`font-family`用来指定自定义字体名称，建议使用默认名称。另外如需设置多个自定义字体，需要分开来写。

### src 自定义字体来源

可设置多个来源，若第一个来源未找到，客户端会依次尝试寻找后面的字体，直到找到一个可用的位置。

```css
@font-face {
  font-family: "testfont";
  src: url("../fonts/testfont.eot");
  src: url("../fonts/testfont.eot?#iefix") format("embedded-openttype"),
       url("../fonts/testfont.woff") format("woff"),
       url("../fonts/testfont.ttf") format("truetype"),
       url("../fonts/testfont.svg") format("svg");
}
```

### format字体资源的格式：

- TrueType: `.ttf`格式
- OpenType: `.oft`格式
- Web Open Font Format: `.woff`格式
- Embedded Open Type: `.eot`格式
- SVG: `.svg`格式

在`@font-face`中至少需要`.woff`和`.eot`两种格式。

## 开源字体

1. [Google Fonts](https://fonts.google.com/)
2. [Dafont.com](https://www.dafont.com/)

## 字体转换

1. [font squirrel](https://www.fontsquirrel.com/tools/webfont-generator)

## 字体图标

**优势**

1. 适用性: 字体比图标占用存储空间小，渲染快。
2. 可扩展性: 字体图标可通过`fong-size`设置大小，输出不同尺寸。而位图需要对不同尺寸准备多个图片。
3. 灵活性: 可为字体图标设置阴影、颜色、翻转等字体属性，而位图不可以。
4. 兼容性: 放心使用。

### 字体图标资源

1. [Iconfont](http://www.iconfont.cn/)
2. [IcoMoon](https://icomoon.io/)
3. [Font Awesome](http://www.fontawesome.com.cn/)
4. [Feather](https://feathericons.com/)