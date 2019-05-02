const htmlPrint = require('./http-functions'),
printLowerCase = require('./callbacks/print_lowercase');
printUppercase = require('./callbacks/print_uppercase');
printReverse = require('./callbacks/print_reverse');

//define the path object
const streamInfo = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
}

htmlPrint.htmlPrinter( streamInfo, printReverse.printReverse );


