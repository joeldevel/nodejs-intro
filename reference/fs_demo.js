//  file system

const fs = require('fs');
const path = require('path');

//  Create a directory
//  called test
// fs.mkdir(path.join(__dirname,'/test'),{},(err)=>{
//   if(err) throw err;
//   // Otherwise
//   console.log("Directory created!");
// });

//  Create and write to file
// fs.writeFile(path.join(__dirname,'/test', 'Bonjour.txt'),
// "Bonjour from node",(err)=>{ // This is a callback
//   if(err) throw err;
//   // Otherwise
//   console.log("File written to!");
//
//   //  Now append some extra content
//   fs.appendFile(path.join(__dirname,'/test','Bonjour.txt'),' Some new text',
//   (err) => {
//     if(err) throw err;
//     console.log("Content added!");
//   }
//   )
// });
//  Read file
// fs.readFile(
//   path.join(__dirname,        //<--These are join parameters
//               '/test',        //<--
//               'Bonjour.txt'), //<--
//   'utf8',                             //<-- And these readFile parameters
//    (err, data) =>{                    //<-- This is a callback
//                   if(err ) throw err;
//                   console.log(data);  //<-- Here callback ends
// });

// Rename  file
fs.rename(
  path.join(__dirname,'/test','Bonjour.txt'),
  path.join(__dirname,'/test','Bonsoir.txt'),
   (err) =>{
                  if(err ) throw err;
                  console.log("File renamed");
});
