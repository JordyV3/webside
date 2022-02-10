module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}).SENTRY_RELEASE={id:\"development\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS93ZWJwYWNrLXBsdWdpbi9zcmMvc2VudHJ5LXdlYnBhY2subW9kdWxlLmpzP2UyOTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEhBQTBILGtCQUFrQiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3dlYnBhY2stcGx1Z2luL3NyYy9zZW50cnktd2VicGFjay5tb2R1bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fSkuU0VOVFJZX1JFTEVBU0U9e2lkOlwiZGV2ZWxvcG1lbnRcIn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js\n");

/***/ }),

/***/ "./sentry.server.config.js":
/*!*********************************!*\
  !*** ./sentry.server.config.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);\n// This file configures the initialization of Sentry on the server.\n// The config you add here will be used whenever the server handles a request.\n// https://docs.sentry.io/platforms/javascript/guides/nextjs/\n\nconst SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;\n_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__[\"init\"]({\n  dsn: SENTRY_DSN,\n  // Adjust this value in production, or use tracesSampler for greater control\n  tracesSampleRate: 1.0 // ...\n  // Note: if you want to override the automatic release value, do not set a\n  // `release` value here - use the environment variable `SENTRY_RELEASE`, so\n  // that it will also get attached to your source maps\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZW50cnkuc2VydmVyLmNvbmZpZy5qcz9iZjRlIl0sIm5hbWVzIjpbIlNFTlRSWV9EU04iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0VOVFJZX0RTTiIsIlNlbnRyeSIsImRzbiIsInRyYWNlc1NhbXBsZVJhdGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWixJQUEwQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHNCQUF6RDtBQUVBQyxtREFBQSxDQUFZO0FBQ1ZDLEtBQUcsRUFBRUwsVUFESztBQUVWO0FBQ0FNLGtCQUFnQixFQUFFLEdBSFIsQ0FJVjtBQUNBO0FBQ0E7QUFDQTs7QUFQVSxDQUFaIiwiZmlsZSI6Ii4vc2VudHJ5LnNlcnZlci5jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgY29uZmlndXJlcyB0aGUgaW5pdGlhbGl6YXRpb24gb2YgU2VudHJ5IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUaGUgY29uZmlnIHlvdSBhZGQgaGVyZSB3aWxsIGJlIHVzZWQgd2hlbmV2ZXIgdGhlIHNlcnZlciBoYW5kbGVzIGEgcmVxdWVzdC5cbi8vIGh0dHBzOi8vZG9jcy5zZW50cnkuaW8vcGxhdGZvcm1zL2phdmFzY3JpcHQvZ3VpZGVzL25leHRqcy9cblxuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gXCJAc2VudHJ5L25leHRqc1wiO1xuXG5jb25zdCBTRU5UUllfRFNOID0gcHJvY2Vzcy5lbnYuU0VOVFJZX0RTTiB8fCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRU5UUllfRFNOO1xuXG5TZW50cnkuaW5pdCh7XG4gIGRzbjogU0VOVFJZX0RTTixcbiAgLy8gQWRqdXN0IHRoaXMgdmFsdWUgaW4gcHJvZHVjdGlvbiwgb3IgdXNlIHRyYWNlc1NhbXBsZXIgZm9yIGdyZWF0ZXIgY29udHJvbFxuICB0cmFjZXNTYW1wbGVSYXRlOiAxLjAsXG4gIC8vIC4uLlxuICAvLyBOb3RlOiBpZiB5b3Ugd2FudCB0byBvdmVycmlkZSB0aGUgYXV0b21hdGljIHJlbGVhc2UgdmFsdWUsIGRvIG5vdCBzZXQgYVxuICAvLyBgcmVsZWFzZWAgdmFsdWUgaGVyZSAtIHVzZSB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGUgYFNFTlRSWV9SRUxFQVNFYCwgc29cbiAgLy8gdGhhdCBpdCB3aWxsIGFsc28gZ2V0IGF0dGFjaGVkIHRvIHlvdXIgc291cmNlIG1hcHNcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sentry.server.config.js\n");

/***/ }),

/***/ 3:
/*!**********************************************************************************************************!*\
  !*** multi ./node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js ./sentry.server.config.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jordy/Documents/GitHub/webside/node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js */"./node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js");
module.exports = __webpack_require__(/*! ./sentry.server.config.js */"./sentry.server.config.js");


/***/ }),

/***/ "@sentry/nextjs":
/*!*********************************!*\
  !*** external "@sentry/nextjs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sentry/nextjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2VudHJ5L25leHRqc1wiPzllYzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNlbnRyeS9uZXh0anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2VudHJ5L25leHRqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sentry/nextjs\n");

/***/ })

/******/ });