const alluserData = require('../Model/model')
const bcrypt = require("bcrypt")

const regController = async(req,res)=>{
    const data = req.body;
    console.log(data);
    const dbCheck = await alluserData.findOne({email:data.email})
    console.log(dbCheck);

    if(!dbCheck){
        const hashPassword = bcrypt.hashSync(data.password,10);
        const obj = {...data,password:hashPassword}
        console.log(obj);
        await alluserData.create(obj)
        return res.send({msg:"User is successfully Registered"})
    }
    return res.send({msg:"User is already registered"})
}

module.exports = regController;