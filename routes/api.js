var express = require('express');
var router = express.Router();
var request = require('request');
var GPIO = require("../gpio");
var config = require('../config.json');

const USERNAME = config.username;
const PASSWORD = config.password;



router.get('/', function(req, res, next) {

  var user = req.query['user'];
  var pass = req.query['pass'];
  var pin = req.query['pin'];

  if(user === USERNAME && pass === PASSWORD){

    var gpio = new GPIO();

    if(gpio.readPin(pin) === 1){//light off, reverse logic
      gpio.on(pin);
    }
    else{
      gpio.off(pin);
    }
    res.sendStatus(200);
  }

  else{
    res.sendStatus(401);
  }
});

module.exports = router;
