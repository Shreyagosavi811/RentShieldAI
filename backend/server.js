import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";


import authRoutes from "./src/routes/authRoutes.js";
import aiRoutes from "./src/routes/aiRoutes.js"; // ✅ ADD THIS


import pgRoutes from "./src/routes/pgRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ DB Connection
connectDB();

// ✅ auth Routes
app.use("/api/auth", authRoutes);


// 🔥 ADD AI ROUTE HERE
app.use("/api/ai", aiRoutes);

// ✅ Test Route
app.use("/api/pg", pgRoutes)
app.use("/uploads", express.static("uploads"));

app.use(express.json());


app.get("/", (req, res) => {
  res.send("RentShield Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});