var input = process.argv[2];

function swap(arg) {
  var letterSwaps = { 'a' : '4', 'e' : '3', 'o' : '0', 'l' : '1' };
  if(letterSwaps[arg]) return letterSwaps[arg];
  return arg;
}

function obfuscate(string) {

  var split = string.split('');
  var scrambled = split.reduce(function(a,b){
    a += swap(b);
    return a;
  },'');
  return scrambled;

}


console.log(obfuscate(input));


