var rpio = require("rpio");



function GPIO(arr){
  console.log(arr);
    // this.pin = pin;
    // rpio.open(this.pin, rpio.OUTPUT, rpio.LOW);
    this.arr = arr;
}


GPIO.prototype.readAll = function () {

  var result = [];
  this.arr.forEach((i)=>{
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
