function faceanimate(){
  const recit=document.getElementById("recit")
  const face='<div id="bot" class="neutral"><div id="head"><div id="left-ear"><div id="left-ear-inner"></div></div><div id="face"><div id="eyes">  <div id="left-eye"></div><div id="right-eye"></div></div><div id="mouth"></div></div><div id="right-ear"><div id="right-ear-inner"></div></div></div>'
  recit.innerHTML=face;
  setInterval(removefaceanimate, 10000);
  /* setTimeout(removefaceanimate(), 100000); */
}
 function removefaceanimate(){
  const recit=document.getElementById('bot')
  recit.innerHTML="";
} 

