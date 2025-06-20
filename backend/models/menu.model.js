const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  recipe: {
    type: String,
  },
});

module.exports = mongoose.model("foodMenu", menuSchema);
