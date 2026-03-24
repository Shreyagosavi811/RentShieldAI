import Listing from "../models/Listing.js";
import { analyzeListing } from "../services/aiService.js";

export const createListing = async (req, res) => {
  try {
    const { title, description, city, price, review } = req.body;

    // 1️⃣ Save listing
    const listing = new Listing({
      title,
      description,
      city,
      price,
      review
    });

    await listing.save();

    // 2️⃣ Call AI
    const aiResult = await analyzeListing({
      city,
      price,
      review,
      description
    });

    // 3️⃣ Update listing with AI result
    listing.trust_score = aiResult.trust_score;
    listing.risk_level = aiResult.risk_level;

    await listing.save();

    // 4️⃣ Send response
    res.json({
      success: true,
      listing,
      analysis: aiResult
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};