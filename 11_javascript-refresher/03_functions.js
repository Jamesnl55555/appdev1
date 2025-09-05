function greet(name) {
    return "Hello, " + name + "!";
}

const square = (num) => {
    return "Square root of " + num + " is " + (num * num);
}

function calculator(a, b){
    return "Sum: " + (a+b) + ", Product: " + (a*b);
}

console.log(greet("Jimmy"));
console.log(square(5));
console.log(calculator(5, 10));
