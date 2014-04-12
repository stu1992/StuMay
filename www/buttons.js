function redirect(page) {
alert(page);
var url=new Array();
url[0]="about/index.html";
url[1]="skills/index.html";
url[2]="http://stumay1992.wordpress.com/";
url[3]="projects/index.html";
window.location=url[page];
}
