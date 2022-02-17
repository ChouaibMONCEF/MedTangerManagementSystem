const express = require("express");
const router = express.Router();
const ruleController = require("../controllers/ruleController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", ruleController.getAllRules(req, res, next));
router.get("/createOne", ruleController.createRule(req, res, next));

router
  .route("/:id")
  .get(ruleController.getRule(req, res, next))
  .patch(ruleController.updateRule(req, res, next))
  .delete(ruleController.deleteRule(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
