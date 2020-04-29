//  Bring in some external files
// const Logger = require('./logger');
//
// const logger = new Logger();
//
// logger.on('message', data=>console.log('Called listener:',data));
//
// logger.log("hola ");
// logger.log("ja ja ja");
// logger.log("This is another message ");

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res)=>{
  // console.log(req.url);
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
  //     if(err) throw err;
  //     res.writeHead(200,{'Content-Type':'text/html'})
  //     res.end('<h2>home page</h2><p>A B c C</p>');
  //
  //   })
  // }
  // Build file path
  // is request is root '/' then index , else req.url
  let filePath = path.join(__dirname,'public',req.url === '/'? 'index.html': req.url);

  //  file extension
  let extname = path.extname(filePath);
  //  Inital content type
  let contentType = 'text/html';
  //  Check extension and set content tipe
  switch (extname) {
    case '.js': contentType='text/javascript';
      break;
    case '.css': contentType='text/css';
      break;
    case '.json': contentType='application/json';
      break;
    case '.js': contentType='text/javascript'
      break;
    case '.png': contentType='image/png';
      break;
    case '.jpg': contentType='text/jpg';
      break;
    default:
  }
  //  REad files
  fs.readFile(filePath,(err, content)=>{
    if(err) {
      if(err.code == 'ENOENT') {
        //  Page not found
        fs.readFile(path.join(__dirname,'public','404.html'),
        (err, content)=>{
          res.writeHead(200,{'Content-Type':'text/html'});
          res.end(content,'utf8');
        })
      } else {
          // Some server error
          res.writeHead(500);
          res.end(`Server error: ${error.code}`);
      }
    } else {
      // Success!  
      res.writeHead(200,{'Content-Type': contentType});
      res.end(content,'utf8');

    }
  });
  // res.end(console.log(filePath));
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`));
