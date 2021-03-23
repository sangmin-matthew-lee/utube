import express from "express";
import routes from "../routers/routes.js";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req,res) => res.send('Vidoes'))
videoRouter.get(routes.upload, (req,res) => res.send('Upload'))
videoRouter.get(routes.videoDetail, (req,res) => res.send('Video Detail'))
videoRouter.get(routes.editVideo, (req,res) => res.send('Edit Video'))
videoRouter.get(routes.deleteVideo, (req,res) => res.send('Delte Video'))

export default videoRouter;