//#module use import || require
const express = require("express"); //whole express module..
//create an object or ref variable of express module
const app = express(); // app is ref variable..

//url
//localhost:3000/test

app.get("/test", (req, res) => {
  console.log("test api called..");
  res.send("test api called...");
});

const user = {
  id: 1,
  name: "amit",
  age: 23,
};

const users = [
  {
    id: 1,
    name: "amit",
    age: 23,
  },
  {
    id: 1,
    name: "amit",
    age: 23,
  },
  {
    id: 1,
    name: "amit",
    age: 23,
  },
];

//localhost:3000/user
app.get("/user", (req, res) => {
  //res.json(user)
  res.json({
    message: "success",
    data: user,
  });
});

app.get("/users",(req,res)=>{
    res.json({
        message:"user fetch successfully !!",
        data:users
    })
})

//create web server..
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
