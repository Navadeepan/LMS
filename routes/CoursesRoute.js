const router = require("express").Router();

router.get("/courses", function (req, res) {
  res.render("courses");
});

module.exports = router;
