const { v4: uuidv4 } = require("uuid");
const carts = require("../models/cart.model");

const createCart = async (req, res) => {
  try {
    const cartItem = new carts({
      cartId: uuidv4(),
      userEmail: req.body.userEmail,
      foodName: req.body.foodName,
      foodImg: req.body.foodImg,
      foodCategory: req.body.foodCategory,
      price: Number(req.body.price),
    });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { createCart };
