let data;
let theme;
let background;
let icon;

let start_time = "07h00";
let end_time = "19h00";
let total_time = 12;
let actual_time;


let x = 0;

/************************ Ouverture du fichier JSON ***************************************/

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
    data = JSON.parse(text);
});

/****************************************************************************/

function initiate() {
    loadTheme(tab_test[getRandomInt(8)]);
    document.getElementsByTagName('main')[0].setAttribute('style', `background-image: url(${background})`);
    document.getElementsByClassName('timeline_icon')[0].setAttribute('src', icon);
    document.getElementsByClassName('timeline_icon')[0].setAttribute('style', `transform: translate(${x}%)`);
}

function loadTheme(theme) {
    background = data[theme].background;
    icon = data[theme].icon;
}

setTimeout(() => initiate(), 100);

/******************************* Test *********************************************/

let tab_test = ['beach', 'dark_clouds', 'light_clouds', 'night', 'rain', 'snow', 'storm', 'sun'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener('click', testChangementClick);

function testChangementClick() {
    let element = document.getElementsByClassName("timeline_icon")[0];
    x+=100;
    loadTheme(tab_test[getRandomInt(8)]);
    document.getElementsByTagName('main')[0].setAttribute('style', `background-image: url(${background})`);
    document.getElementsByClassName('timeline_icon')[0].setAttribute('src', icon);
    element.setAttribute('style', `transform: translate(${x}%)`);
}