const express = require("express");
const router = express.Router();
const categorieController = require("../controllers/categorieController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);


//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.get("/getAll", categorieController.getAllCategories);
router.post("/createOne", categorieController.createCategorie);

router
  .route("/:id")
  .get(categorieController.getCategorie)
  .patch(categorieController.updateCategorie)
  .delete(categorieController.deleteCategorie);

module.exports = router;
