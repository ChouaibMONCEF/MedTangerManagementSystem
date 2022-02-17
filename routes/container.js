const express = require("express");
const router = express.Router();
const containerController = require("../controllers/containerController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", containerController.getAllContainers(req, res, next));
router.get("/createOne", containerController.createContainer(req, res, next));

router
  .route("/:id")
  .get(containerController.getContainer(req, res, next))
  .patch(containerController.updateContainer(req, res, next))
  .delete(containerController.deleteContainer(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
