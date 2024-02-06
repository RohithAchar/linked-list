/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");

class LinkedList {
  constructor() {
    this.headNode = null;
  }
  append(value) {
    if (this.headNode === null) {
      this.headNode = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
      return;
    }
    let currentNode = this.headNode;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
  }
  prepend(value) {
    if (this.headNode === null) {
      this.append(value);
      return;
    }
    let tempNode = this.headNode;
    this.headNode = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
    this.headNode.next = tempNode;
  }
  size() {
    let count = 0;
    let currentNode = this.headNode;
    while (currentNode.next !== null) {
      count += 1;
      currentNode = currentNode.next;
    }
    return count;
  }
  head() {
    return this.headNode;
  }
  tail() {
    if (this.headNode === null) return;
    let currentNode = this.headNode;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  at(index) {
    if (this.headNode === null) return;
    let currentNode = this.headNode;
    let currentIndex = 0;
    while (currentIndex !== index) {
      if (currentNode.next === null) return;
      currentNode = currentNode.next;
      currentIndex += 1;
    }
    return currentNode;
  }
  pop() {
    if (this.headNode === null) return;
    if (this.headNode.next === null) {
      let temp = this.headNode;
      this.headNode = null;
      return temp;
    }
    let previousNode = this.headNode;
    let nextNode = previousNode.next;
    while (nextNode.next !== null) {
      nextNode = nextNode.next;
      previousNode = previousNode.next;
    }
    previousNode.next = null;
    return nextNode;
  }
  contains(value) {
    if (this.headNode === null) return;
    let currentNode = this.headNode;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
  find(value) {
    if (this.headNode === null) return null;
    let currentIndex = 0;
    let currentNode = this.headNode;
    while (currentNode) {
      if (currentNode.value === value) return currentIndex;
      currentIndex += 1;
      currentNode = currentNode.next;
    }
    return null;
  }
  toString() {
    if (this.headNode === null) return;
    let string = '';
    let currentNode = this.headNode;
    while (currentNode) {
      string += `${currentNode.value} -> `;
      currentNode = currentNode.next;
    }
    return string + 'null';
  }
}

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList */ "./src/linkedList.js");

let list = new _linkedList__WEBPACK_IMPORTED_MODULE_0__["default"]();
list.append(10);
list.append(20);
list.append(30);
list.prepend(40);
console.log(list.toString());
})();

/******/ })()
;
//# sourceMappingURL=main.js.map