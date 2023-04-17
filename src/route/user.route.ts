import express from "express";
import userController from "../controller/user.controller";

const UserRouter = express.Router();

UserRouter.post("/register", userController.register);
UserRouter.post("/login", userController.login);
UserRouter.put("/users", userController.updateUser);
UserRouter.get("/users", userController.getAllUser);

export default UserRouter;
