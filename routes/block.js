const express = require("express");
const router = express.Router();
const blockController = require("../controllers/blockController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", blockController.getAllBlocks(req, res, next));
router.get("/createOne", blockController.createBlock(req, res, next));

router
  .route("/:id")
  .get(blockController.getBlock(req, res, next))
  .patch(blockController.updateBlock(req, res, next))
  .delete(blockController.deleteBlock(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
