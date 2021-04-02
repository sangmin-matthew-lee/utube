import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/u-tube", {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => {
    console.log("Connected to DB");
}

const handleError = (error) => {
    console.log("Error on DB Connection");
}
db.once("open", handleOpen);
db.on("error", handleError);