import mongoose from "mongoose";

const connectDB = async () => {
  try {

    await mongoose.connect("mongodb://127.0.0.1:27017/rentshield");

    console.log("Database Connected");

  } catch (error) {

    console.error("DB Connection Error:", error);
    process.exit(1);

  }
};

export default connectDB;