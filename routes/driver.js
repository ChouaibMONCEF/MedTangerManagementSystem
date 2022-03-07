const express = require("express");
const router = express.Router();
const driverController = require("../controllers/driverController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);


router
.route("/:id")
.get(driverController.getDriver)
.patch(driverController.updateDriver)
.delete(driverController.deleteDriver);

//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.get("/getAll", driverController.getAllDrivers);
router.post("/createOne", driverController.createDriver);

module.exports = router;
