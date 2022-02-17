const express = require("express");
const router = express.Router();
const shipController = require("../controllers/shipController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", shipController.getAllShips(req, res, next));
router.get("/createOne", shipController.createShip(req, res, next));

router
  .route("/:id")
  .get(shipController.getShip(req, res, next))
  .patch(shipController.updateShip(req, res, next))
  .delete(shipController.deleteShip(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
