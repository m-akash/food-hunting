import express from 'express';
import adminStats from '../controllers/adminStats.controller';
import verifyToken from '../middlewares/jwtMiddleware';
import verifyAdmin from '../middlewares/adminMiddleware';

const router = express.Router();

router.get("/", verifyToken, verifyAdmin, adminStats);

export default router; 