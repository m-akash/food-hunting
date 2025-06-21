const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  itemId: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
  },
  foodName: {
    type: String,
    require: true,
  },
  foodImg: {
    type: String,
    require: true,
  },
  foodCategory: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("carts", cartSchema);
