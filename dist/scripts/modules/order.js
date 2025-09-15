const orderFooter = document.querySelector("[data-component='order-footer']");
observeHeight(orderFooter, '--order-footer-height');

const orderSlider = document.querySelector("[data-component='order-slider']");
if (orderSlider) {
  new Splide(orderSlider, { arrows: false, pagination: false, autoWidth: true, gap: 4 }).mount();
}
