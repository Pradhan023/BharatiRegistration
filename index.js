require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors")
const Connect = require("./config/connect")

const route = require('./Routes.js/fileroute')

app.use(cors())
const Port = 5000 || process.env.Port ;
app.use(express.json())
app.use("/bharat",route)

app.listen(Port,async()=>{
    try{
        await Connect();
        console.log('Server is Live on ', Port )
    }
    catch(err){
        console.log(err);
    }
})
