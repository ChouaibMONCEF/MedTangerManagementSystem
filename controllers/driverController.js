const Driver = require("../models/driverModel");
const base = require("./baseController");

exports.createDriver = base.createOne(Driver);
exports.getAllDrivers = base.getAll(Driver);
exports.getDriver = base.getOne(Driver);
exports.updateDriver = base.updateOne(Driver);
exports.deleteDriver = base.deleteOne(Driver);
