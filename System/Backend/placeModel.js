const db = require("./db");

const Place = {
  getAll: callback => {
    db.query("SELECT * FROM places", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM places WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO places SET ?", data, callback);
  }
};

module.exports = Place;
