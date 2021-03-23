import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import globalRouter from "./routers/globalRouter.js";
import routes from "./routers/routes.js"

const app = express();

//midleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

//route
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);    //use = I will use whole userRouter when someone call /user
app.use(routes.videos, videoRouter);

export default app; // When someone import app file, it will give app object