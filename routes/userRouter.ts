import express, { Router } from "express";
import UserController from "../controllers/userController";

class UserRouter {
  private router: Router = express.Router();
  private userController = UserController;

  constructor() {
    this.configureRoutes();
  }

  private configureRoutes() {
    this.router.get("/users", this.userController.getUsers);
    this.router.post("/users/create", this.userController.createUsers);
  }

  public getRouter() {
    return this.router;
  }
}

export default new UserRouter().getRouter();
