const recit_text = document.getElementById('recit-text');
const choix = document.getElementsByClassName('choose')[0];
const choix_1 = document.getElementById('1');
const choix_2 = document.getElementById('2');
const choix_3 = document.getElementById('3');

let json_histoire;
let index = 1;
let etape = `etape${index}`;

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

readJsonFile("../src/json/histoire.json", function (text) {
    json_histoire = JSON.parse(text);
});

function lireTexte(text) {
    speechSynthesis.cancel();
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

function chargeTexte(container, text) {
    //////// TO DO
}

function chargeEtape() {
    recit_text.innerText = json_histoire[etape].histoire;
    choix_1.innerText = json_histoire[etape].choix[0];
    choix_2.innerText = json_histoire[etape].choix[1];
    choix_3.innerText = json_histoire[etape].choix[2];
    localStorage.setItem('theme', json_histoire[etape].theme);
    localStorage.setItem('heure', json_histoire[etape].heure);
}

function chargePremiereEtape() {
    localStorage.setItem('debut', json_histoire.journee.debut);
    localStorage.setItem('fin', json_histoire.journee.fin);
    chargeEtape();
    lireTexte(recit_text.textContent);
}

function clickchoix(id) {
    etape = `etape${++index}`;
    if (index >= 11 || id == 3) {
        recit_text.innerText = json_histoire[etape].over;
        if (id == 3) {
            localStorage.setItem('theme', json_histoire.journee.themeover);
        }
        choix.setAttribute('style', 'display: none');
    }
    else {
        chargeEtape();
    }
    lireTexte(recit_text.textContent);
}

setTimeout(() => chargePremiereEtape(index), 100);