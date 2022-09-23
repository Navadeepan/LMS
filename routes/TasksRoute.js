const router = require("express").Router();
const TasksController = require("../controllers/TasksController");

router.get("/tasks", TasksController.tasks_get);

router.get("/delete/task/:_id", TasksController.tasks_get_id);

router.post("/add/task", TasksController.tasks_post);

module.exports = router;
