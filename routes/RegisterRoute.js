const router = require("express").Router();
const user = require("../models/registerSchema");

router.get("/Register", function (req, res) {
  res.render("Register");
});

router.post("/Register", function (req, res) {
  let userdata = new user({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  userdata
    .save()
    .then(() => {
      res.send("Successfully registered");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
