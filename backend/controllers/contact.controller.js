const { v4: uuidv4 } = require("uuid");
const contact = require("../models/contact.model");

const getMessage = async (req, res) => {
  try {
    const message = await contact.find();
    res.status(200).send(message);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addMessage = async (req, res) => {
  try {
    const newMessage = new contact({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getMessage, addMessage };
