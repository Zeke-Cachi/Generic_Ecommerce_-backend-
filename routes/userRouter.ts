import express from "express";
const userRouter = express.Router();
import userController from "../controllers/userController.js";

userRouter.get("/users", userController.getUsers);
userRouter.post("/users/create", userController.createUsers);

export default userRouter;
