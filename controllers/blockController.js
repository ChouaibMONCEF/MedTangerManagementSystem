const Block = require("../models/blockModel");
const base = require("./baseController");

exports.createBlock = base.createOne(Block);
exports.getAllBlocks = base.getAll(Block);
exports.getBlock = base.getOne(Block);
exports.updateBlock = base.updateOne(Block);
exports.deleteBlock = base.deleteOne(Block);
