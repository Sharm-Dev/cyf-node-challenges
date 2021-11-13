const express= require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const stratford = require("./data/Stratford.json");


app.get("/pharmacies", (request, response)=>{
    response.send(stratford.pharmacies)
})

app.listen(PORT, ()=>{
    console.log("listening on port" + PORT)
})




