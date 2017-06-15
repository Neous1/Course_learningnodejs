var greet = function (){
    console.log("hi from exported greet.js")
};

// make greet() available 
module.exports = greet;