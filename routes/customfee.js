const express = require("express");
const router = express.Router();
const customFeeController = require("../controllers/customFeeController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", customFeeController.getAllCustomFees(req, res, next));
router.get("/createOne", customFeeController.createCustomFee(req, res, next));

router
  .route("/:id")
  .get(customFeeController.getCustomFee(req, res, next))
  .patch(customFeeController.updateCustomFee(req, res, next))
  .delete(customFeeController.deleteCustomFee(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
