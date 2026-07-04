
const roleSchema = require("../models/RoleModel")
//post
const createRole = async(req,res)=>{

    try{

        const savedRole = await roleSchema.create(req.body)
        //if else
        res.status(201).json({
            message:"role created",
            data:savedRole
        })    

    }catch(err){
        res.status(500).json({
            message:"error while creating role",
            err:err
        })
    }


}

//get
const getAllRoles = async(req,res)=>{

    try{

        const roles = await roleSchema.find({})
        //if else
            res.status(200).json({
                message:"all roles",
                data:roles
            })

    }catch(err){
        res.status(500).json({
            err:err
        })
    }
}

module.exports = {
    createRole,getAllRoles
}