function c(i){ console.log(i); }
/* Question 1
 *
 *  Implement the functions defined below
 *
 */

 /* ===========================================================================
  * MIN - the lowest value in a list
  *
  * For example:
  *
  *    min([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    0
  */
function min(arr) {
  var output = arr.reduce(function(a, b){ if(b < a) { return b; } return a; }, arr[0]);
  return output;
}


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function max(arr) {
  return arr.reduce(function(a, b){ if(b > a) { return b; } return a; }, arr[0]);
}

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function range(arr) {
  let minV = min(arr);
  let maxV = max(arr);
  return maxV - minV;
}

// Don't change below:

module.exports = { min: min, max: max, range: range };




























