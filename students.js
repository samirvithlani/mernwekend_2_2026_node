console.log("student file loaded")
var sage;
var sstd;
const addStudent =(age,std)=>{
    console.log("add student function called...")
    //console.log("age=",age);
    //console.log("std = ",std);   
    sage = age
    sstd = std
    
}
const printStudent =()=>{
    
    return {sage,sstd}
}
module.exports ={
    addStudent,printStudent
}