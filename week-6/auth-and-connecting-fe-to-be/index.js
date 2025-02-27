const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "tejas02";

const app = express();
app.use(express.json());

const users = [];


app.post("/signup", (req, res) =>{
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username: username,
    password: password
  })

  res.json({
    message: "You are signed up"
  })
});

app.post("/signin", (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i=0; i<users.length; i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }

    if(!foundUser){
        res.json({
            message: "credentials incorrect"
        })
        return;
    }
    else{
        const token = jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token: token
        })
    }
    
});

app.get("/get-password", (req, res) =>{
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData.username){
        let foundUser = null;

        for(let i =0; i<users.length; i++){
            if(users[i].username === decodedData.username){
                foundUser = users[i];
            }
        }

        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
});

app.listen(3000);