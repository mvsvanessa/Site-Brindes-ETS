"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/carrossel.jsx":
/*!**********************************!*\
  !*** ./components/carrossel.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carrossel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/carrossel.module.css */ \"./styles/carrossel.module.css\");\n/* harmony import */ var _styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/popup */ \"./components/popup.jsx\");\n/* harmony import */ var reactjs_popup_dist_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactjs-popup/dist/index.css */ \"./node_modules/reactjs-popup/dist/index.css\");\n/* harmony import */ var reactjs_popup_dist_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup_dist_index_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Carrossel() {\n    _s();\n    const carrossel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const getData = ()=>{\n        fetch(\"dados.json\", {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Accept\": \"application/json\"\n            }\n        }).then(function(response) {\n            console.log(response);\n            return response.json();\n        }).then(function(myJson) {\n            console.log(myJson);\n            setData(myJson);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _carrossel_current, _carrossel_current1;\n        getData();\n        setWidth(((_carrossel_current = carrossel.current) === null || _carrossel_current === void 0 ? void 0 : _carrossel_current.scrollWidth) - ((_carrossel_current1 = carrossel.current) === null || _carrossel_current1 === void 0 ? void 0 : _carrossel_current1.offsetWidth));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().background),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().carrossel),\n                    whileTap: {\n                        cursor: \"grabbing\"\n                    },\n                    ref: carrossel,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().inner),\n                        drag: \"x\",\n                        dragConstraints: {\n                            right: 0,\n                            left: -2450\n                        },\n                        children: data.map((brinde)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().conteudo),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),\n                                            children: [\n                                                brinde.name,\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                                                    children: brinde.description\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().details),\n                                                    children: brinde.details\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().dimension),\n                                                    children: brinde.dimension\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().material),\n                                                    children: brinde.material\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().productionTime),\n                                                    children: brinde.productionTime\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().price),\n                                                    children: brinde.price\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().busto),\n                                                    src: brinde.urlImg,\n                                                    width: 175,\n                                                    height: 175,\n                                                    alt: brinde.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 45\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().botao),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                                            onClick: ()=>setView(!view),\n                                            children: \"VIEW\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, brinde.id, true, {\n                                fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 33\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_popup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                trigger: view,\n                setTrigger: setView\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(Carrossel, \"NvcvieuZymSpmY7DAseqO4FDofE=\");\n_c = Carrossel;\nvar _c;\n$RefreshReg$(_c, \"Carrossel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0Q7c0RBQU87Ozs7Ozs7Ozs7OzsrQkF6QjlCMkIsT0FBT29CLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWtDckUsOERBQUN0RCx5REFBS0E7Z0JBQUN1RCxTQUFTaEQ7Z0JBQUtpRCxZQUFZaEQ7Ozs7Ozs7Ozs7OztBQUc3QyxDQUFDO0dBM0V1QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJyb3NzZWwuanN4P2NhMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY2Fycm9zc2VsLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQb3B1cCBmcm9tICcuLi9jb21wb25lbnRzL3BvcHVwJztcclxuaW1wb3J0ICdyZWFjdGpzLXBvcHVwL2Rpc3QvaW5kZXguY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnJvc3NlbCgpe1xyXG4gICAgY29uc3QgY2Fycm9zc2VsID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2RhdGEsc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGdldERhdGE9KCk9PntcclxuICAgICAgICBmZXRjaCgnZGFkb3MuanNvbicsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVycyA6IHsgXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24obXlKc29uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG15SnNvbik7XHJcbiAgICAgICAgICAgIHNldERhdGEobXlKc29uKVxyXG5cclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCAoKCk9PntcclxuICAgICAgICBnZXREYXRhKClcclxuICAgICAgICBzZXRXaWR0aChjYXJyb3NzZWwuY3VycmVudD8uc2Nyb2xsV2lkdGggLSBjYXJyb3NzZWwuY3VycmVudD8ub2Zmc2V0V2lkdGgpXHJcblxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnJvc3NlbH0gd2hpbGVUYXAgPSB7e2N1cnNvcjpcImdyYWJiaW5nXCJ9fSByZWYgPSB7Y2Fycm9zc2VsfT57XHJcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9IGRyYWcgPSBcInhcIiBkcmFnQ29uc3RyYWludHM9e3tyaWdodDowLCBsZWZ0Oi0yNDUwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoYnJpbmRlPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1rZXk9e2JyaW5kZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGV1ZG99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnJpbmRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JyaW5kZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JyaW5kZS5kZXRhaWxzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRpbWVuc2lvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JyaW5kZS5kaW1lbnNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWF0ZXJpYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHticmluZGUubWF0ZXJpYWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdGlvblRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHticmluZGUucHJvZHVjdGlvblRpbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHticmluZGUucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5idXN0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2JyaW5kZS51cmxJbWd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXticmluZGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdGFvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259b25DbGljayA9IHsoKSA9PiBzZXRWaWV3KCF2aWV3KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWSUVXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH08L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICB9PC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFBvcHVwIHRyaWdnZXI9e3ZpZXd9c2V0VHJpZ2dlcj17c2V0Vmlld30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwibW90aW9uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJQb3B1cCIsIkNhcnJvc3NlbCIsImNhcnJvc3NlbCIsIndpZHRoIiwic2V0V2lkdGgiLCJkYXRhIiwic2V0RGF0YSIsInZpZXciLCJzZXRWaWV3IiwiZ2V0RGF0YSIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwibXlKc29uIiwiY3VycmVudCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJiYWNrZ3JvdW5kIiwiY29udGFpbmVyIiwid2hpbGVUYXAiLCJjdXJzb3IiLCJyZWYiLCJpbm5lciIsImRyYWciLCJkcmFnQ29uc3RyYWludHMiLCJyaWdodCIsImxlZnQiLCJtYXAiLCJicmluZGUiLCJjYXJkIiwiY29udGV1ZG8iLCJoMSIsIm5hbWUiLCJwIiwiZGVzY3JpcHRpb24iLCJkZXRhaWxzIiwiZGltZW5zaW9uIiwibWF0ZXJpYWwiLCJwcm9kdWN0aW9uVGltZSIsInByaWNlIiwiYnVzdG8iLCJzcmMiLCJ1cmxJbWciLCJoZWlnaHQiLCJhbHQiLCJib3RhbyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsInRyaWdnZXIiLCJzZXRUcmlnZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/carrossel.jsx\n"));

/***/ })

});