const { Router } = require("express");
const { userModel, purchaseModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PAASWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");

const userRouter = Router();

userRouter.post("/signup", function(req, res) {

})

userRouter.post("/signin", function(req, res) {

})

userRouter.get("/purchases", function(req, res) {

})


module.exports = {
    userRouter: userRouter
}