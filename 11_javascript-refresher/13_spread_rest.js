const numbers = [1, 2, 3];
const user = { name: "Jimmy", age: 20}; 
const numExtend = [...numbers, 4, 5];
const userExtend = {...user, course: "BSIS"};
console.log(numExtend);
console.log(userExtend);
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num);
}

console.log(sum(...numbers));