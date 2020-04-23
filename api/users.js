const router = require("express").Router();
const Users = require("./users-model");

router.get("/", (req, res) => {
  Users.getAll().then((users) => res.json(users));
});

module.exports = router;
