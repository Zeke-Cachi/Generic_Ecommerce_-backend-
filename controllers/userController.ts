import { Request, Response } from "express";
import Users from "../models/userModel.js";
import { injectable } from "tsyringe";

@injectable()
class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const response = await Users.find();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async createUsers(req: Request, res: Response) {
    try {
      const newUser = new Users(req.body);
      newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}

export default UserController;
