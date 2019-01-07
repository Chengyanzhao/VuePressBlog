# prototype和constructor

在js的类与继承中，有两个重要知识点，即`prototype`和`constructor`，也称原型和构造函数。  
有的同学总是对这两个东西迷迷糊糊，咱们来简单盘一盘他俩。

## js对象中的属性

在js中：

1. 函数也是对象。
2. 每个对象都有一个`constructor`属性，指向构造它的函数。
3. 每个对象都有一个`__proto__`内置属性，是js内部使用寻找原型链的属性。指向创建它的函数对象的原型对象prototype（即构造函数的prototype）。
4. 只有函数对象拥有`prototype`属性。

## 函数中的prototpye

首先，咱们先说一说JavaScript中的函数。

1. 函数对象都有一个`prototype`属性，称为原型。它指向一个对象，这个对象俗称为原型对象。
2. 这个原型对象中有一个`constructor`属性，这个属性值指向这个函数本身。

这里定义一个函数

``` javascript
function Person(){
  // code.
}
console.log(Person.prototype.constructor === Person) // true
```

![prototype and constructor_1.png](https://i.loli.net/2019/01/07/5c334ec1ad3ee.png)

## 构造函数

当一个函数遇到了`new`关键字，他就可以被当做构造函数使用了。用C#等面向对象的说法，这个函数对象是一个类。  
将上面`Person`函数当做构造函数，代码如下：

``` javascript
function Person(name){
  this.name = name
}
const person = new Persion('tim')

console.log(person.name) // 'name'
console.log(person.constructor === Person) // true
console.log(person.__proto__ === Person.prototype) // true
```

1. 实例`person`的`constructor`属性指向构造函数`Person`。
2. 实例`persion`的`__proto__`属性指向构造函数的原型对象。

![prototype and constructor_2.png](https://i.loli.net/2019/01/07/5c335ee9ca8a8.png)

## 其他

1. `prototype`主要用于继承。
2. `__proto__`主要用于原型链。
3. `constructor`代表构造函数。
