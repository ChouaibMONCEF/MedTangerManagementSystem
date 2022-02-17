const express = require("express");
const router = express.Router();
const typeController = require("../controllers/typeController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", typeController.getAllTypes(req, res, next));
router.get("/createOne", typeController.createType(req, res, next));

router
  .route("/:id")
  .get(typeController.getType(req, res, next))
  .patch(typeController.updateType(req, res, next))
  .delete(typeController.deleteType(req, res, next));


//Only admins have access to this

router.use(authController.restrictTo("admin"));


module.exports = router;