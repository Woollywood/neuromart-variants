new Splide(document.querySelector("[data-component='main-banner']")?.querySelector('.splide'), {
  type: 'loop',
  perPage: 1,
  arrows: false,
  pagination: true,
  gap: 8,
}).mount();
