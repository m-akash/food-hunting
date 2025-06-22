const express = require("express");
const {
  createPayments,
  paymentsHistory,
} = require("../controllers/payment.controller");
const router = express.Router();

router.get("/payment-history/:email", paymentsHistory);
router.post("/payment", createPayments);

module.exports = router;
