const User = require("../models/userSchema");

module.exports.register_get = (req, res) => {
  res.render("Register");
  console.log("Current page:Register");
};

module.exports.register_post = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const newUser = await User.create({
      name,
      email,
      password,
      confirmPassword
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).send('ERROR, User Not Created!');
  }
};