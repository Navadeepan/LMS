const router = require("express").Router();
const ProfileController = require("../controllers/ProfileController");


router.get("/Profile", ProfileController.profile_get);

module.exports = router;
