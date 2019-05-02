
/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
function mode(arr) {
//   let obj = {};
//   for( val of arr ) {
//     obj[val] = obj[val] + 1 || 1;
//   }
//   var count = 0;
//   var output;
//   for (key in obj) {
//     if (obj[key] > count) {
//       output = key;
//       count = obj[key];
//     }
//   }
//   return output;

  let obj = {};
  for (value of arr) {
    obj[value] = obj[value] + 1 || 1;
  }
  const keys = Object.keys(obj);
  var output = keys[0];
  keys.reduce(function(a, b) {
    if( obj[b] > obj[a] ) {
      output = b;
      return b;
    }
    return a;
  }, keys[0]);
  return output;

}



// Don't change below:

module.exports = { mode: mode };

























