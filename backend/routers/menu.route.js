const express = require("express");
const {
  getMenu,
  createMenu,
  deleteMenuItem,
  getMenuItemById,
  updateMenuItem,
} = require("../controllers/menu.controller");
const verifyToken = require("../middlewares/jwtMiddleware");
const verifyAdmin = require("../middlewares/adminMiddleware");
const router = express.Router();

router.get("/", getMenu);
router.get("/:id", getMenuItemById);
router.post("/", verifyToken, verifyAdmin, createMenu);
router.patch("/:id", verifyToken, verifyAdmin, updateMenuItem);
router.delete("/:id", verifyToken, verifyAdmin, deleteMenuItem);

module.exports = router;
