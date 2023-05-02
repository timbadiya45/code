import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql";

console.log("Hello CodeSandbox");
//const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// var mysql = require("mysql");

const  app = express();
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
//app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createConnection({
  host:"auth-db983.hstgr.io",
  user:"u890458604_wealmery",
  password: "Gmtlife@817",
  database:"u890458604_wealmery"
})

app.get("/", (req, res) => {
  db.query("SELECT * FROM Products", function (error, result, fields) {
    if (error) throw error;
    console.log(result,"vishal");
    res.send(result);
  });
});

app.get("/:id", (req,res) => {
  const param = req.params.id;
  // console.log(param);
  const query = `SELECT * FROM Products where id LIKE ${param}`;
  db.query(query, function(error, result) {
    console.log(result);
    res.send(result);
  })
})

app.listen(5000, () => {
  console.log("Server is running on 5000");
})


/*const db = mysql.createConnection({
    host:"auth-db983.hstgr.io",
    user:"u890458604_wealmery",
    password: "Gmtlife@817",
    database:"u890458604_wealmery"
  })
  
  console.log(db);
  
  db.connect(function(err) {
      if (err) throw err;
      db.query("SELECT * FROM Products", function (err, result, fields) {
        if (err) throw err;
        console.log(result,"vishal");
      });
    }); */
/*
app.get("/", function (req, res) {
    
        res.send("vishal");
 
});

var server = app.listen(5000, function () {
  console.log("Server is running..");
});
*/