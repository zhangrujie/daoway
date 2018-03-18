
var express = require('express')
var app = express()
app.use(express.static('public'))

require('../tools/index')

const ShopModel = require('../modules/shop')

app.get('/shoplist',function (req,res) {
  ShopModel.find({},function (list) {
    console.log(list);
    res.send({list:list})
  })
})

app.listen(3000)