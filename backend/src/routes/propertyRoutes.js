const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");

// ✅ ADD PROPERTY (LANDLORD ONLY)
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // 🔒 Restrict to landlord
    if (user.role !== "landlord") {
      return res.status(403).json({ message: "Only landlords can add property" });
    }

    const { title, location, rent, description } = req.body;

    const property = await Property.create({
      title,
      location,
      rent,
      description,
      owner: user._id
    });

    res.json(property);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;