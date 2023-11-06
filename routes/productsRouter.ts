import { Router } from "express";
import { container } from "tsyringe";
import ProductsController from "../controllers/productsController.js";
import PostProductsCheck from "../middlewares/postProductsCheck.js";
import ValidateChecks from "../middlewares/validateChecks.js";

class ProductRouter {
  private router: Router = Router();
  private productsController = container.resolve(ProductsController);

  constructor() {
    this.configureRoutes();
  }

  private configureRoutes() {
    this.router.get("/products", this.productsController.getProducts);
    this.router.post(
      "/products",
      PostProductsCheck,
      ValidateChecks,
      this.productsController.postProducts
    );

    this.router.get(
      "/products/generalsearch/",
      this.productsController.generalSearch
    );
  }

  public getRouter() {
    return this.router;
  }
}

export default new ProductRouter().getRouter();
