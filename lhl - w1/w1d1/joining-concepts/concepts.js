/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

function joinList(input) {
  var str = '';
  for (var i = 0; i < input.length; i++) {
    str += input[i];
    if (i+1 == input.length) return str;
    str += ", ";
  }
}

console.log("Today I learned about " + concepts + ".");
