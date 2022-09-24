const User = require("../models/userSchema");
const Task = require("../models/taskSchema");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // duplicate error code
  if (err.code === 11000) {
    errors.email = " The email is already registered ";
    return errors;
  }
  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

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
      confirmPassword,
    });
    const newUserTask = await Task.create({
      email,
    });
    res.status(201).json([newUser, newUserTask]);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
