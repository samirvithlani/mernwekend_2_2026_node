//functions
const userSchema = require("../models/UserModel");
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
  //const foundUser = await userSchema.find({_id:ObjectId("")}) // [{}]

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

module.exports = {
  getUsers,
  getUserById,
};
