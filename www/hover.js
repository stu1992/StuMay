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
//var x=event.clientX;
mouseY=event.clientY;
//alert("Y: " + mouseY + "button: " + hotspot);
activeButton = hotspot;
// now we will get the y position value of button and make it the same as the cursor just for prototyping
var pos = document.getElementById(hotspot).getBoundingClientRect();
//alert(pos.top);
var button = document.getElementById(hotspot);
}


function timing_function(){
   var b1 = document.getElementById("1");
   var b2 = document.getElementById("2");
   var b3 = document.getElementById("3");
   var b4 = document.getElementById("4");
   var buttons = [b1,b2,b3,b4];
   for ( var i = 0; i < 4 ; i ++){
      if(activeButton == i+1){
      buttons[i].style.top = delta(buttons[i], "mouse");// mouseY - (pos.bottom - pos.top)/2 - 10; // 10 deals with padding or something ;)
      }else if(activeButton == 5){
      buttons[i].style.top = delta(buttons[i], "floor");// mouseY - (pos.bottom - pos.top)/2 - 10; // 10 deals with padding or something ;)
      }else{
       buttons[i].style.top = delta(buttons[i], "center");// mouseY - (pos.bottom - pos.top)/2 - 10; // 10 deals with padding or something ;)
   
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
         //initPosition = 600);
      }
      var delta = mouseY - (initPosition);
      //alert(delta);
            if(delta >= 40){
        return (initPosition+5);
      }else if(delta <= -50){
         return (initPosition-20);
      }else{
        return mouseY-40; 
      }
   }
   else if(relatedObject == "center"){
      var initPosition = (button.getBoundingClientRect().top);
      var delta = center - initPosition;
                  if(delta >= 40){
        return (initPosition+5);
      }else if(delta <= -50){
         return (initPosition-20);
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
