const User = require("../models/userSchema");

module.exports.login_get = (req, res) => {
  res.render("Login");
  console.log("Current page:Login");
};
