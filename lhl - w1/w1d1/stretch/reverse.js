var input = process.argv.slice(2);

function reverseIt(arr) {

  var reversedArr = [];

  for ( var i = 0; i < arr.length; i++ ) {

    var splitArr = arr[i].split("");
    var reversedWord = '';
    for (var j = arr[i].length - 1; j >= 0; j--) {
      reversedWord += splitArr[j];
    }

    reversedArr.push(reversedWord);

  }

  return reversedArr;

}

(function(arr){
  for( var i = 0; i < arr.length; i++) {

    console.log(arr[i]);

  }

}(reverseIt(input)));