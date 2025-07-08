// website directory designs
//http-server https://www.npmjs.com/package/http-server 
console.log("home.ts script loaded");

//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

let skills_cont: HTMLElement = document.getElementById("skills-container")!;
let about_cont: HTMLElement = document.getElementById("about-container")!
let project1: HTMLElement = document.getElementById("project-1")!;
let project2: HTMLElement = document.getElementById("project-2")!;

let link_cont: HTMLElement = document.getElementById("link-contaienr")!;

let navbar_cont: HTMLElement = document.getElementById("navbar-container")!;

// elementID and corresponding view count
const sectionViews: { [key: string]: number } = {
    "about-container": 0,
    "skills-container": 0,
    "project-1": 0,
    "project-2": 0,
};

// Increments view count for corresponding section, setting is-visible if viewed for the first time
function callbackSetIsVisible(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach(entry => {
        const id = entry.target.id;
        if (entry.isIntersecting && id in sectionViews) {
            if (sectionViews[id] === 0) {
                entry.target.classList.add("is-visible");
            }
            sectionViews[id]++;
        }
    });
}

const options = { threshold: 0.25 };
const observer = new IntersectionObserver(callbackSetIsVisible, options);

observer.observe(about_cont);
observer.observe(skills_cont);
observer.observe(project1);
observer.observe(project2);


