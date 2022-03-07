const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);


//Only admins have access to this

router.use(authController.restrictTo("admin"));
router.get("/getAll", roleController.getAllRoles);
router.post("/createOne", roleController.createRole);

router
  .route("/:id")
  .get(roleController.getRole)
  .patch(roleController.updateRole)
  .delete(roleController.deleteRole);

module.exports = router;
