require("dotenv").config();

const JWT = {
  jwtSecret: process.env.ACCESS_TOKEN_SECRET,
  jwtExpire: "1h",
};

module.exports = JWT;
