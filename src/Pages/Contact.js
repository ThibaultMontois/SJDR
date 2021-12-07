let modal = null;


const opendModal= function (e) {
  e.preventDefault(); 
  let test = e.targert;
  let fenModal= document.getElementById('dialog');
  fenModal.setAttribute('aria-modal','true');
  fenModal.removeAttribute('aria-hidden');
  let main= document.querySelector('main')
  modal=fenModal;
  main.setAttribute("class","hidden");
  main.removeAttribute('background-image');
/*   modal.addEventListener('click', closeModal);
   modal.getElementById('modal-close').addEventListener('click', closeModal); 
  modal.getElementById('dialog').addEventListener('click',stopPropagation); */
}



const closeModal=function(e) {
  e.preventDefault()
  /* if (modal === null) return */

modal.style.display= 'none'
modal.setAttribute('aria-hiden', 'true')
modal.removeAttribute('arial-modal')
/* modal.removeEventListener('click', closeModal)
modal.getElementById('modal-close').removeEventListener('click', closeModal); */
}

const stopPropagation =function (e) {
  e.stopPropagation()
}
/* document.getElementById('modal-close').addEventListener('click',closeModal); */
 document.querySelectorAll('c-dialog').forEach(a => {
  a.addEventListener('click', openModal)
}) 
document.getElementById('contact').addEventListener('click',opendModal);