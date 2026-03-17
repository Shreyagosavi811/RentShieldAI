import mongoose from "mongoose";

const AnalysisSchema = new mongoose.Schema({

  listing_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: true
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
    {
      type: String
    }
  ],

  predicted_rent: {
    type: Number
  },

  fake_probability: {
    type: Number
  },

  warnings: [
    {
      type: String
    }
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