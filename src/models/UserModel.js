const mongoose = require("mongoose")
const Schema = mongoose.Schema //class

const userSchema = new Schema({
    //fileds..
    //name:String,
    
    name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    bloodGroup:{
        type:String,
        enum:["A+","A-","B+","B-","O+","O-"]
    },
    hobbies:[{
        type:String,
    }],
    //roleId --> columnName -->it can be any eg role, userRole, rolId, roleData
    roleId:{
        type:Schema.Types.ObjectId,
        ref:"roles"
        //check rolemodel export name
    }
})

//users ->collection[table]-->db.js -->
module.exports = mongoose.model("users",userSchema)

//db.users.find()
// userSchema <---> users table..


