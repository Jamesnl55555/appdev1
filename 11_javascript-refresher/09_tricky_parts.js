let x;
let y = null;


if(x === y){
    console.log("x and y are equal in ===");
}
else{
    console.log("x and y are not equal in ===");
}
if(x == y){
    console.log("x and y are equal in ==");
}
else{
    console.log("x and y are not equal in ==");
}
console.log("normal function output: ");
function compare(x, y){
    if(x === y){
        if(x==y){
            console.log("x and y are equal in both === and ==");
        }
        else{
            console.log("x and y are equal in === but not in ==");
        }
    } else{
        if(x==y){
            console.log("x and y are not equal in === but equal in ==");
        }
        else{
            console.log( "x and y are not equal in both === and ==");
        }   
    }
}
compare(x,y);
console.log("arrow function output: ");
const arrowcompare = (x, y) => {
    if(x === y){
        if(x==y){
            console.log("x and y are equal in both === and ==");
        }
        else{
            console.log("x and y are equal in === but not in ==");
        }
    } else{
        if(x==y){
            console.log("x and y are not equal in === but equal in ==");
        }
        else{
            console.log("x and y are not equal in both === and ==");
        }
    }
}
arrowcompare(x,y);

let hobbies = ["Playing", "Reading", "Observing"];
let foods = ["Cake", "Spaghetti", "Ice Cream"];
console.log(hobbies);
console.log(foods);
console.log("Merging hobbies and foods:");
// let foods = hobbies; this will show an error because foods is already declared
let likes = [...hobbies, ...foods];
console.log(likes);
