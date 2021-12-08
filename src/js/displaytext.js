const recit_text = document.getElementById('recit-text');
const choix = document.getElementsByClassName('choose')[0];
const choix_1 = document.getElementById('1');
const choix_2 = document.getElementById('2');
const choix_3 = document.getElementById('3');

let json_histoire;
let index;
let etape;

let texte;
let longueur_texte;
let index_caractere;

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

function effaceTexte(conteneur) {
    index_caractere = 0;
    conteneur.innerText = '';
}

function ecrireTexte(conteneur) {
    if (index_caractere < longueur_texte) {
        conteneur.innerHTML += texte[index_caractere++];
        setTimeout(() => ecrireTexte(conteneur), 42);
    }
}

function chargeTexte(conteneur, nouveau_texte) {
    effaceTexte(conteneur);
    texte += nouveau_texte;
    longueur_texte = texte.length;
    ecrireTexte(conteneur);
    lireTexte(texte);
}

function chargeEtape(id) {
    texte = id == 1 ? json_histoire[etape].supplement : '';
    chargeTexte(recit_text, json_histoire[etape].histoire);
    choix_1.innerText = json_histoire[etape].choix[0];
    choix_2.innerText = json_histoire[etape].choix[1];
    choix_3.innerText = json_histoire[etape].choix[2];
    localStorage.setItem('theme', json_histoire[etape].theme);
    localStorage.setItem('heure', json_histoire[etape].heure);
}

function chargePremiereEtape() {
    localStorage.setItem('debut', json_histoire.journee.debut);
    localStorage.setItem('fin', json_histoire.journee.fin);
    index = 1;
    etape = `etape${index}`;
    chargeEtape(0);
}

function clickchoix(id) {
    etape = `etape${++index}`;
    switch (index >= 11 ? 2 : 0 + id == 3 ? 1 : 0) {
        case 1:
            localStorage.setItem('theme', json_histoire.journee.themeover);
        case 2:
        case 3:
            chargeTexte(recit_text, json_histoire[etape].over);
            choix.setAttribute('style', 'display: none');
            break;
        default:
            chargeEtape(id);
    }
}

setTimeout(() => chargePremiereEtape(index), 100);