const express = require("express");
const {
  getMenu,
  createMenu,
  deleteMenuItem,
} = require("../controllers/menu.controller");
const verifyToken = require("../middlewares/jwtMiddleware");
const verifyAdmin = require("../middlewares/adminMiddleware");
const router = express.Router();

router.get("/", getMenu);
router.post("/", verifyToken, verifyAdmin, createMenu);
router.delete("/:id", verifyToken, verifyAdmin, deleteMenuItem);

module.exports = router;
