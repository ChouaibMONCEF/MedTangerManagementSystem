const Rule = require("../models/ruleModel");
const base = require("./baseController");

exports.createRule = base.createOne(Rule);
exports.getAllRules = base.getAll(Rule);
exports.getRule = base.getOne(Rule);
exports.updateRule = base.updateOne(Rule);
exports.deleteRule = base.deleteOne(Rule);
