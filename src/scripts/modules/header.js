(() => {
  const header = document.querySelector("[data-component='header']");
  const logoWrapper = document.querySelector("[data-component='logo-wrapper']");
  observeHeight(header, '--header-height');
  observeHeight(logoWrapper, '--logo-wrapper-height');
  document.querySelectorAll("[data-component='header-categories']").forEach(overflowItems);

  const checkMobileScroll = () => {
    if (window.scrollY >= 76) {
      logoWrapper.classList.add('scrolled');
      header.classList.add('transformed')
    } else {
      logoWrapper.classList.remove('scrolled');
      header.classList.remove('transformed')
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
  document.querySelectorAll("[data-component='hamburger']").forEach((item) => {
    let bodyScroll = 0;
    let isOpened = false;

    item.querySelectorAll('[data-hamburger-button]').forEach((button) => {
      button.addEventListener('click', () => {
        isOpened = !isOpened;
        if (isOpened) {
          bodyScroll = window.scrollY;
        }

        document.querySelector("[data-component='header-modal']")?.classList.toggle('modal-open');
        document.querySelector("[data-layout-part='main']")?.classList.toggle('modal-open');
        document.querySelector("[data-component='header']")?.classList.toggle('modal-open');
        document.querySelector("[data-component='footer']")?.classList.toggle('modal-open');

        if (isOpened) {
          window.scrollTo({ top: 0 });
        } else {
          window.scrollTo({ top: bodyScroll });
        }
      });
    });
  });
})();

(() => {
  const getScrollPosition = () => {
    setCssVariable('--scroll-y', window.scrollY);
  };
  getScrollPosition();
  window.addEventListener('scroll', getScrollPosition);
})();
