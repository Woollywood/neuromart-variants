document.querySelectorAll("[data-component='contact-accordion']").forEach((item) => {
  item.querySelector("[data-component='contact-accordion-trigger']")?.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});
