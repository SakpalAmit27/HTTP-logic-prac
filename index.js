const express = require("express");

const app = express(); 

const users = [{

    username:"amit",
    kidneys:[{
        healthy:false,
    }]
}];

app.get("/",(req,res) => {

    const user_kidneys = users[0].kidneys;

    res.send(user_kidneys)

})




app.listen(3000);