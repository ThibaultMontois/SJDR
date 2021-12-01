let icon_cible = document.getElementById("timeline").firstElementChild.firstElementChild;

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
    document.getElementById("recit").innerHTML = data['test'];
});

/****************************************************************************/

function initiate() {
    document.getElementsByTagName("main")[0].style.backgroundImage = "url('./img/backgrounds/night.jpg')";
    icon_cible.style.visibility = "visible";
}

document.getElementById("timeline").addEventListener('click', testChangementClick);

function testChangementClick() {
    icon_cible.style.visibility = "hidden";
    icon_cible = icon_cible.nextElementSibling;
    icon_cible.style.visibility = "visible";
}

initiate();