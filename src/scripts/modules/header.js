const cartFooter = document.querySelector("[data-component='header']");
observeHeight(cartFooter, '--header-height');

const inputWrapper = document.querySelector("[data-component='header-input']");
const input = inputWrapper?.querySelector('input');

input?.addEventListener('blur', () => {
  if (!input.value.length) {
    inputWrapper?.classList.remove('active');
  }
});

inputWrapper?.addEventListener('click', () => {
  inputWrapper?.classList.add('active');
  input?.focus();
});

document.querySelectorAll('.input-header__tag').forEach((tag) =>
  tag.addEventListener('click', (e) => {
    e.stopPropagation();
  })
);

document.querySelectorAll("[data-component='hamburger']").forEach((item) => {
  item.querySelectorAll('[data-hamburger-button]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector("[data-component='header-modal']")?.classList.toggle('open');
      document.querySelector("[data-component='header']")?.classList.toggle('open');
      modalToggle();
    });
  });
});
