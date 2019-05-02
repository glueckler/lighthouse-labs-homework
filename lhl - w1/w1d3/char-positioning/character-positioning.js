function findLetterPosition(str) {
  var letterPos = {};
  for(var i = 0; i < str.length; i++){
      if (str[i] === ' ') continue;
      if (!letterPos[str[i]]) letterPos[str[i]] = [];
      letterPos[str[i]].push(i);
    }
  for ( var key in letterPos ) {
    letterPos[key] = letterPos[key].join(', ');
  }
  return letterPos;
}

console.log(findLetterPosition("lighthouse in the house"));
