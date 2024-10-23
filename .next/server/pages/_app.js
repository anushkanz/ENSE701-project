/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/nav/Nav.module.scss":
/*!********************************************!*\
  !*** ./src/components/nav/Nav.module.scss ***!
  \********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"navbar\": \"Nav_navbar__hnj8D\",\n\t\"hide\": \"Nav_hide__6rYYD\",\n\t\"navitem\": \"Nav_navitem__yrdfV\",\n\t\"clickable\": \"Nav_clickable__NENG9\",\n\t\"dropdown_container\": \"Nav_dropdown_container__Jmpxo\",\n\t\"dropdown\": \"Nav_dropdown__QUCH3\",\n\t\"end\": \"Nav_end__uK_pl\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXYvTmF2Lm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9uYXYvTmF2Lm1vZHVsZS5zY3NzPzZlYWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2YmFyXCI6IFwiTmF2X25hdmJhcl9faG5qOERcIixcblx0XCJoaWRlXCI6IFwiTmF2X2hpZGVfXzZyWVlEXCIsXG5cdFwibmF2aXRlbVwiOiBcIk5hdl9uYXZpdGVtX195cmRmVlwiLFxuXHRcImNsaWNrYWJsZVwiOiBcIk5hdl9jbGlja2FibGVfX05FTkc5XCIsXG5cdFwiZHJvcGRvd25fY29udGFpbmVyXCI6IFwiTmF2X2Ryb3Bkb3duX2NvbnRhaW5lcl9fSm1weG9cIixcblx0XCJkcm9wZG93blwiOiBcIk5hdl9kcm9wZG93bl9fUVVDSDNcIixcblx0XCJlbmRcIjogXCJOYXZfZW5kX191S19wbFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/nav/Nav.module.scss\n");

/***/ }),

/***/ "./src/components/PopulatedNavBar.tsx":
/*!********************************************!*\
  !*** ./src/components/PopulatedNavBar.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nav_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/NavBar */ \"./src/components/nav/NavBar.tsx\");\n/* harmony import */ var _nav_NavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/NavItem */ \"./src/components/nav/NavItem.tsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/**\n * ENSE701 2024 S02\n * Written by Anushka Ransinghe\n * Editied by Ramona Matautia & Vishal Nirmalan\n * NavBar Code,\n * This is code for creating site wide menu,\n * This code created on as componenet\n */ //Important Libs \n\n\n\n\n\n//Create NavBar\nconst PopulatedNavBar = ()=>{\n    //Create Return\n    //Check token\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"token\");\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(token);\n        if (token) {\n            setIsActive(token);\n        }\n    }, [\n        token\n    ]);\n    return(//Start NavBar\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_NavItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: \"SPEED\"\n            }, void 0, false, {\n                fileName: \"/Users/anushkaranasinghe/Documents/Aut/ENSE701/Assignments/project/src/components/PopulatedNavBar.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_NavItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                route: \"/login\",\n                end: true,\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/anushkaranasinghe/Documents/Aut/ENSE701/Assignments/project/src/components/PopulatedNavBar.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anushkaranasinghe/Documents/Aut/ENSE701/Assignments/project/src/components/PopulatedNavBar.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined));\n};\n//Export NavBar\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopulatedNavBar);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3B1bGF0ZWROYXZCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Q0FPQyxHQUVELGlCQUFpQjs7QUFFaUI7QUFFRTtBQUNKO0FBQ1k7QUFFNUMsZUFBZTtBQUNmLE1BQU1LLGtCQUFrQjtJQUNwQixlQUFlO0lBQ2YsYUFBYTtJQUNiLE1BQU1DLFFBQVFKLHFEQUFXLENBQUM7SUFDMUIsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNOTyxRQUFRQyxHQUFHLENBQUNMO1FBQ1IsSUFBR0EsT0FBTTtZQUNMRyxZQUFZSDtRQUNoQjtJQUNSLEdBQUU7UUFBQ0E7S0FBTTtJQUVULE9BQ0ksY0FBYztrQkFDZCw4REFBQ04sbURBQU1BOzswQkFDSCw4REFBQ0Msb0RBQU9BOzBCQUFDOzs7Ozs7MEJBQ1QsOERBQUNBLG9EQUFPQTtnQkFBQ1csT0FBTTtnQkFBU0MsR0FBRzswQkFBQzs7Ozs7Ozs7Ozs7O0FBR3hDO0FBQ0EsZUFBZTtBQUNmLGlFQUFlUixlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Qb3B1bGF0ZWROYXZCYXIudHN4PzEwMmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFTlNFNzAxIDIwMjQgUzAyXG4gKiBXcml0dGVuIGJ5IEFudXNoa2EgUmFuc2luZ2hlXG4gKiBFZGl0aWVkIGJ5IFJhbW9uYSBNYXRhdXRpYSAmIFZpc2hhbCBOaXJtYWxhblxuICogTmF2QmFyIENvZGUsXG4gKiBUaGlzIGlzIGNvZGUgZm9yIGNyZWF0aW5nIHNpdGUgd2lkZSBtZW51LFxuICogVGhpcyBjb2RlIGNyZWF0ZWQgb24gYXMgY29tcG9uZW5ldFxuICovXG5cbi8vSW1wb3J0YW50IExpYnMgXG5pbXBvcnQgeyBJb01kQXJyb3dEcm9wZG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9uYXYvTmF2QmFyXCI7XG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSBcIi4vbmF2L05hdkRyb3Bkb3duXCI7XG5pbXBvcnQgTmF2SXRlbSBmcm9tIFwiLi9uYXYvTmF2SXRlbVwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy9DcmVhdGUgTmF2QmFyXG5jb25zdCBQb3B1bGF0ZWROYXZCYXIgPSAoKSA9PiB7XG4gICAgLy9DcmVhdGUgUmV0dXJuXG4gICAgLy9DaGVjayB0b2tlblxuICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJyk7XG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICBcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4pXG4gICAgICAgICAgICBpZih0b2tlbil7XG4gICAgICAgICAgICAgICAgc2V0SXNBY3RpdmUodG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgIH0sW3Rva2VuXSlcbiAgICAgICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy9TdGFydCBOYXZCYXJcbiAgICAgICAgPE5hdkJhcj5cbiAgICAgICAgICAgIDxOYXZJdGVtPlNQRUVEPC9OYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkl0ZW0gcm91dGU9XCIvbG9naW5cIiBlbmQ+TG9naW48L05hdkl0ZW0+XG4gICAgICAgIDwvTmF2QmFyPiAgICAgICAgXG4gICAgKTtcbn07XG4vL0V4cG9ydCBOYXZCYXJcbmV4cG9ydCBkZWZhdWx0IFBvcHVsYXRlZE5hdkJhcjsiXSwibmFtZXMiOlsiTmF2QmFyIiwiTmF2SXRlbSIsIkNvb2tpZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBvcHVsYXRlZE5hdkJhciIsInRva2VuIiwiZ2V0IiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PopulatedNavBar.tsx\n");

