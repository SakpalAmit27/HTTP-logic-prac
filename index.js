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

// using put request //
// replacing the kidenys // 
app.put("/",(req,res) => {
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({msg:"done"})
})

// put one unhealthy // 

app.put("/unhealthy",(req,res) => {
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = false;
    }
    res.json({msg:"added unhealthy"})


})

// logic to remove unhealthy kidneys 

app.delete("/",(req,res) =>{ 

    
    // there should be atleast one unhealthy // 
    if(isThereAtleastUnhealthykidney()){
        for(let i = 0; i<users[0].kidneys.length; i++){
 
            users[0].kidneys = users[0].kidneys.filter((kid_ney) => kid_ney.healthy)
        }
     
        res.json({msg:"removed unhealthy done"})
      
    }
    else{
        res.json({msg:"no unhealthy kidneys to remove"})
    }



})

// functionm to check atleast one bad kidney // 

function isThereAtleastUnhealthykidney(){
    let atleastOneUnhealthyKidney = false; 

    for(let i = 0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }

    return atleastOneUnhealthyKidney;
}

app.listen(3000);