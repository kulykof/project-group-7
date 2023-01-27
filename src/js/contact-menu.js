(() => {
  const refs = {
    phoneBtn: document.querySelector('.contact-button'),
    phoneThumb: document.querySelector('.modal-contact__menu'),
  };

  refs.phoneBtn.addEventListener('click', togglePhoneThumb);

  function togglePhoneThumb() {
    refs.phoneThumb.classList.toggle('is-open');
  }
})();
