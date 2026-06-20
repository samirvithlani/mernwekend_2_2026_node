//#module use import || require
const express = require("express"); //whole express module..
//create an object or ref variable of express module
const app = express(); // app is ref variable..
const dbConnection = require("./src/utils/DBConnection")
dbConnection() //call

//routes require
//localhost:3000/users
const userRoutes = require("./src/routes/UserRoutes")
app.use(userRoutes)


//create web server..
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
