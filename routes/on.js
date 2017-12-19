var express = require('express');
var router = express.Router();
var GPIO = require("../gpio");


/* GET home page. */

router.post('/:pin', function(req, res, next) {
  var pin = req.params.pin;
  console.log("Turning on pin " + pin);
  var gpio = new GPIO();

  gpio.on(pin);
  // res.render('index');
  res.sendStatus(200);


});

router.get('/:pin', function(req, res, next) {
  var pin = req.params.pin;
  console.log("Turning on pin " + pin);
  var gpio = new GPIO();

  gpio.on(pin);
  // res.render('index');
  res.sendStatus(200);


});

module.exports = router;
