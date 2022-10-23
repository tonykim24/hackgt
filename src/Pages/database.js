import React from "react";

export default function database() {
  const mysql = require("mysql");
  const express = require("express");
  const app = express();
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "auctionline",
  });
  app.get("/mydb", function (req, res) {
    connection.query(queryString, function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    });
  });
  // connection.connect((err) => {
  //     if (err) {
  //     console.log(err);
  //     return;
  //     }
  //     console.log("Database connected");
  // });
  return <zing-grid src="http://localhost:3000/mydb"></zing-grid>;
}
