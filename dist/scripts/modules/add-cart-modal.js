(() => {
  const addCartButtons = document.querySelectorAll('[add-cart-button]');
  const addCartModal = document.querySelector('[add-cart-modal]');
  const addCartModalClose = document.querySelector('[add-cart-modal-close]');

  if (addCartButtons && addCartButtons.length > 0 && addCartModal && addCartModalClose) {
    const toggleModal = () => {
      if (addCartModal.classList.contains('open')) {
        addCartModal.classList.remove('open');
      } else {
        addCartModal.classList.add('open');
      }
    };

    addCartButtons.forEach((button) => button.addEventListener('click', toggleModal));
    addCartModalClose.addEventListener('click', toggleModal);
  }
})();