/***/ }),

/***/ "./src/components/nav/NavBar.tsx":
/*!***************************************!*\
  !*** ./src/components/nav/NavBar.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.module.scss */ \"./src/components/nav/Nav.module.scss\");\n/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst NavBar = ({ children })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default().navbar),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/anushkaranasinghe/Documents/Aut/ENSE701/Assignments/project/src/components/nav/NavBar.tsx\",\n        lineNumber: 8,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXYvTmF2QmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBS3ZDLE1BQU1FLFNBQVMsQ0FBQyxFQUFFQyxRQUFRLEVBQVM7SUFDL0IscUJBQU8sOERBQUNDO1FBQUlDLFdBQVdKLGdFQUFhO2tCQUFHRTs7Ozs7O0FBQzNDO0FBQ0EsaUVBQWVELE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL25hdi9OYXZCYXIudHN4P2IyMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9OYXYubW9kdWxlLnNjc3NcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcbmNvbnN0IE5hdkJhciA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT57Y2hpbGRyZW59PC9uYXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJOYXZCYXIiLCJjaGlsZHJlbiIsIm5hdiIsImNsYXNzTmFtZSIsIm5hdmJhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/nav/NavBar.tsx\n");

/***/ }),

/***/ "./src/components/nav/NavItem.tsx":
/*!****************************************!*\
  !*** ./src/components/nav/NavItem.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.module.scss */ \"./src/components/nav/Nav.module.scss\");\n/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst NavItem = ({ children, route, end, dropdown, onClick, style })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const navigate = (event)=>{\n        if (typeof route === \"string\") {\n            router.push(route);\n        }\n        event.stopPropagation();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        className: `${route || onClick ? (_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().clickable) : (_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().navitem)}${end ? ` ${(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().end)}` : \"\"}${dropdown ? ` ${(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dropdown)}` : \"\"}`,\n        onClick: typeof onClick === \"function\" ? onClick : navigate,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/anushkaranasinghe/Documents/Aut/ENSE701/Assignments/project/src/components/nav/NavItem.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXYvTmF2SXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNkO0FBQ2E7QUFTdkMsTUFBTUcsVUFBVSxDQUFDLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQVM7SUFDMUUsTUFBTUMsU0FBU1Ysc0RBQVNBO0lBQ3hCLE1BQU1XLFdBQW9ELENBQUNDO1FBQzNELElBQUksT0FBT1AsVUFBVSxVQUFVO1lBQzNCSyxPQUFPRyxJQUFJLENBQUNSO1FBQ2hCO1FBQ0lPLE1BQU1FLGVBQWU7SUFDekI7SUFDQSxxQkFDSSw4REFBQ0M7UUFDRE4sT0FBT0E7UUFDUE8sV0FBVyxDQUFDLEVBQUVYLFNBQVNHLFVBQVVOLG1FQUFnQixHQUFHQSxpRUFBYyxDQUFDLEVBQ25FSSxNQUFNLENBQUMsQ0FBQyxFQUFFSiw2REFBVSxDQUFDLENBQUMsR0FBRyxHQUN4QixFQUFFSyxXQUFXLENBQUMsQ0FBQyxFQUFFTCxrRUFBZSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDMUNNLFNBQVMsT0FBT0EsWUFBWSxhQUFhQSxVQUFVRztrQkFFbERQOzs7Ozs7QUFHTDtBQUNBLGlFQUFlRCxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9uYXYvTmF2SXRlbS50c3g/YWVlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmF2Lm1vZHVsZS5zY3NzXCI7XG50eXBlIFByb3BzID0ge1xuICAgIHJvdXRlPzogc3RyaW5nO1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gICAgZW5kPzogYm9vbGVhbjtcbiAgICBkcm9wZG93bj86IGJvb2xlYW47XG4gICAgb25DbGljaz86IGJvb2xlYW4gfCAoKCkgPT4gdm9pZCk7XG4gICAgc3R5bGU/OiBhbnk7XG59O1xuY29uc3QgTmF2SXRlbSA9ICh7IGNoaWxkcmVuLCByb3V0ZSwgZW5kLCBkcm9wZG93biwgb25DbGljaywgc3R5bGUgfTogUHJvcHMpID0+IHtcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgbmF2aWdhdGU6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PiA9IChldmVudCkgPT4ge1xuaWYgKHR5cGVvZiByb3V0ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJvdXRlci5wdXNoKHJvdXRlKTtcbn1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn07XG5yZXR1cm4gKFxuICAgIDxkaXZcbiAgICBzdHlsZT17c3R5bGV9XG4gICAgY2xhc3NOYW1lPXtgJHtyb3V0ZSB8fCBvbkNsaWNrID8gc3R5bGVzLmNsaWNrYWJsZSA6IHN0eWxlcy5uYXZpdGVtfSR7XG4gICAgZW5kID8gYCAke3N0eWxlcy5lbmR9YCA6IFwiXCJcbiAgICB9JHtkcm9wZG93biA/IGAgJHtzdHlsZXMuZHJvcGRvd259YCA6IFwiXCJ9YH1cbiAgICBvbkNsaWNrPXt0eXBlb2Ygb25DbGljayA9PT0gXCJmdW5jdGlvblwiID8gb25DbGljayA6IG5hdmlnYXRlfVxuICAgID5cbiAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4pO1xufTtcbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJzdHlsZXMiLCJOYXZJdGVtIiwiY2hpbGRyZW4iLCJyb3V0ZSIsImVuZCIsImRyb3Bkb3duIiwib25DbGljayIsInN0eWxlIiwicm91dGVyIiwibmF2aWdhdGUiLCJldmVudCIsInB1c2giLCJzdG9wUHJvcGFnYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJjbGlja2FibGUiLCJuYXZpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/nav/NavItem.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PopulatedNavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PopulatedNavBar */ \"./src/components/PopulatedNavBar.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PopulatedNavBar__WEBPACK_IMPORTED_MODULE_2__]);\n_components_PopulatedNavBar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps: { ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopulatedNavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anushkaranasinghe/Documents/Aut/ENSE701/Assignments/project/src/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/anushkaranasinghe/Documents/Aut/ENSE701/Assignments/project/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFnQztBQUc0QjtBQUU1RCxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFDLEdBQUdBLFdBQVcsRUFBWTtJQUM5RCxxQkFDSTs7MEJBQ0EsOERBQUNILG1FQUFlQTs7Ozs7MEJBQ2hCLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUdoQztBQUNBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgUG9wdWxhdGVkTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVsYXRlZE5hdkJhclwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7Li4ucGFnZVByb3BzIH0gfTogQXBwUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8UG9wdWxhdGVkTmF2QmFyIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJQb3B1bGF0ZWROYXZCYXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();