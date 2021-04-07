import express from "express";
import routes from "../routes.js";
import { deleteVideoController, 
    getEditVideoController, 
    getUploadController,
    postEditVideoController,
    postUploadController,
    videoDetailController, 
} from '../controller/videoController.js';
import { uploadVideo } from '../middleWares.js';

const videoRouter = express.Router();

//videoRouter.get(routes.videos, videosController)

//upload
videoRouter.get(routes.upload, getUploadController);
videoRouter.post(routes.upload, uploadVideo, postUploadController);

//video details
videoRouter.get(routes.videoDetail(), videoDetailController);

//edit video
videoRouter.get(routes.editVideo(), getEditVideoController);
videoRouter.post(routes.editVideo(), postEditVideoController);

//delete video
videoRouter.get(routes.deleteVideo(), deleteVideoController);

export default videoRouter;