const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/jwt");

const verifyToken = (req, res, next) => {
  console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "forbidden access" });
  }
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "forbidden access" });
  }
  jwt.verify(token, jwtSecret, (error, decoded) => {
    if (error) {
      return res.status(401).send({ message: "forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = verifyToken;
