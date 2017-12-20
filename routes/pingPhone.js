var express = require('express');
var router = express.Router();
var request = require('request');
var ping = require('ping');
var host = "192.168.29.215";


router.get('/', function(req, res, next) {

  ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
        res.send(msg);
    });

});

module.exports = router;
