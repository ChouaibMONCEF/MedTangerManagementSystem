const mongoose = require("mongoose");

const quaySchema = new mongoose.Schema({
  status: {
    type: Boolean,
    default: true,
  },
  type: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "type",
    },
  ],
});

const Quay = mongoose.model("quay", quaySchema);

module.exports = Quay;