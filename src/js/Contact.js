let modal = null;

const opendModal= function (e) {
  e.preventDefault(); 
  let fenModal= document.getElementById('dialog')
    fenModal.setAttribute('aria-modal','true')
    fenModal.removeAttribute('aria-hidden')
    fenModal.style.visibility= 'visible';
/*   let main= document.querySelector('main') */
/*   main.setAttribute("class","hidden");
  main.removeAttribute('background-image'); */
/*   modal.addEventListener('click', closeModal);
   modal.getElementById('modal-close').addEventListener('click', closeModal); 
   document.getElementById('dialog').removeEventListener('click', opendModal);  */
  document.getElementById('modal-close').addEventListener('click', closeModal); 
/*   document.getElementById('c-dialog').addEventListener('click',stopPropagation); */
}



 const closeModal=function(e) {
  let modal= document.getElementById('dialog');
  modal.style.visibility= 'hidden';
  modal.setAttribute('aria-hiden', 'true');
  modal.removeAttribute('aria-modal');
  document.getElementById('dialog').removeEventListener('click', opendModal);
document.getElementById('modal-close').removeEventListener('click', closeModal);
/* modal.removeEventListener('click', closeModal)
modal.getElementById('modal-close').removeEventListener('click', closeModal); */
}
 
  const stopPropagation =function (e) {
  e.stopPropagation()
} 

 

  document.querySelectorAll('dialog').forEach(a => {
  a.addEventListener('click',closeModal)
})  


function sendEmail(){
  Email.send({
    To:"hauspie.guillaume@free.fr",
    From:"hauspie.guillaume@free.fr",
    Subject:"Question de ",
    body: document.getElementById('text').value
  }).then (
    message =>alert("Votre message es bien envoyé")
  );
}

document.getElementById('contact-Modal').addEventListener('click',opendModal);
document.getElementById('modal-close').addEventListener('click',closeModal); 


