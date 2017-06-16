// create a function constructor to be called/built later
function Greetr(){
    this.greeting = "Hello from greet 3";
    this.greet = function(){
        console.log(this.greeting);
    }
}
// replace the empty object EXPORT wth new GReetr constracted above
module.exports = new Greetr()