import express from "express";
import UserController from "../controllers/userController.js";
import { container } from "tsyringe";
class UserRouter {
    router = express.Router();
    userController = container.resolve(UserController);
    constructor() {
        this.configureRoutes();
    }
    configureRoutes() {
        this.router.get("/users", this.userController.getUsers);
        this.router.post("/users/create", this.userController.createUsers);
        this.router.put("/users/updateprofileimage/:id", this.userController.updateProfileImage);
    }
    getRouter() {
        return this.router;
    }
}
export default new UserRouter().getRouter();
