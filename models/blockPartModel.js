const mongoose = require("mongoose");

const blockPartSchema = new mongoose.Schema({
  categorie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categorie",
  },
  blockParts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blockPart",
  },
});

const BlockPart = mongoose.model("blockPart", blockPartSchema);

module.exports = BlockPart;
