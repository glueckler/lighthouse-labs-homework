function printUppercase(response) {
  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  let streamData;
  response.on('data', data => streamData = streamData + data || data );

  response.on('end', data => console.log(streamData.toUpperCase() + '\n') );

}

module.exports = {
  printUppercase: printUppercase
}