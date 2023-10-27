import { Request, Response } from "express";
import mongoose from "mongoose";
import { injectable } from "tsyringe";
import Products from "../models/productsModel.js";
import Users from "../models/userModel.js";

interface IUsers {
  name: string;
  lastname: string;
  email: string;
  profileImg: string;
  cart?: [{ product: {}; quantity: number }];
  uploadedProducts?: [{ _id: mongoose.Schema.Types.ObjectId }];
}

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
      await newProduct.save();
      console.log(`Just checking newProduct._id: ${newProduct._id}`);
      const saveId = await Users.findByIdAndUpdate(
        newProduct.userId,
        {
          $push: { uploadedProducts: { _id: newProduct._id } },
        },
        { new: true }
      );
      console.log(`Just checking saveId: ${saveId}`);
      const finalResponse = await Promise.all([newProduct, saveId]);
      res.status(201).json(finalResponse);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
//aca pasaba de que no mandaba el usuario pero era que no estaba actualizando el archivo .js, fijarse si anda como está, sino hacerlo menos choclo

export default productsController;
