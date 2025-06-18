const { v4: uuidv4 } = require("uuid");
const users = require("../models/users.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
    const existing = await users.findOne({ email: req.body.email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }
    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      if (err) {
        return res.status(500).json({ message: "Error hashing password" });
      }
      const newUser = new users({
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        password: hash,
        lastLogin: new Date(),
      });
      await newUser.save();
      res.status(201).json(newUser);
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const socialLogin = async (req, res) => {
  try {
    const { email, name } = req.body;
    const user = await users.findOne({ email: email });
    if (user) {
      user.lastLogin = new Date();
      await user.save();
      res.status(200).json({ message: "Login successful", user });
    } else {
      const newUser = new users({
        id: uuidv4(),
        name: name,
        email: email,
        password: null,
        lastLogin: new Date(),
      });
      await newUser.save();
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await users.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          res.status(200).json({ status: "Valid User" });
        } else {
          res.status(404).json({ status: "Not a valid user" });
        }
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const makeAdmin = async (req, res) => {
  try {
    const user = await users.findOne({ id: req.params.id });
    const updatedDoc = {
      $set: {
        role: "admin",
      },
    };
    const result = await users.updateOne(user, updatedDoc);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const checkAdmin = async (req, res) => {
  try {
    const email = req.params.email;
    if (email !== req.decoded.email) {
      res.status(403).send({ message: "forbidden access" });
    }
    const user = await users.findOne({ email: email });
    let admin = false;
    if (user) {
      admin = user?.role === "admin";
    }
    res.status(200).send({ admin });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await users.deleteOne({ email: email });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
  makeAdmin,
  deleteUser,
  socialLogin,
  checkAdmin,
};
