console.log("Hello");
console.log("app file loaded")
const empSal = require("./employee")
const users = require("./users")
const students = require("./students")

console.log("employee salary =",empSal)
console.log(users)
console.log(users.userName)
console.log(users.usercity)
console.log(students)
//function call...
students.addStudent(17,"12th") //function..
const studentinfo = students.printStudent()
console.log(studentinfo)

