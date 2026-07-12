const zod = require("zod")

const UserValidationSchema = zod.object({
    name:zod.string().min(2,"name must be at least 2 characters long"),
    email:zod.string().email("invalid email"),
    password:zod.string().min(8,"password must be at least 8 characters long"),
    //array of strings
    hobbies:zod.array(zod.string()),
    age:zod.number().min(18,"age must be at least 18").max(60,"age must be at most 60"),
    bloodGroup:zod.enum(["A+","A-","B+","B-","O+","O-"]),
    roleId:zod.string()
})
module.exports = UserValidationSchema