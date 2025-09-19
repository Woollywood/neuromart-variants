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
  const size = slider.dataset.size ?? 'sm';
  console.log({ size });

  const getOptions = () => {
    switch (size) {
      case 'sm':
        return {
          gap: 4,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 4, gap: 8 },
            [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 2, autoWidth: false },
          },
        };
      case 'md':
        return {
          gap: 4,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 4, gap: 16 },
            [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 2, autoWidth: false },
          },
        };
      default:
        return {
          gap: 4,
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 4, gap: 8 },
            [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 2, autoWidth: false },
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
