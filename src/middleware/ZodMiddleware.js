const zodMiddleware = (schema)=>(req,res,next)=>{

    try{
        schema.parse(req.body) //if both match
        next()
    }
    catch(err){
        res.status(400).json({
            message:"validation error",
            error:err
        })
    }

}
module.exports = zodMiddleware
