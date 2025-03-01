const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "tejas20";

const app = express();
app.use(express.json());

const users = [];

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
})

// Signup Route - No auth middleware here
app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    users.push({ username, password });

    res.json({ message: "You are signed up" });
});

// Signin Route - No auth middleware here
app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (!foundUser) {
        return res.status(401).json({ message: "Credentials incorrect" });
    }

    const token = jwt.sign({ username: foundUser.username }, JWT_SECRET);
    res.header("jwt", token);

    res.json({ token });
});

// Authentication Middleware
function auth(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);
        req.username = decodedData.username;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

// Get Current User Data
app.get("/me", auth, function(req, res) {
    const currentUser = req.username;

    const foundUser = users.find(user => user.username === currentUser);

    if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({ username: foundUser.username, password: foundUser.password });
});

app.listen(3000, () => console.log("Server running on port 3000"));
