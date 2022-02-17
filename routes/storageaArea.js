const express = require("express");
const router = express.Router();
const storageAreaController = require("../controllers/storageAreaController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", storageAreaController.getAllStorageAreas(req, res, next));
router.get("/createOne", storageAreaController.createStorageArea(req, res, next));

router
  .route("/:id")
  .get(storageAreaController.getStorageArea(req, res, next))
  .patch(storageAreaController.updateStorageArea(req, res, next))
  .delete(storageAreaController.deleteStorageArea(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
