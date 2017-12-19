var button1Status = false;
$(()=>{
  console.log("jquery");

  $(".controlButton").click((event)=>{
    var $elem = $("#" + event.target.id);
    toggleLight($elem);
    return false;
  });

  $("#test").click(()=>{
    statusUpdate();
  });


})


function toggleLight($elem){

  var pin = $elem.attr("data-pin"); //gets pin to control
  var status = $elem.attr("data-status"); //gets status of pin
  if(status === "1"){// pin on
    $elem.attr("data-status", "0"); //set status to off
    $elem.css("background-color", "white")
    $.post("/off/" + pin); //send post request to turn pin off
  }
  else{
    $elem.attr("data-status", "1");
    $elem.css("background-color", "red");
    $.post("/on/" + pin);
  }
  setTimeout(()=>{
    return;
  }, 1000);
}

function statusUpdate(){

  var pinStatus;
  var devices;
  $.get("/readGPIO", function(data){
      pinStatus = data.pis;
      devices = JSON.parse(data.devices);
      console.log(devices);
  });
}
