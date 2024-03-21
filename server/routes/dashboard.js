const express = require("express");
const router = express.Router();
const {isLoggedIn} = require("../controllers/dashboardController");
const dashboardController = require("../controllers/dashboardController");


router.get("/dashboard", isLoggedIn,dashboardController.dashboard); 


module.exports = router;
