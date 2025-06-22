const users = require("../models/users.model");
const payments = require("../models/payment.model");
const foodMenu = require("../models/menu.model");

const adminStats = async (req, res) => {
  try {
    const totalUsers = await users.estimatedDocumentCount();
    const totalOrders = await payments.estimatedDocumentCount();
    const menuItems = await foodMenu.estimatedDocumentCount();
    const result = await payments.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$totalPrice",
          },
        },
      },
    ]);
    const revenue = result.length > 0 ? result[0].totalRevenue : 0;
    res.status(200).send({
      totalUsers,
      totalOrders,
      menuItems,
      revenue,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = adminStats;
