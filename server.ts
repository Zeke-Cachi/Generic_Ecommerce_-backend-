import express from "express";
import cors from "cors";
import morgan from "morgan";
import UserRouter from "./routes/userRouter.js";
import productsRouter from "./routes/productsRouter.js";
import dotenv from "dotenv";
dotenv.config();

class Server {
  private app: express.Express;

  constructor() {
    this.app = express();
    this.configureMiddlewares();
    this.configureRoutes();
    this.startServer();
  }

  configureMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    const corsConfig = {
      origin: "https://generic-ecommerce-five.vercel.app",
    };
    this.app.use(cors(corsConfig));
    this.app.use((_req, res, next) => {
      res.setHeader(
        "Access-Control-Allow-Origin",
        "https://generic-ecommerce-five.vercel.app"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
      res.setHeader("Access-Control-Allow-Credentials", "true");
      next();
    });
  }

  configureRoutes() {
    this.app.use("/", UserRouter);
    this.app.use("/", productsRouter);
  }

  startServer() {
    const PORT = process.env.PORT;

    this.app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }
}

export default Server;
