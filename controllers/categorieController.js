const Categorie = require("../models/categorieModel");
const base = require("./baseController");

exports.createCategorie = base.createOne(Categorie);
exports.getAllCategories = base.getAll(Categorie);
exports.getCategorie = base.getOne(Categorie);
exports.updateCategorie = base.updateOne(Categorie);
exports.deleteCategorie = base.deleteOne(Categorie);
