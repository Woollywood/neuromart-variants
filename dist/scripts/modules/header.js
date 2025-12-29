(() => {
  const header = document.querySelector("[data-component='header']");
  const logoWrapper = document.querySelector("[data-component='logo-wrapper']");
  observeHeight(header, '--header-height');
  observeHeight(logoWrapper, '--logo-wrapper-height');

  const overflow = () => {
    const items = header.querySelectorAll('[data-overflow]');

    if (window.innerWidth > MediaSizesValue.LG) {
      items.forEach(overflowItems);
    } else {
      items.forEach(unoverflowItems);
    }
  };

  setTimeout(() => {
    overflow();
  }, 0);
  window.addEventListener('resize', overflow);
  window.addEventListener('scroll', overflow);

  const checkMobileScroll = () => {
    if (window.scrollY >= 76) {
      logoWrapper?.classList.add('scrolled');
      header?.classList.add('transformed');
    } else {
      logoWrapper?.classList.remove('scrolled');
      header?.classList.remove('transformed');
    }
  };
  checkMobileScroll();
  window.addEventListener('scroll', checkMobileScroll);

  const checkHeaderScroll = () => {
    if (isScrolled()) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  checkHeaderScroll();
  window.addEventListener('scroll', checkHeaderScroll);
})();

(() => {
  const inputWrapper = document.querySelector("[data-component='header-input']");
  const input = inputWrapper?.querySelector('input');

  input?.addEventListener('blur', () => {
    if (!input.value.length) {
      inputWrapper?.classList.remove('active');
    }
  });

  inputWrapper?.addEventListener('click', () => {
    inputWrapper?.classList.add('active');
    input?.focus();
  });

  document.querySelectorAll('.input-header__tag').forEach((tag) =>
    tag.addEventListener('click', (e) => {
      e.stopPropagation();
    })
  );
})();

(() => {
  let isModalOpen = false;
  let isCategoriesOpen = false;

  let bodyScroll = 0;
  let isOpened = false;

  document.querySelector("[data-component='hamburger']").addEventListener('click', () => {
    if (isCategoriesOpen) {
      toggleCategories();
    } else {
      toggleHamburger();
    }
  });
  document.querySelectorAll('.header__category').forEach((category) =>
    category.addEventListener('click', () => {
      toggleCategories();
    })
  );

  const toggleModal = (cb) => {
    isOpened = !isOpened;
    if (isOpened) {
      bodyScroll = window.scrollY;
    }

    cb();

    if (isOpened) {
      window.scrollTo({ top: 0 });
    } else {
      window.scrollTo({ top: bodyScroll });
    }
  };

  const toggleHamburger = () =>
    toggleModal(() => {
      isModalOpen = !isModalOpen;
      document.querySelector("[data-component='header-modal']")?.classList.toggle('modal-open');
      document.querySelector("[data-layout-part='main']")?.classList.toggle('modal-open');
      document.querySelector("[data-component='header']")?.classList.toggle('modal-open');
      document.querySelector("[data-component='footer']")?.classList.toggle('modal-open');
    });

  const toggleCategories = () =>
    toggleModal(() => {
      isCategoriesOpen = !isCategoriesOpen;
      document.querySelector("[data-component='categories-modal']")?.classList.toggle('modal-open');
      document.querySelector("[data-layout-part='main']")?.classList.toggle('modal-open');
      document.querySelector("[data-component='header']")?.classList.toggle('modal-open');
      document.querySelector("[data-component='header']")?.classList.toggle('categories-open');
      document.querySelector("[data-component='footer']")?.classList.toggle('modal-open');
    });
})();

(() => {
  const getScrollPosition = () => {
    setCssVariable('--scroll-y', window.scrollY);
  };
  getScrollPosition();
  window.addEventListener('scroll', getScrollPosition);
})();

(() => {
  const cartButton = document.querySelector('[cart-button]');
  const cartModal = document.querySelector('[header-cart]');
  if (cartButton && cartModal) {
    cartButton.addEventListener('click', () => {
      if (cartModal.classList.contains('open')) {
        cartModal.classList.remove('open');
      } else {
        cartModal.classList.add('open');
      }
    });
  }
})();
