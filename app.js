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

app.get("/users", (req, res) => {
  res.json({
    message: "user fetch successfully !!",
    data: users,
  });
});

app.get("/users1", (req, res) => {
  res.write(JSON.stringify(user));
  res.send();
});

app.get("/users2", (req, res) => {
  res.set("content-type", "text/html");
  res.write(`<h1>Hello</h1>`);
  res.send();
});

app.get("/usertable", (req, res) => {
  res.set("content-type", "text/html");
  res.write(`<center><table cellspacing='5px' cellpadding='10px' border='1px' solid>
    <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
    </tr>`);
  for (i of users) {
    res.write(`<tr><td>${i.id}</td>`);
    res.write(`<td>${i.name}</td>`);
    res.write(`<td>${i.age}</td></tr>`);
  }
  res.write(`</table></center>`);
  res.send();
});

//url data  -->2 options -->req.params /:id
//req.query  ?name=""

//localhost:3000/getuserbyid/1
app.get("/getuserbyid/:id", (req, res) => {
  //:id -->req.params object
  //params data -->type->text
  console.log("params", req.params);
  console.log(req.params.id);

  //users =[] ==id -->{} -->array for loop every iter id match -->if -->object variable store send
  var foundUser = users.find((user) => user.id == req.params.id);
  console.log("found object", foundUser);

  if (foundUser) {
    res.json({
      message: "user found",
      data: foundUser,
    });
  }
  else{
    res.json({
      message: "user not found",
      
    });
  }

  // res.json({
  //   message:"user found",
  //   data:foundUser
  // })
});


var students =[
  {
    "id": 101,
    "name": "Amit Sharma",
    "college": "ABC College",
    "marks": 85
  },
  {
    "id": 102,
    "name": "Rahul Patel",
    "college": "XYZ College",
    "marks": 78
  },
  {
    "id": 103,
    "name": "Neha Shah",
    "college": "PQR College",
    "marks": 92
  },
  {
    "id": 104,
    "name": "Pooja Verma",
    "college": "LMN College",
    "marks": 88
  },
  {
    "id": 105,
    "name": "Karan Mehta",
    "college": "DEF College",
    "marks": 81
  }
]
//get api -->params marks --> 85 > marks all student array return 

//create web server..
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
