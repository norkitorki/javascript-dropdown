export function dropdown(
  menuNode,
  options = {
    click: false,
    focus: false,
    hover: false,
    retractAfterClick: false,
  },
) {
  const trigger = menuNode.querySelector('.trigger');
  const menu = menuNode.querySelector('.menu');

  const extendedClazz = 'menuExtended';

  const handleMenuExtend = (
    addEvent,
    removeEvent,
    options = { toggle: false }
  ) => {
    if (options.toggle) {
      trigger.addEventListener(addEvent, (event) => {
        if (event.target === trigger) {
          menu.classList.toggle(extendedClazz);
        }
      });
    } else {
      trigger.addEventListener(addEvent, () => {
        menu.classList.add(extendedClazz);
      });

      trigger.addEventListener(removeEvent, () => {
        menu.classList.remove(extendedClazz);
      });
    }
  };

  if (options.retractAfterClick) {
    Array.from(menu.children).forEach((item) => {
      item.addEventListener('click', () => {
        menu.classList.remove(extendedClazz);
      });
    });
  }

  if (options.click) {
    handleMenuExtend('click', null, { toggle: true });
  }

  if (options.focus) {
    handleMenuExtend('focusin', 'focusout');
  }

  if (options.hover) {
    handleMenuExtend('mouseenter', 'mouseleave');
  }
}
