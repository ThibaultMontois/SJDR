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
   let recit=document.getElementById('recit-h')
    recit.innerHTML+='<div class="recit-header-text"><p class="recit-text">'+data.etape1.histoire+"</p></div>";
    let recitm=document.getElementById('recit');
    recitm.innerHTML+="<div class='choose'><p id='1' onclick='clickchoix(id)'>"+data.etape1.choix["0"]+"</p><p id='2' onclick='clickchoix(id)'>"+data.etape1.choix["1"]+"</p><p id='3'  onclick='clickchoix(id)'>"+data.etape1.choix["2"]+"</p>"
    let heuredebut = data.journee.debut;
    let heurefin = data.journee.fin;
    localStorage.setItem('debut',heuredebut);
    localStorage.setItem('fin',heurefin);
});

 function clickchoix(id){
    index++;
    var etapeN="etape"+index;
    var test=data(VariantVersJSON(etapeN))
    /* var test=new Object(etapeN); */alert(test);
/*     var myObjextJSON=eval(data.etapeN);
    var donnes= myObjextJSON.histoire; */
    var test2=Object.create(etapeN);
    alert(test2);
/*     alert(donnes); */
    
     readJsonFile("../src/json/histoire.json", function(text) {
        let data = JSON.parse(text);
       return data;
    })
/*     var recit= data.test; */      
    
} 


