// program to insert records

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/empDB";

MongoClient.connect(url, { useUnifiedTOpology: true }, function (err, db) {
    if (err) throw err;
    console.log("Database Created");
    var dbo = db.db("empDB");

    // collection creation
    dbo.createCollection("Employee", function (err, res) {
        if (err) throw err;
        console.log("Collection Created");
    });

    // inserting many documents
    var myObjs = [{"emp_id":"100","emp_name":"Aqwerty","emp_dob":"12/1/1989", "emp_type":"night-shift","emp_dept":"IT"},
                  {"emp_id":"101","emp_name":"Basdfg","emp_dob":"13/2/1990", "emp_type":"day-shift","emp_dept":"HR"},
                  {"emp_id":"102","emp_name":"Czxcvb","emp_dob":"14/3/1991", "emp_type":"night-shift","emp_dept":"legal"},
                  {"emp_id":"103","emp_name":"Dpoiuy","emp_dob":"15/4/1992", "emp_type":"day-shift","emp_dept":"management"},
                  {"emp_id":"104","emp_name":"Elkjhg","emp_dob":"16/5/1993", "emp_type":"night-shift","emp_dept":"sales"}];

    dbo.collection("Employee").insertMany(myObjs, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted : ", res.insertedCount);
    });

    // display database
    dbo.collection("Employee").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    })
});
