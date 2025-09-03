document.querySelectorAll("[data-component='catalog-slider']").forEach((slider) => {
  const dataBreakpoints = slider.dataset.sliderBreakpoints;
  const breakpoints = dataBreakpoints ? JSON.parse(dataBreakpoints) : {};
  const hasBreakpoints = Object.keys(breakpoints).length > 0;

  const originalBreakpoints = {
    [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 4 },
    [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 6 },
    [getMediaCssParsedVariable(MediaSizes.XL)]: { perPage: 8 },
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
