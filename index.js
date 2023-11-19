const express = require('express')
const app = express()
const path=require("path");
const data=require("./data.json");
const port = 3000
// middleware
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
// template engine
app.set("view engine",'ejs');
app.set("views",path.join(__dirname,"/views"));


app.get('/:username', (req, res) => {
  const data=require("./data.json");
  let {username}=req.params;
  let data1=data[username];
  if(data1){
    res.render('insta.ejs',{data1});
  }else{
    res.render('error.ejs');
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})