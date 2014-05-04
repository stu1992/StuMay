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
button.style.top = mouseY;
}



//setInterval("javascript function",milliseconds);
