const testMiddleware = (role)=> (req,res,next)=>{

    console.log("role",role)
    console.log("middleware called...")
    if(role=="admin"){
        next()
    }
    else{
        res.status(400).json({
            message:"unauthorized."
        })
    }
    

}
module.exports = testMiddleware