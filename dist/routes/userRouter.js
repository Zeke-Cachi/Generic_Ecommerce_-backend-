import express from "express";
const userRouter = express.Router();
import userController from "../controllers/userController.js";
userRouter.get("/users", userController.getUsers);
export default userRouter;