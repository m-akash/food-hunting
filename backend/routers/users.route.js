const express = require("express");
const {
  getUsers,
  createUser,
  loginUser,
  deleteUser,
  makeAdmin,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/", getUsers);
router.post("/register", createUser);
router.post("/login", loginUser);
router.patch("/admin/:id", makeAdmin);
router.delete("/:email", deleteUser);

module.exports = router;
