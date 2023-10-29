import { Request, Response } from "express";
import mongoose from "mongoose";
import { injectable } from "tsyringe";
import Products from "../models/productsModel.js";
import Users from "../models/userModel.js";

@injectable()
class productsController {
  async getProducts(req: Request, res: Response) {
    try {
      const response = await Products.aggregate([{ $sample: { size: 25 } }]);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async postProducts(req: Request, res: Response) {
    try {
      const newProduct = new Products(req.body);
      await newProduct.save();
      const saveId = await Users.findByIdAndUpdate(
        newProduct.userId,
        {
          $push: { uploadedProducts: newProduct },
        },
        { new: true }
      );
      const finalResponse = await Promise.all([newProduct, saveId]);
      res.status(201).json(finalResponse);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}

export default productsController;
