
setTimeout(() => {

voicetext()
}, 500);


function voicetext(){
    let Voicetext= document.getElementById('recit-text')
    Voicetext=Voicetext.textContent;
    let test=new SpeechSynthesisUtterance(Voicetext);
    speechSynthesis.speak(test);
    }

document.addEventListener("reset",speechSynthesis.cancel());

function nosoundVoice(){
    window.speechSynthesis.cancel();
}