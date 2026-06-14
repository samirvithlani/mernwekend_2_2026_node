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
    id: 2,
    name: "amita",
    age: 24,
  },
  {
    id: 3,
    name: "jay",
    age: 25,
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

app.get("/users1",(req,res)=>{

  res.write(JSON.stringify(user))
  res.send()
})

app.get("/users2",(req,res)=>{
  res.set("content-type","text/html")
  res.write(`<h1>Hello</h1>`)
  res.send()
})


app.get("/usertable",(req,res)=>{

  res.set("content-type","text/html")
  res.write(`<center><table cellspacing='5px' cellpadding='10px' border='1px' solid>
    <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
    </tr>`)
    for(i of users){
      res.write(`<tr><td>${i.id}</td>`)
      res.write(`<td>${i.name}</td>`)
      res.write(`<td>${i.age}</td></tr>`)
    }
    res.write(`</table></center>`)
    res.send()

})

//create web server..
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
