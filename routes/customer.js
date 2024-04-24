const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

// Endpoint for registering customers
router.post("/register", async (req, res) => {
  const { name, email, birthday } = req.body;
  try {
    const customer = await Customer.create({ name, email, birthday });
    res
      .status(201)
      .json({ message: "Customer registered successfully", customer });
  } catch (error) {
    res.status(500).json({ message: "Error registering customer", error });
  }
});

module.exports = router;
