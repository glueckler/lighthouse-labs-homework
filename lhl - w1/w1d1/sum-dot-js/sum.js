var args = process.argv.slice(2);

args = args.map(function(a){
  return Number(a);
})

var sum = args.reduce(function(a,b){
  return a+b;
})

console.log(sum);

