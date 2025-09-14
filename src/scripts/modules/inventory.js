const wrapper = document.querySelector("[data-component='filters-modal']");
const modal = document.querySelector("[data-component='filters-modal-body']");

const trigger = document.querySelector("[data-component='filters-modal-trigger']");
const header = document.querySelector("[data-component='filters-modal-header']");
const footer = document.querySelector("[data-component='filters-modal-footer']");
const inventory = document.querySelector("[data-component='inventory']");
const inventoryHeader = document.querySelector("[data-component='inventory-header']");
const filters = document.querySelector("[data-component='filters']");

const closeButton = document.querySelector("[data-filter-action='close']");

closeButton?.addEventListener('click', () => {
  const windowWidth = window.innerWidth;
  modal?.classList.remove('opened');
  inventory?.classList.remove('opened');
  filters?.classList.remove('opened');
  if (getMediaCssParsedVariable(MediaSizes.LG) > windowWidth) {
    modalToggle();
  }
});

trigger?.addEventListener('click', () => {
  console.log('click');

  const windowWidth = window.innerWidth;
  modal?.classList.add('opened');
  inventory?.classList.add('opened');
  filters?.classList.add('opened');
  if (getMediaCssParsedVariable(MediaSizes.LG) > windowWidth) {
    modalToggle();
  }
});

observeHeight(header, '--modal-header-height');
observeHeight(footer, '--modal-footer-height');
observeWidth(inventoryHeader, '--inventory-header-width');
overflowItems(document.querySelector("[data-component='filter-items']"))

const observeModal = () => {
  const windowWidth = window.innerWidth;

  if (wrapper && modal) {
    const isWrapperContains = wrapper.contains(modal);
    const isInventoryContains = inventoryHeader?.contains(modal);
    const isBodyContains = document.body.contains(modal);

    const mobileModal = () => {
      if (isWrapperContains || isInventoryContains) {
        document.body.append(modal);
      }
    };

    const desktopModal = () => {
      if (isWrapperContains || isBodyContains) {
        inventoryHeader?.append(modal);
      }
    };

    if (getMediaCssParsedVariable(MediaSizes.LG) > windowWidth) {
      mobileModal();
    } else {
      desktopModal();
    }
  }
};

observeModal();
window.addEventListener('resize', observeModal);
window.addEventListener('scroll', () => {
  setCssVariable('--scroll-y', `${window.scrollY}px`);
});
