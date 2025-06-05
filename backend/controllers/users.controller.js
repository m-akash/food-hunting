const { v4: uuidv4 } = require("uuid");
const users = require("../models/users.model");

const getUsers = async (req, res) => {
  try {
    const user = await users.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new users({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getUsers, createUser };
