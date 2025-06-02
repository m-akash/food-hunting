const { v4: uuidv4 } = require("uuid");
const reviews = require("../models/reviews.model");

const getReview = async (req, res) => {
  try {
    const review = await reviews.find();
    res.status(200).json(review);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addReview = async (req, res) => {
  try {
    const newReview = new reviews({
      id: uuidv4(),
      name: req.body.name,
      details: req.body.details,
      rating: Number(req.body.rating),
    });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getReview, addReview };
