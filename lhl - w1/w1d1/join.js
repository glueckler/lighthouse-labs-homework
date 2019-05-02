// function join(arr) {
//   var str = "";
//   for(var i = 0; i < arr.length; i++) {
//     str += arr[i];
//     if (i !== arr.length -1) str += ", ";
//   }
//   return str;
// }
var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

function join(arr) {

  var str;
  for( var i = 0; i < arr.length; i++) {
    str += arr[i];
    if(i !== arr.length - 1) str += ", ";
  }
  return str;

}

console.log(join(['apple', 'banana']));

