const express = require("express");
const router = express.Router();
const communicationController = require("../controllers/communicationController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", communicationController.getAllCommunications(req, res, next));
router.get("/createOne", communicationController.createCommunication(req, res, next));

router
  .route("/:id")
  .get(communicationController.getCommunication(req, res, next))
  .patch(communicationController.updateCommunication(req, res, next))
  .delete(communicationController.createCommunication(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
