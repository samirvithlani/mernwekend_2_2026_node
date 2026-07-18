//functions
const userSchema = require("../models/UserModel");
const mongoose = require("mongoose");
const mailsend = require("../utils/MailUtil")
//userScham == db.users
const getUsers = async (req, res) => {
  //db-->
  //join..
  //const users = await userSchema.find(); //[]
  //roleId --> check userModel and apply columnName not ref name
  //const users = await userSchema.find().populate("roleId"); //[] 
  const users = await userSchema.find().populate("roleId","name"); //[] 
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
  } else {
    res.json({
      message: "user not found",
    });
  }
};

const searchUserByName = async (req, res) => {
  //req.query
  const name = req.query.name;
  //console.log(name)
  const foundUsers = await userSchema.find({ name: name }); //[]-->blank
  res.json({
    message: `user found with name ${name}`,
    data: foundUsers,
  });
};

//req.params :id
//req.query ???
//POST -{object} ---> req.body
const addUser = async (req, res) => {
  //db.users.insertOne({})
  //db.users == userSchema
  //userSchema.insertOne({name:"amir",,,,})
  //userSchema.insertOne(req.body)
  //insertOne -->replacement -->create()
  //{}req.body { name: 'amit', age: 23, email: 'amit@gmail.com', password: 'amit123' }
  try {
    // const profilepic = req.file;
    // console.log("file object...",profilepic)
    //req.file v-->if you have applied multer middleware in routes...
    //const savedUser = await userSchema.create(req.body);
    const savedUser = await userSchema.create({...req.body,profilePic:req.file.path});
    await mailsend(req.body.email,"WELCOME MAIL",`hi ${req.body.name} welcome to portal`)

    console.log("req.body", req.body);
    res.status(201).json({
      message: "user adde",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      err: err,
    });
  }
};

const deleteUser = async (req, res) => {
  //db.users.removeOne({_id:"lahsaljsaipsajsa"})
  //id req.params
  //userSchema.removeOne({_id:Objectid(req.params.id)})

  const id = req.params.id;
  try {
    //const deletedUser = await userSchema.deleteOne({name:"amtit"})
    const deletedUser = await userSchema.findByIdAndDelete(id);
    console.log("deleted user..", deletedUser);
    if (deletedUser) {
      res.status(200).json({
        message: "user deleted.",
      });
    } else {
      res.status(404).json({
        message: "user not found to delete",
      });
    }
  } catch (err) {
    res.status(500).json({
      err: err,
    });
  }
};

const updateUser = async (req, res) => {
  //db.users.updateOne({$set:{name:"",age:""},{id:"aksjasnjsa"})
  //id -->req.params
  //new data -->req.body
  try {
    const id = req.params.id;
    const updatedUser = await userSchema.findByIdAndUpdate(id, req.body,{new:true});
    if (updatedUser) {
      res.status(200).json({
        message: "user updated",
        data: updatedUser,
      });
    } else {
      res.status(404).json({
        message: "user not found to update",
      });
    }
  } catch (err) {
    res.status(500).json({
      err: err,
    });
  }
};

//params.id
//req.body -->hobby
//$push
///check -->hobby already exist.


//params.id
//req.body -->hobby
//$pull
///check -->hobby already exist.



module.exports = {
  getUsers,
  getUserById,
  searchUserByName,
  addUser,
  deleteUser,
  updateUser
};
