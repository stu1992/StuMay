function redirect(page) {
var url=new Array();
url[0]="about/index.html";
url[1]="skills/index.html";
url[2]="http://stumay1992.wordpress.com/";
url[3]="projects/index.html";
window.location=url[page];
}

function swapImage(page) {
var url = new Array();
url[0]="jpg/about.jpg";
url[1]="jpg/skills.jpg";
url[2]="jpg/blog.jpg";
url[3]="jpg/projects.jpg";
url[4]="jpg/home.jpg"; // this is for mouseout actions
// define image locations
document.getElementById('t').style.backgroundColor="white";
setTimeout(function(){document.getElementById('wrapper').style.backgroundImage = "url("+url[page]+")"},500); 
var newC = document.getElementById('t');
setTimeout(function(){newC.style.backgroundColor="transparent"},500);
}

var init;
function image(page) {
clearTimeout(init);
init = setTimeout(function(){swapImage(page)},1000);
}
