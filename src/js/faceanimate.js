 function faceanimate(){
  const recit=document.getElementById("recit-h")
  let bot='<div id="bot" class="neutral"><div id="head"><div id="left-ear"><div id="left-ear-inner"></div></div><div id="face"><div id="eyes">  <div id="left-eye"></div><div id="right-eye"></div></div><div id="mouth"></div></div><div id="right-ear"><div id="right-ear-inner"></div></div></div>';
  recit.innerHTML=bot;
} 
window.onload= faceanimate;
/*  function removefaceanimate(){
  const bot=document.getElementById('bot');
  bot.remove();
} 
setInterval(removefaceanimate, 8000); */
