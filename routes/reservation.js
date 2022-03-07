const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.post("/createOne", reservationController.createReservation);

router
.route("/:id")
.get(reservationController.getReservation)
.patch(reservationController.updateReservation)
.delete(reservationController.deleteReservation);

//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.get("/getAll", reservationController.getAllReservations);

module.exports = router;
