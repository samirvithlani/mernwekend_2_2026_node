const mongoose = require("mongoose")


//udf
const dbConnection = ()=>{

    //127.0.0.1 -->localhost
    mongoose.connect("mongodb://127.0.0.1/node_weekend_2_2026").then(()=>{
        console.log("datbase connected..")
    }).catch((err)=>{
        console.log("error in database connectino",err)
    })

}
module.exports = dbConnection