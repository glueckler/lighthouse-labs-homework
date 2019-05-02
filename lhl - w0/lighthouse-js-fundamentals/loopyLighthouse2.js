function loopyLighthouse(minMax, multiples, words) {
  //build array from min to max
  var outArray = [];
  for (var i = minMax[0]; i <= minMax[1]; i++) {
    var iPush = i;
    var isFirstMultiple = ((iPush % multiples[0]) === 0);
    var isSecondMultiple = ((iPush % multiples[1]) === 0);
    if ( isFirstMultiple && isSecondMultiple ) {
      iPush = words[0] + words[1];
    } else if ( isFirstMultiple ) {
      iPush = words[0];
    } else if ( isSecondMultiple ) {
      iPush = words[1];
    }
    outArray.push(iPush);
  }
  //console.log the array
  for (i = 0; i < outArray.length; i++) {
    console.log(outArray[i]);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);