import express from 'express';
import {
  getMenu,
  createMenu,
  deleteMenuItem,
  getMenuItemById,
  updateMenuItem,
} from '../controllers/menu.controller';
import verifyToken from '../middlewares/jwtMiddleware';
import verifyAdmin from '../middlewares/adminMiddleware';

const router = express.Router();

router.get("/", getMenu);
router.get("/:id", getMenuItemById);
router.post("/", verifyToken, verifyAdmin, createMenu);
router.patch("/:id", verifyToken, verifyAdmin, updateMenuItem);
router.delete("/:id", verifyToken, verifyAdmin, deleteMenuItem);

export default router; 