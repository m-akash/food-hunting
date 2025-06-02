const express = require("express");
const { addReview, getReview } = require("../controllers/reviews.controller");
const router = express.Router();

router.get("/", getReview);
router.post("/", addReview);

module.exports = router;
