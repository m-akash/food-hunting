const express = require("express");
const { createCart } = require("../controllers/cart.controller");
const router = express.Router();

router.post("/", createCart);

module.exports = router;
