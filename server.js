const express = require("express");
const server = express();

const usersRouter = require("./api/users");

server.use(express.json());
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running..." });
});

module.exports = server;
