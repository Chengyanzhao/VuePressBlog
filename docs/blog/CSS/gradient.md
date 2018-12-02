# CSS3渐变

**渐变**是两种或多种颜色之间的平滑过渡。
**色标**是指渐变过程中可以指定多个中间颜色值，这些颜色值包括一个颜色和一个位置，就像动画中的关键帧。
理论上可以在任何可使用`url()`的地方使用CSS渐变。

W3C标准的兼容性：IE10+。

渐变分为线性渐变和径向渐变。

## 线性渐变

**线性渐变**的颜色沿着一条直线过渡。

**语法**：线性渐变需要的几个要素：方向、色标。

`linear-gradient(<direction>, <color-stop1>, <color-stop2>,...)`

`direction`: 可选，default:`to bottom`=`180deg`。渐变方向参数，有两种表达方式：

- angle: 角度方向，0度表示由下至上，90度表示从左向右，角度值大于0时按顺时针方向旋转。
- keyword: 关键字指定方向，`to <direction>`，如
    - `to top`: 相当于`0deg`
    - `to right`: `90deg`
    - `to bottom`: `180deg`
    - `to left`: `-90deg`
    - `to top left`: `to left top` : `-45deg`
    - `to top right`: `45deg`
    - `to bottom left`: `-135deg`
    - `to bottom right`: `135deg`

`color-stop`: 必选。色标(color position)，由一个颜色值和一个数值组成。数值可分为两种表达方式：

- percentage: 此颜色沿渐变轴的百分比长度。
- length: 此颜色沿渐变轴的长度。

<iframe width="100%" height="300" src="//jsfiddle.net/Chengyanzhao/4asodc01/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 径向渐变

**径向渐变**是圆形/椭圆形的颜色渐变。颜色从一个起点向四周逐渐变化。

**语法**：径向渐变需要的几个要素：圆心坐标点、渐变形状/渐变的size、色标。

`radial-gradient(<shape>|<size> at <position>, <color-stop1>, <color-stop2>, ...)`

**`position`**: 指定径向渐变圆心位置。可选。

- `<length>`
- `<percentage>`
- `left`: 设置左边为圆心横坐标值。
- `cenger`: default. 设置中间为圆心横坐标活纵坐标值。
- `right`: 设置右边为圆心横坐标值。
- `top`: 设置顶部为圆心纵坐标值。
- `bottom`: 设置底部为圆心纵坐标值。

**`shape`**: 指定径向渐变的形状。可选。

- `circle`: 圆形，半径为`size`值。
- `ellipse`: 椭圆，半径为`size`值。

**`size`**: 指定径向渐变尺寸大小。可选。

- `closest-side`: 指定径向渐变的半径长度为从圆心到离圆心**最近**的**边**。
- `closest-corner`: 指定径向渐变的半径长度为从圆心到离圆心**最近**的**角**。
- `farthest-side`: 指定径向渐变的半径长度为从圆心到离圆心**最远**的**边**。
- `farthest-corner`:可选，default.指定径向渐变的半径长度为从圆心到离圆心**最远**的**角**。

`color-stop`: 必选。色标(color position)，由一个颜色值和一个数值组成。数值可分为两种表达方式：

- percentage: 此颜色沿渐变轴的百分比长度。
- length: 此颜色沿渐变轴的长度。

<iframe width="100%" height="300" src="//jsfiddle.net/Chengyanzhao/r7cxsmoz/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 小结

- CSS3渐变即是颜色的平滑过渡。
- CSS3渐变分为线性渐变和径向渐变。
- 无论何种渐变，都需要有起始点、渐变长度(半径)、色标来支撑，只是在两种渐变中某些值无需指定(如线性渐变的起点)，因为有其他参数可推断出。
- 所以看见径向渐变的众多参数无须懵逼，照着这个套路来即可。

**参考**

[MDN - linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient)