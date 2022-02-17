const mongoose = require("mongoose");

const storageAreaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  communicationChannel: {
    type: Schema.Types.ObjectId,
    ref: "communication",
  },
  blocks: [{
    type: Schema.Types.ObjectId,
    ref: "block",
  }],
});

const StorageArea = mongoose.model("storageArea", storageAreaSchema);

module.exports = StorageArea;