let data;
let theme;
let background;
let icon;

let str_start_time = "07:15";
let str_end_time = "22:00";
let str_actual_time = "22:00";

let start_time;
let end_time;
let total_time;

/************************ Ouverture du fichier JSON ***************************************/

function readJsonFile(file, callback) {
    let textFile = new XMLHttpRequest();
    textFile.overrideMimeType("application/json");
    textFile.open("GET", file, true);
    textFile.onreadystatechange = function () {
        if (textFile.readyState === 4 && textFile.status == "200") {
            callback(textFile.responseText);
        }
    };
    textFile.send(null);
}

readJsonFile("../src/json/theme.json", function (text) {
    data = JSON.parse(text);
});

/****************************************************************************/

function parseTime(str) {
    let t = str.split(':');
    return parseInt(t[0]) + parseInt(t[1]) / 60;
}

function loadTheme(theme) {
    background = data[theme].background;
    icon = data[theme].icon;
}

function initiate() {
    start_time = parseTime(str_start_time);
    end_time = parseTime(str_end_time);
    total_time = end_time - start_time;
    loadTheme(tab_test[getRandomInt(8)]);
    document.getElementsByTagName('main')[0].setAttribute('style', `background-image: url(${background})`);
    document.getElementsByClassName('timeline_icon')[0].setAttribute('src', icon);
    document.getElementsByClassName('timeline_icon')[0].setAttribute('style', `transform: translate(${x}%)`);
}

setTimeout(() => initiate(), 100);

/******************************* Test *********************************************/

let tab_test = ['beach', 'dark_clouds', 'light_clouds', 'night', 'rain', 'snow', 'storm', 'sun'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener('click', testChangementClick);

function testChangementClick() {
    let timeline_icon = document.getElementsByClassName("timeline_icon")[0];
    let timeline = document.getElementById("timeline");
    let time = parseTime(str_actual_time) - start_time;
    let x = 0.98 * (timeline.offsetWidth - timeline_icon.offsetWidth) * (time / total_time);

    loadTheme(tab_test[getRandomInt(8)]);
    document.getElementsByTagName('main')[0].setAttribute('style', `background-image: url(${background})`);
    document.getElementsByClassName('timeline_icon')[0].setAttribute('src', icon);

    timeline_icon.setAttribute('style', `transform: translate(${x}px)`);
}