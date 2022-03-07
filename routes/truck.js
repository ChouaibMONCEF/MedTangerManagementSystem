const express = require("express");
const router = express.Router();
const truckController = require("../controllers/truckController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);


router.post("/createOne", truckController.createTruck);

router
.route("/:id")
.get(truckController.getTruck)
.patch(truckController.updateTruck)
.delete(truckController.deleteTruck);

//Only admins have access to this
  
  router.use(authController.restrictTo("admin"));
  
  router.get("/getAll", truckController.getAllTrucks);

module.exports = router;