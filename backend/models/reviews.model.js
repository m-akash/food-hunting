const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  details: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("reviews", reviewSchema);
