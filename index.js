const express = require('express');

//main app
const app = express();
//sub app
const admin =express.Router();

admin.get('/dashboard',(req,res)=>{
  //console.log("base url",req.baseUrl)
  //console.log("orignalurl",req.originalUrl)
 // console.log(req.path)
  res.send("admin dashboard")
});

app.use('/adminapp',admin)

//app.get('/home/hello',(req,res)=>{
 app.get('/student/:id',(req,res)=>{

  //console.log("base url",req.baseUrl)
  //console.log("orignalurl",req.originalUrl)
  //console.log(req.path)
  //res.send("admin dashboard")
    res.send("student page?")
})


app.listen(5000,()=>{
  console.log("server running.....")
})