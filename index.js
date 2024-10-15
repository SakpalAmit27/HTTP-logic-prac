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

    // counting no of kidneys // 

    const number_of_kidneys = kidneys.length;

    let number_of_healthy_kidneys = 0; 

    for(let i = 0; i<user_kidneys.length;i++){
        if(user_kidneys[i].healthy){
            number_of_healthy_kidneys = number_of_healthy_kidneys + 1;
        }
    }

    


})




app.listen(3000);