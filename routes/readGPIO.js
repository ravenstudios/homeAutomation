var express = require('express');
var router = express.Router();
var GPIO = require('../gpio')
var gpio = new GPIO();
var devices = require('../devices.json');

var pins = [];

for(var prop in devices){
  pins.push(devices[prop].pin);
}







router.get('/', function(req, res, next) {
  var pinStatus = JSON.stringify(gpio.readAll(pins));



  res.send({devices: devices, pins: pinStatus})
});



module.exports = router;
