var index= 1;

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
   let recit=document.getElementById('recit')
   document.getElementById("recit").innerHTML='<div id="recit-h">'+bot+'</div><div class="recit-header-text"><p class="recit-text">'+eval(`data.etape${index}.histoire`)+"</p></div></div><div class='choose'><p id='1' onclick='clickchoix(id)'>"+eval(`data.etape${index}.choix["0"]`)+"</p><p id='2' onclick='clickchoix(id)'>"+eval(`data.etape${index}.choix["1"]`)+"</p><p id='3'  onclick='clickchoix(id)'>"+eval(`data.etape${index}.choix["2"]`)+"</p></div>";
    let heuredebut = data.journee.debut;
    let heurefin = data.journee.fin;
    let themebase = data.etape1.theme;
    let heurebase = data.etape1.heure;
    localStorage.setItem('debut',heuredebut);
    localStorage.setItem('fin',heurefin);
    localStorage.setItem('theme',themebase);
    localStorage.setItem('heure',heurebase); 
}); 

function clickchoix(id){
    index++;
    let recit=document.getElementById("recit");
     readJsonFile("../src/json/histoire.json", function(text) {
        let data = JSON.parse(text);                    
        document.getElementById("recit-h").innerHTML+='<div class="recit-header-text"><p class="recit-text">'+eval(`data.etape${index}.histoire`)+"</p></div>";
       let recitm=document.getElementById('recit');
        recitm.lastChild.innerHTML="<div class='choose'><p id='1' onclick='clickchoix(id)'>"+eval(`data.etape${index}.choix["0"]`)+"</p><p id='2' onclick='clickchoix(id)'>"+eval(`data.etape${index}.choix["1"]`)+"</p><p id='3'  onclick='clickchoix(id)'>"+eval(`data.etape${index}.choix["2"]`)+"</p></div>";
        data =JSON.parse(text);
        if (id == 3) {
        document.getElementById("recit").innerHTML='<div id="recit-h">'+bot+'</div><div class="recit-header-text"><p class="recit-text">'+eval(`data.etape${index}.over`)+"</p></div>";
        }
        else if (id == 2){
            document.getElementById("recit").innerHTML='<div id="recit-h">'+bot+'</div><div class="recit-header-text"><p class="recit-text">'+eval(`data.etape${index}.histoire`)+"</p></div></div><div class='choose'><p id='1' onclick='clickchoix(id)'>"+eval(`data.etape${index}.choix["0"]`)+"</p><p id='2' onclick='clickchoix(id)'>"+eval(`data.etape${index}.choix["1"]`)+"</p><p id='3'  onclick='clickchoix(id)'>"+eval(`data.etape${index}.choix["2"]`)+"</p></div>";
        }
        else {
            document.getElementById("recit").innerHTML='<div id="recit-h">'+bot+'</div><div class="recit-header-text"><p class="recit-text">'+eval(`data.etape${index}.supplement`)+eval(`data.etape${index}.histoire`)+"</p></div></div><div class='choose'><p id='1' onclick='clickchoix(id)'>"+eval(`data.etape${index}.choix["0"]`)+"</p><p id='2' onclick='clickchoix(id)'>"+eval(`data.etape${index}.choix["1"]`)+"</p><p id='3'  onclick='clickchoix(id)'>"+eval(`data.etape${index}.choix["2"]`)+"</p></div>";
        }
       let theme = eval(`data.etape${index}.theme`);
        let heure = eval(`data.etape${index}.heure`);
        localStorage.setItem('theme',theme);
        localStorage.setItem('heure',heure); 
    }); 
}

let bot='<div id="bot" class="neutral"><div id="head"><div id="left-ear"><div id="left-ear-inner"></div></div><div id="face"><div id="eyes">  <div id="left-eye"></div><div id="right-eye"></div></div><div id="mouth"></div></div><div id="right-ear"><div id="right-ear-inner"></div></div></div>'
//Merci à Constantin (et StackOverflow) pour l'aide 