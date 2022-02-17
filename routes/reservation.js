const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", reservationController.getAllReservations(req, res, next));
router.get("/createOne", reservationController.createReservation(req, res, next));

router
  .route("/:id")
  .get(reservationController.getReservation(req, res, next))
  .patch(reservationController.updateReservation(req, res, next))
  .delete(reservationController.deleteReservation(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
