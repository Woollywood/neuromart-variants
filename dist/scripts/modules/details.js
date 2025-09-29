const gallerySlider = document.querySelector('[data-gallery-slider]');
if (gallerySlider) {
  const type = gallerySlider.dataset.type;
  const getOptions = () => {
    switch (type) {
      case 'i':
        return {
          gap: 4,
          autoWidth: true,
          perPage: 'auto',
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 3, gap: 4, autoWidth: false },
          },
        };
      case 't':
        return {
          gap: 8,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 2, gap: 12, pagination: true },
            [getMediaCssParsedVariable(MediaSizes.XL)]: { perPage: 2, gap: 16, pagination: true },
          },
        };
      case 'o':
        return {
          gap: 8,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 2, gap: 8 },
            [getMediaCssParsedVariable(MediaSizes.LG)]: { gap: 12 },
            [getMediaCssParsedVariable(MediaSizes.XL)]: { gap: 16 },
          },
        };
      default:
        return {
          gap: 8,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 2, gap: 16, pagination: true },
          },
        };
    }
  };
  new Splide(gallerySlider, {
    type: 'loop',
    arrows: false,
    pagination: false,
    mediaQuery: 'min',
    ...getOptions(),
  }).mount();
}

const button = document.querySelector('[data-button-position]');
const stickyButton = document.querySelector("[data-component='sticky-button']");

const checkPosition = () => {
  if (button && stickyButton) {
    const buttonBox = button?.getBoundingClientRect();
    if (window.scrollY + window.innerHeight > buttonBox.bottom + window.scrollY) {
      stickyButton.classList.add('hide');
    } else {
      stickyButton.classList.remove('hide');
    }
  }
};

checkPosition();
window.addEventListener('scroll', checkPosition);

const slider = document.querySelector("[data-component='question-slider']");
if (slider) {
  const type = slider.dataset.type ?? 's';

  const getOptions = () => {
    switch (type) {
      case 's':
        return {
          gap: 4,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 2, autoWidth: false },
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 4, gap: 8 },
          },
        };
      case 't':
      case 'o':
        return {
          gap: 4,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 2, gap: 8, autoWidth: false },
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 3, gap: 12 },
            [getMediaCssParsedVariable(MediaSizes.XL)]: { perPage: 3, gap: 16 },
          },
        };
      default:
        return {
          gap: 4,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 2, autoWidth: false },
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 4, gap: 8 },
          },
        };
    }
  };

  new Splide(slider, {
    pagination: false,
    arrows: false,
    mediaQuery: 'min',
    autoWidth: true,
    ...getOptions(),
  }).mount();
}
