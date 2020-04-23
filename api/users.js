const router = require("express").Router();
const Users = require("./users-model");

router.get("/", (req, res) => {
  Users.getAll().then((users) => res.json(users));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.findById(id).then((user) => res.json(user));
});

module.exports = router;
