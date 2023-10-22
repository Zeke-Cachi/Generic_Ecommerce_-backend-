import { Router } from "express";
import { container } from "tsyringe";
import ProductsController from "../controllers/productsController.js";
class ProductRouter {
    router = Router();
    productsController = container.resolve(ProductsController);
    constructor() {
        this.configureRoutes();
    }
    configureRoutes() {
        this.router.get("/products", this.productsController.getProducts);
        this.router.post("/products/create", this.productsController.postProducts);
    }
    getRouter() {
        return this.router;
    }
}
export default new ProductRouter().getRouter();
