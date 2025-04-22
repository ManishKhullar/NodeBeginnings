const ingredientsList  = ["noodles", {list:["eggs", "flour", "water"]}];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));

// console.log(ingredientsList);
// console.log(ingredientsListDeepCopy);
//Change the value of the 'List' property in the ingredientsListDeepCopy
ingredientsListDeepCopy[1].list = ["Rice FLour", "Water Body"]
//The List property does not change in ingredients list
console.log(ingredientsList[1].list);
console.log(ingredientsListDeepCopy[1].list);