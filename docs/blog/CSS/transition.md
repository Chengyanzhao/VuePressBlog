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

**例子**: `transition: all 1s easy .5s`

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

## 小结

- 过渡是元素由一个状态平滑转为另一个状态的过程。
- 过渡是由起始状态，n个"关键帧"，终止状态组成的。
- 所谓"关键帧"，并不是值某个瞬间的状态，而是某个瞬间的过渡速度。这个过渡速度可参考贝塞尔曲线。

**参考**

[MDN - Using_CSS_transitions](https://devel4oper.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)