const Communication = require("../models/communicationModel");
const base = require("./baseController");

exports.createCommunication = base.createOne(Communication);
exports.getAllCommunications = base.getAll(Communication);
exports.getCommunication = base.getOne(Communication);
exports.updateCommunication = base.updateOne(Communication);
exports.deleteType = base.deleteOne(Type);
