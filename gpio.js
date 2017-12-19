var rpio = require("rpio");



function GPIO(){

  
}


GPIO.prototype.on = function (pin) {
  rpio.open(pin, rpio.OUTPUT, rpio.LOW);
  rpio.write(pin, rpio.LOW);
};

GPIO.prototype.off = function (pin) {
  rpio.open(pin, rpio.OUTPUT, rpio.LOW);
    rpio.write(pin, rpio.HIGH);
};

GPIO.prototype.readAll = function (arr) {
  rpio.open(12, rpio.OUTPUT, rpio.LOW);

  var result = [];
  arr.forEach((i)=>{
    rpio.open(i, rpio.OUTPUT);
    result.push(rpio.read(i));
  });


  return result;
};

module.exports = GPIO;




// var GPIO = (pin)=>{
//
//   rpio.open(pin, rpio.INPUT);
//
//   this.on = ()=>{
//     rpio.write(pin, rpio.HIGH);
//   }
//
//   this.off = ()=>{
//     rpio.write(pin, rpio.LOW);
//   }
//
// }
//
// module.exports = GPIO();

// module.exports = (pin)=>{
//   rpio.open(pin, rpio.INPUT);
//
//   this.on = ()=>{
//     rpio.write(pin, rpio.HIGH);
//   }
//
//   this.off = ()=>{
//     rpio.write(pin, rpio.LOW);
//   }
// }
