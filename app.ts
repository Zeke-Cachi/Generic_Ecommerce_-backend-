import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/userRouter.js";
import productsRouter from "./routes/productsRouter.js";
import connect from "./db/db.js";
//-------------------------------------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
const corsConfig = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsConfig));

app.use("/", userRouter);
app.use("/", productsRouter);

//-------------------------------------------------------------------

connect;

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
