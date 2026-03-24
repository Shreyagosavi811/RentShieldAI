import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import listingRoutes from "./src/routes/listingRoutes.js";
import aiRoutes from "./src/routes/aiRoutes.js"; // ✅ ADD THIS

dotenv.config();

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ DB Connection
connectDB();

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/listings", listingRoutes);

// 🔥 ADD AI ROUTE HERE
app.use("/api/ai", aiRoutes);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("RentShield Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});