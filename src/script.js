import { dropdown } from './dropdown';

const clickableMenu = document.querySelector('.dropdownMenuClick');
const focusableMenu = document.querySelector('.dropdownMenuFocus');
const hoverableMenu = document.querySelector('.dropdownMenuHover');

dropdown(clickableMenu, { click: true, retractAfterClick: true });
dropdown(focusableMenu, { focus: true, hover: true, retractAfterClick: true });
dropdown(hoverableMenu, { click: true, hover: true });
