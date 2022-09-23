const task = require("../models/taskSchema");

module.exports.tasks_get = async (req, res) => {
  const allTask = await task.find();
  res.render("Tasks", { task: allTask });
};

module.exports.tasks_get_id = (req, res) => {
  const { _id } = req.params;
  task
    .deleteOne({ _id })
    .then(() => {
      console.log("Deleted Task Successfully!");
      res.redirect("/tasks");
    })
    .catch((err) => console.log(err));
};

module.exports.tasks_post = (req, res) => {
  const newTask = new task({ task: req.body.task });

  // save the todo
  newTask
    .save()
    .then(() => {
      console.log("Successfully added task!");
      res.redirect("/tasks");
    })
    .catch((err) => console.log(err));
};
