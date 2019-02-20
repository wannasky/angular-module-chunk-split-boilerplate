(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["one\\child/index"],{

/***/ "./src/app/modules/one/child/child.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/one/child/child.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>one child</p>\r\n"

/***/ }),

/***/ "./src/app/modules/one/child/child.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/one/child/child.component.ts ***!
  \******************************************************/
/*! exports provided: OneChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneChildComponent", function() { return OneChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OneChildComponent = /** @class */ (function () {
    function OneChildComponent() {
    }
    OneChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-one-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/modules/one/child/child.component.html")
        })
    ], OneChildComponent);
    return OneChildComponent;
}());



/***/ }),

/***/ "./src/app/modules/one/child/child.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/one/child/child.module.ts ***!
  \***************************************************/
/*! exports provided: OneChildModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneChildModule", function() { return OneChildModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _child_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child.component */ "./src/app/modules/one/child/child.component.ts");



var OneChildModule = /** @class */ (function () {
    function OneChildModule() {
    }
    OneChildModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_child_component__WEBPACK_IMPORTED_MODULE_2__["OneChildComponent"]],
            exports: [_child_component__WEBPACK_IMPORTED_MODULE_2__["OneChildComponent"]]
        })
    ], OneChildModule);
    return OneChildModule;
}());



/***/ })

}]);
//# sourceMappingURL=index.js.map