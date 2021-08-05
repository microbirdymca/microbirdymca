webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/Hero.js":
/*!***********************************!*\
  !*** ./components/common/Hero.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Common.module.css */ "./components/common/Common.module.css");
/* harmony import */ var _Common_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Common_module_css__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\Abhilaksh Bansal\\Desktop\\MB\\mb\\components\\common\\Hero.js",
    _this = undefined;





var Hero = function Hero(_ref) {
  var img = _ref.img,
      desc = _ref.desc,
      title = _ref.title,
      blur = _ref.blur;
  console.log(blur);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
      blur: blur === 0 ? blur : 3,
      bgImage: img,
      bgImageAlt: "the cat",
      strength: 300,
      bgImageStyle: {
        height: '120%',
        width: "100%"
      },
      className: _Common_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hero,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-1",
          style: {
            fontWeight: '600'
          },
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }, _this), desc && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mx-auto mt-4 ".concat(_Common_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.desc),
          children: desc
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 34
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vSGVyby5qcyJdLCJuYW1lcyI6WyJIZXJvIiwiaW1nIiwiZGVzYyIsInRpdGxlIiwiYmx1ciIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJ3aWR0aCIsInN0eWxlcyIsImhlcm8iLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtDO0FBQUEsTUFBL0JDLEdBQStCLFFBQS9CQSxHQUErQjtBQUFBLE1BQXpCQyxJQUF5QixRQUF6QkEsSUFBeUI7QUFBQSxNQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzNDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsdURBQUQ7QUFDSSxVQUFJLEVBQUVBLElBQUksS0FBSyxDQUFULEdBQWFBLElBQWIsR0FBb0IsQ0FEOUI7QUFFSSxhQUFPLEVBQUVILEdBRmI7QUFHSSxnQkFBVSxFQUFDLFNBSGY7QUFJSSxjQUFRLEVBQUUsR0FKZDtBQUtJLGtCQUFZLEVBQUU7QUFBQ00sY0FBTSxFQUFFLE1BQVQ7QUFBa0JDLGFBQUssRUFBQztBQUF4QixPQUxsQjtBQU1JLGVBQVMsRUFBRUMseURBQU0sQ0FBQ0MsSUFOdEI7QUFBQSw2QkFRUTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLGdDQUVJO0FBQUksbUJBQVMsRUFBQyxXQUFkO0FBQTBCLGVBQUssRUFBRTtBQUFDQyxzQkFBVSxFQUFDO0FBQVosV0FBakM7QUFBQSxvQkFBc0RSO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosRUFHS0QsSUFBSSxpQkFBSTtBQUFHLG1CQUFTLHlCQUFrQk8seURBQU0sQ0FBQ1AsSUFBekIsQ0FBWjtBQUFBLG9CQUErQ0E7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFrQkgsQ0FwQkQ7O0tBQU1GLEk7QUFzQlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEwOTBmOGRiMDkyNTM4OWViZjM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhcmFsbGF4ICxCYWNrZ3JvdW5kIH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29tbW9uLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBIZXJvID0gKHsgaW1nICwgZGVzYyAsIHRpdGxlLCBibHVyIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGJsdXIpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQYXJhbGxheCBcclxuICAgICAgICAgICAgICAgIGJsdXI9e2JsdXIgPT09IDAgPyBibHVyIDogM30gXHJcbiAgICAgICAgICAgICAgICBiZ0ltYWdlPXtpbWd9XHJcbiAgICAgICAgICAgICAgICBiZ0ltYWdlQWx0PVwidGhlIGNhdFwiIFxyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGg9ezMwMH1cclxuICAgICAgICAgICAgICAgIGJnSW1hZ2VTdHlsZT17e2hlaWdodDogJzEyMCUnICwgd2lkdGg6XCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0xXCIgc3R5bGU9e3tmb250V2VpZ2h0Oic2MDAnfX0+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjICYmIDxwIGNsYXNzTmFtZT17YG14LWF1dG8gbXQtNCAke3N0eWxlcy5kZXNjfWB9ID57ZGVzY308L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==