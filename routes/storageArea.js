const express = require("express");
const router = express.Router();
const storageAreaController = require("../controllers/storageAreaController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only

//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.use(authController.protect);

router.get("/getAll", storageAreaController.getAllStorageAreas);
router.post("/createOne", storageAreaController.createStorageArea);

router
  .route("/:id")
  .get(storageAreaController.getStorageArea)
  .patch(storageAreaController.updateStorageArea)
  .delete(storageAreaController.deleteStorageArea);

module.exports = router;
