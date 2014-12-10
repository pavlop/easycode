// Load the http module to create an http server.
var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser());
});

app.use(express.static(path.resolve(__dirname, 'client')));

app.post('/submit', function (req, res) {
  var sourcecode = req.body.sourcecode;
  console.log("sourcecode: " + sourcecode);
  var result = eval("(" + sourcecode + ")");
  console.log("result = " + result);
  result = result();
  res.json({ result: result })
  // res.send('{"result": "' + result+'"}');
})

var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  console.log('Started at http://%s:%s', server.address().address, server.address().port);
});