import express from "express";
import { analyzeListing } from "../controllers/aiController.js";

const router = express.Router();

// POST /api/ai/analyze
router.post("/analyze", analyzeListing);

export default router;