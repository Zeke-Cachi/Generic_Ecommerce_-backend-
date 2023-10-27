var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { injectable } from "tsyringe";
import Products from "../models/productsModel.js";
import Users from "../models/userModel.js";
let productsController = class productsController {
    async getProducts(req, res) {
        try {
            const response = await Products.find();
            res.status(200).json(response);
        }
        catch (error) {
            res.status(400).json(error);
        }
    }
    async postProducts(req, res) {
        try {
            const newProduct = new Products(req.body);
            await newProduct.save();
            console.log(`Just checking newProduct._id: ${newProduct._id}`);
            const saveId = await Users.findByIdAndUpdate(newProduct.userId, {
                $push: { uploadedProducts: { _id: newProduct._id } },
            }, { new: true });
            console.log(`Just checking saveId: ${saveId}`);
            const finalResponse = await Promise.all([newProduct, saveId]);
            res.status(201).json(finalResponse);
        }
        catch (error) {
            res.status(400).json(error);
        }
    }
};
productsController = __decorate([
    injectable()
], productsController);
//aca pasaba de que no mandaba el usuario pero era que no estaba actualizando el archivo .js, fijarse si anda como está, sino hacerlo menos choclo
export default productsController;
