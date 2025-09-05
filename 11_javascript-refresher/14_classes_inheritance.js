class Person{
constructor(name, age){
    this.name = name;
}
sayHello() {
  console.log("Hi, I am " + this.name);
};

}
// testing:
const Person1 = new Person("Jimmy");
Person1.sayHello();

class Student extends Person{
    study(){
        console.log(this.name + " is studying.");
    }
    }

const Student1 = new Student("Jimmy");
console.log("Student class extending Person class:");
Student1.sayHello();
Student1.study();