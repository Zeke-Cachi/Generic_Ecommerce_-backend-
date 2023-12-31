var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Users from "../models/userModel.js";
import { injectable } from "tsyringe";
let UserController = class UserController {
    async getUsers(_req, res) {
        try {
            const response = await Users.find();
            res.status(200).json(response);
        }
        catch (error) {
            res.status(400).json(error);
        }
    }
    async getUsersByEmail(req, res) {
        const { email } = req.params;
        try {
            const response = await Users.find({ email });
            res.status(200).json(response);
        }
        catch (error) {
            console.error(error);
            res.status(400).json(error);
        }
    }
    async createUsers(req, res) {
        try {
            const newUser = new Users(req.body);
            newUser.save();
            res.status(201).json(newUser);
        }
        catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
    async saveCartItems(req, res) {
        const { email, cart } = req.body;
        try {
            const createOrUpdateCartArray = await Users.findOneAndUpdate({ email }, { $set: { cart } }, { upsert: true });
            res.status(200).json(createOrUpdateCartArray);
        }
        catch (error) {
            console.error(error);
            res.status(400).json(error);
        }
    }
    async updateProfileImage(req, res) {
        const { id } = req.params;
        const profileImageURL = req.body;
        try {
            const selectedUser = await Users.findByIdAndUpdate(id, profileImageURL);
            res.status(200).json(selectedUser);
        }
        catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
    async deleteUploadedProduct(req, res) {
        const userId = req.params.userId;
        const productId = req.params.productId;
        try {
            const user = await Users.findByIdAndUpdate(userId, {
                $pull: { uploadedProducts: { _id: productId } },
            });
            user && res.status(200).json(user);
        }
        catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
};
UserController = __decorate([
    injectable()
], UserController);
export default UserController;
