const mongoose = require("mongoose");
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Enter an email'],
      unique: true,
      lowercase: true,
      validate : [isEmail, 'Enter a valid email']
    },
    password: {
      type: String,
      required: [true, 'Enter an password'],
      minlength: [6, 'Password must be minimum 6 characters'],
    },
    confirmPassword: {
      type: String,
      required: [true, 'Enter an password'],
      minlength: [6, 'Password must be minimum 6 characters'],
    },
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
