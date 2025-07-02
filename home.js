/* Color themes
HEX CODES:
#11302a
#036264
#8f5774
#e0829d
#dac4d0

#1c2e14
#374971
#72668a
#707978
#ccb0be
*/
/*
#b26684
#fc9dc3
#ea85ae
#474259
#424959
#4CB1EF
#0dc070
#6eefcf
#37a372

#ce5db6
#51516b
#56516b
#37a372

#9a62c7 this one is the same hue as the side bar
#ce5db6
*/
// website directory designs
//https://kotilabdulkadir.notion.site/The-Ultimate-450-Websites-Directory-for-Freelancers-Solopreneurs-b48bf26f94d1442aa2ead96ee139161a
//http-server https://www.npmjs.com/package/http-server 
console.log("home.ts script loaded 2");
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
var skills_container = document.getElementById("skills-container");
var about_container = document.getElementById("about-container");
var project_container = document.getElementById("project-container");
var link_container = document.getElementById("link-contaienr");
var navbar_contaienr = document.getElementById("navbar-container");
function fade_in_section() {
    skills_container.classList.add("is-visible");
}
var callback = function (entries, observer) {
    console.log("CALLBACK\n");
};
var options = {
    root: document.querySelector("#skills-container"),
    threshold: 0.1
};
var observer = new IntersectionObserver(callback, options);
/*
function loadScript(){ //load script function for loading each project when they are accessed
    console.log("loaded = " ,loaded);
    if (loaded == 0) {
        var file = document.createElement("script");
        file.setAttribute("type", "text/javascript");
        file.setAttribute("src", "test.js");
        document.getElementsByTagName("head")[0].appendChild(file);
    }

}*/
