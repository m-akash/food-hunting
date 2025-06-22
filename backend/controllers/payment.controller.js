const { v4: uuidv4 } = require("uuid");
const payments = require("../models/payment.model");
const carts = require("../models/cart.model");

const paymentsHistory = async (req, res) => {
  try {
    const history = await payments.find({ email: req.params.email });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createPayments = async (req, res) => {
  try {
    const paymentInfo = new payments({
      id: uuidv4(),
      email: req.body.email,
      totalPrice: Number(req.body.totalPrice),
      transactionId: req.body.transactionId,
      cartId: req.body.cartId,
      menuItemId: req.body.menuItemId,
      status: req.body.status,
    });
    await paymentInfo.save();
    const query = { id: { $in: req.body.cartId } };
    const removeCart = await carts.deleteMany(query);
    res.status(201).json({ paymentInfo, removeCart });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { paymentsHistory, createPayments };
