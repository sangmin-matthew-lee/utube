import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileURL: {
        type: String,
        required: "Fiel URL is required",
    },
    title: {
        type:String,
        requried: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
});

const model = mongoose.model("Video", VideoSchema);
export default model;