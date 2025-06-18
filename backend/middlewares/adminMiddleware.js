const users = require("../models/users.model");

const verifyAdmin = async (req, res, next) => {
  const email = req.decoded.email;
  const user = await users.findOne({ email: email });
  const isAdmin = user?.role === "admin";
  if (!isAdmin) {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

module.exports = verifyAdmin;
