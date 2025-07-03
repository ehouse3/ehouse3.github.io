// website directory designs
//http-server https://www.npmjs.com/package/http-server 
console.log("home.ts script loaded");
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
var skills_cont = document.getElementById("skills-container");
var skills_cont_views = 0;
var about_cont = document.getElementById("about-container");
var about_cont_views = 0;
var projects_cont = document.getElementById("projects-container");
var projects_cont_views = 0;
var link_cont = document.getElementById("link-contaienr");
var navbar_cont = document.getElementById("navbar-container");
function fade_in_section(viewed_element) {
    viewed_element.classList.add("is-visible");
}
var callbackAbout = function (entries, observer) {
    console.log("about entries", entries, "about views", about_cont_views);
    if (about_cont_views == 1) {
        entries[0].target.classList.add("is-visible");
    }
    about_cont_views++;
    console.log("\n");
};
var callbackSkills = function (entries, observer) {
    console.log("skills entries", entries, "skills views", skills_cont_views);
    if (skills_cont_views == 1) {
        console.log("skills adding is visible");
        entries[0].target.classList.add("is-visible");
    }
    skills_cont_views++;
    console.log("\n");
};
var callbackProjects = function (entries, observer) {
    console.log("projects entries", entries, "projects views", projects_cont_views);
    if (projects_cont_views == 1) {
        entries[0].target.classList.add("is-visible");
    }
    projects_cont_views++;
    console.log("\n");
};
var options = {
    // root: document.querySelector("#skills-container"),
    threshold: 0.25
};
// interface IntersectionObserverProps {
//     entries: IntersectionObserverEntry[],
//     observer: IntersectionObserver,
//     callback: () => void,
// }
var observer0 = new IntersectionObserver(callbackAbout, options);
var observer1 = new IntersectionObserver(callbackSkills, options);
var observer2 = new IntersectionObserver(callbackProjects, options);
observer0.observe(about_cont);
observer1.observe(skills_cont);
observer2.observe(projects_cont);
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
