import express, { Router } from "express";
import UserController from "../controllers/userController.js";
import { container } from "tsyringe";

class UserRouter {
  private router: Router = express.Router();
  private userController = container.resolve(UserController);

  constructor() {
    this.configureRoutes();
  }

  private configureRoutes() {
    this.router.get("/users", this.userController.getUsers);
    this.router.post("/users/create", this.userController.createUsers);
    this.router.put(
      "/users/updateprofileimage/:id",
      this.userController.updateProfileImage
    );
  }

  public getRouter() {
    return this.router;
  }
}

export default new UserRouter().getRouter();
