document.querySelectorAll("[data-component='category-slider']").forEach((slider) => {
  const dataBreakpoints = slider.dataset.sliderBreakpoints;
  const breakpoints = dataBreakpoints ? JSON.parse(dataBreakpoints) : {};
  const hasBreakpoints = Object.keys(breakpoints).length > 0;

  const originalBreakpoints = {
    [MediaSizesValue.MD]: { perPage: 4 },
    [MediaSizesValue.LG]: { perPage: 2 },
    1600: { perPage: 3 },
  };

  new Splide(slider, {
    type: 'loop',
    arrows: false,
    pagination: false,
    mediaQuery: 'min',
    perPage: 3,
    breakpoints: hasBreakpoints ? breakpoints : originalBreakpoints,
  }).mount();
});
