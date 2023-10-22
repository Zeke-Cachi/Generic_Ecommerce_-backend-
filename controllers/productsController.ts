import { Request, Response } from "express";
import { injectable } from "tsyringe";
import Products from "../models/productsModel.js";

@injectable()
class productsController {
  async getProducts(req: Request, res: Response) {
    try {
      const response = await Products.find();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async postProducts(req: Request, res: Response) {
    try {
      const newProduct = new Products(req.body);
      newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

export default productsController;
