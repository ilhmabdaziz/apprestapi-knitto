"use strict";

const connection = require("./koneksi");
const response = require("./res");

exports.index = (req, res) => {
  response.resultJSON("Aplikasi REST API berjalan!!!", res);
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
    "SELECT * FROM materials WHERE id = ?",
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

exports.addMaterial = (req, res) => {
  let nama = req.body.nama;
  let total = req.body.total;
  let trend = req.body.trend;

  connection.query(
    "INSERT INTO materials (nama,total,trend) VALUES (?,?,?)",
    [nama, total, trend],
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        response.resultJSON(`success added data ${nama}`, res);
      }
    }
  );
};

exports.updateMaterial = (req, res) => {
  let id = req.body.id;
  let nama = req.body.nama;
  let total = req.body.total;
  let trend = req.body.trend;

  connection.query(
    "UPDATE materials SET nama=?, total=?, trend=? WHERE id=?",
    [nama, total, trend, id],
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        response.resultJSON(`success update data ${nama}`, res);
      }
    }
  );
};

exports.deleteMaterial = (req, res) => {
  let id = req.body.id;

  connection.query(
    "DELETE FROM materials WHERE id=?",
    [id],
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        response.resultJSON(`success delete id ${id}`, res);
      }
    }
  );
};
