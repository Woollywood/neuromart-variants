const personalData = document.querySelector("[data-component='personal-data']");
const account = document.querySelector("[data-component='account']");
const trigger = document.querySelector("[data-component='personal-data-trigger']");

if (account && trigger && personalData) {
  trigger.addEventListener('click', () => {
    personalData.classList.toggle('modal-opened');
    account.classList.toggle('modal-opened');
  });
}

const slider = document.querySelector("[data-component='history-slider']");
if (slider) {
  const type = slider.dataset.type ?? 's';
  const getOptions = () => {
    switch (type) {
      case 's':
        return { gap: 4, autoWidth: true };
      case 'o':
        return {
          gap: 4,
          autoWidth: true,
          mediaQuery: 'min',
          breakpoints: {
            [getMediaCssParsedVariable(MediaSizes.LG)]: { perPage: 3, gap: 8, autoWidth: false },
          },
        };
      default:
        return { gap: 4, autoWidth: true };
    }
  };
  new Splide(slider, {
    pagination: false,
    arrows: false,
    ...getOptions(),
  }).mount();
}
