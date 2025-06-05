const express = require("express");
const app = express();
const cors = require("cors");
require("./config/db");

const userRouter = require("./routers/users.route");
const menuRouter = require("./routers/menu.route");
const reviewRouter = require("./routers/reviews.route");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/menu", menuRouter);

app.use("/api/review", reviewRouter);

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello");
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
