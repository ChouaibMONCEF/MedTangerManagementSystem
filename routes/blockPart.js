const express = require("express");
const router = express.Router();
const blockPartController = require("../controllers/blockPartController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", blockPartController.getAllBlockParts(req, res, next));
router.get("/createOne", blockPartController.createBlockPart(req, res, next));

router
  .route("/:id")
  .get(blockPartController.getBlockPart(req, res, next))
  .patch(blockPartController.updateBlockPart(req, res, next))
  .delete(blockPartController.deleteBlockPart(req, res, next));


//Only admins have access to this

router.use(authController.restrictTo("admin"));


module.exports = router;