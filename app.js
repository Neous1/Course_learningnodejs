// app.js needs a module
require("./greet.js")

// var a = 1;
// var b = 3; 
// var c = a + b;

// console.log(c);


// function statement
function greet(){
    console.log("hi");
}
greet();

function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function expression
var greetMe = function(){
    console.log("Hi Yvon");
}
greetMe();

// it's first-class
logGreeting(greetMe);

//use a function expression to create a function on the fly
logGreeting(function(){
    console.log("Hello Yvon")
})