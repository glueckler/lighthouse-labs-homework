// function mult(x, i) { return x * i }

// function loop(a, b, cb) {
//   result = a;
//   for(var i = a + 1 ; i <= b; i++) {
//     result = cb(result, i);
//   }
//   return result;
// }

// console.log(loop(2, 5, mult));

const stringifyObject = require('stringify-object');
// const gulp = require('gulp');

const obj = {
    foo: 'bar',
    'arr': [1, 2, 3],
    nested: { hello: "world" }
};

const pretty = stringifyObject(obj, {
    indent: '  ',
    singleQuotes: false
});

console.log(pretty);
// var arr = Array(88);
// var num = 77;

// var even = !(num & 1); //returns true if even
// console.log(arr.length)
// console.log(even);

