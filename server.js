/**
 * NodeJS Express - Web Service.
 *
 * DO NOT EDIT.
 */
var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

var app = express();

// Configure Express
app.use(bodyParser.json());
app.use(serveStatic('data', {
  'index': 'index.json'
}));
app.use(serveStatic('www'));
app.use(serveStatic('node_modules'));
app.use(serveStatic('src/main'));

/**
 * Termination end-point.
 */
app.get('/close', function(req, res) {
  res.send('Closing...');
  process.exit();
});

var server = app.listen(3333, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Started web service on: http://%s:%s', host, port);

});
