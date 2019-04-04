# ES6 变量的解构赋值

ES6允许按照一定的模式从数组、对象中提取值，对变量进行赋值，这被称为解构。

## 数组的解构

- 实际上任何实现Iterator接口的数据结构都可以使用数组的方式解构赋值。
- 数组解构变量赋值是根据变量位置(索引)进行匹配。
- 若某项解构不成功，则值为undefined。
- 解构赋值时，可设置解构不成功的默认值。
- 关于默认值，ES6通过`===`来判断某个位置是否有值，若某个项`===`严格等于`undefined`，默认值才会生效。
- 默认值是表达式时，这个表达式惰性求值，当使用到这个表达式的时候才会进行求值。
- 默认值可使用已结构的其他变量。

模式匹配：

``` js
let [a, b, c] = [1, 2, 3]
a // 1
b // 2
c // 3
```

嵌套解构：

``` js
let [a, [b, [c], d]] = [1, [2, [3], 4]]
a // 1
b // 2
c // 3
d // 4
```

不完全解构：

``` js
let [a, b] = [1, 2, 3]
a // 1
b // 2

let [x, , y] = [1, 2, 3]
x // 1
y // 3

let [first, ...tail] = [1, 2, 3, 4, 5, 6]
first // 1
tail // [2,3,4,5,6]
```

Set数据解构:

``` js
let [a, b, c] = new Set([1, 2, 3])
a // 1
b // 2
c // 3
```

### 默认值

当结构失败时，可设置变量的默认值：

#### 默认值的使用

``` js
let [a = 1, b = 2] = [3]
a // 3
b // 2
```

#### 默认值的判定标准

ES6内部使用严格相等运算符`===`来判断一个位置是否有值，当一个位置的值严格等于`undefined`时，默认值才会生效。

``` js
let [a = 1, b = 2] = [null, undefined]
a // null
b // 2
```

#### 默认值是表达式

当默认值是表达式时，会进行惰性求值，也就是说，只有默认值生效的时候才会对表达式求值：

``` js
function f () { return 'a' }
let [a = f()] = [1]
a // 1
```

 此时f函数并没有执行，因为解构成功，默认值没有生效。上面的代码等价于下面：

 ``` js
function f () { return 'a' }
let a
if ([1][0] === 'undefined') {
  a = f()
} else {
  a = [1][0]
}
 ```

#### 默认值可使用已结构的其他变量

解构时，默认值可设置成已结构的其他变量。

``` js
let [a = 1, b = a] = []
a // 1
b // 1
```

变量的解构赋值是从前到后进行的，使用时也要注意，不要使用尚未解构赋值的变量，否则会报错。

``` js
let [x = y, y = 1] = [] //  错误：Uncaught ReferenceError: Cannot access 'y' before initialization
```

## 对象的解构赋值

1. 对象的解构赋值是通过属性名进行匹配。

完全解构：

``` js
let { foo, bar } = { foo: 1, bar: 2 }
foo // 1
bar // 2
```

部分解构：

``` js
let { foo } = { foo: 1, bar: 2 }
foo // 1
```

解构不成功时，值为undefined

``` js
let { foo, bar } = { foo: 1 }
foo // 1
bar // undefined
```

### 变量名与属性名不一致

其实，上面对象解构的例子是缩写形式：

``` js
let { foo, bar } = { foo: 1, bar: 2 }
// 等价于⬇
let { foo: foo, bar: bar } = { foo: 1, bar: 2 }
```

所以，当需要赋值的变量名与属性不一致时，可写成下面这样：

``` js
let { foo: a, bar: b } = { foo: 1, bar: 2 }
a // 1
b // 2
```

### 对象解构的内部机制

对象解构的内部机制是先找到同名属性，再赋值给对应的变量，真正被赋值的是后者：

``` js
let { foo: a } = { foo: 1 }
a // 1
foo // Uncaught ReferenceError: foo is not defined
```

`foo`只是它的匹配模式，真正赋值的是变量`a`。如果想`foo`也被赋值，可以写成下面这样：

``` js
let { foo, foo: a } = { foo: 1 }
foo // 1
a // 1
```

### 嵌套的对象解构

``` js
let obj = {
  p: [
    1,
    { m: 2 }
  ]
}

let { p, p: [a, { m: b }] } = obj
p // 1,[object Object]
a //1
b //2
```

在嵌套解构赋值中，若父属性不存在，则会报错：

``` js
let { foo: { bar } } = {} // Uncaught TypeError: Cannot destructure property `bar` of 'undefined' or 'null'.
// 上面的解构代码等价于⬇：
let obj = {}
let bar = obj.foo.bar
```

### 嵌套赋值

``` js
let obj = {};
let arr = [];
({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
obj // {prop: 123}
arr // [true]
```

注意：这段代码中结构部分被小括号抱起来，否则运行会报错。js引擎遇到`{`会将其认为是代码块，而不是表达式。

### 默认值

与数组的解构赋值一样，对象的解构赋值也可以指定默认值，默认值规则与数组解构赋值也相同。

``` js
let { foo = 1 } = {}
foo // 1

let { a = 1, b = 2 } = { a: null, b: undefined }
a // null
b // 2

let { message: msg = 'this is a message.' } = {}
msg // 'this is a message.'

let { m = 1, n = m + 1 } = {}
m // 1
n // 2
```

### 对数组解构

由于数组也属于对象，所以也可以对数组进行解构：

``` js
let arr = [1, 2, 3]
let { 0: first, [arr.length - 1]: last, length, push } = arr
first // 1
last // 3
length // 3
push // ƒ push() { [native code] }
```