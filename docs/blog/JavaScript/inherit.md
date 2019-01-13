# 继承

继承，就是自类继承父类。但是继承目的是什么？是子类的实例能够使用父类的属性和方法。  
每个类都有两种属性/方法：

1. 实例属性/方法：每个实例之间独立，不被共享。
2. 原型属性/方法：每个实例共享。

实例属性/方法不该被共享，而共享的应该是原型属性/方法。  

## 父类

``` javascript
function Animal (name) {
  // 实例属性
  this.name = name
  // 实例方法
  this.sleep = function () {
    console.log(this.name + '正在睡觉!')
  }
}

// 原型方法
Animal.prototype.eat = function (food) {
  console.log(this.name + '正在吃' + food)
}
```

## 构造继承

为了能让子类实例使用父类属性和方法，先利用利用父类构造函数来构造子类实例对象试试。

``` javascript
function Cat (name) {
  // 借用父类构造函数构造自类实例的实例属性/方法。
  Animal.call(this)
  this.name = name
}
```

特点：借用父类构造函数构造自类实例的实例属性/方法。
优点：可实现多继承。(在自类构造函数中call多个父类的构造函数)
缺点：

1. 只能继承父类的实例属性/方法，无法继承父类原型属性/方法。
2. 实例是并不是父类的实例。

理解：
其实这种无法继承父类原型属性/方法的继承方式，严格来说并不能说是继承。但这里主要用于理解如何利用父类的构造函数来继承父类的实例属性/方法。

[![inherit_构造继承.png](https://i.loli.net/2019/01/12/5c39a69b37fa9.png)](https://i.loli.net/2019/01/12/5c39a69b37fa9.png)

## 实例继承

``` javascript
function Cat (name) {
  var instance = new Animal()
  instance.name = name
  return instance
}
```

特点：借用父类实例作为子类实例，在父类实例基础上增加子类实例属性/方法，并返回这个父类实例对象作为子类实例。

优点：

1. 子类继承了父类全部属性/方法。

缺点：

1. 是父类的实例，不是子类的实例。
2. 无法多继承。

[![inherit_实例继承.png](https://i.loli.net/2019/01/12/5c39a6b014923.png)](https://i.loli.net/2019/01/12/5c39a6b014923.png)

## 拷贝继承

既然要继承父类的全部属性和方法，那直接拷贝可以实现。

```javascript
function Cat (name) {
  const instance = new Animal()
  for (var k in instance) {
    Cat.prototype[k] = instance[k]
  }
  this.name = name
}
```

特点：拷贝父类实例的可枚举属性/方法，复制给自类原型对象。

优点：

1. 可实现多继承。

缺点：

1. 实例对象是子类实例，不是父类实例。
2. 父类的原型属性/方法，被子类作为实例属性/方法。
3. 无法继承不可枚举属性/方法。
4. 拷贝属性，效率低。

[![inherit_拷贝继承.png](https://i.loli.net/2019/01/12/5c39a6c22c29b.png)](https://i.loli.net/2019/01/12/5c39a6c22c29b.png)

## 原型链继承

``` javascript
function Cat (name) {
  this.name = name
}
Cat.prototype = new Animate()
Cat.prototype.constructor = Cat
```

特点：将父类实例对象作为子类的原型对象。

优点：

1. 实例对象是自类的实例，也是父类的实例。
2. 父类新增原型属性/方法，子类都能访问到。

缺点：

1. 父类的实例属性/方法被子类共享，也就是说来自原型对象的所有属性被所有实例共享。
2. 无法实现多继承。

[![inherit_原型链继承.png](https://i.loli.net/2019/01/12/5c39a6d33e9e7.png)](https://i.loli.net/2019/01/12/5c39a6d33e9e7.png)

## 组合继承

综合上面几种继承方式的优点，将父类的原型属性/方法和实例属性/方法拆分开继承。

``` javascript
function Cat (name) {
  Animal.call(this)
  this.name = name
}
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat
```

特点：利用父类的构造函数来构造子类的实例方法/属性，用父类实例对象作为子类的原型对象。

优点：

1. 实例对象是自类的实例，也是父类的实例。
2. 父类新增原型属性/方法，子类都能访问到。
3. 父类的实例属性/对象和原型属性/对象被拆分开继承，保证了不该共享的属性不被共享。(构造函数中的实例属性/方法覆盖掉了原型中的共享问题。)

缺点：

1. 父类的构造函数执行了两次。

[![inherit_组合继承.png](https://i.loli.net/2019/01/12/5c39a6e1a0afd.png)](https://i.loli.net/2019/01/12/5c39a6e1a0afd.png)

## 寄生组合继承

为了解决组合继承中父类构造函数被调用两次的问题，提出了此继承方法。

``` javascript
function Cat (name) {
  Animal.call(this)
  this.name = name
}
(function () {
  var Super = function () { }
  Super.prototype = Animal.prototype
  var instance = new Super()
  Cat.prototype = instance
})()
Cat.prototype.constructor = Cat
```

特点：对于组合继承中的问题，利用了一个第三者类，将父类的原型挂载这个第三者类上，完全做到了父类的实例属性/方法和原型属性/方法的拆分。

优点：

1. 继承上面所有继承方式的优点。

[![inherit_寄生组合继承.png](https://i.loli.net/2019/01/12/5c39a6efc128e.png)](https://i.loli.net/2019/01/12/5c39a6efc128e.png)

::: tip
在babel中对于es6中的继承，也是以此方法转的es5。
:::

另外，可能会想到这种模式来继承

``` javascript
function Cat (name) {
  Animal.call(this)
  this.name = name
}
Cat.prototype = Animal.prototype
Cat.prototype.constructor = Cat
```

这种方式也实现了父类的实例属性/方法和原型属性方法分别继承，而且写法要比寄生组合继承，为什么不采用这种方法呢？

答案其实很简单。

这样写，父类和子类公用一个原型对象。若想为子类增加原型属性/方法，会对父类也造成影响。这并不是继承所期望的，所以不采用这种方式，而要通过一个宿主来做原型属性/方法的继承。

``` javascript
// 对子类原型增加一个fly方法
Cat.prototype.fly = function () {
  console.log(this.name + 'is flying')
}
// Test Code
const cat = new Cat('tom')
const animal = new Animal()
cat.fly() // tom is flying
animal.fly() // animal is flying
```

通过代码可以看到，为子类原型增加了方法，对父类也造成了影像，所以这种方式不可取。

## 总结

1. 继承的目的是继承父类的属性/方法。
2. 一个类的属性/方法可分为实例属性/方法和原型属性/方法，他们在是否被类的每个实例所共享上有所区别。
3. 为了让父类的父类实例方法/属性不被子类的每个实例对象共享，拆分他们继承是一个很好的思路。
4. 父类的原型和子类的原型不能是一个原型对象，这样对子类的原型对象进行修改，同时也会对父类的原型对象造成修改。所以需要一个宿主来寄生，使子类的和父类的原型对象不是同一个对象，且避免了两次调用父类构造函数的问题。