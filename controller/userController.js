import routes from "../routes.js";

export const getJoinController = (req, res) => {
    res.render("join", {pageTitle: "Join"})
};

export const postJoinController = (req,res) => {
    const {
        body: { name, email, password, password2}
    } = req
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    }else {
        // To Do: Register User
        // To Do: Log user in
        res.redirect(routes.home)
    }
};

export const getLoginController = (req, res) => res.render("login", {pageTitle: "Login"});
export const postLoginController = (req, res)=>{
    res.redirect(routes.home);
}

export const logoutController = (req, res) => {
    //To Do: Process Log Out
    res.redirect(routes.home)
};
//export const usersController = (req, res) => res.send("users");
export const userDetailController = (req, res) => res.render("userDetail", {pageTitle: "User Detail"});
export const editProfileController = (req, res) => res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePWController = (req, res) => res.render("changePassword", {pageTitle: "Change Password"});