# query

## 根据数组长度值查询。

通过`$size`操作符来匹配数组的长度：

``` js
// 长度为2
db.collection.find( { field: { $size: 2 } } );
```

注意：`$size`操作符值只能是数字，如果想根据长度范围匹配，不可以写成这样：

``` js
// 错误
db.collection.find( { field: { $size: { $gt: 2  } } } );
```

若要通过数组长度范围过滤，请看下一节：根据数组长度范围查询。

## 根据数组长度范围过滤。

这里有两种方法：

- 通过`$exist`操作符查询
- 通过`$where`查询

数据：

``` js
// 数据
/* 1 */
{
    "_id" : ObjectId("5c958bb95c4fb937e9111a79"),
    "a" : 1,
    "b" : 2,
    "c" : [
        "22",
        "33",
        "44"
    ]
}

/* 2 */
{
    "_id" : ObjectId("5c958be35c4fb937e9111a87"),
    "a" : 1,
    "b" : 2,
    "c" : [
      undefined
    ]
}

/* 3 */
{
    "_id" : ObjectId("5c958bec5c4fb937e9111a89"),
    "a" : 1,
    "b" : 2,
    "c" : 3
}
```

### $exist操作符查询

通过`$exist`判断数组某项是否有值来判断数组的长度：

``` js
db.getCollection('test').find({'field.index': {$exists: true}})`
```

例子：

``` js
// 过滤字段'c'值为数组，并且长度大于等于2的Document
db.getCollection('test').find({'c.1': {$exists: true}})`
```

``` js
// result
{
    "_id" : ObjectId("5c958bb95c4fb937e9111a79"),
    "a" : 1,
    "b" : 2,
    "c" : [
        "22",
        "33",
        "44"
    ]
}
```

### 通过$where操作符查询

``` bash
# 查询 字段c为数组且长度小于2
db.getCollection('test').find({ $where: "this.c.length < 2" })
```

``` js
// result
/* 1 */
{
    "_id" : ObjectId("5c958be35c4fb937e9111a87"),
    "a" : 1,
    "b" : 2,
    "c" : [
        undefined
    ]
}

/* 2 */
{
    "_id" : ObjectId("5c958ec55c4fb937e9111ae9"),
    "a" : 1,
    "b" : 2,
    "c" : [
        "11"
    ]
}
```

## skit / limit / sort 执行顺序

在查询中同时使用skit、limit、sort时，无论他们出现的顺序如何，总是按照sort、skip、limit的顺序执行。

``` bash
# 无论顺序如何变化，执行顺序都一致。
db.collection.find().sort().skip().limit()
```

如果对他们的执行顺序有要求，可以使用aggregate。aggregate有管道流的性质，会按照出现的先后顺序执行。

``` bash
# 利用aggregate管道流性质控制执行顺序。
db.collection.aggregate({ $limit: 10 }, { $sort: { field: 1 } }, { $skip: 10 })
```

## 按照时间排序

### 字符串时间类型

MongoDB中时间类型为ISODate，但如果时间为字符串格式，如`2019-02-01`，也可以进行排序，无需进行其他操作。