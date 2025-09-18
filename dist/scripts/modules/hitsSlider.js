(() => {
  new Splide(document.querySelector("[data-component='hits-slider']"), {
    type: 'loop',
    arrows: false,
    pagination: false,
    mediaQuery: 'min',
    gap: 8,
    perPage: 2,
    breakpoints: {
      [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 4, gap: 2 },
    },
  }).mount();
})();
