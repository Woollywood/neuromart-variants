document.querySelectorAll("[data-component='catalog-slider']").forEach((slider) => {
  const size = slider.dataset.size ?? 'md';

  const getOptions = () => {
    switch (size) {
      case 'sm':
        return {
          perPage: 4,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 5 },
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 8, gap: 16 },
            [getMediaCssParsedVariable(MediaSizes.XL)]: { perPage: 12 },
          },
        };
      case 'md':
        return {
          perPage: 3,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 4 },
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 6, gap: 16 },
            [getMediaCssParsedVariable(MediaSizes.XL)]: { perPage: 8 },
          },
        };
      default:
        return {
          perPage: 3,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 4 },
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 6, gap: 16 },
            [getMediaCssParsedVariable(MediaSizes.XL)]: { perPage: 8 },
          },
        };
    }
  };

  new Splide(slider, {
    type: 'loop',
    arrows: false,
    pagination: false,
    mediaQuery: 'min',
    gap: 8,
    ...getOptions(),
  }).mount();
});
