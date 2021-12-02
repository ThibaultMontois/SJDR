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
    let bot='<div id="head"><div id="left-ear"><div id="left-ear-inner"></div></div><div id="face"><div id="eyes">  <div id="left-eye"></div><div id="right-eye"></div></div><div id="mouth"></div></div><div id="right-ear"><div id="right-ear-inner"></div></div></div>';
    document.getElementById("recit").innerHTML = '<div class="recit"><div id="bot" class="neutral">'+bot+'</div><p class="recit-text">'+data.etape1.histoire+"</p></div><div class='choose'><p id='1' onclick='clickchoix(id)'>"+data.etape1.choix["0"]+"</p><p id='2' onclick='clickchoix(id)'>"+data.etape1.choix["1"]+"</p><p id='3'  onclick='clickchoix(id)'>"+data.etape1.choix["2"]+"</p></div>";
});

function clickchoix(id){

}

