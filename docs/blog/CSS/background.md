# CSS3 - 背景图片

基本属性：

- `background-color`：背景颜色
- `background-image`：背景图片
- `background-repeat`：背景图片展示方式
- `background-attachment`：背景图片固定方式
- `background-position`：背景图片位置。
- `background-origin`：背景图片绘制起点。
- `background-clip`：背景图片显示范围。
- `backgrpund-size`：背景图片尺寸。

## background

语法：`background: [<background-color>] [,<backgrund-url>] [,<background-repeat> [,<background-attachment> [,<background-position>]]`

### background-color

背景颜色

`background-color：transparent || <color>`

- `transparent`：default. 透明。
- `<color>`：颜色值：
    - `rgb/rgba`。
    - `hls/hlsa`。
    - 十六进制颜色值。
    - 颜色关键字，如`red`/`green`。

### background-image

背景图片

`background-url：none || <url>`

- none：default.
- `<url>`：绝对路径/相对路径/base64图片编码。

### background-repeat

背景图片平铺
tip:平铺即背景图片小于容器时，浏览器循环绘制图片，使容器被背景图片填充满。

`background-repeat：repeat || repeat-x || repeat-y || no-repeat`

- repeat：x、y方向同时平铺。
- repeat-x：x方向平铺。
- repeat-y：y方向平铺。
- no-repeat：无平铺效果。

### background-attachment

背景图片固定方式

`background-attachment：scroll || fixed`

- scroll：defaule. 背景图片随页面滚动。
- fixed：背景图片相对于窗口固定位置。

### background-position

背景图片位置

`background-position：<percentage> || <length> || [left | center | right] [top | center | bottom]`

- default： 左上角。(0 0) || (0% 0%) || (left top) || (top left)

关于几种写法：
- `<percentage>`或`<lengths>`时，只写一个值则代表x、y方向值相同。
- 使用位置关键字如`top`、`left`等，只写一个值时，代表另一个值为center。另外水平方向和垂直方向无书写顺序影响，`top left`与`left top`结果相同。

### background-origin

前置知识：[盒模型 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started/Boxes)

背景图片绘制起点。也是`background-position`的参考原点。

`background-origin：padding-box || border-box || content-box`

- `padding-box`：default. 从padding的外边距开始绘制。
- `border-box`：从border的外边距开始绘制。
- `content-box`：从content的外边距开始绘制。

### background-clip

指定背景图片的显示范围，指定范围外的背景图片将被裁切掉。

`background-clip：border-box || padding-box || content-box`

- `border-box`：default. border区域向外裁切。
- `padding-box`： padding区域向外裁切。
- `content-box`：content区域向外裁切。

**注意**

1. 此属性会将背景颜色也裁切。
2. 当属性为默认值`border-box`时，图片会从`padding`区域左上角至`border`区域右下角进行绘制，而不是从`border`的左上角绘制到`border`的右下角。

<iframe width="100%" height="300" src="//jsfiddle.net/Chengyanzhao/y0h2rgcv/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### background-size

指定背景图片尺寸。

`background-size：auto || <length> || <percentage> || cover || contain`

- `auto`：default. 保持图片原始宽、高。
- `<length>`：指定具体的宽、高值，如`150px 50px`或`100px`。
- `<percentage>`：指定宽、高百分比值。（tip：相对于元素绘制区域尺寸的百分比，而非图片原始尺寸。）
- `cover`：指定图片尺寸为容器绘制区域尺寸。
- `contain`：保持图片宽、高比例来拉伸图片，直到水平或垂直方向铺满容器绘制区域。
