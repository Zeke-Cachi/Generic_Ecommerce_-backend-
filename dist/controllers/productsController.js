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
            const response = await Products.aggregate([{ $sample: { size: 25 } }]);
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
            const saveId = await Users.findByIdAndUpdate(newProduct.userId, {
                $push: { uploadedProducts: newProduct },
            }, { new: true });
            const finalResponse = await Promise.all([newProduct, saveId]);
            res.status(201).json(finalResponse);
        }
        catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
    async generalSearch(req, res) {
        const query = req.query.query;
        try {
            const results = await Products.find({
                $text: { $search: query },
            });
            res.status(200).json(results);
        }
        catch (error) {
            res.status(400).json(error);
            console.log(error);
        }
    }
};
productsController = __decorate([
    injectable()
], productsController);
export default productsController;
