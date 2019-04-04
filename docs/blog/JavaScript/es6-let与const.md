# ES6 let与const

学习本章内容，需要了解一下内容：

1. ES5中只有全局全局作用域和函数作用域，没有块级作用域。
2. ES6中增加块级作用域，但由于常用宿主都需要兼容ES5，所以如果使用ES5的代码，并不会体现ES6的块级作用域。

## let

1.let命令用于声明变量，与var不同的是，let声明的变量只在所在的作用域内有效，作用域外无法访问。

``` js
{
  var a = 'aa'
  let b = 'bb'
}
console.log(a) // aa
console.log(b) // Uncaught ReferenceError: b is not defined
```

2.let没有变量提升，无法在声明前获取、使用。

ES6规定，在区块内使用`let`或`const`声明的变量，在声明前使用这些变量就会报错。

``` js
console.log(a) // undefined
var a = 'aa'

console.log(b) // Uncaught ReferenceError: Cannot access 'b' before initialization
let b = 'bb'
```

3.暂时性死区

所谓暂时性死区，进入当前作用域，所要使用的变量就已经存在了，但此时无法获取。等到引擎执行变量声明那一行代码后，变量才可以获取、使用。

在js代码块内，使用let声明变量之前，此变量不可用。这在语法上称为“暂时性死区”。

比较隐蔽的暂时性死区导致错误的例子：

``` js
function test(a=b,b=2){
  return [a,b]
}
```

实际上，函数括号内参数部分、if小括号的部分相对于`{}`大括号来说都是一个父级作用域，所以在ES6中上面的函数实际上是这样的：

``` js
function test ( let a = b, let b = 2){
  return [a,b]
}
```

在`let a = b`部分，变量`b`在使用`let`声明前使用，属于暂时性死区，所以这样写会报错。

4.不受外部影响

在块级作用域内使用let声明变量，此变量就绑定到这个作用域，不受再受外部影响。

``` js
var a = 'aa'
let b = 'bb'
{
  let a = '11'
  let b = '22'
  console.log(a) // 11
  console.log(b) // 22
}
console.log(a) // aa
console.log(b) // bb
```

5.不允许重复声明

在同一作用域内，使用`let`声明的变量不允许在此作用域内任意地方重复声明。

``` js
{
  var a = 'aa'
  let a = 'bb' // Uncaught SyntaxError: Identifier 'a' has already been declared
}
```

所以也不能在函数内重复声明参数：

``` js
functio test (a,b){
  let a = 'aa' // Uncaught SyntaxError: Identifier 'a' has already been declared
}
```

## 块级作用域与函数声明

ES5规定，函数只能在顶层作用域和函数作用于中声明，不能在块级作用域中声明，否则会报错。但为了兼容过去的代码，浏览器并没有遵守这个规则。
ES6中规定，允许在块级作用域中声明函数，但这个声明的行为类似使用`let`，声明的函数无法在块级作用域外访问。
另外，ES6块级作用域中允许声明函数的规则，只有在使用大括号`{}`的情况成立。

``` js
function test() { console.log('aa') }
{
    function test() { console.log('bb') } // 在ES6中，这行代码会被解释成这样: let test = function(){ ... }
    test()
}
test()
```

这段代码在浏览器中执行会输出`bb bb`。是因为浏览器为了兼容ES5，会按照ES5的方式处理这段代码。  
如果在纯ES6的环境中执行这段代码，会输出`bb aa`。

所以如果非要在块级代码中声明函数，最好使用函数表达式，而不是函数声明，避免浏览器因兼容ES5导致执行结果并不符合ES6规则。

## const

`const`用于声明只读常量，一旦声明无法更改。

1.由于无法更改，所以使用`const`声明常量，必须在声明时初始化，否则会报错。
2.`const`与`let`的作用域相同，只在声明的块级作用域内有效。
3.`const`与`let`都不会进行变量提升，同样存在暂时性死区的情况，只能在声明后使用。
4.`const`与`let`声明的全局变量，不属于顶层对象的属性。

``` js
let a = 'aa'
const b = 'bb'
console.log(window.a) // undefined
console.log(window.b) // undefined
```

5.`const`声明的变量本质上是保持变量指向的内存地址所保存的数据不得改动。

    - 对于值类型数据来说，值就保存在变量指向的内存地址，因此等同于常量。
    - 对于引用类型数据来说，变量指向的内存地址，实际上保存的是一个指向实际数据的指针，`const`只能保证这个指针固定，而不能控制这个指针指向的实际数据结构的修改。

``` js
const a = 'a'
a = 'aa' // Uncaught TypeError: Assignment to constant variable.

const b = { bar:'bar', foo:'foo'}
b.bar = '11'
console.log(b.bar) // 11
b = {} // Uncaught TypeError: Assignment to constant variable.
```