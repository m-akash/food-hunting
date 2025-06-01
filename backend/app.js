const express = require("express");
const app = express();
const cors = require("cors");
const menuRouter = require("./routers/menu.route");
require("./config/db");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/menu", menuRouter);

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
