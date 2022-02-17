const express = require("express");
const router = express.Router();
const portController = require("../controllers/portController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", portController.getAllPorts(req, res, next));
router.get("/createOne", portController.createPort(req, res, next));

router
  .route("/:id")
  .get(portController.getPort(req, res, next))
  .patch(portController.updatePort(req, res, next))
  .delete(portController.deletePort(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
