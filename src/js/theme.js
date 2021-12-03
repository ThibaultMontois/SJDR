let main = document.getElementsByTagName('main')[0];
let timeline = document.getElementById("timeline");
let timeline_icon = document.getElementsByClassName("timeline_icon")[0];

let data;
/* let theme; */
let background;
let icon;

let start_time;
/* let end_time; */
let total_time;
let time;

let position;

/***************************** TO READ JSON FILES ******************************/

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

/******************************************************************************/
/******************************************************************************/

function parseTime(str) {
    let tab = str.split(':');
    return parseInt(tab[0]) + parseInt(tab[1]) / 60;
}

function setInitialTime(start, end) {
    start_time = start;
    /* end_time = end; */
    total_time = end - start;
}

function changeIconPosition(actual_time) {
    time = parseTime(actual_time) - start_time;
    position = (timeline.offsetWidth - timeline_icon.offsetWidth - getComputedStyle(timeline).padding.split('px', 1) * 2) * (time / total_time);

    timeline_icon.style = `transform: translate(${position}px)`;
}

function loadTheme(theme) {
    background = data[theme].background;
    icon = data[theme].icon;

    main.style.backgroundImage = `url(${background})`;
    timeline_icon.setAttribute('src', icon);
}

/******************************************************************************/

window.addEventListener('storage', checkStorageEvent);

function checkStorageEvent(event) {
    switch(event.key) {
        case 'heure': changeIconPosition(localStorage.getItem('heure')); break;
        case 'theme': loadTheme(localStorage.getItem('theme')); break;
        default: console.log("Ta mère en chaussettes à la plage !!!");
    }
}

window.addEventListener('resize', replaceIcon);

function replaceIcon() {
    changeIconPosition(localStorage.getItem('heure'));
}

/******************************************************************************/

function initiate() {
    setInitialTime(parseTime(localStorage.getItem('debut')), parseTime(localStorage.getItem('fin')));
    loadTheme(localStorage.getItem('theme'));
}

setTimeout(() => initiate(), 150);

/******************************************************************************/
/************************************ TEST ************************************/
/*
let tab_test = ['beach', 'dark_clouds', 'light_clouds', 'night', 'rain', 'snow', 'storm', 'sun'];
let str_actual_time = "11:00";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener('click', testChangementClick);

function testChangementClick() {
    changeIconPosition(str_actual_time);
    loadTheme(tab_test[getRandomInt(8)]);
    window.dispatchEvent( new Event('storage') );
}
*/