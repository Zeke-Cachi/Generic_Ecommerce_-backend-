import express from "express";
import UserController from "../controllers/userController.js";
import { container } from "tsyringe";
import RegisterChecks from "../middlewares/registerChecks.js";
import ValidateChecks from "../middlewares/validateChecks.js";
import LoginChecks from "../middlewares/loginChecks.js";
class UserRouter {
    router = express.Router();
    userController = container.resolve(UserController);
    constructor() {
        this.configureRoutes();
    }
    configureRoutes() {
        this.router.get("/users", this.userController.getUsers);
        this.router.get("/users/getbyemail/:email", LoginChecks, ValidateChecks, this.userController.getUsersByEmail);
        this.router.post("/users/create", RegisterChecks, ValidateChecks, this.userController.createUsers);
        this.router.post("/users/savecart", this.userController.saveCartItems);
        this.router.put("/users/updateprofileimage/:id", this.userController.updateProfileImage);
        this.router.delete("/users/:userId/deleteuploadedproduct/:productId", this.userController.deleteUploadedProduct);
    }
    getRouter() {
        return this.router;
    }
}
export default new UserRouter().getRouter();
