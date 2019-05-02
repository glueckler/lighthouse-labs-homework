const fs = require('fs');
// === fTR fileToRead ===
let fTR = process.argv[2];

fs.readFile('/Users/slimbean/lighthouse/w1d6/example-text.txt', (err, data) => {
  if (err) console.log(err);
  data = data.toString();
  console.log(data);
})