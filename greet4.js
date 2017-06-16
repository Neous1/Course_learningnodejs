// create a function constructor to be called/built later
function Greetr(){
    this.greeting = "Hello from greet 4";
    this.greet = function(){
        console.log(this.greeting);
    }
}
// replace the empty object EXPORT with the constructor itself
module.exports = Greetr;