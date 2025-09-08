document.querySelectorAll("[data-component='filter-filter-accordion']").forEach((item) => {
  item.querySelector("[data-component='accordion-trigger']")?.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});
