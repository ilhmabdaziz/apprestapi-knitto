const mysql = require("mysql");

// buat koneksi database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "knitto_restapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log(`Mysql terkoneksi`);
});

module.exports = conn;