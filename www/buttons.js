function moveTo(page) {
activeButton = 6;
setTimeout(function(){redirect(page)},1000);
}
function redirect(page) {
var url=new Array();
url[0]="/business";
url[1]="http://onetooneenglishtutoring.com.au";
url[2]="https://github.com/stu1992";
url[3]="http://zerosigmakay.com";
url[4]="/words";
setTimeout(function(){activeButton = 0;},1000); // adding a delay for page to redirect before buttons return to center
window.location=url[page];
}
function swapImage(page) {
var url = new Array();
url[0]="jpg/business.PNG";
url[1]="jpg/English_tutoring.PNG";
url[2]="jpg/code.PNG";
url[3]="jpg/sigma.PNG";
url[4]="jpg/words.PNG";
// define image locations
document.getElementById('t').style.backgroundColor="white";
setTimeout(function(){document.getElementById('wrapper').style.backgroundImage = "url("+url[page]+")"},700); 
var newC = document.getElementById('t');
setTimeout(function(){newC.style.backgroundColor="transparent"},700);
}

var init;
function image(page) {
clearTimeout(init);
init = setTimeout(function(){swapImage(page)},1400);
}
