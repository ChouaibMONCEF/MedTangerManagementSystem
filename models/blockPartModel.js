const mongoose = require("mongoose");

const blockPartSchema = new mongoose.Schema({
  categorie: {
    type: Schema.Types.ObjectId,
    ref: "categorie",
  },
  blockParts: {
    type: Schema.Types.ObjectId,
    ref: "blockPart",
  },
});

const BlockPart = mongoose.model("blockPart", blockPartSchema);

module.exports = BlockPart;
