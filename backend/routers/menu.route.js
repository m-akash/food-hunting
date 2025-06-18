const express = require("express");
const { getMenu, createMenu } = require("../controllers/menu.controller");
const verifyToken = require("../middlewares/jwtMiddleware");
const verifyAdmin = require("../middlewares/adminMiddleware");
const router = express.Router();

router.get("/", getMenu);
router.post("/", verifyToken, verifyAdmin, createMenu);

module.exports = router;
