const express = require('express');
const path = require("path");
const request = require('request');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/quote', function(req, res){
    request('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', function (error, response, body){
        res.send(body);
    });
})

var server = app.listen(process.env.PORT || 3000, "0.0.0.0",function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Web server started at http://%s:%s', host, port);
  });