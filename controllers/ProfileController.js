const user = require("../models/userSchema");

module.exports.profile_get = (req, res) => {
    const id = "6331d7714f88df7b2329a3b6";
    user.findById(id).then((result) => {
      res.render("Profile", { user: result });
    });
    console.log("Current page:Profile");
  }