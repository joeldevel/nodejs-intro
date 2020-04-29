//  A

// path is a node core module
const path = require('path');

// Get the base file
// __filename means this file and contains the absolute path
//  ant the filename. See docs
console.log(path.basename(__filename));

//  Get the directory name
console.log(path.dirname(__filename));

// Get file extension
console.log(path.extname(__filename));

// Create a path object
console.log(path.parse(__filename));

//  Concatenate paths
console.log(path.join(__dirname,'test','hello.html'));
