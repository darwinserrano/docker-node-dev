
'use strict';

var express = require('express');
var redis = require("redis"),
  client = redis.createClient({
    host: '172.17.0.1',
    port: 6379
  });

client.set('claveDePrueba', 'Esta es la prueba de conexión a redis funciona', redis.print);

// Constants
var PORT = 5000;
var HOST = '0.0.0.0';

// App
var app = express();
app.get('/', function (req, res) {
  client.get('claveDePrueba', (err, response) => {
    res.send(response);
  });
});

app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);