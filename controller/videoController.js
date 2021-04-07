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

export const postUploadController = async (req,res) => {
    const {
        body: { title, description },
        file :  { path }
    } = req;
    //To Do: Upload and save video
    const newVideo = await Video.create({
        fileURL : path,
        title,
        description
    })
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetailController = async (req,res) => {
    const {
        params: {id}
    } = req;

    try {
        const video = await Video.findById(id);
        res.render("videoDetail" , {pageTitle: video.title, video});
    }catch(error) {
        res.redirect(routes.home);
    }
};

export const getEditVideoController = async (req,res) => {
    const {
        params: {id}
    } = req;

    try {
      const video = await Video.findById(id);  
      res.render("editVideo", { pageTitle: `Edit ${video.title}`, video})
    }catch(error) {
        res.redirect(routes.home);
    }
    //res.render("editVideo" , {pageTitle: "Edit Video"})
};

export const postEditVideoController = async  (req, res) => {
    const {
        params: {id},
        body: {title,description}
    } = req;

    try {
        await Video.findOneAndUpdate({_id: id}, {title, description});
        res.redirect(routes.videoDetail(id))
    }catch(error){
        res.redirect(routes.home);
    }
};

export const deleteVideoController = async (req,res) => {
    const {
        params: {id}
    } = req;
    try {
        await Video.findOneAndRemove({_id:id})
    }catch(error){}
    res.redirect(routes.home)
};