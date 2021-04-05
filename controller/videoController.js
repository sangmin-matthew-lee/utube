import routes from "../routes.js"
import Video from "../models/Video.js";

export const homeController = async (req, res) => {
    try{
        const videos = await Video.find({});        // find any video in the db
        res.render("home", {pageTitle: "Home", videos});    //found video comes here
    }catch (error){
        console.log(error);
        res.render("home", {pageTitle: "Home", videos: [] });    //found video comes here
    }
};

export const searchController = (req,res) => {
    // const searchingBy = req.query.term
    const {
        query: {term: searchingBy}
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy, videos})
};

export const getUploadController = (req,res) => {
    res.render("upload", {pageTitle: "Upload"})
};

export const postUploadController = (req,res) => {
    const {
        body: { file, title, description }
    } = req;
    //To Do: Upload and save video
    res.redirect(routes.videoDetail(33241231))
};

export const videoDetailController = (req,res) => {
    res.render("videoDetail" , {pageTiel: "Video Detail"})
};

export const editVideoController = (req,res) => {
    res.render("editVideo" , {pageTiel: "Edit Video"})
};

export const deleteVideoController = (req,res) => {
    res.render("deleteVideo" , {pageTiel: " Delete Video"})
};
