const express = require("express");
const adminStats = require("../controllers/adminStats.controller");
const verifyToken = require("../middlewares/jwtMiddleware");
const verifyAdmin = require("../middlewares/adminMiddleware");
const router = express.Router();

router.get("/", verifyToken, verifyAdmin, adminStats);

module.exports = router;
