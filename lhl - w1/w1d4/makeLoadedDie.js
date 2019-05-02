function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var currentRollIndex = 0;

  return function() {
    var roll = list[currentRollIndex];
    if (currentRollIndex === list.length) currentRollIndex = 0;
    else currentRollIndex++;
    return roll;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6