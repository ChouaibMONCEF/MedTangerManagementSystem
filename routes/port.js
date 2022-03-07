const express = require("express");
const router = express.Router();
const portController = require("../controllers/portController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);


//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.get("/getAll", portController.getAllPorts);
router.post("/createOne", portController.createPort);

router
  .route("/:id")
  .get(portController.getPort)
  .patch(portController.updatePort)
  .delete(portController.deletePort);

module.exports = router;
