const Task = require("../models/taskSchema");

module.exports.tasks_get = async (req, res) => {
  const allTask = await Task.find();
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

module.exports.tasks_post = async (req, res) => {
  const {email} = req.body;
  try {
    const newUserTask = await Task.create({
      email,
      task:[],
    });
    res.status(201).json(newUserTask);
  } catch (err) {
    console.log(err);
    res.status(400).send('ERROR, User Not Created!');
  }
};

module.exports.tasks_put = (req,res) =>{
    const newTask = new task({ task: req.body.task });

  // save the todo
  newTask
    .save()
    .then(() => {
      console.log("Successfully added task!");
      res.redirect("/tasks");
    })
    .catch((err) => console.log(err));
}