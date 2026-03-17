const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },

    // 🔥 ROLE SYSTEM
    role: {
      type: String,
      enum: ["student", "landlord"],
      default: null
    },

    // 🔥 PROFILE STATUS
    profileCompleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);