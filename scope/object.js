// var person1 = {
//     name:"Udhhav"
// };

// var person2 = new Object({name:'UdhhavA', age:23});
// console.log(person1);
// console.log(person2.age);



function Person(){
    this.name = "Hello, I am inside the function";
    var myname = "udhhav";}

// var y = new Person();
// console.log(y);

var p1 = new Person();
p1.name = "Kiran";
var p2 = new Person();
p2.name = "Ravi";

Person.prototype.geder ="M";
console.log(p1);
console.log(p2);