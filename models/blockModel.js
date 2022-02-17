const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
  x: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  y: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  z: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  container: {
    type: Schema.Types.ObjectId,
    ref: "container",
  },
  storageArea: {
    type: Schema.Types.ObjectId,
    ref: "storageArea",
  },
  blockparts: [
    {
      type: Schema.Types.ObjectId,
      ref: "blockpart",
    },
  ],
});

const Block = mongoose.model("block", blockSchema);

module.exports = Block;