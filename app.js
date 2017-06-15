function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

var Peter = new Person("john","Doe");
console.log(Peter.firstname)