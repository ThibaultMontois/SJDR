let theme;
let background;
let icon;

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

/****************************************************************************/

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
    let data = JSON.parse(text);
    document.getElementById("timeline").innerHTML = "<p>"+data['test']+"</p>";
});


function initiate() {
    background = theme.beach.background;
    icon = theme.beach.icon;
    document.getElementsByTagName("main")[0].setAttribute("style", `background-image: url(${background})`);
    document.getElementsByClassName("timeline_icon")[0].setAttribute("src", icon);
}

setTimeout(() => initiate(), 100);

document.getElementById("timeline").addEventListener('click', testChangementClick);

function testChangementClick() {
    console.log("click");
}