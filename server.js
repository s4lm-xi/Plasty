const express = require("express");
const bodyParser = require("body-parser");
const users = ['Sam', 'Aysh', 'Sal'];
const pass = "0000";

app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));



app.post("/", async function(req, res){
  var username = req.body.user;
  var password = req.body.pass;
  var found = true;
  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
  if(users.includes(String(username)) && password==pass){
    res.sendFile(__dirname + "/homepage/index.html")

  }else{
    res.send("<h1>Invalid Credentials!</h1>");
    found=false;
  }


});


app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000");
})
