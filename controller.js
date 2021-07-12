"use strict";

const connection = require("./koneksi");
const response = require("./res");

exports.index = (req, res) => {
  response.resultJSON("Aplikasi REST API berjalan!", res);
};

exports.getMaterial = (req, res) => {
  connection.query("SELECT * FROM materials", (err, rows, field) => {
    if (err) {
      console.log(err);
    } else {
      response.resultJSON(rows, res);
    }
  });
};

exports.getMaterialById = (req, res) => {
  // res.send(req.params.id);
  let id = req.params.id;
  connection.query(
    "SELECT * FROM materials WHERE id_bahan = ?",
    [id],
    (err, rows, field) => {
      if (err) {
        console.log(err);
      } else {
        response.resultJSON(rows, res);
      }
    }
  );
};
