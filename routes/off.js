var express = require('express');
var router = express.Router();
var GPIO = require("../gpio");

var rpio = require("rpio");
/* GET home page. */

router.post('/:pin', function(req, res, next) {
  var pin = req.params.pin;
  console.log("Turning off pin " + pin);
  var gpio = new GPIO();
  gpio.off(pin);
  // res.render('index');
  res.sendStatus(200);
});

router.get('/:pin', function(req, res, next) {
  var pin = req.params.pin;
  console.log("Turning off pin " + pin);
  var gpio = new GPIO(pin);
  gpio.off(pin);
  // res.render('index');
  res.sendStatus(200);
});

module.exports = router;
