const express = require("express");
const router = express.Router();
const driverController = require("../controllers/driverController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", driverController.getAllDrivers(req, res, next));
router.get("/createOne", driverController.createDriver(req, res, next));

router
  .route("/:id")
  .get(driverController.getDriver(req, res, next))
  .patch(driverController.updateDriver(req, res, next))
  .delete(driverController.deleteDriver(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
