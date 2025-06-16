const { v4: uuidv4 } = require("uuid");
const carts = require("../models/cart.model");

const getCarts = async (req, res) => {
  try {
    const email = req.query.userEmail;
    const query = { userEmail: email };
    const result = await carts.find(query);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createCart = async (req, res) => {
  try {
    const cartItem = new carts({
      itemId: uuidv4(),
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

const deleteCartById = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const result = await carts.deleteOne({ itemId: itemId });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getCarts, createCart, deleteCartById };
