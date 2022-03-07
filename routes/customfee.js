const express = require("express");
const router = express.Router();
const customFeeController = require("../controllers/customFeeController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);


//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.get("/getAll", customFeeController.getAllCustomFees);
router.post("/createOne", customFeeController.createCustomFee);

router
  .route("/:id")
  .get(customFeeController.getCustomFee)
  .patch(customFeeController.updateCustomFee)
  .delete(customFeeController.deleteCustomFee);

module.exports = router;
