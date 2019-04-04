## 其他

## 数值类型

MongoDB中默认数值类型为double，如果需要int类型数值，需要显式设置数据类型`NumberInt(num)`。

## 唯一值distince()

字段值去重，获取唯一值列表

``` bash
db.collection.distinct( <field>, query, options)
```