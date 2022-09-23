const router = require("express").Router();
const user = require("../models/userSchema");

router.get("/profile", function (req, res) {
  const id = "632b5498dcb61e421962beac";
  user.findById(id).then((result) => {
    res.render("Profile", { user: result });
  });
});

module.exports = router;
