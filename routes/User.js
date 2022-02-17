const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.post("/login", function (req, res, next) {
  authController.login(req, res, next);
});
router.post("/register", function (req, res, next) {
  authController.signup(req, res, next);
});

//for logged in only

router.use(authController.protect);

router.get("/getAll", userController.getAllUsers);
// router.update("/updateUser", userController.updateUser);
// router.delete("/banMe", userController.delete);

//Only admins have access to this

router.use(authController.restrictTo("admin"));

router.route("/").get(userController.getAllUsers);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
