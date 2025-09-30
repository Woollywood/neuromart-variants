let windowWidth = window.innerWidth;
window.addEventListener('resize', () => {
  windowWidth = window.innerWidth;
});

document.querySelectorAll("[data-component='filters-select']").forEach((select) => {
  const drawer = select.querySelector("[data-component='filters-select-drawer']");
  const drawerContainer = document.getElementById('select-drawers-container');

  const closeButton = drawer?.querySelector("[data-action='close']");

  drawerContainer?.append(drawer);

  const toggle = () => {
    if (getMediaCssParsedVariable(MediaSizes.MD) < windowWidth) {
      return;
    }

    modalToggle();
    drawer?.classList.toggle('opened');
  };

  select.addEventListener('click', toggle);
  closeButton?.addEventListener('click', toggle);
});
