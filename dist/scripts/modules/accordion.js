document.querySelectorAll("[data-component='accordion']").forEach((item) => {
  item.querySelector("[data-component='accordion-trigger']")?.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});
