let foods = ["Cake", "Spaghetti", "Ice Cream"];
console.log(foods);
foods.push("Pizza");
console.log(foods);
foods.shift("Cake");
console.log(foods);

for(food of foods){
    console.log(food);
}

console.log("===========map=========");

const likedFoods = foods.map(mfood => {
    return "I like " + mfood;
});
console.log(likedFoods);