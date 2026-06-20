const router = require("express").Router()
const userController = require("../controllers/UserController")
//router.get("/users",(req,res)=>{}) <<-- (req,res) -->controller

router.get("/users",userController.getUsers)
module.exports = router