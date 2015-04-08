'use strict';

import path from 'path';
import fs from 'fs';
import express from 'express';
import proxy from 'express-http-proxy';

var server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname)));
server.use('/api', proxy('private-ecc71-hackday1.apiary-mock.com', {
  forwardPath: function(req) {
    return require('url').parse(req.url).path;
  }
}));

server.listen(server.get('port'), function() {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});

var templateFile = path.join(__dirname, 'templates/index.html');
var template = fs.readFileSync(templateFile, 'utf8');

server.get('/', function(req, res) {
  res.send(template);
});
