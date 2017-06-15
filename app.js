//pass by value
function change (b){
    console.log(b)
    b=2
}
var a =1;
change(a); // when a gets passed to change(), b become a and be gets assigned the value of a 
console.log(a);

// pass by reference
function changeObj(d){
    d.prop1 = function(){};
    d.prop2 = {};
}
var  c = {};
c.prop1 = {};
changeObj(c);
console.log(c);