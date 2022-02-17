const mongoose = require("mongoose");

const ruleSchema = new mongoose.Schema({
  matricule: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  description: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  storageDeadLine: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  lateShippingFee: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  capacityPerqQuay: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  quayFeePerDay: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  port: {
    type: Schema.Types.ObjectId,
    ref: "port",
  },
});

const Rule = mongoose.model("rule", ruleSchema);

module.exports = Rule;
