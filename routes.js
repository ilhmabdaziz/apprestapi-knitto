"use strict";

module.exports = (app) => {
  const line = require("./controller");

  app.route("/").get(line.index);
};
