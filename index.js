
var express = require('express')
var app = express()
app.use(express.static('public'))

require('./tools/index')

const ShopModel = require('./modules/shop')
const ServiceSchema = require('./modules/serves')
const ItemSchema = require('./modules/items')
const ComentSchema = require('./modules/coments')

app.get('/shoplist',function (req,res) {
  ShopModel.find({},function (err,list) {
    if(err){
      console.log('cuo')
    }else{
    res.send({list:list})}
  })
})
app.get('/servelist',function(req,res){
  ServiceSchema.find({},function (err,list){
    if(err){
      console.log('cuo')
    }else{
      res.send({list:list})}
  })
})
app.get('/itemlist',function(req,res){
  ItemSchema.find({},function (err,list){
    if(err){
      console.log('cuo')
    }else{
      res.send({list:list})}
  })
})
// app.get('/comentlist',function(req,res){
//   ComentSchema.find({},function (err,list){
//     console.log(list);
//     if(err){
//       console.log('cuo')
//     }else{
//       res.send({list:list})}
//   })
// })

app.get('/comentlist',function (req,res) {
  var page = req.query.page
  // req.param()
  ComentSchema.find({}).limit(10).skip((page-1)*10).exec(function (err, data) {
    if(!err){
      res.send({comments:data})
    }
  })
})

app.listen(3000)