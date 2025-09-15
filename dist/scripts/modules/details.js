const gallerySlider = document.querySelector('[data-gallery-slider]');
if (gallerySlider) {
  new Splide(gallerySlider, {
    type: 'loop',
    arrows: false,
    pagination: false,
    perPage: 1,
    mediaQuery: 'min',
    gap: 8,
    breakpoints: {
      [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 2, gap: 16, pagination: true },
    },
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
  new Splide(slider, {
    pagination: false,
    arrows: false,
    mediaQuery: 'min',
    autoWidth: true,
    gap: 4,
    breakpoints: {
      [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 4, gap: 8 },
      [getMediaCssParsedVariable(MediaSizes.MD)]: { perPage: 2, autoWidth: false },
    },
  }).mount();
}
