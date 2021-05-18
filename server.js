const express =require("express");

const bodyparser=require("body-parser");
const app= express();
app.use(bodyparser.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})


app.post("/",function(req,res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = (n1+n2);
  res.send("The answer is "+result);
})

app.get("/about",function(req,res){
  res.send("<h1>Mohanasundharam<h1/><p>Hi how are you?<p/><p>I am fine<p/>");
})
app.listen(3000,function(){
  console.log("Server has started on port 3000");
});
