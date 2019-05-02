function c(i){ console.log(i); }
/* Question 2
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
function median(arr) {
  // let max = arr.reduce(function(a, b){ return Math.max(a, b); });
  // const min = arr.reduce(function(a, b) { return Math.min(a, b) });

  var sorted = arr.sort(function(a, b){
    return a - b;
  });
  var half = (arr.length / 2);
  var halfCeil = Math.ceil(half) - 1;
  var median;
  if(half % 2 === 0) {
    median = ( (sorted[halfCeil + 1] - sorted[halfCeil]) / 2) + sorted[halfCeil];
  } else {
    median = sorted[halfCeil];
  }
  return median;

}

function round(number) {
  return Math.round(number * 100) / 100;
}

// Don't change below:

module.exports = { median: median };
