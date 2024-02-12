const  mongoose = require("mongoose")

const RegisterationSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

const alluserData = mongoose.model("UserData",RegisterationSchema)

module.exports = alluserData;