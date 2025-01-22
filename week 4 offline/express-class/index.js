const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys:[{
        healthy: false,
        unhealthy: true
    }]
}];

// filter in js
app.get("/", function(req, res){
    const johnKideneys = users[0].kidneys;
    const numberOfKidneys = johnKideneys.length;
    let numberOfHealthyKideneys = 0;
    for(let i = 0; i<johnKideneys.length; i++){
        if(johnKideneys[i].healthy){
            numberOfHealthyKideneys = numberOfHealthyKideneys + 1;
        }
    }

    const numberOfUnhealthyKideneys = numberOfKidneys - numberOfHealthyKideneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKideneys,
        numberOfUnhealthyKideneys
    })
})

app.listen(3000);