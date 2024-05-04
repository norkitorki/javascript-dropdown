function toggleExpanded(trigger) {
  const attrName = 'aria-expanded';
  const attrValue = trigger.getAttribute(attrName);

  trigger.setAttribute(attrName, attrValue === 'true' ? 'false' : 'true');
}

export function dropdown(
  menuNode,
  options = {
    click: false,
    focus: false,
    hover: false,
    retractAfterClick: false,
  }
) {
  const trigger = menuNode.querySelector('.trigger');
  const menu = menuNode.querySelector('.menu');

  const extendedClazz = 'menuExtended';

  trigger.setAttribute('aria-expanded', 'false');

  const handleMenuExtend = (
    addEvent,
    removeEvent,
    options = { toggle: false }
  ) => {
    if (options.toggle) {
      trigger.addEventListener(addEvent, (event) => {
        if (event.target === trigger) {
          menu.classList.toggle(extendedClazz);
          toggleExpanded(trigger);
        }
      });
    } else {
      trigger.addEventListener(addEvent, () => {
        menu.classList.add(extendedClazz);
        toggleExpanded(trigger);
      });

      trigger.addEventListener(removeEvent, () => {
        menu.classList.remove(extendedClazz);
        toggleExpanded(trigger);
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
