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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carrossel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/carrossel.module.css */ \"./styles/carrossel.module.css\");\n/* harmony import */ var _styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/popup */ \"./components/popup.jsx\");\n/* harmony import */ var reactjs_popup_dist_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactjs-popup/dist/index.css */ \"./node_modules/reactjs-popup/dist/index.css\");\n/* harmony import */ var reactjs_popup_dist_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup_dist_index_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Carrossel() {\n    _s();\n    const carrossel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const getData = ()=>{\n        fetch(\"dados.json\", {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Accept\": \"application/json\"\n            }\n        }).then(function(response) {\n            console.log(response);\n            return response.json();\n        }).then(function(myJson) {\n            console.log(myJson);\n            setData(myJson);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _carrossel_current, _carrossel_current1;\n        getData();\n        setWidth(((_carrossel_current = carrossel.current) === null || _carrossel_current === void 0 ? void 0 : _carrossel_current.scrollWidth) - ((_carrossel_current1 = carrossel.current) === null || _carrossel_current1 === void 0 ? void 0 : _carrossel_current1.offsetWidth));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().background),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().carrossel),\n                    whileTap: {\n                        cursor: \"grabbing\"\n                    },\n                    ref: carrossel,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().inner),\n                        drag: \"x\",\n                        dragConstraints: {\n                            right: 0,\n                            left: -2450\n                        },\n                        children: data.map((brinde)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),\n                                        children: [\n                                            brinde.name,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                                                children: brinde.description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().details),\n                                                children: brinde.details\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().dimension),\n                                                children: brinde.dimension\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().material),\n                                                children: brinde.material\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().productionTime),\n                                                children: brinde.productionTime\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().price),\n                                                children: brinde.price\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 41\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_styles_carrossel_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                                            onClick: ()=>setView(!view),\n                                            children: \"VIEW\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, brinde.id, true, {\n                                fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 33\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_popup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                trigger: view,\n                setTrigger: setView\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\isa7ca\\\\Desktop\\\\siteBrindes\\\\components\\\\carrossel.jsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(Carrossel, \"NvcvieuZymSpmY7DAseqO4FDofE=\");\n_c = Carrossel;\nvar _c;\n$RefreshReg$(_c, \"Carrossel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b25lbnRzL2NhcnJvc3NlbC5qc3g/Y2ExNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jYXJyb3NzZWwubW9kdWxlLmNzcydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBvcHVwIGZyb20gJy4uL2NvbXBvbmVudHMvcG9wdXAnO1xyXG5pbXBvcnQgJ3JlYWN0anMtcG9wdXAvZGlzdC9pbmRleC5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fycm9zc2VsKCl7XHJcbiAgICBjb25zdCBjYXJyb3NzZWwgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YT0oKT0+e1xyXG4gICAgICAgIGZldGNoKCdkYWRvcy5qc29uJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzIDogeyBcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbihteUpzb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobXlKc29uKTtcclxuICAgICAgICAgICAgc2V0RGF0YShteUpzb24pXHJcblxyXG4gICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0ICgoKT0+e1xyXG4gICAgICAgIGdldERhdGEoKVxyXG4gICAgICAgIHNldFdpZHRoKGNhcnJvc3NlbC5jdXJyZW50Py5zY3JvbGxXaWR0aCAtIGNhcnJvc3NlbC5jdXJyZW50Py5vZmZzZXRXaWR0aClcclxuXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fycm9zc2VsfSB3aGlsZVRhcCA9IHt7Y3Vyc29yOlwiZ3JhYmJpbmdcIn19IHJlZiA9IHtjYXJyb3NzZWx9PntcclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0gZHJhZyA9IFwieFwiIGRyYWdDb25zdHJhaW50cz17e3JpZ2h0OjAsIGxlZnQ6LTI0NTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcChicmluZGU9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfWtleT17YnJpbmRlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JyaW5kZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHticmluZGUuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHticmluZGUuZGV0YWlsc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kaW1lbnNpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHticmluZGUuZGltZW5zaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1hdGVyaWFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnJpbmRlLm1hdGVyaWFsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3Rpb25UaW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnJpbmRlLnByb2R1Y3Rpb25UaW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnJpbmRlLnByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259b25DbGljayA9IHsoKSA9PiBzZXRWaWV3KCF2aWV3KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWSUVXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH08L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICB9PC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFBvcHVwIHRyaWdnZXI9e3ZpZXd9c2V0VHJpZ2dlcj17c2V0Vmlld30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwibW90aW9uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJQb3B1cCIsIkNhcnJvc3NlbCIsImNhcnJvc3NlbCIsIndpZHRoIiwic2V0V2lkdGgiLCJkYXRhIiwic2V0RGF0YSIsInZpZXciLCJzZXRWaWV3IiwiZ2V0RGF0YSIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwibXlKc29uIiwiY3VycmVudCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJiYWNrZ3JvdW5kIiwiY29udGFpbmVyIiwid2hpbGVUYXAiLCJjdXJzb3IiLCJyZWYiLCJpbm5lciIsImRyYWciLCJkcmFnQ29uc3RyYWludHMiLCJyaWdodCIsImxlZnQiLCJtYXAiLCJicmluZGUiLCJjYXJkIiwiaDEiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwiZGV0YWlscyIsImRpbWVuc2lvbiIsIm1hdGVyaWFsIiwicHJvZHVjdGlvblRpbWUiLCJwcmljZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsInRyaWdnZXIiLCJzZXRUcmlnZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/carrossel.jsx\n"));

/***/ })

});