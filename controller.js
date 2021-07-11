"use strict";

const connection = require("./koneksi");
const response = require("./res");

exports.index = (req, res) => {
  response.oke("Aplikasi REST API berjalan!", res);
};
