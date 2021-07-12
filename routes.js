"use strict";

module.exports = (app) => {
  const line = require("./controller");

  app.route("/").get(line.index);

  app.route("/tampil").get(line.getMaterial);

  app.route("/tampil/:id").get(line.getMaterialById);

  app.route("/tambah").post(line.addMaterial);

  app.route("/ubah").put(line.updateMaterial);

  app.route("/hapus").delete(line.deleteMaterial);
};
