/******************************************************************************/
/********************************* CONSTANTS **********************************/

const main = document.getElementsByTagName('main')[0] as HTMLElement;
const timeline = document.getElementById("timeline") as HTMLElement;
const timeline_icon = document.getElementsByClassName("timeline_icon")[0] as HTMLImageElement;
// const choix => displaytext.js

/******************************************************************************/
/****************************** GLOBAL VARIABLES ******************************/

let start_time: number;
let total_duration: number;

let json_theme: any;
let theme: string;

/******************************************************************************/
/******************************************************************************/
/***************************** TO READ JSON FILE ******************************/

// function readJsonFile(file, callback) => displaytext.js

readJsonFile("../src/json/theme.json", function (text: string): void {
    json_theme = JSON.parse(text);
});

/******************************************************************************/
/********************************* FUNCTIONS **********************************/

function parseTime(str: string): number {
    let tab = str.split(':');
    return parseInt(tab[0]) + parseInt(tab[1]) / 60;
}

function setInitialTimes(): void {
    let debut = localStorage.getItem('debut');
    let fin = localStorage.getItem('fin');
    if (debut) start_time = parseTime(debut);
    if (fin) total_duration = parseTime(fin) - start_time;
}

function loadBackground(): void {
    let background = json_theme[theme].background;
    main.style.backgroundImage = `url(${background})`;
}

function loadIcon(is_fading: boolean): void {
    let icon = json_theme[theme].icon;
    timeline_icon.setAttribute('alt', icon.alt);
    timeline_icon.setAttribute('author', icon.author);
    if (is_fading) {
        timeline_icon.classList.add('timeline_icon_fade');
        setTimeout(() => timeline_icon.setAttribute('src', icon.src), 1000);
        setTimeout(() => timeline_icon.classList.remove('timeline_icon_fade'), 2000);
    }
    else timeline_icon.setAttribute('src', icon.src);
}

function loadTheme(is_fading: boolean): void {
    let new_theme = localStorage.getItem('theme');
    if (new_theme && (!theme || theme != new_theme)) {
        theme = new_theme;
        loadBackground();
        loadIcon(is_fading);
    }
}

function changeIconPosition(): void {
    let heure = localStorage.getItem('heure');
    if (heure) {
        let time = parseTime(heure) - start_time;
        let icon_position = (timeline.offsetWidth - timeline_icon.offsetWidth - parseInt(getComputedStyle(timeline).padding.split('px')[0]) * 2) * (time / total_duration);
        timeline_icon.setAttribute('style', `transform: translate(${icon_position}px)`);
    }
}

/**************************** FOR EVENTS LISTENERS ****************************/

function clickOnChoicesEvent(): void {
    setTimeout(() => changeIconPosition(), 100);
    setTimeout(() => loadTheme(true), 100);
}

function resizeWindowEvent(): void {
    timeline_icon.classList.add('timeline_icon_window_resize');
    changeIconPosition();
    setTimeout(() => timeline_icon.classList.remove('timeline_icon_window_resize'), 100);
}

/******************************************************************************/
/********************************** INITIATE **********************************/

function initiate(): void {
    setInitialTimes();
    loadTheme(false);
    choix.addEventListener('click', clickOnChoicesEvent);
    window.addEventListener('resize', resizeWindowEvent);
}

setTimeout(() => initiate(), 150);

/******************************************************************************/
/******************************************************************************/
/*********************************** TESTS ************************************/

