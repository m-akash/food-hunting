const express = require("express");
const {
  getUsers,
  createUser,
  loginUser,
  deleteUser,
  makeAdmin,
  socialLogin,
  checkAdmin,
} = require("../controllers/users.controller");
const verifyToken = require("../middlewares/jwtMiddleware");
const verifyAdmin = require("../middlewares/adminMiddleware");

const router = express.Router();

router.get("/", verifyToken, verifyAdmin, getUsers);
router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/social-login", socialLogin);
router.patch("/admin/:id", verifyToken, makeAdmin);
router.get("/admin/:email", verifyToken, checkAdmin);
router.delete("/:email", verifyToken, verifyAdmin, deleteUser);

module.exports = router;
