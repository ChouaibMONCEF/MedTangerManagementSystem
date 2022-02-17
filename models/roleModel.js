const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "Please fill this field!"],
    unique: true,
    lowercase: true,
  },
  reference: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }]
});

const Role = mongoose.model("role", roleSchema);

module.exports = Role;
