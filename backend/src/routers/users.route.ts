import express from 'express';
import {
  getUsers,
  createUser,
  loginUser,
  deleteUser,
  makeAdmin,
  socialLogin,
  checkAdmin,
} from '../controllers/users.controller';
import verifyToken from '../middlewares/jwtMiddleware';
import verifyAdmin from '../middlewares/adminMiddleware';

const router = express.Router();

router.get("/", verifyToken, verifyAdmin, getUsers);
router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/social-login", socialLogin);
router.patch("/admin/:id", verifyToken, makeAdmin);
router.get("/admin/:email", verifyToken, checkAdmin);
router.delete("/:email", verifyToken, verifyAdmin, deleteUser);

export default router; 