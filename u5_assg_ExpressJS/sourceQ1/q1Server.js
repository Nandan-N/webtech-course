var express= require('express');
var app = express();
var https=require('https');
var http = require('http');
var bodyParse= require("body-parser");
var studrouter = require("./q1API.js");
var MongoClient=require("mongodb").MongoClient; 
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var newd = {
  "book_id":4,
  "book_name":"helloWorld",
  "book_price":"500",
  "book_author":"Bjarne Stroustroup"
}

fetch("http://localhost:3000/book", {
  method:"POST",
  body: JSON.stringify(newd),
  headers:{'content-type':'application/json'}
}).then(res=>res.json).then(json=>console.log(json));

var newd = {
  "book_id":4,
  "book_name":"helloWorld",
  "book_price":"512",
  "book_author":"Bjarne Stroustroup"
}

fetch("http://localhost:3000/book/512", {
  method:"PUT",
  body: JSON.stringify(newd),
  headers:{'content-type':'application/json'}
}).then(res=>res.json).then(json=>console.log(json));

app.use(bodyParse.json());
app.use("/book",studrouter);

app.listen(3000, function(){
console.log("Server running ...")
});
