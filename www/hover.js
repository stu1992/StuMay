// timing is always on
setInterval(timing_function,50);
// global vars
var activeButton =0;
var mouseY = 0;

function hover_update(event, hotspot)
{
//var x=event.clientX;
mouseY=event.clientY;
//alert("Y: " + mouseY + "button: " + hotspot);
activeButton = hotspot;
// now we will get the y position value of button and make it the same as the cursor just for prototyping
var pos = document.getElementById(hotspot).getBoundingClientRect();
//alert(pos.top);
var button = document.getElementById(hotspot);
var center = 100;
button.style.top = mouseY - (pos.bottom - pos.top)/2 - 10; // 10 deals with padding or something ;)
}


function timing_function(){
   var b1 = document.getElementById("1");
   var b2 = document.getElementById("2");
   var b3 = document.getElementById("3");
   var b4 = document.getElementById("4");
   var buttons = [b1,b2,b3,b4];
   for ( var i = 0; i < 4 ; i ++){
      buttons[i].style.top = 30;
   }
}

function delta(){

}
