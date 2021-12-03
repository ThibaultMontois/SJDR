let main = document.getElementsByTagName('main')[0];
let timeline = document.getElementById("timeline");
let timeline_icon = document.getElementsByClassName("timeline_icon")[0];

let data;
let theme;
let background;
let icon;

let start_time;
let end_time;
let total_time;
let actual_time;

let position;

let str_start_time = "07:15";
let str_end_time = "22:00";
let str_actual_time = "22:00";

/************************ To Read JSON File ***************************************/

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

    main.style.backgroundImage = `url(${background})`;
    timeline_icon.setAttribute('src', icon);
}

setTimeout(() => initiate(), 100);

/******************************* Test *********************************************/

let tab_test = ['beach', 'dark_clouds', 'light_clouds', 'night', 'rain', 'snow', 'storm', 'sun'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener('click', testChangementClick);

function testChangementClick() {
    actual_time = parseTime(str_actual_time) - start_time;
    position = (timeline.offsetWidth - timeline_icon.offsetWidth - getComputedStyle(timeline).padding.split('px', 1) * 2) * (actual_time / total_time);

    loadTheme(tab_test[getRandomInt(8)]);

    main.style.backgroundImage = `url(${background})`;
    timeline_icon.setAttribute('src', icon);
    timeline_icon.style = `transform: translate(${position}px)`;
}