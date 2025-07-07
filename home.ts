// website directory designs
//http-server https://www.npmjs.com/package/http-server 
console.log("home.ts script loaded");

//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

let skills_cont: HTMLElement = document.getElementById("skills-container")!;
let skills_cont_views: number = 0;
let about_cont: HTMLElement = document.getElementById("about-container")!
let about_cont_views: number = 0;
let project1: HTMLElement = document.getElementById("project-1")!;
let project1_views: number = 0;
let project2: HTMLElement = document.getElementById("project-2")!;
let project2_views: number = 0;

let link_cont: HTMLElement = document.getElementById("link-contaienr")!;

let navbar_cont: HTMLElement = document.getElementById("navbar-container")!;

const callbackAbout: IntersectionObserverCallback = (entries, observer) => {
    if (about_cont_views == 1) {
        entries[0].target.classList.add("is-visible");
    }
    about_cont_views++;
}
const callbackSkills: IntersectionObserverCallback = (entries, observer) => {
    if (skills_cont_views == 1) {
        entries[0].target.classList.add("is-visible");
    }
    skills_cont_views++;
}
const callbackProject1: IntersectionObserverCallback = (entries, observer) => {
    if (project1_views == 1) {
        entries[0].target.classList.add("is-visible");
    }
    project1_views++;
}
const callbackProject2: IntersectionObserverCallback = (entries, observer) => {
    if (project2_views == 1) {
        entries[0].target.classList.add("is-visible");
    }
    project2_views++;
}
const options = {
    threshold: 0.25
};

// interface IntersectionObserverProps {
//     entries: IntersectionObserverEntry[],
//     observer: IntersectionObserver,
//     callback: () => void,
// }

const observer0 = new IntersectionObserver(callbackAbout, options);
const observer1 = new IntersectionObserver(callbackSkills, options);
const observer2 = new IntersectionObserver(callbackProject1, options);
const observer3 = new IntersectionObserver(callbackProject2, options);


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

