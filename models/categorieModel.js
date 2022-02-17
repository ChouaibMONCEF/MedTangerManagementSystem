const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill this field!"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Please fill this field!"],
  },
});

const Categorie = mongoose.model("categorie", categorieSchema);

module.exports = Categorie;
