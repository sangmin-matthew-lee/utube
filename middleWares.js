import routes from './routes.js';
import multer from "multer";

const multerVideo = multer({ dest : "uploads/videos/"}); 

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "uTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id:1
    };
    next();
};

export const uploadVideo = multerVideo.single("videoFile");