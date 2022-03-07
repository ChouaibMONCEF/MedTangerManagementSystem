const express = require("express");
const router = express.Router();
const shipController = require("../controllers/shipController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);


router
.route("/:id")
.get(shipController.getShip)
.patch(shipController.updateShip)
.delete(shipController.deleteShip);

//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.post("/createOne", shipController.createShip);
router.get("/getAll", shipController.getAllShips);

module.exports = router;
