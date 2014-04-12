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
// define image locations
document.getElementById('wrapper').style.backgroundImage = "url("+url[page]+")";
}
