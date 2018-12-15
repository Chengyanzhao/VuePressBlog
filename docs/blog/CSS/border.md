# CSS3边框

## 5. 盒子阴影

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

## 其他

在图片元素上设置内阴影将无效。

## 例子

<iframe width="100%" height="300" src="//jsfiddle.net/Chengyanzhao/bn2qy7ug/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>