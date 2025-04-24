//1 Shallow Copy - Spread Syntax, Array.protptype.concat(), Array.prototype.slice(), Array.from() Object.assign()
const ingredientList = ["noodles", {list:["eggs", "flour", "water"]}];
const ingredientListCopy = Array.from(ingredientList);
console.log(ingredientListCopy);
//Re-assigning the value of a nested property will be visible in both objects
ingredientListCopy[1].list = ["rice flour", "water"];
console.log(ingredientList[1].list);
//Re-assigning the value of a top-level property (the 0 intex in this case) will only be visible in the changed object.
ingredientListCopy[0] = "rice noodles";
console.log(ingredientList[0]);
console.log(JSON.stringify(ingredientListCopy));
console.log(JSON.stringify(ingredientList));

console.log(ingredientList[1]===ingredientListCopy[1]);