const router = require("express").Router();
const task = require("../models/taskSchema");

router.get("/tasks", async (req, res) => {
  const allTask = await task.find();
  res.render("Tasks", { task: allTask });
});

router.get("/delete/task/:_id", (req, res) => {
  const { _id } = req.params;
  task
    .deleteOne({ _id })
    .then(() => {
      console.log("Deleted Task Successfully!");
      res.redirect("/tasks");
    })
    .catch((err) => console.log(err));
});

router.post("/add/task", (req, res) => {
  const newTask = new task({ task: req.body.task });

  // save the todo
  newTask
    .save()
    .then(() => {
      console.log("Successfully added task!");
      res.redirect("/tasks");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
