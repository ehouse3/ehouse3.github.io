// website directory designs
//http-server https://www.npmjs.com/package/http-server 
console.log("home.ts script loaded");
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
var skills_cont = document.getElementById("skills-container");
var skills_cont_views = 0;
var about_cont = document.getElementById("about-container");
var about_cont_views = 0;
var project1 = document.getElementById("project-1");
var project1_views = 0;
var project2 = document.getElementById("project-2");
var project2_views = 0;
var link_cont = document.getElementById("link-contaienr");
var navbar_cont = document.getElementById("navbar-container");
var callbackAbout = function (entries, observer) {
    if (about_cont_views == 1) {
        entries[0].target.classList.add("is-visible");
    }
    about_cont_views++;
};
var callbackSkills = function (entries, observer) {
    if (skills_cont_views == 1) {
        entries[0].target.classList.add("is-visible");
    }
    skills_cont_views++;
};
var callbackProject1 = function (entries, observer) {
    if (project1_views == 1) {
        entries[0].target.classList.add("is-visible");
    }
    project1_views++;
};
var callbackProject2 = function (entries, observer) {
    if (project2_views == 1) {
        entries[0].target.classList.add("is-visible");
    }
    project2_views++;
};
var options = {
    threshold: 0.25
};
// interface IntersectionObserverProps {
//     entries: IntersectionObserverEntry[],
//     observer: IntersectionObserver,
//     callback: () => void,
// }
var observer0 = new IntersectionObserver(callbackAbout, options);
var observer1 = new IntersectionObserver(callbackSkills, options);
var observer2 = new IntersectionObserver(callbackProject1, options);
var observer3 = new IntersectionObserver(callbackProject2, options);
observer0.observe(about_cont);
observer1.observe(skills_cont);
observer2.observe(project1);
observer3.observe(project2);
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
