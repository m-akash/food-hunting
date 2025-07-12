import express from 'express';
import {
  createPayments,
  paymentsHistory,
} from '../controllers/payment.controller';

const router = express.Router();

router.get("/payment-history/:email", paymentsHistory);
router.post("/payment", createPayments);

export default router; 