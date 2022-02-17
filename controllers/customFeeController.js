const CustomFee = require("../models/customFeeModel");
const base = require("./baseController");

exports.createCustomFee = base.createOne(CustomFee);
exports.getAllCustomFees = base.getAll(CustomFee);
exports.getCustomFee = base.getOne(CustomFee);
exports.updateCustomFee = base.updateOne(CustomFee);
exports.deleteCustomFee = base.deleteOne(CustomFee);
