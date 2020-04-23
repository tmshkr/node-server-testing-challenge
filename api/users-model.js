const db = require("../data/db-config.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(user) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => id);
}

function update(id, changes) {}

function remove(id) {}

function getAll() {
  return db("users");
}

function findById(id) {
  return db("users").where({ id }).first();
}
