const router = require("express").Router();
const CoursesController = require("../controllers/CoursesController")

router.get("/courses", CoursesController.courses_get);

module.exports = router;
