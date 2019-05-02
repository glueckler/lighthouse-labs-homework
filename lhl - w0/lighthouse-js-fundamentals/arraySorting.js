function merge(array1, array2) {
  var array3 = array1.concat(array2);
  //find lowest number
  var lowestNumber = array3[0];
  for (var i = 0; i < array3.length; i++) {
    if( array3[i] < lowestNumber ) {
      lowestNumber = array3[i];
    }
  }

  i = lowestNumber;
  var final = [];


  function findAndSteal() {
    for (var j = 0; j < array3.length; j++) {
      if (array3[j] === i) {
        final.push(array3[j])
        array3.splice(j, 1);
        findAndSteal();
        return;
      }
    }
    i++;
    return;
  }

  while(array3.length > 0) {
    findAndSteal();
  }

  return final;

}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);