var unirest = require('unirest');
console.log('Got below data');
let request = unirest.get('https://jsonplaceholder.typicode.com/users');
let response = request.end(function(response) {
  console.log(JSON.stringify(response, null, 2));  
});

