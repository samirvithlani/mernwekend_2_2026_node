const router = require("express").Router()
const userController = require("../controllers/UserController")
//router.get("/users",(req,res)=>{}) <<-- (req,res) -->controller
router.get("/users",userController.getUsers)
router.get("/user/:id",userController.getUserById)
router.get("/userbyname",userController.searchUserByName)

//localhost:3000/user
router.post("/user",userController.addUser)
router.delete("/user/:id",userController.deleteUser)
router.put("/user/:id",userController.updateUser)
module.exports = router