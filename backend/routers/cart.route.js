const express = require("express");
const {
  createCart,
  getCarts,
  deleteCartById,
} = require("../controllers/cart.controller");
const router = express.Router();

router.get("/", getCarts);
router.post("/", createCart);
router.delete("/:itemId", deleteCartById);

module.exports = router;
