const da = Array(55).join('-');
function cd() {console.log(da)}
function c(i, d){if(d)console.log(da+'\n'+i+'\n'+da); else console.log(i);}
function cc(desc, arg, d){
  if(d) cd()
  console.log(desc);console.log('typeof: ', typeof arg);console.dir(arg);
  if(d) cd()
}




function isPalindrome(s) {
  const sNoSpaces = s.replace(/ /g, '');
  sNoSpacesReversed = sNoSpaces.split('').reverse().join('');
  return sNoSpacesReversed == sNoSpaces;
}

module.exports = isPalindrome;

var phrase = "this is not a palindrome"
c(isPalindrome(phrase));
var phrase = "a man a plan a canal panama";
c(isPalindrome(phrase));
var word = "not";
c(isPalindrome(word));
