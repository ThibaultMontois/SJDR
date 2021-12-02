let theme;
let background;
let icon;
let icon_cible = document.getElementById("timeline").firstElementChild.firstElementChild;

/************************Ouverture du fichier JSON***************************************/

function readJsonFile(file, callback) {
    let textFile = new XMLHttpRequest();
    textFile.overrideMimeType("application/json");
    textFile.open("GET", file, true);
    textFile.onreadystatechange = function() {
        if (textFile.readyState === 4 && textFile.status == "200") {
            callback(textFile.responseText);
        }
    };
    textFile.send(null);
}

readJsonFile("../src/json/theme.json", function(text) {
    theme = JSON.parse(text);
});

/****************************************************************************/

function initiate() {
    background = theme.beach.background;
    icon = theme.beach.icon;
    document.getElementsByTagName("main")[0].style.backgroundImage = background;
    icon_cible.style.visibility = "visible";
}

setTimeout(() => initiate(), 100);

document.getElementById("timeline").addEventListener('click', testChangementClick);

function testChangementClick() {
    icon_cible.style.visibility = "hidden";
    icon_cible = icon_cible.nextElementSibling;
    icon_cible.style.visibility = "visible";
}