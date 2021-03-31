import express from "express";
import {getJoinController, postLoginController, getLoginController, logoutController, postJoinController } from '../controller/userController.js';
import { homeController, searchController } from '../controller/videoController.js';
import routes from "../routes.js";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoinController)
globalRouter.post(routes.join, postJoinController)

globalRouter.get(routes.login, getLoginController)
globalRouter.post(routes.login, postLoginController)

globalRouter.get(routes.home, homeController)
globalRouter.get(routes.search, searchController)
globalRouter.get(routes.logout, logoutController)


export default globalRouter;