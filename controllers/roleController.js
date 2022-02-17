const Role = require("../models/roleModel");
const base = require("./baseController");

exports.createRole = base.createOne(Role);
exports.getAllRoles = base.getAll(Role);
exports.getRole = base.getOne(Role);
exports.updateRole = base.updateOne(Role);
exports.deleteRole = base.deleteOne(Role);
