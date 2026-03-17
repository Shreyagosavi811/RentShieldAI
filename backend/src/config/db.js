import mongoose from "mongoose";

const connectDB = async () => {
  try {

    await mongoose.connect("mongodb+srv://new-user2:Adi932585@cluster0.zndrczg.mongodb.net/rentshield");

    console.log("Database Connected");

  } catch (error) {

    console.error("DB Connection Error:", error);
    process.exit(1);

  }
};

export default connectDB;