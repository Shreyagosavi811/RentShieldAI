import express from "express";
import analyzeListing from "../services/aiService.js";
import AIAnalysis from "../pages/Tenants/AIAnalysis.jsx";               

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const { text } = req.body;

    const result = await analyzeListing({ text });

    // ✅ send directly
    res.json(result);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

export default router;