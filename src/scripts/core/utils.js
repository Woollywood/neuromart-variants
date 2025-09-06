const MediaSizesValue = {
  SM: 375,
  MD: 768,
  LG: 1180,
  XL: 1440,
  XXL: 1920,
};

const MediaSizes = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  XXL: 'xxl',
};

const setCssVariable = (name, value) => document.documentElement.style.setProperty(name, value);
const getCssVariable = (name) => getComputedStyle(document.body).getPropertyValue(name);

const getMediaCssVariable = (size) => getCssVariable(`--media-${size}`);
const getMediaCssParsedVariable = (size) => parseInt(getMediaCssVariable(size));

const observeElement = (target, variable, cb) => {
  const setCssObservableVariable = () => {
    setCssVariable(variable, `${cb(target)}px`);
  };

  setCssObservableVariable();
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === target) {
        setCssObservableVariable();
      }
    }
  });
  resizeObserver.observe(target);
};

const observeHeight = (target, heightVariable) =>
  observeElement(target, heightVariable, (target) => target.clientHeight);

const observeWidth = (target, heightVariable) => observeElement(target, heightVariable, (target) => target.clientWidth);

const scrollLock = () => document.body.classList.toggle('scroll-lock');

const modalToggle = () => {
  modalToggle();
  document.body.classList.toggle('modal-opened');
};
