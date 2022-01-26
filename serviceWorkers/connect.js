import mongoose from "mongoose";
import config from "config";

async function connectDB() {
  try {
    await mongoose.connect(config.get("mongo"));
    console.log("Connected to Mongo DB");
  } catch (error) {
    console.log(error);
  }
}
connectDB();
