// website directory designs
//http-server https://www.npmjs.com/package/http-server 
console.log("home.ts script loaded");
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
var skills_cont = document.getElementById("skills-container");
var about_cont = document.getElementById("about-container");
var project1 = document.getElementById("project-1");
var project2 = document.getElementById("project-2");
var link_cont = document.getElementById("link-contaienr");
var navbar_cont = document.getElementById("navbar-container");
// elementID and corresponding view count
var sectionViews = {
    "about-container": 0,
    "skills-container": 0,
    "project-1": 0,
    "project-2": 0,
};
// Increments view count for corresponding section, setting is-visible if viewed for the first time
function callbackSetIsVisible(entries, observer) {
    entries.forEach(function (entry) {
        var id = entry.target.id;
        if (entry.isIntersecting && id in sectionViews) {
            if (sectionViews[id] === 0) {
                entry.target.classList.add("is-visible");
            }
            sectionViews[id]++;
        }
    });
}
var options = { threshold: 0.25 };
var observer = new IntersectionObserver(callbackSetIsVisible, options);
observer.observe(about_cont);
observer.observe(skills_cont);
observer.observe(project1);
observer.observe(project2);
