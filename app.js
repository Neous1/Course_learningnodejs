
// expression function is an easy way to create a module as the function get created and invoked immediately
var firstname = 'Jane';
(function(lastname){
    var firstname ='John';
    console.log(firstname);
    console.log(lastname)
}('Doe'));


console.log("global firstname", firstname);