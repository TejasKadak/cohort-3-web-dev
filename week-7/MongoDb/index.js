const express = require("express");
const { UserModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "secret@123"

mongoose.connect("mongodb+srv://tejas02001:MIOX7dy0egXsufqq@cluster0.eo06e.mongodb.net/todo-collection-t");
const app = express();
app.use(express.json());

app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are logged in"
    })
});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if(user){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        });
         }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/todo", function(req, res){

})

app.get("/todos", function(req,res){

})


app.listen(3000);