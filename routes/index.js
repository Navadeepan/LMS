const router = require("express").Router()
const Task = require("../models/taskSchema");

// routes will be here....
router.get("/tasks", async(req, res) => {
    const allTask= await Task.find();
    res.render("Tasks", {task: allTask})
})


module.exports = router;