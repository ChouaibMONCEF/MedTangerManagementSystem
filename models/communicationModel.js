const mongoose = require("mongoose");

const communicationSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "Please fill this field!"],
    unique: true,
  },
  dateSent: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  trucks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "truck",
    },
  ],
  storageAreas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "storageArea",
    },
  ],
});

const Communication = mongoose.model("communication", communicationSchema);

module.exports = Communication;