"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/appstore.tsx":
/*!****************************!*\
  !*** ./store/appstore.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_daniiltikhonov_piatnashki_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_Users_daniiltikhonov_piatnashki_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n\nclass AppStore {\n  constructor() {\n    (0,_Users_daniiltikhonov_piatnashki_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"state\", {\n      it: 'is'\n    });\n    (0,_Users_daniiltikhonov_piatnashki_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"changeState\", () => {\n      this.state = _objectSpread(_objectSpread({}, state), {}, {\n        it: \"isn't\"\n      });\n    });\n    (0,mobx__WEBPACK_IMPORTED_MODULE_1__.makeObservable)(this, {\n      state: mobx__WEBPACK_IMPORTED_MODULE_1__.observable,\n      changeState: mobx__WEBPACK_IMPORTED_MODULE_1__.action\n    });\n  }\n}\nconst appStore = new AppStore();\n/* harmony default export */ __webpack_exports__[\"default\"] = (appStore);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hcHBzdG9yZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBEO0FBRzFELE1BQU1HLFFBQVEsQ0FBQztFQUdYQyxXQUFXQSxDQUFBLEVBQUc7SUFBQUMsd0pBQUEsZ0JBRk47TUFBQ0MsRUFBRSxFQUFFO0lBQUksQ0FBQztJQUFBRCx3SkFBQSxzQkFVSixNQUFNO01BQ2hCLElBQUksQ0FBQ0UsS0FBSyxHQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FBT0QsS0FBSztRQUFFRCxFQUFFLEVBQUU7TUFBTyxFQUFDO0lBQ3hDLENBQUM7SUFSR0osb0RBQWMsQ0FBQyxJQUFJLEVBQUU7TUFDakJLLEtBQUssRUFBRVAsNENBQVU7TUFDakJTLFdBQVcsRUFBRVIsd0NBQU1BO0lBQ3ZCLENBQUMsQ0FBQztFQUNOO0FBS0o7QUFFQSxNQUFNUyxRQUFRLEdBQUcsSUFBSVAsUUFBUSxDQUFDLENBQUM7QUFDL0IsK0RBQWVPLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9hcHBzdG9yZS50c3g/NmI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhY3Rpb24sIG1ha2VPYnNlcnZhYmxlIH0gZnJvbSAnbW9ieCc7XG5cblxuY2xhc3MgQXBwU3RvcmUge1xuICAgIHN0YXRlID0ge2l0OiAnaXMnfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIG1ha2VPYnNlcnZhYmxlKHRoaXMsIHtcbiAgICAgICAgICAgIHN0YXRlOiBvYnNlcnZhYmxlLFxuICAgICAgICAgICAgY2hhbmdlU3RhdGU6IGFjdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7Li4uc3RhdGUsIGl0OiBcImlzbid0XCJ9XG4gICAgfVxufVxuXG5jb25zdCBhcHBTdG9yZSA9IG5ldyBBcHBTdG9yZSgpO1xuZXhwb3J0IGRlZmF1bHQgYXBwU3RvcmU7XG4iXSwibmFtZXMiOlsib2JzZXJ2YWJsZSIsImFjdGlvbiIsIm1ha2VPYnNlcnZhYmxlIiwiQXBwU3RvcmUiLCJjb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0eSIsIml0Iiwic3RhdGUiLCJfb2JqZWN0U3ByZWFkIiwiY2hhbmdlU3RhdGUiLCJhcHBTdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/appstore.tsx\n"));

/***/ })

});