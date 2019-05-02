for(var i = 100; i <= 200; i++) {
  var output = i;
  if ((i % 3) === 0) {
    output = 'Loopy';
  } else if ((i % 4) === 0) {
    output = 'Lighthouse';
  }
  if ((i % 3) == 0 && (i % 4) == 0) {
    output = 'LoopyLighthouse';
  }

  console.log(output);

}