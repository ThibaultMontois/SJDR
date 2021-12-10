let modal = null;

const opendModal = function (e) {
  e.preventDefault();
  let fenModal = document.getElementById('dialog')
  fenModal.setAttribute('aria-modal', 'true')
  fenModal.removeAttribute('aria-hidden')
  fenModal.style.visibility = 'visible';
  document.getElementById('modal-close').addEventListener('click', closeModal);
}

const closeModal = function (e) {
  let modal = document.getElementById('dialog');
  modal.style.visibility = 'hidden';
  modal.setAttribute('aria-hiden', 'true');
  modal.removeAttribute('aria-modal');
  document.getElementById('dialog').removeEventListener('click', opendModal);
  document.getElementById('modal-close').removeEventListener('click', closeModal);
}

const stopPropagation = function (e) {
  e.stopPropagation()
}

document.querySelectorAll('dialog').forEach(a => {
  a.addEventListener('click', closeModal)
})

function sendEmail() {
  Email.send({
    To: "hauspie.guillaume@free.fr",
    From: "hauspie.guillaume@free.fr",
    Subject: "Question de ",
    body: document.getElementById('text').value
  }).then(
    message => alert("Votre message es bien envoyé")
  );
}

document.getElementById('contact-Modal').addEventListener('click', opendModal);
document.getElementById('modal-close').addEventListener('click', closeModal);