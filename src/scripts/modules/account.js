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
  new Splide(slider, {
    pagination: false,
    arrows: false,
    gap: 4,
    autoWidth: true,
  }).mount();
}
