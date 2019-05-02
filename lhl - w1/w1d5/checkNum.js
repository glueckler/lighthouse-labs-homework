const da = Array(55).join('-');
function cd() {console.log(da)}
function c(i, d){if(d)console.log(da+'\n'+i+'\n'+da); else console.log(i);}
function cc(desc, arg, d){
  if(d) cd()
  console.log(desc);console.log('typeof: ', typeof arg);console.dir(arg);
  if(d) cd()
}


function check(number) {
  var numString;
  if( typeof number !== "string" ){ numString = number.toString(); }
  else { numString = number }
  //CHECK DIGIT
  const X = parseInt(numString.substr(numString.length -1));
  //aN = ACOUNT NUMBER
  const aN = numString.substring(0, (numString.length - 1)).split('').map(Number);


  //cN = CHECK NUMBER
  let cN = [];
  for(let i = aN.length-1; i >= 0; i--) {
    cN[i] = aN[i];
    if ( (i % 2 === 0) !== !(aN.length & 1) ) cN[i] *= 2;
    if(cN[i] > 9) cN[i] -= 9;

  }
  c(aN)
  c(cN)

  const numberToCheck = cN.reduce(function(a, b) {
    return a + b;
  })
  *
  9
  %
  10

  c(numberToCheck)
  c(X)

  return numberToCheck === X;
}

console.log(check("498888"), '?? false');

console.log(check('2720991749434770'), '?? true');






