"use strict";

const connection = require("./koneksi");
const response = require("./res");

exports.index = (req, res) => {
  response.resultJSON("Aplikasi REST API berjalan!", res);
};

exports.getMaterial = (req, res) => {
  connection.query("SELECT * FROM Bahan", (err, rows, field) => {
    if (err) {
      console.log(err);
    } else {
      response.resultJSON(rows, res);
    }
  });
};
