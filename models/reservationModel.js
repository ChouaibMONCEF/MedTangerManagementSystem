const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  from: {
    type: Date,
    required: [true, "Please fill this field!"],
  },
  to: {
    type: Date,
    required: [true, "Please fill this field!"],
  },
  numberOfContainer: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  ship: [
    {
      type: Schema.Types.ObjectId,
      ref: "ship",
    },
  ],
  quay: [
    {
      type: Schema.Types.ObjectId,
      ref: "quay",
    },
  ],
});

const Reservation = mongoose.model("reservation", reservationSchema);

module.exports = Reservation;
