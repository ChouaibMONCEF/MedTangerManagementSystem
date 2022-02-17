const mongoose = require("mongoose");

const containerSchema = new mongoose.Schema({
  weight: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  dimensions: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  brand: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  serviceDate: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  importStatus: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  customFeesStatus: {
    type: Boolean,
    required: [true, "Please fill this field!"],
  },
  certificat: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  customFees: [
    {
      type: Schema.Types.ObjectId,
      ref: "customFees",
    },
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "categorie",
    },
  ],
});

const Container = mongoose.model("container", containerSchema);

module.exports = Container;
