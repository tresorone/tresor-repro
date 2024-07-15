module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return shallowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return toRef; });
/* unused harmony export toRefs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return unref; });
/* unused harmony export proxyRefs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return customRef; });
/* unused harmony export triggerRef */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return reactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isReactive; });
/* unused harmony export isReadonly */
/* unused harmony export isShallow */
/* unused harmony export isProxy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return shallowReactive; });
/* unused harmony export markRaw */
/* unused harmony export toRaw */
/* unused harmony export readonly */
/* unused harmony export shallowReadonly */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return watchEffect; });
/* unused harmony export watchPostEffect */
/* unused harmony export watchSyncEffect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return effectScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return onScopeDispose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCurrentScope; });
/* unused harmony export provide */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return inject; });
/* unused harmony export onBeforeMount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return onMounted; });
/* unused harmony export onBeforeUpdate */
/* unused harmony export onUpdated */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return onBeforeUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return onUnmounted; });
/* unused harmony export onErrorCaptured */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return onActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return onDeactivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return onServerPrefetch; });
/* unused harmony export onRenderTracked */
/* unused harmony export onRenderTriggered */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return set; });
/* unused harmony export del */
/* unused harmony export h */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCurrentInstance; });
/* unused harmony export useSlots */
/* unused harmony export useAttrs */
/* unused harmony export mergeDefaults */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return nextTick; });
/* unused harmony export useCssModule */
/* unused harmony export useCssVars */
/* unused harmony export defineComponent */
/* unused harmony export defineAsyncComponent */
/* harmony import */ var _vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["c"] = (_vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0___default.a);

// this should be kept in sync with src/v3/index.ts
const {
  version,
  // refs
  ref,
  shallowRef,
  isRef,
  toRef,
  toRefs,
  unref,
  proxyRefs,
  customRef,
  triggerRef,
  computed,
  // reactive
  reactive,
  isReactive,
  isReadonly,
  isShallow,
  isProxy,
  shallowReactive,
  markRaw,
  toRaw,
  readonly,
  shallowReadonly,
  // watch
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  // effectScope
  effectScope,
  onScopeDispose,
  getCurrentScope,
  // provide / inject
  provide,
  inject,
  // lifecycle
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onActivated,
  onDeactivated,
  onServerPrefetch,
  onRenderTracked,
  onRenderTriggered,
  // v2 only
  set,
  del,
  // v3 compat
  h,
  getCurrentInstance,
  useSlots,
  useAttrs,
  mergeDefaults,
  nextTick,
  useCssModule,
  useCssVars,
  defineComponent,
  defineAsyncComponent
} = _vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0___default.a;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useNuxt2Meta */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setNuxtAppInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return callWithNuxt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defineNuxtPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useNuxtApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useRuntimeConfig; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var defu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var defu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(defu__WEBPACK_IMPORTED_MODULE_1__);


function unwrap(value) {
  if (!value || typeof value === "string" || typeof value === "boolean" || typeof value === "number") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(i => unwrap(i));
  }
  if (Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* isRef */ "i"])(value)) {
    return unwrap(value.value);
  }
  if (typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, value2]) => [key, unwrap(value2)]));
  }
  return value;
}
function metaInfoFromOptions(metaOptions) {
  return metaOptions instanceof Function ? metaOptions : () => metaOptions;
}
const useNuxt2Meta = metaOptions => {
  let vm = null;
  try {
    vm = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* getCurrentInstance */ "e"])().proxy;
    const meta = vm.$meta();
    const $root = vm.$root;
    if (!vm._vueMeta) {
      vm._vueMeta = true;
      let parent = vm.$parent;
      while (parent && parent !== $root) {
        if (parent._vueMeta === void 0) {
          parent._vueMeta = false;
        }
        parent = parent.$parent;
      }
    }
    vm.$options.head = vm.$options.head || {};
    const unwatch = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* watch */ "z"])(metaInfoFromOptions(metaOptions), metaInfo => {
      vm.$metaInfo = {
        ...(vm.$metaInfo || {}),
        ...unwrap(metaInfo)
      };
      if (false) {}
    }, {
      immediate: true,
      deep: true
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* onBeforeUnmount */ "l"])(unwatch);
  } catch {
    const app = useNuxtApp().nuxt2Context.app;
    if (typeof app.head === "function") {
      const originalHead = app.head;
      app.head = function () {
        const head = originalHead.call(this) || {};
        return Object(defu__WEBPACK_IMPORTED_MODULE_1__["defu"])(unwrap(metaInfoFromOptions(metaOptions)()), head);
      };
    } else {
      app.head = Object(defu__WEBPACK_IMPORTED_MODULE_1__["defu"])(unwrap(metaInfoFromOptions(metaOptions)()), app.head);
    }
  }
};
let currentNuxtAppInstance;
const setNuxtAppInstance = nuxt => {
  currentNuxtAppInstance = nuxt;
};
function callWithNuxt(nuxt, setup, args) {
  setNuxtAppInstance(nuxt);
  const p = args ? setup(...args) : setup();
  if (true) {
    setNuxtAppInstance(null);
  }
  return p;
}
function defineNuxtPlugin(plugin) {
  return async (ctx, inject) => {
    const result = await callWithNuxt(ctx.$_nuxtApp, plugin, [ctx.$_nuxtApp]);
    if (result && result.provide) {
      for (const key in result.provide) {
        inject(key, result.provide[key]);
      }
    }
    return result;
  };
}
const useNuxtApp = () => {
  const vm = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* getCurrentInstance */ "e"])();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt app instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.proxy.$_nuxtApp;
};
const useRuntimeConfig = () => {
  const nuxtApp = useNuxtApp();
  if (nuxtApp._config) {
    return nuxtApp._config;
  }
  nuxtApp._config = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* reactive */ "r"])(nuxtApp.$config);
  return nuxtApp._config;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL, URLSearchParams) {/* unused harmony export H3Error */
/* unused harmony export H3Event */
/* unused harmony export H3Headers */
/* unused harmony export H3Response */
/* unused harmony export MIMES */
/* unused harmony export appendCorsHeaders */
/* unused harmony export appendCorsPreflightHeaders */
/* unused harmony export appendHeader */
/* unused harmony export appendHeaders */
/* unused harmony export appendResponseHeader */
/* unused harmony export appendResponseHeaders */
/* unused harmony export assertMethod */
/* unused harmony export callNodeListener */
/* unused harmony export clearResponseHeaders */
/* unused harmony export clearSession */
/* unused harmony export createApp */
/* unused harmony export createAppEventHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createEvent; });
/* unused harmony export createEventStream */
/* unused harmony export createRouter */
/* unused harmony export defaultContentType */
/* unused harmony export defineEventHandler */
/* unused harmony export defineLazyEventHandler */
/* unused harmony export defineNodeListener */
/* unused harmony export defineNodeMiddleware */
/* unused harmony export defineRequestMiddleware */
/* unused harmony export defineResponseMiddleware */
/* unused harmony export defineWebSocket */
/* unused harmony export defineWebSocketHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteCookie; });
/* unused harmony export dynamicEventHandler */
/* unused harmony export eventHandler */
/* unused harmony export fetchWithEvent */
/* unused harmony export fromNodeMiddleware */
/* unused harmony export fromPlainHandler */
/* unused harmony export fromWebHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCookie; });
/* unused harmony export getHeader */
/* unused harmony export getHeaders */
/* unused harmony export getMethod */
/* unused harmony export getProxyRequestHeaders */
/* unused harmony export getQuery */
/* unused harmony export getRequestFingerprint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getRequestHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getRequestHeaders; });
/* unused harmony export getRequestHost */
/* unused harmony export getRequestIP */
/* unused harmony export getRequestPath */
/* unused harmony export getRequestProtocol */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getRequestURL; });
/* unused harmony export getRequestWebStream */
/* unused harmony export getResponseHeader */
/* unused harmony export getResponseHeaders */
/* unused harmony export getResponseStatus */
/* unused harmony export getResponseStatusText */
/* unused harmony export getRouterParam */
/* unused harmony export getRouterParams */
/* unused harmony export getSession */
/* unused harmony export getValidatedQuery */
/* unused harmony export getValidatedRouterParams */
/* unused harmony export handleCacheHeaders */
/* unused harmony export handleCors */
/* unused harmony export isCorsOriginAllowed */
/* unused harmony export isError */
/* unused harmony export isEvent */
/* unused harmony export isEventHandler */
/* unused harmony export isMethod */
/* unused harmony export isPreflightRequest */
/* unused harmony export isStream */
/* unused harmony export isWebResponse */
/* unused harmony export lazyEventHandler */
/* unused harmony export parseCookies */
/* unused harmony export promisifyNodeListener */
/* unused harmony export proxyRequest */
/* unused harmony export readBody */
/* unused harmony export readFormData */
/* unused harmony export readMultipartFormData */
/* unused harmony export readRawBody */
/* unused harmony export readValidatedBody */
/* unused harmony export removeResponseHeader */
/* unused harmony export sanitizeStatusCode */
/* unused harmony export sanitizeStatusMessage */
/* unused harmony export sealSession */
/* unused harmony export send */
/* unused harmony export sendError */
/* unused harmony export sendIterable */
/* unused harmony export sendNoContent */
/* unused harmony export sendProxy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return sendRedirect; });
/* unused harmony export sendStream */
/* unused harmony export sendWebResponse */
/* unused harmony export serveStatic */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return setCookie; });
/* unused harmony export setHeader */
/* unused harmony export setHeaders */
/* unused harmony export setResponseHeader */
/* unused harmony export setResponseHeaders */
/* unused harmony export setResponseStatus */
/* unused harmony export splitCookiesString */
/* unused harmony export toEventHandler */
/* unused harmony export toNodeListener */
/* unused harmony export toPlainHandler */
/* unused harmony export toWebHandler */
/* unused harmony export toWebRequest */
/* unused harmony export unsealSession */
/* unused harmony export updateSession */
/* unused harmony export use */
/* unused harmony export useBase */
/* unused harmony export useSession */
/* unused harmony export writeEarlyHints */
/* harmony import */ var core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27);
/* harmony import */ var core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ufo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2);
/* harmony import */ var ufo__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ufo__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var cookie_es__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5);
/* harmony import */ var cookie_es__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(cookie_es__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ohash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6);
/* harmony import */ var radix3__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(34);
/* harmony import */ var radix3__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(radix3__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var destr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(13);
/* harmony import */ var destr__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(destr__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var defu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7);
/* harmony import */ var defu__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(defu__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var uncrypto__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9);
/* harmony import */ var uncrypto__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(uncrypto__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var iron_webcrypto__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(10);
/* harmony import */ var unenv_runtime_node_http_index__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(35);

























function useBase(base, handler) {
  base = Object(ufo__WEBPACK_IMPORTED_MODULE_16__["withoutTrailingSlash"])(base);
  if (!base || base === "/") {
    return handler;
  }
  return eventHandler(async event => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _path = event._path || event.node.req.url || "/";
    event._path = Object(ufo__WEBPACK_IMPORTED_MODULE_16__["withoutBase"])(event.path || "/", base);
    event.node.req.url = event._path;
    try {
      return await handler(event);
    } finally {
      event._path = event.node.req.url = _path;
    }
  });
}
function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}
var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError(input) {
  var _ref, _input$message;
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error((_ref = (_input$message = input.message) !== null && _input$message !== void 0 ? _input$message : input.statusMessage) !== null && _ref !== void 0 ? _ref : "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {}
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map(l => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  var _input$constructor;
  return (input === null || input === void 0 ? void 0 : (_input$constructor = input.constructor) === null || _input$constructor === void 0 ? void 0 : _input$constructor.__h3_error__) === true;
}
function parse(multipartBodyBuffer, boundary) {
  let lastline = "";
  let state = 0 /* INIT */;
  let buffer = [];
  const allParts = [];
  let currentPartHeaders = [];
  for (let i = 0; i < multipartBodyBuffer.length; i++) {
    const prevByte = i > 0 ? multipartBodyBuffer[i - 1] : null;
    const currByte = multipartBodyBuffer[i];
    const newLineChar = currByte === 10 || currByte === 13;
    if (!newLineChar) {
      lastline += String.fromCodePoint(currByte);
    }
    const newLineDetected = currByte === 10 && prevByte === 13;
    if (0 /* INIT */ === state && newLineDetected) {
      if ("--" + boundary === lastline) {
        state = 1 /* READING_HEADERS */;
      }
      lastline = "";
    } else if (1 /* READING_HEADERS */ === state && newLineDetected) {
      if (lastline.length > 0) {
        const i2 = lastline.indexOf(":");
        if (i2 > 0) {
          const name = lastline.slice(0, i2).toLowerCase();
          const value = lastline.slice(i2 + 1).trim();
          currentPartHeaders.push([name, value]);
        }
      } else {
        state = 2 /* READING_DATA */;
        buffer = [];
      }
      lastline = "";
    } else if (2 /* READING_DATA */ === state) {
      if (lastline.length > boundary.length + 4) {
        lastline = "";
      }
      if ("--" + boundary === lastline) {
        const j = buffer.length - lastline.length;
        const part = buffer.slice(0, j - 1);
        allParts.push(process(part, currentPartHeaders));
        buffer = [];
        currentPartHeaders = [];
        lastline = "";
        state = 3 /* READING_PART_SEPARATOR */;
      } else {
        buffer.push(currByte);
      }
      if (newLineDetected) {
        lastline = "";
      }
    } else if (3 /* READING_PART_SEPARATOR */ === state && newLineDetected) {
      state = 1 /* READING_HEADERS */;
    }
  }
  return allParts;
}
function process(data, headers) {
  var _headers$find, _headers$find2;
  const dataObj = {};
  const contentDispositionHeader = ((_headers$find = headers.find(h => h[0] === "content-disposition")) === null || _headers$find === void 0 ? void 0 : _headers$find[1]) || "";
  for (const i of contentDispositionHeader.split(";")) {
    const s = i.split("=");
    if (s.length !== 2) {
      continue;
    }
    const key = (s[0] || "").trim();
    if (key === "name" || key === "filename") {
      const _value = (s[1] || "").trim().replace(/"/g, "");
      dataObj[key] = Buffer.from(_value, "latin1").toString("utf8");
    }
  }
  const contentType = ((_headers$find2 = headers.find(h => h[0] === "content-type")) === null || _headers$find2 === void 0 ? void 0 : _headers$find2[1]) || "";
  if (contentType) {
    dataObj.type = contentType;
  }
  dataObj.data = Buffer.from(data);
  return dataObj;
}
async function validateData(data, fn) {
  try {
    const res = await fn(data);
    if (res === false) {
      throw createValidationError();
    }
    if (res === true) {
      return data;
    }
    return res !== null && res !== void 0 ? res : data;
  } catch (error) {
    throw createValidationError(error);
  }
}
function createValidationError(validateError) {
  throw createError({
    status: 400,
    statusMessage: "Validation Error",
    message: (validateError === null || validateError === void 0 ? void 0 : validateError.message) || "Validation Error",
    data: validateError
  });
}
function getQuery(event) {
  return Object(ufo__WEBPACK_IMPORTED_MODULE_16__["getQuery"])(event.path || "");
}
function getValidatedQuery(event, validate) {
  const query = getQuery(event);
  return validateData(query, validate);
}
function getRouterParams(event, opts = {}) {
  let params = event.context.params || {};
  if (opts.decode) {
    params = {
      ...params
    };
    for (const key in params) {
      params[key] = Object(ufo__WEBPACK_IMPORTED_MODULE_16__["decode"])(params[key]);
    }
  }
  return params;
}
function getValidatedRouterParams(event, validate, opts = {}) {
  const routerParams = getRouterParams(event, opts);
  return validateData(routerParams, validate);
}
function getRouterParam(event, name, opts = {}) {
  const params = getRouterParams(event, opts);
  return params[name];
}
function getMethod(event, defaultMethod = "GET") {
  return (event.node.req.method || defaultMethod).toUpperCase();
}
function isMethod(event, expected, allowHead) {
  if (allowHead && event.method === "HEAD") {
    return true;
  }
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected, allowHead)) {
    throw createError({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
const getHeaders = getRequestHeaders;
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
const getHeader = getRequestHeader;
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  var _event$node$req$conne;
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return (_event$node$req$conne = event.node.req.connection) !== null && _event$node$req$conne !== void 0 && _event$node$req$conne.encrypted ? "https" : "http";
}
const DOUBLE_SLASH_RE = /[/\\]{2,}/g;
function getRequestPath(event) {
  const path = (event.node.req.url || "/").replace(DOUBLE_SLASH_RE, "/");
  return path;
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(/^[/\\]+/g, "/");
  return new URL(path, `${protocol}://${host}`);
}
function toWebRequest(event) {
  var _event$web;
  return ((_event$web = event.web) === null || _event$web === void 0 ? void 0 : _event$web.request) || new Request(getRequestURL(event), {
    // @ts-ignore Undici option
    duplex: "half",
    method: event.method,
    headers: event.headers,
    body: getRequestWebStream(event)
  });
}
function getRequestIP(event, opts = {}) {
  if (event.context.clientAddress) {
    return event.context.clientAddress;
  }
  if (opts.xForwardedFor) {
    var _getRequestHeader, _getRequestHeader$spl;
    const xForwardedFor = (_getRequestHeader = getRequestHeader(event, "x-forwarded-for")) === null || _getRequestHeader === void 0 ? void 0 : (_getRequestHeader$spl = _getRequestHeader.split(",").shift()) === null || _getRequestHeader$spl === void 0 ? void 0 : _getRequestHeader$spl.trim();
    if (xForwardedFor) {
      return xForwardedFor;
    }
  }
  if (event.node.req.socket.remoteAddress) {
    return event.node.req.socket.remoteAddress;
  }
}
const RawBodySymbol = Symbol.for("h3RawBody");
const ParsedBodySymbol = Symbol.for("h3ParsedBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  var _event$web2, _event$web2$request, _event$node$req$heade;
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || ((_event$web2 = event.web) === null || _event$web2 === void 0 ? void 0 : (_event$web2$request = _event$web2.request) === null || _event$web2$request === void 0 ? void 0 : _event$web2$request.body) || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then(_resolved => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(new WritableStream({
            write(chunk) {
              chunks.push(chunk);
            },
            close() {
              resolve(Buffer.concat(chunks));
            },
            abort(reason) {
              reject(reason);
            }
          })).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", chunk => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then(buff => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String((_event$node$req$heade = event.node.req.headers["transfer-encoding"]) !== null && _event$node$req$heade !== void 0 ? _event$node$req$heade : "").split(",").map(e => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise((resolve, reject) => {
    const bodyData = [];
    event.node.req.on("error", err => {
      reject(err);
    }).on("data", chunk => {
      bodyData.push(chunk);
    }).on("end", () => {
      resolve(Buffer.concat(bodyData));
    });
  });
  const result = encoding ? promise.then(buff => buff.toString(encoding)) : promise;
  return result;
}
async function readBody(event, options = {}) {
  const request = event.node.req;
  if (hasProp(request, ParsedBodySymbol)) {
    return request[ParsedBodySymbol];
  }
  const contentType = request.headers["content-type"] || "";
  const body = await readRawBody(event);
  let parsed;
  if (contentType === "application/json") {
    var _options$strict;
    parsed = _parseJSON(body, (_options$strict = options.strict) !== null && _options$strict !== void 0 ? _options$strict : true);
  } else if (contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed = _parseURLEncodedBody(body);
  } else if (contentType.startsWith("text/")) {
    parsed = body;
  } else {
    var _options$strict2;
    parsed = _parseJSON(body, (_options$strict2 = options.strict) !== null && _options$strict2 !== void 0 ? _options$strict2 : false);
  }
  request[ParsedBodySymbol] = parsed;
  return parsed;
}
async function readValidatedBody(event, validate) {
  const _body = await readBody(event, {
    strict: true
  });
  return validateData(_body, validate);
}
async function readMultipartFormData(event) {
  var _contentType$match;
  const contentType = getRequestHeader(event, "content-type");
  if (!contentType || !contentType.startsWith("multipart/form-data")) {
    return;
  }
  const boundary = (_contentType$match = contentType.match(/boundary=([^;]*)(;|$)/i)) === null || _contentType$match === void 0 ? void 0 : _contentType$match[1];
  if (!boundary) {
    return;
  }
  const body = await readRawBody(event, false);
  if (!body) {
    return;
  }
  return parse(body, boundary);
}
async function readFormData(event) {
  return await toWebRequest(event).formData();
}
function getRequestWebStream(event) {
  var _event$web3, _event$web3$request;
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = ((_event$web3 = event.web) === null || _event$web3 === void 0 ? void 0 : (_event$web3$request = _event$web3.request) === null || _event$web3$request === void 0 ? void 0 : _event$web3$request.body) || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: controller => {
      event.node.req.on("data", chunk => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", err => {
        controller.error(err);
      });
    }
  });
}
function _parseJSON(body = "", strict) {
  if (!body) {
    return void 0;
  }
  try {
    return destr__WEBPACK_IMPORTED_MODULE_20___default()(body, {
      strict
    });
  } catch {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Invalid JSON body"
    });
  }
}
function _parseURLEncodedBody(body) {
  const form = new URLSearchParams(body);
  const parsedForm = /* @__PURE__ */Object.create(null);
  for (const [key, value] of form.entries()) {
    if (hasProp(parsedForm, key)) {
      if (!Array.isArray(parsedForm[key])) {
        parsedForm[key] = [parsedForm[key]];
      }
      parsedForm[key].push(value);
    } else {
      parsedForm[key] = value;
    }
  }
  return parsedForm;
}
function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...(opts.cacheControls || [])];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}
const MIMES = {
  html: "text/html",
  json: "application/json"
};
const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function parseCookies(event) {
  return Object(cookie_es__WEBPACK_IMPORTED_MODULE_17__["parse"])(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions) {
  serializeOptions = {
    path: "/",
    ...serializeOptions
  };
  const cookieStr = Object(cookie_es__WEBPACK_IMPORTED_MODULE_17__["serialize"])(name, value, serializeOptions);
  let setCookies = event.node.res.getHeader("set-cookie");
  if (!Array.isArray(setCookies)) {
    setCookies = [setCookies];
  }
  const _optionsHash = Object(ohash__WEBPACK_IMPORTED_MODULE_18__[/* objectHash */ "c"])(serializeOptions);
  setCookies = setCookies.filter(cookieValue => {
    return cookieValue && _optionsHash !== Object(ohash__WEBPACK_IMPORTED_MODULE_18__[/* objectHash */ "c"])(Object(cookie_es__WEBPACK_IMPORTED_MODULE_17__["parse"])(cookieValue));
  });
  event.node.res.setHeader("set-cookie", [...setCookies, cookieStr]);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap(c => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
function serializeIterableValue(value) {
  switch (typeof value) {
    case "string":
      {
        return value;
      }
    case "boolean":
    case "number":
    case "bigint":
    case "symbol":
      {
        return value.toString();
      }
    case "function":
    case "undefined":
      {
        return void 0;
      }
    case "object":
      {
        if (value instanceof Uint8Array) {
          return value;
        }
        return JSON.stringify(value);
      }
  }
}
function coerceIterable(iterable) {
  if (typeof iterable === "function") {
    iterable = iterable();
  }
  if (Symbol.iterator in iterable) {
    return iterable[Symbol.iterator]();
  }
  if (Symbol.asyncIterator in iterable) {
    return iterable[Symbol.asyncIterator]();
  }
  return iterable;
}
const defer = typeof setImmediate === "undefined" ? fn => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise(resolve => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(code, event.node.res.statusCode);
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(code, event.node.res.statusCode);
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeaders(event) {
  return event.node.res.getHeaders();
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(name, value);
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
const setHeader = setResponseHeader;
function appendResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    appendResponseHeader(event, name, value);
  }
}
const appendHeaders = appendResponseHeaders;
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
const appendHeader = appendResponseHeader;
function clearResponseHeaders(event, headerNames) {
  if (headerNames && headerNames.length > 0) {
    for (const name of headerNames) {
      removeResponseHeader(event, name);
    }
  } else {
    for (const [name] of Object.entries(getResponseHeaders(event))) {
      removeResponseHeader(event, name);
    }
  }
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(new WritableStream({
      write(chunk) {
        event.node.res.write(chunk);
      }
    })).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", error => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
const noop = () => {};
function writeEarlyHints(event, hints, cb = noop) {
  if (!event.node.res.socket) {
    cb();
    return;
  }
  if (typeof hints === "string" || Array.isArray(hints)) {
    hints = {
      link: hints
    };
  }
  if (hints.link) {
    hints.link = Array.isArray(hints.link) ? hints.link : hints.link.split(",");
  }
  const headers = Object.entries(hints).map(e => [e[0].toLowerCase(), e[1]]);
  if (headers.length === 0) {
    cb();
    return;
  }
  let hint = "HTTP/1.1 103 Early Hints";
  if (hints.link) {
    hint += `\r
Link: ${hints.link.join(", ")}`;
  }
  for (const [header, value] of headers) {
    if (header === "link") {
      continue;
    }
    hint += `\r
${header}: ${value}`;
  }
  if (event.node.res.socket) {
    event.node.res.socket.write(`${hint}\r
\r
`, "utf8", cb);
  } else {
    cb();
  }
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(response.status, event.node.res.statusCode);
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}
function sendIterable(event, iterable, options) {
  var _options$serializer;
  const serializer = (_options$serializer = options === null || options === void 0 ? void 0 : options.serializer) !== null && _options$serializer !== void 0 ? _options$serializer : serializeIterableValue;
  const iterator = coerceIterable(iterable);
  return sendStream(event, new ReadableStream({
    async pull(controller) {
      const {
        value,
        done
      } = await iterator.next();
      if (value !== void 0) {
        const chunk = serializer(value);
        if (chunk !== void 0) {
          controller.enqueue(chunk);
        }
      }
      if (done) {
        controller.close();
      }
    },
    cancel() {
      var _iterator$return;
      (_iterator$return = iterator.return) === null || _iterator$return === void 0 ? void 0 : _iterator$return.call(iterator);
    }
  }));
}
function resolveCorsOptions(options = {}) {
  const defaultOptions = {
    origin: "*",
    methods: "*",
    allowHeaders: "*",
    exposeHeaders: "*",
    credentials: false,
    maxAge: false,
    preflight: {
      statusCode: 204
    }
  };
  return Object(defu__WEBPACK_IMPORTED_MODULE_21__["defu"])(options, defaultOptions);
}
function isPreflightRequest(event) {
  const origin = getRequestHeader(event, "origin");
  const accessControlRequestMethod = getRequestHeader(event, "access-control-request-method");
  return event.method === "OPTIONS" && !!origin && !!accessControlRequestMethod;
}
function isCorsOriginAllowed(origin, options) {
  const {
    origin: originOption
  } = options;
  if (!origin || !originOption || originOption === "*" || originOption === "null") {
    return true;
  }
  if (Array.isArray(originOption)) {
    return originOption.some(_origin => {
      if (_origin instanceof RegExp) {
        return _origin.test(origin);
      }
      return origin === _origin;
    });
  }
  return originOption(origin);
}
function createOriginHeaders(event, options) {
  const {
    origin: originOption
  } = options;
  const origin = getRequestHeader(event, "origin");
  if (!origin || !originOption || originOption === "*") {
    return {
      "access-control-allow-origin": "*"
    };
  }
  if (typeof originOption === "string") {
    return {
      "access-control-allow-origin": originOption,
      vary: "origin"
    };
  }
  return isCorsOriginAllowed(origin, options) ? {
    "access-control-allow-origin": origin,
    vary: "origin"
  } : {};
}
function createMethodsHeaders(options) {
  const {
    methods
  } = options;
  if (!methods) {
    return {};
  }
  if (methods === "*") {
    return {
      "access-control-allow-methods": "*"
    };
  }
  return methods.length > 0 ? {
    "access-control-allow-methods": methods.join(",")
  } : {};
}
function createCredentialsHeaders(options) {
  const {
    credentials
  } = options;
  if (credentials) {
    return {
      "access-control-allow-credentials": "true"
    };
  }
  return {};
}
function createAllowHeaderHeaders(event, options) {
  const {
    allowHeaders
  } = options;
  if (!allowHeaders || allowHeaders === "*" || allowHeaders.length === 0) {
    const header = getRequestHeader(event, "access-control-request-headers");
    return header ? {
      "access-control-allow-headers": header,
      vary: "access-control-request-headers"
    } : {};
  }
  return {
    "access-control-allow-headers": allowHeaders.join(","),
    vary: "access-control-request-headers"
  };
}
function createExposeHeaders(options) {
  const {
    exposeHeaders
  } = options;
  if (!exposeHeaders) {
    return {};
  }
  if (exposeHeaders === "*") {
    return {
      "access-control-expose-headers": exposeHeaders
    };
  }
  return {
    "access-control-expose-headers": exposeHeaders.join(",")
  };
}
function appendCorsPreflightHeaders(event, options) {
  appendHeaders(event, createOriginHeaders(event, options));
  appendHeaders(event, createCredentialsHeaders(options));
  appendHeaders(event, createExposeHeaders(options));
  appendHeaders(event, createMethodsHeaders(options));
  appendHeaders(event, createAllowHeaderHeaders(event, options));
}
function appendCorsHeaders(event, options) {
  appendHeaders(event, createOriginHeaders(event, options));
  appendHeaders(event, createCredentialsHeaders(options));
  appendHeaders(event, createExposeHeaders(options));
}
function handleCors(event, options) {
  const _options = resolveCorsOptions(options);
  if (isPreflightRequest(event)) {
    appendCorsPreflightHeaders(event, options);
    sendNoContent(event, _options.preflight.statusCode);
    return true;
  }
  appendCorsHeaders(event, options);
  return false;
}
async function getRequestFingerprint(event, opts = {}) {
  const fingerprint = [];
  if (opts.ip !== false) {
    fingerprint.push(getRequestIP(event, {
      xForwardedFor: opts.xForwardedFor
    }));
  }
  if (opts.method === true) {
    fingerprint.push(event.method);
  }
  if (opts.path === true) {
    fingerprint.push(event.path);
  }
  if (opts.userAgent === true) {
    fingerprint.push(getRequestHeader(event, "user-agent"));
  }
  const fingerprintString = fingerprint.filter(Boolean).join("|");
  if (!fingerprintString) {
    return null;
  }
  if (opts.hash === false) {
    return fingerprintString;
  }
  const buffer = await uncrypto__WEBPACK_IMPORTED_MODULE_22___default.a.subtle.digest(opts.hash || "SHA-1", new TextEncoder().encode(fingerprintString));
  const hash = [...new Uint8Array(buffer)].map(b => b.toString(16).padStart(2, "0")).join("");
  return hash;
}
const PayloadMethods = /* @__PURE__ */new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */new Set(["transfer-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
async function proxyRequest(event, target, opts = {}) {
  var _opts$fetchOptions, _opts$fetchOptions2;
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = ((_opts$fetchOptions = opts.fetchOptions) === null || _opts$fetchOptions === void 0 ? void 0 : _opts$fetchOptions.method) || event.method;
  const fetchHeaders = mergeHeaders(getProxyRequestHeaders(event), (_opts$fetchOptions2 = opts.fetchOptions) === null || _opts$fetchOptions2 === void 0 ? void 0 : _opts$fetchOptions2.headers, opts.headers);
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(response.status, event.node.res.statusCode);
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader("set-cookie", cookies.map(cookie => {
      if (opts.cookieDomainRewrite) {
        cookie = rewriteCookieProperty(cookie, opts.cookieDomainRewrite, "domain");
      }
      if (opts.cookiePathRewrite) {
        cookie = rewriteCookieProperty(cookie, opts.cookiePathRewrite, "path");
      }
      return cookie;
    }));
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options === null || options === void 0 ? void 0 : options.fetch)(req, {
    ...init,
    context: (init === null || init === void 0 ? void 0 : init.context) || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...(init === null || init === void 0 ? void 0 : init.headers)
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? {
    "*": map
  } : map;
  return header.replace(new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"), (match, prefix, previousValue) => {
    let newValue;
    if (previousValue in _map) {
      newValue = _map[previousValue];
    } else if ("*" in _map) {
      newValue = _map["*"];
    } else {
      return match;
    }
    return newValue ? prefix + newValue : "";
  });
}
function mergeHeaders(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}
const getSessionPromise = Symbol("getSession");
const DEFAULT_NAME = "h3";
const DEFAULT_COOKIE = {
  path: "/",
  secure: true,
  httpOnly: true
};
async function useSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  await getSession(event, config);
  const sessionManager = {
    get id() {
      var _event$context$sessio, _event$context$sessio2;
      return (_event$context$sessio = event.context.sessions) === null || _event$context$sessio === void 0 ? void 0 : (_event$context$sessio2 = _event$context$sessio[sessionName]) === null || _event$context$sessio2 === void 0 ? void 0 : _event$context$sessio2.id;
    },
    get data() {
      var _event$context$sessio3, _event$context$sessio4;
      return ((_event$context$sessio3 = event.context.sessions) === null || _event$context$sessio3 === void 0 ? void 0 : (_event$context$sessio4 = _event$context$sessio3[sessionName]) === null || _event$context$sessio4 === void 0 ? void 0 : _event$context$sessio4.data) || {};
    },
    update: async update => {
      await updateSession(event, config, update);
      return sessionManager;
    },
    clear: () => {
      clearSession(event, config);
      return Promise.resolve(sessionManager);
    }
  };
  return sessionManager;
}
async function getSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  if (!event.context.sessions) {
    event.context.sessions = /* @__PURE__ */Object.create(null);
  }
  const existingSession = event.context.sessions[sessionName];
  if (existingSession) {
    return existingSession[getSessionPromise] || existingSession;
  }
  const session = {
    id: "",
    createdAt: 0,
    data: /* @__PURE__ */Object.create(null)
  };
  event.context.sessions[sessionName] = session;
  let sealedSession;
  if (config.sessionHeader !== false) {
    const headerName = typeof config.sessionHeader === "string" ? config.sessionHeader.toLowerCase() : `x-${sessionName.toLowerCase()}-session`;
    const headerValue = event.node.req.headers[headerName];
    if (typeof headerValue === "string") {
      sealedSession = headerValue;
    }
  }
  if (!sealedSession) {
    sealedSession = getCookie(event, sessionName);
  }
  if (sealedSession) {
    const promise = unsealSession(event, config, sealedSession).catch(() => {}).then(unsealed => {
      Object.assign(session, unsealed);
      delete event.context.sessions[sessionName][getSessionPromise];
      return session;
    });
    event.context.sessions[sessionName][getSessionPromise] = promise;
    await promise;
  }
  if (!session.id) {
    var _config$generateId, _config$generateId2;
    session.id = (_config$generateId = (_config$generateId2 = config.generateId) === null || _config$generateId2 === void 0 ? void 0 : _config$generateId2.call(config)) !== null && _config$generateId !== void 0 ? _config$generateId : (config.crypto || uncrypto__WEBPACK_IMPORTED_MODULE_22___default.a).randomUUID();
    session.createdAt = Date.now();
    await updateSession(event, config);
  }
  return session;
}
async function updateSession(event, config, update) {
  var _event$context$sessio5;
  const sessionName = config.name || DEFAULT_NAME;
  const session = ((_event$context$sessio5 = event.context.sessions) === null || _event$context$sessio5 === void 0 ? void 0 : _event$context$sessio5[sessionName]) || (await getSession(event, config));
  if (typeof update === "function") {
    update = update(session.data);
  }
  if (update) {
    Object.assign(session.data, update);
  }
  if (config.cookie !== false) {
    const sealed = await sealSession(event, config);
    setCookie(event, sessionName, sealed, {
      ...DEFAULT_COOKIE,
      expires: config.maxAge ? new Date(session.createdAt + config.maxAge * 1e3) : void 0,
      ...config.cookie
    });
  }
  return session;
}
async function sealSession(event, config) {
  var _event$context$sessio6;
  const sessionName = config.name || DEFAULT_NAME;
  const session = ((_event$context$sessio6 = event.context.sessions) === null || _event$context$sessio6 === void 0 ? void 0 : _event$context$sessio6[sessionName]) || (await getSession(event, config));
  const sealed = await Object(iron_webcrypto__WEBPACK_IMPORTED_MODULE_23__[/* seal */ "b"])(config.crypto || uncrypto__WEBPACK_IMPORTED_MODULE_22___default.a, session, config.password, {
    ...iron_webcrypto__WEBPACK_IMPORTED_MODULE_23__[/* defaults */ "a"],
    ttl: config.maxAge ? config.maxAge * 1e3 : 0,
    ...config.seal
  });
  return sealed;
}
async function unsealSession(_event, config, sealed) {
  const unsealed = await Object(iron_webcrypto__WEBPACK_IMPORTED_MODULE_23__[/* unseal */ "c"])(config.crypto || uncrypto__WEBPACK_IMPORTED_MODULE_22___default.a, sealed, config.password, {
    ...iron_webcrypto__WEBPACK_IMPORTED_MODULE_23__[/* defaults */ "a"],
    ttl: config.maxAge ? config.maxAge * 1e3 : 0,
    ...config.seal
  });
  if (config.maxAge) {
    const age = Date.now() - (unsealed.createdAt || Number.NEGATIVE_INFINITY);
    if (age > config.maxAge * 1e3) {
      throw new Error("Session expired!");
    }
  }
  return unsealed;
}
function clearSession(event, config) {
  var _event$context$sessio7;
  const sessionName = config.name || DEFAULT_NAME;
  if ((_event$context$sessio7 = event.context.sessions) !== null && _event$context$sessio7 !== void 0 && _event$context$sessio7[sessionName]) {
    delete event.context.sessions[sessionName];
  }
  setCookie(event, sessionName, "", {
    ...DEFAULT_COOKIE,
    ...config.cookie
  });
  return Promise.resolve();
}
function formatEventStreamMessage(message) {
  let result = "";
  if (message.id) {
    result += `id: ${message.id}
`;
  }
  if (message.event) {
    result += `event: ${message.event}
`;
  }
  if (typeof message.retry === "number" && Number.isInteger(message.retry)) {
    result += `retry: ${message.retry}
`;
  }
  result += `data: ${message.data}

`;
  return result;
}
function formatEventStreamMessages(messages) {
  let result = "";
  for (const msg of messages) {
    result += formatEventStreamMessage(msg);
  }
  return result;
}
function setEventStreamHeaders(event) {
  const headers = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "private, no-cache, no-store, no-transform, must-revalidate, max-age=0",
    "X-Accel-Buffering": "no"
    // prevent nginx from buffering the response
  };
  if (!isHttp2Request(event)) {
    headers.Connection = "keep-alive";
  }
  setResponseHeaders(event, headers);
}
function isHttp2Request(event) {
  return getHeader(event, ":path") !== void 0 && getHeader(event, ":method") !== void 0;
}
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class EventStream {
  constructor(event, opts = {}) {
    __publicField$1(this, "_h3Event");
    __publicField$1(this, "_transformStream", new TransformStream());
    __publicField$1(this, "_writer");
    __publicField$1(this, "_encoder", new TextEncoder());
    __publicField$1(this, "_writerIsClosed", false);
    __publicField$1(this, "_paused", false);
    __publicField$1(this, "_unsentData");
    __publicField$1(this, "_disposed", false);
    __publicField$1(this, "_handled", false);
    this._h3Event = event;
    this._writer = this._transformStream.writable.getWriter();
    this._writer.closed.then(() => {
      this._writerIsClosed = true;
    });
    if (opts.autoclose !== false) {
      this._h3Event.node.req.on("close", () => this.close());
    }
  }
  async push(message) {
    if (typeof message === "string") {
      await this._sendEvent({
        data: message
      });
      return;
    }
    if (Array.isArray(message)) {
      if (message.length === 0) {
        return;
      }
      if (typeof message[0] === "string") {
        const msgs = [];
        for (const item of message) {
          msgs.push({
            data: item
          });
        }
        await this._sendEvents(msgs);
        return;
      }
      await this._sendEvents(message);
      return;
    }
    await this._sendEvent(message);
  }
  async _sendEvent(message) {
    if (this._writerIsClosed) {
      return;
    }
    if (this._paused && !this._unsentData) {
      this._unsentData = formatEventStreamMessage(message);
      return;
    }
    if (this._paused) {
      this._unsentData += formatEventStreamMessage(message);
      return;
    }
    await this._writer.write(this._encoder.encode(formatEventStreamMessage(message))).catch();
  }
  async _sendEvents(messages) {
    if (this._writerIsClosed) {
      return;
    }
    const payload = formatEventStreamMessages(messages);
    if (this._paused && !this._unsentData) {
      this._unsentData = payload;
      return;
    }
    if (this._paused) {
      this._unsentData += payload;
      return;
    }
    await this._writer.write(this._encoder.encode(payload)).catch();
  }
  pause() {
    this._paused = true;
  }
  get isPaused() {
    return this._paused;
  }
  async resume() {
    this._paused = false;
    await this.flush();
  }
  async flush() {
    var _this$_unsentData;
    if (this._writerIsClosed) {
      return;
    }
    if ((_this$_unsentData = this._unsentData) !== null && _this$_unsentData !== void 0 && _this$_unsentData.length) {
      await this._writer.write(this._encoder.encode(this._unsentData));
      this._unsentData = void 0;
    }
  }
  /**
   * Close the stream and the connection if the stream is being sent to the client
   */
  async close() {
    if (this._disposed) {
      return;
    }
    if (!this._writerIsClosed) {
      try {
        await this._writer.close();
      } catch {}
    }
    if (this._h3Event._handled && this._handled && !this._h3Event.node.res.closed) {
      this._h3Event.node.res.end();
    }
    this._disposed = true;
  }
  /**
   * Triggers callback when the writable stream is closed.
   * It is also triggered after calling the `close()` method.
   */
  onClosed(cb) {
    this._writer.closed.then(cb);
  }
  async send() {
    setEventStreamHeaders(this._h3Event);
    setResponseStatus(this._h3Event, 200);
    this._h3Event._handled = true;
    this._handled = true;
    await sendStream(this._h3Event, this._transformStream.readable);
  }
}
function createEventStream(event, opts) {
  return new EventStream(event, opts);
}
async function serveStatic(event, options) {
  if (event.method !== "GET" && event.method !== "HEAD") {
    if (!options.fallthrough) {
      throw createError({
        statusMessage: "Method Not Allowed",
        statusCode: 405
      });
    }
    return false;
  }
  const originalId = Object(ufo__WEBPACK_IMPORTED_MODULE_16__["decodePath"])(Object(ufo__WEBPACK_IMPORTED_MODULE_16__["withLeadingSlash"])(Object(ufo__WEBPACK_IMPORTED_MODULE_16__["withoutTrailingSlash"])(Object(ufo__WEBPACK_IMPORTED_MODULE_16__["parseURL"])(event.path).pathname)));
  const acceptEncodings = parseAcceptEncoding(getRequestHeader(event, "accept-encoding"), options.encodings);
  if (acceptEncodings.length > 1) {
    setResponseHeader(event, "vary", "accept-encoding");
  }
  let id = originalId;
  let meta;
  const _ids = idSearchPaths(originalId, acceptEncodings, options.indexNames || ["/index.html"]);
  for (const _id of _ids) {
    const _meta = await options.getMeta(_id);
    if (_meta) {
      meta = _meta;
      id = _id;
      break;
    }
  }
  if (!meta) {
    if (!options.fallthrough) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return false;
  }
  if (meta.etag && !getResponseHeader(event, "etag")) {
    setResponseHeader(event, "etag", meta.etag);
  }
  const ifNotMatch = meta.etag && getRequestHeader(event, "if-none-match") === meta.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return send(event, "");
  }
  if (meta.mtime) {
    const mtimeDate = new Date(meta.mtime);
    const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
    if (ifModifiedSinceH && new Date(ifModifiedSinceH) >= mtimeDate) {
      setResponseStatus(event, 304, "Not Modified");
      return send(event, null);
    }
    if (!getResponseHeader(event, "last-modified")) {
      setResponseHeader(event, "last-modified", mtimeDate.toUTCString());
    }
  }
  if (meta.type && !getResponseHeader(event, "content-type")) {
    setResponseHeader(event, "content-type", meta.type);
  }
  if (meta.encoding && !getResponseHeader(event, "content-encoding")) {
    setResponseHeader(event, "content-encoding", meta.encoding);
  }
  if (meta.size !== void 0 && meta.size > 0 && !getResponseHeader(event, "content-length")) {
    setResponseHeader(event, "content-length", meta.size);
  }
  if (event.method === "HEAD") {
    return send(event, null);
  }
  const contents = await options.getContents(id);
  return isStream(contents) ? sendStream(event, contents) : send(event, contents);
}
function parseAcceptEncoding(header, encodingMap) {
  if (!encodingMap || !header) {
    return [];
  }
  return String(header || "").split(",").map(e => encodingMap[e.trim()]).filter(Boolean);
}
function idSearchPaths(id, encodings, indexNames) {
  const ids = [];
  for (const suffix of ["", ...indexNames]) {
    for (const encoding of [...encodings, ""]) {
      ids.push(`${id}${suffix}${encoding}`);
    }
  }
  return ids;
}
function defineWebSocket(hooks) {
  return hooks;
}
function defineWebSocketHandler(hooks) {
  return defineEventHandler({
    handler() {
      throw createError({
        statusCode: 426,
        statusMessage: "Upgrade Required"
      });
    },
    websocket: hooks
  });
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    // Hooks
    __publicField(this, "_onBeforeResponseCalled");
    __publicField(this, "_onAfterResponseCalled");
    this.node = {
      req,
      res
    };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(_response => sendWebResponse(this, _response));
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}
function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = event => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = {
    body
  };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function defineRequestMiddleware(fn) {
  return fn;
}
function defineResponseMiddleware(fn) {
  return fn;
}
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", _route && _route !== "/" ? `
     Route: ${_route}` : "", `
     Handler: ${input}`);
  }
  return input;
}
function dynamicEventHandler(initial) {
  let current = initial;
  const wrapper = eventHandler(event => {
    if (current) {
      return current(event);
    }
  });
  wrapper.set = handler => {
    current = handler;
  };
  return wrapper;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then(r => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError("Invalid lazy handler result. It should be a function:", handler2);
        }
        _resolved = {
          handler: toEventHandler(r.default || r)
        };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler(event => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then(r => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;
const H3Headers = globalThis.Headers;
const H3Response = globalThis.Response;
function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(normalizeLayer({
      ...arg3,
      route: arg1,
      handler: arg2
    }));
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({
      ...arg2,
      handler: arg1
    }));
  } else {
    app.stack.push(normalizeLayer({
      ...arg1
    }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async event => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = {
          body: _body
        };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async path => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = {
        route: layer.route,
        handler: layer.handler
      };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: Object(ufo__WEBPACK_IMPORTED_MODULE_16__["joinURL"])(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: Object(ufo__WEBPACK_IMPORTED_MODULE_16__["withoutTrailingSlash"])(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then(arrayBuffer => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      var _resolved$handler;
      const {
        pathname
      } = Object(ufo__WEBPACK_IMPORTED_MODULE_16__["parseURL"])(info.url || "/");
      const resolved = await evResolver(pathname);
      return (resolved === null || resolved === void 0 ? void 0 : (_resolved$handler = resolved.handler) === null || _resolved$handler === void 0 ? void 0 : _resolved$handler.__websocket__) || {};
    }
  };
}
const RouterMethods = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
function createRouter(opts = {}) {
  const _router = Object(radix3__WEBPACK_IMPORTED_MODULE_19__["createRouter"])({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = {
        path,
        handlers: {}
      };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = Object(radix3__WEBPACK_IMPORTED_MODULE_19__["toRouteMatcher"])(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return {
      matched,
      handler
    };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler(event => {
    const match = matchHandler(event.path, event.method.toLowerCase());
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then(res => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async path => {
    path = Object(ufo__WEBPACK_IMPORTED_MODULE_16__["withLeadingSlash"])(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = {
        ...res,
        ..._res
      };
    }
    return res;
  };
  return router;
}
const defineNodeListener = handler => handler;
const defineNodeMiddleware = middleware => middleware;
function fromNodeMiddleware(handler) {
  if (isEventHandler(handler)) {
    return handler;
  }
  if (typeof handler !== "function") {
    throw new TypeError("Invalid handler. It should be a function:", handler);
  }
  return eventHandler(event => {
    return callNodeListener(handler, event.node.req, event.node.res);
  });
}
function toNodeListener(app) {
  const toNodeHandle = async function (req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, {
          body: error
        });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, {
          body: error
        });
      }
    }
  };
  return toNodeHandle;
}
function promisifyNodeListener(handler) {
  return function (req, res) {
    return callNodeListener(handler, req, res);
  };
}
function callNodeListener(handler, req, res) {
  const isMiddleware = handler.length > 2;
  return new Promise((resolve, reject) => {
    const next = err => {
      if (isMiddleware) {
        res.off("close", next);
        res.off("error", next);
      }
      return err ? reject(createError(err)) : resolve(void 0);
    };
    try {
      const returned = handler(req, res, next);
      if (isMiddleware && returned === void 0) {
        res.once("close", next);
        res.once("error", next);
      } else {
        resolve(returned);
      }
    } catch (error) {
      next(error);
    }
  });
}
function toPlainHandler(app) {
  const handler = request => {
    return _handlePlainRequest(app, request);
  };
  return handler;
}
function fromPlainHandler(handler) {
  return eventHandler(async event => {
    const res = await handler({
      method: event.method,
      path: event.path,
      headers: Object.fromEntries(event.headers.entries()),
      body: getRequestWebStream(event),
      context: event.context
    });
    setResponseStatus(event, res.status, res.statusText);
    for (const [key, value] of res.headers) {
      setResponseHeader(event, key, value);
    }
    return res.body;
  });
}
async function _handlePlainRequest(app, request) {
  const path = request.path;
  const method = (request.method || "GET").toUpperCase();
  const headers = new Headers(request.headers);
  const nodeReq = new unenv_runtime_node_http_index__WEBPACK_IMPORTED_MODULE_24__[/* IncomingMessage */ "a"]();
  const nodeRes = new unenv_runtime_node_http_index__WEBPACK_IMPORTED_MODULE_24__[/* ServerResponse */ "b"](nodeReq);
  nodeReq.method = method;
  nodeReq.url = path;
  nodeReq.headers = Object.fromEntries(headers.entries());
  const event = createEvent(nodeReq, nodeRes);
  event._method = method;
  event._path = path;
  event._headers = headers;
  if (request.body) {
    event._requestBody = request.body;
  }
  if (request._eventOverrides) {
    Object.assign(event, request._eventOverrides);
  }
  if (request.context) {
    Object.assign(event.context, request.context);
  }
  try {
    await app.handler(event);
  } catch (_error) {
    const error = createError(_error);
    if (!isError(_error)) {
      error.unhandled = true;
    }
    if (app.options.onError) {
      await app.options.onError(error, event);
    }
    if (!event.handled) {
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      await sendError(event, error, !!app.options.debug);
    }
  }
  return {
    status: nodeRes.statusCode,
    statusText: nodeRes.statusMessage,
    headers: _normalizeUnenvHeaders(nodeRes._headers),
    body: nodeRes._data
  };
}
function _normalizeUnenvHeaders(input) {
  const headers = [];
  const cookies = [];
  for (const _key in input) {
    const key = _key.toLowerCase();
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(input["set-cookie"]));
      continue;
    }
    const value = input[key];
    if (Array.isArray(value)) {
      for (const _value of value) {
        headers.push([key, _value]);
      }
    } else if (value !== void 0) {
      headers.push([key, String(value)]);
    }
  }
  if (cookies.length > 0) {
    for (const cookie of cookies) {
      headers.push(["set-cookie", cookie]);
    }
  }
  return headers;
}
function toWebHandler(app) {
  const webHandler = (request, context) => {
    return _handleWebRequest(app, request, context);
  };
  return webHandler;
}
function fromWebHandler(handler) {
  return eventHandler(event => handler(toWebRequest(event), event.context));
}
const nullBodyResponses = /* @__PURE__ */new Set([101, 204, 205, 304]);
async function _handleWebRequest(app, request, context) {
  const url = new URL(request.url);
  const res = await _handlePlainRequest(app, {
    _eventOverrides: {
      web: {
        request,
        url
      }
    },
    context,
    method: request.method,
    path: url.pathname + url.search,
    headers: request.headers,
    body: request.body
  });
  const body = nullBodyResponses.has(res.status) || request.method === "HEAD" ? null : res.body;
  return new Response(body, {
    status: res.status,
    statusText: res.statusText,
    headers: res.headers
  });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)["URL"], __webpack_require__(31)["URLSearchParams"]))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useRequestHeaders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRequestEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useRequestFetch; });
/* harmony import */ var h3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function useRequestHeaders(include) {
  if (false) {}
  const event = useRequestEvent();
  const headers = event ? Object(h3__WEBPACK_IMPORTED_MODULE_0__[/* getRequestHeaders */ "f"])(event) : {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map(key => key.toLowerCase()).filter(key => headers[key]).map(key => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = Object(_nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__[/* useNuxtApp */ "d"])()) {
  var _nuxtApp$ssrContext, _nuxtApp$ssrContext2, _nuxtApp$ssrContext3, _nuxtApp$ssrContext4;
  if ( false || !nuxtApp.ssrContext) {
    return void 0;
  }
  if ((_nuxtApp$ssrContext = nuxtApp.ssrContext) !== null && _nuxtApp$ssrContext !== void 0 && _nuxtApp$ssrContext.event) {
    return nuxtApp.ssrContext.event;
  }
  if ((_nuxtApp$ssrContext2 = nuxtApp.ssrContext) !== null && _nuxtApp$ssrContext2 !== void 0 && _nuxtApp$ssrContext2._event) {
    return nuxtApp.ssrContext._event;
  }
  nuxtApp.ssrContext._event = Object(h3__WEBPACK_IMPORTED_MODULE_0__[/* createEvent */ "b"])((_nuxtApp$ssrContext3 = nuxtApp.ssrContext) === null || _nuxtApp$ssrContext3 === void 0 ? void 0 : _nuxtApp$ssrContext3.req, (_nuxtApp$ssrContext4 = nuxtApp.ssrContext) === null || _nuxtApp$ssrContext4 === void 0 ? void 0 : _nuxtApp$ssrContext4.res);
  return nuxtApp.ssrContext._event;
}
function useRequestFetch() {
  var _useRequestEvent;
  if (false) {}
  return ((_useRequestEvent = useRequestEvent()) === null || _useRequestEvent === void 0 ? void 0 : _useRequestEvent.$fetch) || globalThis.$fetch;
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("cookie-es");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export diff */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isEqual; });
/* unused harmony export murmurHash */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return objectHash; });
/* unused harmony export sha256 */
/* unused harmony export sha256base64 */
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(27);
/* harmony import */ var core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_28__);





























const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = {
      ...defaults,
      ...options
    };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze(["prototype", "__proto__", "constructor"]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */new Map();
  const write = str => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter(key => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter(key => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = key => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */new Map();
      const entries = arr.map(entry => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(Array.from(value.entries()), true
        /* ordered */);
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}
class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._data = new WordArray();
    this._nDataBytes = 0;
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _doProcessBlock(_dataWords, _offset) {}
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}
const H = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
const K = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    this._hash = new WordArray([...H]);
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256(message) {
  return new SHA256().finalize(message).toString();
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}
function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}
function murmurHash(key, seed = 0) {
  if (typeof key === "string") {
    key = createBuffer(key);
  }
  let i = 0;
  let h1 = seed;
  let k1;
  let h1b;
  const remainder = key.length & 3;
  const bytes = key.length - remainder;
  const c1 = 3432918353;
  const c2 = 461845907;
  while (i < bytes) {
    k1 = key[i] & 255 | (key[++i] & 255) << 8 | (key[++i] & 255) << 16 | (key[++i] & 255) << 24;
    ++i;
    k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
    k1 = k1 << 15 | k1 >>> 17;
    k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
    h1 ^= k1;
    h1 = h1 << 13 | h1 >>> 19;
    h1b = (h1 & 65535) * 5 + (((h1 >>> 16) * 5 & 65535) << 16) & 4294967295;
    h1 = (h1b & 65535) + 27492 + (((h1b >>> 16) + 58964 & 65535) << 16);
  }
  k1 = 0;
  switch (remainder) {
    case 3:
      {
        k1 ^= (key[i + 2] & 255) << 16;
        break;
      }
    case 2:
      {
        k1 ^= (key[i + 1] & 255) << 8;
        break;
      }
    case 1:
      {
        k1 ^= key[i] & 255;
        k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
        h1 ^= k1;
      }
  }
  h1 ^= key.length;
  h1 ^= h1 >>> 16;
  h1 = (h1 & 65535) * 2246822507 + (((h1 >>> 16) * 2246822507 & 65535) << 16) & 4294967295;
  h1 ^= h1 >>> 13;
  h1 = (h1 & 65535) * 3266489909 + (((h1 >>> 16) * 3266489909 & 65535) << 16) & 4294967295;
  h1 ^= h1 >>> 16;
  return h1 >>> 0;
}
function createBuffer(val) {
  return new TextEncoder().encode(val);
}
function isEqual(object1, object2, hashOptions = {}) {
  if (object1 === object2) {
    return true;
  }
  if (objectHash(object1, hashOptions) === objectHash(object2, hashOptions)) {
    return true;
  }
  return false;
}
function diff(obj1, obj2, opts = {}) {
  const h1 = _toHashedObject(obj1, opts);
  const h2 = _toHashedObject(obj2, opts);
  return _diff(h1, h2, opts);
}
function _diff(h1, h2, opts = {}) {
  const diffs = [];
  const allProps = /* @__PURE__ */new Set([...Object.keys(h1.props || {}), ...Object.keys(h2.props || {})]);
  if (h1.props && h2.props) {
    for (const prop of allProps) {
      const p1 = h1.props[prop];
      const p2 = h2.props[prop];
      if (p1 && p2) {
        var _h1$props, _h2$props;
        diffs.push(..._diff((_h1$props = h1.props) === null || _h1$props === void 0 ? void 0 : _h1$props[prop], (_h2$props = h2.props) === null || _h2$props === void 0 ? void 0 : _h2$props[prop], opts));
      } else if (p1 || p2) {
        diffs.push(new DiffEntry((p2 || p1).key, p1 ? "removed" : "added", p2, p1));
      }
    }
  }
  if (allProps.size === 0 && h1.hash !== h2.hash) {
    diffs.push(new DiffEntry((h2 || h1).key, "changed", h2, h1));
  }
  return diffs;
}
function _toHashedObject(obj, opts, key = "") {
  if (obj && typeof obj !== "object") {
    return new DiffHashedObject(key, obj, objectHash(obj, opts));
  }
  const props = {};
  const hashes = [];
  for (const _key in obj) {
    props[_key] = _toHashedObject(obj[_key], opts, key ? `${key}.${_key}` : _key);
    hashes.push(props[_key].hash);
  }
  return new DiffHashedObject(key, obj, `{${hashes.join(":")}}`, props);
}
class DiffEntry {
  // eslint-disable-next-line no-useless-constructor
  constructor(key, type, newValue, oldValue) {
    this.key = key;
    this.type = type;
    this.newValue = newValue;
    this.oldValue = oldValue;
  }
  toString() {
    return this.toJSON();
  }
  toJSON() {
    switch (this.type) {
      case "added":
        {
          return `Added   \`${this.key}\``;
        }
      case "removed":
        {
          return `Removed \`${this.key}\``;
        }
      case "changed":
        {
          var _this$oldValue;
          return `Changed \`${this.key}\` from \`${((_this$oldValue = this.oldValue) === null || _this$oldValue === void 0 ? void 0 : _this$oldValue.toString()) || "-"}\` to \`${this.newValue.toString()}\``;
        }
    }
  }
}
class DiffHashedObject {
  // eslint-disable-next-line no-useless-constructor
  constructor(key, value, hash, props) {
    this.key = key;
    this.value = value;
    this.hash = hash;
    this.props = props;
  }
  toString() {
    if (this.props) {
      return `{${Object.keys(this.props).join(",")}}`;
    } else {
      return JSON.stringify(this.value);
    }
  }
  toJSON() {
    const k = this.key || ".";
    if (this.props) {
      return `${k}({${Object.keys(this.props).join(",")}})`;
    }
    return `${k}(${this.value})`;
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const middleware = {};
/* harmony default export */ __webpack_exports__["default"] = (middleware);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("uncrypto");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export algorithms */
/* unused harmony export base64urlDecode */
/* unused harmony export base64urlEncode */
/* unused harmony export bufferToString */
/* unused harmony export clone */
/* unused harmony export decrypt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaults; });
/* unused harmony export encrypt */
/* unused harmony export generateKey */
/* unused harmony export hmacWithPassword */
/* unused harmony export macFormatVersion */
/* unused harmony export macPrefix */
/* unused harmony export randomBits */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return seal; });
/* unused harmony export stringToBuffer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unseal; });
// src/utils.ts
var alphabetByEncoding = {};
var alphabetByValue = Array.from({
  length: 64
});
for (let i = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  alphabetByEncoding[char] = i;
  alphabetByValue[i] = char;
}
for (let i = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  const index = i + 26;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
for (let i = 0; i < 10; i++) {
  alphabetByEncoding[i.toString(10)] = i + 52;
  const char = i.toString(10);
  const index = i + 52;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
alphabetByEncoding["-"] = 62;
alphabetByValue[62] = "-";
alphabetByEncoding["_"] = 63;
alphabetByValue[63] = "_";
var bitsPerLetter = 6;
var bitsPerByte = 8;
var maxLetterValue = 63;
var stringToBuffer = value => {
  return new TextEncoder().encode(value);
};
var bufferToString = value => {
  return new TextDecoder().decode(value);
};
var base64urlDecode = _input => {
  const input = _input + "=".repeat((4 - _input.length % 4) % 4);
  let totalByteLength = input.length / 4 * 3;
  if (input.endsWith("==")) {
    totalByteLength -= 2;
  } else if (input.endsWith("=")) {
    totalByteLength--;
  }
  const out = new ArrayBuffer(totalByteLength);
  const dataView = new DataView(out);
  for (let i = 0; i < input.length; i += 4) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = i + 3; j <= limit; j++) {
      if (input[j] === "=") {
        bits >>= bitsPerLetter;
      } else {
        if (!(input[j] in alphabetByEncoding)) {
          throw new TypeError(`Invalid character ${input[j]} in base64 string.`);
        }
        bits |= alphabetByEncoding[input[j]] << (limit - j) * bitsPerLetter;
        bitLength += bitsPerLetter;
      }
    }
    const chunkOffset = i / 4 * 3;
    bits >>= bitLength % bitsPerByte;
    const byteLength = Math.floor(bitLength / bitsPerByte);
    for (let k = 0; k < byteLength; k++) {
      const offset = (byteLength - k - 1) * bitsPerByte;
      dataView.setUint8(chunkOffset + k, (bits & 255 << offset) >> offset);
    }
  }
  return new Uint8Array(out);
};
var base64urlEncode = _input => {
  const input = typeof _input === "string" ? stringToBuffer(_input) : _input;
  let str = "";
  for (let i = 0; i < input.length; i += 3) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {
      bits |= input[j] << (limit - j - 1) * bitsPerByte;
      bitLength += bitsPerByte;
    }
    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (let k = 1; k <= bitClusterCount; k++) {
      const offset = (bitClusterCount - k) * bitsPerLetter;
      str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
    }
  }
  return str;
};

// src/index.ts
var defaults = {
  encryption: {
    saltBits: 256,
    algorithm: "aes-256-cbc",
    iterations: 1,
    minPasswordlength: 32
  },
  integrity: {
    saltBits: 256,
    algorithm: "sha256",
    iterations: 1,
    minPasswordlength: 32
  },
  ttl: 0,
  timestampSkewSec: 60,
  localtimeOffsetMsec: 0
};
var clone = options => ({
  ...options,
  encryption: {
    ...options.encryption
  },
  integrity: {
    ...options.integrity
  }
});
var algorithms = {
  "aes-128-ctr": {
    keyBits: 128,
    ivBits: 128,
    name: "AES-CTR"
  },
  "aes-256-cbc": {
    keyBits: 256,
    ivBits: 128,
    name: "AES-CBC"
  },
  sha256: {
    keyBits: 256,
    name: "SHA-256"
  }
};
var macFormatVersion = "2";
var macPrefix = "Fe26.2";
var randomBytes = (_crypto, size) => {
  const bytes = new Uint8Array(size);
  _crypto.getRandomValues(bytes);
  return bytes;
};
var randomBits = (_crypto, bits) => {
  if (bits < 1) throw new Error("Invalid random bits count");
  const bytes = Math.ceil(bits / 8);
  return randomBytes(_crypto, bytes);
};
var pbkdf2 = async (_crypto, password, salt, iterations, keyLength, hash) => {
  const passwordBuffer = stringToBuffer(password);
  const importedKey = await _crypto.subtle.importKey("raw", passwordBuffer, {
    name: "PBKDF2"
  }, false, ["deriveBits"]);
  const saltBuffer = stringToBuffer(salt);
  const params = {
    name: "PBKDF2",
    hash,
    salt: saltBuffer,
    iterations
  };
  const derivation = await _crypto.subtle.deriveBits(params, importedKey, keyLength * 8);
  return derivation;
};
var generateKey = async (_crypto, password, options) => {
  var _a;
  if (!(password == null ? void 0 : password.length)) throw new Error("Empty password");
  if (options == null || typeof options !== "object") throw new Error("Bad options");
  if (!(options.algorithm in algorithms)) throw new Error(`Unknown algorithm: ${options.algorithm}`);
  const algorithm = algorithms[options.algorithm];
  const result = {};
  const hmac = (_a = options.hmac) != null ? _a : false;
  const id = hmac ? {
    name: "HMAC",
    hash: algorithm.name
  } : {
    name: algorithm.name
  };
  const usage = hmac ? ["sign", "verify"] : ["encrypt", "decrypt"];
  if (typeof password === "string") {
    if (password.length < options.minPasswordlength) throw new Error(`Password string too short (min ${options.minPasswordlength} characters required)`);
    let {
      salt = ""
    } = options;
    if (!salt) {
      const {
        saltBits = 0
      } = options;
      if (!saltBits) throw new Error("Missing salt and saltBits options");
      const randomSalt = randomBits(_crypto, saltBits);
      salt = [...new Uint8Array(randomSalt)].map(x => x.toString(16).padStart(2, "0")).join("");
    }
    const derivedKey = await pbkdf2(_crypto, password, salt, options.iterations, algorithm.keyBits / 8, "SHA-1");
    const importedEncryptionKey = await _crypto.subtle.importKey("raw", derivedKey, id, false, usage);
    result.key = importedEncryptionKey;
    result.salt = salt;
  } else {
    if (password.length < algorithm.keyBits / 8) throw new Error("Key buffer (password) too small");
    result.key = await _crypto.subtle.importKey("raw", password, id, false, usage);
    result.salt = "";
  }
  if (options.iv) result.iv = options.iv;else if ("ivBits" in algorithm) result.iv = randomBits(_crypto, algorithm.ivBits);
  return result;
};
var getEncryptParams = (algorithm, key, data) => {
  return [algorithm === "aes-128-ctr" ? {
    name: "AES-CTR",
    counter: key.iv,
    length: 128
  } : {
    name: "AES-CBC",
    iv: key.iv
  }, key.key, typeof data === "string" ? stringToBuffer(data) : data];
};
var encrypt = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, options);
  const encrypted = await _crypto.subtle.encrypt(...getEncryptParams(options.algorithm, key, data));
  return {
    encrypted: new Uint8Array(encrypted),
    key
  };
};
var decrypt = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, options);
  const decrypted = await _crypto.subtle.decrypt(...getEncryptParams(options.algorithm, key, data));
  return bufferToString(new Uint8Array(decrypted));
};
var hmacWithPassword = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, {
    ...options,
    hmac: true
  });
  const textBuffer = stringToBuffer(data);
  const signed = await _crypto.subtle.sign({
    name: "HMAC"
  }, key.key, textBuffer);
  const digest = base64urlEncode(new Uint8Array(signed));
  return {
    digest,
    salt: key.salt
  };
};
var normalizePassword = password => {
  if (typeof password === "string" || password instanceof Uint8Array) return {
    encryption: password,
    integrity: password
  };
  if ("secret" in password) return {
    id: password.id,
    encryption: password.secret,
    integrity: password.secret
  };
  return {
    id: password.id,
    encryption: password.encryption,
    integrity: password.integrity
  };
};
var seal = async (_crypto, object, password, options) => {
  if (!password) throw new Error("Empty password");
  const opts = clone(options);
  const now = Date.now() + (opts.localtimeOffsetMsec || 0);
  const objectString = JSON.stringify(object);
  const pass = normalizePassword(password);
  const {
    id = "",
    encryption,
    integrity
  } = pass;
  if (id && !/^\w+$/.test(id)) throw new Error("Invalid password id");
  const {
    encrypted,
    key
  } = await encrypt(_crypto, encryption, opts.encryption, objectString);
  const encryptedB64 = base64urlEncode(new Uint8Array(encrypted));
  const iv = base64urlEncode(key.iv);
  const expiration = opts.ttl ? now + opts.ttl : "";
  const macBaseString = `${macPrefix}*${id}*${key.salt}*${iv}*${encryptedB64}*${expiration}`;
  const mac = await hmacWithPassword(_crypto, integrity, opts.integrity, macBaseString);
  const sealed = `${macBaseString}*${mac.salt}*${mac.digest}`;
  return sealed;
};
var fixedTimeComparison = (a, b) => {
  let mismatch = a.length === b.length ? 0 : 1;
  if (mismatch) b = a;
  for (let i = 0; i < a.length; i += 1) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
};
var unseal = async (_crypto, sealed, password, options) => {
  if (!password) throw new Error("Empty password");
  const opts = clone(options);
  const now = Date.now() + (opts.localtimeOffsetMsec || 0);
  const parts = sealed.split("*");
  if (parts.length !== 8) throw new Error("Incorrect number of sealed components");
  const prefix = parts[0];
  let passwordId = parts[1];
  const encryptionSalt = parts[2];
  const encryptionIv = parts[3];
  const encryptedB64 = parts[4];
  const expiration = parts[5];
  const hmacSalt = parts[6];
  const hmac = parts[7];
  const macBaseString = `${prefix}*${passwordId}*${encryptionSalt}*${encryptionIv}*${encryptedB64}*${expiration}`;
  if (macPrefix !== prefix) throw new Error("Wrong mac prefix");
  if (expiration) {
    if (!/^\d+$/.test(expiration)) throw new Error("Invalid expiration");
    const exp = Number.parseInt(expiration, 10);
    if (exp <= now - opts.timestampSkewSec * 1e3) throw new Error("Expired seal");
  }
  let pass = "";
  passwordId = passwordId || "default";
  if (typeof password === "string" || password instanceof Uint8Array) pass = password;else if (passwordId in password) {
    pass = password[passwordId];
  } else {
    throw new Error(`Cannot find password: ${passwordId}`);
  }
  pass = normalizePassword(pass);
  const macOptions = opts.integrity;
  macOptions.salt = hmacSalt;
  const mac = await hmacWithPassword(_crypto, pass.integrity, macOptions, macBaseString);
  if (!fixedTimeComparison(mac.digest, hmac)) throw new Error("Bad hmac value");
  const encrypted = base64urlDecode(encryptedB64);
  const decryptOptions = opts.encryption;
  decryptOptions.salt = encryptionSalt;
  decryptOptions.iv = base64urlDecode(encryptionIv);
  const decrypted = await decrypt(_crypto, pass.encryption, decryptOptions, encrypted);
  if (decrypted) return JSON.parse(decrypted);
  return null;
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("hookable");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("destr");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-no-ssr v1.1.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = {
  name: 'NoSsr',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ref) {
    var parent = ref.parent;
    var slots = ref.slots;
    var props = ref.props;
    var ref$1 = slots();
    var defaultSlot = ref$1.default;
    if (defaultSlot === void 0) defaultSlot = [];
    var placeholderSlot = ref$1.placeholder;
    if (parent._isMounted) {
      return defaultSlot;
    }
    parent.$once('hook:mounted', function () {
      parent.$forceUpdate();
    });
    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(props.placeholderTag, {
        class: ['no-ssr-placeholder']
      }, props.placeholder || placeholderSlot);
    }

    // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder
    return defaultSlot.length > 0 ? defaultSlot.map(function () {
      return h(false);
    }) : h(false);
  }
};
module.exports = index;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.add-all.js");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.delete-all.js");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.difference.js");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.every.js");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.filter.js");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.find.js");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.intersection.js");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-disjoint-from.js");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-subset-of.js");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-superset-of.js");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.join.js");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.map.js");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.reduce.js");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.some.js");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.symmetric-difference.js");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.union.js");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__(42);
} else {}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-client-only v0.0.0-semantic-release
 * (c) 2021-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = {
  name: 'ClientOnly',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ref) {
    var parent = ref.parent;
    var slots = ref.slots;
    var props = ref.props;
    var ref$1 = slots();
    var defaultSlot = ref$1.default;
    if (defaultSlot === void 0) defaultSlot = [];
    var placeholderSlot = ref$1.placeholder;
    if (parent._isMounted) {
      return defaultSlot;
    }
    parent.$once('hook:mounted', function () {
      parent.$forceUpdate();
    });
    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(props.placeholderTag, {
        class: ['client-only-placeholder']
      }, props.placeholder || placeholderSlot);
    }

    // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder
    return defaultSlot.length > 0 ? defaultSlot.map(function () {
      return h(false);
    }) : h(false);
  }
};
module.exports = index;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("radix3");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ _request_IncomingMessage; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ _response_ServerResponse; });

// UNUSED EXPORTS: METHODS, STATUS_CODES, maxHeaderSize, createServer, request, get, Server, OutgoingMessage, ClientRequest, Agent, globalAgent, validateHeaderName, validateHeaderValue, setMaxIdleHTTPParsers

// NAMESPACE OBJECT: ./node_modules/unenv/runtime/node/http/_consts.mjs
var _consts_namespaceObject = {};
__webpack_require__.r(_consts_namespaceObject);
__webpack_require__.d(_consts_namespaceObject, "METHODS", function() { return METHODS; });
__webpack_require__.d(_consts_namespaceObject, "STATUS_CODES", function() { return STATUS_CODES; });
__webpack_require__.d(_consts_namespaceObject, "maxHeaderSize", function() { return maxHeaderSize; });

// CONCATENATED MODULE: ./node_modules/unenv/runtime/_internal/utils.mjs
function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function (...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
  const fn = () => {
    throw createNotImplementedError(name);
  };
  return Object.assign(fn, {
    __unenv__: true
  });
}
function notImplementedClass(name) {
  return class {
    constructor() {
      this.__unenv__ = true;
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/unenv/runtime/mock/proxy.mjs
const proxy_fn = function () {};
function createMock(name, overrides = {}) {
  proxy_fn.prototype.name = name;
  const props = {};
  return new Proxy(proxy_fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop === "__unenv__") {
        return true;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    // @ts-ignore (ES6-only - removed in ES7)
    // https://github.com/tc39/ecma262/issues/161
    enumerate() {
      return [];
    }
  });
}
/* harmony default export */ var proxy = (createMock("mock"));
// CONCATENATED MODULE: ./node_modules/unenv/runtime/node/http/_consts.mjs
const METHODS = ["ACL", "BIND", "CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LINK", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCALENDAR", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PRI", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REBIND", "REPORT", "SEARCH", "SOURCE", "SUBSCRIBE", "TRACE", "UNBIND", "UNLINK", "UNLOCK", "UNSUBSCRIBE"];
const STATUS_CODES = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a Teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required"
};
const maxHeaderSize = 16384;
// CONCATENATED MODULE: ./node_modules/unenv/runtime/node/events/_events.mjs
let defaultMaxListeners = 10;
class EventEmitter {
  constructor() {
    this.__unenv__ = true;
    this._events = /* @__PURE__ */Object.create(null);
  }
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
}
function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }
    function resolver() {
      if (typeof emitter.removeListener === "function") {
        emitter.removeListener("error", errorListener);
      }
      resolve(Array.prototype.slice.call(arguments));
    }
    _eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });
    if (name !== "error") {
      _addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    var _target$_events$type;
    target._events[type].warned = true;
    const warning = new Error(`[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`);
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = (_target$_events$type = target._events[type]) === null || _target$_events$type === void 0 ? void 0 : _target$_events$type.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter(fn => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  var _target$_maxListeners;
  return (_target$_maxListeners = target._maxListeners) !== null && _target$_maxListeners !== void 0 ? _target$_maxListeners : EventEmitter.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map(l => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}
function _addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === "function") {
    _eventTargetAgnosticAddListener(emitter, "error", handler, flags);
  }
}
function _eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === "function") {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === "function") {
    emitter.addEventListener(name, listener);
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}
// CONCATENATED MODULE: ./node_modules/unenv/runtime/node/events/index.mjs

const events_EventEmitter = globalThis.EventEmitter || EventEmitter;
const events_once = once;
/* harmony default export */ var events = ({
  EventEmitter: events_EventEmitter,
  once: events_once
});
// CONCATENATED MODULE: ./node_modules/unenv/runtime/node/stream/readable.mjs


class readable_Readable extends events_EventEmitter {
  static from(_iterable, options) {
    return new readable_Readable(options);
  }
  constructor(_opts) {
    super();
    this.__unenv__ = true;
    this.readableEncoding = null;
    this.readableEnded = true;
    this.readableFlowing = false;
    this.readableHighWaterMark = 0;
    this.readableLength = 0;
    this.readableObjectMode = false;
    this.readableAborted = false;
    this.readableDidRead = false;
    this.closed = false;
    this.errored = null;
    this.readable = false;
    this.destroyed = false;
  }
  _read(_size) {}
  read(_size) {}
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {}
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || readable_Readable;
// CONCATENATED MODULE: ./node_modules/unenv/runtime/node/stream/writable.mjs

class writable_Writable extends events_EventEmitter {
  constructor(_opts) {
    super();
    this.__unenv__ = true;
    this.writable = true;
    this.writableEnded = false;
    this.writableFinished = false;
    this.writableHighWaterMark = 0;
    this.writableLength = 0;
    this.writableObjectMode = false;
    this.writableCorked = 0;
    this.closed = false;
    this.errored = null;
    this.writableNeedDrain = false;
    this.destroyed = false;
    this._encoding = "utf-8";
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {}
  _destroy(_error, _callback) {}
  _final(_callback) {}
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {}
  uncork() {}
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || writable_Writable;
// CONCATENATED MODULE: ./node_modules/unenv/runtime/node/stream/duplex.mjs



const duplex_Duplex = class __Duplex {
  constructor(readable = new Readable(), writable = new Writable()) {
    this.allowHalfOpen = true;
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(duplex_Duplex.prototype, Readable.prototype);
  Object.assign(duplex_Duplex.prototype, Writable.prototype);
  return duplex_Duplex;
}
const _Duplex = /* @__PURE__ */getDuplex();
const Duplex = globalThis.Duplex || _Duplex;
// CONCATENATED MODULE: ./node_modules/unenv/runtime/node/net/socket.mjs

class socket_Socket extends Duplex {
  constructor(_options) {
    super();
    this.__unenv__ = true;
    this.bufferSize = 0;
    this.bytesRead = 0;
    this.bytesWritten = 0;
    this.connecting = false;
    this.destroyed = false;
    this.pending = false;
    this.localAddress = "";
    this.localPort = 0;
    this.remoteAddress = "";
    this.remoteFamily = "";
    this.remotePort = 0;
    this.autoSelectFamilyAttemptedAddresses = [];
    this.readyState = "readOnly";
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}
class SocketAddress {
  constructor(options) {
    this.__unenv__ = true;
    this.address = options.address;
    this.family = options.family;
    this.port = options.port;
    this.flowlabel = options.flowlabel;
  }
}
// CONCATENATED MODULE: ./node_modules/unenv/runtime/node/http/_request.mjs



class _request_IncomingMessage extends Readable {
  constructor(socket) {
    super();
    this.__unenv__ = {};
    this.aborted = false;
    this.httpVersion = "1.1";
    this.httpVersionMajor = 1;
    this.httpVersionMinor = 1;
    this.complete = true;
    this.headers = {};
    this.trailers = {};
    this.method = "GET";
    this.url = "/";
    this.statusCode = 200;
    this.statusMessage = "";
    this.closed = false;
    this.errored = null;
    this.readable = false;
    this.socket = this.connection = socket || new socket_Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(Boolean);
    }
  }
  return d;
}
// CONCATENATED MODULE: ./node_modules/unenv/runtime/node/http/_response.mjs

class _response_ServerResponse extends Writable {
  constructor(req) {
    super();
    this.__unenv__ = true;
    this.statusCode = 200;
    this.statusMessage = "";
    this.upgrading = false;
    this.chunkedEncoding = false;
    this.shouldKeepAlive = false;
    this.useChunkedEncodingByDefault = false;
    this.sendDate = false;
    this.finished = false;
    this.headersSent = false;
    this.strictContentLength = false;
    this.connection = null;
    this.socket = null;
    this._headers = {};
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {}
  writeContinue(_callback) {}
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) {} else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {}
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [...(Array.isArray(current) ? current : [current]), ...(Array.isArray(value) ? value : [value])].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {}
  flushHeaders() {}
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}
// CONCATENATED MODULE: ./node_modules/unenv/runtime/node/http/index.mjs








const createServer = notImplemented("http.createServer");
const request = notImplemented("http.request");
const get = notImplemented("http.get");
const Server = proxy.__createMock__("http.Server");
const OutgoingMessage = proxy.__createMock__("http.OutgoingMessage");
const ClientRequest = proxy.__createMock__("http.ClientRequest");
const Agent = proxy.__createMock__("http.Agent");
const globalAgent = new Agent();
const validateHeaderName = notImplemented("http.validateHeaderName");
const validateHeaderValue = notImplemented("http.validateHeaderValue");
const setMaxIdleHTTPParsers = notImplemented("http.setMaxIdleHTTPParsers");
/* harmony default export */ var http = ({
  ..._consts_namespaceObject,
  IncomingMessage: _request_IncomingMessage,
  ServerResponse: _response_ServerResponse,
  createServer,
  request,
  get,
  Server,
  OutgoingMessage,
  ClientRequest,
  Agent,
  globalAgent,
  validateHeaderName,
  validateHeaderValue,
  setMaxIdleHTTPParsers
});

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* unused harmony export useRequestURL */
/* harmony import */ var h3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _ssr_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function useRequestURL(opts) {
  if (true) {
    return Object(h3__WEBPACK_IMPORTED_MODULE_0__[/* getRequestURL */ "g"])(Object(_ssr_mjs__WEBPACK_IMPORTED_MODULE_1__[/* useRequestEvent */ "a"])(), opts);
  }
  return new URL(window.location.href);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)["URL"]))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * vue-meta v2.4.0
 * (c) 2020
 * - Declan de Wet
 * - Sébastien Chopin (@Atinux)
 * - Pim (@pimlie)
 * - All the amazing contributors
 * @license MIT
 */



function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var deepmerge = _interopDefault(__webpack_require__(43));
var version = "2.4.0";
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 * checks if passed argument is an array
 * @param  {any}  arg - the object to check
 * @return {Boolean} - true if `arg` is an array
 */
function isArray(arg) {
  return Array.isArray(arg);
}
function isUndefined(arg) {
  return typeof arg === 'undefined';
}
function isObject(arg) {
  return _typeof(arg) === 'object';
}
function isPureObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}
function isFunction(arg) {
  return typeof arg === 'function';
}
function isString(arg) {
  return typeof arg === 'string';
}
function hasGlobalWindowFn() {
  try {
    return !isUndefined(window);
  } catch (e) {
    return false;
  }
}
var hasGlobalWindow = hasGlobalWindowFn();
var _global = hasGlobalWindow ? window : global;
var console = _global.console || {};
function warn(str) {
  /* istanbul ignore next */
  if (!console || !console.warn) {
    return;
  }
  console.warn(str);
}
var showWarningNotSupported = function showWarningNotSupported() {
  return warn('This vue app/component has no vue-meta configuration');
};

/**
 * These are constant variables used throughout the application.
 */
// set some sane defaults
var defaultInfo = {
  title: undefined,
  titleChunk: '',
  titleTemplate: '%s',
  htmlAttrs: {},
  bodyAttrs: {},
  headAttrs: {},
  base: [],
  link: [],
  meta: [],
  style: [],
  script: [],
  noscript: [],
  __dangerouslyDisableSanitizers: [],
  __dangerouslyDisableSanitizersByTagID: {}
};
var rootConfigKey = '_vueMeta'; // This is the name of the component option that contains all the information that
// gets converted to the various meta tags & attributes for the page.

var keyName = 'metaInfo'; // This is the attribute vue-meta arguments on elements to know which it should
// manage and which it should ignore.

var attribute = 'data-vue-meta'; // This is the attribute that goes on the `html` tag to inform `vue-meta`
// that the server has already generated the meta tags for the initial render.

var ssrAttribute = 'data-vue-meta-server-rendered'; // This is the property that tells vue-meta to overwrite (instead of append)
// an item in a tag list. For example, if you have two `meta` tag list items
// that both have `vmid` of "description", then vue-meta will overwrite the
// shallowest one with the deepest one.

var tagIDKeyName = 'vmid'; // This is the key name for possible meta templates

var metaTemplateKeyName = 'template'; // This is the key name for the content-holding property

var contentKeyName = 'content'; // The id used for the ssr app

var ssrAppId = 'ssr'; // How long meta update

var debounceWait = 10; // How long meta update

var waitOnDestroyed = true;
var defaultOptions = {
  keyName: keyName,
  attribute: attribute,
  ssrAttribute: ssrAttribute,
  tagIDKeyName: tagIDKeyName,
  contentKeyName: contentKeyName,
  metaTemplateKeyName: metaTemplateKeyName,
  waitOnDestroyed: waitOnDestroyed,
  debounceWait: debounceWait,
  ssrAppId: ssrAppId
}; // might be a bit ugly, but minimizes the browser bundles a bit

var defaultInfoKeys = Object.keys(defaultInfo); // The metaInfo property keys which are used to disable escaping

var disableOptionKeys = [defaultInfoKeys[12], defaultInfoKeys[13]]; // List of metaInfo property keys which are configuration options (and dont generate html)

var metaInfoOptionKeys = [defaultInfoKeys[1], defaultInfoKeys[2], 'changed'].concat(disableOptionKeys); // List of metaInfo property keys which only generates attributes and no tags

var metaInfoAttributeKeys = [defaultInfoKeys[3], defaultInfoKeys[4], defaultInfoKeys[5]]; // HTML elements which support the onload event

var tagsSupportingOnload = ['link', 'style', 'script']; // HTML elements which dont have a head tag (shortened to our needs)
// see: https://www.w3.org/TR/html52/document-metadata.html

var tagsWithoutEndTag = ['base', 'meta', 'link']; // HTML elements which can have inner content (shortened to our needs)

var tagsWithInnerContent = ['noscript', 'script', 'style']; // Attributes which are inserted as childNodes instead of HTMLAttribute

var tagAttributeAsInnerContent = ['innerHTML', 'cssText', 'json'];
var tagProperties = ['once', 'skip', 'template']; // Attributes which should be added with data- prefix

var commonDataAttributes = ['body', 'pbody']; // from: https://github.com/kangax/html-minifier/blob/gh-pages/src/htmlminifier.js#L202

var booleanHtmlAttributes = ['allowfullscreen', 'amp', 'amp-boilerplate', 'async', 'autofocus', 'autoplay', 'checked', 'compact', 'controls', 'declare', 'default', 'defaultchecked', 'defaultmuted', 'defaultselected', 'defer', 'disabled', 'enabled', 'formnovalidate', 'hidden', 'indeterminate', 'inert', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nohref', 'noresize', 'noshade', 'novalidate', 'nowrap', 'open', 'pauseonexit', 'readonly', 'required', 'reversed', 'scoped', 'seamless', 'selected', 'sortable', 'truespeed', 'typemustmatch', 'visible'];
var batchId = null;
function triggerUpdate(_ref, rootVm, hookName) {
  var debounceWait = _ref.debounceWait;

  // if an update was triggered during initialization or when an update was triggered by the
  // metaInfo watcher, set initialized to null
  // then we keep falsy value but know we need to run a triggerUpdate after initialization
  if (!rootVm[rootConfigKey].initialized && (rootVm[rootConfigKey].initializing || hookName === 'watcher')) {
    rootVm[rootConfigKey].initialized = null;
  }
  if (rootVm[rootConfigKey].initialized && !rootVm[rootConfigKey].pausing) {
    // batch potential DOM updates to prevent extraneous re-rendering
    // eslint-disable-next-line no-void
    batchUpdate(function () {
      return void rootVm.$meta().refresh();
    }, debounceWait);
  }
}
/**
 * Performs a batched update.
 *
 * @param  {(null|Number)} id - the ID of this update
 * @param  {Function} callback - the update to perform
 * @return {Number} id - a new ID
 */

function batchUpdate(callback, timeout) {
  timeout = timeout === undefined ? 10 : timeout;
  if (!timeout) {
    callback();
    return;
  }
  clearTimeout(batchId);
  batchId = setTimeout(function () {
    callback();
  }, timeout);
  return batchId;
}

/*
 * To reduce build size, this file provides simple polyfills without
 * overly excessive type checking and without modifying
 * the global Array.prototype
 * The polyfills are automatically removed in the commonjs build
 * Also, only files in client/ & shared/ should use these functions
 * files in server/ still use normal js function
 */
function find(array, predicate, thisArg) {
  if (!Array.prototype.find) {
    // idx needs to be a Number, for..in returns string
    for (var idx = 0; idx < array.length; idx++) {
      if (predicate.call(thisArg, array[idx], idx, array)) {
        return array[idx];
      }
    }
    return;
  }
  return array.find(predicate, thisArg);
}
function findIndex(array, predicate, thisArg) {
  if (!Array.prototype.findIndex) {
    // idx needs to be a Number, for..in returns string
    for (var idx = 0; idx < array.length; idx++) {
      if (predicate.call(thisArg, array[idx], idx, array)) {
        return idx;
      }
    }
    return -1;
  }
  return array.findIndex(predicate, thisArg);
}
function toArray(arg) {
  if (!Array.from) {
    return Array.prototype.slice.call(arg);
  }
  return Array.from(arg);
}
function includes(array, value) {
  if (!Array.prototype.includes) {
    for (var idx in array) {
      if (array[idx] === value) {
        return true;
      }
    }
    return false;
  }
  return array.includes(value);
}
var querySelector = function querySelector(arg, el) {
  return (el || document).querySelectorAll(arg);
};
function getTag(tags, tag) {
  if (!tags[tag]) {
    tags[tag] = document.getElementsByTagName(tag)[0];
  }
  return tags[tag];
}
function getElementsKey(_ref) {
  var body = _ref.body,
    pbody = _ref.pbody;
  return body ? 'body' : pbody ? 'pbody' : 'head';
}
function queryElements(parentNode, _ref2, attributes) {
  var appId = _ref2.appId,
    attribute = _ref2.attribute,
    type = _ref2.type,
    tagIDKeyName = _ref2.tagIDKeyName;
  attributes = attributes || {};
  var queries = ["".concat(type, "[").concat(attribute, "=\"").concat(appId, "\"]"), "".concat(type, "[data-").concat(tagIDKeyName, "]")].map(function (query) {
    for (var key in attributes) {
      var val = attributes[key];
      var attributeValue = val && val !== true ? "=\"".concat(val, "\"") : '';
      query += "[data-".concat(key).concat(attributeValue, "]");
    }
    return query;
  });
  return toArray(querySelector(queries.join(', '), parentNode));
}
function removeElementsByAppId(_ref3, appId) {
  var attribute = _ref3.attribute;
  toArray(querySelector("[".concat(attribute, "=\"").concat(appId, "\"]"))).map(function (el) {
    return el.remove();
  });
}
function removeAttribute(el, attributeName) {
  el.removeAttribute(attributeName);
}
function hasMetaInfo(vm) {
  vm = vm || this;
  return vm && (vm[rootConfigKey] === true || isObject(vm[rootConfigKey]));
} // a component is in a metaInfo branch when itself has meta info or one of its (grand-)children has

function inMetaInfoBranch(vm) {
  vm = vm || this;
  return vm && !isUndefined(vm[rootConfigKey]);
}
function pause(rootVm, refresh) {
  rootVm[rootConfigKey].pausing = true;
  return function () {
    return resume(rootVm, refresh);
  };
}
function resume(rootVm, refresh) {
  rootVm[rootConfigKey].pausing = false;
  if (refresh || refresh === undefined) {
    return rootVm.$meta().refresh();
  }
}
function addNavGuards(rootVm) {
  var router = rootVm.$router; // return when nav guards already added or no router exists

  if (rootVm[rootConfigKey].navGuards || !router) {
    /* istanbul ignore next */
    return;
  }
  rootVm[rootConfigKey].navGuards = true;
  router.beforeEach(function (to, from, next) {
    pause(rootVm);
    next();
  });
  router.afterEach(function () {
    rootVm.$nextTick(function () {
      var _resume = resume(rootVm),
        metaInfo = _resume.metaInfo;
      if (metaInfo && isFunction(metaInfo.afterNavigation)) {
        metaInfo.afterNavigation(metaInfo);
      }
    });
  });
}
var appId = 1;
function createMixin(Vue, options) {
  // for which Vue lifecycle hooks should the metaInfo be refreshed
  var updateOnLifecycleHook = ['activated', 'deactivated', 'beforeMount'];
  var wasServerRendered = false; // watch for client side component updates

  return {
    beforeCreate: function beforeCreate() {
      var _this2 = this;
      var rootKey = '$root';
      var $root = this[rootKey];
      var $options = this.$options;
      var devtoolsEnabled = Vue.config.devtools;
      Object.defineProperty(this, '_hasMetaInfo', {
        configurable: true,
        get: function get() {
          // Show deprecation warning once when devtools enabled
          if (devtoolsEnabled && !$root[rootConfigKey].deprecationWarningShown) {
            warn('VueMeta DeprecationWarning: _hasMetaInfo has been deprecated and will be removed in a future version. Please use hasMetaInfo(vm) instead');
            $root[rootConfigKey].deprecationWarningShown = true;
          }
          return hasMetaInfo(this);
        }
      });
      if (this === $root) {
        $root.$once('hook:beforeMount', function () {
          wasServerRendered = this.$el && this.$el.nodeType === 1 && this.$el.hasAttribute('data-server-rendered'); // In most cases when you have a SSR app it will be the first app thats gonna be
          // initiated, if we cant detect the data-server-rendered attribute from Vue but we
          // do see our own ssrAttribute then _assume_ the Vue app with appId 1 is the ssr app
          // attempted fix for #404 & #562, but we rly need to refactor how we pass appIds from
          // ssr to the client

          if (!wasServerRendered && $root[rootConfigKey] && $root[rootConfigKey].appId === 1) {
            var htmlTag = getTag({}, 'html');
            wasServerRendered = htmlTag && htmlTag.hasAttribute(options.ssrAttribute);
          }
        });
      } // Add a marker to know if it uses metaInfo
      // _vnode is used to know that it's attached to a real component
      // useful if we use some mixin to add some meta tags (like nuxt-i18n)

      if (isUndefined($options[options.keyName]) || $options[options.keyName] === null) {
        return;
      }
      if (!$root[rootConfigKey]) {
        $root[rootConfigKey] = {
          appId: appId
        };
        appId++;
        if (devtoolsEnabled && $root.$options[options.keyName]) {
          // use nextTick so the children should be added to $root
          this.$nextTick(function () {
            // find the first child that lists fnOptions
            var child = find($root.$children, function (c) {
              return c.$vnode && c.$vnode.fnOptions;
            });
            if (child && child.$vnode.fnOptions[options.keyName]) {
              warn("VueMeta has detected a possible global mixin which adds a ".concat(options.keyName, " property to all Vue components on the page. This could cause severe performance issues. If possible, use $meta().addApp to add meta information instead"));
            }
          });
        }
      } // to speed up updates we keep track of branches which have a component with vue-meta info defined
      // if _vueMeta = true it has info, if _vueMeta = false a child has info

      if (!this[rootConfigKey]) {
        this[rootConfigKey] = true;
        var parent = this.$parent;
        while (parent && parent !== $root) {
          if (isUndefined(parent[rootConfigKey])) {
            parent[rootConfigKey] = false;
          }
          parent = parent.$parent;
        }
      } // coerce function-style metaInfo to a computed prop so we can observe
      // it on creation

      if (isFunction($options[options.keyName])) {
        $options.computed = $options.computed || {};
        $options.computed.$metaInfo = $options[options.keyName];
        if (!this.$isServer) {
          // if computed $metaInfo exists, watch it for updates & trigger a refresh
          // when it changes (i.e. automatically handle async actions that affect metaInfo)
          // credit for this suggestion goes to [Sébastien Chopin](https://github.com/Atinux)
          this.$on('hook:created', function () {
            this.$watch('$metaInfo', function () {
              triggerUpdate(options, this[rootKey], 'watcher');
            });
          });
        }
      } // force an initial refresh on page load and prevent other lifecycleHooks
      // to triggerUpdate until this initial refresh is finished
      // this is to make sure that when a page is opened in an inactive tab which
      // has throttled rAF/timers we still immediately set the page title

      if (isUndefined($root[rootConfigKey].initialized)) {
        $root[rootConfigKey].initialized = this.$isServer;
        if (!$root[rootConfigKey].initialized) {
          if (!$root[rootConfigKey].initializedSsr) {
            $root[rootConfigKey].initializedSsr = true;
            this.$on('hook:beforeMount', function () {
              var $root = this[rootKey]; // if this Vue-app was server rendered, set the appId to 'ssr'
              // only one SSR app per page is supported

              if (wasServerRendered) {
                $root[rootConfigKey].appId = options.ssrAppId;
              }
            });
          } // we use the mounted hook here as on page load

          this.$on('hook:mounted', function () {
            var $root = this[rootKey];
            if ($root[rootConfigKey].initialized) {
              return;
            } // used in triggerUpdate to check if a change was triggered
            // during initialization

            $root[rootConfigKey].initializing = true; // refresh meta in nextTick so all child components have loaded

            this.$nextTick(function () {
              var _$root$$meta$refresh = $root.$meta().refresh(),
                tags = _$root$$meta$refresh.tags,
                metaInfo = _$root$$meta$refresh.metaInfo; // After ssr hydration (identifier by tags === false) check
              // if initialized was set to null in triggerUpdate. That'd mean
              // that during initilazation changes where triggered which need
              // to be applied OR a metaInfo watcher was triggered before the
              // current hook was called
              // (during initialization all changes are blocked)

              if (tags === false && $root[rootConfigKey].initialized === null) {
                this.$nextTick(function () {
                  return triggerUpdate(options, $root, 'init');
                });
              }
              $root[rootConfigKey].initialized = true;
              delete $root[rootConfigKey].initializing; // add the navigation guards if they havent been added yet
              // they are needed for the afterNavigation callback

              if (!options.refreshOnceOnNavigation && metaInfo.afterNavigation) {
                addNavGuards($root);
              }
            });
          }); // add the navigation guards if requested

          if (options.refreshOnceOnNavigation) {
            addNavGuards($root);
          }
        }
      }
      this.$on('hook:destroyed', function () {
        var _this = this;

        // do not trigger refresh:
        // - when user configured to not wait for transitions on destroyed
        // - when the component doesnt have a parent
        // - doesnt have metaInfo defined
        if (!this.$parent || !hasMetaInfo(this)) {
          return;
        }
        delete this._hasMetaInfo;
        this.$nextTick(function () {
          if (!options.waitOnDestroyed || !_this.$el || !_this.$el.offsetParent) {
            triggerUpdate(options, _this.$root, 'destroyed');
            return;
          } // Wait that element is hidden before refreshing meta tags (to support animations)

          var interval = setInterval(function () {
            if (_this.$el && _this.$el.offsetParent !== null) {
              /* istanbul ignore next line */
              return;
            }
            clearInterval(interval);
            triggerUpdate(options, _this.$root, 'destroyed');
          }, 50);
        });
      }); // do not trigger refresh on the server side

      if (this.$isServer) {
        /* istanbul ignore next */
        return;
      } // no need to add this hooks on server side

      updateOnLifecycleHook.forEach(function (lifecycleHook) {
        _this2.$on("hook:".concat(lifecycleHook), function () {
          triggerUpdate(options, this[rootKey], lifecycleHook);
        });
      });
    }
  };
}
function setOptions(options) {
  // combine options
  options = isObject(options) ? options : {}; // The options are set like this so they can
  // be minified by terser while keeping the
  // user api intact
  // terser --mangle-properties keep_quoted=strict

  /* eslint-disable dot-notation */

  return {
    keyName: options['keyName'] || defaultOptions.keyName,
    attribute: options['attribute'] || defaultOptions.attribute,
    ssrAttribute: options['ssrAttribute'] || defaultOptions.ssrAttribute,
    tagIDKeyName: options['tagIDKeyName'] || defaultOptions.tagIDKeyName,
    contentKeyName: options['contentKeyName'] || defaultOptions.contentKeyName,
    metaTemplateKeyName: options['metaTemplateKeyName'] || defaultOptions.metaTemplateKeyName,
    debounceWait: isUndefined(options['debounceWait']) ? defaultOptions.debounceWait : options['debounceWait'],
    waitOnDestroyed: isUndefined(options['waitOnDestroyed']) ? defaultOptions.waitOnDestroyed : options['waitOnDestroyed'],
    ssrAppId: options['ssrAppId'] || defaultOptions.ssrAppId,
    refreshOnceOnNavigation: !!options['refreshOnceOnNavigation']
  };
  /* eslint-enable dot-notation */
}
function getOptions(options) {
  var optionsCopy = {};
  for (var key in options) {
    optionsCopy[key] = options[key];
  }
  return optionsCopy;
}
function ensureIsArray(arg, key) {
  if (!key || !isObject(arg)) {
    return isArray(arg) ? arg : [];
  }
  if (!isArray(arg[key])) {
    arg[key] = [];
  }
  return arg;
}
var serverSequences = [[/&/g, '&amp;'], [/</g, '&lt;'], [/>/g, '&gt;'], [/"/g, '&quot;'], [/'/g, '&#x27;']];
var clientSequences = [[/&/g, "&"], [/</g, "<"], [/>/g, ">"], [/"/g, "\""], [/'/g, "'"]]; // sanitizes potentially dangerous characters

function escape(info, options, escapeOptions, escapeKeys) {
  var tagIDKeyName = options.tagIDKeyName;
  var _escapeOptions$doEsca = escapeOptions.doEscape,
    doEscape = _escapeOptions$doEsca === void 0 ? function (v) {
      return v;
    } : _escapeOptions$doEsca;
  var escaped = {};
  for (var key in info) {
    var value = info[key]; // no need to escape configuration options

    if (includes(metaInfoOptionKeys, key)) {
      escaped[key] = value;
      continue;
    } // do not use destructuring for disableOptionKeys, it increases transpiled size
    // due to var checks while we are guaranteed the structure of the cb

    var disableKey = disableOptionKeys[0];
    if (escapeOptions[disableKey] && includes(escapeOptions[disableKey], key)) {
      // this info[key] doesnt need to escaped if the option is listed in __dangerouslyDisableSanitizers
      escaped[key] = value;
      continue;
    }
    var tagId = info[tagIDKeyName];
    if (tagId) {
      disableKey = disableOptionKeys[1]; // keys which are listed in __dangerouslyDisableSanitizersByTagID for the current vmid do not need to be escaped

      if (escapeOptions[disableKey] && escapeOptions[disableKey][tagId] && includes(escapeOptions[disableKey][tagId], key)) {
        escaped[key] = value;
        continue;
      }
    }
    if (isString(value)) {
      escaped[key] = doEscape(value);
    } else if (isArray(value)) {
      escaped[key] = value.map(function (v) {
        if (isPureObject(v)) {
          return escape(v, options, escapeOptions, true);
        }
        return doEscape(v);
      });
    } else if (isPureObject(value)) {
      escaped[key] = escape(value, options, escapeOptions, true);
    } else {
      escaped[key] = value;
    }
    if (escapeKeys) {
      var escapedKey = doEscape(key);
      if (key !== escapedKey) {
        escaped[escapedKey] = escaped[key];
        delete escaped[key];
      }
    }
  }
  return escaped;
}
function escapeMetaInfo(options, info, escapeSequences) {
  escapeSequences = escapeSequences || []; // do not use destructuring for seq, it increases transpiled size
  // due to var checks while we are guaranteed the structure of the cb

  var escapeOptions = {
    doEscape: function doEscape(value) {
      return escapeSequences.reduce(function (val, seq) {
        return val.replace(seq[0], seq[1]);
      }, value);
    }
  };
  disableOptionKeys.forEach(function (disableKey, index) {
    if (index === 0) {
      ensureIsArray(info, disableKey);
    } else if (index === 1) {
      for (var key in info[disableKey]) {
        ensureIsArray(info[disableKey], key);
      }
    }
    escapeOptions[disableKey] = info[disableKey];
  }); // begin sanitization

  return escape(info, options, escapeOptions);
}
function applyTemplate(_ref, headObject, template, chunk) {
  var component = _ref.component,
    metaTemplateKeyName = _ref.metaTemplateKeyName,
    contentKeyName = _ref.contentKeyName;
  if (template === true || headObject[metaTemplateKeyName] === true) {
    // abort, template was already applied
    return false;
  }
  if (isUndefined(template) && headObject[metaTemplateKeyName]) {
    template = headObject[metaTemplateKeyName];
    headObject[metaTemplateKeyName] = true;
  } // return early if no template defined

  if (!template) {
    // cleanup faulty template properties
    delete headObject[metaTemplateKeyName];
    return false;
  }
  if (isUndefined(chunk)) {
    chunk = headObject[contentKeyName];
  }
  headObject[contentKeyName] = isFunction(template) ? template.call(component, chunk) : template.replace(/%s/g, chunk);
  return true;
}
function _arrayMerge(_ref, target, source) {
  var component = _ref.component,
    tagIDKeyName = _ref.tagIDKeyName,
    metaTemplateKeyName = _ref.metaTemplateKeyName,
    contentKeyName = _ref.contentKeyName;
  // we concat the arrays without merging objects contained in,
  // but we check for a `vmid` property on each object in the array
  // using an O(1) lookup associative array exploit
  var destination = [];
  if (!target.length && !source.length) {
    return destination;
  }
  target.forEach(function (targetItem, targetIndex) {
    // no tagID so no need to check for duplicity
    if (!targetItem[tagIDKeyName]) {
      destination.push(targetItem);
      return;
    }
    var sourceIndex = findIndex(source, function (item) {
      return item[tagIDKeyName] === targetItem[tagIDKeyName];
    });
    var sourceItem = source[sourceIndex]; // source doesnt contain any duplicate vmid's, we can keep targetItem

    if (sourceIndex === -1) {
      destination.push(targetItem);
      return;
    } // when sourceItem explictly defines contentKeyName or innerHTML as undefined, its
    // an indication that we need to skip the default behaviour or child has preference over parent
    // which means we keep the targetItem and ignore/remove the sourceItem

    if (contentKeyName in sourceItem && sourceItem[contentKeyName] === undefined || 'innerHTML' in sourceItem && sourceItem.innerHTML === undefined) {
      destination.push(targetItem); // remove current index from source array so its not concatenated to destination below

      source.splice(sourceIndex, 1);
      return;
    } // we now know that targetItem is a duplicate and we should ignore it in favor of sourceItem
    // if source specifies null as content then ignore both the target as the source

    if (sourceItem[contentKeyName] === null || sourceItem.innerHTML === null) {
      // remove current index from source array so its not concatenated to destination below
      source.splice(sourceIndex, 1);
      return;
    } // now we only need to check if the target has a template to combine it with the source

    var targetTemplate = targetItem[metaTemplateKeyName];
    if (!targetTemplate) {
      return;
    }
    var sourceTemplate = sourceItem[metaTemplateKeyName];
    if (!sourceTemplate) {
      // use parent template and child content
      applyTemplate({
        component: component,
        metaTemplateKeyName: metaTemplateKeyName,
        contentKeyName: contentKeyName
      }, sourceItem, targetTemplate); // set template to true to indicate template was already applied

      sourceItem.template = true;
      return;
    }
    if (!sourceItem[contentKeyName]) {
      // use parent content and child template
      applyTemplate({
        component: component,
        metaTemplateKeyName: metaTemplateKeyName,
        contentKeyName: contentKeyName
      }, sourceItem, undefined, targetItem[contentKeyName]);
    }
  });
  return destination.concat(source);
}
var warningShown = false;
function merge(target, source, options) {
  options = options || {}; // remove properties explicitly set to false so child components can
  // optionally _not_ overwrite the parents content
  // (for array properties this is checked in arrayMerge)

  if (source.title === undefined) {
    delete source.title;
  }
  metaInfoAttributeKeys.forEach(function (attrKey) {
    if (!source[attrKey]) {
      return;
    }
    for (var key in source[attrKey]) {
      if (key in source[attrKey] && source[attrKey][key] === undefined) {
        if (includes(booleanHtmlAttributes, key) && !warningShown) {
          warn('VueMeta: Please note that since v2 the value undefined is not used to indicate boolean attributes anymore, see migration guide for details');
          warningShown = true;
        }
        delete source[attrKey][key];
      }
    }
  });
  return deepmerge(target, source, {
    arrayMerge: function arrayMerge(t, s) {
      return _arrayMerge(options, t, s);
    }
  });
}
function getComponentMetaInfo(options, component) {
  return getComponentOption(options || {}, component, defaultInfo);
}
/**
 * Returns the `opts.option` $option value of the given `opts.component`.
 * If methods are encountered, they will be bound to the component context.
 * If `opts.deep` is true, will recursively merge all child component
 * `opts.option` $option values into the returned result.
 *
 * @param  {Object} opts - options
 * @param  {Object} opts.component - Vue component to fetch option data from
 * @param  {Boolean} opts.deep - look for data in child components as well?
 * @param  {Function} opts.arrayMerge - how should arrays be merged?
 * @param  {String} opts.keyName - the name of the option to look for
 * @param  {Object} [result={}] - result so far
 * @return {Object} result - final aggregated result
 */

function getComponentOption(options, component, result) {
  result = result || {};
  if (component._inactive) {
    return result;
  }
  options = options || {};
  var _options = options,
    keyName = _options.keyName;
  var $metaInfo = component.$metaInfo,
    $options = component.$options,
    $children = component.$children; // only collect option data if it exists

  if ($options[keyName]) {
    // if $metaInfo exists then [keyName] was defined as a function
    // and set to the computed prop $metaInfo in the mixin
    // using the computed prop should be a small performance increase
    // because Vue caches those internally
    var data = $metaInfo || $options[keyName]; // only merge data with result when its an object
    // eg it could be a function when metaInfo() returns undefined
    // dueo to the or statement above

    if (isObject(data)) {
      result = merge(result, data, options);
    }
  } // collect & aggregate child options if deep = true

  if ($children.length) {
    $children.forEach(function (childComponent) {
      // check if the childComponent is in a branch
      // return otherwise so we dont walk all component branches unnecessarily
      if (!inMetaInfoBranch(childComponent)) {
        return;
      }
      result = getComponentOption(options, childComponent, result);
    });
  }
  return result;
}
var callbacks = [];
function isDOMComplete(d) {
  return (d || document).readyState === 'complete';
}
function addCallback(query, callback) {
  if (arguments.length === 1) {
    callback = query;
    query = '';
  }
  callbacks.push([query, callback]);
}
function addCallbacks(_ref, type, tags, autoAddListeners) {
  var tagIDKeyName = _ref.tagIDKeyName;
  var hasAsyncCallback = false;
  tags.forEach(function (tag) {
    if (!tag[tagIDKeyName] || !tag.callback) {
      return;
    }
    hasAsyncCallback = true;
    addCallback("".concat(type, "[data-").concat(tagIDKeyName, "=\"").concat(tag[tagIDKeyName], "\"]"), tag.callback);
  });
  if (!autoAddListeners || !hasAsyncCallback) {
    return hasAsyncCallback;
  }
  return addListeners();
}
function addListeners() {
  if (isDOMComplete()) {
    applyCallbacks();
    return;
  } // Instead of using a MutationObserver, we just apply

  /* istanbul ignore next */

  document.onreadystatechange = function () {
    applyCallbacks();
  };
}
function applyCallbacks(matchElement) {
  callbacks.forEach(function (args) {
    // do not use destructuring for args, it increases transpiled size
    // due to var checks while we are guaranteed the structure of the cb
    var query = args[0];
    var callback = args[1];
    var selector = "".concat(query, "[onload=\"this.__vm_l=1\"]");
    var elements = [];
    if (!matchElement) {
      elements = toArray(querySelector(selector));
    }
    if (matchElement && matchElement.matches(selector)) {
      elements = [matchElement];
    }
    elements.forEach(function (element) {
      /* __vm_cb: whether the load callback has been called
       * __vm_l: set by onload attribute, whether the element was loaded
       * __vm_ev: whether the event listener was added or not
       */
      if (element.__vm_cb) {
        return;
      }
      var onload = function onload() {
        /* Mark that the callback for this element has already been called,
         * this prevents the callback to run twice in some (rare) conditions
         */
        element.__vm_cb = true;
        /* onload needs to be removed because we only need the
         * attribute after ssr and if we dont remove it the node
         * will fail isEqualNode on the client
         */

        removeAttribute(element, 'onload');
        callback(element);
      };
      /* IE9 doesnt seem to load scripts synchronously,
       * causing a script sometimes/often already to be loaded
       * when we add the event listener below (thus adding an onload event
       * listener has no use because it will never be triggered).
       * Therefore we add the onload attribute during ssr, and
       * check here if it was already loaded or not
       */

      if (element.__vm_l) {
        onload();
        return;
      }
      if (!element.__vm_ev) {
        element.__vm_ev = true;
        element.addEventListener('load', onload);
      }
    });
  });
}

// instead of adding it to the html

var attributeMap = {};
/**
 * Updates the document's html tag attributes
 *
 * @param  {Object} attrs - the new document html attributes
 * @param  {HTMLElement} tag - the HTMLElement tag to update with new attrs
 */

function updateAttribute(appId, options, type, attrs, tag) {
  var _ref = options || {},
    attribute = _ref.attribute;
  var vueMetaAttrString = tag.getAttribute(attribute);
  if (vueMetaAttrString) {
    attributeMap[type] = JSON.parse(decodeURI(vueMetaAttrString));
    removeAttribute(tag, attribute);
  }
  var data = attributeMap[type] || {};
  var toUpdate = []; // remove attributes from the map
  // which have been removed for this appId

  for (var attr in data) {
    if (data[attr] !== undefined && appId in data[attr]) {
      toUpdate.push(attr);
      if (!attrs[attr]) {
        delete data[attr][appId];
      }
    }
  }
  for (var _attr in attrs) {
    var attrData = data[_attr];
    if (!attrData || attrData[appId] !== attrs[_attr]) {
      toUpdate.push(_attr);
      if (attrs[_attr] !== undefined) {
        data[_attr] = data[_attr] || {};
        data[_attr][appId] = attrs[_attr];
      }
    }
  }
  for (var _i = 0, _toUpdate = toUpdate; _i < _toUpdate.length; _i++) {
    var _attr2 = _toUpdate[_i];
    var _attrData = data[_attr2];
    var attrValues = [];
    for (var _appId in _attrData) {
      Array.prototype.push.apply(attrValues, [].concat(_attrData[_appId]));
    }
    if (attrValues.length) {
      var attrValue = includes(booleanHtmlAttributes, _attr2) && attrValues.some(Boolean) ? '' : attrValues.filter(function (v) {
        return v !== undefined;
      }).join(' ');
      tag.setAttribute(_attr2, attrValue);
    } else {
      removeAttribute(tag, _attr2);
    }
  }
  attributeMap[type] = data;
}

/**
 * Updates the document title
 *
 * @param  {String} title - the new title of the document
 */
function updateTitle(title) {
  if (!title && title !== '') {
    return;
  }
  document.title = title;
}

/**
 * Updates meta tags inside <head> and <body> on the client. Borrowed from `react-helmet`:
 * https://github.com/nfl/react-helmet/blob/004d448f8de5f823d10f838b02317521180f34da/src/Helmet.js#L195-L245
 *
 * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} type - the name of the tag
 * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
 * @return {Object} - a representation of what tags changed
 */

function updateTag(appId, options, type, tags, head, body) {
  var _ref = options || {},
    attribute = _ref.attribute,
    tagIDKeyName = _ref.tagIDKeyName;
  var dataAttributes = commonDataAttributes.slice();
  dataAttributes.push(tagIDKeyName);
  var newElements = [];
  var queryOptions = {
    appId: appId,
    attribute: attribute,
    type: type,
    tagIDKeyName: tagIDKeyName
  };
  var currentElements = {
    head: queryElements(head, queryOptions),
    pbody: queryElements(body, queryOptions, {
      pbody: true
    }),
    body: queryElements(body, queryOptions, {
      body: true
    })
  };
  if (tags.length > 1) {
    // remove duplicates that could have been found by merging tags
    // which include a mixin with metaInfo and that mixin is used
    // by multiple components on the same page
    var found = [];
    tags = tags.filter(function (x) {
      var k = JSON.stringify(x);
      var res = !includes(found, k);
      found.push(k);
      return res;
    });
  }
  tags.forEach(function (tag) {
    if (tag.skip) {
      return;
    }
    var newElement = document.createElement(type);
    if (!tag.once) {
      newElement.setAttribute(attribute, appId);
    }
    Object.keys(tag).forEach(function (attr) {
      /* istanbul ignore next */
      if (includes(tagProperties, attr)) {
        return;
      }
      if (attr === 'innerHTML') {
        newElement.innerHTML = tag.innerHTML;
        return;
      }
      if (attr === 'json') {
        newElement.innerHTML = JSON.stringify(tag.json);
        return;
      }
      if (attr === 'cssText') {
        if (newElement.styleSheet) {
          /* istanbul ignore next */
          newElement.styleSheet.cssText = tag.cssText;
        } else {
          newElement.appendChild(document.createTextNode(tag.cssText));
        }
        return;
      }
      if (attr === 'callback') {
        newElement.onload = function () {
          return tag[attr](newElement);
        };
        return;
      }
      var _attr = includes(dataAttributes, attr) ? "data-".concat(attr) : attr;
      var isBooleanAttribute = includes(booleanHtmlAttributes, attr);
      if (isBooleanAttribute && !tag[attr]) {
        return;
      }
      var value = isBooleanAttribute ? '' : tag[attr];
      newElement.setAttribute(_attr, value);
    });
    var oldElements = currentElements[getElementsKey(tag)]; // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.

    var indexToDelete;
    var hasEqualElement = oldElements.some(function (existingTag, index) {
      indexToDelete = index;
      return newElement.isEqualNode(existingTag);
    });
    if (hasEqualElement && (indexToDelete || indexToDelete === 0)) {
      oldElements.splice(indexToDelete, 1);
    } else {
      newElements.push(newElement);
    }
  });
  var oldElements = [];
  for (var _type in currentElements) {
    Array.prototype.push.apply(oldElements, currentElements[_type]);
  } // remove old elements

  oldElements.forEach(function (element) {
    element.parentNode.removeChild(element);
  }); // insert new elements

  newElements.forEach(function (element) {
    if (element.hasAttribute('data-body')) {
      body.appendChild(element);
      return;
    }
    if (element.hasAttribute('data-pbody')) {
      body.insertBefore(element, body.firstChild);
      return;
    }
    head.appendChild(element);
  });
  return {
    oldTags: oldElements,
    newTags: newElements
  };
}

/**
 * Performs client-side updates when new meta info is received
 *
 * @param  {Object} newInfo - the meta info to update to
 */

function updateClientMetaInfo(appId, options, newInfo) {
  options = options || {};
  var _options = options,
    ssrAttribute = _options.ssrAttribute,
    ssrAppId = _options.ssrAppId; // only cache tags for current update

  var tags = {};
  var htmlTag = getTag(tags, 'html'); // if this is a server render, then dont update

  if (appId === ssrAppId && htmlTag.hasAttribute(ssrAttribute)) {
    // remove the server render attribute so we can update on (next) changes
    removeAttribute(htmlTag, ssrAttribute); // add load callbacks if the

    var addLoadListeners = false;
    tagsSupportingOnload.forEach(function (type) {
      if (newInfo[type] && addCallbacks(options, type, newInfo[type])) {
        addLoadListeners = true;
      }
    });
    if (addLoadListeners) {
      addListeners();
    }
    return false;
  } // initialize tracked changes

  var tagsAdded = {};
  var tagsRemoved = {};
  for (var type in newInfo) {
    // ignore these
    if (includes(metaInfoOptionKeys, type)) {
      continue;
    }
    if (type === 'title') {
      // update the title
      updateTitle(newInfo.title);
      continue;
    }
    if (includes(metaInfoAttributeKeys, type)) {
      var tagName = type.substr(0, 4);
      updateAttribute(appId, options, type, newInfo[type], getTag(tags, tagName));
      continue;
    } // tags should always be an array, ignore if it isnt

    if (!isArray(newInfo[type])) {
      continue;
    }
    var _updateTag = updateTag(appId, options, type, newInfo[type], getTag(tags, 'head'), getTag(tags, 'body')),
      oldTags = _updateTag.oldTags,
      newTags = _updateTag.newTags;
    if (newTags.length) {
      tagsAdded[type] = newTags;
      tagsRemoved[type] = oldTags;
    }
  }
  return {
    tagsAdded: tagsAdded,
    tagsRemoved: tagsRemoved
  };
}
var appsMetaInfo;
function addApp(rootVm, appId, options) {
  return {
    set: function set(metaInfo) {
      return setMetaInfo(rootVm, appId, options, metaInfo);
    },
    remove: function remove() {
      return removeMetaInfo(rootVm, appId, options);
    }
  };
}
function setMetaInfo(rootVm, appId, options, metaInfo) {
  // if a vm exists _and_ its mounted then immediately update
  if (rootVm && rootVm.$el) {
    return updateClientMetaInfo(appId, options, metaInfo);
  } // store for later, the info
  // will be set on the first refresh

  appsMetaInfo = appsMetaInfo || {};
  appsMetaInfo[appId] = metaInfo;
}
function removeMetaInfo(rootVm, appId, options) {
  if (rootVm && rootVm.$el) {
    var tags = {};
    var _iterator = _createForOfIteratorHelper(metaInfoAttributeKeys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        var tagName = type.substr(0, 4);
        updateAttribute(appId, options, type, {}, getTag(tags, tagName));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return removeElementsByAppId(options, appId);
  }
  if (appsMetaInfo[appId]) {
    delete appsMetaInfo[appId];
    clearAppsMetaInfo();
  }
}
function getAppsMetaInfo() {
  return appsMetaInfo;
}
function clearAppsMetaInfo(force) {
  if (force || !Object.keys(appsMetaInfo).length) {
    appsMetaInfo = undefined;
  }
}

/**
 * Returns the correct meta info for the given component
 * (child components will overwrite parent meta info)
 *
 * @param  {Object} component - the Vue instance to get meta info from
 * @return {Object} - returned meta info
 */

function getMetaInfo(options, info, escapeSequences, component) {
  options = options || {};
  escapeSequences = escapeSequences || [];
  var _options = options,
    tagIDKeyName = _options.tagIDKeyName; // Remove all "template" tags from meta
  // backup the title chunk in case user wants access to it

  if (info.title) {
    info.titleChunk = info.title;
  } // replace title with populated template

  if (info.titleTemplate && info.titleTemplate !== '%s') {
    applyTemplate({
      component: component,
      contentKeyName: 'title'
    }, info, info.titleTemplate, info.titleChunk || '');
  } // convert base tag to an array so it can be handled the same way
  // as the other tags

  if (info.base) {
    info.base = Object.keys(info.base).length ? [info.base] : [];
  }
  if (info.meta) {
    // remove meta items with duplicate vmid's
    info.meta = info.meta.filter(function (metaItem, index, arr) {
      var hasVmid = !!metaItem[tagIDKeyName];
      if (!hasVmid) {
        return true;
      }
      var isFirstItemForVmid = index === findIndex(arr, function (item) {
        return item[tagIDKeyName] === metaItem[tagIDKeyName];
      });
      return isFirstItemForVmid;
    }); // apply templates if needed

    info.meta.forEach(function (metaObject) {
      return applyTemplate(options, metaObject);
    });
  }
  return escapeMetaInfo(options, info, escapeSequences);
}

/**
 * When called, will update the current meta info with new meta info.
 * Useful when updating meta info as the result of an asynchronous
 * action that resolves after the initial render takes place.
 *
 * Credit to [Sébastien Chopin](https://github.com/Atinux) for the suggestion
 * to implement this method.
 *
 * @return {Object} - new meta info
 */

function refresh(rootVm, options) {
  options = options || {}; // make sure vue-meta was initiated

  if (!rootVm[rootConfigKey]) {
    showWarningNotSupported();
    return {};
  } // collect & aggregate all metaInfo $options

  var rawInfo = getComponentMetaInfo(options, rootVm);
  var metaInfo = getMetaInfo(options, rawInfo, clientSequences, rootVm);
  var appId = rootVm[rootConfigKey].appId;
  var tags = updateClientMetaInfo(appId, options, metaInfo); // emit "event" with new info

  if (tags && isFunction(metaInfo.changed)) {
    metaInfo.changed(metaInfo, tags.tagsAdded, tags.tagsRemoved);
    tags = {
      addedTags: tags.tagsAdded,
      removedTags: tags.tagsRemoved
    };
  }
  var appsMetaInfo = getAppsMetaInfo();
  if (appsMetaInfo) {
    for (var additionalAppId in appsMetaInfo) {
      updateClientMetaInfo(additionalAppId, options, appsMetaInfo[additionalAppId]);
      delete appsMetaInfo[additionalAppId];
    }
    clearAppsMetaInfo(true);
  }
  return {
    vm: rootVm,
    metaInfo: metaInfo,
    // eslint-disable-line object-shorthand
    tags: tags
  };
}

/**
 * Generates tag attributes for use on the server.
 *
 * @param  {('bodyAttrs'|'htmlAttrs'|'headAttrs')} type - the type of attributes to generate
 * @param  {Object} data - the attributes to generate
 * @return {Object} - the attribute generator
 */

function attributeGenerator(options, type, data, _ref) {
  var addSsrAttribute = _ref.addSsrAttribute;
  var _ref2 = options || {},
    attribute = _ref2.attribute,
    ssrAttribute = _ref2.ssrAttribute;
  var attributeStr = '';
  for (var attr in data) {
    var attrData = data[attr];
    var attrValues = [];
    for (var appId in attrData) {
      attrValues.push.apply(attrValues, _toConsumableArray([].concat(attrData[appId])));
    }
    if (attrValues.length) {
      attributeStr += booleanHtmlAttributes.includes(attr) && attrValues.some(Boolean) ? "".concat(attr) : "".concat(attr, "=\"").concat(attrValues.join(' '), "\"");
      attributeStr += ' ';
    }
  }
  if (attributeStr) {
    attributeStr += "".concat(attribute, "=\"").concat(encodeURI(JSON.stringify(data)), "\"");
  }
  if (type === 'htmlAttrs' && addSsrAttribute) {
    return "".concat(ssrAttribute).concat(attributeStr ? ' ' : '').concat(attributeStr);
  }
  return attributeStr;
}

/**
 * Generates title output for the server
 *
 * @param  {'title'} type - the string "title"
 * @param  {String} data - the title text
 * @return {Object} - the title generator
 */
function titleGenerator(options, type, data, generatorOptions) {
  var _ref = generatorOptions || {},
    ln = _ref.ln;
  if (!data) {
    return '';
  }
  return "<".concat(type, ">").concat(data, "</").concat(type, ">").concat(ln ? '\n' : '');
}

/**
 * Generates meta, base, link, style, script, noscript tags for use on the server
 *
 * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} the name of the tag
 * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
 * @return {Object} - the tag generator
 */

function tagGenerator(options, type, tags, generatorOptions) {
  var _ref = options || {},
    ssrAppId = _ref.ssrAppId,
    attribute = _ref.attribute,
    tagIDKeyName = _ref.tagIDKeyName;
  var _ref2 = generatorOptions || {},
    appId = _ref2.appId,
    _ref2$isSSR = _ref2.isSSR,
    isSSR = _ref2$isSSR === void 0 ? true : _ref2$isSSR,
    _ref2$body = _ref2.body,
    body = _ref2$body === void 0 ? false : _ref2$body,
    _ref2$pbody = _ref2.pbody,
    pbody = _ref2$pbody === void 0 ? false : _ref2$pbody,
    _ref2$ln = _ref2.ln,
    ln = _ref2$ln === void 0 ? false : _ref2$ln;
  var dataAttributes = [tagIDKeyName].concat(_toConsumableArray(commonDataAttributes));
  if (!tags || !tags.length) {
    return '';
  } // build a string containing all tags of this type

  return tags.reduce(function (tagsStr, tag) {
    if (tag.skip) {
      return tagsStr;
    }
    var tagKeys = Object.keys(tag);
    if (tagKeys.length === 0) {
      return tagsStr; // Bail on empty tag object
    }
    if (Boolean(tag.body) !== body || Boolean(tag.pbody) !== pbody) {
      return tagsStr;
    }
    var attrs = tag.once ? '' : " ".concat(attribute, "=\"").concat(appId || (isSSR === false ? '1' : ssrAppId), "\""); // build a string containing all attributes of this tag

    for (var attr in tag) {
      // these attributes are treated as children on the tag
      if (tagAttributeAsInnerContent.includes(attr) || tagProperties.includes(attr)) {
        continue;
      }
      if (attr === 'callback') {
        attrs += ' onload="this.__vm_l=1"';
        continue;
      } // these form the attribute list for this tag

      var prefix = '';
      if (dataAttributes.includes(attr)) {
        prefix = 'data-';
      }
      var isBooleanAttr = !prefix && booleanHtmlAttributes.includes(attr);
      if (isBooleanAttr && !tag[attr]) {
        continue;
      }
      attrs += " ".concat(prefix).concat(attr) + (isBooleanAttr ? '' : "=\"".concat(tag[attr], "\""));
    }
    var json = '';
    if (tag.json) {
      json = JSON.stringify(tag.json);
    } // grab child content from one of these attributes, if possible

    var content = tag.innerHTML || tag.cssText || json; // generate tag exactly without any other redundant attribute
    // these tags have no end tag

    var hasEndTag = !tagsWithoutEndTag.includes(type); // these tag types will have content inserted

    var hasContent = hasEndTag && tagsWithInnerContent.includes(type); // the final string for this specific tag

    return "".concat(tagsStr, "<").concat(type).concat(attrs).concat(!hasContent && hasEndTag ? '/' : '', ">") + (hasContent ? "".concat(content, "</").concat(type, ">") : '') + (ln ? '\n' : '');
  }, '');
}

/**
 * Converts a meta info property to one that can be stringified on the server
 *
 * @param  {String} type - the type of data to convert
 * @param  {(String|Object|Array<Object>)} data - the data value
 * @return {Object} - the new injector
 */

function generateServerInjector(options, metaInfo, globalInjectOptions) {
  var serverInjector = {
    data: metaInfo,
    extraData: undefined,
    addInfo: function addInfo(appId, metaInfo) {
      this.extraData = this.extraData || {};
      this.extraData[appId] = metaInfo;
    },
    callInjectors: function callInjectors(opts) {
      var m = this.injectors; // only call title for the head

      return (opts.body || opts.pbody ? '' : m.title.text(opts)) + m.meta.text(opts) + m.base.text(opts) + m.link.text(opts) + m.style.text(opts) + m.script.text(opts) + m.noscript.text(opts);
    },
    injectors: {
      head: function head(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln
        }));
      },
      bodyPrepend: function bodyPrepend(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln,
          pbody: true
        }));
      },
      bodyAppend: function bodyAppend(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln,
          body: true
        }));
      }
    }
  };
  var _loop = function _loop(type) {
    if (metaInfoOptionKeys.includes(type)) {
      return "continue";
    }
    serverInjector.injectors[type] = {
      text: function text(injectOptions) {
        var addSsrAttribute = injectOptions === true;
        injectOptions = _objectSpread2(_objectSpread2({
          addSsrAttribute: addSsrAttribute
        }, globalInjectOptions), injectOptions);
        if (type === 'title') {
          return titleGenerator(options, type, serverInjector.data[type], injectOptions);
        }
        if (metaInfoAttributeKeys.includes(type)) {
          var attributeData = {};
          var data = serverInjector.data[type];
          if (data) {
            var appId = injectOptions.isSSR === false ? '1' : options.ssrAppId;
            for (var attr in data) {
              attributeData[attr] = _defineProperty({}, appId, data[attr]);
            }
          }
          if (serverInjector.extraData) {
            for (var _appId in serverInjector.extraData) {
              var _data = serverInjector.extraData[_appId][type];
              if (_data) {
                for (var _attr in _data) {
                  attributeData[_attr] = _objectSpread2(_objectSpread2({}, attributeData[_attr]), {}, _defineProperty({}, _appId, _data[_attr]));
                }
              }
            }
          }
          return attributeGenerator(options, type, attributeData, injectOptions);
        }
        var str = tagGenerator(options, type, serverInjector.data[type], injectOptions);
        if (serverInjector.extraData) {
          for (var _appId2 in serverInjector.extraData) {
            var _data2 = serverInjector.extraData[_appId2][type];
            var extraStr = tagGenerator(options, type, _data2, _objectSpread2({
              appId: _appId2
            }, injectOptions));
            str = "".concat(str).concat(extraStr);
          }
        }
        return str;
      }
    };
  };
  for (var type in defaultInfo) {
    var _ret = _loop(type);
    if (_ret === "continue") continue;
  }
  return serverInjector;
}

/**
 * Converts the state of the meta info object such that each item
 * can be compiled to a tag string on the server
 *
 * @vm {Object} - Vue instance - ideally the root component
 * @return {Object} - server meta info with `toString` methods
 */

function inject(rootVm, options, injectOptions) {
  // make sure vue-meta was initiated
  if (!rootVm[rootConfigKey]) {
    showWarningNotSupported();
    return {};
  } // collect & aggregate all metaInfo $options

  var rawInfo = getComponentMetaInfo(options, rootVm);
  var metaInfo = getMetaInfo(options, rawInfo, serverSequences, rootVm); // generate server injector

  var serverInjector = generateServerInjector(options, metaInfo, injectOptions); // add meta info from additional apps

  var appsMetaInfo = getAppsMetaInfo();
  if (appsMetaInfo) {
    for (var additionalAppId in appsMetaInfo) {
      serverInjector.addInfo(additionalAppId, appsMetaInfo[additionalAppId]);
      delete appsMetaInfo[additionalAppId];
    }
    clearAppsMetaInfo(true);
  }
  return serverInjector.injectors;
}
function $meta(options) {
  options = options || {};
  /**
   * Returns an injector for server-side rendering.
   * @this {Object} - the Vue instance (a root component)
   * @return {Object} - injector
   */

  var $root = this.$root;
  return {
    getOptions: function getOptions$1() {
      return getOptions(options);
    },
    setOptions: function setOptions(newOptions) {
      var refreshNavKey = 'refreshOnceOnNavigation';
      if (newOptions && newOptions[refreshNavKey]) {
        options.refreshOnceOnNavigation = !!newOptions[refreshNavKey];
        addNavGuards($root);
      }
      var debounceWaitKey = 'debounceWait';
      if (newOptions && debounceWaitKey in newOptions) {
        var debounceWait = parseInt(newOptions[debounceWaitKey]);
        if (!isNaN(debounceWait)) {
          options.debounceWait = debounceWait;
        }
      }
      var waitOnDestroyedKey = 'waitOnDestroyed';
      if (newOptions && waitOnDestroyedKey in newOptions) {
        options.waitOnDestroyed = !!newOptions[waitOnDestroyedKey];
      }
    },
    refresh: function refresh$1() {
      return refresh($root, options);
    },
    inject: function inject$1(injectOptions) {
      return inject($root, options, injectOptions);
    },
    pause: function pause$1() {
      return pause($root);
    },
    resume: function resume$1() {
      return resume($root);
    },
    addApp: function addApp$1(appId) {
      return addApp($root, appId, options);
    }
  };
}
function generate(rawInfo, options) {
  options = setOptions(options);
  var metaInfo = getMetaInfo(options, rawInfo, serverSequences);
  var serverInjector = generateServerInjector(options, metaInfo);
  return serverInjector.injectors;
}

/**
 * Plugin install function.
 * @param {Function} Vue - the Vue constructor.
 */

function install(Vue, options) {
  if (Vue.__vuemeta_installed) {
    return;
  }
  Vue.__vuemeta_installed = true;
  options = setOptions(options);
  Vue.prototype.$meta = function () {
    return $meta.call(this, options);
  };
  Vue.mixin(createMixin(Vue, options));
}
var index = {
  version: version,
  install: install,
  generate: function generate$1(metaInfo, options) {
    return generate(metaInfo, options);
  },
  hasMetaInfo: hasMetaInfo
};
module.exports = index;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("klona");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
module.exports = __webpack_require__(58);


/***/ }),
/* 41 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function' ? component.exports.extendOptions : component.options;
  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components;
  }
  options.components = options.components || {};
  for (var i in components) {
    options.components[i] = options.components[i] || components[i];
  }
  if (options.functional) {
    provideFunctionalComponents(component, options.components);
  }
};
var functionalPatchKey = '_functionalComponents';
function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return;
  }
  component.exports[functionalPatchKey] = true;
  var render = component.exports.render;
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b);
      }
    }));
  };
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */


__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(30);
const t = Object.freeze({}),
  e = Array.isArray;
function n(t) {
  return null == t;
}
function o(t) {
  return null != t;
}
function r(t) {
  return !0 === t;
}
function s(t) {
  return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t;
}
function i(t) {
  return "function" == typeof t;
}
function c(t) {
  return null !== t && "object" == typeof t;
}
const a = Object.prototype.toString;
function l(t) {
  return "[object Object]" === a.call(t);
}
function u(t) {
  const e = parseFloat(String(t));
  return e >= 0 && Math.floor(e) === e && isFinite(t);
}
function f(t) {
  return o(t) && "function" == typeof t.then && "function" == typeof t.catch;
}
function d(t) {
  return null == t ? "" : Array.isArray(t) || l(t) && t.toString === a ? JSON.stringify(t, p, 2) : String(t);
}
function p(t, e) {
  return e && e.__v_isRef ? e.value : e;
}
function h(t) {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}
function m(t, e) {
  const n = Object.create(null),
    o = t.split(",");
  for (let t = 0; t < o.length; t++) n[o[t]] = !0;
  return e ? t => n[t.toLowerCase()] : t => n[t];
}
const _ = m("key,ref,slot,slot-scope,is");
function v(t, e) {
  const n = t.length;
  if (n) {
    if (e === t[n - 1]) return void (t.length = n - 1);
    const o = t.indexOf(e);
    if (o > -1) return t.splice(o, 1);
  }
}
const y = Object.prototype.hasOwnProperty;
function g(t, e) {
  return y.call(t, e);
}
function b(t) {
  const e = Object.create(null);
  return function (n) {
    return e[n] || (e[n] = t(n));
  };
}
const $ = /-(\w)/g,
  w = b(t => t.replace($, (t, e) => e ? e.toUpperCase() : "")),
  C = b(t => t.charAt(0).toUpperCase() + t.slice(1)),
  x = /\B([A-Z])/g,
  O = b(t => t.replace(x, "-$1").toLowerCase());
const k = Function.prototype.bind ? function (t, e) {
  return t.bind(e);
} : function (t, e) {
  function n(n) {
    const o = arguments.length;
    return o ? o > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
  }
  return n._length = t.length, n;
};
function S(t, e) {
  e = e || 0;
  let n = t.length - e;
  const o = new Array(n);
  for (; n--;) o[n] = t[n + e];
  return o;
}
function j(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function A(t) {
  const e = {};
  for (let n = 0; n < t.length; n++) t[n] && j(e, t[n]);
  return e;
}
function T(t, e, n) {}
const E = (t, e, n) => !1,
  P = t => t;
function I(t, e) {
  if (t === e) return !0;
  const n = c(t),
    o = c(e);
  if (!n || !o) return !n && !o && String(t) === String(e);
  try {
    const n = Array.isArray(t),
      o = Array.isArray(e);
    if (n && o) return t.length === e.length && t.every((t, n) => I(t, e[n]));
    if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
    if (n || o) return !1;
    {
      const n = Object.keys(t),
        o = Object.keys(e);
      return n.length === o.length && n.every(n => I(t[n], e[n]));
    }
  } catch (t) {
    return !1;
  }
}
function D(t, e) {
  for (let n = 0; n < t.length; n++) if (I(t[n], e)) return n;
  return -1;
}
function N(t) {
  let e = !1;
  return function () {
    e || (e = !0, t.apply(this, arguments));
  };
}
function M(t, e) {
  return t === e ? 0 === t && 1 / t != 1 / e : t == t || e == e;
}
const L = "data-server-rendered",
  R = ["component", "directive", "filter"],
  F = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch", "renderTracked", "renderTriggered"];
var U = {
  optionMergeStrategies: Object.create(null),
  silent: !1,
  productionTip: !1,
  devtools: !1,
  performance: !1,
  errorHandler: null,
  warnHandler: null,
  ignoredElements: [],
  keyCodes: Object.create(null),
  isReservedTag: E,
  isReservedAttr: E,
  isUnknownElement: E,
  getTagNamespace: T,
  parsePlatformTagName: P,
  mustUseProp: E,
  async: !0,
  _lifecycleHooks: F
};
function B(t) {
  const e = (t + "").charCodeAt(0);
  return 36 === e || 95 === e;
}
function V(t, e, n, o) {
  Object.defineProperty(t, e, {
    value: n,
    enumerable: !!o,
    writable: !0,
    configurable: !0
  });
}
const z = new RegExp(`[^${/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source}.$_\\d]`);
const H = "__proto__" in {},
  W = "undefined" != typeof window,
  K = W && window.navigator.userAgent.toLowerCase(),
  q = K && /msie|trident/.test(K),
  G = K && K.indexOf("msie 9.0") > 0,
  Z = K && K.indexOf("edge/") > 0;
K && K.indexOf("android");
const J = K && /iphone|ipad|ipod|ios/.test(K);
K && /chrome\/\d+/.test(K), K && /phantomjs/.test(K);
const X = K && K.match(/firefox\/(\d+)/),
  Q = {}.watch;
let Y,
  tt = !1;
if (W) try {
  const t = {};
  Object.defineProperty(t, "passive", {
    get() {
      tt = !0;
    }
  }), window.addEventListener("test-passive", null, t);
} catch (t) {}
const et = () => (void 0 === Y && (Y = !W && "undefined" != typeof global && global.process && "server" === global.process.env.VUE_ENV), Y),
  nt = W && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function ot(t) {
  return "function" == typeof t && /native code/.test(t.toString());
}
const rt = "undefined" != typeof Symbol && ot(Symbol) && "undefined" != typeof Reflect && ot(Reflect.ownKeys);
let st;
st = "undefined" != typeof Set && ot(Set) ? Set : class {
  constructor() {
    this.set = Object.create(null);
  }
  has(t) {
    return !0 === this.set[t];
  }
  add(t) {
    this.set[t] = !0;
  }
  clear() {
    this.set = Object.create(null);
  }
};
let it = null;
function ct(t = null) {
  t || it && it._scope.off(), it = t, t && t._scope.on();
}
class at {
  constructor(t, e, n, o, r, s, i, c) {
    this.tag = t, this.data = e, this.children = n, this.text = o, this.elm = r, this.ns = void 0, this.context = s, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = i, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = c, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
  }
  get child() {
    return this.componentInstance;
  }
}
const lt = (t = "") => {
  const e = new at();
  return e.text = t, e.isComment = !0, e;
};
function ut(t) {
  return new at(void 0, void 0, void 0, String(t));
}
function ft(t) {
  const e = new at(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
  return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e;
}
let dt = 0;
const pt = [],
  ht = () => {
    for (let t = 0; t < pt.length; t++) {
      const e = pt[t];
      e.subs = e.subs.filter(t => t), e._pending = !1;
    }
    pt.length = 0;
  };
class mt {
  constructor() {
    this._pending = !1, this.id = dt++, this.subs = [];
  }
  addSub(t) {
    this.subs.push(t);
  }
  removeSub(t) {
    this.subs[this.subs.indexOf(t)] = null, this._pending || (this._pending = !0, pt.push(this));
  }
  depend(t) {
    mt.target && mt.target.addDep(this);
  }
  notify(t) {
    const e = this.subs.filter(t => t);
    for (let t = 0, n = e.length; t < n; t++) {
      e[t].update();
    }
  }
}
mt.target = null;
const _t = [];
function vt(t) {
  _t.push(t), mt.target = t;
}
function yt() {
  _t.pop(), mt.target = _t[_t.length - 1];
}
const gt = Array.prototype,
  bt = Object.create(gt);
["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
  const e = gt[t];
  V(bt, t, function (...n) {
    const o = e.apply(this, n),
      r = this.__ob__;
    let s;
    switch (t) {
      case "push":
      case "unshift":
        s = n;
        break;
      case "splice":
        s = n.slice(2);
    }
    return s && r.observeArray(s), r.dep.notify(), o;
  });
});
const $t = Object.getOwnPropertyNames(bt),
  wt = {};
let Ct = !0;
function xt(t) {
  Ct = t;
}
const Ot = {
  notify: T,
  depend: T,
  addSub: T,
  removeSub: T
};
class kt {
  constructor(t, n = !1, o = !1) {
    if (this.value = t, this.shallow = n, this.mock = o, this.dep = o ? Ot : new mt(), this.vmCount = 0, V(t, "__ob__", this), e(t)) {
      if (!o) if (H) t.__proto__ = bt;else for (let e = 0, n = $t.length; e < n; e++) {
        const n = $t[e];
        V(t, n, bt[n]);
      }
      n || this.observeArray(t);
    } else {
      const e = Object.keys(t);
      for (let r = 0; r < e.length; r++) {
        jt(t, e[r], wt, void 0, n, o);
      }
    }
  }
  observeArray(t) {
    for (let e = 0, n = t.length; e < n; e++) St(t[e], !1, this.mock);
  }
}
function St(t, n, o) {
  return t && g(t, "__ob__") && t.__ob__ instanceof kt ? t.__ob__ : !Ct || !o && et() || !e(t) && !l(t) || !Object.isExtensible(t) || t.__v_skip || Rt(t) || t instanceof at ? void 0 : new kt(t, n, o);
}
function jt(t, n, o, r, s, i, c = !1) {
  const a = new mt(),
    l = Object.getOwnPropertyDescriptor(t, n);
  if (l && !1 === l.configurable) return;
  const u = l && l.get,
    f = l && l.set;
  u && !f || o !== wt && 2 !== arguments.length || (o = t[n]);
  let d = s ? o && o.__ob__ : St(o, !1, i);
  return Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get: function () {
      const n = u ? u.call(t) : o;
      return mt.target && (a.depend(), d && (d.dep.depend(), e(n) && Et(n))), Rt(n) && !s ? n.value : n;
    },
    set: function (e) {
      const n = u ? u.call(t) : o;
      if (M(n, e)) {
        if (f) f.call(t, e);else {
          if (u) return;
          if (!s && Rt(n) && !Rt(e)) return void (n.value = e);
          o = e;
        }
        d = s ? e && e.__ob__ : St(e, !1, i), a.notify();
      }
    }
  }), a;
}
function At(t, n, o) {
  if (Mt(t)) return;
  const r = t.__ob__;
  return e(t) && u(n) ? (t.length = Math.max(t.length, n), t.splice(n, 1, o), r && !r.shallow && r.mock && St(o, !1, !0), o) : n in t && !(n in Object.prototype) ? (t[n] = o, o) : t._isVue || r && r.vmCount ? o : r ? (jt(r.value, n, o, void 0, r.shallow, r.mock), r.dep.notify(), o) : (t[n] = o, o);
}
function Tt(t, n) {
  if (e(t) && u(n)) return void t.splice(n, 1);
  const o = t.__ob__;
  t._isVue || o && o.vmCount || Mt(t) || g(t, n) && (delete t[n], o && o.dep.notify());
}
function Et(t) {
  for (let n, o = 0, r = t.length; o < r; o++) n = t[o], n && n.__ob__ && n.__ob__.dep.depend(), e(n) && Et(n);
}
function Pt(t) {
  return It(t, !0), V(t, "__v_isShallow", !0), t;
}
function It(t, e) {
  Mt(t) || St(t, e, et());
}
function Dt(t) {
  return Mt(t) ? Dt(t.__v_raw) : !(!t || !t.__ob__);
}
function Nt(t) {
  return !(!t || !t.__v_isShallow);
}
function Mt(t) {
  return !(!t || !t.__v_isReadonly);
}
const Lt = "__v_isRef";
function Rt(t) {
  return !(!t || !0 !== t.__v_isRef);
}
function Ft(t, e) {
  if (Rt(t)) return t;
  const n = {};
  return V(n, Lt, !0), V(n, "__v_isShallow", e), V(n, "dep", jt(n, "value", t, null, e, et())), n;
}
function Ut(t, e, n) {
  Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get: () => {
      const t = e[n];
      if (Rt(t)) return t.value;
      {
        const e = t && t.__ob__;
        return e && e.dep.depend(), t;
      }
    },
    set: t => {
      const o = e[n];
      Rt(o) && !Rt(t) ? o.value = t : e[n] = t;
    }
  });
}
function Bt(t, e, n) {
  const o = t[e];
  if (Rt(o)) return o;
  const r = {
    get value() {
      const o = t[e];
      return void 0 === o ? n : o;
    },
    set value(n) {
      t[e] = n;
    }
  };
  return V(r, Lt, !0), r;
}
const Vt = "__v_rawToReadonly",
  zt = "__v_rawToShallowReadonly";
function Ht(t) {
  return Wt(t, !1);
}
function Wt(t, e) {
  if (!l(t)) return t;
  if (Mt(t)) return t;
  const n = e ? zt : Vt,
    o = t[n];
  if (o) return o;
  const r = Object.create(Object.getPrototypeOf(t));
  V(t, n, r), V(r, "__v_isReadonly", !0), V(r, "__v_raw", t), Rt(t) && V(r, Lt, !0), (e || Nt(t)) && V(r, "__v_isShallow", !0);
  const s = Object.keys(t);
  for (let n = 0; n < s.length; n++) Kt(r, t, s[n], e);
  return r;
}
function Kt(t, e, n, o) {
  Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get() {
      const t = e[n];
      return o || !l(t) ? t : Ht(t);
    },
    set() {}
  });
}
const qt = "watcher",
  Gt = `${qt} callback`,
  Zt = `${qt} getter`,
  Jt = `${qt} cleanup`;
function Xt(t, e) {
  return Yt(t, null, {
    flush: "post"
  });
}
const Qt = {};
function Yt(n, o, {
  immediate: r,
  deep: s,
  flush: c = "pre",
  onTrack: a,
  onTrigger: l
} = t) {
  const u = it,
    f = (t, e, n = null) => {
      const o = Ke(t, null, n, u, e);
      return s && o && o.__ob__ && o.__ob__.dep.depend(), o;
    };
  let d,
    p,
    h = !1,
    m = !1;
  if (Rt(n) ? (d = () => n.value, h = Nt(n)) : Dt(n) ? (d = () => (n.__ob__.dep.depend(), n), s = !0) : e(n) ? (m = !0, h = n.some(t => Dt(t) || Nt(t)), d = () => n.map(t => Rt(t) ? t.value : Dt(t) ? (t.__ob__.dep.depend(), yn(t)) : i(t) ? f(t, Zt) : void 0)) : d = i(n) ? o ? () => f(n, Zt) : () => {
    if (!u || !u._isDestroyed) return p && p(), f(n, qt, [_]);
  } : T, o && s) {
    const t = d;
    d = () => yn(t());
  }
  let _ = t => {
    p = v.onStop = () => {
      f(t, Jt);
    };
  };
  if (et()) return _ = T, o ? r && f(o, Gt, [d(), m ? [] : void 0, _]) : d(), T;
  const v = new wn(it, d, T, {
    lazy: !0
  });
  v.noRecurse = !o;
  let y = m ? [] : Qt;
  return v.run = () => {
    if (v.active) if (o) {
      const t = v.get();
      (s || h || (m ? t.some((t, e) => M(t, y[e])) : M(t, y))) && (p && p(), f(o, Gt, [t, y === Qt ? void 0 : y, _]), y = t);
    } else v.get();
  }, "sync" === c ? v.update = v.run : "post" === c ? (v.post = !0, v.update = () => zn(v)) : v.update = () => {
    if (u && u === it && !u._isMounted) {
      const t = u._preWatchers || (u._preWatchers = []);
      t.indexOf(v) < 0 && t.push(v);
    } else zn(v);
  }, o ? r ? v.run() : y = v.get() : "post" === c && u ? u.$once("hook:mounted", () => v.get()) : v.get(), () => {
    v.teardown();
  };
}
let te;
class ee {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = te, !t && te && (this.index = (te.scopes || (te.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const e = te;
      try {
        return te = this, t();
      } finally {
        te = e;
      }
    }
  }
  on() {
    te = this;
  }
  off() {
    te = this.parent;
  }
  stop(t) {
    if (this.active) {
      let e, n;
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].teardown();
      for (e = 0, n = this.cleanups.length; e < n; e++) this.cleanups[e]();
      if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].stop(!0);
      if (!this.detached && this.parent && !t) {
        const t = this.parent.scopes.pop();
        t && t !== this && (this.parent.scopes[this.index] = t, t.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function ne() {
  return te;
}
function oe(t) {
  const e = t._provided,
    n = t.$parent && t.$parent._provided;
  return n === e ? t._provided = Object.create(n) : e;
}
const re = b(t => {
  const e = "&" === t.charAt(0),
    n = "~" === (t = e ? t.slice(1) : t).charAt(0),
    o = "!" === (t = n ? t.slice(1) : t).charAt(0);
  return {
    name: t = o ? t.slice(1) : t,
    once: n,
    capture: o,
    passive: e
  };
});
function se(t, n) {
  function o() {
    const t = o.fns;
    if (!e(t)) return Ke(t, null, arguments, n, "v-on handler");
    {
      const e = t.slice();
      for (let t = 0; t < e.length; t++) Ke(e[t], null, arguments, n, "v-on handler");
    }
  }
  return o.fns = t, o;
}
function ie(t, e, o, s, i, c) {
  let a, l, u, f;
  for (a in t) l = t[a], u = e[a], f = re(a), n(l) || (n(u) ? (n(l.fns) && (l = t[a] = se(l, c)), r(f.once) && (l = t[a] = i(f.name, l, f.capture)), o(f.name, l, f.capture, f.passive, f.params)) : l !== u && (u.fns = l, t[a] = u));
  for (a in e) n(t[a]) && (f = re(a), s(f.name, e[a], f.capture));
}
function ce(t, e, s) {
  let i;
  t instanceof at && (t = t.data.hook || (t.data.hook = {}));
  const c = t[e];
  function a() {
    s.apply(this, arguments), v(i.fns, a);
  }
  n(c) ? i = se([a]) : o(c.fns) && r(c.merged) ? (i = c, i.fns.push(a)) : i = se([c, a]), i.merged = !0, t[e] = i;
}
function ae(t, e, n, r, s) {
  if (o(e)) {
    if (g(e, n)) return t[n] = e[n], s || delete e[n], !0;
    if (g(e, r)) return t[n] = e[r], s || delete e[r], !0;
  }
  return !1;
}
function le(t) {
  return s(t) ? [ut(t)] : e(t) ? fe(t) : void 0;
}
function ue(t) {
  return o(t) && o(t.text) && !1 === t.isComment;
}
function fe(t, i) {
  const c = [];
  let a, l, u, f;
  for (a = 0; a < t.length; a++) l = t[a], n(l) || "boolean" == typeof l || (u = c.length - 1, f = c[u], e(l) ? l.length > 0 && (l = fe(l, `${i || ""}_${a}`), ue(l[0]) && ue(f) && (c[u] = ut(f.text + l[0].text), l.shift()), c.push.apply(c, l)) : s(l) ? ue(f) ? c[u] = ut(f.text + l) : "" !== l && c.push(ut(l)) : ue(l) && ue(f) ? c[u] = ut(f.text + l.text) : (r(t._isVList) && o(l.tag) && n(l.key) && o(i) && (l.key = `__vlist${i}_${a}__`), c.push(l)));
  return c;
}
function de(t, n) {
  let r,
    s,
    i,
    a,
    l = null;
  if (e(t) || "string" == typeof t) for (l = new Array(t.length), r = 0, s = t.length; r < s; r++) l[r] = n(t[r], r);else if ("number" == typeof t) for (l = new Array(t), r = 0; r < t; r++) l[r] = n(r + 1, r);else if (c(t)) if (rt && t[Symbol.iterator]) {
    l = [];
    const e = t[Symbol.iterator]();
    let o = e.next();
    for (; !o.done;) l.push(n(o.value, l.length)), o = e.next();
  } else for (i = Object.keys(t), l = new Array(i.length), r = 0, s = i.length; r < s; r++) a = i[r], l[r] = n(t[a], a, r);
  return o(l) || (l = []), l._isVList = !0, l;
}
function pe(t, e, n, o) {
  const r = this.$scopedSlots[t];
  let s;
  r ? (n = n || {}, o && (n = j(j({}, o), n)), s = r(n) || (i(e) ? e() : e)) : s = this.$slots[t] || (i(e) ? e() : e);
  const c = n && n.slot;
  return c ? this.$createElement("template", {
    slot: c
  }, s) : s;
}
function he(t) {
  return co(this.$options, "filters", t) || P;
}
function me(t, n) {
  return e(t) ? -1 === t.indexOf(n) : t !== n;
}
function _e(t, e, n, o, r) {
  const s = U.keyCodes[e] || n;
  return r && o && !U.keyCodes[e] ? me(r, o) : s ? me(s, t) : o ? O(o) !== e : void 0 === t;
}
function ve(t, n, o, r, s) {
  if (o) if (c(o)) {
    let i;
    e(o) && (o = A(o));
    for (const e in o) {
      if ("class" === e || "style" === e || _(e)) i = t;else {
        const o = t.attrs && t.attrs.type;
        i = r || U.mustUseProp(n, o, e) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
      }
      const c = w(e),
        a = O(e);
      if (!(c in i) && !(a in i) && (i[e] = o[e], s)) {
        (t.on || (t.on = {}))[`update:${e}`] = function (t) {
          o[e] = t;
        };
      }
    }
  } else ;
  return t;
}
function ye(t, e) {
  const n = this._staticTrees || (this._staticTrees = []);
  let o = n[t];
  return o && !e || (o = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, this._c, this), be(o, `__static__${t}`, !1)), o;
}
function ge(t, e, n) {
  return be(t, `__once__${e}${n ? `_${n}` : ""}`, !0), t;
}
function be(t, n, o) {
  if (e(t)) for (let e = 0; e < t.length; e++) t[e] && "string" != typeof t[e] && $e(t[e], `${n}_${e}`, o);else $e(t, n, o);
}
function $e(t, e, n) {
  t.isStatic = !0, t.key = e, t.isOnce = n;
}
function we(t, e) {
  if (e) if (l(e)) {
    const n = t.on = t.on ? j({}, t.on) : {};
    for (const t in e) {
      const o = n[t],
        r = e[t];
      n[t] = o ? [].concat(o, r) : r;
    }
  } else ;
  return t;
}
function Ce(t, n, o, r) {
  n = n || {
    $stable: !o
  };
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    e(s) ? Ce(s, n, o) : s && (s.proxy && (s.fn.proxy = !0), n[s.key] = s.fn);
  }
  return r && (n.$key = r), n;
}
function xe(t, e) {
  for (let n = 0; n < e.length; n += 2) {
    const o = e[n];
    "string" == typeof o && o && (t[e[n]] = e[n + 1]);
  }
  return t;
}
function Oe(t, e) {
  return "string" == typeof t ? e + t : t;
}
function ke(t) {
  t._o = ge, t._n = h, t._s = d, t._l = de, t._t = pe, t._q = I, t._i = D, t._m = ye, t._f = he, t._k = _e, t._b = ve, t._v = ut, t._e = lt, t._u = Ce, t._g = we, t._d = xe, t._p = Oe;
}
function Se(t, e) {
  if (!t || !t.length) return {};
  const n = {};
  for (let o = 0, r = t.length; o < r; o++) {
    const r = t[o],
      s = r.data;
    if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, r.context !== e && r.fnContext !== e || !s || null == s.slot) (n.default || (n.default = [])).push(r);else {
      const t = s.slot,
        e = n[t] || (n[t] = []);
      "template" === r.tag ? e.push.apply(e, r.children || []) : e.push(r);
    }
  }
  for (const t in n) n[t].every(je) && delete n[t];
  return n;
}
function je(t) {
  return t.isComment && !t.asyncFactory || " " === t.text;
}
function Ae(t) {
  return t.isComment && t.asyncFactory;
}
function Te(e, n, o, r) {
  let s;
  const i = Object.keys(o).length > 0,
    c = n ? !!n.$stable : !i,
    a = n && n.$key;
  if (n) {
    if (n._normalized) return n._normalized;
    if (c && r && r !== t && a === r.$key && !i && !r.$hasNormal) return r;
    s = {};
    for (const t in n) n[t] && "$" !== t[0] && (s[t] = Ee(e, o, t, n[t]));
  } else s = {};
  for (const t in o) t in s || (s[t] = Pe(o, t));
  return n && Object.isExtensible(n) && (n._normalized = s), V(s, "$stable", c), V(s, "$key", a), V(s, "$hasNormal", i), s;
}
function Ee(t, n, o, r) {
  const s = function () {
    const n = it;
    ct(t);
    let o = arguments.length ? r.apply(null, arguments) : r({});
    o = o && "object" == typeof o && !e(o) ? [o] : le(o);
    const s = o && o[0];
    return ct(n), o && (!s || 1 === o.length && s.isComment && !Ae(s)) ? void 0 : o;
  };
  return r.proxy && Object.defineProperty(n, o, {
    get: s,
    enumerable: !0,
    configurable: !0
  }), s;
}
function Pe(t, e) {
  return () => t[e];
}
function Ie(e) {
  return {
    get attrs() {
      if (!e._attrsProxy) {
        const n = e._attrsProxy = {};
        V(n, "_v_attr_proxy", !0), De(n, e.$attrs, t, e, "$attrs");
      }
      return e._attrsProxy;
    },
    get listeners() {
      if (!e._listenersProxy) {
        De(e._listenersProxy = {}, e.$listeners, t, e, "$listeners");
      }
      return e._listenersProxy;
    },
    get slots() {
      return function (t) {
        t._slotsProxy || Me(t._slotsProxy = {}, t.$scopedSlots);
        return t._slotsProxy;
      }(e);
    },
    emit: k(e.$emit, e),
    expose(t) {
      t && Object.keys(t).forEach(n => Ut(e, t, n));
    }
  };
}
function De(t, e, n, o, r) {
  let s = !1;
  for (const i in e) i in t ? e[i] !== n[i] && (s = !0) : (s = !0, Ne(t, i, o, r));
  for (const n in t) n in e || (s = !0, delete t[n]);
  return s;
}
function Ne(t, e, n, o) {
  Object.defineProperty(t, e, {
    enumerable: !0,
    configurable: !0,
    get: () => n[o][e]
  });
}
function Me(t, e) {
  for (const n in e) t[n] = e[n];
  for (const n in t) n in e || delete t[n];
}
function Le() {
  const t = it;
  return t._setupContext || (t._setupContext = Ie(t));
}
let Re = null;
function Fe(t, e) {
  return (t.__esModule || rt && "Module" === t[Symbol.toStringTag]) && (t = t.default), c(t) ? e.extend(t) : t;
}
function Ue(t) {
  if (e(t)) for (let e = 0; e < t.length; e++) {
    const n = t[e];
    if (o(n) && (o(n.componentOptions) || Ae(n))) return n;
  }
}
const Be = 1,
  Ve = 2;
function ze(t, n, a, l, u, f) {
  return (e(a) || s(a)) && (u = l, l = a, a = void 0), r(f) && (u = Ve), function (t, n, r, s, a) {
    if (o(r) && o(r.__ob__)) return lt();
    o(r) && o(r.is) && (n = r.is);
    if (!n) return lt();
    e(s) && i(s[0]) && ((r = r || {}).scopedSlots = {
      default: s[0]
    }, s.length = 0);
    a === Ve ? s = le(s) : a === Be && (s = function (t) {
      for (let n = 0; n < t.length; n++) if (e(t[n])) return Array.prototype.concat.apply([], t);
      return t;
    }(s));
    let l, u;
    if ("string" == typeof n) {
      let e;
      u = t.$vnode && t.$vnode.ns || U.getTagNamespace(n), l = U.isReservedTag(n) ? new at(U.parsePlatformTagName(n), r, s, void 0, void 0, t) : r && r.pre || !o(e = co(t.$options, "components", n)) ? new at(n, r, s, void 0, void 0, t) : Xn(e, r, t, s, n);
    } else l = Xn(n, r, t, s);
    return e(l) ? l : o(l) ? (o(u) && He(l, u), o(r) && function (t) {
      c(t.style) && yn(t.style);
      c(t.class) && yn(t.class);
    }(r), l) : lt();
  }(t, n, a, l, u);
}
function He(t, e, s) {
  if (t.ns = e, "foreignObject" === t.tag && (e = void 0, s = !0), o(t.children)) for (let i = 0, c = t.children.length; i < c; i++) {
    const c = t.children[i];
    o(c.tag) && (n(c.ns) || r(s) && "svg" !== c.tag) && He(c, e, s);
  }
}
function We(t, e, n) {
  vt();
  try {
    if (e) {
      let o = e;
      for (; o = o.$parent;) {
        const r = o.$options.errorCaptured;
        if (r) for (let s = 0; s < r.length; s++) try {
          if (!1 === r[s].call(o, t, e, n)) return;
        } catch (t) {
          qe(t, o, "errorCaptured hook");
        }
      }
    }
    qe(t, e, n);
  } finally {
    yt();
  }
}
function Ke(t, e, n, o, r) {
  let s;
  try {
    s = n ? t.apply(e, n) : t.call(e), s && !s._isVue && f(s) && !s._handled && (s.catch(t => We(t, o, r + " (Promise/async)")), s._handled = !0);
  } catch (t) {
    We(t, o, r);
  }
  return s;
}
function qe(t, e, n) {
  if (U.errorHandler) try {
    return U.errorHandler.call(null, t, e, n);
  } catch (e) {
    e !== t && Ge(e);
  }
  Ge(t);
}
function Ge(t, e, n) {
  if (!W || "undefined" == typeof console) throw t;
  console.error(t);
}
let Ze = !1;
const Je = [];
let Xe,
  Qe = !1;
function Ye() {
  Qe = !1;
  const t = Je.slice(0);
  Je.length = 0;
  for (let e = 0; e < t.length; e++) t[e]();
}
if ("undefined" != typeof Promise && ot(Promise)) {
  const t = Promise.resolve();
  Xe = () => {
    t.then(Ye), J && setTimeout(T);
  }, Ze = !0;
} else if (q || "undefined" == typeof MutationObserver || !ot(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Xe = "undefined" != typeof setImmediate && ot(setImmediate) ? () => {
  setImmediate(Ye);
} : () => {
  setTimeout(Ye, 0);
};else {
  let t = 1;
  const e = new MutationObserver(Ye),
    n = document.createTextNode(String(t));
  e.observe(n, {
    characterData: !0
  }), Xe = () => {
    t = (t + 1) % 2, n.data = String(t);
  }, Ze = !0;
}
function tn(t, e) {
  let n;
  if (Je.push(() => {
    if (t) try {
      t.call(e);
    } catch (t) {
      We(t, e, "nextTick");
    } else n && n(e);
  }), Qe || (Qe = !0, Xe()), !t && "undefined" != typeof Promise) return new Promise(t => {
    n = t;
  });
}
function en(t) {
  return (e, n = it) => {
    if (n) return function (t, e, n) {
      const o = t.$options;
      o[e] = oo(o[e], n);
    }(n, t, e);
  };
}
const nn = en("beforeMount"),
  on = en("mounted"),
  rn = en("beforeUpdate"),
  sn = en("updated"),
  cn = en("beforeDestroy"),
  an = en("destroyed"),
  ln = en("activated"),
  un = en("deactivated"),
  fn = en("serverPrefetch"),
  dn = en("renderTracked"),
  pn = en("renderTriggered"),
  hn = en("errorCaptured");
const mn = "2.7.16";
var _n = Object.freeze({
  __proto__: null,
  version: mn,
  defineComponent: function (t) {
    return t;
  },
  ref: function (t) {
    return Ft(t, !1);
  },
  shallowRef: function (t) {
    return Ft(t, !0);
  },
  isRef: Rt,
  toRef: Bt,
  toRefs: function (t) {
    const n = e(t) ? new Array(t.length) : {};
    for (const e in t) n[e] = Bt(t, e);
    return n;
  },
  unref: function (t) {
    return Rt(t) ? t.value : t;
  },
  proxyRefs: function (t) {
    if (Dt(t)) return t;
    const e = {},
      n = Object.keys(t);
    for (let o = 0; o < n.length; o++) Ut(e, t, n[o]);
    return e;
  },
  customRef: function (t) {
    const e = new mt(),
      {
        get: n,
        set: o
      } = t(() => {
        e.depend();
      }, () => {
        e.notify();
      }),
      r = {
        get value() {
          return n();
        },
        set value(t) {
          o(t);
        }
      };
    return V(r, Lt, !0), r;
  },
  triggerRef: function (t) {
    t.dep && t.dep.notify();
  },
  reactive: function (t) {
    return It(t, !1), t;
  },
  isReactive: Dt,
  isReadonly: Mt,
  isShallow: Nt,
  isProxy: function (t) {
    return Dt(t) || Mt(t);
  },
  shallowReactive: Pt,
  markRaw: function (t) {
    return Object.isExtensible(t) && V(t, "__v_skip", !0), t;
  },
  toRaw: function t(e) {
    const n = e && e.__v_raw;
    return n ? t(n) : e;
  },
  readonly: Ht,
  shallowReadonly: function (t) {
    return Wt(t, !0);
  },
  computed: function (t, e) {
    let n, o;
    const r = i(t);
    r ? (n = t, o = T) : (n = t.get, o = t.set);
    const s = et() ? null : new wn(it, n, T, {
        lazy: !0
      }),
      c = {
        effect: s,
        get value() {
          return s ? (s.dirty && s.evaluate(), mt.target && s.depend(), s.value) : n();
        },
        set value(t) {
          o(t);
        }
      };
    return V(c, Lt, !0), V(c, "__v_isReadonly", r), c;
  },
  watch: function (t, e, n) {
    return Yt(t, e, n);
  },
  watchEffect: function (t, e) {
    return Yt(t, null, e);
  },
  watchPostEffect: Xt,
  watchSyncEffect: function (t, e) {
    return Yt(t, null, {
      flush: "sync"
    });
  },
  EffectScope: ee,
  effectScope: function (t) {
    return new ee(t);
  },
  onScopeDispose: function (t) {
    te && te.cleanups.push(t);
  },
  getCurrentScope: ne,
  provide: function (t, e) {
    it && (oe(it)[t] = e);
  },
  inject: function (t, e, n = !1) {
    const o = it;
    if (o) {
      const r = o.$parent && o.$parent._provided;
      if (r && t in r) return r[t];
      if (arguments.length > 1) return n && i(e) ? e.call(o) : e;
    }
  },
  h: function (t, e, n) {
    return ze(it, t, e, n, 2, !0);
  },
  getCurrentInstance: function () {
    return it && {
      proxy: it
    };
  },
  useSlots: function () {
    return Le().slots;
  },
  useAttrs: function () {
    return Le().attrs;
  },
  useListeners: function () {
    return Le().listeners;
  },
  mergeDefaults: function (t, n) {
    const o = e(t) ? t.reduce((t, e) => (t[e] = {}, t), {}) : t;
    for (const t in n) {
      const r = o[t];
      r ? e(r) || i(r) ? o[t] = {
        type: r,
        default: n[t]
      } : r.default = n[t] : null === r && (o[t] = {
        default: n[t]
      });
    }
    return o;
  },
  nextTick: tn,
  set: At,
  del: Tt,
  useCssModule: function (e = "$style") {
    {
      if (!it) return t;
      const n = it[e];
      return n || t;
    }
  },
  useCssVars: function (t) {
    if (!W) return;
    const e = it;
    e && Xt(() => {
      const n = e.$el,
        o = t(e, e._setupProxy);
      if (n && 1 === n.nodeType) {
        const t = n.style;
        for (const e in o) t.setProperty(`--${e}`, o[e]);
      }
    });
  },
  defineAsyncComponent: function (t) {
    i(t) && (t = {
      loader: t
    });
    const {
      loader: e,
      loadingComponent: n,
      errorComponent: o,
      delay: r = 200,
      timeout: s,
      suspensible: c = !1,
      onError: a
    } = t;
    let l = null,
      u = 0;
    const f = () => {
      let t;
      return l || (t = l = e().catch(t => {
        if (t = t instanceof Error ? t : new Error(String(t)), a) return new Promise((e, n) => {
          a(t, () => e((u++, l = null, f())), () => n(t), u + 1);
        });
        throw t;
      }).then(e => t !== l && l ? l : (e && (e.__esModule || "Module" === e[Symbol.toStringTag]) && (e = e.default), e)));
    };
    return () => ({
      component: f(),
      delay: r,
      timeout: s,
      error: o,
      loading: n
    });
  },
  onBeforeMount: nn,
  onMounted: on,
  onBeforeUpdate: rn,
  onUpdated: sn,
  onBeforeUnmount: cn,
  onUnmounted: an,
  onActivated: ln,
  onDeactivated: un,
  onServerPrefetch: fn,
  onRenderTracked: dn,
  onRenderTriggered: pn,
  onErrorCaptured: function (t, e = it) {
    hn(t, e);
  }
});
const vn = new st();
function yn(t) {
  return gn(t, vn), vn.clear(), t;
}
function gn(t, n) {
  let o, r;
  const s = e(t);
  if (!(!s && !c(t) || t.__v_skip || Object.isFrozen(t) || t instanceof at)) {
    if (t.__ob__) {
      const e = t.__ob__.dep.id;
      if (n.has(e)) return;
      n.add(e);
    }
    if (s) for (o = t.length; o--;) gn(t[o], n);else if (Rt(t)) gn(t.value, n);else for (r = Object.keys(t), o = r.length; o--;) gn(t[r[o]], n);
  }
}
let bn,
  $n = 0;
class wn {
  constructor(t, e, n, o, r) {
    !function (t, e = te) {
      e && e.active && e.effects.push(t);
    }(this, te && !te._vm ? te : t ? t._scope : void 0), (this.vm = t) && r && (t._watcher = this), o ? (this.deep = !!o.deep, this.user = !!o.user, this.lazy = !!o.lazy, this.sync = !!o.sync, this.before = o.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++$n, this.active = !0, this.post = !1, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new st(), this.newDepIds = new st(), this.expression = "", i(e) ? this.getter = e : (this.getter = function (t) {
      if (z.test(t)) return;
      const e = t.split(".");
      return function (t) {
        for (let n = 0; n < e.length; n++) {
          if (!t) return;
          t = t[e[n]];
        }
        return t;
      };
    }(e), this.getter || (this.getter = T)), this.value = this.lazy ? void 0 : this.get();
  }
  get() {
    let t;
    vt(this);
    const e = this.vm;
    try {
      t = this.getter.call(e, e);
    } catch (t) {
      if (!this.user) throw t;
      We(t, e, `getter for watcher "${this.expression}"`);
    } finally {
      this.deep && yn(t), yt(), this.cleanupDeps();
    }
    return t;
  }
  addDep(t) {
    const e = t.id;
    this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
  }
  cleanupDeps() {
    let t = this.deps.length;
    for (; t--;) {
      const e = this.deps[t];
      this.newDepIds.has(e.id) || e.removeSub(this);
    }
    let e = this.depIds;
    this.depIds = this.newDepIds, this.newDepIds = e, this.newDepIds.clear(), e = this.deps, this.deps = this.newDeps, this.newDeps = e, this.newDeps.length = 0;
  }
  update() {
    this.lazy ? this.dirty = !0 : this.sync ? this.run() : zn(this);
  }
  run() {
    if (this.active) {
      const t = this.get();
      if (t !== this.value || c(t) || this.deep) {
        const e = this.value;
        if (this.value = t, this.user) {
          const n = `callback for watcher "${this.expression}"`;
          Ke(this.cb, this.vm, [t, e], this.vm, n);
        } else this.cb.call(this.vm, t, e);
      }
    }
  }
  evaluate() {
    this.value = this.get(), this.dirty = !1;
  }
  depend() {
    let t = this.deps.length;
    for (; t--;) this.deps[t].depend();
  }
  teardown() {
    if (this.vm && !this.vm._isBeingDestroyed && v(this.vm._scope.effects, this), this.active) {
      let t = this.deps.length;
      for (; t--;) this.deps[t].removeSub(this);
      this.active = !1, this.onStop && this.onStop();
    }
  }
}
function Cn(t, e) {
  bn.$on(t, e);
}
function xn(t, e) {
  bn.$off(t, e);
}
function On(t, e) {
  const n = bn;
  return function o() {
    null !== e.apply(null, arguments) && n.$off(t, o);
  };
}
function kn(t, e, n) {
  bn = t, ie(e, n || {}, Cn, xn, On, t), bn = void 0;
}
let Sn = null;
function jn(t) {
  const e = Sn;
  return Sn = t, () => {
    Sn = e;
  };
}
function An(t) {
  for (; t && (t = t.$parent);) if (t._inactive) return !0;
  return !1;
}
function Tn(t, e) {
  if (e) {
    if (t._directInactive = !1, An(t)) return;
  } else if (t._directInactive) return;
  if (t._inactive || null === t._inactive) {
    t._inactive = !1;
    for (let e = 0; e < t.$children.length; e++) Tn(t.$children[e]);
    Pn(t, "activated");
  }
}
function En(t, e) {
  if (!(e && (t._directInactive = !0, An(t)) || t._inactive)) {
    t._inactive = !0;
    for (let e = 0; e < t.$children.length; e++) En(t.$children[e]);
    Pn(t, "deactivated");
  }
}
function Pn(t, e, n, o = !0) {
  vt();
  const r = it,
    s = ne();
  o && ct(t);
  const i = t.$options[e],
    c = `${e} hook`;
  if (i) for (let e = 0, o = i.length; e < o; e++) Ke(i[e], t, n || null, t, c);
  t._hasHookEvent && t.$emit("hook:" + e), o && (ct(r), s && s.on()), yt();
}
const In = [],
  Dn = [];
let Nn = {},
  Mn = !1,
  Ln = !1,
  Rn = 0;
let Fn = 0,
  Un = Date.now;
if (W && !q) {
  const t = window.performance;
  t && "function" == typeof t.now && Un() > document.createEvent("Event").timeStamp && (Un = () => t.now());
}
const Bn = (t, e) => {
  if (t.post) {
    if (!e.post) return 1;
  } else if (e.post) return -1;
  return t.id - e.id;
};
function Vn() {
  let t, e;
  for (Fn = Un(), Ln = !0, In.sort(Bn), Rn = 0; Rn < In.length; Rn++) t = In[Rn], t.before && t.before(), e = t.id, Nn[e] = null, t.run();
  const n = Dn.slice(),
    o = In.slice();
  Rn = In.length = Dn.length = 0, Nn = {}, Mn = Ln = !1, function (t) {
    for (let e = 0; e < t.length; e++) t[e]._inactive = !0, Tn(t[e], !0);
  }(n), function (t) {
    let e = t.length;
    for (; e--;) {
      const n = t[e],
        o = n.vm;
      o && o._watcher === n && o._isMounted && !o._isDestroyed && Pn(o, "updated");
    }
  }(o), ht(), nt && U.devtools && nt.emit("flush");
}
function zn(t) {
  const e = t.id;
  if (null == Nn[e] && (t !== mt.target || !t.noRecurse)) {
    if (Nn[e] = !0, Ln) {
      let e = In.length - 1;
      for (; e > Rn && In[e].id > t.id;) e--;
      In.splice(e + 1, 0, t);
    } else In.push(t);
    Mn || (Mn = !0, tn(Vn));
  }
}
function Hn(t, e) {
  if (t) {
    const n = Object.create(null),
      o = rt ? Reflect.ownKeys(t) : Object.keys(t);
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      if ("__ob__" === s) continue;
      const c = t[s].from;
      if (c in e._provided) n[s] = e._provided[c];else if ("default" in t[s]) {
        const o = t[s].default;
        n[s] = i(o) ? o.call(e) : o;
      }
    }
    return n;
  }
}
function Wn(n, o, s, i, c) {
  const a = c.options;
  let l;
  g(i, "_uid") ? (l = Object.create(i), l._original = i) : (l = i, i = i._original);
  const u = r(a._compiled),
    f = !u;
  this.data = n, this.props = o, this.children = s, this.parent = i, this.listeners = n.on || t, this.injections = Hn(a.inject, i), this.slots = () => (this.$slots || Te(i, n.scopedSlots, this.$slots = Se(s, i)), this.$slots), Object.defineProperty(this, "scopedSlots", {
    enumerable: !0,
    get() {
      return Te(i, n.scopedSlots, this.slots());
    }
  }), u && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = Te(i, n.scopedSlots, this.$slots)), a._scopeId ? this._c = (t, n, o, r) => {
    const s = ze(l, t, n, o, r, f);
    return s && !e(s) && (s.fnScopeId = a._scopeId, s.fnContext = i), s;
  } : this._c = (t, e, n, o) => ze(l, t, e, n, o, f);
}
function Kn(t, e, n, o, r) {
  const s = ft(t);
  return s.fnContext = n, s.fnOptions = o, e.slot && ((s.data || (s.data = {})).slot = e.slot), s;
}
function qn(t, e) {
  for (const n in e) t[w(n)] = e[n];
}
function Gn(t) {
  return t.name || t.__name || t._componentTag;
}
ke(Wn.prototype);
const Zn = {
    init(t, e) {
      if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
        const e = t;
        Zn.prepatch(e, e);
      } else {
        (t.componentInstance = function (t, e) {
          const n = {
              _isComponent: !0,
              _parentVnode: t,
              parent: e
            },
            r = t.data.inlineTemplate;
          o(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns);
          return new t.componentOptions.Ctor(n);
        }(t, Sn)).$mount(e ? t.elm : void 0, e);
      }
    },
    prepatch(e, n) {
      const o = n.componentOptions;
      !function (e, n, o, r, s) {
        const i = r.data.scopedSlots,
          c = e.$scopedSlots,
          a = !!(i && !i.$stable || c !== t && !c.$stable || i && e.$scopedSlots.$key !== i.$key || !i && e.$scopedSlots.$key);
        let l = !!(s || e.$options._renderChildren || a);
        const u = e.$vnode;
        e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = s;
        const f = r.data.attrs || t;
        e._attrsProxy && De(e._attrsProxy, f, u.data && u.data.attrs || t, e, "$attrs") && (l = !0), e.$attrs = f, o = o || t;
        const d = e.$options._parentListeners;
        if (e._listenersProxy && De(e._listenersProxy, o, d || t, e, "$listeners"), e.$listeners = e.$options._parentListeners = o, kn(e, o, d), n && e.$options.props) {
          xt(!1);
          const t = e._props,
            o = e.$options._propKeys || [];
          for (let r = 0; r < o.length; r++) {
            const s = o[r],
              i = e.$options.props;
            t[s] = ao(s, i, n, e);
          }
          xt(!0), e.$options.propsData = n;
        }
        l && (e.$slots = Se(s, r.context), e.$forceUpdate());
      }(n.componentInstance = e.componentInstance, o.propsData, o.listeners, n, o.children);
    },
    insert(t) {
      const {
        context: e,
        componentInstance: n
      } = t;
      var o;
      n._isMounted || (n._isMounted = !0, Pn(n, "mounted")), t.data.keepAlive && (e._isMounted ? ((o = n)._inactive = !1, Dn.push(o)) : Tn(n, !0));
    },
    destroy(t) {
      const {
        componentInstance: e
      } = t;
      e._isDestroyed || (t.data.keepAlive ? En(e, !0) : e.$destroy());
    }
  },
  Jn = Object.keys(Zn);
function Xn(s, i, a, l, u) {
  if (n(s)) return;
  const d = a.$options._base;
  if (c(s) && (s = d.extend(s)), "function" != typeof s) return;
  let p;
  if (n(s.cid) && (p = s, s = function (t, e) {
    if (r(t.error) && o(t.errorComp)) return t.errorComp;
    if (o(t.resolved)) return t.resolved;
    const s = Re;
    if (s && o(t.owners) && -1 === t.owners.indexOf(s) && t.owners.push(s), r(t.loading) && o(t.loadingComp)) return t.loadingComp;
    if (s && !o(t.owners)) {
      const r = t.owners = [s];
      let i = !0,
        a = null,
        l = null;
      s.$on("hook:destroyed", () => v(r, s));
      const u = t => {
          for (let t = 0, e = r.length; t < e; t++) r[t].$forceUpdate();
          t && (r.length = 0, null !== a && (clearTimeout(a), a = null), null !== l && (clearTimeout(l), l = null));
        },
        d = N(n => {
          t.resolved = Fe(n, e), i ? r.length = 0 : u(!0);
        }),
        p = N(e => {
          o(t.errorComp) && (t.error = !0, u(!0));
        }),
        h = t(d, p);
      return c(h) && (f(h) ? n(t.resolved) && h.then(d, p) : f(h.component) && (h.component.then(d, p), o(h.error) && (t.errorComp = Fe(h.error, e)), o(h.loading) && (t.loadingComp = Fe(h.loading, e), 0 === h.delay ? t.loading = !0 : a = setTimeout(() => {
        a = null, n(t.resolved) && n(t.error) && (t.loading = !0, u(!1));
      }, h.delay || 200)), o(h.timeout) && (l = setTimeout(() => {
        l = null, n(t.resolved) && p(null);
      }, h.timeout)))), i = !1, t.loading ? t.loadingComp : t.resolved;
    }
  }(p, d), void 0 === s)) return function (t, e, n, o, r) {
    const s = lt();
    return s.asyncFactory = t, s.asyncMeta = {
      data: e,
      context: n,
      children: o,
      tag: r
    }, s;
  }(p, i, a, l, u);
  i = i || {}, Co(s), o(i.model) && function (t, n) {
    const r = t.model && t.model.prop || "value",
      s = t.model && t.model.event || "input";
    (n.attrs || (n.attrs = {}))[r] = n.model.value;
    const i = n.on || (n.on = {}),
      c = i[s],
      a = n.model.callback;
    o(c) ? (e(c) ? -1 === c.indexOf(a) : c !== a) && (i[s] = [a].concat(c)) : i[s] = a;
  }(s.options, i);
  const h = function (t, e, r) {
    const s = e.options.props;
    if (n(s)) return;
    const i = {},
      {
        attrs: c,
        props: a
      } = t;
    if (o(c) || o(a)) for (const t in s) {
      const e = O(t);
      ae(i, a, t, e, !0) || ae(i, c, t, e, !1);
    }
    return i;
  }(i, s);
  if (r(s.options.functional)) return function (n, r, s, i, c) {
    const a = n.options,
      l = {},
      u = a.props;
    if (o(u)) for (const e in u) l[e] = ao(e, u, r || t);else o(s.attrs) && qn(l, s.attrs), o(s.props) && qn(l, s.props);
    const f = new Wn(s, l, c, i, n),
      d = a.render.call(null, f._c, f);
    if (d instanceof at) return Kn(d, s, f.parent, a);
    if (e(d)) {
      const t = le(d) || [],
        e = new Array(t.length);
      for (let n = 0; n < t.length; n++) e[n] = Kn(t[n], s, f.parent, a);
      return e;
    }
  }(s, h, i, a, l);
  const m = i.on;
  if (i.on = i.nativeOn, r(s.options.abstract)) {
    const t = i.slot;
    i = {}, t && (i.slot = t);
  }
  !function (t) {
    const e = t.hook || (t.hook = {});
    for (let t = 0; t < Jn.length; t++) {
      const n = Jn[t],
        o = e[n],
        r = Zn[n];
      o === r || o && o._merged || (e[n] = o ? Qn(r, o) : r);
    }
  }(i);
  const _ = Gn(s.options) || u;
  return new at(`vue-component-${s.cid}${_ ? `-${_}` : ""}`, i, void 0, void 0, void 0, a, {
    Ctor: s,
    propsData: h,
    listeners: m,
    tag: u,
    children: l
  }, p);
}
function Qn(t, e) {
  const n = (n, o) => {
    t(n, o), e(n, o);
  };
  return n._merged = !0, n;
}
let Yn = T;
const to = U.optionMergeStrategies;
function eo(t, e, n = !0) {
  if (!e) return t;
  let o, r, s;
  const i = rt ? Reflect.ownKeys(e) : Object.keys(e);
  for (let c = 0; c < i.length; c++) o = i[c], "__ob__" !== o && (r = t[o], s = e[o], n && g(t, o) ? r !== s && l(r) && l(s) && eo(r, s) : At(t, o, s));
  return t;
}
function no(t, e, n) {
  return n ? function () {
    const o = i(e) ? e.call(n, n) : e,
      r = i(t) ? t.call(n, n) : t;
    return o ? eo(o, r) : r;
  } : e ? t ? function () {
    return eo(i(e) ? e.call(this, this) : e, i(t) ? t.call(this, this) : t);
  } : e : t;
}
function oo(t, n) {
  const o = n ? t ? t.concat(n) : e(n) ? n : [n] : t;
  return o ? function (t) {
    const e = [];
    for (let n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
    return e;
  }(o) : o;
}
function ro(t, e, n, o) {
  const r = Object.create(t || null);
  return e ? j(r, e) : r;
}
to.data = function (t, e, n) {
  return n ? no(t, e, n) : e && "function" != typeof e ? t : no(t, e);
}, F.forEach(t => {
  to[t] = oo;
}), R.forEach(function (t) {
  to[t + "s"] = ro;
}), to.watch = function (t, n, o, r) {
  if (t === Q && (t = void 0), n === Q && (n = void 0), !n) return Object.create(t || null);
  if (!t) return n;
  const s = {};
  j(s, t);
  for (const t in n) {
    let o = s[t];
    const r = n[t];
    o && !e(o) && (o = [o]), s[t] = o ? o.concat(r) : e(r) ? r : [r];
  }
  return s;
}, to.props = to.methods = to.inject = to.computed = function (t, e, n, o) {
  if (!t) return e;
  const r = Object.create(null);
  return j(r, t), e && j(r, e), r;
}, to.provide = function (t, e) {
  return t ? function () {
    const n = Object.create(null);
    return eo(n, i(t) ? t.call(this) : t), e && eo(n, i(e) ? e.call(this) : e, !1), n;
  } : e;
};
const so = function (t, e) {
  return void 0 === e ? t : e;
};
function io(t, n, o) {
  if (i(n) && (n = n.options), function (t, n) {
    const o = t.props;
    if (!o) return;
    const r = {};
    let s, i, c;
    if (e(o)) for (s = o.length; s--;) i = o[s], "string" == typeof i && (c = w(i), r[c] = {
      type: null
    });else if (l(o)) for (const t in o) i = o[t], c = w(t), r[c] = l(i) ? i : {
      type: i
    };
    t.props = r;
  }(n), function (t, n) {
    const o = t.inject;
    if (!o) return;
    const r = t.inject = {};
    if (e(o)) for (let t = 0; t < o.length; t++) r[o[t]] = {
      from: o[t]
    };else if (l(o)) for (const t in o) {
      const e = o[t];
      r[t] = l(e) ? j({
        from: t
      }, e) : {
        from: e
      };
    }
  }(n), function (t) {
    const e = t.directives;
    if (e) for (const t in e) {
      const n = e[t];
      i(n) && (e[t] = {
        bind: n,
        update: n
      });
    }
  }(n), !n._base && (n.extends && (t = io(t, n.extends, o)), n.mixins)) for (let e = 0, r = n.mixins.length; e < r; e++) t = io(t, n.mixins[e], o);
  const r = {};
  let s;
  for (s in t) c(s);
  for (s in n) g(t, s) || c(s);
  function c(e) {
    const s = to[e] || so;
    r[e] = s(t[e], n[e], o, e);
  }
  return r;
}
function co(t, e, n, o) {
  if ("string" != typeof n) return;
  const r = t[e];
  if (g(r, n)) return r[n];
  const s = w(n);
  if (g(r, s)) return r[s];
  const i = C(s);
  if (g(r, i)) return r[i];
  return r[n] || r[s] || r[i];
}
function ao(t, e, n, o) {
  const r = e[t],
    s = !g(n, t);
  let c = n[t];
  const a = po(Boolean, r.type);
  if (a > -1) if (s && !g(r, "default")) c = !1;else if ("" === c || c === O(t)) {
    const t = po(String, r.type);
    (t < 0 || a < t) && (c = !0);
  }
  if (void 0 === c) {
    c = function (t, e, n) {
      if (!g(e, "default")) return;
      const o = e.default;
      if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];
      return i(o) && "Function" !== uo(e.type) ? o.call(t) : o;
    }(o, r, t);
    const e = Ct;
    xt(!0), St(c), xt(e);
  }
  return c;
}
const lo = /^\s*function (\w+)/;
function uo(t) {
  const e = t && t.toString().match(lo);
  return e ? e[1] : "";
}
function fo(t, e) {
  return uo(t) === uo(e);
}
function po(t, n) {
  if (!e(n)) return fo(n, t) ? 0 : -1;
  for (let e = 0, o = n.length; e < o; e++) if (fo(n[e], t)) return e;
  return -1;
}
const ho = {
  enumerable: !0,
  configurable: !0,
  get: T,
  set: T
};
function mo(t, e, n) {
  ho.get = function () {
    return this[e][n];
  }, ho.set = function (t) {
    this[e][n] = t;
  }, Object.defineProperty(t, n, ho);
}
function _o(t) {
  const n = t.$options;
  if (n.props && function (t, e) {
    const n = t.$options.propsData || {},
      o = t._props = Pt({}),
      r = t.$options._propKeys = [],
      s = !t.$parent;
    s || xt(!1);
    for (const s in e) {
      r.push(s);
      jt(o, s, ao(s, e, n, t), void 0, !0), s in t || mo(t, "_props", s);
    }
    xt(!0);
  }(t, n.props), function (t) {
    const e = t.$options,
      n = e.setup;
    if (n) {
      const o = t._setupContext = Ie(t);
      ct(t), vt();
      const r = Ke(n, null, [t._props || Pt({}), o], t, "setup");
      if (yt(), ct(), i(r)) e.render = r;else if (c(r)) if (t._setupState = r, r.__sfc) {
        const e = t._setupProxy = {};
        for (const t in r) "__sfc" !== t && Ut(e, r, t);
      } else for (const e in r) B(e) || Ut(t, r, e);
    }
  }(t), n.methods && function (t, e) {
    t.$options.props;
    for (const n in e) t[n] = "function" != typeof e[n] ? T : k(e[n], t);
  }(t, n.methods), n.data) !function (t) {
    let e = t.$options.data;
    e = t._data = i(e) ? function (t, e) {
      vt();
      try {
        return t.call(e, e);
      } catch (t) {
        return We(t, e, "data()"), {};
      } finally {
        yt();
      }
    }(e, t) : e || {}, l(e) || (e = {});
    const n = Object.keys(e),
      o = t.$options.props;
    t.$options.methods;
    let r = n.length;
    for (; r--;) {
      const e = n[r];
      o && g(o, e) || B(e) || mo(t, "_data", e);
    }
    const s = St(e);
    s && s.vmCount++;
  }(t);else {
    const e = St(t._data = {});
    e && e.vmCount++;
  }
  n.computed && function (t, e) {
    const n = t._computedWatchers = Object.create(null),
      o = et();
    for (const r in e) {
      const s = e[r],
        c = i(s) ? s : s.get;
      o || (n[r] = new wn(t, c || T, T, vo)), r in t || yo(t, r, s);
    }
  }(t, n.computed), n.watch && n.watch !== Q && function (t, n) {
    for (const o in n) {
      const r = n[o];
      if (e(r)) for (let e = 0; e < r.length; e++) $o(t, o, r[e]);else $o(t, o, r);
    }
  }(t, n.watch);
}
const vo = {
  lazy: !0
};
function yo(t, e, n) {
  const o = !et();
  i(n) ? (ho.get = o ? go(e) : bo(n), ho.set = T) : (ho.get = n.get ? o && !1 !== n.cache ? go(e) : bo(n.get) : T, ho.set = n.set || T), Object.defineProperty(t, e, ho);
}
function go(t) {
  return function () {
    const e = this._computedWatchers && this._computedWatchers[t];
    if (e) return e.dirty && e.evaluate(), mt.target && e.depend(), e.value;
  };
}
function bo(t) {
  return function () {
    return t.call(this, this);
  };
}
function $o(t, e, n, o) {
  return l(n) && (o = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, o);
}
let wo = 0;
function Co(t) {
  let e = t.options;
  if (t.super) {
    const n = Co(t.super);
    if (n !== t.superOptions) {
      t.superOptions = n;
      const o = function (t) {
        let e;
        const n = t.options,
          o = t.sealedOptions;
        for (const t in n) n[t] !== o[t] && (e || (e = {}), e[t] = n[t]);
        return e;
      }(t);
      o && j(t.extendOptions, o), e = t.options = io(n, t.extendOptions), e.name && (e.components[e.name] = t);
    }
  }
  return e;
}
function xo(t) {
  this._init(t);
}
function Oo(t) {
  t.cid = 0;
  let e = 1;
  t.extend = function (t) {
    t = t || {};
    const n = this,
      o = n.cid,
      r = t._Ctor || (t._Ctor = {});
    if (r[o]) return r[o];
    const s = Gn(t) || Gn(n.options),
      i = function (t) {
        this._init(t);
      };
    return (i.prototype = Object.create(n.prototype)).constructor = i, i.cid = e++, i.options = io(n.options, t), i.super = n, i.options.props && function (t) {
      const e = t.options.props;
      for (const n in e) mo(t.prototype, "_props", n);
    }(i), i.options.computed && function (t) {
      const e = t.options.computed;
      for (const n in e) yo(t.prototype, n, e[n]);
    }(i), i.extend = n.extend, i.mixin = n.mixin, i.use = n.use, R.forEach(function (t) {
      i[t] = n[t];
    }), s && (i.options.components[s] = i), i.superOptions = n.options, i.extendOptions = t, i.sealedOptions = j({}, i.options), r[o] = i, i;
  };
}
function ko(t) {
  return t && (Gn(t.Ctor.options) || t.tag);
}
function So(t, n) {
  return e(t) ? t.indexOf(n) > -1 : "string" == typeof t ? t.split(",").indexOf(n) > -1 : (o = t, "[object RegExp]" === a.call(o) && t.test(n));
  var o;
}
function jo(t, e) {
  const {
    cache: n,
    keys: o,
    _vnode: r,
    $vnode: s
  } = t;
  for (const t in n) {
    const s = n[t];
    if (s) {
      const i = s.name;
      i && !e(i) && Ao(n, t, o, r);
    }
  }
  s.componentOptions.children = void 0;
}
function Ao(t, e, n, o) {
  const r = t[e];
  !r || o && r.tag === o.tag || r.componentInstance.$destroy(), t[e] = null, v(n, e);
}
!function (e) {
  e.prototype._init = function (e) {
    const n = this;
    n._uid = wo++, n._isVue = !0, n.__v_skip = !0, n._scope = new ee(!0), n._scope.parent = void 0, n._scope._vm = !0, e && e._isComponent ? function (t, e) {
      const n = t.$options = Object.create(t.constructor.options),
        o = e._parentVnode;
      n.parent = e.parent, n._parentVnode = o;
      const r = o.componentOptions;
      n.propsData = r.propsData, n._parentListeners = r.listeners, n._renderChildren = r.children, n._componentTag = r.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
    }(n, e) : n.$options = io(Co(n.constructor), e || {}, n), n._renderProxy = n, n._self = n, function (t) {
      const e = t.$options;
      let n = e.parent;
      if (n && !e.abstract) {
        for (; n.$options.abstract && n.$parent;) n = n.$parent;
        n.$children.push(t);
      }
      t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._provided = n ? n._provided : Object.create(null), t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1;
    }(n), function (t) {
      t._events = Object.create(null), t._hasHookEvent = !1;
      const e = t.$options._parentListeners;
      e && kn(t, e);
    }(n), function (e) {
      e._vnode = null, e._staticTrees = null;
      const n = e.$options,
        o = e.$vnode = n._parentVnode,
        r = o && o.context;
      e.$slots = Se(n._renderChildren, r), e.$scopedSlots = o ? Te(e.$parent, o.data.scopedSlots, e.$slots) : t, e._c = (t, n, o, r) => ze(e, t, n, o, r, !1), e.$createElement = (t, n, o, r) => ze(e, t, n, o, r, !0);
      const s = o && o.data;
      jt(e, "$attrs", s && s.attrs || t, null, !0), jt(e, "$listeners", n._parentListeners || t, null, !0);
    }(n), Pn(n, "beforeCreate", void 0, !1), function (t) {
      const e = Hn(t.$options.inject, t);
      e && (xt(!1), Object.keys(e).forEach(n => {
        jt(t, n, e[n]);
      }), xt(!0));
    }(n), _o(n), function (t) {
      const e = t.$options.provide;
      if (e) {
        const n = i(e) ? e.call(t) : e;
        if (!c(n)) return;
        const o = oe(t),
          r = rt ? Reflect.ownKeys(n) : Object.keys(n);
        for (let t = 0; t < r.length; t++) {
          const e = r[t];
          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(n, e));
        }
      }
    }(n), Pn(n, "created"), n.$options.el && n.$mount(n.$options.el);
  };
}(xo), function (t) {
  const e = {
      get: function () {
        return this._data;
      }
    },
    n = {
      get: function () {
        return this._props;
      }
    };
  Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = At, t.prototype.$delete = Tt, t.prototype.$watch = function (t, e, n) {
    const o = this;
    if (l(e)) return $o(o, t, e, n);
    (n = n || {}).user = !0;
    const r = new wn(o, t, e, n);
    if (n.immediate) {
      const t = `callback for immediate watcher "${r.expression}"`;
      vt(), Ke(e, o, [r.value], o, t), yt();
    }
    return function () {
      r.teardown();
    };
  };
}(xo), function (t) {
  const n = /^hook:/;
  t.prototype.$on = function (t, o) {
    const r = this;
    if (e(t)) for (let e = 0, n = t.length; e < n; e++) r.$on(t[e], o);else (r._events[t] || (r._events[t] = [])).push(o), n.test(t) && (r._hasHookEvent = !0);
    return r;
  }, t.prototype.$once = function (t, e) {
    const n = this;
    function o() {
      n.$off(t, o), e.apply(n, arguments);
    }
    return o.fn = e, n.$on(t, o), n;
  }, t.prototype.$off = function (t, n) {
    const o = this;
    if (!arguments.length) return o._events = Object.create(null), o;
    if (e(t)) {
      for (let e = 0, r = t.length; e < r; e++) o.$off(t[e], n);
      return o;
    }
    const r = o._events[t];
    if (!r) return o;
    if (!n) return o._events[t] = null, o;
    let s,
      i = r.length;
    for (; i--;) if (s = r[i], s === n || s.fn === n) {
      r.splice(i, 1);
      break;
    }
    return o;
  }, t.prototype.$emit = function (t) {
    const e = this;
    let n = e._events[t];
    if (n) {
      n = n.length > 1 ? S(n) : n;
      const o = S(arguments, 1),
        r = `event handler for "${t}"`;
      for (let t = 0, s = n.length; t < s; t++) Ke(n[t], e, o, e, r);
    }
    return e;
  };
}(xo), function (t) {
  t.prototype._update = function (t, e) {
    const n = this,
      o = n.$el,
      r = n._vnode,
      s = jn(n);
    n._vnode = t, n.$el = r ? n.__patch__(r, t) : n.__patch__(n.$el, t, e, !1), s(), o && (o.__vue__ = null), n.$el && (n.$el.__vue__ = n);
    let i = n;
    for (; i && i.$vnode && i.$parent && i.$vnode === i.$parent._vnode;) i.$parent.$el = i.$el, i = i.$parent;
  }, t.prototype.$forceUpdate = function () {
    const t = this;
    t._watcher && t._watcher.update();
  }, t.prototype.$destroy = function () {
    const t = this;
    if (t._isBeingDestroyed) return;
    Pn(t, "beforeDestroy"), t._isBeingDestroyed = !0;
    const e = t.$parent;
    !e || e._isBeingDestroyed || t.$options.abstract || v(e.$children, t), t._scope.stop(), t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Pn(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
  };
}(xo), function (t) {
  ke(t.prototype), t.prototype.$nextTick = function (t) {
    return tn(t, this);
  }, t.prototype._render = function () {
    const t = this,
      {
        render: n,
        _parentVnode: o
      } = t.$options;
    o && t._isMounted && (t.$scopedSlots = Te(t.$parent, o.data.scopedSlots, t.$slots, t.$scopedSlots), t._slotsProxy && Me(t._slotsProxy, t.$scopedSlots)), t.$vnode = o;
    const r = it,
      s = Re;
    let i;
    try {
      ct(t), Re = t, i = n.call(t._renderProxy, t.$createElement);
    } catch (e) {
      We(e, t, "render"), i = t._vnode;
    } finally {
      Re = s, ct(r);
    }
    return e(i) && 1 === i.length && (i = i[0]), i instanceof at || (i = lt()), i.parent = o, i;
  };
}(xo);
const To = [String, RegExp, Array];
var Eo = {
  KeepAlive: {
    name: "keep-alive",
    abstract: !0,
    props: {
      include: To,
      exclude: To,
      max: [String, Number]
    },
    methods: {
      cacheVNode() {
        const {
          cache: t,
          keys: e,
          vnodeToCache: n,
          keyToCache: o
        } = this;
        if (n) {
          const {
            tag: r,
            componentInstance: s,
            componentOptions: i
          } = n;
          t[o] = {
            name: ko(i),
            tag: r,
            componentInstance: s
          }, e.push(o), this.max && e.length > parseInt(this.max) && Ao(t, e[0], e, this._vnode), this.vnodeToCache = null;
        }
      }
    },
    created() {
      this.cache = Object.create(null), this.keys = [];
    },
    destroyed() {
      for (const t in this.cache) Ao(this.cache, t, this.keys);
    },
    mounted() {
      this.cacheVNode(), this.$watch("include", t => {
        jo(this, e => So(t, e));
      }), this.$watch("exclude", t => {
        jo(this, e => !So(t, e));
      });
    },
    updated() {
      this.cacheVNode();
    },
    render() {
      const t = this.$slots.default,
        e = Ue(t),
        n = e && e.componentOptions;
      if (n) {
        const t = ko(n),
          {
            include: o,
            exclude: r
          } = this;
        if (o && (!t || !So(o, t)) || r && t && So(r, t)) return e;
        const {
            cache: s,
            keys: i
          } = this,
          c = null == e.key ? n.Ctor.cid + (n.tag ? `::${n.tag}` : "") : e.key;
        s[c] ? (e.componentInstance = s[c].componentInstance, v(i, c), i.push(c)) : (this.vnodeToCache = e, this.keyToCache = c), e.data.keepAlive = !0;
      }
      return e || t && t[0];
    }
  }
};
!function (t) {
  const e = {
    get: () => U
  };
  Object.defineProperty(t, "config", e), t.util = {
    warn: Yn,
    extend: j,
    mergeOptions: io,
    defineReactive: jt
  }, t.set = At, t.delete = Tt, t.nextTick = tn, t.observable = t => (St(t), t), t.options = Object.create(null), R.forEach(e => {
    t.options[e + "s"] = Object.create(null);
  }), t.options._base = t, j(t.options.components, Eo), function (t) {
    t.use = function (t) {
      const e = this._installedPlugins || (this._installedPlugins = []);
      if (e.indexOf(t) > -1) return this;
      const n = S(arguments, 1);
      return n.unshift(this), i(t.install) ? t.install.apply(t, n) : i(t) && t.apply(null, n), e.push(t), this;
    };
  }(t), function (t) {
    t.mixin = function (t) {
      return this.options = io(this.options, t), this;
    };
  }(t), Oo(t), function (t) {
    R.forEach(e => {
      t[e] = function (t, n) {
        return n ? ("component" === e && l(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && i(n) && (n = {
          bind: n,
          update: n
        }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
      };
    });
  }(t);
}(xo), Object.defineProperty(xo.prototype, "$isServer", {
  get: et
}), Object.defineProperty(xo.prototype, "$ssrContext", {
  get() {
    return this.$vnode && this.$vnode.ssrContext;
  }
}), Object.defineProperty(xo, "FunctionalRenderContext", {
  value: Wn
}), xo.version = mn;
const Po = m("style,class"),
  Io = m("input,textarea,option,select,progress"),
  Do = m("contenteditable,draggable,spellcheck"),
  No = m("events,caret,typing,plaintext-only"),
  Mo = (t, e) => Bo(e) || "false" === e ? "false" : "contenteditable" === t && No(e) ? e : "true",
  Lo = m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),
  Ro = "http://www.w3.org/1999/xlink",
  Fo = t => ":" === t.charAt(5) && "xlink" === t.slice(0, 5),
  Uo = t => Fo(t) ? t.slice(6, t.length) : "",
  Bo = t => null == t || !1 === t;
function Vo(t) {
  let e = t.data,
    n = t,
    r = t;
  for (; o(r.componentInstance);) r = r.componentInstance._vnode, r && r.data && (e = zo(r.data, e));
  for (; o(n = n.parent);) n && n.data && (e = zo(e, n.data));
  return function (t, e) {
    if (o(t) || o(e)) return Ho(t, Wo(e));
    return "";
  }(e.staticClass, e.class);
}
function zo(t, e) {
  return {
    staticClass: Ho(t.staticClass, e.staticClass),
    class: o(t.class) ? [t.class, e.class] : e.class
  };
}
function Ho(t, e) {
  return t ? e ? t + " " + e : t : e || "";
}
function Wo(t) {
  return Array.isArray(t) ? function (t) {
    let e,
      n = "";
    for (let r = 0, s = t.length; r < s; r++) o(e = Wo(t[r])) && "" !== e && (n && (n += " "), n += e);
    return n;
  }(t) : c(t) ? function (t) {
    let e = "";
    for (const n in t) t[n] && (e && (e += " "), e += n);
    return e;
  }(t) : "string" == typeof t ? t : "";
}
const Ko = {
    svg: "http://www.w3.org/2000/svg",
    math: "http://www.w3.org/1998/Math/MathML"
  },
  qo = m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
  Go = m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
  Zo = t => qo(t) || Go(t);
const Jo = Object.create(null);
const Xo = m("text,number,password,search,email,tel,url");
var Qo = Object.freeze({
    __proto__: null,
    createElement: function (t, e) {
      const n = document.createElement(t);
      return "select" !== t || e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n;
    },
    createElementNS: function (t, e) {
      return document.createElementNS(Ko[t], e);
    },
    createTextNode: function (t) {
      return document.createTextNode(t);
    },
    createComment: function (t) {
      return document.createComment(t);
    },
    insertBefore: function (t, e, n) {
      t.insertBefore(e, n);
    },
    removeChild: function (t, e) {
      t.removeChild(e);
    },
    appendChild: function (t, e) {
      t.appendChild(e);
    },
    parentNode: function (t) {
      return t.parentNode;
    },
    nextSibling: function (t) {
      return t.nextSibling;
    },
    tagName: function (t) {
      return t.tagName;
    },
    setTextContent: function (t, e) {
      t.textContent = e;
    },
    setStyleScope: function (t, e) {
      t.setAttribute(e, "");
    }
  }),
  Yo = {
    create(t, e) {
      tr(e);
    },
    update(t, e) {
      t.data.ref !== e.data.ref && (tr(t, !0), tr(e));
    },
    destroy(t) {
      tr(t, !0);
    }
  };
function tr(t, n) {
  const r = t.data.ref;
  if (!o(r)) return;
  const s = t.context,
    c = t.componentInstance || t.elm,
    a = n ? null : c,
    l = n ? void 0 : c;
  if (i(r)) return void Ke(r, s, [a], s, "template ref function");
  const u = t.data.refInFor,
    f = "string" == typeof r || "number" == typeof r,
    d = Rt(r),
    p = s.$refs;
  if (f || d) if (u) {
    const t = f ? p[r] : r.value;
    n ? e(t) && v(t, c) : e(t) ? t.includes(c) || t.push(c) : f ? (p[r] = [c], er(s, r, p[r])) : r.value = [c];
  } else if (f) {
    if (n && p[r] !== c) return;
    p[r] = l, er(s, r, a);
  } else if (d) {
    if (n && r.value !== c) return;
    r.value = a;
  }
}
function er({
  _setupState: t
}, e, n) {
  t && g(t, e) && (Rt(t[e]) ? t[e].value = n : t[e] = n);
}
const nr = new at("", {}, []),
  or = ["create", "activate", "update", "remove", "destroy"];
function rr(t, e) {
  return t.key === e.key && t.asyncFactory === e.asyncFactory && (t.tag === e.tag && t.isComment === e.isComment && o(t.data) === o(e.data) && function (t, e) {
    if ("input" !== t.tag) return !0;
    let n;
    const r = o(n = t.data) && o(n = n.attrs) && n.type,
      s = o(n = e.data) && o(n = n.attrs) && n.type;
    return r === s || Xo(r) && Xo(s);
  }(t, e) || r(t.isAsyncPlaceholder) && n(e.asyncFactory.error));
}
function sr(t, e, n) {
  let r, s;
  const i = {};
  for (r = e; r <= n; ++r) s = t[r].key, o(s) && (i[s] = r);
  return i;
}
var ir = {
  create: cr,
  update: cr,
  destroy: function (t) {
    cr(t, nr);
  }
};
function cr(t, e) {
  (t.data.directives || e.data.directives) && function (t, e) {
    const n = t === nr,
      o = e === nr,
      r = lr(t.data.directives, t.context),
      s = lr(e.data.directives, e.context),
      i = [],
      c = [];
    let a, l, u;
    for (a in s) l = r[a], u = s[a], l ? (u.oldValue = l.value, u.oldArg = l.arg, fr(u, "update", e, t), u.def && u.def.componentUpdated && c.push(u)) : (fr(u, "bind", e, t), u.def && u.def.inserted && i.push(u));
    if (i.length) {
      const o = () => {
        for (let n = 0; n < i.length; n++) fr(i[n], "inserted", e, t);
      };
      n ? ce(e, "insert", o) : o();
    }
    c.length && ce(e, "postpatch", () => {
      for (let n = 0; n < c.length; n++) fr(c[n], "componentUpdated", e, t);
    });
    if (!n) for (a in r) s[a] || fr(r[a], "unbind", t, t, o);
  }(t, e);
}
const ar = Object.create(null);
function lr(t, e) {
  const n = Object.create(null);
  if (!t) return n;
  let o, r;
  for (o = 0; o < t.length; o++) {
    if (r = t[o], r.modifiers || (r.modifiers = ar), n[ur(r)] = r, e._setupState && e._setupState.__sfc) {
      const t = r.def || co(e, "_setupState", "v-" + r.name);
      r.def = "function" == typeof t ? {
        bind: t,
        update: t
      } : t;
    }
    r.def = r.def || co(e.$options, "directives", r.name);
  }
  return n;
}
function ur(t) {
  return t.rawName || `${t.name}.${Object.keys(t.modifiers || {}).join(".")}`;
}
function fr(t, e, n, o, r) {
  const s = t.def && t.def[e];
  if (s) try {
    s(n.elm, t, n, o, r);
  } catch (o) {
    We(o, n.context, `directive ${t.name} ${e} hook`);
  }
}
var dr = [Yo, ir];
function pr(t, e) {
  const s = e.componentOptions;
  if (o(s) && !1 === s.Ctor.options.inheritAttrs) return;
  if (n(t.data.attrs) && n(e.data.attrs)) return;
  let i, c, a;
  const l = e.elm,
    u = t.data.attrs || {};
  let f = e.data.attrs || {};
  for (i in (o(f.__ob__) || r(f._v_attr_proxy)) && (f = e.data.attrs = j({}, f)), f) c = f[i], a = u[i], a !== c && hr(l, i, c, e.data.pre);
  for (i in (q || Z) && f.value !== u.value && hr(l, "value", f.value), u) n(f[i]) && (Fo(i) ? l.removeAttributeNS(Ro, Uo(i)) : Do(i) || l.removeAttribute(i));
}
function hr(t, e, n, o) {
  o || t.tagName.indexOf("-") > -1 ? mr(t, e, n) : Lo(e) ? Bo(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n)) : Do(e) ? t.setAttribute(e, Mo(e, n)) : Fo(e) ? Bo(n) ? t.removeAttributeNS(Ro, Uo(e)) : t.setAttributeNS(Ro, e, n) : mr(t, e, n);
}
function mr(t, e, n) {
  if (Bo(n)) t.removeAttribute(e);else {
    if (q && !G && "TEXTAREA" === t.tagName && "placeholder" === e && "" !== n && !t.__ieph) {
      const e = n => {
        n.stopImmediatePropagation(), t.removeEventListener("input", e);
      };
      t.addEventListener("input", e), t.__ieph = !0;
    }
    t.setAttribute(e, n);
  }
}
var _r = {
  create: pr,
  update: pr
};
function vr(t, e) {
  const r = e.elm,
    s = e.data,
    i = t.data;
  if (n(s.staticClass) && n(s.class) && (n(i) || n(i.staticClass) && n(i.class))) return;
  let c = Vo(e);
  const a = r._transitionClasses;
  o(a) && (c = Ho(c, Wo(a))), c !== r._prevClass && (r.setAttribute("class", c), r._prevClass = c);
}
var yr = {
  create: vr,
  update: vr
};
const gr = "__r",
  br = "__c";
let $r;
function wr(t, e, n) {
  const o = $r;
  return function r() {
    null !== e.apply(null, arguments) && Or(t, r, n, o);
  };
}
const Cr = Ze && !(X && Number(X[1]) <= 53);
function xr(t, e, n, o) {
  if (Cr) {
    const t = Fn,
      n = e;
    e = n._wrapper = function (e) {
      if (e.target === e.currentTarget || e.timeStamp >= t || e.timeStamp <= 0 || e.target.ownerDocument !== document) return n.apply(this, arguments);
    };
  }
  $r.addEventListener(t, e, tt ? {
    capture: n,
    passive: o
  } : n);
}
function Or(t, e, n, o) {
  (o || $r).removeEventListener(t, e._wrapper || e, n);
}
function kr(t, e) {
  if (n(t.data.on) && n(e.data.on)) return;
  const r = e.data.on || {},
    s = t.data.on || {};
  $r = e.elm || t.elm, function (t) {
    if (o(t[gr])) {
      const e = q ? "change" : "input";
      t[e] = [].concat(t[gr], t[e] || []), delete t[gr];
    }
    o(t[br]) && (t.change = [].concat(t[br], t.change || []), delete t[br]);
  }(r), ie(r, s, xr, Or, wr, e.context), $r = void 0;
}
var Sr = {
  create: kr,
  update: kr,
  destroy: t => kr(t, nr)
};
let jr;
function Ar(t, e) {
  if (n(t.data.domProps) && n(e.data.domProps)) return;
  let s, i;
  const c = e.elm,
    a = t.data.domProps || {};
  let l = e.data.domProps || {};
  for (s in (o(l.__ob__) || r(l._v_attr_proxy)) && (l = e.data.domProps = j({}, l)), a) s in l || (c[s] = "");
  for (s in l) {
    if (i = l[s], "textContent" === s || "innerHTML" === s) {
      if (e.children && (e.children.length = 0), i === a[s]) continue;
      1 === c.childNodes.length && c.removeChild(c.childNodes[0]);
    }
    if ("value" === s && "PROGRESS" !== c.tagName) {
      c._value = i;
      const t = n(i) ? "" : String(i);
      Tr(c, t) && (c.value = t);
    } else if ("innerHTML" === s && Go(c.tagName) && n(c.innerHTML)) {
      jr = jr || document.createElement("div"), jr.innerHTML = `<svg>${i}</svg>`;
      const t = jr.firstChild;
      for (; c.firstChild;) c.removeChild(c.firstChild);
      for (; t.firstChild;) c.appendChild(t.firstChild);
    } else if (i !== a[s]) try {
      c[s] = i;
    } catch (t) {}
  }
}
function Tr(t, e) {
  return !t.composing && ("OPTION" === t.tagName || function (t, e) {
    let n = !0;
    try {
      n = document.activeElement !== t;
    } catch (t) {}
    return n && t.value !== e;
  }(t, e) || function (t, e) {
    const n = t.value,
      r = t._vModifiers;
    if (o(r)) {
      if (r.number) return h(n) !== h(e);
      if (r.trim) return n.trim() !== e.trim();
    }
    return n !== e;
  }(t, e));
}
var Er = {
  create: Ar,
  update: Ar
};
const Pr = b(function (t) {
  const e = {},
    n = /:(.+)/;
  return t.split(/;(?![^(]*\))/g).forEach(function (t) {
    if (t) {
      const o = t.split(n);
      o.length > 1 && (e[o[0].trim()] = o[1].trim());
    }
  }), e;
});
function Ir(t) {
  const e = Dr(t.style);
  return t.staticStyle ? j(t.staticStyle, e) : e;
}
function Dr(t) {
  return Array.isArray(t) ? A(t) : "string" == typeof t ? Pr(t) : t;
}
const Nr = /^--/,
  Mr = /\s*!important$/,
  Lr = (t, e, n) => {
    if (Nr.test(e)) t.style.setProperty(e, n);else if (Mr.test(n)) t.style.setProperty(O(e), n.replace(Mr, ""), "important");else {
      const o = Ur(e);
      if (Array.isArray(n)) for (let e = 0, r = n.length; e < r; e++) t.style[o] = n[e];else t.style[o] = n;
    }
  },
  Rr = ["Webkit", "Moz", "ms"];
let Fr;
const Ur = b(function (t) {
  if (Fr = Fr || document.createElement("div").style, "filter" !== (t = w(t)) && t in Fr) return t;
  const e = t.charAt(0).toUpperCase() + t.slice(1);
  for (let t = 0; t < Rr.length; t++) {
    const n = Rr[t] + e;
    if (n in Fr) return n;
  }
});
function Br(t, e) {
  const r = e.data,
    s = t.data;
  if (n(r.staticStyle) && n(r.style) && n(s.staticStyle) && n(s.style)) return;
  let i, c;
  const a = e.elm,
    l = s.staticStyle,
    u = s.normalizedStyle || s.style || {},
    f = l || u,
    d = Dr(e.data.style) || {};
  e.data.normalizedStyle = o(d.__ob__) ? j({}, d) : d;
  const p = function (t, e) {
    const n = {};
    let o;
    if (e) {
      let e = t;
      for (; e.componentInstance;) e = e.componentInstance._vnode, e && e.data && (o = Ir(e.data)) && j(n, o);
    }
    (o = Ir(t.data)) && j(n, o);
    let r = t;
    for (; r = r.parent;) r.data && (o = Ir(r.data)) && j(n, o);
    return n;
  }(e, !0);
  for (c in f) n(p[c]) && Lr(a, c, "");
  for (c in p) i = p[c], Lr(a, c, null == i ? "" : i);
}
var Vr = {
  create: Br,
  update: Br
};
const zr = /\s+/;
function Hr(t, e) {
  if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(zr).forEach(e => t.classList.add(e)) : t.classList.add(e);else {
    const n = ` ${t.getAttribute("class") || ""} `;
    n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
  }
}
function Wr(t, e) {
  if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(zr).forEach(e => t.classList.remove(e)) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");else {
    let n = ` ${t.getAttribute("class") || ""} `;
    const o = " " + e + " ";
    for (; n.indexOf(o) >= 0;) n = n.replace(o, " ");
    n = n.trim(), n ? t.setAttribute("class", n) : t.removeAttribute("class");
  }
}
function Kr(t) {
  if (t) {
    if ("object" == typeof t) {
      const e = {};
      return !1 !== t.css && j(e, qr(t.name || "v")), j(e, t), e;
    }
    return "string" == typeof t ? qr(t) : void 0;
  }
}
const qr = b(t => ({
    enterClass: `${t}-enter`,
    enterToClass: `${t}-enter-to`,
    enterActiveClass: `${t}-enter-active`,
    leaveClass: `${t}-leave`,
    leaveToClass: `${t}-leave-to`,
    leaveActiveClass: `${t}-leave-active`
  })),
  Gr = W && !G,
  Zr = "transition",
  Jr = "animation";
let Xr = "transition",
  Qr = "transitionend",
  Yr = "animation",
  ts = "animationend";
Gr && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Xr = "WebkitTransition", Qr = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Yr = "WebkitAnimation", ts = "webkitAnimationEnd"));
const es = W ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : t => t();
function ns(t) {
  es(() => {
    es(t);
  });
}
function os(t, e) {
  const n = t._transitionClasses || (t._transitionClasses = []);
  n.indexOf(e) < 0 && (n.push(e), Hr(t, e));
}
function rs(t, e) {
  t._transitionClasses && v(t._transitionClasses, e), Wr(t, e);
}
function ss(t, e, n) {
  const {
    type: o,
    timeout: r,
    propCount: s
  } = cs(t, e);
  if (!o) return n();
  const i = o === Zr ? Qr : ts;
  let c = 0;
  const a = () => {
      t.removeEventListener(i, l), n();
    },
    l = e => {
      e.target === t && ++c >= s && a();
    };
  setTimeout(() => {
    c < s && a();
  }, r + 1), t.addEventListener(i, l);
}
const is = /\b(transform|all)(,|$)/;
function cs(t, e) {
  const n = window.getComputedStyle(t),
    o = (n[Xr + "Delay"] || "").split(", "),
    r = (n[Xr + "Duration"] || "").split(", "),
    s = as(o, r),
    i = (n[Yr + "Delay"] || "").split(", "),
    c = (n[Yr + "Duration"] || "").split(", "),
    a = as(i, c);
  let l,
    u = 0,
    f = 0;
  e === Zr ? s > 0 && (l = Zr, u = s, f = r.length) : e === Jr ? a > 0 && (l = Jr, u = a, f = c.length) : (u = Math.max(s, a), l = u > 0 ? s > a ? Zr : Jr : null, f = l ? l === Zr ? r.length : c.length : 0);
  return {
    type: l,
    timeout: u,
    propCount: f,
    hasTransform: l === Zr && is.test(n[Xr + "Property"])
  };
}
function as(t, e) {
  for (; t.length < e.length;) t = t.concat(t);
  return Math.max.apply(null, e.map((e, n) => ls(e) + ls(t[n])));
}
function ls(t) {
  return 1e3 * Number(t.slice(0, -1).replace(",", "."));
}
function us(t, e) {
  const r = t.elm;
  o(r._leaveCb) && (r._leaveCb.cancelled = !0, r._leaveCb());
  const s = Kr(t.data.transition);
  if (n(s)) return;
  if (o(r._enterCb) || 1 !== r.nodeType) return;
  const {
    css: a,
    type: l,
    enterClass: u,
    enterToClass: f,
    enterActiveClass: d,
    appearClass: p,
    appearToClass: m,
    appearActiveClass: _,
    beforeEnter: v,
    enter: y,
    afterEnter: g,
    enterCancelled: b,
    beforeAppear: $,
    appear: w,
    afterAppear: C,
    appearCancelled: x,
    duration: O
  } = s;
  let k = Sn,
    S = Sn.$vnode;
  for (; S && S.parent;) k = S.context, S = S.parent;
  const j = !k._isMounted || !t.isRootInsert;
  if (j && !w && "" !== w) return;
  const A = j && p ? p : u,
    T = j && _ ? _ : d,
    E = j && m ? m : f,
    P = j && $ || v,
    I = j && i(w) ? w : y,
    D = j && C || g,
    M = j && x || b,
    L = h(c(O) ? O.enter : O),
    R = !1 !== a && !G,
    F = ps(I),
    U = r._enterCb = N(() => {
      R && (rs(r, E), rs(r, T)), U.cancelled ? (R && rs(r, A), M && M(r)) : D && D(r), r._enterCb = null;
    });
  t.data.show || ce(t, "insert", () => {
    const e = r.parentNode,
      n = e && e._pending && e._pending[t.key];
    n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(), I && I(r, U);
  }), P && P(r), R && (os(r, A), os(r, T), ns(() => {
    rs(r, A), U.cancelled || (os(r, E), F || (ds(L) ? setTimeout(U, L) : ss(r, l, U)));
  })), t.data.show && (e && e(), I && I(r, U)), R || F || U();
}
function fs(t, e) {
  const r = t.elm;
  o(r._enterCb) && (r._enterCb.cancelled = !0, r._enterCb());
  const s = Kr(t.data.transition);
  if (n(s) || 1 !== r.nodeType) return e();
  if (o(r._leaveCb)) return;
  const {
      css: i,
      type: a,
      leaveClass: l,
      leaveToClass: u,
      leaveActiveClass: f,
      beforeLeave: d,
      leave: p,
      afterLeave: m,
      leaveCancelled: _,
      delayLeave: v,
      duration: y
    } = s,
    g = !1 !== i && !G,
    b = ps(p),
    $ = h(c(y) ? y.leave : y),
    w = r._leaveCb = N(() => {
      r.parentNode && r.parentNode._pending && (r.parentNode._pending[t.key] = null), g && (rs(r, u), rs(r, f)), w.cancelled ? (g && rs(r, l), _ && _(r)) : (e(), m && m(r)), r._leaveCb = null;
    });
  function C() {
    w.cancelled || (!t.data.show && r.parentNode && ((r.parentNode._pending || (r.parentNode._pending = {}))[t.key] = t), d && d(r), g && (os(r, l), os(r, f), ns(() => {
      rs(r, l), w.cancelled || (os(r, u), b || (ds($) ? setTimeout(w, $) : ss(r, a, w)));
    })), p && p(r, w), g || b || w());
  }
  v ? v(C) : C();
}
function ds(t) {
  return "number" == typeof t && !isNaN(t);
}
function ps(t) {
  if (n(t)) return !1;
  const e = t.fns;
  return o(e) ? ps(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
}
function hs(t, e) {
  !0 !== e.data.show && us(e);
}
const ms = function (t) {
  let i, c;
  const a = {},
    {
      modules: l,
      nodeOps: u
    } = t;
  for (i = 0; i < or.length; ++i) for (a[or[i]] = [], c = 0; c < l.length; ++c) o(l[c][or[i]]) && a[or[i]].push(l[c][or[i]]);
  function f(t) {
    const e = u.parentNode(t);
    o(e) && u.removeChild(e, t);
  }
  function d(t, e, n, s, i, c, l) {
    if (o(t.elm) && o(c) && (t = c[l] = ft(t)), t.isRootInsert = !i, function (t, e, n, s) {
      let i = t.data;
      if (o(i)) {
        const c = o(t.componentInstance) && i.keepAlive;
        if (o(i = i.hook) && o(i = i.init) && i(t, !1), o(t.componentInstance)) return p(t, e), h(n, t.elm, s), r(c) && function (t, e, n, r) {
          let s,
            i = t;
          for (; i.componentInstance;) if (i = i.componentInstance._vnode, o(s = i.data) && o(s = s.transition)) {
            for (s = 0; s < a.activate.length; ++s) a.activate[s](nr, i);
            e.push(i);
            break;
          }
          h(n, t.elm, r);
        }(t, e, n, s), !0;
      }
    }(t, e, n, s)) return;
    const f = t.data,
      d = t.children,
      m = t.tag;
    o(m) ? (t.elm = t.ns ? u.createElementNS(t.ns, m) : u.createElement(m, t), g(t), _(t, d, e), o(f) && y(t, e), h(n, t.elm, s)) : r(t.isComment) ? (t.elm = u.createComment(t.text), h(n, t.elm, s)) : (t.elm = u.createTextNode(t.text), h(n, t.elm, s));
  }
  function p(t, e) {
    o(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, v(t) ? (y(t, e), g(t)) : (tr(t), e.push(t));
  }
  function h(t, e, n) {
    o(t) && (o(n) ? u.parentNode(n) === t && u.insertBefore(t, e, n) : u.appendChild(t, e));
  }
  function _(t, n, o) {
    if (e(n)) for (let e = 0; e < n.length; ++e) d(n[e], o, t.elm, null, !0, n, e);else s(t.text) && u.appendChild(t.elm, u.createTextNode(String(t.text)));
  }
  function v(t) {
    for (; t.componentInstance;) t = t.componentInstance._vnode;
    return o(t.tag);
  }
  function y(t, e) {
    for (let e = 0; e < a.create.length; ++e) a.create[e](nr, t);
    i = t.data.hook, o(i) && (o(i.create) && i.create(nr, t), o(i.insert) && e.push(t));
  }
  function g(t) {
    let e;
    if (o(e = t.fnScopeId)) u.setStyleScope(t.elm, e);else {
      let n = t;
      for (; n;) o(e = n.context) && o(e = e.$options._scopeId) && u.setStyleScope(t.elm, e), n = n.parent;
    }
    o(e = Sn) && e !== t.context && e !== t.fnContext && o(e = e.$options._scopeId) && u.setStyleScope(t.elm, e);
  }
  function b(t, e, n, o, r, s) {
    for (; o <= r; ++o) d(n[o], s, t, e, !1, n, o);
  }
  function $(t) {
    let e, n;
    const r = t.data;
    if (o(r)) for (o(e = r.hook) && o(e = e.destroy) && e(t), e = 0; e < a.destroy.length; ++e) a.destroy[e](t);
    if (o(e = t.children)) for (n = 0; n < t.children.length; ++n) $(t.children[n]);
  }
  function w(t, e, n) {
    for (; e <= n; ++e) {
      const n = t[e];
      o(n) && (o(n.tag) ? (C(n), $(n)) : f(n.elm));
    }
  }
  function C(t, e) {
    if (o(e) || o(t.data)) {
      let n;
      const r = a.remove.length + 1;
      for (o(e) ? e.listeners += r : e = function (t, e) {
        function n() {
          0 == --n.listeners && f(t);
        }
        return n.listeners = e, n;
      }(t.elm, r), o(n = t.componentInstance) && o(n = n._vnode) && o(n.data) && C(n, e), n = 0; n < a.remove.length; ++n) a.remove[n](t, e);
      o(n = t.data.hook) && o(n = n.remove) ? n(t, e) : e();
    } else f(t.elm);
  }
  function x(t, e, n, r) {
    for (let s = n; s < r; s++) {
      const n = e[s];
      if (o(n) && rr(t, n)) return s;
    }
  }
  function O(t, e, s, i, c, l) {
    if (t === e) return;
    o(e.elm) && o(i) && (e = i[c] = ft(e));
    const f = e.elm = t.elm;
    if (r(t.isAsyncPlaceholder)) return void (o(e.asyncFactory.resolved) ? j(t.elm, e, s) : e.isAsyncPlaceholder = !0);
    if (r(e.isStatic) && r(t.isStatic) && e.key === t.key && (r(e.isCloned) || r(e.isOnce))) return void (e.componentInstance = t.componentInstance);
    let p;
    const h = e.data;
    o(h) && o(p = h.hook) && o(p = p.prepatch) && p(t, e);
    const m = t.children,
      _ = e.children;
    if (o(h) && v(e)) {
      for (p = 0; p < a.update.length; ++p) a.update[p](t, e);
      o(p = h.hook) && o(p = p.update) && p(t, e);
    }
    n(e.text) ? o(m) && o(_) ? m !== _ && function (t, e, r, s, i) {
      let c,
        a,
        l,
        f,
        p = 0,
        h = 0,
        m = e.length - 1,
        _ = e[0],
        v = e[m],
        y = r.length - 1,
        g = r[0],
        $ = r[y];
      const C = !i;
      for (; p <= m && h <= y;) n(_) ? _ = e[++p] : n(v) ? v = e[--m] : rr(_, g) ? (O(_, g, s, r, h), _ = e[++p], g = r[++h]) : rr(v, $) ? (O(v, $, s, r, y), v = e[--m], $ = r[--y]) : rr(_, $) ? (O(_, $, s, r, y), C && u.insertBefore(t, _.elm, u.nextSibling(v.elm)), _ = e[++p], $ = r[--y]) : rr(v, g) ? (O(v, g, s, r, h), C && u.insertBefore(t, v.elm, _.elm), v = e[--m], g = r[++h]) : (n(c) && (c = sr(e, p, m)), a = o(g.key) ? c[g.key] : x(g, e, p, m), n(a) ? d(g, s, t, _.elm, !1, r, h) : (l = e[a], rr(l, g) ? (O(l, g, s, r, h), e[a] = void 0, C && u.insertBefore(t, l.elm, _.elm)) : d(g, s, t, _.elm, !1, r, h)), g = r[++h]);
      p > m ? (f = n(r[y + 1]) ? null : r[y + 1].elm, b(t, f, r, h, y, s)) : h > y && w(e, p, m);
    }(f, m, _, s, l) : o(_) ? (o(t.text) && u.setTextContent(f, ""), b(f, null, _, 0, _.length - 1, s)) : o(m) ? w(m, 0, m.length - 1) : o(t.text) && u.setTextContent(f, "") : t.text !== e.text && u.setTextContent(f, e.text), o(h) && o(p = h.hook) && o(p = p.postpatch) && p(t, e);
  }
  function k(t, e, n) {
    if (r(n) && o(t.parent)) t.parent.data.pendingInsert = e;else for (let t = 0; t < e.length; ++t) e[t].data.hook.insert(e[t]);
  }
  const S = m("attrs,class,staticClass,staticStyle,key");
  function j(t, e, n, s) {
    let i;
    const {
      tag: c,
      data: a,
      children: l
    } = e;
    if (s = s || a && a.pre, e.elm = t, r(e.isComment) && o(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
    if (o(a) && (o(i = a.hook) && o(i = i.init) && i(e, !0), o(i = e.componentInstance))) return p(e, n), !0;
    if (o(c)) {
      if (o(l)) if (t.hasChildNodes()) {
        if (o(i = a) && o(i = i.domProps) && o(i = i.innerHTML)) {
          if (i !== t.innerHTML) return !1;
        } else {
          let e = !0,
            o = t.firstChild;
          for (let t = 0; t < l.length; t++) {
            if (!o || !j(o, l[t], n, s)) {
              e = !1;
              break;
            }
            o = o.nextSibling;
          }
          if (!e || o) return !1;
        }
      } else _(e, l, n);
      if (o(a)) {
        let t = !1;
        for (const o in a) if (!S(o)) {
          t = !0, y(e, n);
          break;
        }
        !t && a.class && yn(a.class);
      }
    } else t.data !== e.text && (t.data = e.text);
    return !0;
  }
  return function (t, e, s, i) {
    if (n(e)) return void (o(t) && $(t));
    let c = !1;
    const l = [];
    if (n(t)) c = !0, d(e, l);else {
      const n = o(t.nodeType);
      if (!n && rr(t, e)) O(t, e, l, null, null, i);else {
        if (n) {
          if (1 === t.nodeType && t.hasAttribute(L) && (t.removeAttribute(L), s = !0), r(s) && j(t, e, l)) return k(e, l, !0), t;
          f = t, t = new at(u.tagName(f).toLowerCase(), {}, [], void 0, f);
        }
        const i = t.elm,
          c = u.parentNode(i);
        if (d(e, l, i._leaveCb ? null : c, u.nextSibling(i)), o(e.parent)) {
          let t = e.parent;
          const n = v(e);
          for (; t;) {
            for (let e = 0; e < a.destroy.length; ++e) a.destroy[e](t);
            if (t.elm = e.elm, n) {
              for (let e = 0; e < a.create.length; ++e) a.create[e](nr, t);
              const e = t.data.hook.insert;
              if (e.merged) {
                const t = e.fns.slice(1);
                for (let e = 0; e < t.length; e++) t[e]();
              }
            } else tr(t);
            t = t.parent;
          }
        }
        o(c) ? w([t], 0, 0) : o(t.tag) && $(t);
      }
    }
    var f;
    return k(e, l, c), e.elm;
  };
}({
  nodeOps: Qo,
  modules: [_r, yr, Sr, Er, Vr, W ? {
    create: hs,
    activate: hs,
    remove(t, e) {
      !0 !== t.data.show ? fs(t, e) : e();
    }
  } : {}].concat(dr)
});
G && document.addEventListener("selectionchange", () => {
  const t = document.activeElement;
  t && t.vmodel && Cs(t, "input");
});
const _s = {
  inserted(t, e, n, o) {
    "select" === n.tag ? (o.elm && !o.elm._vOptions ? ce(n, "postpatch", () => {
      _s.componentUpdated(t, e, n);
    }) : vs(t, e, n.context), t._vOptions = [].map.call(t.options, bs)) : ("textarea" === n.tag || Xo(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", $s), t.addEventListener("compositionend", ws), t.addEventListener("change", ws), G && (t.vmodel = !0)));
  },
  componentUpdated(t, e, n) {
    if ("select" === n.tag) {
      vs(t, e, n.context);
      const o = t._vOptions,
        r = t._vOptions = [].map.call(t.options, bs);
      if (r.some((t, e) => !I(t, o[e]))) {
        (t.multiple ? e.value.some(t => gs(t, r)) : e.value !== e.oldValue && gs(e.value, r)) && Cs(t, "change");
      }
    }
  }
};
function vs(t, e, n) {
  ys(t, e), (q || Z) && setTimeout(() => {
    ys(t, e);
  }, 0);
}
function ys(t, e, n) {
  const o = e.value,
    r = t.multiple;
  if (r && !Array.isArray(o)) return;
  let s, i;
  for (let e = 0, n = t.options.length; e < n; e++) if (i = t.options[e], r) s = D(o, bs(i)) > -1, i.selected !== s && (i.selected = s);else if (I(bs(i), o)) return void (t.selectedIndex !== e && (t.selectedIndex = e));
  r || (t.selectedIndex = -1);
}
function gs(t, e) {
  return e.every(e => !I(e, t));
}
function bs(t) {
  return "_value" in t ? t._value : t.value;
}
function $s(t) {
  t.target.composing = !0;
}
function ws(t) {
  t.target.composing && (t.target.composing = !1, Cs(t.target, "input"));
}
function Cs(t, e) {
  const n = document.createEvent("HTMLEvents");
  n.initEvent(e, !0, !0), t.dispatchEvent(n);
}
function xs(t) {
  return !t.componentInstance || t.data && t.data.transition ? t : xs(t.componentInstance._vnode);
}
var Os = {
    bind(t, {
      value: e
    }, n) {
      const o = (n = xs(n)).data && n.data.transition,
        r = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
      e && o ? (n.data.show = !0, us(n, () => {
        t.style.display = r;
      })) : t.style.display = e ? r : "none";
    },
    update(t, {
      value: e,
      oldValue: n
    }, o) {
      if (!e == !n) return;
      (o = xs(o)).data && o.data.transition ? (o.data.show = !0, e ? us(o, () => {
        t.style.display = t.__vOriginalDisplay;
      }) : fs(o, () => {
        t.style.display = "none";
      })) : t.style.display = e ? t.__vOriginalDisplay : "none";
    },
    unbind(t, e, n, o, r) {
      r || (t.style.display = t.__vOriginalDisplay);
    }
  },
  ks = {
    model: _s,
    show: Os
  };
const Ss = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};
function js(t) {
  const e = t && t.componentOptions;
  return e && e.Ctor.options.abstract ? js(Ue(e.children)) : t;
}
function As(t) {
  const e = {},
    n = t.$options;
  for (const o in n.propsData) e[o] = t[o];
  const o = n._parentListeners;
  for (const t in o) e[w(t)] = o[t];
  return e;
}
function Ts(t, e) {
  if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
    props: e.componentOptions.propsData
  });
}
const Es = t => t.tag || Ae(t),
  Ps = t => "show" === t.name;
var Is = {
  name: "transition",
  props: Ss,
  abstract: !0,
  render(t) {
    let e = this.$slots.default;
    if (!e) return;
    if (e = e.filter(Es), !e.length) return;
    const n = this.mode,
      o = e[0];
    if (function (t) {
      for (; t = t.parent;) if (t.data.transition) return !0;
    }(this.$vnode)) return o;
    const r = js(o);
    if (!r) return o;
    if (this._leaving) return Ts(t, o);
    const i = `__transition-${this._uid}-`;
    r.key = null == r.key ? r.isComment ? i + "comment" : i + r.tag : s(r.key) ? 0 === String(r.key).indexOf(i) ? r.key : i + r.key : r.key;
    const c = (r.data || (r.data = {})).transition = As(this),
      a = this._vnode,
      l = js(a);
    if (r.data.directives && r.data.directives.some(Ps) && (r.data.show = !0), l && l.data && !function (t, e) {
      return e.key === t.key && e.tag === t.tag;
    }(r, l) && !Ae(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
      const e = l.data.transition = j({}, c);
      if ("out-in" === n) return this._leaving = !0, ce(e, "afterLeave", () => {
        this._leaving = !1, this.$forceUpdate();
      }), Ts(t, o);
      if ("in-out" === n) {
        if (Ae(r)) return a;
        let t;
        const n = () => {
          t();
        };
        ce(c, "afterEnter", n), ce(c, "enterCancelled", n), ce(e, "delayLeave", e => {
          t = e;
        });
      }
    }
    return o;
  }
};
const Ds = j({
  tag: String,
  moveClass: String
}, Ss);
delete Ds.mode;
var Ns = {
  props: Ds,
  beforeMount() {
    const t = this._update;
    this._update = (e, n) => {
      const o = jn(this);
      this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept, o(), t.call(this, e, n);
    };
  },
  render(t) {
    const e = this.tag || this.$vnode.data.tag || "span",
      n = Object.create(null),
      o = this.prevChildren = this.children,
      r = this.$slots.default || [],
      s = this.children = [],
      i = As(this);
    for (let t = 0; t < r.length; t++) {
      const e = r[t];
      e.tag && null != e.key && 0 !== String(e.key).indexOf("__vlist") && (s.push(e), n[e.key] = e, (e.data || (e.data = {})).transition = i);
    }
    if (o) {
      const r = [],
        s = [];
      for (let t = 0; t < o.length; t++) {
        const e = o[t];
        e.data.transition = i, e.data.pos = e.elm.getBoundingClientRect(), n[e.key] ? r.push(e) : s.push(e);
      }
      this.kept = t(e, null, r), this.removed = s;
    }
    return t(e, null, s);
  },
  updated() {
    const t = this.prevChildren,
      e = this.moveClass || (this.name || "v") + "-move";
    t.length && this.hasMove(t[0].elm, e) && (t.forEach(Ms), t.forEach(Ls), t.forEach(Rs), this._reflow = document.body.offsetHeight, t.forEach(t => {
      if (t.data.moved) {
        const n = t.elm,
          o = n.style;
        os(n, e), o.transform = o.WebkitTransform = o.transitionDuration = "", n.addEventListener(Qr, n._moveCb = function t(o) {
          o && o.target !== n || o && !/transform$/.test(o.propertyName) || (n.removeEventListener(Qr, t), n._moveCb = null, rs(n, e));
        });
      }
    }));
  },
  methods: {
    hasMove(t, e) {
      if (!Gr) return !1;
      if (this._hasMove) return this._hasMove;
      const n = t.cloneNode();
      t._transitionClasses && t._transitionClasses.forEach(t => {
        Wr(n, t);
      }), Hr(n, e), n.style.display = "none", this.$el.appendChild(n);
      const o = cs(n);
      return this.$el.removeChild(n), this._hasMove = o.hasTransform;
    }
  }
};
function Ms(t) {
  t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
}
function Ls(t) {
  t.data.newPos = t.elm.getBoundingClientRect();
}
function Rs(t) {
  const e = t.data.pos,
    n = t.data.newPos,
    o = e.left - n.left,
    r = e.top - n.top;
  if (o || r) {
    t.data.moved = !0;
    const e = t.elm.style;
    e.transform = e.WebkitTransform = `translate(${o}px,${r}px)`, e.transitionDuration = "0s";
  }
}
var Fs = {
  Transition: Is,
  TransitionGroup: Ns
};
xo.config.mustUseProp = (t, e, n) => "value" === n && Io(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t, xo.config.isReservedTag = Zo, xo.config.isReservedAttr = Po, xo.config.getTagNamespace = function (t) {
  return Go(t) ? "svg" : "math" === t ? "math" : void 0;
}, xo.config.isUnknownElement = function (t) {
  if (!W) return !0;
  if (Zo(t)) return !1;
  if (t = t.toLowerCase(), null != Jo[t]) return Jo[t];
  const e = document.createElement(t);
  return t.indexOf("-") > -1 ? Jo[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Jo[t] = /HTMLUnknownElement/.test(e.toString());
}, j(xo.options.directives, ks), j(xo.options.components, Fs), xo.prototype.__patch__ = W ? ms : T, xo.prototype.$mount = function (t, e) {
  return function (t, e, n) {
    let o;
    t.$el = e, t.$options.render || (t.$options.render = lt), Pn(t, "beforeMount"), o = () => {
      t._update(t._render(), n);
    }, new wn(t, o, T, {
      before() {
        t._isMounted && !t._isDestroyed && Pn(t, "beforeUpdate");
      }
    }, !0), n = !1;
    const r = t._preWatchers;
    if (r) for (let t = 0; t < r.length; t++) r[t].run();
    return null == t.$vnode && (t._isMounted = !0, Pn(t, "mounted")), t;
  }(this, t = t && W ? function (t) {
    if ("string" == typeof t) {
      return document.querySelector(t) || document.createElement("div");
    }
    return t;
  }(t) : void 0, e);
}, W && setTimeout(() => {
  U.devtools && nt && nt.emit("init", xo);
}, 0), j(xo, _n), module.exports = xo;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.delete-all.js");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.every.js");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.filter.js");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find.js");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find-key.js");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.includes.js");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.key-of.js");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-keys.js");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-values.js");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.merge.js");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.reduce.js");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.some.js");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.update.js");

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.mjs
var vue_runtime = __webpack_require__(0);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: ./.nuxt/middleware.js
var _nuxt_middleware = __webpack_require__(8);

// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (vue_runtime["c" /* default */].config.errorHandler) {
    vue_runtime["c" /* default */].config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = vue_runtime["c" /* default */].extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }
        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    vue_runtime["c" /* default */].util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: ./node_modules/vue-meta/dist/vue-meta.common.js
var vue_meta_common = __webpack_require__(38);
var vue_meta_common_default = /*#__PURE__*/__webpack_require__.n(vue_meta_common);

// EXTERNAL MODULE: ./node_modules/vue-client-only/dist/vue-client-only.common.js
var vue_client_only_common = __webpack_require__(33);
var vue_client_only_common_default = /*#__PURE__*/__webpack_require__.n(vue_client_only_common);

// EXTERNAL MODULE: ./node_modules/vue-no-ssr/dist/vue-no-ssr.common.js
var vue_no_ssr_common = __webpack_require__(14);
var vue_no_ssr_common_default = /*#__PURE__*/__webpack_require__.n(vue_no_ssr_common);

// CONCATENATED MODULE: ./node_modules/vue-router/dist/vue-router.mjs
/*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */
/*  */

function assert(condition, message) {
  if (!condition) {
    throw new Error("[vue-router] " + message);
  }
}
function warn(condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
  }
}
function extend(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function decode(str) {
  try {
    return decodeURIComponent(str);
  } catch (err) {
    if (false) {}
  }
  return str;
}
function resolveQuery(query, extraQuery, _parseQuery) {
  if (extraQuery === void 0) extraQuery = {};
  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     false && false;
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var value = extraQuery[key];
    parsedQuery[key] = Array.isArray(value) ? value.map(castQueryParamValue) : castQueryParamValue(value);
  }
  return parsedQuery;
}
var castQueryParamValue = function (value) {
  return value == null || typeof value === 'object' ? value : String(value);
};
function parseQuery(query) {
  var res = {};
  query = query.trim().replace(/^(\?|#|&)/, '');
  if (!query) {
    return res;
  }
  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;
    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });
  return res;
}
function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encode(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&');
    }
    return encode(key) + '=' + encode(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?" + res : '';
}

/*  */

var trailingSlashRE = /\/?$/;
function createRoute(record, location, redirectedFrom, router) {
  var stringifyQuery = router && router.options.stringifyQuery;
  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}
  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route);
}
function clone(value) {
  if (Array.isArray(value)) {
    return value.map(clone);
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res;
  } else {
    return value;
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});
function formatMatch(record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res;
}
function getFullPath(ref, _stringifyQuery) {
  var path = ref.path;
  var query = ref.query;
  if (query === void 0) query = {};
  var hash = ref.hash;
  if (hash === void 0) hash = '';
  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash;
}
function isSameRoute(a, b, onlyPath) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query));
  } else if (a.name && b.name) {
    return a.name === b.name && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params));
  } else {
    return false;
  }
}
function isObjectEqual(a, b) {
  if (a === void 0) a = {};
  if (b === void 0) b = {};

  // handle null value #1566
  if (!a || !b) {
    return a === b;
  }
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every(function (key, i) {
    var aVal = a[key];
    var bKey = bKeys[i];
    if (bKey !== key) {
      return false;
    }
    var bVal = b[key];
    // query values can be null and undefined
    if (aVal == null || bVal == null) {
      return aVal === bVal;
    }
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal);
    }
    return String(aVal) === String(bVal);
  });
}
function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}
function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }
  return true;
}
function handleRouteEntered(route) {
  for (var i = 0; i < route.matched.length; i++) {
    var record = route.matched[i];
    for (var name in record.instances) {
      var instance = record.instances[name];
      var cbs = record.enteredCbs[name];
      if (!instance || !cbs) {
        continue;
      }
      delete record.enteredCbs[name];
      for (var i$1 = 0; i$1 < cbs.length; i$1++) {
        if (!instance._isBeingDestroyed) {
          cbs[i$1](instance);
        }
      }
    }
  }
}
var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render(_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children);
      } else {
        // render previous empty view
        return h();
      }
    }
    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h();
    }

    // cache component
    cache[name] = {
      component: component
    };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (val && current !== vm || !val && current === vm) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;
    (data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive && vnode.componentInstance && vnode.componentInstance !== matched.instances[name]) {
        matched.instances[name] = vnode.componentInstance;
      }

      // if the route transition has already been confirmed then we weren't
      // able to call the cbs during confirmation as the component was not
      // registered yet, so we call it here.
      handleRouteEntered(route);
    };
    var configProps = matched.props && matched.props[name];
    // save route and configProps in cache
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }
    return h(component, data, children);
  }
};
function fillPropsinData(component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}
function resolveProps(route, config) {
  switch (typeof config) {
    case 'undefined':
      return;
    case 'object':
      return config;
    case 'function':
      return config(route);
    case 'boolean':
      return config ? route.params : undefined;
    default:
      if (false) {}
  }
}

/*  */

function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative;
  }
  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }
  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }
  return stack.join('/');
}
function parsePath(path) {
  var hash = '';
  var query = '';
  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }
  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }
  return {
    path: path,
    query: query,
    hash: hash
  };
}
function cleanPath(path) {
  return path.replace(/\/(?:\s*\/)+/g, '/');
}
var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = vue_router_parse;
var compile_1 = vue_router_compile;
var tokensToFunction_1 = vue_router_tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var vue_router_PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function vue_router_parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;
  while ((res = vue_router_PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? vue_router_escapeGroup(pattern) : asterisk ? '.*' : '[^' + vue_router_escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function vue_router_compile(str, options) {
  return vue_router_tokensToFunction(vue_router_parse(str, options), options);
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function vue_router_encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function vue_router_encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function vue_router_tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', vue_router_flags(options));
    }
  }
  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? vue_router_encodeURIComponentPretty : encodeURIComponent;
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      var value = data[token.name];
      var segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? vue_router_encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function vue_router_escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function vue_router_escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function vue_router_flags(options) {
  return options && options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }
  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];
  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }
  var regexp = new RegExp('(?:' + parts.join('|') + ')', vue_router_flags(options));
  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(vue_router_parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }
  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (typeof token === 'string') {
      route += vue_router_escapeString(token);
    } else {
      var prefix = vue_router_escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';
      keys.push(token);
      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }
      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }
      route += capture;
    }
  }
  var delimiter = vue_router_escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }
  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }
  return attachKeys(new RegExp('^' + route, vue_router_flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }
  options = options || {};
  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }
  if (isarray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }
  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);
function fillParams(path, params, routeMsg) {
  params = params || {};
  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') {
      params[0] = params.pathMatch;
    }
    return filler(params, {
      pretty: true
    });
  } catch (e) {
    if (false) {}
    return '';
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation(raw, current, append, router) {
  var next = typeof raw === 'string' ? {
    path: raw
  } : raw;
  // named target
  if (next._normalized) {
    return next;
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next;
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, "path " + current.path);
    } else if (false) {}
    return next;
  }
  var parsedPath = parsePath(next.path || '');
  var basePath = current && current.path || '/';
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;
  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);
  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }
  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  };
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];
var noop = function () {};
var warnedCustomSlot;
var warnedTagProp;
var warnedEventProp;
var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    custom: Boolean,
    exact: Boolean,
    exactPath: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render(h) {
    var this$1$1 = this;
    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;
    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null ? 'router-link-exact-active' : globalExactActiveClass;
    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
    var compareTarget = route.redirectedFrom ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router) : route;
    classes[exactActiveClass] = isSameRoute(current, compareTarget, this.exactPath);
    classes[activeClass] = this.exact || this.exactPath ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);
    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;
    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };
    var on = {
      click: guardEvent
    };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }
    var data = {
      class: classes
    };
    var scopedSlot = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
      href: href,
      route: route,
      navigate: handler,
      isActive: classes[activeClass],
      isExactActive: classes[exactActiveClass]
    });
    if (scopedSlot) {
      if (false) {}
      if (scopedSlot.length === 1) {
        return scopedSlot[0];
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (false) {}
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot);
      }
    }
    if (false) {}
    if (this.tag === 'a') {
      data.on = on;
      data.attrs = {
        href: href,
        'aria-current': ariaCurrentValue
      };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
        aAttrs['aria-current'] = ariaCurrentValue;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }
    return h(this.tag, data, this.$slots.default);
  }
};
function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return;
  }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) {
    return;
  }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) {
    return;
  }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) {
      return;
    }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}
function findAnchor(children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child;
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}
var vue_router_Vue;
function install(Vue) {
  if (install.installed && vue_router_Vue === Vue) {
    return;
  }
  install.installed = true;
  vue_router_Vue = Vue;
  var isDef = function (v) {
    return v !== undefined;
  };
  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };
  Vue.mixin({
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed() {
      registerInstance(this);
    }
  });
  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {
      return this._routerRoot._router;
    }
  });
  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {
      return this._routerRoot._route;
    }
  });
  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);
  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap, parentRoute) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);
  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route, parentRoute);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }
  if (false) { var pathNames, found; }
  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  };
}
function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;
  if (false) {}
  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);
  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }
  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || {
      default: route.component
    },
    alias: route.alias ? typeof route.alias === 'string' ? [route.alias] : route.alias : [],
    instances: {},
    enteredCbs: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : {
      default: route.props
    }
  };
  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {}
    route.children.forEach(function (child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }
  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }
  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if (false) {}
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || '/' // matchAs
      );
    }
  }
  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {}
  }
}
function compileRouteRegex(path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) { var keys; }
  return regex;
}
function normalizePath(path, parent, strict) {
  if (!strict) {
    path = path.replace(/\/$/, '');
  }
  if (path[0] === '/') {
    return path;
  }
  if (parent == null) {
    return path;
  }
  return cleanPath(parent.path + "/" + path);
}

/*  */

function createMatcher(routes, router) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;
  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }
  function addRoute(parentOrRoute, route) {
    var parent = typeof parentOrRoute !== 'object' ? nameMap[parentOrRoute] : undefined;
    // $flow-disable-line
    createRouteMap([route || parentOrRoute], pathList, pathMap, nameMap, parent);

    // add aliases of parent
    if (parent && parent.alias.length) {
      createRouteMap(
      // $flow-disable-line route is defined if parent is
      parent.alias.map(function (alias) {
        return {
          path: alias,
          children: [route]
        };
      }), pathList, pathMap, nameMap, parent);
    }
  }
  function getRoutes() {
    return pathList.map(function (path) {
      return pathMap[path];
    });
  }
  function match(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;
    if (name) {
      var record = nameMap[name];
      if (false) {}
      if (!record) {
        return _createRoute(null, location);
      }
      var paramNames = record.regex.keys.filter(function (key) {
        return !key.optional;
      }).map(function (key) {
        return key.name;
      });
      if (typeof location.params !== 'object') {
        location.params = {};
      }
      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }
      location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
      return _createRoute(record, location, redirectedFrom);
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom);
        }
      }
    }
    // no match
    return _createRoute(null, location);
  }
  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;
    if (typeof redirect === 'string') {
      redirect = {
        path: redirect
      };
    }
    if (!redirect || typeof redirect !== 'object') {
      if (false) {}
      return _createRoute(null, location);
    }
    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;
    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {}
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location);
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location);
    } else {
      if (false) {}
      return _createRoute(null, location);
    }
  }
  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }
    return _createRoute(null, location);
  }
  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }
    return createRoute(record, location, redirectedFrom, router);
  }
  return {
    match: match,
    addRoute: addRoute,
    getRoutes: getRoutes,
    addRoutes: addRoutes
  };
}
function matchRoute(regex, path, params) {
  var m = path.match(regex);
  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }
  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = typeof m[i] === 'string' ? decode(m[i]) : m[i];
    }
  }
  return true;
}
function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true);
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;
function genStateKey() {
  return Time.now().toFixed(3);
}
var vue_router_key = genStateKey();
function getStateKey() {
  return vue_router_key;
}
function setStateKey(key) {
  return vue_router_key = key;
}

/*  */

var positionStore = Object.create(null);
function setupScroll() {
  // Prevent browser scroll behavior on History popstate
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  // preserve existing history state as it could be overriden by the user
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, '', absolutePath);
  window.addEventListener('popstate', handlePopState);
  return function () {
    window.removeEventListener('popstate', handlePopState);
  };
}
function handleScroll(router, to, from, isPop) {
  if (!router.app) {
    return;
  }
  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return;
  }
  if (false) {}

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);
    if (!shouldScroll) {
      return;
    }
    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition(shouldScroll, position);
      }).catch(function (err) {
        if (false) {}
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}
function saveScrollPosition() {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}
function handlePopState(e) {
  saveScrollPosition();
  if (e.state && e.state.key) {
    setStateKey(e.state.key);
  }
}
function getScrollPosition() {
  var key = getStateKey();
  if (key) {
    return positionStore[key];
  }
}
function getElementPosition(el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  };
}
function isValidPosition(obj) {
  return isNumber(obj.x) || isNumber(obj.y);
}
function normalizePosition(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  };
}
function normalizeOffset(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  };
}
function isNumber(v) {
  return typeof v === 'number';
}
var hashStartsWithNumberRE = /^#\d/;
function scrollToPosition(shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
    ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
    : document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }
  if (position) {
    // $flow-disable-line
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        left: position.x,
        top: position.y,
        // $flow-disable-line
        behavior: shouldScroll.behavior
      });
    } else {
      window.scrollTo(position.x, position.y);
    }
  }
}

/*  */

var supportsPushState = inBrowser && function () {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && typeof window.history.pushState === 'function';
}();
function pushState(url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({
        key: setStateKey(genStateKey())
      }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}
function replaceState(url) {
  pushState(url, true);
}

// When changing thing, also edit router.d.ts
var NavigationFailureType = {
  redirected: 2,
  aborted: 4,
  cancelled: 8,
  duplicated: 16
};
function createNavigationRedirectedError(from, to) {
  return createRouterError(from, to, NavigationFailureType.redirected, "Redirected when going from \"" + from.fullPath + "\" to \"" + stringifyRoute(to) + "\" via a navigation guard.");
}
function createNavigationDuplicatedError(from, to) {
  var error = createRouterError(from, to, NavigationFailureType.duplicated, "Avoided redundant navigation to current location: \"" + from.fullPath + "\".");
  // backwards compatible with the first introduction of Errors
  error.name = 'NavigationDuplicated';
  return error;
}
function createNavigationCancelledError(from, to) {
  return createRouterError(from, to, NavigationFailureType.cancelled, "Navigation cancelled from \"" + from.fullPath + "\" to \"" + to.fullPath + "\" with a new navigation.");
}
function createNavigationAbortedError(from, to) {
  return createRouterError(from, to, NavigationFailureType.aborted, "Navigation aborted from \"" + from.fullPath + "\" to \"" + to.fullPath + "\" via a navigation guard.");
}
function createRouterError(from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;
  return error;
}
var propertiesToLog = ['params', 'query', 'hash'];
function stringifyRoute(to) {
  if (typeof to === 'string') {
    return to;
  }
  if ('path' in to) {
    return to.path;
  }
  var location = {};
  propertiesToLog.forEach(function (key) {
    if (key in to) {
      location[key] = to[key];
    }
  });
  return JSON.stringify(location, null, 2);
}
function isError(err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1;
}
function isNavigationFailure(err, errorType) {
  return isError(err) && err._isRouter && (errorType == null || err.type === errorType);
}

/*  */

function runQueue(queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents(matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;
    vue_router_flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;
        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function' ? resolvedDef : vue_router_Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });
        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           false && false;
          if (!error) {
            error = isError(reason) ? reason : new Error(msg);
            next(error);
          }
        });
        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });
    if (!hasAsync) {
      next();
    }
  };
}
function vue_router_flatMapComponents(matched, fn) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key);
    });
  }));
}
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}
var hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once(fn) {
  var called = false;
  return function () {
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    if (called) {
      return;
    }
    called = true;
    return fn.apply(this, args);
  };
}

/*  */

var History = function History(router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};
History.prototype.listen = function listen(cb) {
  this.cb = cb;
};
History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};
History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};
History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1$1 = this;
  var route;
  // catch redirect option https://github.com/vuejs/vue-router/issues/3201
  try {
    route = this.router.match(location, this.current);
  } catch (e) {
    this.errorCbs.forEach(function (cb) {
      cb(e);
    });
    // Exception should still be thrown
    throw e;
  }
  var prev = this.current;
  this.confirmTransition(route, function () {
    this$1$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1$1.ensureURL();
    this$1$1.router.afterHooks.forEach(function (hook) {
      hook && hook(route, prev);
    });

    // fire ready cbs once
    if (!this$1$1.ready) {
      this$1$1.ready = true;
      this$1$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1$1.ready) {
      // Initial redirection should not mark the history as ready yet
      // because it's triggered by the redirection instead
      // https://github.com/vuejs/vue-router/issues/3225
      // https://github.com/vuejs/vue-router/issues/3331
      if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
        this$1$1.ready = true;
        this$1$1.readyErrorCbs.forEach(function (cb) {
          cb(err);
        });
      }
    }
  });
};
History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1$1 = this;
  var current = this.current;
  this.pending = route;
  var abort = function (err) {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isNavigationFailure(err) && isError(err)) {
      if (this$1$1.errorCbs.length) {
        this$1$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        if (false) {}
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  var lastRouteIndex = route.matched.length - 1;
  var lastCurrentIndex = current.matched.length - 1;
  if (isSameRoute(route, current) &&
  // in the case the route map has been dynamically appended to
  lastRouteIndex === lastCurrentIndex && route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]) {
    this.ensureURL();
    if (route.hash) {
      handleScroll(this.router, current, route, false);
    }
    return abort(createNavigationDuplicatedError(current, route));
  }
  var ref = resolveQueue(this.current.matched, route.matched);
  var updated = ref.updated;
  var deactivated = ref.deactivated;
  var activated = ref.activated;
  var queue = [].concat(
  // in-component leave guards
  extractLeaveGuards(deactivated),
  // global before hooks
  this.router.beforeHooks,
  // in-component update hooks
  extractUpdateHooks(updated),
  // in-config enter guards
  activated.map(function (m) {
    return m.beforeEnter;
  }),
  // async components
  resolveAsyncComponents(activated));
  var iterator = function (hook, next) {
    if (this$1$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route));
    }
    try {
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1$1.ensureURL(true);
          abort(to);
        } else if (typeof to === 'string' || typeof to === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route));
          if (typeof to === 'object' && to.replace) {
            this$1$1.replace(to);
          } else {
            this$1$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };
  runQueue(queue, iterator, function () {
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated);
    var queue = enterGuards.concat(this$1$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route));
      }
      this$1$1.pending = null;
      onComplete(route);
      if (this$1$1.router.app) {
        this$1$1.router.app.$nextTick(function () {
          handleRouteEntered(route);
        });
      }
    });
  });
};
History.prototype.updateRoute = function updateRoute(route) {
  this.current = route;
  this.cb && this.cb(route);
};
History.prototype.setupListeners = function setupListeners() {
  // Default implementation is empty
};
History.prototype.teardown = function teardown() {
  // clean up event listeners
  // https://github.com/vuejs/vue-router/issues/2341
  this.listeners.forEach(function (cleanupListener) {
    cleanupListener();
  });
  this.listeners = [];

  // reset current history route
  // https://github.com/vuejs/vue-router/issues/3294
  this.current = START;
  this.pending = null;
};
function normalizeBase(base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '');
}
function resolveQueue(current, next) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}
function extractGuards(records, name, bind, reverse) {
  var guards = vue_router_flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard) ? guard.map(function (guard) {
        return bind(guard, instance, match, key);
      }) : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}
function extractGuard(def, key) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = vue_router_Vue.extend(def);
  }
  return def.options[key];
}
function extractLeaveGuards(deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
}
function extractUpdateHooks(updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
}
function bindGuard(guard, instance) {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}
function extractEnterGuards(activated) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key);
  });
}
function bindEnterGuard(guard, match, key) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        if (!match.enteredCbs[key]) {
          match.enteredCbs[key] = [];
        }
        match.enteredCbs[key].push(cb);
      }
      next(cb);
    });
  };
}

/*  */

var HTML5History = /*@__PURE__*/function (History) {
  function HTML5History(router, base) {
    History.call(this, router, base);
    this._startLocation = vue_router_getLocation(this.base);
  }
  if (History) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create(History && History.prototype);
  HTML5History.prototype.constructor = HTML5History;
  HTML5History.prototype.setupListeners = function setupListeners() {
    var this$1$1 = this;
    if (this.listeners.length > 0) {
      return;
    }
    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;
    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }
    var handleRoutingEvent = function () {
      var current = this$1$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = vue_router_getLocation(this$1$1.base);
      if (this$1$1.current === START && location === this$1$1._startLocation) {
        return;
      }
      this$1$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    };
    window.addEventListener('popstate', handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener('popstate', handleRoutingEvent);
    });
  };
  HTML5History.prototype.go = function go(n) {
    window.history.go(n);
  };
  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1$1.base + route.fullPath));
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };
  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1$1.base + route.fullPath));
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };
  HTML5History.prototype.ensureURL = function ensureURL(push) {
    if (vue_router_getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };
  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
    return vue_router_getLocation(this.base);
  };
  return HTML5History;
}(History);
function vue_router_getLocation(base) {
  var path = window.location.pathname;
  var pathLowerCase = path.toLowerCase();
  var baseLowerCase = base.toLowerCase();
  // base="/a" shouldn't turn path="/app" into "/a/pp"
  // https://github.com/vuejs/vue-router/issues/3555
  // so we ensure the trailing slash in the base
  if (base && (pathLowerCase === baseLowerCase || pathLowerCase.indexOf(cleanPath(baseLowerCase + '/')) === 0)) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

/*  */

var HashHistory = /*@__PURE__*/function (History) {
  function HashHistory(router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return;
    }
    ensureSlash();
  }
  if (History) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create(History && History.prototype);
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners() {
    var this$1$1 = this;
    if (this.listeners.length > 0) {
      return;
    }
    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;
    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }
    var handleRoutingEvent = function () {
      var current = this$1$1.current;
      if (!ensureSlash()) {
        return;
      }
      this$1$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    };
    var eventType = supportsPushState ? 'popstate' : 'hashchange';
    window.addEventListener(eventType, handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };
  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };
  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };
  HashHistory.prototype.go = function go(n) {
    window.history.go(n);
  };
  HashHistory.prototype.ensureURL = function ensureURL(push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };
  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };
  return HashHistory;
}(History);
function checkFallback(base) {
  var location = vue_router_getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true;
  }
}
function ensureSlash() {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true;
  }
  replaceHash('/' + path);
  return false;
}
function getHash() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) {
    return '';
  }
  href = href.slice(index + 1);
  return href;
}
function getUrl(path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return base + "#" + path;
}
function pushHash(path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}
function replaceHash(path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/function (History) {
  function AbstractHistory(router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }
  if (History) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create(History && History.prototype);
  AbstractHistory.prototype.constructor = AbstractHistory;
  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1$1 = this;
    this.transitionTo(location, function (route) {
      this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index + 1).concat(route);
      this$1$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };
  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1$1 = this;
    this.transitionTo(location, function (route) {
      this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };
  AbstractHistory.prototype.go = function go(n) {
    var this$1$1 = this;
    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      var prev = this$1$1.current;
      this$1$1.index = targetIndex;
      this$1$1.updateRoute(route);
      this$1$1.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev);
      });
    }, function (err) {
      if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
        this$1$1.index = targetIndex;
      }
    });
  };
  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/';
  };
  AbstractHistory.prototype.ensureURL = function ensureURL() {
    // noop
  };
  return AbstractHistory;
}(History);

/*  */

var VueRouter = function VueRouter(options) {
  if (options === void 0) options = {};
  if (false) {}
  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);
  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;
  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;
    default:
      if (false) {}
  }
};
var prototypeAccessors = {
  currentRoute: {
    configurable: true
  }
};
VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};
prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current;
};
VueRouter.prototype.init = function init(app /* Vue component instance */) {
  var this$1$1 = this;
   false && false;
  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1$1.apps.indexOf(app);
    if (index > -1) {
      this$1$1.apps.splice(index, 1);
    }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1$1.app === app) {
      this$1$1.app = this$1$1.apps[0] || null;
    }
    if (!this$1$1.app) {
      this$1$1.history.teardown();
    }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return;
  }
  this.app = app;
  var history = this.history;
  if (history instanceof HTML5History || history instanceof HashHistory) {
    var handleInitialScroll = function (routeOrError) {
      var from = history.current;
      var expectScroll = this$1$1.options.scrollBehavior;
      var supportsScroll = supportsPushState && expectScroll;
      if (supportsScroll && 'fullPath' in routeOrError) {
        handleScroll(this$1$1, routeOrError, from, false);
      }
    };
    var setupListeners = function (routeOrError) {
      history.setupListeners();
      handleInitialScroll(routeOrError);
    };
    history.transitionTo(history.getCurrentLocation(), setupListeners, setupListeners);
  }
  history.listen(function (route) {
    this$1$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};
VueRouter.prototype.beforeEach = function beforeEach(fn) {
  return registerHook(this.beforeHooks, fn);
};
VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
  return registerHook(this.resolveHooks, fn);
};
VueRouter.prototype.afterEach = function afterEach(fn) {
  return registerHook(this.afterHooks, fn);
};
VueRouter.prototype.onReady = function onReady(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};
VueRouter.prototype.onError = function onError(errorCb) {
  this.history.onError(errorCb);
};
VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  var this$1$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1$1.history.push(location, resolve, reject);
    });
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};
VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  var this$1$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1$1.history.replace(location, resolve, reject);
    });
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};
VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};
VueRouter.prototype.back = function back() {
  this.go(-1);
};
VueRouter.prototype.forward = function forward() {
  this.go(1);
};
VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
  if (!route) {
    return [];
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
};
VueRouter.prototype.resolve = function resolve(to, current, append) {
  current = current || this.history.current;
  var location = normalizeLocation(to, current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  };
};
VueRouter.prototype.getRoutes = function getRoutes() {
  return this.matcher.getRoutes();
};
VueRouter.prototype.addRoute = function addRoute(parentOrRoute, route) {
  this.matcher.addRoute(parentOrRoute, route);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};
VueRouter.prototype.addRoutes = function addRoutes(routes) {
  if (false) {}
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};
Object.defineProperties(VueRouter.prototype, prototypeAccessors);
var VueRouter$1 = VueRouter;
function registerHook(list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) {
      list.splice(i, 1);
    }
  };
}
function createHref(base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path;
}

// We cannot remove this as it would be a breaking change
VueRouter.install = install;
VueRouter.version = '3.6.5';
VueRouter.isNavigationFailure = isNavigationFailure;
VueRouter.NavigationFailureType = NavigationFailureType;
VueRouter.START_LOCATION = START;
if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}
var version = '3.6.5';

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _edbd8830 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 1).then(__webpack_require__.bind(null, 59)));
const emptyFn = () => {};
vue_runtime["c" /* default */].use(VueRouter$1);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _edbd8830,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new VueRouter$1({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--9!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_errorvue_type_script_lang_js = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js = (nuxt_errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5eb0e285"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js





/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    vue_runtime["c" /* default */].util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error or
    // error page has not been loaded yet on client
    if (!this.nuxt.err ||  false && false) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--9!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=9f9b1aaa
var defaultvue_type_template_id_9f9b1aaa_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('nuxt')], 1);
};
var defaultvue_type_template_id_9f9b1aaa_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=9f9b1aaa

// EXTERNAL MODULE: ./node_modules/@nuxt/bridge/dist/runtime/nuxt.mjs
var runtime_nuxt = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./layouts/default.vue?vue&type=script&lang=js

/* harmony default export */ var defaultvue_type_script_lang_js = ({
  name: "DefaultLayout",
  setup() {
    const {
      $store,
      $route
    } = Object(runtime_nuxt["d" /* useNuxtApp */])();
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js = (defaultvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js,
  defaultvue_type_template_id_9f9b1aaa_render,
  defaultvue_type_template_id_9f9b1aaa_staticRenderFns,
  false,
  null,
  null,
  "60fd6f72"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js





const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    vue_runtime["c" /* default */].util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              vue_runtime["c" /* default */].set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        globalHandleError(error);
        this.error(error);
      }
    },
    errorChanged() {
      if (this.nuxt.err) {
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.nuxt.errPageReady = true;
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  vue_runtime["c" /* default */].component(name, components_namespaceObject[name]);
  vue_runtime["c" /* default */].component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "hookable"
var external_hookable_ = __webpack_require__(12);

// CONCATENATED MODULE: ./.nuxt/global-middleware.mjs
const globalMiddleware = [];
// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/app.plugin.mjs





// Reshape payload to match key `useLazyAsyncData` expects
function proxiedState(state) {
  state._asyncData = state._asyncData || {};
  state._errors = state._errors || Object(vue_runtime["r" /* reactive */])({});
  return new Proxy(state, {
    get(target, prop) {
      if (prop === 'data') {
        return target._asyncData;
      }
      if (prop === '_data') {
        return target.state;
      }
      return Reflect.get(target, prop);
    }
  });
}
const runOnceWith = (obj, fn) => {
  if (!obj || !['function', 'object'].includes(typeof obj)) {
    return fn();
  }
  if (obj.__nuxt_installed) {
    return;
  }
  obj.__nuxt_installed = true;
  return fn();
};
/* harmony default export */ var app_plugin = (async (ctx, inject) => {
  const nuxtApp = {
    vueApp: {
      component: (id, definition) => runOnceWith(definition, () => vue_runtime["c" /* default */].component(id, definition)),
      config: {
        globalProperties: {}
      },
      directive: (id, definition) => runOnceWith(definition, () => vue_runtime["c" /* default */].directive(id, definition)),
      mixin: mixin => runOnceWith(mixin, () => vue_runtime["c" /* default */].mixin(mixin)),
      mount: () => {},
      provide: inject,
      unmount: () => {},
      use(vuePlugin, options) {
        runOnceWith(vuePlugin, () => vue_runtime["c" /* default */].use(vuePlugin, options));
      },
      version: vue_runtime["y" /* version */]
    },
    provide: inject,
    globalName: 'nuxt',
    payload: proxiedState( false ? undefined : ctx.ssrContext.nuxt),
    _asyncDataPromises: {},
    _asyncData: {},
    static: {
      data: {}
    },
    isHydrating: true,
    nuxt2Context: ctx
  };
  nuxtApp.hooks = Object(external_hookable_["createHooks"])();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  const middleware = await Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 8)).then(r => r.default);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: globalMiddleware,
    named: middleware
  };
  ctx.app.router.beforeEach(async (to, from, next) => {
    nuxtApp._processingMiddleware = true;
    for (const middleware of nuxtApp._middleware.global) {
      const result = await middleware({
        ...ctx,
        route: to,
        from
      });
      if (result || result === false) {
        return next(result);
      }
    }
    next();
  });
  ctx.app.router.afterEach(() => {
    delete nuxtApp._processingMiddleware;
  });
  if (!Array.isArray(ctx.app.created)) {
    ctx.app.created = [ctx.app.created].filter(Boolean);
  }
  if (!Array.isArray(ctx.app.mounted)) {
    ctx.app.mounted = [ctx.app.mounted].filter(Boolean);
  }
  if (true) {
    nuxtApp.ssrContext = ctx.ssrContext;
    nuxtApp.ssrContext.nuxtApp = nuxtApp;
  }
  ctx.app.created.push(function () {
    nuxtApp.vue2App = this;
    vue_runtime["c" /* default */].config.errorHandler = nuxtApp.vueApp.config.errorHandler;
  });
  ctx.app.mounted.push(() => {
    nuxtApp.isHydrating = false;
  });
  const proxiedApp = new Proxy(nuxtApp, {
    get(target, prop) {
      if (prop === '$store') {
        return target.nuxt2Context.store;
      }
      if (prop[0] === '$') {
        var _target$vue2App;
        return target.nuxt2Context[prop] || ((_target$vue2App = target.vue2App) === null || _target$vue2App === void 0 ? void 0 : _target$vue2App[prop]);
      }
      return Reflect.get(target, prop);
    }
  });
  Object(runtime_nuxt["c" /* setNuxtAppInstance */])(proxiedApp);
  if (false) {}
  inject('_nuxtApp', proxiedApp);
});
// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/config.plugin.mjs
/* harmony default export */ var config_plugin = (ctx => {
  const config = ctx.$config;
  ctx.$config = new Proxy(config, {
    get(target, prop) {
      var _target$prop, _target$public;
      if (prop === 'public') {
        return target.public;
      }
      return (_target$prop = target[prop]) !== null && _target$prop !== void 0 ? _target$prop : (_target$public = target.public) === null || _target$public === void 0 ? void 0 : _target$public[prop];
    },
    set(target, prop, value) {
      if (prop === 'public' || prop === 'app') {
        return false; // Throws TypeError
      }
      target[prop] = value;
      if ('public' in target) {
        target.public[prop] = value;
      }
      return true;
    }
  });
});
// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/app.mjs
const isVue2 = true;
const isVue3 = false;
// CONCATENATED MODULE: ./node_modules/@unhead/shared/dist/index.mjs
function asArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
const SelfClosingTags = ["meta", "link", "base"];
const TagsWithInnerContent = ["title", "titleTemplate", "script", "style", "noscript"];
const HasElementTags = ["base", "meta", "link", "style", "script", "noscript"];
const ValidHeadTags = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"];
const UniqueTags = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"];
const TagConfigKeys = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"];
const IsBrowser = typeof window !== "undefined";
const composableNames = ["getActiveHead", "useHead", "useSeoMeta", "useHeadSafe", "useServerHead", "useServerSeoMeta", "useServerHeadSafe"];
function defineHeadPlugin(plugin) {
  return plugin;
}
function hashCode(s) {
  let h = 9;
  for (let i = 0; i < s.length;) h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
  return ((h ^ h >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function hashTag(tag) {
  return tag._h || hashCode(tag._d ? tag._d : `${tag.tag}:${tag.textContent || tag.innerHTML || ""}:${Object.entries(tag.props).map(([key, value]) => `${key}:${String(value)}`).join(",")}`);
}
function tagDedupeKey(tag, fn) {
  const {
    props,
    tag: tagName
  } = tag;
  if (UniqueTags.includes(tagName)) return tagName;
  if (tagName === "link" && props.rel === "canonical") return "canonical";
  if (props.charset) return "charset";
  const name = ["id"];
  if (tagName === "meta") name.push(...["name", "property", "http-equiv"]);
  for (const n of name) {
    if (typeof props[n] !== "undefined") {
      const val = String(props[n]);
      if (fn && !fn(val)) return false;
      return `${tagName}:${n}:${val}`;
    }
  }
  return false;
}
function resolveTitleTemplate(template, title) {
  if (template == null) return title || null;
  if (typeof template === "function") return template(title);
  return template;
}
function asArray(input) {
  return Array.isArray(input) ? input : [input];
}
const InternalKeySymbol = "_$key";
function packObject(input, options) {
  const keys = Object.keys(input);
  let [k, v] = keys;
  options = options || {};
  options.key = options.key || k;
  options.value = options.value || v;
  options.resolveKey = options.resolveKey || (k2 => k2);
  const resolveKey = index => {
    const arr = asArray(options[index]);
    return arr.find(k2 => {
      if (typeof k2 === "string" && k2.includes(".")) {
        return k2;
      }
      return k2 && keys.includes(k2);
    });
  };
  const resolveValue = (k2, input2) => {
    if (k2.includes(".")) {
      const paths = k2.split(".");
      let val = input2;
      for (const path of paths) val = val[path];
      return val;
    }
    return input2[k2];
  };
  k = resolveKey("key") || k;
  v = resolveKey("value") || v;
  const dedupeKeyPrefix = input.key ? `${InternalKeySymbol}${input.key}-` : "";
  let keyValue = resolveValue(k, input);
  keyValue = options.resolveKey(keyValue);
  return {
    [`${dedupeKeyPrefix}${keyValue}`]: resolveValue(v, input)
  };
}
function packArray(input, options) {
  const packed = {};
  for (const i of input) {
    const packedObj = packObject(i, options);
    const pKey = Object.keys(packedObj)[0];
    const isDedupeKey = pKey.startsWith(InternalKeySymbol);
    if (!isDedupeKey && packed[pKey]) {
      packed[pKey] = Array.isArray(packed[pKey]) ? packed[pKey] : [packed[pKey]];
      packed[pKey].push(Object.values(packedObj)[0]);
    } else {
      packed[isDedupeKey ? pKey.split("-").slice(1).join("-") || pKey : pKey] = packedObj[pKey];
    }
  }
  return packed;
}
function unpackToArray(input, options) {
  const unpacked = [];
  const kFn = options.resolveKeyData || (ctx => ctx.key);
  const vFn = options.resolveValueData || (ctx => ctx.value);
  for (const [k, v] of Object.entries(input)) {
    unpacked.push(...(Array.isArray(v) ? v : [v]).map(i => {
      const ctx = {
        key: k,
        value: i
      };
      const val = vFn(ctx);
      if (typeof val === "object") return unpackToArray(val, options);
      if (Array.isArray(val)) return val;
      return {
        [typeof options.key === "function" ? options.key(ctx) : options.key]: kFn(ctx),
        [typeof options.value === "function" ? options.value(ctx) : options.value]: val
      };
    }).flat());
  }
  return unpacked;
}
function unpackToString(value, options) {
  return Object.entries(value).map(([key, value2]) => {
    if (typeof value2 === "object") value2 = unpackToString(value2, options);
    if (options.resolve) {
      const resolved = options.resolve({
        key,
        value: value2
      });
      if (typeof resolved !== "undefined") return resolved;
    }
    if (typeof value2 === "number") value2 = value2.toString();
    if (typeof value2 === "string" && options.wrapValue) {
      value2 = value2.replace(new RegExp(options.wrapValue, "g"), `\\${options.wrapValue}`);
      value2 = `${options.wrapValue}${value2}${options.wrapValue}`;
    }
    return `${key}${options.keyValueSeparator || ""}${value2}`;
  }).join(options.entrySeparator || "");
}
const dist_p = p2 => ({
  keyValue: p2,
  metaKey: "property"
});
const dist_k = p2 => ({
  keyValue: p2
});
const MetaPackingSchema = {
  appleItunesApp: {
    unpack: {
      entrySeparator: ", ",
      resolve({
        key,
        value
      }) {
        return `${fixKeyCase(key)}=${value}`;
      }
    }
  },
  articleExpirationTime: dist_p("article:expiration_time"),
  articleModifiedTime: dist_p("article:modified_time"),
  articlePublishedTime: dist_p("article:published_time"),
  bookReleaseDate: dist_p("book:release_date"),
  charset: {
    metaKey: "charset"
  },
  contentSecurityPolicy: {
    unpack: {
      entrySeparator: "; ",
      resolve({
        key,
        value
      }) {
        return `${fixKeyCase(key)} ${value}`;
      }
    },
    metaKey: "http-equiv"
  },
  contentType: {
    metaKey: "http-equiv"
  },
  defaultStyle: {
    metaKey: "http-equiv"
  },
  fbAppId: dist_p("fb:app_id"),
  msapplicationConfig: dist_k("msapplication-Config"),
  msapplicationTileColor: dist_k("msapplication-TileColor"),
  msapplicationTileImage: dist_k("msapplication-TileImage"),
  ogAudioSecureUrl: dist_p("og:audio:secure_url"),
  ogAudioUrl: dist_p("og:audio"),
  ogImageSecureUrl: dist_p("og:image:secure_url"),
  ogImageUrl: dist_p("og:image"),
  ogSiteName: dist_p("og:site_name"),
  ogVideoSecureUrl: dist_p("og:video:secure_url"),
  ogVideoUrl: dist_p("og:video"),
  profileFirstName: dist_p("profile:first_name"),
  profileLastName: dist_p("profile:last_name"),
  profileUsername: dist_p("profile:username"),
  refresh: {
    metaKey: "http-equiv",
    unpack: {
      entrySeparator: ";",
      resolve({
        key,
        value
      }) {
        if (key === "seconds") return `${value}`;
      }
    }
  },
  robots: {
    unpack: {
      entrySeparator: ", ",
      resolve({
        key,
        value
      }) {
        if (typeof value === "boolean") return `${fixKeyCase(key)}`;else return `${fixKeyCase(key)}:${value}`;
      }
    }
  },
  xUaCompatible: {
    metaKey: "http-equiv"
  }
};
const openGraphNamespaces = ["og", "book", "article", "profile"];
function resolveMetaKeyType(key) {
  var _MetaPackingSchema$ke;
  const fKey = fixKeyCase(key).split(":")[0];
  if (openGraphNamespaces.includes(fKey)) return "property";
  return ((_MetaPackingSchema$ke = MetaPackingSchema[key]) === null || _MetaPackingSchema$ke === void 0 ? void 0 : _MetaPackingSchema$ke.metaKey) || "name";
}
function resolveMetaKeyValue(key) {
  var _MetaPackingSchema$ke2;
  return ((_MetaPackingSchema$ke2 = MetaPackingSchema[key]) === null || _MetaPackingSchema$ke2 === void 0 ? void 0 : _MetaPackingSchema$ke2.keyValue) || fixKeyCase(key);
}
function fixKeyCase(key) {
  const updated = key.replace(/([A-Z])/g, "-$1").toLowerCase();
  const fKey = updated.split("-")[0];
  if (openGraphNamespaces.includes(fKey) || fKey === "twitter") return key.replace(/([A-Z])/g, ":$1").toLowerCase();
  return updated;
}
function changeKeyCasingDeep(input) {
  if (Array.isArray(input)) {
    return input.map(entry => changeKeyCasingDeep(entry));
  }
  if (typeof input !== "object" || Array.isArray(input)) return input;
  const output = {};
  for (const [key, value] of Object.entries(input)) output[fixKeyCase(key)] = changeKeyCasingDeep(value);
  return output;
}
function resolvePackedMetaObjectValue(value, key) {
  const definition = MetaPackingSchema[key];
  if (key === "refresh") return `${value.seconds};url=${value.url}`;
  return unpackToString(changeKeyCasingDeep(value), {
    keyValueSeparator: "=",
    entrySeparator: ", ",
    resolve({
      value: value2,
      key: key2
    }) {
      if (value2 === null) return "";
      if (typeof value2 === "boolean") return `${key2}`;
    },
    ...(definition === null || definition === void 0 ? void 0 : definition.unpack)
  });
}
const ObjectArrayEntries = ["og:image", "og:video", "og:audio", "twitter:image"];
function sanitize(input) {
  const out = {};
  Object.entries(input).forEach(([k2, v]) => {
    if (String(v) !== "false" && k2) out[k2] = v;
  });
  return out;
}
function handleObjectEntry(key, v) {
  const value = sanitize(v);
  const fKey = fixKeyCase(key);
  const attr = resolveMetaKeyType(fKey);
  if (ObjectArrayEntries.includes(fKey)) {
    const input = {};
    Object.entries(value).forEach(([k2, v2]) => {
      input[`${key}${k2 === "url" ? "" : `${k2.charAt(0).toUpperCase()}${k2.slice(1)}`}`] = v2;
    });
    return unpackMeta(input).sort((a, b) => {
      var _a$attr, _b$attr;
      return (((_a$attr = a[attr]) === null || _a$attr === void 0 ? void 0 : _a$attr.length) || 0) - (((_b$attr = b[attr]) === null || _b$attr === void 0 ? void 0 : _b$attr.length) || 0);
    });
  }
  return [{
    [attr]: fKey,
    ...value
  }];
}
function unpackMeta(input) {
  const extras = [];
  const primitives = {};
  Object.entries(input).forEach(([key, value]) => {
    if (!Array.isArray(value)) {
      if (typeof value === "object" && value) {
        if (ObjectArrayEntries.includes(fixKeyCase(key))) {
          extras.push(...handleObjectEntry(key, value));
          return;
        }
        primitives[key] = sanitize(value);
      } else {
        primitives[key] = value;
      }
      return;
    }
    value.forEach(v => {
      extras.push(...(typeof v === "string" ? unpackMeta({
        [key]: v
      }) : handleObjectEntry(key, v)));
    });
  });
  const meta = unpackToArray(primitives, {
    key({
      key
    }) {
      return resolveMetaKeyType(key);
    },
    value({
      key
    }) {
      return key === "charset" ? "charset" : "content";
    },
    resolveKeyData({
      key
    }) {
      return resolveMetaKeyValue(key);
    },
    resolveValueData({
      value,
      key
    }) {
      if (value === null) return "_null";
      if (typeof value === "object") return resolvePackedMetaObjectValue(value, key);
      return typeof value === "number" ? value.toString() : value;
    }
  });
  return [...extras, ...meta].map(m => {
    if (m.content === "_null") m.content = null;
    return m;
  });
}
function packMeta(inputs) {
  const mappedPackingSchema = Object.entries(MetaPackingSchema).map(([key, value]) => [key, value.keyValue]);
  return packArray(inputs, {
    key: ["name", "property", "httpEquiv", "http-equiv", "charset"],
    value: ["content", "charset"],
    resolveKey(k2) {
      var _mappedPackingSchema$, _mappedPackingSchema$2;
      let key = ((_mappedPackingSchema$ = mappedPackingSchema.filter(sk => sk[1] === k2)) === null || _mappedPackingSchema$ === void 0 ? void 0 : (_mappedPackingSchema$2 = _mappedPackingSchema$[0]) === null || _mappedPackingSchema$2 === void 0 ? void 0 : _mappedPackingSchema$2[0]) || k2;
      const replacer = (_, letter) => letter === null || letter === void 0 ? void 0 : letter.toUpperCase();
      key = key.replace(/:([a-z])/g, replacer).replace(/-([a-z])/g, replacer);
      return key;
    }
  });
}
const WhitelistAttributes = {
  htmlAttrs: ["id", "class", "lang", "dir"],
  bodyAttrs: ["id", "class"],
  meta: ["id", "name", "property", "charset", "content"],
  noscript: ["id", "textContent"],
  script: ["id", "type", "textContent"],
  link: ["id", "color", "crossorigin", "fetchpriority", "href", "hreflang", "imagesrcset", "imagesizes", "integrity", "media", "referrerpolicy", "rel", "sizes", "type"]
};
function acceptDataAttrs(value) {
  const filtered = {};
  Object.keys(value || {}).filter(a => a.startsWith("data-")).forEach(a => {
    filtered[a] = value[a];
  });
  return filtered;
}
function whitelistSafeInput(input) {
  const filtered = {};
  Object.keys(input).forEach(key => {
    const tagValue = input[key];
    if (!tagValue) return;
    switch (key) {
      case "title":
      case "titleTemplate":
      case "templateParams":
        filtered[key] = tagValue;
        break;
      case "htmlAttrs":
      case "bodyAttrs":
        filtered[key] = acceptDataAttrs(tagValue);
        WhitelistAttributes[key].forEach(a => {
          if (tagValue[a]) filtered[key][a] = tagValue[a];
        });
        break;
      case "meta":
        if (Array.isArray(tagValue)) {
          filtered[key] = tagValue.map(meta => {
            const safeMeta = acceptDataAttrs(meta);
            WhitelistAttributes.meta.forEach(key2 => {
              if (meta[key2]) safeMeta[key2] = meta[key2];
            });
            return safeMeta;
          }).filter(meta => Object.keys(meta).length > 0);
        }
        break;
      case "link":
        if (Array.isArray(tagValue)) {
          filtered[key] = tagValue.map(meta => {
            const link = acceptDataAttrs(meta);
            WhitelistAttributes.link.forEach(key2 => {
              const val = meta[key2];
              if (key2 === "rel" && ["stylesheet", "canonical", "modulepreload", "prerender", "preload", "prefetch"].includes(val)) return;
              if (key2 === "href") {
                if (val.includes("javascript:") || val.includes("data:")) return;
                link[key2] = val;
              } else if (val) {
                link[key2] = val;
              }
            });
            return link;
          }).filter(link => Object.keys(link).length > 1 && !!link.rel);
        }
        break;
      case "noscript":
        if (Array.isArray(tagValue)) {
          filtered[key] = tagValue.map(meta => {
            const noscript = acceptDataAttrs(meta);
            WhitelistAttributes.noscript.forEach(key2 => {
              if (meta[key2]) noscript[key2] = meta[key2];
            });
            return noscript;
          }).filter(meta => Object.keys(meta).length > 0);
        }
        break;
      case "script":
        if (Array.isArray(tagValue)) {
          filtered[key] = tagValue.map(script => {
            const safeScript = acceptDataAttrs(script);
            WhitelistAttributes.script.forEach(s => {
              if (script[s]) {
                if (s === "textContent") {
                  try {
                    const jsonVal = typeof script[s] === "string" ? JSON.parse(script[s]) : script[s];
                    safeScript[s] = JSON.stringify(jsonVal, null, 0);
                  } catch (e) {}
                } else {
                  safeScript[s] = script[s];
                }
              }
            });
            return safeScript;
          }).filter(meta => Object.keys(meta).length > 0);
        }
        break;
    }
  });
  return filtered;
}
async function normaliseTag(tagName, input, e) {
  const tag = {
    tag: tagName,
    props: await normaliseProps(
    // explicitly check for an object
    // @ts-expect-error untyped
    typeof input === "object" && typeof input !== "function" && !(input instanceof Promise) ? {
      ...input
    } : {
      [["script", "noscript", "style"].includes(tagName) ? "innerHTML" : "textContent"]: input
    }, ["templateParams", "titleTemplate"].includes(tagName))
  };
  TagConfigKeys.forEach(k => {
    const val = typeof tag.props[k] !== "undefined" ? tag.props[k] : e[k];
    if (typeof val !== "undefined") {
      if (!["innerHTML", "textContent", "children"].includes(k) || TagsWithInnerContent.includes(tag.tag)) {
        tag[k === "children" ? "innerHTML" : k] = val;
      }
      delete tag.props[k];
    }
  });
  if (tag.props.body) {
    tag.tagPosition = "bodyClose";
    delete tag.props.body;
  }
  if (tag.tag === "script") {
    if (typeof tag.innerHTML === "object") {
      tag.innerHTML = JSON.stringify(tag.innerHTML);
      tag.props.type = tag.props.type || "application/json";
    }
  }
  return Array.isArray(tag.props.content) ? tag.props.content.map(v => ({
    ...tag,
    props: {
      ...tag.props,
      content: v
    }
  })) : tag;
}
function normaliseStyleClassProps(key, v) {
  var _String;
  const sep = key === "class" ? " " : ";";
  if (typeof v === "object" && !Array.isArray(v)) {
    v = Object.entries(v).filter(([, v2]) => v2).map(([k, v2]) => key === "style" ? `${k}:${v2}` : k);
  }
  return (_String = String(Array.isArray(v) ? v.join(sep) : v)) === null || _String === void 0 ? void 0 : _String.split(sep).filter(c => c.trim()).filter(Boolean).join(sep);
}
async function normaliseProps(props, virtual) {
  for (const k of Object.keys(props)) {
    if (["class", "style"].includes(k)) {
      props[k] = normaliseStyleClassProps(k, props[k]);
      continue;
    }
    if (props[k] instanceof Promise) props[k] = await props[k];
    if (!virtual && !TagConfigKeys.includes(k)) {
      const v = String(props[k]);
      const isDataKey = k.startsWith("data-");
      if (v === "true" || v === "") {
        props[k] = isDataKey ? "true" : true;
      } else if (!props[k]) {
        if (isDataKey && v === "false") props[k] = "false";else delete props[k];
      }
    }
  }
  return props;
}
const TagEntityBits = 10;
async function normaliseEntryTags(e) {
  const tagPromises = [];
  Object.entries(e.resolvedInput).filter(([k, v]) => typeof v !== "undefined" && ValidHeadTags.includes(k)).forEach(([k, value]) => {
    const v = asArray$1(value);
    tagPromises.push(...v.map(props => normaliseTag(k, props, e)).flat());
  });
  return (await Promise.all(tagPromises)).flat().filter(Boolean).map((t, i) => {
    t._e = e._i;
    e.mode && (t._m = e.mode);
    t._p = (e._i << TagEntityBits) + i;
    return t;
  });
}
const TAG_WEIGHTS = {
  // tags
  base: -10,
  title: 10
};
const TAG_ALIASES = {
  // relative scores to their default values
  critical: -80,
  high: -10,
  low: 20
};
function tagWeight(tag) {
  let weight = 100;
  const priority = tag.tagPriority;
  if (typeof priority === "number") return priority;
  if (tag.tag === "meta") {
    if (tag.props["http-equiv"] === "content-security-policy") weight = -30;
    if (tag.props.charset) weight = -20;
    if (tag.props.name === "viewport") weight = -15;
  } else if (tag.tag === "link" && tag.props.rel === "preconnect") {
    weight = 20;
  } else if (tag.tag in TAG_WEIGHTS) {
    weight = TAG_WEIGHTS[tag.tag];
  }
  if (typeof priority === "string" && priority in TAG_ALIASES) {
    return weight + TAG_ALIASES[priority];
  }
  return weight;
}
const SortModifiers = [{
  prefix: "before:",
  offset: -1
}, {
  prefix: "after:",
  offset: 1
}];
const NetworkEvents = ["onload", "onerror", "onabort", "onprogress", "onloadstart"];
const ScriptNetworkEvents = ["onload", "onerror"];
const sepSub = "%separator";
function processTemplateParams(s, p, sep) {
  if (typeof s !== "string" || !s.includes("%")) return s;
  function sub(token) {
    let val;
    if (["s", "pageTitle"].includes(token)) {
      val = p.pageTitle;
    } else if (token.includes(".")) {
      val = token.split(".").reduce((acc, key) => acc ? acc[key] || void 0 : void 0, p);
    } else {
      val = p[token];
    }
    return typeof val !== "undefined" ? (val || "").replace(/"/g, '\\"') : false;
  }
  let decoded = s;
  try {
    decoded = decodeURI(s);
  } catch {}
  const tokens = (decoded.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse();
  tokens.forEach(token => {
    const re = sub(token.slice(1));
    if (typeof re === "string") {
      s = s.replace(new RegExp(`\\${token}(\\W|$)`, "g"), (_, args) => `${re}${args}`).trim();
    }
  });
  if (s.includes(sepSub)) {
    if (s.endsWith(sepSub)) s = s.slice(0, -sepSub.length).trim();
    if (s.startsWith(sepSub)) s = s.slice(sepSub.length).trim();
    s = s.replace(new RegExp(`\\${sepSub}\\s*\\${sepSub}`, "g"), sepSub);
    s = processTemplateParams(s, {
      separator: sep
    }, sep);
  }
  return s;
}

// CONCATENATED MODULE: ./node_modules/@unhead/dom/dist/index.mjs

async function renderDOMHead(head, options = {}) {
  const dom = options.document || head.resolvedOptions.document;
  if (!dom || !head.dirty) return;
  const beforeRenderCtx = {
    shouldRender: true,
    tags: []
  };
  await head.hooks.callHook("dom:beforeRender", beforeRenderCtx);
  if (!beforeRenderCtx.shouldRender) return;
  const tags = (await head.resolveTags()).map(tag => ({
    tag,
    id: HasElementTags.includes(tag.tag) ? hashTag(tag) : tag.tag,
    shouldRender: true
  }));
  let state = head._dom;
  if (!state) {
    state = {
      elMap: {
        htmlAttrs: dom.documentElement,
        bodyAttrs: dom.body
      }
    };
    for (const key of ["body", "head"]) {
      var _dom$key;
      const children = (_dom$key = dom[key]) === null || _dom$key === void 0 ? void 0 : _dom$key.children;
      const tags2 = [];
      for (const c of [...children].filter(c2 => HasElementTags.includes(c2.tagName.toLowerCase()))) {
        const t = {
          tag: c.tagName.toLowerCase(),
          props: await normaliseProps(c.getAttributeNames().reduce((props, name) => ({
            ...props,
            [name]: c.getAttribute(name)
          }), {})),
          innerHTML: c.innerHTML
        };
        let i = 1;
        let d = tagDedupeKey(t);
        while (d && tags2.find(t2 => t2._d === d)) d = `${d}:${i++}`;
        t._d = d || void 0;
        tags2.push(t);
        state.elMap[c.getAttribute("data-hid") || hashTag(t)] = c;
      }
    }
  }
  state.pendingSideEffects = {
    ...(state.sideEffects || {})
  };
  state.sideEffects = {};
  function track(id, scope, fn) {
    const k = `${id}:${scope}`;
    state.sideEffects[k] = fn;
    delete state.pendingSideEffects[k];
  }
  function trackCtx({
    id,
    $el,
    tag
  }) {
    const isAttrTag = tag.tag.endsWith("Attrs");
    state.elMap[id] = $el;
    if (!isAttrTag) {
      ["textContent", "innerHTML"].forEach(k => {
        tag[k] && tag[k] !== $el[k] && ($el[k] = tag[k]);
      });
      track(id, "el", () => {
        var _state$elMap$id;
        (_state$elMap$id = state.elMap[id]) === null || _state$elMap$id === void 0 ? void 0 : _state$elMap$id.remove();
        delete state.elMap[id];
      });
    }
    for (const [k, value] of Object.entries(tag._eventHandlers || {})) {
      if ($el.getAttribute(`data-${k}`) !== "") {
        (tag.tag === "bodyAttrs" ? dom.defaultView : $el).addEventListener(k.replace("on", ""), value.bind($el));
        $el.setAttribute(`data-${k}`, "");
      }
    }
    Object.entries(tag.props).forEach(([k, value]) => {
      const ck = `attr:${k}`;
      if (k === "class") {
        for (const c of (value || "").split(" ").filter(Boolean)) {
          isAttrTag && track(id, `${ck}:${c}`, () => $el.classList.remove(c));
          !$el.classList.contains(c) && $el.classList.add(c);
        }
      } else if (k === "style") {
        for (const c of (value || "").split(";").filter(Boolean)) {
          const [k2, ...v] = c.split(":").map(s => s.trim());
          track(id, `${ck}:${k2}`, () => {
            $el.style.removeProperty(k2);
          });
          $el.style.setProperty(k2, v.join(":"));
        }
      } else {
        $el.getAttribute(k) !== value && $el.setAttribute(k, value === true ? "" : String(value));
        isAttrTag && track(id, ck, () => $el.removeAttribute(k));
      }
    });
  }
  const pending = [];
  const frag = {
    bodyClose: void 0,
    bodyOpen: void 0,
    head: void 0
  };
  for (const ctx of tags) {
    const {
      tag,
      shouldRender,
      id
    } = ctx;
    if (!shouldRender) continue;
    if (tag.tag === "title") {
      dom.title = tag.textContent;
      continue;
    }
    ctx.$el = ctx.$el || state.elMap[id];
    if (ctx.$el) trackCtx(ctx);else HasElementTags.includes(tag.tag) && pending.push(ctx);
  }
  for (const ctx of pending) {
    const pos = ctx.tag.tagPosition || "head";
    ctx.$el = dom.createElement(ctx.tag.tag);
    trackCtx(ctx);
    frag[pos] = frag[pos] || dom.createDocumentFragment();
    frag[pos].appendChild(ctx.$el);
  }
  for (const ctx of tags) await head.hooks.callHook("dom:renderTag", ctx, dom, track);
  frag.head && dom.head.appendChild(frag.head);
  frag.bodyOpen && dom.body.insertBefore(frag.bodyOpen, dom.body.firstChild);
  frag.bodyClose && dom.body.appendChild(frag.bodyClose);
  Object.values(state.pendingSideEffects).forEach(fn => fn());
  head._dom = state;
  head.dirty = false;
  await head.hooks.callHook("dom:rendered", {
    renders: tags
  });
}
async function debouncedRenderDOMHead(head, options = {}) {
  const fn = options.delayFn || (fn2 => setTimeout(fn2, 10));
  return head._domUpdatePromise = head._domUpdatePromise || new Promise(resolve => fn(async () => {
    await renderDOMHead(head, options);
    delete head._domUpdatePromise;
    resolve();
  }));
}

// @__NO_SIDE_EFFECTS__
function DomPlugin(options) {
  return defineHeadPlugin(head => {
    var _head$resolvedOptions, _head$resolvedOptions2;
    const initialPayload = ((_head$resolvedOptions = head.resolvedOptions.document) === null || _head$resolvedOptions === void 0 ? void 0 : (_head$resolvedOptions2 = _head$resolvedOptions.head.querySelector('script[id="unhead:payload"]')) === null || _head$resolvedOptions2 === void 0 ? void 0 : _head$resolvedOptions2.innerHTML) || false;
    initialPayload && head.push(JSON.parse(initialPayload));
    return {
      mode: "client",
      hooks: {
        "entries:updated": function (head2) {
          debouncedRenderDOMHead(head2, options);
        }
      }
    };
  });
}

// CONCATENATED MODULE: ./node_modules/unhead/dist/index.mjs




const UsesMergeStrategy = ["templateParams", "htmlAttrs", "bodyAttrs"];
const DedupePlugin = defineHeadPlugin({
  hooks: {
    "tag:normalise": function ({
      tag
    }) {
      ["hid", "vmid", "key"].forEach(key => {
        if (tag.props[key]) {
          tag.key = tag.props[key];
          delete tag.props[key];
        }
      });
      const generatedKey = tagDedupeKey(tag);
      const dedupe = generatedKey || (tag.key ? `${tag.tag}:${tag.key}` : false);
      if (dedupe) tag._d = dedupe;
    },
    "tags:resolve": function (ctx) {
      const deduping = {};
      ctx.tags.forEach(tag => {
        const dedupeKey = (tag.key ? `${tag.tag}:${tag.key}` : tag._d) || tag._p;
        const dupedTag = deduping[dedupeKey];
        if (dupedTag) {
          let strategy = tag === null || tag === void 0 ? void 0 : tag.tagDuplicateStrategy;
          if (!strategy && UsesMergeStrategy.includes(tag.tag)) strategy = "merge";
          if (strategy === "merge") {
            const oldProps = dupedTag.props;
            ["class", "style"].forEach(key => {
              if (oldProps[key]) {
                if (tag.props[key]) {
                  if (key === "style" && !oldProps[key].endsWith(";")) oldProps[key] += ";";
                  tag.props[key] = `${oldProps[key]} ${tag.props[key]}`;
                } else {
                  tag.props[key] = oldProps[key];
                }
              }
            });
            deduping[dedupeKey].props = {
              ...oldProps,
              ...tag.props
            };
            return;
          } else if (tag._e === dupedTag._e) {
            dupedTag._duped = dupedTag._duped || [];
            tag._d = `${dupedTag._d}:${dupedTag._duped.length + 1}`;
            dupedTag._duped.push(tag);
            return;
          } else if (tagWeight(tag) > tagWeight(dupedTag)) {
            return;
          }
        }
        const propCount = Object.keys(tag.props).length + (tag.innerHTML ? 1 : 0) + (tag.textContent ? 1 : 0);
        if (HasElementTags.includes(tag.tag) && propCount === 0) {
          delete deduping[dedupeKey];
          return;
        }
        deduping[dedupeKey] = tag;
      });
      const newTags = [];
      Object.values(deduping).forEach(tag => {
        const dupes = tag._duped;
        delete tag._duped;
        newTags.push(tag);
        if (dupes) newTags.push(...dupes);
      });
      ctx.tags = newTags;
      ctx.tags = ctx.tags.filter(t => !(t.tag === "meta" && (t.props.name || t.props.property) && !t.props.content));
    }
  }
});
const PayloadPlugin = defineHeadPlugin({
  mode: "server",
  hooks: {
    "tags:resolve": function (ctx) {
      const payload = {};
      ctx.tags.filter(tag => ["titleTemplate", "templateParams", "title"].includes(tag.tag) && tag._m === "server").forEach(tag => {
        payload[tag.tag] = tag.tag.startsWith("title") ? tag.textContent : tag.props;
      });
      Object.keys(payload).length && ctx.tags.push({
        tag: "script",
        innerHTML: JSON.stringify(payload),
        props: {
          id: "unhead:payload",
          type: "application/json"
        }
      });
    }
  }
});
const ValidEventTags = ["script", "link", "bodyAttrs"];
const EventHandlersPlugin = defineHeadPlugin(head => ({
  hooks: {
    "tags:resolve": function (ctx) {
      for (const tag of ctx.tags.filter(t => ValidEventTags.includes(t.tag))) {
        Object.entries(tag.props).forEach(([key, value]) => {
          if (key.startsWith("on") && typeof value === "function") {
            if (head.ssr && NetworkEvents.includes(key)) tag.props[key] = `this.dataset.${key}fired = true`;else delete tag.props[key];
            tag._eventHandlers = tag._eventHandlers || {};
            tag._eventHandlers[key] = value;
          }
        });
        if (head.ssr && tag._eventHandlers && (tag.props.src || tag.props.href)) tag.key = tag.key || hashCode(tag.props.src || tag.props.href);
      }
    },
    "dom:renderTag": function ({
      $el,
      tag
    }) {
      for (const k of Object.keys(($el === null || $el === void 0 ? void 0 : $el.dataset) || {}).filter(k2 => NetworkEvents.some(e => `${e}fired` === k2))) {
        var _tag$_eventHandlers, _tag$_eventHandlers$e;
        const ek = k.replace("fired", "");
        (_tag$_eventHandlers = tag._eventHandlers) === null || _tag$_eventHandlers === void 0 ? void 0 : (_tag$_eventHandlers$e = _tag$_eventHandlers[ek]) === null || _tag$_eventHandlers$e === void 0 ? void 0 : _tag$_eventHandlers$e.call($el, new Event(ek.replace("on", "")));
      }
    }
  }
}));
const DupeableTags = ["link", "style", "script", "noscript"];
const HashKeyedPlugin = defineHeadPlugin({
  hooks: {
    "tag:normalise": ({
      tag
    }) => {
      if (tag.key && DupeableTags.includes(tag.tag)) {
        tag.props["data-hid"] = tag._h = hashCode(tag.key);
      }
    }
  }
});
const SortPlugin = defineHeadPlugin({
  hooks: {
    "tags:resolve": ctx => {
      const tagPositionForKey = key => {
        var _ctx$tags$find;
        return (_ctx$tags$find = ctx.tags.find(tag => tag._d === key)) === null || _ctx$tags$find === void 0 ? void 0 : _ctx$tags$find._p;
      };
      for (const {
        prefix,
        offset
      } of SortModifiers) {
        for (const tag of ctx.tags.filter(tag2 => typeof tag2.tagPriority === "string" && tag2.tagPriority.startsWith(prefix))) {
          const position = tagPositionForKey(tag.tagPriority.replace(prefix, ""));
          if (typeof position !== "undefined") tag._p = position + offset;
        }
      }
      ctx.tags.sort((a, b) => a._p - b._p).sort((a, b) => tagWeight(a) - tagWeight(b));
    }
  }
});
const SupportedAttrs = {
  meta: "content",
  link: "href",
  htmlAttrs: "lang"
};
const TemplateParamsPlugin = defineHeadPlugin(head => ({
  hooks: {
    "tags:resolve": ctx => {
      var _tags$find;
      const {
        tags
      } = ctx;
      const title = (_tags$find = tags.find(tag => tag.tag === "title")) === null || _tags$find === void 0 ? void 0 : _tags$find.textContent;
      const idx = tags.findIndex(tag => tag.tag === "templateParams");
      const params = idx !== -1 ? tags[idx].props : {};
      const sep = params.separator || "|";
      delete params.separator;
      params.pageTitle = processTemplateParams(params.pageTitle || title || "", params, sep);
      for (const tag of tags.filter(t => t.processTemplateParams !== false)) {
        const v = SupportedAttrs[tag.tag];
        if (v && typeof tag.props[v] === "string") {
          tag.props[v] = processTemplateParams(tag.props[v], params, sep);
        } else if (tag.processTemplateParams === true || ["titleTemplate", "title"].includes(tag.tag)) {
          ["innerHTML", "textContent"].forEach(p => {
            if (typeof tag[p] === "string") tag[p] = processTemplateParams(tag[p], params, sep);
          });
        }
      }
      head._templateParams = params;
      head._separator = sep;
      ctx.tags = tags.filter(tag => tag.tag !== "templateParams");
    }
  }
}));
const TitleTemplatePlugin = defineHeadPlugin({
  hooks: {
    "tags:resolve": ctx => {
      const {
        tags
      } = ctx;
      let titleTemplateIdx = tags.findIndex(i => i.tag === "titleTemplate");
      const titleIdx = tags.findIndex(i => i.tag === "title");
      if (titleIdx !== -1 && titleTemplateIdx !== -1) {
        const newTitle = resolveTitleTemplate(tags[titleTemplateIdx].textContent, tags[titleIdx].textContent);
        if (newTitle !== null) {
          tags[titleIdx].textContent = newTitle || tags[titleIdx].textContent;
        } else {
          delete tags[titleIdx];
        }
      } else if (titleTemplateIdx !== -1) {
        const newTitle = resolveTitleTemplate(tags[titleTemplateIdx].textContent);
        if (newTitle !== null) {
          tags[titleTemplateIdx].textContent = newTitle;
          tags[titleTemplateIdx].tag = "title";
          titleTemplateIdx = -1;
        }
      }
      if (titleTemplateIdx !== -1) {
        delete tags[titleTemplateIdx];
      }
      ctx.tags = tags.filter(Boolean);
    }
  }
});
const XSSPlugin = defineHeadPlugin({
  hooks: {
    "tags:afterResolve": function (ctx) {
      for (const tag of ctx.tags) {
        if (typeof tag.innerHTML === "string") {
          if (tag.innerHTML && ["application/ld+json", "application/json"].includes(tag.props.type)) {
            tag.innerHTML = tag.innerHTML.replace(/</g, "\\u003C");
          } else {
            tag.innerHTML = tag.innerHTML.replace(new RegExp(`</${tag.tag}`, "g"), `<\\/${tag.tag}`);
          }
        }
      }
    }
  }
});
let activeHead;
// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHeadCore(options);
  head.use(DomPlugin());
  return activeHead = head;
}
// @__NO_SIDE_EFFECTS__
function createServerHead(options = {}) {
  return activeHead = createHeadCore(options);
}
function filterMode(mode, ssr) {
  return !mode || mode === "server" && ssr || mode === "client" && !ssr;
}
function createHeadCore(options = {}) {
  const hooks = Object(external_hookable_["createHooks"])();
  hooks.addHooks(options.hooks || {});
  options.document = options.document || (IsBrowser ? document : void 0);
  const ssr = !options.document;
  const updated = () => {
    head.dirty = true;
    hooks.callHook("entries:updated", head);
  };
  let entryCount = 0;
  let entries = [];
  const plugins = [];
  const head = {
    plugins,
    dirty: false,
    resolvedOptions: options,
    hooks,
    headEntries() {
      return entries;
    },
    use(p) {
      const plugin = typeof p === "function" ? p(head) : p;
      if (!plugin.key || !plugins.some(p2 => p2.key === plugin.key)) {
        plugins.push(plugin);
        filterMode(plugin.mode, ssr) && hooks.addHooks(plugin.hooks || {});
      }
    },
    push(input, entryOptions) {
      entryOptions === null || entryOptions === void 0 ? true : delete entryOptions.head;
      const entry = {
        _i: entryCount++,
        input,
        ...entryOptions
      };
      if (filterMode(entry.mode, ssr)) {
        entries.push(entry);
        updated();
      }
      return {
        dispose() {
          entries = entries.filter(e => e._i !== entry._i);
          hooks.callHook("entries:updated", head);
          updated();
        },
        // a patch is the same as creating a new entry, just a nice DX
        patch(input2) {
          entries = entries.map(e => {
            if (e._i === entry._i) {
              e.input = entry.input = input2;
            }
            return e;
          });
          updated();
        }
      };
    },
    async resolveTags() {
      const resolveCtx = {
        tags: [],
        entries: [...entries]
      };
      await hooks.callHook("entries:resolve", resolveCtx);
      for (const entry of resolveCtx.entries) {
        const resolved = entry.resolvedInput || entry.input;
        entry.resolvedInput = await (entry.transform ? entry.transform(resolved) : resolved);
        if (entry.resolvedInput) {
          for (const tag of await normaliseEntryTags(entry)) {
            const tagCtx = {
              tag,
              entry,
              resolvedOptions: head.resolvedOptions
            };
            await hooks.callHook("tag:normalise", tagCtx);
            resolveCtx.tags.push(tagCtx.tag);
          }
        }
      }
      await hooks.callHook("tags:beforeResolve", resolveCtx);
      await hooks.callHook("tags:resolve", resolveCtx);
      await hooks.callHook("tags:afterResolve", resolveCtx);
      return resolveCtx.tags;
    },
    ssr
  };
  [DedupePlugin, PayloadPlugin, EventHandlersPlugin, HashKeyedPlugin, SortPlugin, TemplateParamsPlugin, TitleTemplatePlugin, XSSPlugin, ...((options === null || options === void 0 ? void 0 : options.plugins) || [])].forEach(p => head.use(p));
  head.hooks.callHook("init", head);
  return head;
}

// @__NO_SIDE_EFFECTS__
function HashHydrationPlugin() {
  return defineHeadPlugin({});
}
const importRe = /@import/;
// @__NO_SIDE_EFFECTS__
function CapoPlugin(options) {
  return defineHeadPlugin({
    hooks: {
      "tags:beforeResolve": function ({
        tags
      }) {
        for (const tag of tags) {
          var _tag$props$type;
          if (tag.tagPosition && tag.tagPosition !== "head") continue;
          tag.tagPriority = tag.tagPriority || tagWeight(tag);
          if (tag.tagPriority !== 100) continue;
          const isTruthy = val => val === "" || val === true;
          const isScript = tag.tag === "script";
          const isLink = tag.tag === "link";
          if (isScript && isTruthy(tag.props.async)) {
            tag.tagPriority = 30;
          } else if (tag.tag === "style" && tag.innerHTML && importRe.test(tag.innerHTML)) {
            tag.tagPriority = 40;
          } else if (isScript && tag.props.src && !isTruthy(tag.props.defer) && !isTruthy(tag.props.async) && tag.props.type !== "module" && !((_tag$props$type = tag.props.type) !== null && _tag$props$type !== void 0 && _tag$props$type.endsWith("json"))) {
            tag.tagPriority = 50;
          } else if (isLink && tag.props.rel === "stylesheet" || tag.tag === "style") {
            tag.tagPriority = 60;
          } else if (isLink && ["preload", "modulepreload"].includes(tag.props.rel)) {
            tag.tagPriority = 70;
          } else if (isScript && isTruthy(tag.props.defer) && tag.props.src && !isTruthy(tag.props.async)) {
            tag.tagPriority = 80;
          } else if (isLink && ["prefetch", "dns-prefetch", "prerender"].includes(tag.props.rel)) {
            tag.tagPriority = 90;
          }
        }
        (options === null || options === void 0 ? void 0 : options.track) && tags.push({
          tag: "htmlAttrs",
          props: {
            "data-capo": ""
          }
        });
      }
    }
  });
}
const unheadComposablesImports = [{
  from: "unhead",
  imports: composableNames
}];
function getActiveHead() {
  return activeHead;
}
function useHead(input, options = {}) {
  const head = options.head || getActiveHead();
  return head === null || head === void 0 ? void 0 : head.push(input, options);
}
function useHeadSafe(input, options = {}) {
  return useHead(input, {
    ...(options || {}),
    transform: whitelistSafeInput
  });
}
function useServerHead(input, options = {}) {
  return useHead(input, {
    ...options,
    mode: "server"
  });
}
function useServerHeadSafe(input, options = {}) {
  return useHeadSafe(input, {
    ...options,
    mode: "server"
  });
}
function useSeoMeta(input, options) {
  const {
    title,
    titleTemplate,
    ...meta
  } = input;
  return useHead({
    title,
    titleTemplate,
    // we need to input the meta so the reactivity will be resolved
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t) {
      const meta2 = unpackMeta({
        ...t._flatMeta
      });
      delete t._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t,
        meta: meta2
      };
    }
  });
}
function useServerSeoMeta(input, options) {
  return useSeoMeta(input, {
    ...(options || {}),
    mode: "server"
  });
}
function useScript(_input, _options) {
  var _head$_scripts, _options$beforeInit, _options$use;
  const input = typeof _input === "string" ? {
    src: _input
  } : _input;
  const options = _options || {};
  const head = options.head || getActiveHead();
  if (!head) throw new Error("Missing Unhead context.");
  const id = input.key || hashCode(input.src || (typeof input.innerHTML === "string" ? input.innerHTML : ""));
  if ((_head$_scripts = head._scripts) !== null && _head$_scripts !== void 0 && _head$_scripts[id]) return head._scripts[id];
  (_options$beforeInit = options.beforeInit) === null || _options$beforeInit === void 0 ? void 0 : _options$beforeInit.call(options);
  const syncStatus = s => {
    script.status = s;
    head.hooks.callHook(`script:updated`, hookCtx);
  };
  const trigger = typeof options.trigger !== "undefined" ? options.trigger : "client";
  ScriptNetworkEvents.forEach(fn => {
    const _fn = typeof input[fn] === "function" ? input[fn].bind(options.eventContext) : null;
    input[fn] = e => {
      syncStatus(fn === "onload" ? "loaded" : fn === "onerror" ? "error" : "loading");
      _fn === null || _fn === void 0 ? void 0 : _fn(e);
    };
  });
  const proxy = {
    instance: !head.ssr && (options === null || options === void 0 ? void 0 : (_options$use = options.use) === null || _options$use === void 0 ? void 0 : _options$use.call(options)) || {}
  };
  const loadPromise = new Promise((resolve, reject) => {
    const emit = api => requestAnimationFrame(() => resolve(api));
    const _ = head.hooks.hook("script:updated", ({
      script: script2
    }) => {
      if (script2.id === id && (script2.status === "loaded" || script2.status === "error")) {
        if (script2.status === "loaded") {
          if (typeof options.use === "function") {
            const api = options.use();
            api && emit(api);
          } else {
            emit({});
          }
        } else if (script2.status === "error") {
          reject(new Error(`Failed to load script: ${input.src}`));
        }
        _();
      }
    });
  }).then(api => proxy.instance = api);
  const script = {
    id,
    status: "awaitingLoad",
    remove() {
      if (script.entry) {
        var _head$_scripts2;
        script.entry.dispose();
        syncStatus("removed");
        (_head$_scripts2 = head._scripts) === null || _head$_scripts2 === void 0 ? true : delete _head$_scripts2[id];
        return true;
      }
      return false;
    },
    load() {
      if (!script.entry) {
        syncStatus("loading");
        const defaults = {
          defer: true,
          fetchpriority: "low"
        };
        if (input.src && (input.src.startsWith("http") || input.src.startsWith("//"))) {
          defaults.crossorigin = "anonymous";
          defaults.referrerpolicy = "no-referrer";
        }
        script.entry = head.push({
          script: [{
            ...defaults,
            ...input,
            key: `script.${id}`
          }]
        }, options);
      }
      return loadPromise;
    }
  };
  const hookCtx = {
    script
  };
  if (trigger === "client" && !head.ssr || trigger === "server" && head.ssr) script.load();else if (trigger instanceof Promise) trigger.then(script.load);else if (typeof trigger === "function") trigger(async () => script.load());
  proxy.$script = Object.assign(loadPromise, script);
  const instance = new Proxy(proxy, {
    get({
      instance: _
    }, k) {
      var _options$stub;
      const stub = (_options$stub = options.stub) === null || _options$stub === void 0 ? void 0 : _options$stub.call(options, {
        script: proxy.$script,
        fn: k
      });
      if (stub) return stub;
      if (k === "$script") return proxy.$script;
      const exists = _ && k in _ && typeof _[k] !== "undefined";
      head.hooks.callHook("script:instance-fn", {
        script,
        fn: k,
        exists
      });
      return exists ? Reflect.get(_, k) : (...args) => loadPromise.then(api => {
        const _k = Reflect.get(api, k);
        return typeof _k === "function" ? Reflect.apply(api[k], api, args) : _k;
      });
    }
  });
  head._scripts = Object.assign(head._scripts || {}, {
    [id]: instance
  });
  return instance;
}

// CONCATENATED MODULE: ./node_modules/@unhead/vue/dist/shared/vue.cf295fb1.mjs



const Vue3 = vue_runtime["y" /* version */].startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : Object(vue_runtime["x" /* unref */])(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise) return ref;
  const root = resolveUnref(ref);
  if (!ref || !root) return root;
  if (Array.isArray(root)) return root.map(r => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(Object.entries(root).map(([k, v]) => {
      if (k === "titleTemplate" || k.startsWith("on")) return [k, Object(vue_runtime["x" /* unref */])(v)];
      return [k, resolveUnrefHeadInput(v, k)];
    }));
  }
  return root;
}
const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function (ctx) {
      for (const entry of ctx.entries) entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});
const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function vue_cf295fb1_createServerHead(options = {}) {
  const head = createServerHead(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}
function vue_cf295fb1_createHead(options = {}) {
  options.domDelayFn = options.domDelayFn || (fn => Object(vue_runtime["j" /* nextTick */])(() => setTimeout(() => fn(), 0)));
  const head = createHead(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey] = handler;
}
function injectHead() {
  if (globalKey in _global) {
    return _global[globalKey]();
  }
  const head = Object(vue_runtime["g" /* inject */])(headSymbol);
  if (!head && "production" !== "production") console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}

// CONCATENATED MODULE: ./node_modules/@unhead/vue/dist/shared/vue.f36acd1f.mjs


function vue_f36acd1f_useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr) return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = Object(vue_runtime["s" /* ref */])(false);
  const resolvedInput = Object(vue_runtime["s" /* ref */])({});
  Object(vue_runtime["A" /* watchEffect */])(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  Object(vue_runtime["z" /* watch */])(resolvedInput, e => {
    entry.patch(e);
  });
  const vm = Object(vue_runtime["e" /* getCurrentInstance */])();
  if (vm) {
    Object(vue_runtime["l" /* onBeforeUnmount */])(() => {
      entry.dispose();
    });
    Object(vue_runtime["m" /* onDeactivated */])(() => {
      deactivated.value = true;
    });
    Object(vue_runtime["k" /* onActivated */])(() => {
      deactivated.value = false;
    });
  }
  return entry;
}

// CONCATENATED MODULE: ./node_modules/@unhead/vue/dist/index.mjs







const VueHeadMixin = {
  created() {
    let source = false;
    if (Vue3) {
      const instance = Object(vue_runtime["e" /* getCurrentInstance */])();
      if (!instance) return;
      const options = instance.type;
      if (!options || !("head" in options)) return;
      source = typeof options.head === "function" ? () => options.head.call(instance.proxy) : options.head;
    } else {
      const head = this.$options.head;
      if (head) {
        source = typeof head === "function" ? () => head.call(this) : head;
      }
    }
    source && vue_f36acd1f_useHead(source);
  }
};
const Vue2ProvideUnheadPlugin = function (_Vue, head) {
  _Vue.mixin({
    beforeCreate() {
      const options = this.$options;
      const origProvide = options.provide;
      options.provide = function () {
        let origProvideResult;
        if (typeof origProvide === "function") origProvideResult = origProvide.call(this);else origProvideResult = origProvide || {};
        return {
          ...origProvideResult,
          [headSymbol]: head
        };
      };
    }
  });
};
const coreComposableNames = ["injectHead"];
const unheadVueComposablesImports = {
  "@unhead/vue": [...coreComposableNames, ...composableNames]
};
function dist_useHeadSafe(input, options = {}) {
  return vue_f36acd1f_useHead(input, {
    ...options,
    transform: whitelistSafeInput
  });
}
function dist_useSeoMeta(input, options) {
  const {
    title,
    titleTemplate,
    ...meta
  } = input;
  return vue_f36acd1f_useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t) {
      const meta2 = unpackMeta({
        ...t._flatMeta
      });
      delete t._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t,
        meta: meta2
      };
    }
  });
}
function dist_useServerHead(input, options = {}) {
  const head = options.head || injectHead();
  delete options.head;
  if (head) return head.push(input, {
    ...options,
    mode: "server"
  });
}
function dist_useServerHeadSafe(input, options = {}) {
  return dist_useHeadSafe(input, {
    ...options,
    mode: "server"
  });
}
function dist_useServerSeoMeta(input, options) {
  return dist_useSeoMeta(input, {
    ...(options || {}),
    mode: "server"
  });
}
function dist_useScript(_input, _options) {
  const input = typeof _input === "string" ? {
    src: _input
  } : _input;
  const head = injectHead();
  const options = _options || {};
  options.head = head;
  options.eventContext = Object(vue_runtime["e" /* getCurrentInstance */])();
  const status = Object(vue_runtime["s" /* ref */])("awaitingLoad");
  const stubOptions = options.stub;
  options.stub = ({
    script,
    fn
  }) => {
    script.status = status;
    if (fn === "$script") return script;
    return stubOptions === null || stubOptions === void 0 ? void 0 : stubOptions({
      script,
      fn
    });
  };
  let instance;
  const _ = head.hooks.hook("script:updated", ({
    script
  }) => {
    if (instance && script.id === instance.$script.id) {
      status.value = script.status;
      script.status === "removed" && _();
    }
  });
  const scope = Object(vue_runtime["e" /* getCurrentInstance */])();
  if (scope && !options.trigger) options.trigger = vue_runtime["n" /* onMounted */];
  instance = useScript(input, options);
  return instance;
}

// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/composables/component.mjs


const defineNuxtComponent = function defineNuxtComponent2(...args) {
  const [options, key] = args;
  const {
    setup,
    head,
    ...opts
  } = options;
  if (!setup && !options.asyncData && !options.head) {
    return {
      ...options
    };
  }
  return {
    _fetchKeyBase: key,
    ...opts,
    setup(props, ctx) {
      const nuxtApp = Object(runtime_nuxt["d" /* useNuxtApp */])();
      const res = setup ? Object(runtime_nuxt["a" /* callWithNuxt */])(nuxtApp, setup, [props, ctx]) : {};
      if (options.head) {
        const nuxtApp2 = Object(runtime_nuxt["d" /* useNuxtApp */])();
        vue_f36acd1f_useHead(typeof options.head === "function" ? () => options.head(nuxtApp2) : options.head);
      }
      return res;
    }
  };
};
// EXTERNAL MODULE: ./node_modules/h3/dist/index.mjs
var dist = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vue-router/composables.mjs
/*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */


// dev only warn if no current instance

function throwNoCurrentInstance(method) {
  if (!Object(vue_runtime["e" /* getCurrentInstance */])()) {
    throw new Error("[vue-router]: Missing current instance. " + method + "() must be called inside <script setup> or setup().");
  }
}
function useRouter() {
  if (false) {}
  return Object(vue_runtime["e" /* getCurrentInstance */])().proxy.$root.$router;
}
function useRoute() {
  if (false) {}
  var root = Object(vue_runtime["e" /* getCurrentInstance */])().proxy.$root;
  if (!root._$route) {
    var route = Object(vue_runtime["d" /* effectScope */])(true).run(function () {
      return Object(vue_runtime["u" /* shallowReactive */])(Object.assign({}, root.$router.currentRoute));
    });
    root._$route = route;
    root.$router.afterEach(function (to) {
      Object.assign(route, to);
    });
  }
  return root._$route;
}
function onBeforeRouteUpdate(guard) {
  if (false) {}
  return useFilteredGuard(guard, isUpdateNavigation);
}
function isUpdateNavigation(to, from, depth) {
  var toMatched = to.matched;
  var fromMatched = from.matched;
  return toMatched.length >= depth && toMatched.slice(0, depth + 1).every(function (record, i) {
    return record === fromMatched[i];
  });
}
function isLeaveNavigation(to, from, depth) {
  var toMatched = to.matched;
  var fromMatched = from.matched;
  return toMatched.length < depth || toMatched[depth] !== fromMatched[depth];
}
function onBeforeRouteLeave(guard) {
  if (false) {}
  return useFilteredGuard(guard, isLeaveNavigation);
}
var composables_noop = function () {};
function useFilteredGuard(guard, fn) {
  var instance = Object(vue_runtime["e" /* getCurrentInstance */])();
  var router = useRouter();
  var target = instance.proxy;
  // find the nearest RouterView to know the depth
  while (target && target.$vnode && target.$vnode.data && target.$vnode.data.routerViewDepth == null) {
    target = target.$parent;
  }
  var depth = target && target.$vnode && target.$vnode.data ? target.$vnode.data.routerViewDepth : null;
  if (depth != null) {
    var removeGuard = router.beforeEach(function (to, from, next) {
      return fn(to, from, depth) ? guard(to, from, next) : next();
    });
    Object(vue_runtime["q" /* onUnmounted */])(removeGuard);
    return removeGuard;
  }
  return composables_noop;
}

/*  */

function composables_guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return;
  }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) {
    return;
  }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) {
    return;
  }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) {
      return;
    }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}
function includesParams(outer, inner) {
  var loop = function (key) {
    var innerValue = inner[key];
    var outerValue = outer[key];
    if (typeof innerValue === 'string') {
      if (innerValue !== outerValue) {
        return {
          v: false
        };
      }
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some(function (value, i) {
        return value !== outerValue[i];
      })) {
        return {
          v: false
        };
      }
    }
  };
  for (var key in inner) {
    var returned = loop(key);
    if (returned) return returned.v;
  }
  return true;
}

// helpers from vue router 4

function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) ? a.length === b.length && a.every(function (value, i) {
    return value === b[i];
  }) : a.length === 1 && a[0] === b;
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (var key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
function useLink(props) {
  if (false) {}
  var router = useRouter();
  var currentRoute = useRoute();
  var resolvedRoute = Object(vue_runtime["a" /* computed */])(function () {
    return router.resolve(Object(vue_runtime["x" /* unref */])(props.to), currentRoute);
  });
  var activeRecordIndex = Object(vue_runtime["a" /* computed */])(function () {
    var route = resolvedRoute.value.route;
    var matched = route.matched;
    var length = matched.length;
    var routeMatched = matched[length - 1];
    var currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length) {
      return -1;
    }
    var index = currentMatched.indexOf(routeMatched);
    if (index > -1) {
      return index;
    }
    // possible parent record
    var parentRecord = currentMatched[currentMatched.length - 2];
    return (
      // we are dealing with nested routes
      length > 1 &&
      // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      parentRecord && parentRecord === routeMatched.parent
    );
  });
  var isActive = Object(vue_runtime["a" /* computed */])(function () {
    return activeRecordIndex.value > -1 && includesParams(currentRoute.params, resolvedRoute.value.route.params);
  });
  var isExactActive = Object(vue_runtime["a" /* computed */])(function () {
    return activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, resolvedRoute.value.route.params);
  });
  var navigate = function (e) {
    var href = resolvedRoute.value.route;
    if (composables_guardEvent(e)) {
      return props.replace ? router.replace(href) : router.push(href);
    }
    return Promise.resolve();
  };
  return {
    href: Object(vue_runtime["a" /* computed */])(function () {
      return resolvedRoute.value.href;
    }),
    route: Object(vue_runtime["a" /* computed */])(function () {
      return resolvedRoute.value.route;
    }),
    isExactActive: isExactActive,
    isActive: isActive,
    navigate: navigate
  };
}

// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/composables/error.mjs



const useError = () => Object(vue_runtime["w" /* toRef */])(Object(runtime_nuxt["d" /* useNuxtApp */])().payload, "error");
const showError = _err => {
  const err = createError(_err);
  try {
    const nuxtApp = Object(runtime_nuxt["d" /* useNuxtApp */])();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const throwError = showError;
const clearError = async (options = {}) => {
  const nuxtApp = Object(runtime_nuxt["d" /* useNuxtApp */])();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
const isNuxtError = err => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = err => {
  const _err = Object(dist["a" /* createError */])(err);
  _err.__nuxt_error = true;
  return _err;
};
// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/composables/router.mjs






const router_useRouter = () => {
  var _useNuxtApp;
  if (Object(vue_runtime["e" /* getCurrentInstance */])()) {
    return useRouter();
  }
  return (_useNuxtApp = Object(runtime_nuxt["d" /* useNuxtApp */])()) === null || _useNuxtApp === void 0 ? void 0 : _useNuxtApp.nuxt2Context.app.router;
};
const router_useRoute = () => {
  if (Object(vue_runtime["e" /* getCurrentInstance */])()) {
    return useRoute();
  }
  const nuxtApp = Object(runtime_nuxt["d" /* useNuxtApp */])();
  if (!nuxtApp._route) {
    Object.defineProperty(nuxtApp, "__route", {
      get: () => nuxtApp.nuxt2Context.app.context.route
    });
    nuxtApp._route = Object(vue_runtime["r" /* reactive */])(nuxtApp.__route);
    const router = router_useRouter();
    router.afterEach(route => Object.assign(nuxtApp._route, route));
  }
  return nuxtApp._route;
};
function convertToLegacyMiddleware(middleware) {
  return async ctx => {
    ctx.$_nuxtApp._processingMiddleware = true;
    const result = await Object(runtime_nuxt["a" /* callWithNuxt */])(ctx.$_nuxtApp, middleware, [ctx.route, ctx.from]);
    delete ctx.$_nuxtApp._processingMiddleware;
    if (result instanceof Error) {
      return ctx.error(result);
    }
    if (result) {
      return ctx.redirect(result);
    }
    return result;
  };
}
const isProcessingMiddleware = () => {
  try {
    if (Object(runtime_nuxt["d" /* useNuxtApp */])()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = Object(external_ufo_["hasProtocol"])(toPath, true);
  if (isExternal && !(options !== null && options !== void 0 && options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && Object(external_ufo_["parseURL"])(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  if (false) {}
  const router = router_useRouter();
  if (true) {
    const nuxtApp = Object(runtime_nuxt["d" /* useNuxtApp */])();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : Object(external_ufo_["joinURL"])(Object(runtime_nuxt["e" /* useRuntimeConfig */])().app.baseURL, router.resolve(to).resolved.fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => Object(dist["h" /* sendRedirect */])(nuxtApp.ssrContext.event, redirectLocation, (options === null || options === void 0 ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options !== null && options !== void 0 && options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return options !== null && options !== void 0 && options.replace ? router.replace(to) : router.push(to);
};
const abortNavigation = err => {
  if (false) {}
  if (!err) {
    return false;
  }
  err = createError(err);
  if (err.fatal) {
    const nuxtApp = Object(runtime_nuxt["d" /* useNuxtApp */])();
    Object(runtime_nuxt["a" /* callWithNuxt */])(nuxtApp, showError, [err]);
  }
  throw err;
};
const defineNuxtRouteMiddleware = middleware => convertToLegacyMiddleware(middleware);
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = Object(runtime_nuxt["d" /* useNuxtApp */])();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = convertToLegacyMiddleware(middleware);
  }
};
// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/composables/state.mjs


const useState = (key, init) => {
  const nuxtApp = Object(runtime_nuxt["d" /* useNuxtApp */])();
  if (!nuxtApp.payload.useState) {
    nuxtApp.payload.useState = {};
  }
  if (!Object(vue_runtime["h" /* isReactive */])(nuxtApp.payload.useState)) {
    nuxtApp.payload.useState = Object(vue_runtime["r" /* reactive */])(nuxtApp.payload.useState);
  }
  if (!(key in nuxtApp.payload.useState)) {
    Object(vue_runtime["t" /* set */])(nuxtApp.payload.useState, key, void 0);
  }
  const state = Object(vue_runtime["w" /* toRef */])(nuxtApp.payload.useState, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/composables/asyncData.mjs



const isDefer = dedupe => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _options$server, _options$default, _options$getCachedDat, _options$lazy, _options$immediate, _options$deep, _options$dedupe;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  const nuxt = Object(runtime_nuxt["d" /* useNuxtApp */])();
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  options.server = (_options$server = options.server) !== null && _options$server !== void 0 ? _options$server : true;
  options.default = (_options$default = options.default) !== null && _options$default !== void 0 ? _options$default : getDefault;
  options.getCachedData = (_options$getCachedDat = options.getCachedData) !== null && _options$getCachedDat !== void 0 ? _options$getCachedDat : getDefaultCachedData;
  const hasCachedData = () => options.getCachedData(key, nuxt) != null;
  options.lazy = (_options$lazy = options.lazy) !== null && _options$lazy !== void 0 ? _options$lazy : false;
  options.immediate = (_options$immediate = options.immediate) !== null && _options$immediate !== void 0 ? _options$immediate : true;
  options.deep = (_options$deep = options.deep) !== null && _options$deep !== void 0 ? _options$deep : false;
  options.dedupe = (_options$dedupe = options.dedupe) !== null && _options$dedupe !== void 0 ? _options$dedupe : "cancel";
  if (false) {}
  if (!nuxt._asyncData[key] || !options.immediate) {
    var _nuxt$payload$_errors, _options$getCachedDat2;
    nuxt.payload._errors[key] = (_nuxt$payload$_errors = nuxt.payload._errors[key]) !== null && _nuxt$payload$_errors !== void 0 ? _nuxt$payload$_errors : null;
    const _ref = options.deep ? vue_runtime["s" /* ref */] : vue_runtime["v" /* shallowRef */];
    nuxt._asyncData[key] = {
      data: _ref((_options$getCachedDat2 = options.getCachedData(key, nuxt)) !== null && _options$getCachedDat2 !== void 0 ? _options$getCachedDat2 : options.default()),
      pending: Object(vue_runtime["s" /* ref */])(!hasCachedData()),
      error: Object(vue_runtime["w" /* toRef */])(nuxt.payload._errors, key),
      status: Object(vue_runtime["s" /* ref */])("idle")
    };
  }
  const asyncData = {
    ...nuxt._asyncData[key]
  };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      var _opts$dedupe;
      if (isDefer((_opts$dedupe = opts.dedupe) !== null && _opts$dedupe !== void 0 ? _opts$dedupe : options.dedupe)) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key, nuxt));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise((resolve, reject) => {
      try {
        resolve(handler(nuxt));
      } catch (err) {
        reject(err);
      }
    }).then(async _result => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = asyncData_pick(result, options.pick);
      }
      nuxt.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch(error => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = Object(vue_runtime["x" /* unref */])(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({
    _initial: true
  });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if ( true && fetchOnServer && options.immediate) {
    const promise = initialFetch();
    Object(vue_runtime["p" /* onServerPrefetch */])(() => promise);
  }
  if (false) {}
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function useLazyAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [key, handler, options] = args;
  return useAsyncData(key, handler, {
    ...options,
    lazy: true
  }, null);
}
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return Object(runtime_nuxt["d" /* useNuxtApp */])().callHook("app:data:refresh", _keys);
}
function asyncData_pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
// EXTERNAL MODULE: ./node_modules/ohash/dist/index.mjs
var ohash_dist = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@nuxt/bridge/dist/runtime/composables/ssr.mjs
var composables_ssr = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/composables/fetch.mjs




function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = Object(vue_runtime["a" /* computed */])(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return toValue(r);
  });
  const _key = opts.key || Object(ohash_dist["a" /* hash */])([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && _request.value[0] === "/" && _request.value[1] === "/") {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = Object(vue_runtime["r" /* reactive */])({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...(watch || [])]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _controller, _controller$abort;
    (_controller = controller) === null || _controller === void 0 ? void 0 : (_controller$abort = _controller.abort) === null || _controller$abort === void 0 ? void 0 : _controller$abort.call(_controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    if (timeoutLength) {
      setTimeout(() => controller.abort(), timeoutLength);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if ( true && !opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = Object(composables_ssr["b" /* useRequestFetch */])();
      }
    }
    return _$fetch(_request.value, {
      signal: controller.signal,
      ..._fetchOptions
    });
  }, _asyncDataOptions);
  return asyncData;
}
function useLazyFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  return useFetch(request, {
    ...opts,
    lazy: true
  },
  // @ts-expect-error we pass an extra argument with the resolved auto-key to prevent another from being injected
  autoKey);
}
function toValue(r) {
  return typeof r === "function" ? r() : Object(vue_runtime["x" /* unref */])(r);
}
function generateOptionSegments(opts) {
  var _toValue;
  const segments = [((_toValue = toValue(opts.method)) === null || _toValue === void 0 ? void 0 : _toValue.toUpperCase()) || "GET", toValue(opts.baseURL)];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
// EXTERNAL MODULE: external "cookie-es"
var external_cookie_es_ = __webpack_require__(5);

// EXTERNAL MODULE: external "destr"
var external_destr_ = __webpack_require__(13);
var external_destr_default = /*#__PURE__*/__webpack_require__.n(external_destr_);

// EXTERNAL MODULE: external "klona"
var external_klona_ = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/composables/cookie.mjs








const CookieDefaults = {
  path: "/",
  watch: true,
  decode: val => external_destr_default()(decodeURIComponent(val)),
  encode: val => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _cookies$name, _opts$default;
  const opts = {
    ...CookieDefaults,
    ..._opts
  };
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = Object(external_klona_["klona"])(hasExpired ? void 0 : (_cookies$name = cookies[name]) !== null && _cookies$name !== void 0 ? _cookies$name : (_opts$default = opts.default) === null || _opts$default === void 0 ? void 0 : _opts$default.call(opts));
  const cookie =  false ? undefined : Object(vue_runtime["s" /* ref */])(cookieValue);
  if (false) {}
  if (false) {} else if (true) {
    const nuxtApp = Object(runtime_nuxt["d" /* useNuxtApp */])();
    const writeFinalCookieValue = () => {
      if (opts.readonly || Object(ohash_dist["b" /* isEqual */])(cookie.value, cookies[name])) {
        return;
      }
      writeServerCookie(Object(composables_ssr["a" /* useRequestEvent */])(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  if (true) {
    return Object(external_cookie_es_["parse"])(Object(dist["e" /* getRequestHeader */])(Object(composables_ssr["a" /* useRequestEvent */])(), "cookie") || "", opts);
  } else {}
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return Object(external_cookie_es_["serialize"])(name, value, {
      ...opts,
      maxAge: -1
    });
  }
  return Object(external_cookie_es_["serialize"])(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {}
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return Object(dist["i" /* setCookie */])(event, name, value, opts);
    }
    if (Object(dist["d" /* getCookie */])(event, name) !== void 0) {
      return Object(dist["c" /* deleteCookie */])(event, name, opts);
    }
  }
}
const MAX_TIMEOUT_DELAY = 2147483647;
function cookieRef(value, delay, shouldWatch) {
  let timeout;
  let unsubscribe;
  let elapsed = 0;
  const internalRef = shouldWatch ? Object(vue_runtime["s" /* ref */])(value) : {
    value
  };
  if (Object(vue_runtime["f" /* getCurrentScope */])()) {
    Object(vue_runtime["o" /* onScopeDispose */])(() => {
      var _unsubscribe;
      (_unsubscribe = unsubscribe) === null || _unsubscribe === void 0 ? void 0 : _unsubscribe();
      clearTimeout(timeout);
    });
  }
  return Object(vue_runtime["b" /* customRef */])((track, trigger) => {
    if (shouldWatch) {
      unsubscribe = Object(vue_runtime["z" /* watch */])(internalRef, trigger);
    }
    function createExpirationTimeout() {
      clearTimeout(timeout);
      const timeRemaining = delay - elapsed;
      const timeoutLength = timeRemaining < MAX_TIMEOUT_DELAY ? timeRemaining : MAX_TIMEOUT_DELAY;
      timeout = setTimeout(() => {
        elapsed += timeoutLength;
        if (elapsed < delay) {
          return createExpirationTimeout();
        }
        internalRef.value = void 0;
        trigger();
      }, timeoutLength);
    }
    return {
      get() {
        track();
        return internalRef.value;
      },
      set(newValue) {
        createExpirationTimeout();
        internalRef.value = newValue;
        trigger();
      }
    };
  });
}
// EXTERNAL MODULE: ./node_modules/@nuxt/bridge/dist/runtime/composables/url.mjs
var url = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/mocks.mjs
const mock = () => () => {
  throw new Error("not implemented");
};
const mocks_useAsyncData = mock();
const mocks_useFetch = mock();
const useHydration = mock();
// CONCATENATED MODULE: ./.nuxt/imports.mjs














// CONCATENATED MODULE: ./.nuxt/capi.plugin.mjs

/* harmony default export */ var capi_plugin = (Object(runtime_nuxt["b" /* defineNuxtPlugin */])(nuxtApp => {
  const _originalSetup = nuxtApp.nuxt2Context.app.setup;
  nuxtApp.nuxt2Context.app.setup = function (...args) {
    const result = _originalSetup instanceof Function ? _originalSetup(...args) : {};
    const hookResult = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup');
    if (false) {}
    return result;
  };
}));
// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/error.plugin.server.mjs
/* harmony default export */ var error_plugin_server = (ctx => {
  if (ctx.ssrContext.error) {
    ctx.error(ctx.ssrContext.error);
  }
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')
 // Source: ../node_modules/@nuxt/bridge/dist/runtime/app.plugin.mjs (mode: 'all')
 // Source: ../node_modules/@nuxt/bridge/dist/runtime/config.plugin.mjs (mode: 'all')
 // Source: ./capi.plugin.mjs (mode: 'all')
 // Source: ../node_modules/@nuxt/bridge/dist/runtime/error.plugin.server.mjs (mode: 'server')

// Component: <ClientOnly>
vue_runtime["c" /* default */].component(vue_client_only_common_default.a.name, vue_client_only_common_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
vue_runtime["c" /* default */].component(vue_no_ssr_common_default.a.name, {
  ...vue_no_ssr_common_default.a,
  render(h, ctx) {
    if (false) {}
    return vue_no_ssr_common_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
vue_runtime["c" /* default */].component(nuxt_child.name, nuxt_child);
vue_runtime["c" /* default */].component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
vue_runtime["c" /* default */].component(components_nuxt.name, components_nuxt);
Object.defineProperty(vue_runtime["c" /* default */].prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
vue_runtime["c" /* default */].use(vue_meta_common_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
async function createApp(ssrContext, config = {}) {
  const store = null;
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "htmlAttrs": {
        "lang": "de"
      },
      "bodyAttrs": {
        "tabindex": 1
      },
      "meta": [],
      "link": [],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      errPageReady: false,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        nuxt.errPageReady = false;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (vue_runtime["c" /* default */][installKey]) {
      return;
    }
    vue_runtime["c" /* default */][installKey] = true;
    // Call Vue.use() to install the plugin into vm
    vue_runtime["c" /* default */].use(() => {
      if (!Object.prototype.hasOwnProperty.call(vue_runtime["c" /* default */].prototype, key)) {
        Object.defineProperty(vue_runtime["c" /* default */].prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof app_plugin === 'function') {
    await app_plugin(app.context, inject);
  }
  if (typeof config_plugin === 'function') {
    await config_plugin(app.context, inject);
  }
  if (typeof capi_plugin === 'function') {
    await capi_plugin(app.context, inject);
  }
  if ( true && typeof error_plugin_server === 'function') {
    await error_plugin_server(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: vue_runtime["c" /* default */].component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
vue_runtime["c" /* default */].config.optionMergeStrategies.serverPrefetch = vue_runtime["c" /* default */].config.optionMergeStrategies.created;

// Fetch mixin
if (!vue_runtime["c" /* default */].__nuxt__fetch__mixin__) {
  vue_runtime["c" /* default */].mixin(fetch_server);
  vue_runtime["c" /* default */].__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
vue_runtime["c" /* default */].component(nuxt_link_server.name, nuxt_link_server);
vue_runtime["c" /* default */].component('NLink', nuxt_link_server);
const noopApp = () => new vue_runtime["c" /* default */]({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var _nuxt_server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new vue_runtime["c" /* default */](app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware["default"][name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware["default"][name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware["default"][name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware["default"][name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map