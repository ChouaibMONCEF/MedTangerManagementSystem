const Type = require("../models/typeModel");
const base = require("./baseController");

exports.createType = base.createOne(Type);
exports.getAllTypes = base.getAll(Type);
exports.getType = base.getOne(Type);
exports.updateType = base.updateOne(Type);
exports.deleteType = base.deleteOne(Type);
