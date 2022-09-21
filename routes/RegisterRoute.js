const router = require("express").Router();
const RegisterController = require("../controllers/RegisterController");

router.get("/Register", RegisterController.register_get);

router.post("/Register", RegisterController.register_post);

module.exports = router;
