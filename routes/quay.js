const express = require("express");
const router = express.Router();
const quayController = require("../controllers/quayController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);


//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.get("/getAll", quayController.getAllQuays);
router.post("/createOne", quayController.createQuay);

router
  .route("/:id")
  .get(quayController.getQuay)
  .patch(quayController.updateQuay)
  .delete(quayController.deleteQuay);

module.exports = router;
