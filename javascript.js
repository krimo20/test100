let menu = document.getElementById("menu");
let leftNav = document.getElementById("left-nav")
let count = 1;

menu.onclick = function () {
    if (count%2!=0) {
for (i=1;i<6;) {
    let p = document.getElementById(`p${i}`);
    p.style.display="none"
    i+=1;
}
 leftNav.style.flex="inherit"
 leftNav.setAttribute("class","left-nav sec-clr brdr-radius7 pa-20 slide-mo")
count+=1; }
 else {
    for (i=1;i<6;) {
        let p = document.getElementById(`p${i}`);
        p.style.display="block"
        i+=1;
    }
    leftNav.style.flex="1";
    leftNav.setAttribute("class","left-nav sec-clr brdr-radius7 pa-20")
    count = 1;
 }}