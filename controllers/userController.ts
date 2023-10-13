import { Request, Response } from "express";

class userController {
  async getUsers(req: Request, res: Response) {
    console.log("users!");
  }
}

export default new userController();
