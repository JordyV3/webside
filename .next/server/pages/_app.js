module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/ga.js":
/*!*******************!*\
  !*** ./lib/ga.js ***!
  \*******************/
/*! exports provided: pageView, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageView\", function() { return pageView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"event\", function() { return event; });\n// log the pageview with their URL\nconst pageView = url => {\n  window.gtag(\"config\", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {\n    page_path: url\n  });\n}; // log specific events happening.\n\nconst event = ({\n  action,\n  params\n}) => {\n  window.gtag(\"event\", action, params);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ2EuanM/ZDBlZCJdLCJuYW1lcyI6WyJwYWdlVmlldyIsInVybCIsIndpbmRvdyIsImd0YWciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUyIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU1BLFFBQVEsR0FBSUMsR0FBRCxJQUFTO0FBQy9CQyxRQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaLEVBQXNCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsNEJBQWxDLEVBQWdFO0FBQzlEQyxhQUFTLEVBQUVOO0FBRG1ELEdBQWhFO0FBR0QsQ0FKTSxDLENBTVA7O0FBQ08sTUFBTU8sS0FBSyxHQUFHLENBQUM7QUFBRUMsUUFBRjtBQUFVQztBQUFWLENBQUQsS0FBd0I7QUFDM0NSLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVosRUFBcUJNLE1BQXJCLEVBQTZCQyxNQUE3QjtBQUNELENBRk0iLCJmaWxlIjoiLi9saWIvZ2EuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2cgdGhlIHBhZ2V2aWV3IHdpdGggdGhlaXIgVVJMXG5leHBvcnQgY29uc3QgcGFnZVZpZXcgPSAodXJsKSA9PiB7XG4gIHdpbmRvdy5ndGFnKFwiY29uZmlnXCIsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MsIHtcbiAgICBwYWdlX3BhdGg6IHVybCxcbiAgfSk7XG59O1xuXG4vLyBsb2cgc3BlY2lmaWMgZXZlbnRzIGhhcHBlbmluZy5cbmV4cG9ydCBjb25zdCBldmVudCA9ICh7IGFjdGlvbiwgcGFyYW1zIH0pID0+IHtcbiAgd2luZG93Lmd0YWcoXCJldmVudFwiLCBhY3Rpb24sIHBhcmFtcyk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/ga.js\n");

/***/ }),

/***/ "./node_modules/@fontsource/poppins/300.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/poppins/300.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZm9udHNvdXJjZS9wb3BwaW5zLzMwMC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@fontsource/poppins/300.css\n");

/***/ }),

/***/ "./node_modules/@fontsource/poppins/400.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/poppins/400.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZm9udHNvdXJjZS9wb3BwaW5zLzQwMC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@fontsource/poppins/400.css\n");

/***/ }),

/***/ "./node_modules/@fontsource/poppins/500.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/poppins/500.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZm9udHNvdXJjZS9wb3BwaW5zLzUwMC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@fontsource/poppins/500.css\n");

/***/ }),

/***/ "./node_modules/@fontsource/poppins/700.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/poppins/700.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZm9udHNvdXJjZS9wb3BwaW5zLzcwMC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@fontsource/poppins/700.css\n");

/***/ }),

/***/ "./node_modules/@fontsource/roboto/400.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/400.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZm9udHNvdXJjZS9yb2JvdG8vNDAwLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@fontsource/roboto/400.css\n");

/***/ }),

/***/ "./node_modules/@fontsource/roboto/500.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/500.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZm9udHNvdXJjZS9yb2JvdG8vNTAwLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@fontsource/roboto/500.css\n");

/***/ }),

