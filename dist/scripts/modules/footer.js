(() => {
  const footerAccordions = document
    .querySelector("[data-component='footer']")
    ?.querySelectorAll("[data-component='accordion']");
  const modalAccordions = document
    .querySelector("[data-component='modal-footer']")
    ?.querySelectorAll("[data-component='accordion']");

  const accordions = [...(footerAccordions ?? []), ...(modalAccordions ?? [])];

  accordions.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.add('touched');
    });
  });

  const accordionsCheck = () => {
    const windowWidth = window.innerWidth;
    accordions.forEach((accordion) => {
      if (!accordion.classList.contains('touched')) {
        if (!accordion.classList.contains('touched')) {
          if (windowWidth > getMediaCssParsedVariable(MediaSizes.LG)) {
            accordion.classList.add('open');
          } else {
            accordion.classList.remove('open');
          }
        }
      }
    });
  };

  accordionsCheck();
  window.addEventListener('resize', accordionsCheck);
})();
