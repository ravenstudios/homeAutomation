var express = require('express');
var router = express.Router();
var devices = require('../devices.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {devices : devices});
});

module.exports = router;
