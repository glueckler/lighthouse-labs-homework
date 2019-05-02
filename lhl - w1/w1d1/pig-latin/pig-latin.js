var input = process.argv.slice(2);

console.log(pigL(input));

function pigL(arr) {

  var pigArr = [];
  for (var i = 0; i < arr.length; i++) {

    var firstLetter = arr[i][0];
    var ending = arr[i].slice(1);
    pigArr.push(ending + firstLetter + "ay");

  }

  return pigArr.join(" ");
}