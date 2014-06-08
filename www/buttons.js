function moveTo(page) {
activeButton = 5;
setTimeout(function(){redirect(page)},1000);
}
function redirect(page) {
var url=new Array();
url[0]="http://stumay.net/blog/?page_id=5";
url[1]="skills/index.html";
url[2]="http://stumay.net/blog/";
url[3]="projects/index.html";
activeButton = 0;
window.location=url[page];
}

function swapImage(page) {
var url = new Array();
url[0]="jpg/about.PNG";
url[1]="jpg/skills.PNG";
url[2]="jpg/blog.PNG";
url[3]="jpg/projects.PNG";
url[4]="jpg/home.PNG"; // this is for mouseout actions
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
