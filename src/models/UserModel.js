const mongoose = require("mongoose")
const Schema = mongoose.Schema //class

const userSchema = new Schema({
    //fileds..
})

//users ->collection[table]-->db.js -->
module.exports = mongoose.model("users",userSchema)

//db.users.find()
// userSchema <---> users table..


