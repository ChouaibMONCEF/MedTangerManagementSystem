const express = require("express");
const router = express.Router();
const containerController = require("../controllers/containerController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);
router.post("/createOne", containerController.createContainer);

router
.route("/:id")
.get(containerController.getContainer)
.patch(containerController.updateContainer)
.delete(containerController.deleteContainer);

//Only admins have access to this

router.use(authController.restrictTo("admin"));

router.get("/getAll", containerController.getAllContainers);

module.exports = router;
