/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\nhtml body {\n  background: linear-gradient(to bottom, #56ccf2, #2f80ed);\n  font-family: sans-serif;\n  display: flex;\n  justify-content: flex-end;\n  font-family: \"Roboto\", sans-serif; }\n\n.bg-video {\n  position: absolute;\n  top: -10%;\n  left: -10%;\n  width: 120%;\n  height: 120%;\n  object-fit: cover;\n  z-index: -1;\n  filter: blur(15px); }\n\nmain {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  box-sizing: border-box;\n  padding: 40px; }\n  main .current {\n    width: 100%;\n    padding: 16px;\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px; }\n  main .main {\n    width: 100%;\n    display: none;\n    align-items: flex-start;\n    color: white;\n    flex-direction: column; }\n    main .main--visible {\n      display: flex; }\n    main .main-icon {\n      position: absolute;\n      width: 320px;\n      filter: blur(3px);\n      z-index: -1;\n      top: 0;\n      left: 0;\n      opacity: 0.5; }\n    main .main-temp > div {\n      display: flex;\n      gap: 24px; }\n      main .main-temp > div .main-temp-time {\n        font-size: 18px; }\n      main .main-temp > div .main-temp-label {\n        font-size: 12px;\n        margin-top: 14px;\n        display: block; }\n    main .main-temp-current {\n      font-size: 130px;\n      letter-spacing: -12px; }\n    main .main-info {\n      display: flex;\n      gap: 40px;\n      align-items: flex-end; }\n      main .main-info-city {\n        font-size: 60px;\n        margin-left: 30px; }\n      main .main-info-weather {\n        font-size: 20px;\n        margin-bottom: 6px; }\n    main .main-wind {\n      display: flex;\n      align-items: center;\n      position: relative; }\n      main .main-wind img {\n        width: 16px;\n        margin-left: 10px;\n        top: 0;\n        right: -24px; }\n      main .main-wind span {\n        font-size: 18px; }\n  main .forecast {\n    margin-top: 40px;\n    display: flex;\n    gap: 10px; }\n    main .forecast-item {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      border-radius: 8px;\n      background: rgba(0, 0, 0, 0.1);\n      padding: 10px; }\n\naside {\n  flex-shrink: 0;\n  width: 400px;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 20px;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 10px;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column; }\n\n.toast {\n  position: absolute;\n  top: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #d83232;\n  color: #ffffff;\n  border-radius: 4px;\n  padding: 5px 30px;\n  opacity: 0; }\n  .toast p {\n    margin: 0; }\n  .toast.visible {\n    animation: showToast 2.5s forwards; }\n\n.inputWrapper {\n  width: 100%;\n  display: flex;\n  gap: 16px; }\n  .inputWrapper .input {\n    border: 0;\n    padding: 4px 8px;\n    background: transparent;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n    width: 100%;\n    color: white; }\n    .inputWrapper .input::placeholder {\n      color: rgba(255, 255, 255, 0.8); }\n  .inputWrapper .button {\n    border: 0;\n    padding: 4px 8px;\n    border-radius: 15px;\n    background: rgba(255, 255, 255, 0.1);\n    position: relative;\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    flex-shrink: 0; }\n    .inputWrapper .button:after, .inputWrapper .button:before {\n      content: \"\";\n      display: block;\n      background-color: white;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%); }\n    .inputWrapper .button:before {\n      height: 14px;\n      width: 2px; }\n    .inputWrapper .button:after {\n      height: 2px;\n      width: 14px; }\n    .inputWrapper .button:disabled {\n      background: none; }\n      .inputWrapper .button:disabled:after, .inputWrapper .button:disabled:before {\n        background: rgba(255, 255, 255, 0.5); }\n\n.city-list {\n  list-style: none;\n  margin-top: 20px;\n  overflow: auto;\n  height: 100%; }\n  .city-list > li {\n    display: flex;\n    align-items: center;\n    gap: 4px; }\n  .city-list-item {\n    padding: 10px 8px;\n    background: none;\n    border: 0;\n    width: 100%;\n    color: inherit;\n    text-align: left;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: background-color 0.2s; }\n    .city-list-item:hover {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .city-list-item:focus {\n      outline: 0;\n      box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3); }\n    .city-list-item > div {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n      .city-list-item > div > div {\n        display: flex;\n        flex-direction: column;\n        gap: 5px; }\n        .city-list-item > div > div > p {\n          font-size: 2em; }\n    .city-list-item-removeBtn {\n      border: 0;\n      padding: 4px 8px;\n      border-radius: 15px;\n      position: relative;\n      width: 20px;\n      height: 20px;\n      padding: 0;\n      flex-shrink: 0;\n      cursor: pointer;\n      background: transparent;\n      transition: background 0.2s; }\n      .city-list-item-removeBtn:hover {\n        background-color: rgba(216, 50, 50, 0.8); }\n      .city-list-item-removeBtn:after, .city-list-item-removeBtn:before {\n        content: \"\";\n        display: block;\n        background-color: white;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%) rotate(45deg); }\n      .city-list-item-removeBtn:before {\n        height: 10px;\n        width: 2px; }\n      .city-list-item-removeBtn:after {\n        height: 2px;\n        width: 10px; }\n\n@keyframes showToast {\n  0% {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-100%); }\n  20% {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0); }\n  80% {\n    opacity: 1; }\n  99% {\n    opacity: 0;\n    display: block; }\n  100% {\n    display: none; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
const apiCaller_1 = __webpack_require__(/*! ./apiCaller */ "./src/apiCaller.ts");
const date_utils_1 = __webpack_require__(/*! ./date-utils */ "./src/date-utils.ts");
var LIST_ELEMTNS;
(function (LIST_ELEMTNS) {
    LIST_ELEMTNS["name"] = "name";
    LIST_ELEMTNS["temp"] = "temp";
    LIST_ELEMTNS["pressure"] = "press";
    LIST_ELEMTNS["icon"] = "icon";
})(LIST_ELEMTNS || (LIST_ELEMTNS = {}));
var WEATHER_TYPES;
(function (WEATHER_TYPES) {
    WEATHER_TYPES["thunderstorm"] = "2";
    WEATHER_TYPES["drizzle"] = "3";
    WEATHER_TYPES["rain"] = "5";
    WEATHER_TYPES["snow"] = "6";
    WEATHER_TYPES["atmosphere"] = "7";
    WEATHER_TYPES["clear"] = "8";
})(WEATHER_TYPES || (WEATHER_TYPES = {}));
class UI {
    constructor(main) {
        this.mainContext = main;
    }
    showApiError() {
        const toastEl = document.getElementById('errorToast');
        toastEl.classList.add('visible');
        toastEl.addEventListener("animationend", function handler(e) {
            toastEl.classList.remove('visible');
            e.currentTarget.removeEventListener(e.type, handler);
        });
    }
    renderMainView(forecastData, activeCity) {
        if (forecastData) {
            document.getElementById('main').classList.add('main--visible');
            this.switchTheme(activeCity.weather[0].id);
            this.renderForecast(forecastData);
            document.getElementById('mainCity').innerHTML = activeCity.name;
            document.getElementById('mainWeather').innerHTML = activeCity.weather[0].description;
            document.getElementById('mainTime').innerHTML = date_utils_1.getDay(activeCity.dt, activeCity.timezone);
            const iconEl = document.getElementById("mainIcon");
            iconEl.src = `http://openweathermap.org/img/wn/${activeCity.weather[0].icon}@2x.png`;
            iconEl.alt = activeCity.weather[0].description;
            iconEl.title = activeCity.weather[0].description;
            document.getElementById('mainTemp').innerHTML = `${activeCity.main.temp.toFixed(1)}°C`;
            document.getElementById('mainTempFeels').innerHTML = `${activeCity.main.feels_like}°C`;
            document.getElementById('mainWindSpeed').innerHTML = `${activeCity.wind.speed}m/s`;
            document.getElementById('mainWindIcon').style.transform = `rotate(${activeCity.wind.deg}deg)`;
        }
    }
    renderForecast(forecastData) {
        const dailyData = forecastData.daily.slice(1);
        const wrapper = document.getElementById('forecast');
        wrapper.innerHTML = null;
        dailyData.forEach((data, index) => {
            const item = document.createElement('li');
            item.className = "forecast-item";
            const itemDate = document.createElement('p');
            itemDate.innerText = index === 0 ? 'tomorrow' : date_utils_1.getDay(data.dt, forecastData.timezone_offset);
            const itemIcon = document.createElement('img');
            itemIcon.innerText = date_utils_1.getDay(data.dt, forecastData.timezone_offset);
            itemIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            itemIcon.alt = data.weather[0].description;
            itemIcon.title = data.weather[0].description;
            const itemTemp = document.createElement('p');
            itemTemp.innerText = `${data.temp.min.toFixed(1)}°C / ${data.temp.max.toFixed(1)}°C`;
            item.appendChild(itemDate);
            item.appendChild(itemIcon);
            item.appendChild(itemTemp);
            wrapper.appendChild(item);
        });
    }
    switchTheme(weatherId) {
        const firstNumber = String(weatherId)[0];
        const video = document.getElementById('bgVideo');
        let videoSrc;
        switch (firstNumber) {
            case WEATHER_TYPES.thunderstorm:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/044/582/original/dark-forest.mp4';
                break;
            case WEATHER_TYPES.drizzle:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/044/767/original/P1140828.mp4';
                break;
            case WEATHER_TYPES.rain:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/049/047/original/panning-and-close-up-to-rain-drop-on-the-glass-of-window.mp4';
                break;
            case WEATHER_TYPES.snow:
                videoSrc = 'https://cdn.videvo.net/videvo_files/video/free/2015-09/small_watermarked/Slow_Snow_Seg_Comp_Flakes_preview.webm';
                break;
            case WEATHER_TYPES.atmosphere:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/034/069/original/Mountain-rain5.mp4';
                break;
            case WEATHER_TYPES.clear:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/039/466/original/58_28_08_19.mp4';
                break;
            default:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/039/466/original/58_28_08_19.mp4';
                break;
        }
        if (weatherId > 800)
            videoSrc = 'https://cdn.videvo.net/videvo_files/video/free/2020-07/small_watermarked/06_1596083776_preview.webm';
        video.src = videoSrc;
    }
    removeCity(id) {
        const allCities = JSON.parse(localStorage.getItem(apiCaller_1.DATA_KEY));
        if (allCities && id) {
            const filterdCities = allCities.filter((v) => v.id !== id);
            localStorage.setItem(apiCaller_1.DATA_KEY, JSON.stringify(filterdCities));
            this.renderWeatherList(filterdCities, true);
        }
    }
    populateListElement(element, weatherData) {
        const parentId = element.id;
        const iconEl = document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.icon}`);
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.alt = weatherData.weather[0].description;
        iconEl.title = weatherData.weather[0].description;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.name}`).innerHTML = weatherData.name;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.pressure}`).innerHTML = `${weatherData.main.pressure} hPA`;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.temp}`).innerHTML = `${weatherData.main.temp.toFixed(1)}°C`;
        return element;
    }
    renderWeatherElement(weatherData, elementId) {
        const wrapper = document.getElementById('cityList');
        const element = document.createElement('li');
        element.id = elementId;
        const elementBtn = document.createElement('button');
        const elementBtnContainer = document.createElement('div');
        const elementBtnContainerChild = document.createElement('div');
        elementBtn.className = "city-list-item";
        const nameEl = document.createElement('p');
        nameEl.id = `${elementId}_${LIST_ELEMTNS.name}`;
        elementBtnContainerChild.appendChild(nameEl);
        const tempEl = document.createElement('span');
        tempEl.id = `${elementId}_${LIST_ELEMTNS.temp}`;
        elementBtnContainerChild.appendChild(tempEl);
        const pressEl = document.createElement('span');
        pressEl.id = `${elementId}_${LIST_ELEMTNS.pressure}`;
        elementBtnContainerChild.appendChild(pressEl);
        const iconEl = document.createElement('img');
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.id = `${elementId}_${LIST_ELEMTNS.icon}`;
        const removeBtnEl = document.createElement('button');
        removeBtnEl.className = "city-list-item-removeBtn";
        removeBtnEl.addEventListener('click', (e) => this.removeCity(weatherData.id));
        elementBtn.addEventListener('click', () => {
            this.mainContext.changeActiveCity(weatherData.id);
        });
        elementBtnContainer.appendChild(elementBtnContainerChild);
        elementBtnContainer.appendChild(iconEl);
        elementBtn.appendChild(elementBtnContainer);
        element.appendChild(elementBtn);
        element.appendChild(removeBtnEl);
        wrapper.appendChild(element);
        this.populateListElement(element, weatherData);
    }
    renderWeatherList(weatherData, force = false) {
        if (force) {
            const wrapper = document.getElementById('cityList');
            wrapper.innerHTML = null;
        }
        weatherData.forEach((data) => {
            const elementId = `listEl_${data.id}`;
            const element = document.getElementById(elementId);
            if (element)
                this.populateListElement(element, data);
            else
                this.renderWeatherElement(data, elementId);
        });
    }
}
exports.UI = UI;


