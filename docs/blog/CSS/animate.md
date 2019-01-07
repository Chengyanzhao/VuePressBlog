# CSS3动画

1. 动画是多个状态的连续过渡，和循环。

在CSS3中使用动画分为两个步骤：

1. 使用@keyframes声明动画
2. 对元素应用animate属性来指定动画。

## @keyframes

CSS3中利用@keyframes声明动画，其中可以定义过个关键帧，每个关键帧都有自己的状态。

语法：
```css
@keyframes <name>{
  0%(from){
    /* css */
  }
  perentage{
    /* css  */
  }
  100%(to){
    /* css */
  }
}
```

::: tip
1. 0%不可省略`%`，`@keyframes`只接受百分比值。
2. 并不一定按照0%至100%的顺序定义关键帧，浏览器会按照百分比值的顺序执行。
3. 若某些关键帧的状态相同，可合并在一起，百分比值用逗号隔开。如`0% 30% 60% { /* css */ }`
4. 0%的关键帧可用`from`关键字，100%的关键帧可用`to`关键字。

## animate

在CSS3中通过animate指定元素动画。animate是一个复合属性。

语法：`animate: animate-name | animate-duration | animate-timing-function | animate-delay | animate-iteration-count | animate-direction`

参数：

- `animate-name`: 指定动画名称，也就是由`@keyframes`定义的动画。
- `animate-duration`：动画播放所需时间。
- `animate-timing-function`：动画播放方式。
- `animate-delay`：播放延迟时间。
- `animate-iteration-count`：动画循环播放次数。
- `animate-direction`：动画播放方向。

若定义多个动画，需要用逗号隔开。

## 子属性

### animate-name

指定调用的动画。

语法：`animate-name: none | IDENT`

参数：

- none：default. 没有动画效果，常用语覆盖动画。
- IDENT：由`@keyframes`定义的动画名称。

### animate-iteration-count

指定动画循环次数。

语法：`animate-iteration-count: infinite | <number>`

参数：

- `infinite`：无限次数，循环播放。
- `<number>`：指定次数，值为正整数，默认值为0。

## animate-direction

指定动画播放方向。

语法：`animate-direction: normal | alternate`

参数：

- `normal`：default. 每个循环内动画向前循环，换言之，每个动画循环结束，动画重置到起点重新开始，这是默认属性。
- `alternate`：动画交替反向运行，反向运行时，动画按步后退，如小球下落再弹起。同时，带时间功能的函数也反向，比如，ease-in 在反向时成为ease-out。计数取决于开始时是奇数迭代还是偶数迭代。
- `reverse`：反向运行动画，每周期结束动画由尾到头运行。
- `alternate-reverse`：反向交替，反向开始交替。动画第一次运行时是反向的，然后下一次是正向，后面依次循环。决定奇数次或偶数次的计数从1开始。
