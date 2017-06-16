//revealing module pattern
var greeting = "Hello from greet5";

function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet
}