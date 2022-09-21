// express
const express = require("express");

// express using as app
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname + "/files"))

// middlewares
app.use(express.urlencoded({ extended: true }));

// mongoose for db
const mongoose = require("mongoose");

// port number
const port = 3000;

// routes
//app.use(require("./routes/index"))
app.use(require("./routes/TasksRoute"));
app.use(require("./routes/RegisterRoute"));
app.use(require("./routes/CoursesRoute"));
app.use(require("./routes/ProfileRoute"));

// import of schema
const user = require("./models/userSchema");
const task = require("./models/taskSchema");

// body-parser
const bodyparser = require("body-parser");
const { json } = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("Home");
  console.log("Welcome to LMS Home");
});

app.get("/login", function (req, res) {
  res.render("Login");
});

app.get("*", function (req, res) {
  res.sendStatus(404);
});

// app.get("/logout", function(req, res) {
//   req.session.destroy(() => {
//    req.logout();
//    res.redirect("/login"); //Inside a callback… bulletproof!
//   });
//  });

app.get("/logout", function (req, res) {
  delete req.session.user_id;
  res.redirect("/login");
});

// to connect to mongodb
const dburl =
  "mongodb+srv://navadeepan:navadeepan@learnandbuild.tmmen.mongodb.net/test";
mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true })
  .then((result) => app.listen(port), console.log("DB Connection Successful"))
  .catch((err) => console.log(err));
