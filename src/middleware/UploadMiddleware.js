const multer = require("multer")

const storage = multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
    destination:"./uplaods"
})

const upload = multer({
    storage:storage,
})
module.exports = upload
// as middleware..