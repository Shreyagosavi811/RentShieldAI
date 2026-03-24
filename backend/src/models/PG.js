import mongoose from "mongoose";

const pgSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    address: { type: String, required: true },
    city: { type: String, required: true, index: true },
    state: { type: String },
    pincode: { type: String },

    rent: { type: Number, required: true },
    deposit: { type: Number },

    roomType: {
      type: String,
      enum: ["Single", "Double", "Triple"],
    },

    facilities: [String],

    description: String,
    rules: String,

    images: [String], // later Cloudinary URLs

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("PG", pgSchema);