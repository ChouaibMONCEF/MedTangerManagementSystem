const express = require("express");
const router = express.Router();
const typeController = require("../controllers/typeController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);



//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.get("/getAll", typeController.getAllTypes);
router.post("/createOne", typeController.createType);

router
  .route("/:id")
  .get(typeController.getType)
  .patch(typeController.updateType)
  .delete(typeController.deleteType);


module.exports = router;