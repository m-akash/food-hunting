const express = require("express");
const createPayments = require("../controllers/payment.controller");
const router = express.Router();

router.post("/", createPayments);

module.exports = router;
