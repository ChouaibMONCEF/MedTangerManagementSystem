const express = require("express");
const router = express.Router();
const communicationController = require("../controllers/communicationController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.post("/createOne", communicationController.createCommunication);

router
.route("/:id")
.get(communicationController.getCommunication)
.patch(communicationController.updateCommunication)
.delete(communicationController.createCommunication);

//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.get("/getAll", communicationController.getAllCommunications);

module.exports = router;
