const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
  },
  totalPrice: {
    type: Number,
    require: true,
  },
  transactionId: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: () => new Date(),
  },
  cartId: {
    type: [String],
    require: true,
  },
  menuItemId: {
    type: [String],
    require: true,
  },
  status: {
    type: String,
    enum: ["pending", "success"],
    default: "pending",
  },
});

module.exports = mongoose.model("payments", paymentSchema);
