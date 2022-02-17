const Truck = require("../models/truckModel");
const base = require("./baseController");

exports.createTruck = base.createOne(Truck);
exports.getAllTrucks = base.getAll(Truck);
exports.getTruck = base.getOne(Truck);
exports.updateTruck = base.updateOne(Truck);
exports.deleteTruck = base.deleteOne(Truck);
