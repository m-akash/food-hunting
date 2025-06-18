const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: false,
    validate: {
      validator: function (v) {
        return !v || v.length >= 8;
      },
      message: "Password must be at least 8 characters long",
    },
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  lastLogin: {
    type: Date,
    default: null,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model("users", UsersSchema);
