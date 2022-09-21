const router = require("express").Router();
const user = require("../models/userSchema");

router.get("/profile", function (req, res) {
  const id = "6327379ea3c9fd85987480b4";
  user.findById(id).then((result) => {
    res.render("Profile", { user: result });
  });
});

module.exports = router;
