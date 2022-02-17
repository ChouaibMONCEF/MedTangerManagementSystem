const StorageArea = require("../models/storageAreaModel");
const base = require("./baseController");

exports.createStorageArea = base.createOne(StorageArea);
exports.getAllStorageAreas = base.getAll(StorageArea);
exports.getStorageArea = base.getOne(StorageArea);
exports.updateStorageArea = base.updateOne(StorageArea);
exports.deleteStorageArea = base.deleteOne(StorageArea);
