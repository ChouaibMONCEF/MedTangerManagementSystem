const BlockPart = require("../models/blockPartModel");
const base = require("./baseController");

exports.createBlockPart = base.createOne(BlockPart);
exports.getAllBlockParts = base.getAll(BlockPart);
exports.getBlockPart = base.getOne(BlockPart);
exports.updateBlockPart = base.updateOne(BlockPart);
exports.deleteBlockPart = base.deleteOne(BlockPart);