/***/ "./node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}).SENTRY_RELEASE={id:\"development\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS93ZWJwYWNrLXBsdWdpbi9zcmMvc2VudHJ5LXdlYnBhY2subW9kdWxlLmpzP2UyOTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEhBQTBILGtCQUFrQiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3dlYnBhY2stcGx1Z2luL3NyYy9zZW50cnktd2VicGFjay5tb2R1bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fSkuU0VOVFJZX1JFTEVBU0U9e2lkOlwiZGV2ZWxvcG1lbnRcIn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/ga */ \"./lib/ga.js\");\n/* harmony import */ var _styles_prism_night_owl_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/prism-night-owl.css */ \"./styles/prism-night-owl.css\");\n/* harmony import */ var _styles_prism_night_owl_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_prism_night_owl_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/fonts */ \"./styles/fonts.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/theme */ \"./styles/theme.js\");\n\nvar _jsxFileName = \"/Users/jordy/Documents/GitHub/webside/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps,\n  err\n}) {\n  if (false) {}\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const handleRouteChange = url => {\n      _lib_ga__WEBPACK_IMPORTED_MODULE_3__[\"pageView\"](url);\n    };\n\n    router.events.on(\"routeChangeComplete\", handleRouteChange);\n    return () => {\n      router.events.off(\"routeChangeComplete\", handleRouteChange);\n    };\n  }, [router.events]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"ThemeProvider\"], {\n    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n      err: err\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJlcnIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImdhIiwiZXZlbnRzIiwib24iLCJvZmYiLCJ0aGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDLFdBQWI7QUFBd0JDO0FBQXhCLENBQWYsRUFBOEM7QUFDNUMsTUFBSSxLQUFKLEVBQW1FLEVBSWxFOztBQUVELFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsaUJBQWlCLEdBQUlDLEdBQUQsSUFBUztBQUNqQ0Msc0RBQUEsQ0FBWUQsR0FBWjtBQUNELEtBRkQ7O0FBSUFKLFVBQU0sQ0FBQ00sTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3Q0osaUJBQXhDO0FBRUEsV0FBTyxNQUFNO0FBQ1hILFlBQU0sQ0FBQ00sTUFBUCxDQUFjRSxHQUFkLENBQWtCLHFCQUFsQixFQUF5Q0wsaUJBQXpDO0FBQ0QsS0FGRDtBQUdELEdBVlEsRUFVTixDQUFDSCxNQUFNLENBQUNNLE1BQVIsQ0FWTSxDQUFUO0FBWUEsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBZSxTQUFLLEVBQUVHLHFEQUF0QjtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsa0NBQWVYLFNBQWY7QUFBMEIsU0FBRyxFQUFFQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNILG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCAqIGFzIGdhIGZyb20gXCJAL2xpYi9nYVwiO1xuaW1wb3J0IFwiQC9zdHlsZXMvcHJpc20tbmlnaHQtb3dsLmNzc1wiO1xuaW1wb3J0IFwiQC9zdHlsZXMvZm9udHNcIjtcbmltcG9ydCB0aGVtZSwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkAvc3R5bGVzL3RoZW1lXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGVyciB9KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICAgIHdpbmRvdy5uYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb25zKCkudGhlbigocmVnaXN0cmF0aW9ucykgPT4ge1xuICAgICAgcmVnaXN0cmF0aW9ucy5mb3JFYWNoKChyKSA9PiByLnVucmVnaXN0ZXIoKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xuICAgICAgZ2EucGFnZVZpZXcodXJsKTtcbiAgICB9O1xuXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGVycj17ZXJyfSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/fonts.js":
/*!*************************!*\
  !*** ./styles/fonts.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fontsource_poppins_300_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fontsource/poppins/300.css */ \"./node_modules/@fontsource/poppins/300.css\");\n/* harmony import */ var _fontsource_poppins_300_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins_300_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fontsource_poppins_400_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fontsource/poppins/400.css */ \"./node_modules/@fontsource/poppins/400.css\");\n/* harmony import */ var _fontsource_poppins_400_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins_400_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fontsource_poppins_500_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/poppins/500.css */ \"./node_modules/@fontsource/poppins/500.css\");\n/* harmony import */ var _fontsource_poppins_500_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins_500_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fontsource_poppins_700_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource/poppins/700.css */ \"./node_modules/@fontsource/poppins/700.css\");\n/* harmony import */ var _fontsource_poppins_700_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins_700_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fontsource/roboto/400.css */ \"./node_modules/@fontsource/roboto/400.css\");\n/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fontsource/roboto/500.css */ \"./node_modules/@fontsource/roboto/500.css\");\n/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvZm9udHMuanM/ZjhhOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvZm9udHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAZm9udHNvdXJjZS9wb3BwaW5zLzMwMC5jc3NcIjtcbmltcG9ydCBcIkBmb250c291cmNlL3BvcHBpbnMvNDAwLmNzc1wiO1xuaW1wb3J0IFwiQGZvbnRzb3VyY2UvcG9wcGlucy81MDAuY3NzXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9wb3BwaW5zLzcwMC5jc3NcIjtcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by80MDAuY3NzXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8vNTAwLmNzc1wiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/fonts.js\n");

