const express = require("express");
const { getMenu, createMenu } = require("../controllers/menu.controller");
const router = express.Router();

router.get("/", getMenu);
router.post("/", createMenu);

module.exports = router;
