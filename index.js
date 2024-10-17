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

    const number_of_kidneys = user_kidneys.length;

    let number_of_healthy_kidneys = 0; 

    for(let i = 0; i<user_kidneys.length;i++){
        if(user_kidneys[i].healthy){
            number_of_healthy_kidneys = number_of_healthy_kidneys + 1;
        }
    }

    const number_of_unhealthy_kidneys = number_of_kidneys - number_of_healthy_kidneys

    res.json({
        number_of_kidneys,
        number_of_healthy_kidneys,
        number_of_unhealthy_kidneys
    })



})

// to put a kindey // 
app.use(express.json());
app.post("/",(req,res) => {
    
    const isHealthy = req.body.isHealthy; 

    // pushing into the users /// 
    users[0].kidneys.push({
        healthy:isHealthy
    })

    res.json({
        msg:"Done"
    })
})




app.listen(3000);