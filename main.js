var request = require("request");
var url = "https://geoip-db.com/json";

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body); 
    }
});