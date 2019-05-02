var names = ["Alice", "Bob", "Waldo", "Winston"];

// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(el, i){
    if (el === "Waldo") found(i);
  });
}

function actionWhenFound(index) {
  console.log("Found him!" + ` he's at index ${index}`);
}

findWaldo(names, actionWhenFound);

