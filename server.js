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

app.listen(3000, function () {
  console.log('Quote generator listening on port 3000!')
});