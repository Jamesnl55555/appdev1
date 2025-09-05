let GWA = 95;
let grades = "";
if (GWA >= 90) {
    grades = "A";
}
else if (GWA >= 80 && GWA < 90) {
    grades = "B";
}
else if (GWA >= 70 && GWA < 80) {
    grades = "C";
}
else {
    grades = "F";
}

console.log("Your grade is " + grades);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let count = 0;
while (count < 3) {
    console.log("Hello");
    count++;
}