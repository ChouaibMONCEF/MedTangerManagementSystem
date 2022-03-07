const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  age: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  driverLincense: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  trucks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "truck",
    },
  ],
});

const Driver = mongoose.model("driver", driverSchema);

module.exports = Driver;