/***/ }),

/***/ "./styles/prism-night-owl.css":
/*!************************************!*\
  !*** ./styles/prism-night-owl.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9wcmlzbS1uaWdodC1vd2wuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/prism-night-owl.css\n");

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/*! exports provided: ThemeProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ThemeProvider\", function() { return _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__[\"ChakraProvider\"]; });\n\n\nconst theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__[\"extendTheme\"])({\n  colors: {\n    brand: {\n      900: \"#FBD065\",\n      500: \"#FBDA89\",\n      100: \"#FBE5B0\"\n    },\n    secondary: {\n      900: \"#202225\",\n      500: \"#2A2D31\",\n      100: \"#3B3F45\"\n    },\n    grayblue: {\n      900: \"#E2E8F0\",\n      500: \"#A1A6AB\",\n      100: \"#797C81\"\n    }\n  },\n  fonts: {\n    heading: \"Poppins\",\n    body: \"Roboto\"\n  },\n  sizes: {\n    container: {\n      \"2xl\": \"1440px\"\n    }\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvdGhlbWUuanM/MzU1NCJdLCJuYW1lcyI6WyJ0aGVtZSIsImV4dGVuZFRoZW1lIiwiY29sb3JzIiwiYnJhbmQiLCJzZWNvbmRhcnkiLCJncmF5Ymx1ZSIsImZvbnRzIiwiaGVhZGluZyIsImJvZHkiLCJzaXplcyIsImNvbnRhaW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxvRUFBVyxDQUFDO0FBQ3hCQyxRQUFNLEVBQUU7QUFDTkMsU0FBSyxFQUFFO0FBQ0wsV0FBSyxTQURBO0FBRUwsV0FBSyxTQUZBO0FBR0wsV0FBSztBQUhBLEtBREQ7QUFNTkMsYUFBUyxFQUFFO0FBQ1QsV0FBSyxTQURJO0FBRVQsV0FBSyxTQUZJO0FBR1QsV0FBSztBQUhJLEtBTkw7QUFXTkMsWUFBUSxFQUFFO0FBQ1IsV0FBSyxTQURHO0FBRVIsV0FBSyxTQUZHO0FBR1IsV0FBSztBQUhHO0FBWEosR0FEZ0I7QUFrQnhCQyxPQUFLLEVBQUU7QUFDTEMsV0FBTyxFQUFFLFNBREo7QUFFTEMsUUFBSSxFQUFFO0FBRkQsR0FsQmlCO0FBc0J4QkMsT0FBSyxFQUFFO0FBQ0xDLGFBQVMsRUFBRTtBQUNULGFBQU87QUFERTtBQUROO0FBdEJpQixDQUFELENBQXpCO0FBNkJBO0FBQ2VWLG9FQUFmIiwiZmlsZSI6Ii4vc3R5bGVzL3RoZW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGNvbG9yczoge1xuICAgIGJyYW5kOiB7XG4gICAgICA5MDA6IFwiI0ZCRDA2NVwiLFxuICAgICAgNTAwOiBcIiNGQkRBODlcIixcbiAgICAgIDEwMDogXCIjRkJFNUIwXCIsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIDkwMDogXCIjMjAyMjI1XCIsXG4gICAgICA1MDA6IFwiIzJBMkQzMVwiLFxuICAgICAgMTAwOiBcIiMzQjNGNDVcIixcbiAgICB9LFxuICAgIGdyYXlibHVlOiB7XG4gICAgICA5MDA6IFwiI0UyRThGMFwiLFxuICAgICAgNTAwOiBcIiNBMUE2QUJcIixcbiAgICAgIDEwMDogXCIjNzk3QzgxXCIsXG4gICAgfSxcbiAgfSxcbiAgZm9udHM6IHtcbiAgICBoZWFkaW5nOiBcIlBvcHBpbnNcIixcbiAgICBib2R5OiBcIlJvYm90b1wiLFxuICB9LFxuICBzaXplczoge1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgXCIyeGxcIjogXCIxNDQwcHhcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCB7IENoYWtyYVByb3ZpZGVyIGFzIFRoZW1lUHJvdmlkZXIgfTtcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/theme.js\n");

/***/ }),

/***/ 0:
/*!***********************************************************************************************************!*\
  !*** multi ./node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js private-next-pages/_app.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jordy/Documents/GitHub/webside/node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js */"./node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js");
module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });