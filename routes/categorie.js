const express = require("express");
const router = express.Router();
const categorieController = require("../controllers/categorieController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", categorieController.getAllCategories(req, res, next));
router.get("/createOne", categorieController.createCategorie(req, res, next));

router
  .route("/:id")
  .get(categorieController.getCategorie(req, res, next))
  .patch(categorieController.updateCategorie(req, res, next))
  .delete(categorieController.deleteCategorie(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
