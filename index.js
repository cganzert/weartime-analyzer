var request = require('request');

request({
    url: 'http://mytaglist.com/ethAccount.asmx/SignIn', //URL to hit
    method: 'POST', //Specify the method
    headers: { //We can define headers too
        'Content-Type': 'application/json'
    },
    body: "{email:'carl@hodgsonorthotics.com',password:'Straightl1ne'}"
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
});

request({
    url: 'http://mytaglist.com/ethClient.asmx/GetTagList', //URL to hit
    method: 'POST', //Specify the method
    headers: { //We can define headers too
        'Content-Type': 'application/json'
    },
    body: "{}"
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
});