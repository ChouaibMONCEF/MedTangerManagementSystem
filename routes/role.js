const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");
const authController = require("../controllers/authController");
//For everyone no authentication needed

//for logged in only
router.use(authController.protect);

router.get("/getAll", roleController.getAllRoles(req, res, next));
router.get("/createOne", roleController.createRole(req, res, next));

router
  .route("/:id")
  .get(roleController.getRole(req, res, next))
  .patch(roleController.updateRole(req, res, next))
  .delete(roleController.deleteRole(req, res, next));

//Only admins have access to this

router.use(authController.restrictTo("admin"));

module.exports = router;
