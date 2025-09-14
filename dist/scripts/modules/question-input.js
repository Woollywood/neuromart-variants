(() => {
  const inputWrapper = document.querySelector("[data-component='question-input']");
  const input = inputWrapper?.querySelector('input');

  inputWrapper?.addEventListener('click', () => {
    input?.focus();
  });
})();