/***/ }),

/***/ "./src/apiCaller.ts":
/*!**************************!*\
  !*** ./src/apiCaller.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATA_KEY = "weather_data";
const API_KEY = "cbeeb4917456a9dc5bef570967628521";
class ApiCaller {
    constructor() {
        this.callData();
    }
    callData(city) {
        return __awaiter(this, void 0, void 0, function* () {
            if (city) {
                const weather = yield this.getWeatherData(city);
                if (weather && weather.cod === 200) {
                    this.saveData(weather);
                }
                return weather.cod;
            }
        });
    }
    refreshData() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const currentCities = ((_a = JSON.parse(localStorage.getItem(exports.DATA_KEY))) === null || _a === void 0 ? void 0 : _a.map(v => v.name)) || [];
            const newCities = Promise.all(currentCities.map((city) => __awaiter(this, void 0, void 0, function* () {
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
                const weatherResp = yield fetch(apiURL);
                const weatherData = yield weatherResp.json();
                this.saveData(weatherData);
                return weatherData;
            })));
            return newCities;
        });
    }
    getWeatherData(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            const weatherResp = yield fetch(apiURL);
            const weatherData = yield weatherResp.json();
            return weatherData;
        });
    }
    getForecastData(lat, long) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${API_KEY}&units=metric`;
            const forecastResp = yield fetch(apiURL);
            const forecastData = yield forecastResp.json();
            forecastData.daily = forecastData.daily.slice(0, 6);
            return forecastData;
        });
    }
    saveData(data) {
        const currentData = this.getData();
        const indexInLS = currentData.findIndex((val) => val.id === data.id);
        if (indexInLS !== -1) {
            currentData[indexInLS] = data;
            localStorage.setItem(exports.DATA_KEY, JSON.stringify(currentData));
            return;
        }
        localStorage.setItem(exports.DATA_KEY, JSON.stringify([...currentData, data]));
    }
    getData() {
        const data = localStorage.getItem(exports.DATA_KEY);
        if (data)
            return JSON.parse(data);
        return [];
    }
}
exports.ApiCaller = ApiCaller;


/***/ }),

