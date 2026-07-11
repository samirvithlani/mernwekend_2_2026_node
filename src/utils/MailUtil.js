const mailer = require("nodemailer")
require("dotenv").config()

const mailsend = async(to,subject,text)=>{

    const transporter = mailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL_ID,
            pass:process.env.EMAIL_PASS //gmail password -->app password
        }
    })

    const mailOptions = {
        from:process.env.EMAIL_ID,
        to:to,
        subject:subject,
        text:text
    }

    const mailResponse = await transporter.sendMail(mailOptions)
    console.log("mail response",mailResponse)
}

module.exports = mailsend
//mailsend("samir.vithlani83955@gmail.com","test","hi samir")