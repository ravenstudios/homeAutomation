var doorSensorsList = [];
var deviceList = [];
dsIndex = 0;//used to loop through doorSensorsList
$(()=>{

  getDoorSensors();
  getDevices();
  // $("#test").click(()=>{
  //   doorStatus();
  // });

  $(".controlButton").click((event)=>{


    var $elem = $("#" + event.target.id);
    toggleLight($elem);
    return false;
  });


  statusUpdate();//first load update
  getDoorStatus();//first load update

  setInterval(()=>{
    statusUpdate();
    getDoorStatus();
  },5000);

})


function toggleLight($elem){

  var pin = $elem.attr("data-pin"); //gets pin to control

  $.get("/togglePin/" + pin); //send get request to turn pin off

  statusUpdate();

  setTimeout(()=>{
    return;
  }, 1000);
}

function getDevices(){


  $.get("/readGPIO", function(data, status){

    if(status !== "success"){
      alert("Cannot connect to GPIO server. Please restart browser.");
      return;
    }

    devices = data.devices;

    for(var prop in devices){
      deviceList.push(prop);
    }
  });
}


function statusUpdate(){

  var pinStatus;

  $.get("/readGPIO", function(data, status){

    if(status === "success"){
      pinStatus = JSON.parse(data.pins);
      devices = data.devices;


      for (var i = 0; i < deviceList.length; i++) {
        setStatus(deviceList[i], pinStatus[i]);
      }
    }
    else{
      for (var i = 0; i < ids.length; i++) {
        setStatus(deviceList[i], pinStatus[i]);
      }
    }


  });


}
function getDoorSensors(){
  var doorSensors = ds;//taken from index.jade passed in from route

  for(var d in doorSensors){
    doorSensorsList.push({
      id: d,
      ip: doorSensors[d].ip
    });
  }
}

function getDoorStatus(){

  $.get(doorSensorsList[dsIndex].ip, function(data, status){

      if(status === "success"){
        setDoorStatus(doorSensorsList[dsIndex].id, data);
      }
      else{
        setDoorStatus(doorSensorsList[dsIndex].id, "null");//used to make the sensor boc orange to show an error
      }

      dsIndex ++;
      if(dsIndex < doorSensorsList.length){
        getDoorStatus();
      }
      else{
        dsIndex = 0;//reset index for next round of calls
      }
    });


}


function setDoorStatus(id, state){

  if(state === "1"){//door closed
    $("#" + id).css("background-color", "green");
  }
  else if(state === "0"){
    $("#" + id).css("background-color", "red");
  }
  else{
    $("#" + id).css("background-color", "orange");
  }
}

function setStatus(id, state){

  //off
  if(state === 1){//reverse logic
    $("#" + id).css("background-color", "green");
  }
  //on
  else if(state === 0){//reverse logic
    $("#" + id).css("background-color", "red");
  }
  else{
    $("#" + id).css("background-color", "orange");
  }

}
