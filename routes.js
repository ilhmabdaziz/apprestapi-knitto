"use strict";

module.exports = (app) => {
  const line = require("./controller");

  app.route("/").get(line.index);

  app.route("/tampil").get(line.getMaterial);

  app.route("/tampil/:id").get(line.getMaterialById);
};
