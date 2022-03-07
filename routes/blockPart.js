const express = require("express");
const router = express.Router();
const blockPartController = require("../controllers/blockPartController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);


router.post("/createOne", blockPartController.createBlockPart);

router
  .route("/:id")
  .get(blockPartController.getBlockPart)
  .patch(blockPartController.updateBlockPart)
  .delete(blockPartController.deleteBlockPart);

//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.get("/getAll", blockPartController.getAllBlockParts);


module.exports = router;