const router = require("express").Router()
const roleController = require("../controllers/RoleController")
const zodMiddleware = require("../middleware/ZodMiddleware")
//const RoleValidationSchema = require("../validationschemas/RoleValidationScjam")

//localhost:3000/role/create
//router.post("/create",zodMiddleware(RoleValidationSchema),roleController.createRole)
router.post("/create",roleController.createRole)
//localhost:3000/role/get
router.get("/get",roleController.getAllRoles)
module.exports = router
