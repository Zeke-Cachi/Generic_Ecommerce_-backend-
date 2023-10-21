import mongoose from "mongoose";
const { connect } = mongoose;
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.DB_CONNECT;

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    try {
      await connect(MONGO_URI!);
      console.log("Successfully connected to database!");
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Database();
