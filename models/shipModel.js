const mongoose = require("mongoose");

const shipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  capacity: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  nationality: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  type: {
    type: String,
    enum: ["extern", "intern"],
    default: "intern",
  },
  container: [
    {
      type: Schema.Types.ObjectId,
      ref: "container",
    },
  ],
  owner: [
    {
      type: Schema.Types.ObjectId,
      ref: "shipOwner",
    },
  ],
});

const Ship = mongoose.model("ship", shipSchema);

module.exports = Ship;
