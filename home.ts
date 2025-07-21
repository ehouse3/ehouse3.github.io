// website directory designs
//http-server https://www.npmjs.com/package/http-server 
console.log("home.ts script loaded");

//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

let skillsCont: HTMLElement | null = document.getElementById("skills-container");
let aboutCont: HTMLElement | null = document.getElementById("about-container");
let project1: HTMLElement | null = document.getElementById("project-1");
let project2: HTMLElement | null = document.getElementById("project-2");
let projectHeader: HTMLElement | null = document.getElementById("projects-header");


// let link_cont: HTMLElement = document.getElementById("link-contaienr")!;

// let navbar_cont: HTMLElement = document.getElementById("navbar-container")!;

// elementID and corresponding view count
const sectionViews: { [key: string]: number } = {
    "about-container": 0,
    "skills-container": 0,
    "project-1": 0,
    "project-2": 0,
    "projects-header":0,
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

//assign observation callbacks for each section
if (aboutCont) { observer.observe(aboutCont); }
if (skillsCont) { observer.observe(skillsCont); }
if (project1) { observer.observe(project1); }
if (project2) { observer.observe(project2); }
if (projectHeader) { observer.observe(projectHeader); }
