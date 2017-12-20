var express = require('express');
var router = express.Router();
var devices = require('../devices.json');
var doorSensors = require('../doorSensors.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {devices : devices, doorSensors: doorSensors});
});

module.exports = router;
