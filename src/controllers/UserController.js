//functions
const userSchema  = require("../models/UserModel")
//userScham == db.users
const getUsers = async(req,res)=>{

    //db-->
    const users = await userSchema.find() //[]
    res.json({
        message:"user api called..",
        data:users
    })
}

module.exports = {
    getUsers
}