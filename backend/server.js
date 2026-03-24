import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import pgRoutes from "./src/routes/pgRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
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
