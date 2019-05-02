var countdownGenerator = function (x) {
  let j = x;
  return function() {
    if( j >= 1 ) console.log( `T-minus ${j}...` );
    else if( j === 0 ) console.log(`Blast Off!`);
    else console.log('Rockets already gone, bub!');
    j--;
  }
};

var countdown = countdownGenerator(4);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
