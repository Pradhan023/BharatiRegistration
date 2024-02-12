const mongo = require("mongoose")

const Connect = async()=>{
    try{
        await mongo.connect(process.env.MONOGO_URL)
        console.log("Mongo DB Conntected");
    }
    catch(err){
        console.log("Mongodb err" , err);
    }
}

module.exports = Connect