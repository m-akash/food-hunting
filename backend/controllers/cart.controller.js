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
    const { userEmail, foodName, foodImg, foodCategory, price, menuItemId } =
      req.body;
    const cartItem = new carts({
      id: uuidv4(),
      itemId: menuItemId,
      userEmail: userEmail,
      foodName: foodName,
      foodImg: foodImg,
      foodCategory: foodCategory,
      price: Number(price),
    });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteCartById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await carts.deleteOne({ id: id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getCarts, createCart, deleteCartById };
