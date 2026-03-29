import express from "express";
// import { analyzeListing } from "../controllers/aiController.js";

const router = express.Router();

// // POST /api/ai/analyze
// router.post("/analyze", analyzeListing);

import { analyzePG } from "../controllers/analysisController.js";

router.post("/analyze", analyzePG);

export default router;