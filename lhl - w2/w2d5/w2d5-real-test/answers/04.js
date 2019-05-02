/* Question 04

Implement a function "intersection", which, when given two arrays of values, returns an array of the values that exist in both of the input arrays.

Note:
  - the returned array does NOT need to be sorted
  - the input arrays will NOT have any duplicate values

For example:

  intersection([1, 4, 3, 2], [3, 4, 5]);

Returns:

  [3, 4]

*/

function intersection(listA, listB) {

  const output = [];

  listA.reduce( (a, b) => {

    const match = listB.find( z => z === b );
    const alreadyIncluded = output.find( x => x === b );

    if( match && !alreadyIncluded ) {
      output.push(match);
    }

    return b;
  }, listA[0]);

  return output;

}

// Don't change below:

module.exports = intersection;
