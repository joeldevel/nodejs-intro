const { URL } = require('url');

const myUrl = new URL('bonjour.html?id=23&status=active','http://monwebsite.com/');

//  Serialized url
console.log("url: " + myUrl.href);
console.log(myUrl.toString());

// Get the host
console.log(myUrl.host);

//  hostname does not get port
console.log(myUrl.hostname);

//  pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

// param object
console.log(myUrl.searchParams);

//  Add params
myUrl.searchParams.append('abc','333');
console.log(myUrl.searchParams);

//  Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}:${value}`));
