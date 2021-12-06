/******************************************************************************/
/********************************* CONSTANTS **********************************/

const main = document.getElementsByTagName('main')[0];
const timeline = document.getElementById("timeline");
const timeline_icon = document.getElementsByClassName("timeline_icon")[0];

/******************************************************************************/
/****************************** GLOBAL VARIABLES ******************************/

let start_time;
let total_duration;

let data;
let theme;

/******************************************************************************/
/******************************************************************************/
/***************************** TO READ JSON FILE ******************************/

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
/********************************* FUNCTIONS **********************************/

function parseTime(str) {
    let tab = str.split(':');
    return parseInt(tab[0]) + parseInt(tab[1]) / 60;
}

function setInitialTimes() {
    start_time = parseTime(localStorage.getItem('debut'));
    total_duration = parseTime(localStorage.getItem('fin')) - start_time;
}

function loadBackground() {
    let background = data[theme].background;
    main.style.backgroundImage = `url(${background})`;
}

function loadIcon(is_fading) {
    let icon = data[theme].icon;
    if (is_fading) {
        timeline_icon.classList.add('timeline_icon_fade');
        setTimeout(() => timeline_icon.setAttribute('src', icon), 1000);
        setTimeout(() => timeline_icon.classList.remove('timeline_icon_fade'), 2000);
    }
    else {
        timeline_icon.setAttribute('src', icon);
    }
}

function loadTheme(is_fading) {
    let new_theme = localStorage.getItem('theme');
    if (theme == null || theme != new_theme) {
        theme = new_theme;
        loadBackground();
        loadIcon(is_fading);
    }
}

function changeIconPosition() {
    let time = parseTime(localStorage.getItem('heure')) - start_time;
    let icon_position = (timeline.offsetWidth - timeline_icon.offsetWidth - getComputedStyle(timeline).padding.split('px', 1) * 2) * (time / total_duration);
    timeline_icon.style = `transform: translate(${icon_position}px)`;
}

/**************************** FOR EVENTS LISTENERS ****************************/

function clickOnChoicesEvent() {
    setTimeout(() => changeIconPosition(), 100);
    setTimeout(() => loadTheme(true), 100);
    setTimeout(() => document.getElementsByClassName('choose')[0].addEventListener('click', clickOnChoicesEvent), 100);
}

function resizeWindowEvent() {
    timeline_icon.classList.add('timeline_icon_window_resize');
    changeIconPosition();
    setTimeout(() => timeline_icon.classList.remove('timeline_icon_window_resize'), 100);
}

/******************************************************************************/
/********************************** INITIATE **********************************/

function initiate() {
    setInitialTimes();
    loadTheme(false);
    document.getElementsByClassName('choose')[0].addEventListener('click', clickOnChoicesEvent);
    window.addEventListener('resize', resizeWindowEvent);
}

setTimeout(() => initiate(), 100);

/******************************************************************************/
/******************************************************************************/
/*********************************** TESTS ************************************/

