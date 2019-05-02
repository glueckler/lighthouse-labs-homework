function c(i){console.log(i)};

function justArgs(f) {
  return function() {
    var args = [];
    for( key in arguments ) {
      args.push(arguments[key]);
    }
    c(`( ${args.join(', ')} )`);
  }
}

function add(a, b) {return a+b;}

var addJustArgs = justArgs(add);

addJustArgs(3,5);

addJustArgs(4,6,7,3,2)
