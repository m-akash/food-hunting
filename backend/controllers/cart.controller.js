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
      id: uuidv4(),
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

//TODO
// const payments = async (req, res) => {
//   try {

//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

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
