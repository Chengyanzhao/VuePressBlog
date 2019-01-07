# CSS3边框

## 1. 圆角边框

在CSS3中使用`border-radius`来设置元素圆角。

语法：  
`border-radius: none | <length> {1, 4} [/<length> {1, 4}] ?`

一般有一下几种情况:

合并写法：  

- **`border-radius: none`**：(default). 无圆角。
- **`border-radius: <length>{1}`**：指定一个值，四个圆角半径相同。
- **`border-radius: <length>{2}`**：指定两个值，第一个值为top-left和bottom-right的圆角半径；第二个值为top-right和bottom-left的圆角半径。
- **`border-radius: <length>{3}`**：指定三个值，第一个值设置top-left，第二个值设置top-right和bottom-left，第三个值设置bottom-right。
- **`border-radius: <length>{4}`**：指定四个值，分别设置top-left、top-right、bottom-right、bottom-left。
- **`border-radius: <length>/<length>`**：第一个`<length>`设置圆角水平方向半径，第二个`<length>`设置圆角垂直方向半径。

### 子属性

- `border-top-left-radius: <length> <length>`
- `border-top-right-radius: <length> <length>`
- `border-bottom-left-radius: <length> <length>`
- `border-bottom-right-radius: <length> <length>`

指定**一个值**时，表示**水平**、**垂直**方向圆角**半径相同**。  
指定**两个值**时，第一个值为**水平方向**圆角半径，第二个为**垂直方向**圆角半径。

### 例子

<iframe width="100%" height="300" src="//jsfiddle.net/Chengyanzhao/cea16Lo8/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 2. 盒子阴影

在CSS3中使用`box-shadow`来设置盒子阴影。

语法：  
单个阴影：  
`box-shadow: none | [inset x-offset y-offset blur-radius spread-radius color]`

多个阴影：  
`box-shadow: [inset x-offset y-offset blur-radius spread-radius color], [inset x-offset y-offset blur-radius spread-radius color], ...`

参数：  

- **none**：(default). 元素没有阴影效果。
- **inset**：(optional). 阴影类型。默认为外阴影，若取值`inset`则表示内阴影。
- **x-offset**： 阴影水平偏移量。取正值时，阴影向右偏移，反之向左偏移。
- **y-offset**：阴影垂直偏移量。取正值时，阴影向下偏移，反之向上偏移。
- **blur-radius**：(optional). 阴影模糊半径。值只能是正值，值取0时表示阴影不具有模糊效果。值越大，引用的边缘越模糊。
- **spread-radius**：(optional). 阴影扩展半径。取正值时，阴影延展扩大，反之阴影缩小。
- **color**：(optional). 阴影颜色，默认值由浏览器确定。

## 多层阴影

多层阴影其实并不是外层阴影围绕内层阴影而向外扩展，而是在Z轴上的阴影叠加，最先设置的阴影会在最上层，后设置的阴影在下层。所以外层阴影要比内层阴影设置更大的扩展半径。如果多层阴影设置了相同的扩展半径，则后设置的阴影将会被前面的阴影覆盖。

## 盒模型上的边框和阴影

`box-shadow`不会影响盒模型的布局，浏览器计算布局时，会忽略阴影的扩展半径。

## 3. 其他

在图片元素上设置内阴影将无效。

### 例子

<iframe width="100%" height="300" src="//jsfiddle.net/Chengyanzhao/bn2qy7ug/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>