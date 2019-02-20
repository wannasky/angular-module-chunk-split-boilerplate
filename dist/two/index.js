(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["two/index"],{

/***/ "./src/app/modules/two/two.component.html":
/*!************************************************!*\
  !*** ./src/app/modules/two/two.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>two</p>\r\n"

/***/ }),

/***/ "./src/app/modules/two/two.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/two/two.component.ts ***!
  \**********************************************/
/*! exports provided: TwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoComponent", function() { return TwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TwoComponent = /** @class */ (function () {
    function TwoComponent() {
    }
    TwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-two',
            template: __webpack_require__(/*! ./two.component.html */ "./src/app/modules/two/two.component.html")
        })
    ], TwoComponent);
    return TwoComponent;
}());



/***/ }),

/***/ "./src/app/modules/two/two.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/two/two.module.ts ***!
  \*******************************************/
/*! exports provided: TwoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoModule", function() { return TwoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./two.component */ "./src/app/modules/two/two.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TwoModule = /** @class */ (function () {
    function TwoModule() {
    }
    TwoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_two_component__WEBPACK_IMPORTED_MODULE_2__["TwoComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', pathMatch: 'full', component: _two_component__WEBPACK_IMPORTED_MODULE_2__["TwoComponent"] }
                ])
            ],
            exports: [_two_component__WEBPACK_IMPORTED_MODULE_2__["TwoComponent"]]
        })
    ], TwoModule);
    return TwoModule;
}());



/***/ })

}]);
//# sourceMappingURL=index.js.map