document.querySelectorAll("[data-component='field-input']").forEach((inputWrapper) => {
  const input = inputWrapper.querySelector('input');
  if (input) {
    inputWrapper.addEventListener('click', () => {
      inputWrapper.classList.add('focused');
      input.focus();
    });

    input.addEventListener('blur', () => {
      inputWrapper.classList.remove('focused');
    });

    input.addEventListener('change', () => {
      if (input.value.length > 0) {
        inputWrapper.classList.add('active');
      } else {
        inputWrapper.classList.remove('active');
      }
    });
  }
});
