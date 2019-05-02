/* Question 01

Implement the four fundamental logic functions: AND, OR, XOR and NOR.

Each function will receive two values, A and B, which can be either 0 or 1.
The result will always be either 0 or 1, but depends on the function.

The tables below describe all the inputs that each function can receive and the expected output.

For example:

  and(0,0)

Returns

  0

*/

/*
   AND:

   A  B  Result

   0  0    0
   1  0    0
   0  1    0
   1  1    1
*/

function and(a, b) {
  if( a && b ) {
    return 1;
  }
  return 0;

}

/*
   OR:

   A  B  Result

   0  0    0
   1  0    1
   0  1    1
   1  1    1
*/

function or(a, b) {
  if( a || b ) {
    return 1;
  }
  return 0;
}

/*
   XOR:

   A  B  Result

   0  0    0
   1  0    1
   0  1    1
   1  1    0
*/

function xor(a, b) {
  if( a !== b ) {
    return 1;
  }
  return 0;
}

/*
   NOR:

   A  B  Result

   0  0    1
   1  0    0
   0  1    0
   1  1    0
*/

function nor(a, b) {
  if( !a && !b ) {
    return 1;
  }
  return 0;

}

// Don't change below:

module.exports = {
  and: and,
  or: or,
  xor: xor,
  nor: nor
};
