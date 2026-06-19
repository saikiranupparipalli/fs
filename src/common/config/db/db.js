import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const db = async () => {
  try {
    const dbconnect = mongoose.connect(
      process.env.DATABASE_URL,
      console.log(`MONGODB- connected`),
    );
  } catch (error) {
    console.log(error`-DB.JS`)
  }
};

export default db;
