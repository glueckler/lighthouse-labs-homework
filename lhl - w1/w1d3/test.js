function countLetters(s) {
  return s.split('').reduce(function(acc, i) {
    // if(i < 'a' && i > 'Z')  { return acc; }
    console.log('Acc:', acc, `, i: ${i}, acc[${i}]: ${acc[i]}`);
    acc[i] = (acc[i] || 0) + 1
    // acc['h'] = (undefined || 9) + 1
    // acc['h'] = 0 + 1
    // acc['h'] = 1

    return acc;
  }, {});
}

//---------------- map -----------------


testArr = [2, 3, 5, 3];

// function dMap(process, arr) {
//   var newArr = arr.reduce(function(a, b){
//     //console.log(a, b);
//     a.push(process(b));
//     return a;

//   }, [])

//   return newArr;
// }

// function dMap(arr, mapFunction) {
//   var output = [];
//   output = arr.reduce(function(a, b){
//     a.push(mapFunction(b));
//     return a;
//   }, []);
//   return output;
// }


//elements
function forEach(arr, cb) {
  for( var i = 0; i < arr.length; i++ ) {
    cb(arr[i]);
  }
}
testArr2 = ['mob', 'she', 'until'];
forEach(testArr2, function(a){ console.log(a); });

function add2(a) { return a + 2 };
console.log(dMap(testArr, add2));

//benifits of for loop
//skipping over a few elements at a time
//can break out of for loops


function sumReducer(acc, i){
    //console.log(a, b);
    return acc + i;
}


// console.log(dMap(function(a){ return a + 2; }, testArr));

// function reduce(reducer, initial, arr) {
//   var output = initial;
//   for( value of arr ) {
//     output = reducer(output, value);
//   }
//   return output;
// }

function reduce(reducer, initial, arr) {
  var output = initial;
  for(element of arr) output = reducer(output, element);
  return output;
}

console.log(reduce(sumReducer, 0, testArr));



















