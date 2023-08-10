const http = require('http')

const server = http.createServer(
    (request, response) => {
       response.writeHead(200, {'Content-Type': 'text/text'})
       response.end(straitLine)
      })
  server.listen(8000)

  var straitLine = function sysTest(){
    console.log(alert)
    const alert = "SOS";
    var sos = "LOL";
  }