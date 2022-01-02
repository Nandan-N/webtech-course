var express = require("express");
var app = express();
var fileupload = require("express-fileupload");

app.use(fileupload());
app.post('/upload',function(req,res){

  if(!req.files || req.files.length==0)
    return res.status(400).send("No file to upload");

  var sampleFile = req.files.sampleFile;

  sampleFile.mv("./files/" + sampleFile.name, function(err){

    if(err) throw (err);
    res.send("File" + sampleFile.name + " Uploaded");
    });

});

app.get("/form",function(req,res){
var retform = "<form action='http://localhost:4000/upload' method='post' encType='multipart/form-data'><input type='file' name='sampleFile'/> <input type='submit' value='upload'/></form>";
res.send(retform)
});

app.listen(4000,function(){
  console.log("Server running ...")
});
