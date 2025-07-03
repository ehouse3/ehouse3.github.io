// website directory designs
//http-server https://www.npmjs.com/package/http-server 
console.log("home.ts script loaded");

//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

let skills_cont:HTMLElement = document.getElementById("skills-container")!;
let skills_cont_views:number = 0;
let about_cont:HTMLElement = document.getElementById("about-container")!
let about_cont_views:number = 0;
let projects_cont:HTMLElement = document.getElementById("projects-container")!;
let projects_cont_views:number = 0;

let link_cont:HTMLElement = document.getElementById("link-contaienr")!;

let navbar_cont:HTMLElement = document.getElementById("navbar-container")!;


function fade_in_section(viewed_element:HTMLElement) {
    viewed_element.classList.add("is-visible");
}

const callbackAbout:IntersectionObserverCallback = (entries, observer) => {
    console.log("about entries",entries,"about views",about_cont_views);
    
    if(about_cont_views == 1) {
        entries[0].target.classList.add("is-visible");
    }
    about_cont_views++;

    console.log("\n");
}
const callbackSkills:IntersectionObserverCallback = (entries, observer) => {
    console.log("skills entries",entries,"skills views",skills_cont_views);
    
    if(skills_cont_views == 1) {
        console.log("skills adding is visible");
        entries[0].target.classList.add("is-visible");
    }
    skills_cont_views++;

    console.log("\n");
}
const callbackProjects:IntersectionObserverCallback = (entries, observer) => {
    console.log("projects entries",entries,"projects views",projects_cont_views);
    
    if(projects_cont_views == 1) {
        entries[0].target.classList.add("is-visible");
    }
    projects_cont_views++;

    console.log("\n");
}
const options = {
    // root: document.querySelector("#skills-container"),
    threshold: 0.25
};

// interface IntersectionObserverProps {
//     entries: IntersectionObserverEntry[],
//     observer: IntersectionObserver,
//     callback: () => void,
// }

const observer0 = new IntersectionObserver(callbackAbout, options);
const observer1 = new IntersectionObserver(callbackSkills, options);
const observer2 = new IntersectionObserver(callbackProjects, options);

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

