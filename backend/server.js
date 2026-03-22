import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import listingRoutes from "./src/routes/listingRoutes.js";
// const authRoutes = require("./routes/authRoutes");
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
// const userRoutes = require("./routes/userRoutes");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
// app.use("/api/user", userRoutes);

app.use(express.json());

// app.use("/api/listings", listingRoutes);

app.get("/", (req, res) => {
  res.send("RentShield Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
