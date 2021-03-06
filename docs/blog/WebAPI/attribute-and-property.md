# Attribute and Property

DOM中的`attribute`和`property`都被翻译成属性，有些书中也将`attribute`翻译为**特性**。工作中经常能用到他们，但我对这俩货一直迷迷糊糊，对于两者之间的异同搞不清。
写代码不能不求甚解，今天搞一搞他们。

::: tip
以下段落中，以"Attribute"指代DOM中的`attribute`，以"Property"指代DOM中的`property`。
:::

## 概念上的异同

对于Attribute和Property概念上的异同，在[Web 技术研究所 - Attribute和Property的区别](https://www.web-tinker.com/article/20115.html)
上看到一篇文章写的特别好，对于初学者有很大的帮助。我没办法比这篇文章更清楚的描述他们的概念，所以直接引用供大家理解：

> &emsp;&emsp;Attribute和Property都被翻译成“属性”，但是它们的本质不同。下面我们就从一些例子中来说说它们的区别吧！  
> &emsp;&emsp;“桌子上有个苹果”。Attribute仅仅是描述了这个“有苹果”的事实，而Property则是直指那个桌子上的苹果。这里的苹果是一个实体，用Attribute来描述只能说明这个事件的事实。它无法准确的描述出具体是哪个苹果在桌子上。再举个例子“我爸是李刚”。Attribute仅仅是描述了“李刚”这个名字，而Property则是直接代表“李刚”这个人（实体）。叫“李刚”这个名字的人很多，所以Attribute无法确切表示。而Property则是直指实体的，可以准确描述事物。但也不是说Attribute就绝对无法准确表示事物，只是Attribute只能用文字描述，所以它要精确描述一个东西的代价是比Property高了许多。比如描述“李刚”可以用他的身份证号码之类的，可是说不定人家的身份证还是伪造的，所以还需要更多的文字描述才能准确的说明一个东西。  
> &emsp;&emsp;那么既然Property比Attribute好，为什么还需要Attribute呢？就说李刚事件，过了这么多年了也许很多人都忘了。Property是保存在记忆（memory）中的，虽然一开始很准确，但是无法长期保存。我们经常会把需要长期保存的东西用文字描述下来，这时候就需要用到Attribute。而且Attribute和Property并不冲突，我们经常会翻阅一些旧资料来补充我们渐淡的记忆。  
> &emsp;&emsp;这些就是它们本质上的区别，在程序中我们可以用另外的方式说明它。Attribute是标记语言的概念，标记语言本身是一种文本，所以Attribute这种文本方式描述的性质在标记语言中很容易使用。而Property则是保存在内存（memory）中，而内存会随着程序运行结束被释放，因此变得无法长期储存。在JavaScript中，DOM对象通常都是多重继承的。同时继承了HTML和JavaScript的Object。Object是完完全全的内存对象，所以使用的是Property，而HTML本身是标记语言所以使用的是Attribute。当这两个东西被继承到同一个对象上的时候经常会让人混淆起来。由于一些Attribute是很常用的，比如id、class等，所以DOM把它们映射到了Property上以方便使用。这样我们就会遇到一个对象同时具有id这个Attribute和Property（由于class是保留字，所以它被映射到Property上时变成了className）。  
> &emsp;&emsp;虽然被DOM这样一搞就变得很乱，但是我们这样理解之后就很简单。只要是HTML标签上设置的属性就是Attribute，而直接在JavaScript中用点运算符操作的DOM对象属性就是Property。还有一些HTML自带的属性，它们同时是Attribute和Property。Attribute的数据类型永远都是字符串，而Property就可以非常丰富。

## 使用上的区别

1. Attribute对应的JavaScript对象存储在DOM对象的`attributes`属性中。
2. 在HTML元素标签中定义的属性，在转为JavaScript对象后，都会存在于DOM对象的`attributes`属性中。
3. Attribute的属性值只能是`String`类型，也就契合了上面引用文章中的观点，Attribute只存储描述性信息。
4. attrbute取值/赋值需要使用dom对象的`getAttribute()`/`setAttribute()`方法。
5. 使用`setAttribute`对dom特性进行赋值时，若特性是dom的属性(如id/class等)，则会同时改变property。

1. Property是dom实例对象的属性。
2. Property取值/赋值可直接用`.`来获取属性和赋值。
- 对property赋值，不会改变attribute值。

- 如果对元素value赋值，需要使用Attribute，如果直接对Property赋值，则只会修改元素的value属性，浏览器不会渲染新值。
- input元素在页面上输入值后，只会改变Property，不会修改Attribute。
- 而对其他属性，如id、class等赋值，Attribute和Property会互相影响。

## 表现上的区别

浏览器渲染元素时，HTML的属性部分根据Property来进行渲染，这部分的属性在页面上的表现与Property互相关联，一直保持一致。  
而HTML的自定义属性一直与Attribute保持一致。  
部分HTML标准属性在Property于Attribute中同时存在，且改变其中一个相同属性，另一个同名属性也被改变。

## 两者属性值同步

## 总结

1. 建议初学者理解一下[Web 技术研究所 - Attribute和Property的区别](https://www.web-tinker.com/article/20115.html)。
    - Attribute可理解为事物描述信息，而Property则指向事物实体。
2. Attribute存在于Property中，也就是DOM实例的`attributes`属性中。
    - 通过DOM的`getAttribute()`/`setAttribute()`来获取/设置Attribute。
3. Property指DOM对象的`property`，此处的DOM对象可以看成是一个`Object`的实例。
    - 通过`.`符号或`[]`来获取Property属性，也可通过此方法进行赋值，与JavaScript对象的操作相同。
4. HTML标签中的设置的属性，若同时也是Property接口自身带有的属性(如`id`/`class`/`title`/`value`/`href`等HTML语言的属性)，则这部分属性同时存在于Property和Attrubute中。
5. 对Attribute更新、新增属性时:
    - 属性值只能是字符串，若值为值类型，则会将值转为字符串；若值为对象，则调用对象的`toString()`方法，将返回值赋值给Attribute。
    - 属性值的增加或值的修改会体现在HTML元素中，在浏览器开发工具 Elements页面中的元素标签上有所体现。
    - 若属性同时是Property接口自身带有的属性(如`id`/`class`/`title`/`value`/`href`等HTML语言的属性)，对Attribute的赋值同时也会更改Property中对应属性值。
6. 对Property更新属性值时：
    - 若属性是Property接口自身带有的属性(如`id`/`class`/`title`/`href`等HTML语言的属性，除了`value`)，则也会改变Attribute对应属性值。
    - 若对`value`赋值，则只会改变`dom.value`的值，并不会修改Attribute中的`value`
    - 若属性不是Property接口自身带有的属性，则可只是简单对dom对象添加属性并赋值，对Attribute并无影响。
7. 带有`value`属性的元素(如`input`)，当在页面上修改其值时，Property中的`value`会随之更新，而Attribute中的`value`属性并不会更新。
8. jQuery提供的`attr()`和`prop()`对应的就是Attribute与Property原生使用方式。

**参考**
[W3school - HTML 全局属性](http://www.w3school.com.cn/tags/html_ref_standardattributes.asp)
[Web 技术研究所 - Attribute和Property的区别](https://www.web-tinker.com/article/20115.html)
[DOM系列：Attribute和Property_JavaScript, DOM, DOM系列 教程_w3cplus](https://www.w3cplus.com/javascript/dom-attributes-and-properties.html)