const http = require('http');

http.createServer( ( req, res )=>{
  //  Write response
  res.write("Server is working!");
  res.end();
}).listen( 5000,()=>console.log('Server running'));
