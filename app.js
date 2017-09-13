var https   = require("https");
var fs      = require("fs");

//
/// Setup the demo client web server

var express = require('express'),
  path = require('path'),
  app = express(),
  port = parseInt(process.env.PORT);

app.set('port', port);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/');
app.use(express.static(__dirname + '/assets'));
//app.use(express.static(__dirname + '/node_modules/symple-client/src'));
//app.use(express.static(__dirname + '/node_modules/symple-client-player/src'));


app.get('/', function (req, res) {
  res.render('index', {
    peer: {
      user: 'star-mentor',
      name: 'STAR Mentor',
      group: 'public'
    }
  });
});

app.listen(app.get('port'), function () {
  console.log('Web server listening on port ' + app.get('port'));
});
