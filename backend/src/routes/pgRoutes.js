import express from "express";
import {
  createPG,
  getPGs,
  getPGById,
  updatePG,
  deletePG,
} from "../controllers/pgController.js";
import { upload } from "../config/upload.js";

import { protect, isLandlord } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", upload.array("images", 6), protect, isLandlord, createPG);
router.get("/", getPGs);
router.get("/:id", getPGById);
router.put("/:id", upload.array("images", 6), protect, isLandlord, updatePG);
router.delete("/:id", protect, isLandlord, deletePG);

export default router;