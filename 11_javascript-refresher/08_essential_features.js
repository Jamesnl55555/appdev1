let hobbies = ["Playng", "Reading", "Observing"];

let hobbyList = hobbies.map(hobby => {
    console.log(hobby);
});

let student = {
    name: "Jimmy",
    age: 20
}

let {name, age} = student;
console.log(name);
console.log(age);

let count = [1,2,3];
console.log(count);
let newCount = [...count, 4, 5];
console.log(newCount);