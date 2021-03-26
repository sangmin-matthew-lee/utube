import express from "express";
import routes from "../routes.js";
import { changePWController, 
    editProfileController, 
    userDetailController, 
} from '../controller/userController.js';

const userRouter = express.Router();

//userRouter.get(routes.users, usersController);
userRouter.get(routes.userDetail, userDetailController);
userRouter.get(routes.editProfile, editProfileController);
userRouter.get(routes.changePW, changePWController);

export default userRouter;