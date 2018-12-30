# CSS3 transition 过渡

transition允许元素的CSS属性值在一定时间区间内平滑过渡。

## CSS3过渡属性

transition是一个复合属性。  
**语法**: `transition:[<transition-property> || <transition-duration> || <transition-timing-function> || <transition-delay>]`

- `transition-property`: 指定过渡的CSS属性。
- `transition-duration`: 指定过渡的时间。单位为s或ms，需显式表示。
- `transition-timing-function`: 指定过渡函数。
- `transition-delay`: 指定过渡延迟时间。单位为s或ms，需显式表示。

**速记**: `transition: <property> <duration> <timing-function> <delay>`

**多个过渡效果**:
`transiition: <single-transition>, <single-transition>, ...`

**例子**: `transition: width 1s easy .5s, background-color 1s easy .5s`

## 过渡子属性

当某个过渡子属性包含**多个过渡效果**时使用逗号隔开。若多个多个过渡效果相同，则只写一个即可。

### transition-property

CSS3过渡针对是元素状态，也就是元素的CSS样式。 
过渡中需要通过`transition-property`指定元素过渡动画的CSS属性。

**语法**: `transition-property: none | all | <single-transition-property>, <single-transition-property>, ...`

- none: 无指定样式。
- all: default。指定元素所有支持`transition-property`属性的样式。
- 具体属性: [Animatable CSS properties
](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

### transition-duration

`transition-duration`指定过渡的时间。

**语法**: `transition-duration: <time>, <time>, ...`

- `time`: default: 0。单位为`s`或`ms`。

### transition-timing-function

`transition-timing-function`指定过渡函数。过渡函数控制过渡的速度。

**语法**: `transition-timing-function: <single-transition-timing-function>, ...`

- `single-transition-timing-function`: 过渡函数，包含如下几类:
    - 单一的过渡函数: ease/linear/ease-in/ease-out/ease-in-out。
    - 三次贝塞尔曲线: [transition-timing-function
](https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function)
    - `step()`函数: 同上链接。

### transition-delay

`transition-delay`指定过渡延迟时间，触发过渡后延迟此时间后过渡才开始。

**语法**: `transition-duration: <time>, <time>, ...`

- `time`: default: 0。单位为`s`或`ms`。

## 过渡触发

过渡的触发条件为元素应用的状态改变，可从以下几个方面来达到修改元素样式的目的：

1. 伪元素触发：hover、active、focus、checked等。
2. 媒体查询触发：通过媒体查询改变元素的状态。
3. js修改类触发：通过增、删、改元素类名，套用不同的css样式来触发。

## 过渡技巧

### 使用不同过渡方式

注意：当状态改变时，若新状态中也包含`transition`函数，则先对元素应用此`transition`函数，再执行过渡。

对过渡和过渡返回状态设置不同的过渡时间，可解决过渡时间太长，而需要迅速返回默认状态的问题。

<iframe width="100%" height="300" src="//jsfiddle.net/Chengyanzhao/pwx42nfa/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### 几乎无限延迟的过渡

对返回默认状态设置足够大的延迟时间，可以模拟一个单向过渡的样式。

<iframe width="100%" height="300" src="//jsfiddle.net/Chengyanzhao/dcpe6of0/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### 通过硬件加速提高WebKit过渡性能

有时动画结束后会有拖影等后遗症，这通常是一个WebKit问题，在IOS设备上尤其明显。  
可以对过渡元素添加`-webkit-transfrom: translateZ(0)`支持硬件加速来提高WebKit过渡性能。

## 小结

- 过渡是元素由一个状态平滑转为另一个状态的过程。
- 过渡是由起始状态，n个"关键帧"，终止状态组成的。
- 所谓"关键帧"，并不是值某个瞬间的状态，而是某个瞬间的过渡速度。这个过渡速度可参考贝塞尔曲线。
- 过渡的触发是由元素状态改变引起。
- 灵活设置过渡可模拟其他需要js来实现的效果。如快速重置元素至默认状态、单向过渡等。

**参考**

[MDN - Using_CSS_transitions](https://devel4oper.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)