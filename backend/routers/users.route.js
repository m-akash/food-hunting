const express = require("express");
const {
  getUsers,
  createUser,
  loginUser,
  deleteUser,
  makeAdmin,
  socialLogin,
} = require("../controllers/users.controller");
const verifyToken = require("../middlewares/jwtMiddleware");

const router = express.Router();

router.get("/", verifyToken, getUsers);
router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/social-login", socialLogin);
router.patch("/admin/:id", makeAdmin);
router.delete("/:email", verifyToken, deleteUser);

module.exports = router;
