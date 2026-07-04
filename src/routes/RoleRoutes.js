const router = require("express").Router()
const roleController = require("../controllers/RoleController")

//localhost:3000/role/create
router.post("/create",roleController.createRole)
//localhost:3000/role/get
router.get("/get",roleController.getAllRoles)
module.exports = router
