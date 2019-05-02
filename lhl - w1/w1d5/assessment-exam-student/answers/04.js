/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - you are allowed to look at Wikipedia's example calculation:
 *            https://en.wikipedia.org/wiki/Standard_deviation#Basic_examples
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

function round(number) {
  return Math.round(number * 100) / 100;
}

function stdev(arr) {
  //calculate mean
  const mean = arr.reduce(function(a, b){
    return a + b;
  })
  /
  arr.length;

  let mMS;
  //=========> minusMeanSquared
  mMS = arr.map(function(a){
    return Math.pow((a - mean), 2);
  });

  let mOD;
  //=========> meanOfDifferences
  mOD = mMS.reduce(function(a, b) {
    return a + b;
  })
  /
  mMS.length;

  const standardDev = round(Math.sqrt(mOD));

  return standardDev;
}




// Don't change below:

module.exports = { stdev: stdev };




