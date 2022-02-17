const Container = require("../models/containerModel");
const base = require("./baseController");

exports.createContainer = base.createOne(Container);
exports.getAllContainers = base.getAll(Container);
exports.getContainer = base.getOne(Container);
exports.updateContainer = base.updateOne(Container);
exports.deleteContainer = base.deleteOne(Container);
