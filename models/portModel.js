const mongoose = require("mongoose");

const portSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  description: {
    type: String,
  },
  quay: [
    {
      type: Schema.Types.ObjectId,
      ref: "quay",
    },
  ],
});

const Port = mongoose.model("port", portSchema);

module.exports = Port;