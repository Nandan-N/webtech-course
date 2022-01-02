var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/bookDB";

MongoClient.connect(url, { useUnifiedTOpology: true }, function (err, db) {
  
    if (err) throw err;
    console.log("Database Created");
    var dbo = db.db("bookDB");

    // collection creation
    dbo.createCollection("bookCollection", function (err, res) {
        if (err) throw err;
        console.log("Collection Created");
    });

    // inserting many documents
    var myObjs = [{"book_id":1, "book_name":"qwerty", "book_price":"100", "book_author":"uiop"},
                  {"book_id":2, "book_name":"asdfg", "book_price":"200", "book_author":"ghjkl"},
                  {"book_id":3, "book_name":"zxcvb", "book_price":"300", "book_author":"nm"},
                  {"book_id":4, "book_name":"wdfvb", "book_price":"400", "book_author":"oijhb"}]

    dbo.collection("bookCollection").insertMany(myObjs, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted : ", res.insertedCount);
        db.close();
    });

});
