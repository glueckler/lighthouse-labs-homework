/* Question 00

Implement a function "sumTo", which, when given an integer N, returns the sum of integers from 0 to N.

For example:

  sumTo(5);

Returns:

  15

(= 1 + 2 + 3 + 4 + 5)

*/

function sumTo(n) {
  const arr = [];
  for(let i = 0; i < n; i++){
    arr.push( i + 1 );
  }
  return arr.reduce( ( a, b ) => a + b );

}

// Don't change below:

module.exports = sumTo;
