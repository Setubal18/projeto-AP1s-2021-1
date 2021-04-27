(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-public-module"],{

/***/ "7W+M":
/*!********************************************!*\
  !*** ./src/app/public/public.component.ts ***!
  \********************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PublicComponent {
    constructor() { }
    ngOnInit() {
    }
}
PublicComponent.ɵfac = function PublicComponent_Factory(t) { return new (t || PublicComponent)(); };
PublicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicComponent, selectors: [["app-public"]], decls: 1, vars: 0, template: function PublicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWMuY29tcG9uZW50LnN0eWwifQ== */"] });


/***/ }),

/***/ "DrxM":
/*!*************************************************!*\
  !*** ./src/app/public/public-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PublicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicRoutingModule", function() { return PublicRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'paginaInicial'
    },
    {
        path: 'paginaInicial',
        loadChildren: () => __webpack_require__.e(/*! import() | pagina-inicial-pagina-inicial-module */ "pagina-inicial-pagina-inicial-module").then(__webpack_require__.bind(null, /*! ./pagina-inicial/pagina-inicial.module */ "K46o"))
            .then(r => r.PaginaInicialModule)
    },
    {
        path: 'autenticacao',
        loadChildren: () => __webpack_require__.e(/*! import() | autenticacao-autenticacao-module */ "autenticacao-autenticacao-module").then(__webpack_require__.bind(null, /*! ./autenticacao/autenticacao.module */ "16wq"))
            .then(r => r.AutenticacaoModule)
    }
];
class PublicRoutingModule {
}
PublicRoutingModule.ɵfac = function PublicRoutingModule_Factory(t) { return new (t || PublicRoutingModule)(); };
PublicRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PublicRoutingModule });
PublicRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PublicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "UFnY":
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _public_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-routing.module */ "DrxM");
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public.component */ "7W+M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PublicModule {
}
PublicModule.ɵfac = function PublicModule_Factory(t) { return new (t || PublicModule)(); };
PublicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PublicModule });
PublicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _public_routing_module__WEBPACK_IMPORTED_MODULE_1__["PublicRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PublicModule, { declarations: [_public_component__WEBPACK_IMPORTED_MODULE_2__["PublicComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _public_routing_module__WEBPACK_IMPORTED_MODULE_1__["PublicRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=public-public-module.js.map