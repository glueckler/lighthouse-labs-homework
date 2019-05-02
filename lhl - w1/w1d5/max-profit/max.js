function maxProfit( arr ) {

  let maxProfit = -1;
  let relevantMax = arr[ arr.length - 1 ];
  let maxIndex = arr.length -1;

  for( let i = maxIndex; i >= 0; i-- ) {

    if( arr[i] >= relevantMax ) {

      relevantMax = arr[i];
      maxIndex = i;

    } else if ( i === maxIndex - 1 ) {

      arr = arr.slice( 0, maxIndex + 1 );
      arr.reduce( (a, b) => {

        let compareMax = relevantMax - a;
        maxProfit = compareMax > maxProfit ? compareMax : maxProfit;
        return b;

      });

    }

  }

  return maxProfit;
}

module.exports = maxProfit;
