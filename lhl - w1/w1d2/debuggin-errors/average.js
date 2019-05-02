function average(list) {
  var sum = 0;

  for (var num of list) {
    sum += num;  //replaced ++ with +=
  }

  return sum / list.length;

} //whooaa don't forget to close up your function

console.log(average([3, 5, 7]));
