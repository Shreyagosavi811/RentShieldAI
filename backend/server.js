import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import listingRoutes from "./src/routes/listingRoutes.js";
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/listings", listingRoutes);

app.get("/", (req, res) => {
  res.send("RentShield Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});