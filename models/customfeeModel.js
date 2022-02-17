const mongoose = require("mongoose");

const customFeesSchema = new mongoose.Schema({
  montant: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  description: {
    type: String,
  },
  from: {
    type: Date,
  },
  to: {
    type: Date,
  },
});

const CustomFees = mongoose.model("customFees", customFeesSchema);

module.exports = CustomFees;
