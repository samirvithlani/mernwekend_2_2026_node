//functions
const userSchema = require("../models/UserModel");
const mongoose = require("mongoose")
//userScham == db.users
const getUsers = async (req, res) => {
  //db-->
  const users = await userSchema.find(); //[]
  res.json({
    message: "user api called..",
    data: users,
  });
};
const getUserById = async (req, res) => {
  //id -->params.
  const id = req.params.id;
  console.log(id);
  //const foundUser = await userSchema.find({_id:new mongoose.Types.ObjectId(id)}) // [{}]
    const foundUser = await userSchema.findById(id); //{}
  if (foundUser) {
    res.json({
      message: "user found",
      data: foundUser,
    });
  }
  else{
    res.json({
      message: "user not found",
    });
  }
};

const searchUserByName = async(req,res)=>{

    //req.query
    const name = req.query.name;
    //console.log(name)
    const foundUsers = await userSchema.find({name:name}) //[]-->blank
    res.json({
        message:`user found with name ${name}`,
        data:foundUsers
    })

}

module.exports = {
  getUsers,
  getUserById,
  searchUserByName
};
