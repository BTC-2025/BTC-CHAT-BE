// import mongoose from "mongoose";
const mongoose = require("mongoose")

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected");
  } catch (e) {
    console.error("❌ MongoDB error:", e.message);
    process.exit(1);
  }
};

module.exports = {connectDB}
