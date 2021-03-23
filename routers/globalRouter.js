import express from "express";
import routes from "../routers/routes.js";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req,res) => res.end('Home'))
globalRouter.get(routes.join, (req,res) => res.end('Join'))
globalRouter.get(routes.login, (req,res) => res.end('Login'))
globalRouter.get(routes.logout, (req,res) => res.end('Logout'))
globalRouter.get(routes.search, (req,res) => res.end('Search'))

export default globalRouter;