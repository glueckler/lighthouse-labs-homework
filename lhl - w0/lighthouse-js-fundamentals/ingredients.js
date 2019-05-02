var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var arrayLength = ingredients.length;
var counter = 0;
while (counter < arrayLength) {
  console.log(ingredients[counter]);
  counter++;
}


// Write a for loop that prints out the contents of ingredients:
for(i = 0; i < arrayLength; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
var j = arrayLength;
do {
  j--;
  console.log(ingredients[j]);
} while( j > 0 );