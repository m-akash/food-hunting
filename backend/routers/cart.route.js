const express = require("express");
const {
  createCart,
  getCarts,
} = require("../controllers/cart.controller");
const router = express.Router();

router.get("/", getCarts);
router.post("/", createCart);

module.exports = router;
