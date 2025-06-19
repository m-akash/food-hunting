const { v4: uuidv4 } = require("uuid");
const foodMenu = require("../models/menu.model");

const getMenu = async (req, res) => {
  try {
    const result = await foodMenu.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createMenu = async (req, res) => {
  try {
    const newMenu = new foodMenu({
      id: uuidv4(),
      name: req.body.name,
      desc: req.body.desc,
      image: req.body.image,
      category: req.body.category,
      price: Number(req.body.price),
    });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteMenuItem = async (req, res) => {
  try {
    const item = await foodMenu.findOne({ id: req.params.id });
    if (!item) {
      res.status(404).json({ message: "Item not found!" });
    }
    const deleteItem = await foodMenu.deleteOne(item);
    res.status(200).json(deleteItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getMenu, createMenu, deleteMenuItem };
