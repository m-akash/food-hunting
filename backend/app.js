require("dotenv").config();
require("./config/db");
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpire } = require("./config/jwt");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const userRouter = require("./routers/users.route");
const menuRouter = require("./routers/menu.route");
const reviewRouter = require("./routers/reviews.route");
const contactRouter = require("./routers/contact.route");
const cartRouter = require("./routers/cart.route");
const paymentRouter = require("./routers/payment.route");
const adminStatsRouter = require("./routers/adminStats.route");

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

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/jwt", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, jwtSecret, {
    expiresIn: jwtExpire,
  });
  res.send({ token });
});

app.post("/create-payment-intent", async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price * 100);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found!",
  });
});
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke!",
  });
});

module.exports = app;
