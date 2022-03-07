const express = require("express");
const router = express.Router();
const blockController = require("../controllers/blockController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);


router
.route("/:id")
.get(blockController.getBlock)
.patch(blockController.updateBlock)
.delete(blockController.deleteBlock);

//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.get("/getAll", blockController.getAllBlocks);
router.post("/createOne", blockController.createBlock);

module.exports = router;
