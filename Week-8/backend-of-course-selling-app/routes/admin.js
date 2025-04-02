const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require


adminRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "Signup succeded"
    })
})

adminRouter.post("/signin", function(req, res) {
    
})
adminRouter.post("/course", function(req, res) {

})

adminRouter.put("/couse", function(req, res) {

})

adminRouter.get("/couse/bulk", function(req, res) {

})


module.exports = {
    adminRouter: adminRouter
}