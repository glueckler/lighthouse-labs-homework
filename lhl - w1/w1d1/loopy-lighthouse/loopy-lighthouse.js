for( i = 100; i <= 200; i++ ) {
  var output = '';

  if (i % 3 === 0) output += 'loopy';

  if (i % 4 === 0) output += 'lighthouse';

  console.log(output ? output : i);

}