import { Request, Response } from "express";

class productsController {
  async getProducts(req: Request, res: Response) {
    console.log("h1");
  }
}

export default new productsController();
