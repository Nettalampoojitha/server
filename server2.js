const express=require('express')
const app=express()
app.get('/honey',function(req,res){
    res.send("honeyproductdata")
})
app.get('/clothes',function(req,res){
    res.send("clothesproductdata")
})
app.get('/shampoo',function(req,res){
    res.send("shampooproductsdata")
})
app.listen(8085)