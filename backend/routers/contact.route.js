const express = require("express");
const { addMessage, getMessage } = require("../controllers/contact.controller");
const router = express.Router();

router.get("/", getMessage);
router.post("/", addMessage);

module.exports = router;
