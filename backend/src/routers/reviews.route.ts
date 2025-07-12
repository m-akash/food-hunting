import express from 'express';
import { addReview, getReview } from '../controllers/reviews.controller';

const router = express.Router();

router.get("/", getReview);
router.post("/", addReview);

export default router; 