'use strict';
var request = require('request');
var express = require('express');

var app = express();


// Setup Motion Hook
var options = {
  url: 'localhost:8080/pi/MuleSoftHackathonTeam1/motionHook',
  method: 'POST',
  json: {
    address: 'localhost:8000/'
  }
};

request(options,
  function (error, response, body) {
    if (!error) {
      console.log('Motion Hook setup.');
    } else {
      console.log('Something wrong, hook not setup');
    }
  }
);

// When notified
app.get('/', function (req, res) {
  // change sphero color
  request('localhost:8080/sphero/MuleSoftHackathonTeam1/color?r=255&g=0&b=0', function (error, response, body) {
    if (!error) {
      console.log('Color changed!');
    } else {
      console.log('Something wrong, hook not setup');
    }
  });
});

app.listen(8000);
