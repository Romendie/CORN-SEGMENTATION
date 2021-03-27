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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"icon\", function() { return icon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"noAuto\", function() { return noAuto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toHtml\", function() { return toHtml; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"layer\", function() { return layer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"text\", function() { return text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"counter\", function() { return counter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"library\", function() { return library; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dom\", function() { return dom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parse\", function() { return parse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIconDefinition\", function() { return findIconDefinition; });\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function (obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function (obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      _defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nfunction _slicedToArray(arr, i) {\n  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\n\nfunction _toConsumableArray(arr) {\n  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];\n\n    return arr2;\n  }\n}\n\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nfunction _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nfunction _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nvar noop = function noop() {};\n\nvar _WINDOW = {};\nvar _DOCUMENT = {};\nvar _MUTATION_OBSERVER = null;\nvar _PERFORMANCE = {\n  mark: noop,\n  measure: noop\n};\n\ntry {\n  if (typeof window !== 'undefined') _WINDOW = window;\n  if (typeof document !== 'undefined') _DOCUMENT = document;\n  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;\n  if (typeof performance !== 'undefined') _PERFORMANCE = performance;\n} catch (e) {}\n\nvar _ref = _WINDOW.navigator || {},\n    _ref$userAgent = _ref.userAgent,\n    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;\n\nvar WINDOW = _WINDOW;\nvar DOCUMENT = _DOCUMENT;\nvar MUTATION_OBSERVER = _MUTATION_OBSERVER;\nvar PERFORMANCE = _PERFORMANCE;\nvar IS_BROWSER = !!WINDOW.document;\nvar IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';\nvar IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');\n\nvar NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';\nvar UNITS_IN_GRID = 16;\nvar DEFAULT_FAMILY_PREFIX = 'fa';\nvar DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';\nvar DATA_FA_I2SVG = 'data-fa-i2svg';\nvar DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';\nvar DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';\nvar DATA_PREFIX = 'data-prefix';\nvar DATA_ICON = 'data-icon';\nvar HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';\nvar MUTATION_APPROACH_ASYNC = 'async';\nvar TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];\nvar PRODUCTION = function () {\n  try {\n    return \"development\" === 'production';\n  } catch (e) {\n    return false;\n  }\n}();\nvar PREFIX_TO_STYLE = {\n  'fas': 'solid',\n  'far': 'regular',\n  'fal': 'light',\n  'fad': 'duotone',\n  'fab': 'brands',\n  'fa': 'solid'\n};\nvar STYLE_TO_PREFIX = {\n  'solid': 'fas',\n  'regular': 'far',\n  'light': 'fal',\n  'duotone': 'fad',\n  'brands': 'fab'\n};\nvar LAYERS_TEXT_CLASSNAME = 'fa-layers-text';\nvar FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/;\nvar FONT_WEIGHT_TO_PREFIX = {\n  '900': 'fas',\n  '400': 'far',\n  'normal': 'far',\n  '300': 'fal'\n};\nvar oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nvar oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);\nvar ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];\nvar DUOTONE_CLASSES = {\n  GROUP: 'group',\n  SWAP_OPACITY: 'swap-opacity',\n  PRIMARY: 'primary',\n  SECONDARY: 'secondary'\n};\nvar RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {\n  return \"\".concat(n, \"x\");\n})).concat(oneToTwenty.map(function (n) {\n  return \"w-\".concat(n);\n}));\n\nvar initial = WINDOW.FontAwesomeConfig || {};\n\nfunction getAttrConfig(attr) {\n  var element = DOCUMENT.querySelector('script[' + attr + ']');\n\n  if (element) {\n    return element.getAttribute(attr);\n  }\n}\n\nfunction coerce(val) {\n  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value\n  // We'll assume that this is an indication that it should be toggled to true\n  // For example <script data-search-pseudo-elements src=\"...\"></script>\n  if (val === '') return true;\n  if (val === 'false') return false;\n  if (val === 'true') return true;\n  return val;\n}\n\nif (DOCUMENT && typeof DOCUMENT.querySelector === 'fu