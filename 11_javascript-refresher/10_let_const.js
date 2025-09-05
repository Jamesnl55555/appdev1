let a = "b";
const b = "c";
console.log("Before modification:");
console.log(a);
console.log(b);
console.log("After modification:");
a = "d";
// b = "e"; This will cause an error due to variable being constant
console.log(a);
console.log(b);

console.log("comparing with var: ");
var c = "d";
console.log(c);
c = "e";
console.log(c);

var name = "Elmer"; 
var age = 30;
age = 20;

console.log(name);
console.log(age);

name = "Jimmy"; 
age = 20;


console.log(name);
console.log(age);
