const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    rent: {
      type: Number,
      required: true
    },
    description: String,

    // 🔥 IMPORTANT (link to landlord)
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    // 🔥 For future admin moderation
    isApproved: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);