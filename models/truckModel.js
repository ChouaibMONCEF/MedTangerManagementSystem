const mongoose = require("mongoose");

const truckSchema = new mongoose.Schema({
  matricule: {
    type: String,
    required: [true, "Please fill this field!"],
    unique: true,
  },
  status: {
    type: String,
    enum: ["extern", "intern"],
    default: "intern",
  },
  drivers: [
    {
      type: Schema.Types.ObjectId,
      ref: "driver",
    },
  ],
});

const Truck = mongoose.model("truck", truckSchema);

module.exports = Truck;
