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
      methods: "GET, POST, PUT, DELETE",
      allowedHeaders: "Content-type, Authorization",
      credentials: true,
    };
    this.app.use(cors(corsConfig));
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
