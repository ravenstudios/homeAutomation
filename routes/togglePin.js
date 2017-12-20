var express = require('express');
var router = express.Router();
var GPIO = require("../gpio");



router.get('/:pin', function(req, res, next) {
  var gpio = new GPIO();
  var pin = req.params.pin;
  if(gpio.readPin(pin) === 1){//light off, reverse logic
    gpio.on(pin);
  }
  else{
    gpio.off(pin);
  }
  res.sendStatus(200);

});

module.exports = router;
