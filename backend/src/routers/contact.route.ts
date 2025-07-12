import express from 'express';
import { addMessage, getMessage } from '../controllers/contact.controller';

const router = express.Router();

router.get("/", getMessage);
router.post("/", addMessage);

export default router; 