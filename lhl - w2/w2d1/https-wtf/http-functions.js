const https = require('https');

function htmlPrinter(urlInfo, callBack) {
  //the default functionality will gitAndPrintHTML as the callback
  const cb = callBack || gitAndPrintHTML;
  https.get( urlInfo, cb )

}

//write stream function
function gitAndPrintHTML(responce){
  // set encoding of received data to UTF-8
  responce.setEncoding('utf8');

  let streamData;
  responce.on('data', data => streamData = streamData + data || data );

  responce.on('end', data => console.log(streamData + '\n') );


}


module.exports = {
 htmlPrinter: htmlPrinter
}