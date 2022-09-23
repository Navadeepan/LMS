const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tasks = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    task: {
      type: [String],
    },
  },
  { timestamps: true, versionKey: false }
);

const task = mongoose.model("task", tasks);

module.exports = task;
