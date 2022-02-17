const Quay = require("../models/quayModel");
const base = require("./baseController");

exports.createQuay = base.createOne(Quay);
exports.getAllQuays = base.getAll(Quay);
exports.getQuay = base.getOne(Quay);
exports.updateQuay = base.updateOne(Quay);
exports.deleteQuay = base.deleteOne(Quay);
