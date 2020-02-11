# 使用input元素事件实现查询功能

假设我们需要实现一个搜索查询框，想要在用户输入之后进行自动查询，比如地址搜索输入框，输入后自动列出匹配的地址列表供用户选择。  

首先想到的肯定是监听input元素的`input`事件，相当于每次有效的keydown都会触发事件。但当我们输入中文拼写时，尚未完成拼写事件也会触发，然而此时我们并不想发起请求去搜索，因为我们的输入并没有完成。此时得到的value可能会是`beijin`，实际上我们需要在拼写完成时拿到`北京`去搜索。

此情况可使用`compositionstart`、`compositionend`配合`input`事件来实现。

``` js
const input = document.getElementById('search')

function inputEvent(e) {
  if (e.target.composing) return
  console.log(e.target.value)
}

function compositionStart(e) {
  e.target.composing = true
}

function compositionEnd(e) {
  if (!e.target.composing) return
  e.target.composing = false
  trigget(e.target, 'input')
}

function trigget(el, type) {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

input.addEventListener('compositionstart', compositionStart)
input.addEventListener('compositionend', compositionEnd)
input.addEventListener('change', compositionEnd)
input.addEventListener('input', inputEvent)
```
