const express = require("express");
const router = express.Router();
const shipOwnerController = require("../controllers/shipOwnerController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);


router
.route("/:id")
.get(shipOwnerController.getShipOwner)
.patch(shipOwnerController.updateShipOwner)
.delete(shipOwnerController.deleteShipOwner);

//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.post("/createOne", shipOwnerController.createShipOwner);
router.get("/getAll", shipOwnerController.getAllShipOwners);

module.exports = router;
