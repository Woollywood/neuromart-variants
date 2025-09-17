(() => {
  new Splide(document.querySelector("[data-component='hits-slider']"), {
    type: 'loop',
    arrows: false,
    pagination: false,
    mediaQuery: 'min',
    gap: 2,
    perPage: 2,
    breakpoints: {
      [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 3 },
      [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 4 },
    },
  }).mount();
})();
