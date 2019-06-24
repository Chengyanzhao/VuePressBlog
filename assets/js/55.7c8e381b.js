(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{328:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"vue问题记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue问题记录","aria-hidden":"true"}},[s._v("#")]),s._v(" Vue问题记录")]),s._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("h3",{attrs:{id:"浏览器不支持promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器不支持promise","aria-hidden":"true"}},[s._v("#")]),s._v(" 浏览器不支持Promise")]),s._v(" "),a("p",[s._v("Vue项目打包上线测试时，部分老旧浏览器(主要是IE9)会报错：")]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("Unhandled promise rejection ReferenceError: “Promise”未定义")])]),s._v(" "),a("ul",[a("li",[s._v("原因")])]),s._v(" "),a("p",[s._v("项目使用"),a("code",[s._v("Promise")]),s._v("，而浏览器未支持。")]),s._v(" "),a("ul",[a("li",[s._v("解决办法")])]),s._v(" "),a("p",[s._v("安装"),a("code",[s._v("babel-polyfill")]),s._v("模块，在项目"),a("code",[s._v("main.js")]),s._v("中引用，或者在webpack中配置。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" i babel-polyfill -S\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'babel-polyfill'")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'Vue'")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// other codes")]),s._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// webpack config")]),s._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  entry"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    app"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token string"}},[s._v("'babel-polyfill'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'./app/js'")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}],!1,null,null,null);t.default=e.exports}}]);