// timing is always on
setInterval(timing_function,20);
// global vars
var activeButton =0;
var mouseY = 0;

function hover_update(event, hotspot)
{
   if(activeButton==5){
      return;
   }
mouseY=event.clientY;
activeButton = hotspot;
var pos = document.getElementById(hotspot).getBoundingClientRect();
var button = document.getElementById(hotspot);
}

function timing_function(){
   var b1 = document.getElementById("b1");
   var b2 = document.getElementById("b2");
   var b3 = document.getElementById("b3");
   var b4 = document.getElementById("b4");
   var buttons = [b1,b2,b3,b4];
   for ( var i = 0; i < 4 ; i ++){
      if(activeButton == i+1){
      buttons[i].style.top = delta(buttons[i], "mouse");
      }else if(activeButton == 5){
      buttons[i].style.top = delta(buttons[i], "floor");
      }else{
       buttons[i].style.top = delta(buttons[i], "center");
   
      }
   }
}

function delta(button, relatedObject){
   var roof = 0;
   var center = 300;
   var floor = 600;
   if(relatedObject == "mouse"){
      var initPosition = (button.getBoundingClientRect().top);
      if(initPosition > 600){
         initPosition = 600;
      }else if(initPosition <50){
         initPosition = 50;
      }
      var delta = mouseY - (initPosition);
            if(delta >= +20+50){
        return (initPosition+20-(11));
      }else if(delta <= -20+50){
         return (initPosition-20-(11));
      }else{
        return mouseY-50; 
      }
   }
   else if(relatedObject == "center"){ // we're moving by 10 each way
      var initPosition = (button.getBoundingClientRect().top);
      var delta = center - initPosition;
                  if(delta >= (-11)+10){
        return (initPosition+10-(11)); // initPosition - 11 is stationary
      }else if(delta <= (-11)-10){
         return (initPosition-10-(11));
      }else{
        return center; 
      }

   }
   else if(relatedObject == "floor"){
      var initPosition = (button.getBoundingClientRect().top);
      if(initPosition < floor){
         return initPosition+5;
      }
   }
}
