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
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("foodMenu", menuSchema);
