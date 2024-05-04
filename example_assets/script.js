const dropdownClick = document.querySelector('.dropdownMenuClick');
const dropdownFocus = document.querySelector('.dropdownMenuFocus');
const dropdownHover = document.querySelector('.dropdownMenuHover');

dropdown(dropdownClick, { click: true, retractAfterClick: true });
dropdown(dropdownFocus, { focus: true, hover: true });
dropdown(dropdownHover, { click: true, hover: true, retractAfterClick: true });
