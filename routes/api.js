var express = require('express');
var router = express.Router();
var request = require('request');
var GPIO = require("../gpio");
var config = require('../config.json');



// var config = fs.readFileSync("config.json");


const USERNAME = config.username;
const PASSWORD = config.password;
/* GET home page. */
router.get('/', function(req, res, next) {



  var user = req.query['user'];
  var pass = req.query['pass'];
  var pin = req.query['pin'];
  var state = req.query['state'];


  var result = user + " " + pass + " " + pin + " " + state;
  if(user === USERNAME && pass === PASSWORD){


    var gpio = new GPIO(pin);
    if(state === "1"){
      gpio.on();
    }
    if(state === "0"){
      gpio.off();
    }

    res.sendStatus(200);

  }

  else{
    res.sendStatus(401);
  }




});

module.exports = router;
