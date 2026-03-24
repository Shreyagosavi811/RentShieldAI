import mongoose from "mongoose";

const AnalysisSchema = new mongoose.Schema({

  // Optional → for listing-based analysis
  listing_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: false
  },

  // Optional → for user tracking
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  // Store input (🔥 very useful)
  input: {
    city: String,
    price: Number,
    review: String
  },

  trust_score: {
    type: Number,
    required: true
  },

  risk_level: {
    type: String,
    enum: ["LOW", "MEDIUM", "HIGH"],
    default: "MEDIUM"
  },

  confidence: {
    type: Number
  },

  geo_risk: {
    type: String
  },

  scam_detected: {
    type: Boolean,
    default: false
  },

  scam_phrases: [
    String
  ],

  predicted_rent: {
    type: Number
  },

  fake_probability: {
    type: Number
  },

  warnings: [
    String
  ],

  explanation: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

const Analysis = mongoose.model("Analysis", AnalysisSchema);

export default Analysis;