const Ship = require("../models/shipModel");
const base = require("./baseController");

exports.createShip = base.createOne(Ship);
exports.getAllShips = base.getAll(Ship);
exports.getShip = base.getOne(Ship);
exports.updateShip = base.updateOne(Ship);
exports.deleteShip = base.deleteOne(Ship);
