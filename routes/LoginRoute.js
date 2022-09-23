const router = require("express").Router();
const LoginController = require("../controllers/LoginController");

router.get("/Login", LoginController.login_get);

module.exports = router;