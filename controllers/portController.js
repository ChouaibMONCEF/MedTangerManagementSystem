const Port = require("../models/portModel");
const base = require("./baseController");

exports.createPort = base.createOne(Port);
exports.getAllPorts = base.getAll(Port);
exports.getPort = base.getOne(Port);
exports.updatePort = base.updateOne(Port);
exports.deletePort = base.deleteOne(Port);
