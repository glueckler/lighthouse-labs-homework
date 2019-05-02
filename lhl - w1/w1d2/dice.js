var input = process.argv[2];
if (!isNaN(input))
  console.log(roll(input));
else
  console.log('give me a proper input (a number please)');

function roll(arg) {
  var str = '';
  for( var i = 1; i <= arg; i++ ) {

    str += (Math.floor(Math.random() * 6 + 1)).toString();

    if(!(i == arg)) str += ", "; //yea probably should just use !=
  }

  return "You rolled the dice " + arg + " times: " + str;

}