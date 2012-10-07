/*
 * Application runner.
 */

// Module dependencies.
var express = require('express');
var configFile = require('yaml-config');

// Read configuration.
global.config = configFile.readConfig('config/config.yaml');

// Create server.
var app = module.exports.app = express(express.favicon());
var server = app.listen(global.config.port);

console.log("Listening on port %d in %s mode",
  global.config.port, app.settings.env);

app.get('/', function(req, res) {
  res.send('Works.');
});
