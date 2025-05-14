
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

console.log("home.ts loaded")

let loaded = 0;

function loadScript(){ //load script function for loading each project when they are accessed
    console.log("loaded = " ,loaded);
    if (loaded == 0) {
        var file = document.createElement("script");
        file.setAttribute("type", "text/javascript");
        file.setAttribute("src", "test.js");
        document.getElementsByTagName("head")[0].appendChild(file);
    }

}

