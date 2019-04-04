# update

## 数值计算

### 使用$inc做数值计算

用法：
`{ $inc: { <field1>: <amount1>, <field2>: <amount2>, ... } }`

例子：

``` js
// data
{
    "_id" : ObjectId("5c97463258632c1db4eea1b6"),
    "a" : 1,
    "obj" : {
        "b" : 2
    }
}
```

``` js
// update
db.collection.update({}, { $inc: { a: 5, 'obj.b': -2 } })
```

``` js
// result
{
    "_id" : ObjectId("5c97463258632c1db4eea1b6"),
    "a" : 6.0,
    "obj" : {
        "b" : 0.0
    }
}
```