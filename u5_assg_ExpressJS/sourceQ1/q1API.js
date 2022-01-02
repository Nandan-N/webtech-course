var express= require('express');
var MongoClient= require('mongodb').MongoClient;
var router= express.Router();

router.get("/", function(req,res) {
  MongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology:true}, function(err,client){
    if (err) throw err;
    const db = client.db('bookDB');
    db.collection('bookCollection').find(req.query).toArray(function(err,objs) {
      res.send(objs);
    });
  });
});

router.get("/:id",function(req,res){
  MongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology:true}, function(err,client) {
    if (err) throw err;
    const db = client.db('bookDB');
    db.collection('bookCollection').findOne({book_id:parseInt(req.params.id)}, function(err,objs) {
      res.send(objs);
    });
  });
});

router.post("/post",function(req,res){
  MongoClient.connect("mongodb://localhost:27017",{useUnifiedTopology:true}, function(err,client){
    if (err) throw err;
    const db= client.db('bookDB');
    db.collection('bookCollection').insert(req.body, function(err,objs){
      res.send("Save successful");
    });
  });
});

router.put("/:price", function(req,res){
  MongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology:true}, function(err,client){
    if (err) throw err;
    const db= client.db('bookDB');
    db.collection('bookCollection').update({book_price:req.params.price}, {$set: req.body }, { new: true, upsert: true, returnOriginal: false }, function(err,objs){
      res.send("Update successful");
    });
  });
});

module.exports = router
