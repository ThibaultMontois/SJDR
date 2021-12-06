setTimeout(() => {
// new SpeechSynthesisUtterance object
var synth = window.speechSynthesis;
let Voicetext= document.getElementById('recit-text')
Voicetext=Voicetext.textContent;
let test=new SpeechSynthesisUtterance(Voicetext);
speechSynthesis.speak(test);

}, 2000);

