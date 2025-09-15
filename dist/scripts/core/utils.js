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
  if (!target) {
    return;
  }

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
  scrollLock();
  document.body.classList.toggle('modal-opened');
};

const isScrolled = () => window.scrollY > 0;

const overflowItems = (container) => {
  if (!container) {
    return;
  }

  const clear = (items) =>
    items.forEach((item) => {
      item.classList.remove('overflowed');
      item.style.display = '';
    });

  const items = container.querySelectorAll('[data-overflow-element]');
  clear([...items]);
  const containerBox = container.getBoundingClientRect();

  const overflowItemsInner = () => {
    const visibleItems = [...container.querySelectorAll('[data-overflow-element]')].filter(
      (item) => !item.classList.contains('overflowed')
    );
    const lastVisibleItem = visibleItems[visibleItems.length - 1];
    const lastVisibleItemBox = lastVisibleItem.getBoundingClientRect();
    const lastVisibleItemWidth = lastVisibleItemBox.right - containerBox.left;
    if (lastVisibleItemWidth > containerBox.width) {
      lastVisibleItem.classList.add('overflowed');
      lastVisibleItem.style.display = 'none';
      overflowItemsInner();
    } else {
      return;
    }
  };

  const lastItemBox = items[items.length - 1].getBoundingClientRect();
  const itemsWidth = lastItemBox.right - containerBox.left;
  if (itemsWidth > containerBox.width) {
    overflowItemsInner();
  }
};
