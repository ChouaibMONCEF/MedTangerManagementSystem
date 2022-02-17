const express = require("express");
const router = express.Router();
const quayController = require("../controllers/quayController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", quayController.getAllQuays(req, res, next));
router.get("/createOne", quayController.createQuay(req, res, next));

router
  .route("/:id")
  .get(quayController.getQuay(req, res, next))
  .patch(quayController.updateQuay(req, res, next))
  .delete(quayController.deleteQuay(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
