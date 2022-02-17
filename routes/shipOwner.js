const express = require("express");
const router = express.Router();
const shipOwnerController = require("../controllers/shipOwnerController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", shipOwnerController.getAllShipOwners(req, res, next));
router.get("/createOne", shipOwnerController.createShipOwner(req, res, next));

router
  .route("/:id")
  .get(shipOwnerController.getShipOwner(req, res, next))
  .patch(shipOwnerController.updateShipOwner(req, res, next))
  .delete(shipOwnerController.deleteShipOwner(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
