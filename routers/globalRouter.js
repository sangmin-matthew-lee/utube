import express from "express";
import { joinController, loginController, logoutController } from '../controller/userController.js';
import { homeController, searchController } from '../controller/videoController.js';
import routes from "../routers/routes.js";

const globalRouter = express.Router();

globalRouter.get(routes.home, homeController)
globalRouter.get(routes.search, searchController)
globalRouter.get(routes.join, joinController)
globalRouter.get(routes.login, loginController)
globalRouter.get(routes.logout, logoutController)


export default globalRouter;