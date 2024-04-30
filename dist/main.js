/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dropdown: () => (/* binding */ dropdown)\n/* harmony export */ });\nfunction dropdown(\n  menuNode,\n  options = {\n    click: false,\n    focus: false,\n    hover: false,\n    retractAfterClick: false,\n  },\n) {\n  const trigger = menuNode.querySelector('.trigger');\n  const menu = menuNode.querySelector('.menu');\n\n  const extendedClazz = 'menuExtended';\n\n  const handleMenuExtend = (\n    addEvent,\n    removeEvent,\n    options = { toggle: false }\n  ) => {\n    if (options.toggle) {\n      trigger.addEventListener(addEvent, (event) => {\n        if (event.target === trigger) {\n          menu.classList.toggle(extendedClazz);\n        }\n      });\n    } else {\n      trigger.addEventListener(addEvent, () => {\n        menu.classList.add(extendedClazz);\n      });\n\n      trigger.addEventListener(removeEvent, () => {\n        menu.classList.remove(extendedClazz);\n      });\n    }\n  };\n\n  if (options.retractAfterClick) {\n    Array.from(menu.children).forEach((item) => {\n      item.addEventListener('click', (event) => {\n        menu.classList.remove(extendedClazz);\n      });\n    });\n  }\n\n  if (options.click) {\n    handleMenuExtend('click', null, { toggle: true });\n  }\n\n  if (options.focus) {\n    handleMenuExtend('focusin', 'focusout');\n  }\n\n  if (options.hover) {\n    handleMenuExtend('mouseenter', 'mouseleave');\n  }\n}\n\n\n//# sourceURL=webpack://dropdown-menu/./src/dropdown.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ \"./src/dropdown.js\");\n\n\nconst clickableMenu = document.querySelector('.dropdownMenuClick');\nconst focusableMenu = document.querySelector('.dropdownMenuFocus');\nconst hoverableMenu = document.querySelector('.dropdownMenuHover');\n\n(0,_dropdown__WEBPACK_IMPORTED_MODULE_0__.dropdown)(clickableMenu, { click: true, retractAfterClick: true });\n(0,_dropdown__WEBPACK_IMPORTED_MODULE_0__.dropdown)(focusableMenu, { focus: true, hover: true, retractAfterClick: true });\n(0,_dropdown__WEBPACK_IMPORTED_MODULE_0__.dropdown)(hoverableMenu, { click: true, hover: true });\n\n\n//# sourceURL=webpack://dropdown-menu/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;