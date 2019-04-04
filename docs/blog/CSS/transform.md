# CSS3 Transforms变形

CSS3变形允许动态控制元素，可以移动、放大缩小、旋转元素。
主要分为2D变形和3D变形。

## 变形属性

- transform
- transform-origin
- transform-style
- perspective
- perspective-origin
- backface-visibility

### transform

变形属性，值为一个或多个移动、缩放、旋转、倾斜等变形函数。当值为多个变形函数时，用逗号隔开，而非空格。  
元素根据自身`transform-origin`作为元素变形原点。

### transform-origin

元素变形原点，初始值为`50% 50% 0`，也就是以元素中点为原点。  
[查看更多](https://cloud.tencent.com/developer/section/1072453)

## transform-style

## translate 移动

移动元素，可沿X、Y、Z轴平移元素。

参数

1. `translateX(x)`: 沿X轴平移。
2. `translateY(y)`: 沿Y轴平移。
3. `translateZ(z)`: 沿Z轴平移。
4. `translate(z, y)`: 等同于1、2合并写法。
5. `translate3d(x, y, z)`: 等同于1、2、4合并写法。

参数：

- length: 单位px。以像素为单位进行移动。
- percentage: 以作用元素自身的宽/高值像素单位为基准，而非父元素的宽/高。

<iframe width="100%" height="300" src="//jsfiddle.net/Chengyanzhao/L2jx5r0a/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## scale 缩放

缩放元素。参数单位**倍**。

1. `scaleX(x)`: 水平方向缩放。
2. `scaleY(y)`: 垂直方向缩放。
3. `scaleZ(z)`: z轴方向缩放。
4. `scale(x, y)`: 1、2合并写法。
5. `scale(x, y, z)`: 1、2、3合并写法。

<iframe width="100%" height="300" src="//jsfiddle.net/Chengyanzhao/yh58zcnu/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## rotate 旋转

旋转元素。参数单位角度`deg`。角度值大于零时顺时针旋转。

1. `rotateX(angle)`: 绕X轴旋转。相当于`rodate(1, 0, 0, angle)`
2. `rotateY(angle)`: 绕Y轴旋转。相当于`rodate(0, 1, 0, angle)`
3. `rotateZ(angle)`: 绕Z轴旋转。相当于`rodate(0, 0, 1, angle)`
4. `rotate(angle)`: 绕一个固定点的旋转元素。相当于`rotateZ(angle)`活`rotate3d(0, 0, 1, angle)`
5. `rotate3d(x, y, z, angle)`: 在3D空间中围绕一个固定轴线的旋转元素，而不使其变形的变换。

<iframe width="100%" height="300" src="//jsfiddle.net/Chengyanzhao/tx5oef4w/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

[详细说明](https://cloud.tencent.com/developer/section/1072438)

**注意**

1. 与2D平面中的旋转不同，3D旋转的组成通常是不可交换的。换句话说，旋转的顺序影响结果。

## skew 倾斜

1. `skewX(a)`: 一个水平方向上的剪切映射，即在水平方向上以一定的角度扭曲的元素的每个点。这是通过将横坐标增加一个与指定角度成比例的值以及到原点的距离来完成的。离原点越远，改点增加的值就越大。
2. `skewY(a)`: 一个垂直方向上的剪切映射，即在垂直方向上以一定的角度扭曲的元素的每个点。这是通过将横坐标增加一个与指定角度成比例的值以及到原点的距离来完成的。离原点越远，改点增加的值就越大。
3. `skew(ax, [ay])`: 一个剪切映射，或平延，通过在每个方向上以一定角度扭曲元素的每个点。这是通过将每个坐标增加一个与指定角度成比例的值和到原点的距离来完成的。离原点越远，该点增加的值就越大。

<iframe width="100%" height="300" src="//jsfiddle.net/Chengyanzhao/9e0rz52y/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 参考

1. [图解css3]
2. [腾讯云](https://cloud.tencent.com/developer/section/1072439)