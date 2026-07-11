//#module use import || require
const express = require("express"); //whole express module..
//create an object or ref variable of express module
const app = express(); // app is ref variable..
const dbConnection = require("./src/utils/DBConnection")
dbConnection() //call
app.use(express.json()) //applying global middleware to accept json data in req.body..
require("dotenv").config() // .env 

//routes require
//localhost:3000/users
const userRoutes = require("./src/routes/UserRoutes")
app.use(userRoutes)


//localhost:3000/role
const roleRoutes = require("./src/routes/RoleRoutes")
app.use("/role",roleRoutes)


//create web server..
//const PORT = 3000;
//const PORT = process.env.PORT
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
