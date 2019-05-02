const request = require('request');
const fs = require('fs');

const URL = 'https://sytantris.github.io/http-examples/future.jpg';

request( URL )
.on('error', err => { throw err; })
.on('response', response => {
  console.log('dl complete');
  console.log('Status: ' + response.statusMessage );
  console.log( 'Content Type: ' + response.headers['content-type'] );
} )
.pipe(fs.createWriteStream('./future.jpg') );

