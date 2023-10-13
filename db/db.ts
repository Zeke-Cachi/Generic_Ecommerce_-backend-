import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.DB_CONNECT;

const connect = async () => {
  try {
    MONGO_URI && (await mongoose.connect(MONGO_URI));
    console.log("Connected to MongoDB database");
  } catch (error) {
    console.error(error);
  }
};

export default connect();
