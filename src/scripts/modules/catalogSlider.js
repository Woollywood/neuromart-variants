document.querySelectorAll("[data-component='catalog-slider']").forEach((slider) => {
  const size = slider.dataset.size ?? 'md';

  const getOptions = () => {
    switch (size) {
      case 'i':
        return {
          perPage: 3,
          gap: 4,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 4 },
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 5, gap: 2 },
            [getMediaCssParsedVariable(MediaSizes.XL)]: { perPage: 6 },
          },
        };
      case 'i_sm':
        return {
          perPage: 4,
          gap: 2,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 5 },
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 8 },
            [getMediaCssParsedVariable(MediaSizes.XL)]: { perPage: 12 },
          },
        };
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
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 5, gap: 16 },
            [getMediaCssParsedVariable(MediaSizes.XL)]: { perPage: 6 },
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
