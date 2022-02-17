const ShipOwner = require("../models/shipOwnerModel");
const base = require("./baseController");

exports.createShipOwner = base.createOne(ShipOwner);
exports.getAllShipOwners = base.getAll(ShipOwner);
exports.getShipOwner = base.getOne(ShipOwner);
exports.updateShipOwner = base.updateOne(ShipOwner);
exports.deleteShipOwner = base.deleteOne(ShipOwner);
