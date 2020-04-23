const db = require("../data/db-config.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(user) {}

function update(id, changes) {}

function remove(id) {}

function getAll() {
  return db("users");
}

function findById(id) {}
