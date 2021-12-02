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
readJsonFile("../src/json/histoire.json", function(text) {
    let data = JSON.parse(text);
    document.getElementById("recit").innerHTML = data.etape1.choix[2];
});