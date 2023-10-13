import express from "express";
const productsRouter = express.Router();
import productsController from "../controllers/productsController.js";

productsRouter.get("/products", productsController.getProducts);

export default productsRouter;
