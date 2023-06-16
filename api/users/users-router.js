const router = require("express").Router;
const MW = require ("./users-middleware");
const usersModel = require("./users-model");


router.get("/users", (req,res,next) => {
    try {
        const allUsers = usersModel.getAllUsers();
        res.json(allUsers);
    } catch (error) {
        next(error);
    }
});
router.post("/register", MW.validatePayload ,(req,res,next) => {
    try {
        let userObject = {
            username : req.body.username,
            password : req.body.password,
        } 
            const insertedUSer = usersModel.insert(userObject);
            res.status(201).json(insertedUSer);
    } catch (error) {
        next(error);
        
    }
});
router.post("/login", MW.validatePayload, MW.validateLogin, (req,res,next) => {
    try {
        res.json({message: `Hoş geldiniz ${req.existUser.username}- userId: ${req.existUser.user_id}`})
    } catch (error) {
        next(error);
}}); 


module.exports = router ;