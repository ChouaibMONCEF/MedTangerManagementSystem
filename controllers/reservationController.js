const Reservation = require("../models/reservationModel");
const base = require("./baseController");

exports.createReservation = base.createOne(Reservation);
exports.getAllReservations = base.getAll(Reservation);
exports.getReservation = base.getOne(Reservation);
exports.updateReservation = base.updateOne(Reservation);
exports.deleteReservation = base.deleteOne(Reservation);
