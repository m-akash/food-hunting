import dotenv from 'dotenv';
import './config/db';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import JWT from './config/jwt';
import Stripe from 'stripe';

import userRouter from './routers/users.route';
import menuRouter from './routers/menu.route';
import reviewRouter from './routers/reviews.route';
import contactRouter from './routers/contact.route';
import cartRouter from './routers/cart.route';
import paymentRouter from './routers/payment.route';
import adminStatsRouter from './routers/adminStats.route';

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/menu", menuRouter);
app.use("/api/review", reviewRouter);
app.use("/api/contact", contactRouter);
app.use("/api/carts", cartRouter);
app.use("/payments", paymentRouter);
app.use("/admin-stats", adminStatsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.post("/jwt", async (req: Request, res: Response) => {
  const user = req.body;
  if (!JWT.jwtSecret) {
    return res.status(500).json({ error: 'JWT secret not configured' });
  }
  const token = jwt.sign(
    user,
    JWT.jwtSecret as string,
    { expiresIn: JWT.jwtExpire } as jwt.SignOptions
  );
  return res.send({ token });
});

app.post("/create-payment-intent", async (req: Request, res: Response) => {
  const { price } = req.body;
  const amount = parseInt((price * 100).toString());

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: 'Payment intent creation failed' });
  }
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: "route not found!",
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: "something broke!",
  });
});

export default app; 