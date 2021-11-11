const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
var y = 0;
for (y in ingredients) {
  console.log(ingredients[y]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

let x = ingredients.length;
while (x >= 0) {
  console.log(ingredients[x]);
  x--;
}
