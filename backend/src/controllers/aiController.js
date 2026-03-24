import axios from "axios";
import Analysis from "../models/Analysis.js";

export const analyzeListing = async (req, res) => {
  try {
    const { city, price, review, listing_id } = req.body;

    // 🔥 Call FastAPI microservice
   const analysis = new Analysis({
  listing_id: listing_id || null,
  user_id: req.user?._id, // optional (if auth added)

  input: {
    city,
    price,
    review
  },

  trust_score: aiData.trust_score,
  risk_level: aiData.risk_level,
  confidence: aiData.confidence,
  geo_risk: aiData.geo_risk,
  scam_detected: aiData.scam_detected,
  scam_phrases: aiData.scam_phrases,
  predicted_rent: aiData.predicted_rent,
  fake_probability: aiData.fake_probability,
  warnings: aiData.warnings,
  explanation: aiData.explanation
});

    await analysis.save();

    // ✅ Send response to frontend
    res.status(200).json({
      success: true,
      data: aiData
    });

  } catch (error) {
    console.error("AI Controller Error:", error.message);

    res.status(500).json({
      success: false,
      message: "AI analysis failed"
    });
  }
};