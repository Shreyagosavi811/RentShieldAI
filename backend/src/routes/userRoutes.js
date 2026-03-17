const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

// ✅ SET ROLE
router.post("/set-role", authMiddleware, async (req, res) => {
  try {
    const { role } = req.body;

    if (!["student", "landlord"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { role },
      { new: true }
    );

    res.json({ role: user.role });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;