/***/ "./src/date-utils.ts":
/*!***************************!*\
  !*** ./src/date-utils.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getDay(dt, timezoneOffset) {
    const date = new Date((dt + timezoneOffset) * 1000);
    const stringDate = date.toLocaleDateString();
    return stringDate;
}
exports.getDay = getDay;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
const apiCaller_1 = __webpack_require__(/*! ./apiCaller */ "./src/apiCaller.ts");
const UI_1 = __webpack_require__(/*! ./UI */ "./src/UI.ts");
const ACTIVE_CITY_KEY = "active_city";
class Main {
    constructor() {
        this.activeCity = Number(localStorage.getItem(ACTIVE_CITY_KEY));
        this.apiCaller = new apiCaller_1.ApiCaller();
        this.UI = new UI_1.UI(this);
        this.weatherData = this.apiCaller.getData();
        this.setActiveCity();
        this.initRefresher();
        this.bindInputEvents();
        this.UI.renderWeatherList(this.weatherData);
    }
    initRefresher() {
        setInterval(() => {
            this.apiCaller.refreshData().then(currentData => {
                this.weatherData = currentData;
                this.UI.renderWeatherList(this.weatherData);
            });
            if (this.activeCity) {
                this.setActiveCity();
            }
        }, 60000);
    }
    bindInputEvents() {
        const weatherForm = document.getElementById('weatherForm');
        const cityButton = document.getElementById('cityButton');
        const cityInput = document.getElementById('cityInput');
        weatherForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.apiCaller.callData(cityInput.value).then((code) => {
                if (Number(code) !== 200) {
                    this.UI.showApiError();
                }
                this.weatherData = this.apiCaller.getData();
                this.UI.renderWeatherList(this.weatherData);
            });
            cityInput.value = '';
            cityButton.disabled = true;
        });
        cityInput.addEventListener('input', (event) => {
            if (event.target.value.length > 0)
                cityButton.disabled = false;
            else
                cityButton.disabled = true;
        });
    }
    setActiveCity() {
        const activeCity = this.weatherData.find(city => city.id === this.activeCity);
        if (activeCity) {
            this.apiCaller.getForecastData(activeCity.coord.lat, activeCity.coord.lon).then(activeForecast => {
                this.activeCityData = activeForecast;
                this.UI.renderMainView(this.activeCityData, activeCity);
            });
        }
    }
    changeActiveCity(index) {
        this.activeCity = index;
        localStorage.setItem(ACTIVE_CITY_KEY, String(index));
        this.setActiveCity();
    }
}
exports.Main = Main;
new Main();


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
