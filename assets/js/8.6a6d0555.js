(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{320:function(e,t,r){"use strict";r.r(t);var n=r(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("对于过去的前端来说，JS代码只能在浏览器中运行，而现代的前端却离不开NodeJS。\n对于初学者来说，只知道js代码在两个平台上都能运行，但是不理解为什么能运行。\n这篇文章就浅谈JSRuntime、JS、V8、浏览器与NodeJS。")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("众所周知，无论编译型语言(先编译后执行，如Java、C#等)，还是解释型语言(编译同时执行，如JavaScript)，都需要相应runtime来执行。目前常见的JSRuntime两类：浏览器和NodeJS。JSRuntime的核心之一就是JS引擎。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/JSAPI_reference/JSRuntime",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击这里"),r("OutboundLink")],1),e._v("了解更多有关JSRuntime的知识。")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("JS引擎是JSRuntime中负责对JS代码进行解释、编译和执行的部分。也就是说，浏览器、NodeJS中都包含JS引擎。\n各浏览器厂商都有自己的JS引擎实现，但这里我们只说Chrome，以及它所依赖的V8引擎。\n"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Chrome_V8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome V8引擎"),r("OutboundLink")],1),e._v("是一款由Google开发的开源的JavaScript引擎。Chrome与NodeJS使用的引擎都是V8。")]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("看到这有同学可能会产生疑问，为什么Chrome与NodeJS都使用V8引擎，但浏览器有图形渲染，而NodeJS没有。\n首先NodeJS并不是一款可视化的软件，它运行在服务端，可以看做是一个JSRuntime。而浏览器是客户端，用户需要客户端的图形页面来查看信息。\n其次，浏览器内核可以分为两部分，渲染引擎、JS引擎。浏览器页面渲染使用的并不是JS引擎，而是浏览器内核提供的渲染引擎。")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"浏览器、nodejs和v8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器、nodejs和v8","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器、NodeJS和V8")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"jsruntime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsruntime","aria-hidden":"true"}},[this._v("#")]),this._v(" JSRuntime")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v8引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v8引擎","aria-hidden":"true"}},[this._v("#")]),this._v(" V8引擎")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"js引擎与浏览器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js引擎与浏览器","aria-hidden":"true"}},[this._v("#")]),this._v(" JS引擎与浏览器")])}],!1,null,null,null);t.default=a.exports}}]);