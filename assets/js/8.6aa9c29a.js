(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{362:function(a,t,e){"use strict";e.r(t);var n=e(1),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"css3动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3动画","aria-hidden":"true"}},[a._v("#")]),a._v(" CSS3动画")]),a._v(" "),e("ol",[e("li",[a._v("动画是多个状态的连续过渡，和循环。")])]),a._v(" "),e("p",[a._v("在CSS3中使用动画分为两个步骤：")]),a._v(" "),e("ol",[e("li",[a._v("使用@keyframes声明动画")]),a._v(" "),e("li",[a._v("对元素应用animate属性来指定动画。")])]),a._v(" "),e("h2",{attrs:{id:"keyframes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyframes","aria-hidden":"true"}},[a._v("#")]),a._v(" @keyframes")]),a._v(" "),e("p",[a._v("CSS3中利用@keyframes声明动画，其中可以定义过个关键帧，每个关键帧都有自己的状态。")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{attrs:{class:"token atrule"}},[e("span",{attrs:{class:"token rule"}},[a._v("@keyframes")]),a._v(" <name>")]),e("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{attrs:{class:"token selector"}},[a._v("0%(from)")]),e("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{attrs:{class:"token comment"}},[a._v("/* css */")]),a._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),e("span",{attrs:{class:"token selector"}},[a._v("perentage")]),e("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{attrs:{class:"token comment"}},[a._v("/* css  */")]),a._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),e("span",{attrs:{class:"token selector"}},[a._v("100%(to)")]),e("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{attrs:{class:"token comment"}},[a._v("/* css */")]),a._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("ol",[e("li",[a._v("0%不可省略"),e("code",[a._v("%")]),a._v("，"),e("code",[a._v("@keyframes")]),a._v("只接受百分比值。")]),a._v(" "),e("li",[a._v("并不一定按照0%至100%的顺序定义关键帧，浏览器会按照百分比值的顺序执行。")]),a._v(" "),e("li",[a._v("若某些关键帧的状态相同，可合并在一起，百分比值用逗号隔开。如"),e("code",[a._v("0% 30% 60% { /* css */ }")])]),a._v(" "),e("li",[a._v("0%的关键帧可用"),e("code",[a._v("from")]),a._v("关键字，100%的关键帧可用"),e("code",[a._v("to")]),a._v("关键字。")])]),a._v(" "),e("h2",{attrs:{id:"animate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#animate","aria-hidden":"true"}},[a._v("#")]),a._v(" animate")]),a._v(" "),e("p",[a._v("在CSS3中通过animate指定元素动画。animate是一个复合属性。")]),a._v(" "),e("p",[a._v("语法："),e("code",[a._v("animate: animate-name | animate-duration | animate-timing-function | animate-delay | animate-iteration-count | animate-direction")])]),a._v(" "),e("p",[a._v("参数：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("animate-name")]),a._v(": 指定动画名称，也就是由"),e("code",[a._v("@keyframes")]),a._v("定义的动画。")]),a._v(" "),e("li",[e("code",[a._v("animate-duration")]),a._v("：动画播放所需时间。")]),a._v(" "),e("li",[e("code",[a._v("animate-timing-function")]),a._v("：动画播放方式。")]),a._v(" "),e("li",[e("code",[a._v("animate-delay")]),a._v("：播放延迟时间。")]),a._v(" "),e("li",[e("code",[a._v("animate-iteration-count")]),a._v("：动画循环播放次数。")]),a._v(" "),e("li",[e("code",[a._v("animate-direction")]),a._v("：动画播放方向。")])]),a._v(" "),e("p",[a._v("若定义多个动画，需要用逗号隔开。")]),a._v(" "),e("h2",{attrs:{id:"子属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#子属性","aria-hidden":"true"}},[a._v("#")]),a._v(" 子属性")]),a._v(" "),e("h3",{attrs:{id:"animate-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#animate-name","aria-hidden":"true"}},[a._v("#")]),a._v(" animate-name")]),a._v(" "),e("p",[a._v("指定调用的动画。")]),a._v(" "),e("p",[a._v("语法："),e("code",[a._v("animate-name: none | IDENT")])]),a._v(" "),e("p",[a._v("参数：")]),a._v(" "),e("ul",[e("li",[a._v("none：default. 没有动画效果，常用语覆盖动画。")]),a._v(" "),e("li",[a._v("IDENT：由"),e("code",[a._v("@keyframes")]),a._v("定义的动画名称。")])]),a._v(" "),e("h3",{attrs:{id:"animate-iteration-count"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#animate-iteration-count","aria-hidden":"true"}},[a._v("#")]),a._v(" animate-iteration-count")]),a._v(" "),e("p",[a._v("指定动画循环次数。")]),a._v(" "),e("p",[a._v("语法："),e("code",[a._v("animate-iteration-count: infinite | <number>")])]),a._v(" "),e("p",[a._v("参数：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("infinite")]),a._v("：无限次数，循环播放。")]),a._v(" "),e("li",[e("code",[a._v("<number>")]),a._v("：指定次数，值为正整数，默认值为0。")])]),a._v(" "),e("h2",{attrs:{id:"animate-direction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#animate-direction","aria-hidden":"true"}},[a._v("#")]),a._v(" animate-direction")]),a._v(" "),e("p",[a._v("指定动画播放方向。")]),a._v(" "),e("p",[a._v("语法："),e("code",[a._v("animate-direction: normal | alternate")])]),a._v(" "),e("p",[a._v("参数：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("normal")]),a._v("：default. 每个循环内动画向前循环，换言之，每个动画循环结束，动画重置到起点重新开始，这是默认属性。")]),a._v(" "),e("li",[e("code",[a._v("alternate")]),a._v("：动画交替反向运行，反向运行时，动画按步后退，如小球下落再弹起。同时，带时间功能的函数也反向，比如，ease-in 在反向时成为ease-out。计数取决于开始时是奇数迭代还是偶数迭代。")]),a._v(" "),e("li",[e("code",[a._v("reverse")]),a._v("：反向运行动画，每周期结束动画由尾到头运行。")]),a._v(" "),e("li",[e("code",[a._v("alternate-reverse")]),a._v("：反向交替，反向开始交替。动画第一次运行时是反向的，然后下一次是正向，后面依次循环。决定奇数次或偶数次的计数从1开始。")])])])])}],!1,null,null,null);t.default=s.exports}}]);