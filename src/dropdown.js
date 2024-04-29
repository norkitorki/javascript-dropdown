export function dropdown(
  menuNode,
  type = { click: false, focus: false, hover: false }
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
      trigger.addEventListener(addEvent, () => {
        menu.classList.toggle(extendedClazz);
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

  if (type.click) {
    handleMenuExtend('click', null, { toggle: true });
  }

  if (type.focus) {
    handleMenuExtend('focusin', 'focusout');
  }

  if (type.hover) {
    handleMenuExtend('mouseover', 'mouseleave');
  }
}
