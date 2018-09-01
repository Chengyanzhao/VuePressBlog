# 浅谈数组去重

网上经常有数组去重的题，收藏夹也收藏了几篇文章，是时候整理一下了。

数组去重的重要条件就是判断数组中的两个元素是否相等，这里“相等”的的定义需要明确。比如`1==1`没问题，但是`'1'`和`1`是相等吗？两个由相同构造函数和相同参数构造的实例对象相等吗？

所以不管做面试题，还是自己写代码的时候一定要先定义好“相等”，然后对症下药。

下面我们把常见的去重方式与代码列出，最后判断使用情况及优缺点。

* 关于相等

在js中有多重判断值是否相等的标准，这里可以找到ecma262列出的几种相等规则：
[Testing and Comparison Operations](https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations)

## indexOf

这里利用`Array`的`indexOf`方法来判断元素是否相等，规则同`===`。
[strict equality](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#%E6%8F%8F%E8%BF%B0)

```javascript
// 增加一个数组对象
function unique1(array) {
  const uniqueArray = []
  if (!Array.isArray(array)) {
    return uniqueArray
  }
  let isHaveNaN = false
  array.forEach(item => {
    if (isNaN(item) && !isHaveNaN) {
      uniqueArray.push(item)
      isHaveNaN = true
    } else {
      uniqueArray.indexOf(item) === -1 && uniqueArray.push(item)
    }
  })
  return uniqueArray
}
```

```javascript
// 通过索引判断
function unique(array) {
  if (!Array.isArray(array)) {
    return []
  }
  let isHaveNaN = false
  return array.filter((item, index) => {
    let isUnique = false
    if (isNaN(item) && !isHaveNaN) {
      isUnique = true
      isHaveNaN = true
    } else {
      isUnique = array.indexOf === index
    }
    return isUnique
  })
}
```

## includes

利用ES6新增的Array方法`includes`来判断数组是否包含某元素，以此推断数组中的元素是否唯一。

`includes`方法内部使用的事[SameValueZero](https://tc39.github.io/ecma262/#sec-samevaluezero)判断方法。

1. If Type(x) is different from Type(y), return false.
2. If Type(x) is Number, then
    1. If x is NaN and y is NaN, return true.
    2. If x is +0 and y is -0, return true.
    3. If x is -0 and y is +0, return true.
    4. If x is the same Number value as y, return true.
    5. Return false.
3. Return SameValueNonNumber(x, y).

注意2.1 如果x为NaN，y也是NaN，则返回`true`，说明`includes`方法可以判断数组中是否包含了`NaN`。

```javascript
function unique(array) {
  const uniqueArray = []
  if (!Array.isArray(array)) {
    return uniqueArray
  }
  array.forEach((item, index) => {
    !uniqueArray.includes(item) && uniqueArray.push(item)
  })
  return uniqueArray
}
```

## key唯一

利用key唯一来判断元素是否相等。
** 缺点：**

1. 数组元素只能是值类型，不能存在引用类型数据。
2. 类似`1`和`'1'`会被判断为相等。

```javascript
function unique(array){
  const uniqueArray = []
  if (!Array.isArray(array)) {
    return uniqueArray
  }
  const uniqueObject = {}
  return array.filter(item=>{
    if(!item in uniqueObject){
      uniqueObject[item] = undefined
      return true
    }else{
      return false
    }
  })
}
```

## ES6 Set

了解[Set](http://es6.ruanyifeng.com/#docs/set-map#Set)

```javascript
function unique(array) {
  const uniqueArray = []
  if (!Array.isArray(array)) {
    return uniqueArray
  }
  const set = new Set(array)
  uniqueArray = Array.from(set)
  return uniqueArray
}
```

## ES6 Map

了解[Map](http://es6.ruanyifeng.com/#docs/set-map#Map)

```javascript
function unique(array) {
  const uniqueArray = []
  if (!Array.isArray(array)) {
    return uniqueArray
  }
  const map = new Map()
  array.forEach(item => {
    if (!map.get(item)) {
      map.set(item, 1)
      uniqueArray.push(item)
    }
  })
}
```

## 总结

* 数组去重前先明确元素相等的标准，而后选择适合的方法对症下药，并没有唯一最优方法。
* 一定考虑NaN的情况，因为NaN与任何值都不相等，只能用isNaN进行判断（可识别NaN相等的方法NaN除外）。

## TODO

* 优化代码
* 测试用例
* 各方法对比