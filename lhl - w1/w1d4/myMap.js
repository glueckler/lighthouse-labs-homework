function map(arr, cb) {
  if (Array.isArray(arr)) var output = [];
  else { console.log('sorry I didn\'t go the extra mile');  return; }

  for( el of arr ) {
    output.push(cb(el));
  }
  console.log(output);
}


var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

map('I\'m no arrrrrr', function(word) {
});