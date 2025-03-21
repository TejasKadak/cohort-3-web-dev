const express = require('express');
const app = express();


// // function that return a boolean if the age of the person is 14> or not?
// function isOldEnough(age){
//     if(age >= 14){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// middleware
function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }
    else{
        res.json({
            msg: "Sorry you are not of age yet",
        })
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1", function(req, res){
        res.json({
            msg: "You have successfully riden the ride 1"
        })
    
})

app.get("/ride2", function(req, res){
        res.json({
            msg: "You have successfully riden the ride 1"
        })   
})

app.listen(3000);