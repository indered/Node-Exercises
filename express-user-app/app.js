"use strict";

var express = require("express");
var addCreatedDate = require("./middleware/addDate");
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/static", express.static(__dirname + "/static"));
app.use(addCreatedDate);
// app.set("view engine", "pug");
// app.set("views", __dirname + "/static/views");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE");
    return res.status(200).json({});
  }
  next();
});

// app.get("/add", (req, res) => {
//   res.render("add");
// });

var routes = require("./routes");

app.use("/users", routes);

app.get("/about", (req, res) => {
  res.send("made by mahesh");
});

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;

  next(err);
});

//Error Handler

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
  next();
});

app.listen(3001, () => {
  console.log("the  server is running on 3001");
});
