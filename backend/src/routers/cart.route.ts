import express from 'express';
import {
  createCart,
  getCarts,
  deleteCartById,
} from '../controllers/cart.controller';

const router = express.Router();

router.get("/", getCarts);
router.post("/", createCart);
router.delete("/:id", deleteCartById);

export default router; 