const express = require("express");
const router = express.Router();
const ruleController = require("../controllers/ruleController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);


//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.get("/getAll", ruleController.getAllRules);
router.post("/createOne", ruleController.createRule);

router
  .route("/:id")
  .get(ruleController.getRule)
  .patch(ruleController.updateRule)
  .delete(ruleController.deleteRule);

module.exports = router;
