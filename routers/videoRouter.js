import express from "express";
import routes from "../routes.js";
import { deleteVideoController, 
    editVideoController, 
    getUploadController,
    postUploadController,
    videoDetailController, 
} from '../controller/videoController.js';

const videoRouter = express.Router();

//videoRouter.get(routes.videos, videosController)
videoRouter.get(routes.upload, getUploadController);
videoRouter.post(routes.upload, postUploadController);

videoRouter.get(routes.videoDetail(), videoDetailController);
videoRouter.get(routes.editVideo, editVideoController);
videoRouter.get(routes.deleteVideo, deleteVideoController);

export default videoRouter;