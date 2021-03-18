import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router.js"; //when object is exproted as default

const app = express();

const handleHome = (req,res) => res.send("Hello from home!!!");

const handleProfile = (req,res) => res.send("You are on my profile");

//midleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

//route
app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter)    //use = I will use whole userRouter when someone call /user

export default app; // When someone import app file, it will give app object