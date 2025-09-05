const person = {
  name: "Jimmy", 
  age: 20
};

const hobbies = ["Playing", "Reading", "Observing"];

function printName({name, age} =person){
    console.log(
        "Name: " + name + ", Age: " + age
    );
}

function printHobbies([f, s, t] = hobbies){
    console.log(
        "Hobbies: " + f + ", " + s + ", " + t
    );
}   
printName(person);
printHobbies(hobbies);
