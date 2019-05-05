"use strict";

var users = require("./users");
var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.send(users);
});

router.post("/add", (req, res, next) => {
  console.log(req.body);
  let newUser = req.body;
  console.log(newUser);
  users.push(newUser);
  res.send(users);
});

router.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  users = users.filter(u => u.id != id);
  res.send(users);
});

module.exports = router;
