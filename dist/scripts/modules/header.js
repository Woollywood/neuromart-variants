(() => {
  const megaMenuItems = document.querySelectorAll('[mega-menu-trigger]');
  const megaMenu = document.querySelector('[mega-menu]');
  const otherSection = document.querySelector('[data-layout-part="main"]');
  if (megaMenu && megaMenuItems && !!megaMenuItems.length) {
    const resetItemsStyles = () => {
      for (const item of megaMenuItems) {
        item.classList.remove('open');
      }
    };
    const hide = () => {
      megaMenu.classList.remove('open');
      resetItemsStyles();
    };
    const show = (item) => {
      megaMenu.classList.add('open');
      resetItemsStyles();
      item.classList.add('open');
    };

    const toggle = (item) => {
      if (megaMenu.classList.contains('open')) {
        hide();
      } else {
        show(item);
      }
    };

    for (const item of megaMenuItems) {
      item.addEventListener('mouseenter', () => {
        if (window.innerWidth >= MediaSizesValue.MD) {
          show(item);
        }
      });
      item.addEventListener('click', () => {
        if (window.innerWidth < MediaSizesValue.MD) {
          if (item.classList.contains('open')) {
            toggle(item);
          } else {
            show(item);
          }
        }
      });
    }
    otherSection.addEventListener('mouseenter', () => {
      hide();
    });
  }
})();

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
  // document.querySelectorAll('.header__category').forEach((category) =>
  //   category.addEventListener('click', () => {
  //     toggleCategories();
  //   })
  // );

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
