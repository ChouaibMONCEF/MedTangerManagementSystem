const mongoose = require("mongoose");

const shipOwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  email: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  phone: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  description: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  nationality: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  container: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "container",
    },
  ],
});

const ShipOwner = mongoose.model("shipOwner", shipOwnerSchema);

module.exports = ShipOwner;