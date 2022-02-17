const express = require("express");
const router = express.Router();
const truckController = require("../controllers/truckController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", truckController.getAllTrucks(req, res, next));
router.get("/createOne", truckController.createTruck(req, res, next));

router
  .route("/:id")
  .get(truckController.getTruck(req, res, next))
  .patch(truckController.updateTruck(req, res, next))
  .delete(truckController.deleteTruck(req, res, next));


//Only admins have access to this

router.use(authController.restrictTo("admin"));


module.exports = router;