let AboutMe = {
    name: "Jimmy",
    age: 20,
    course: "BSIS"
};

function introduce(){
    return "Hi, my name is " + AboutMe.name + " and I am " + AboutMe.age + " years old.";
}
AboutMe.hobby ="Playing Chess";

console.log(introduce());
console.log("My hobby is " + AboutMe.hobby);