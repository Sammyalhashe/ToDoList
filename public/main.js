(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AngularMaterial/angularmaterial.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/AngularMaterial/angularmaterial.module.ts ***!
  \***********************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"]
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/Shared/email.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/Shared/email.directive.ts ***!
  \*******************************************/
/*! exports provided: EmailValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidatorDirective", function() { return EmailValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailValidatorDirective = /** @class */ (function () {
    function EmailValidatorDirective(elr, renderer) {
        this.elr = elr;
        this.renderer = renderer;
        this.emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    }
    Object.defineProperty(EmailValidatorDirective.prototype, "appEmail", {
        set: function (emailArr) {
            var email = emailArr[0];
            var password = emailArr[1];
            if ((!this.emailRegex.test(email) &&
                !(email === '') &&
                !(email === undefined)) ||
                password === '' ||
                password === undefined) {
                // this.elr.nativeElement.style.border = 'red solid 2px';
                this.renderer.setStyle(this.elr.nativeElement, 'border-color', '#ff3300');
                this.renderer.addClass(this.elr.nativeElement, 'content-before');
            }
            else {
                this.renderer.removeStyle(this.elr.nativeElement, 'border-color');
                this.renderer.removeClass(this.elr.nativeElement, 'content-before');
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], EmailValidatorDirective.prototype, "appEmail", null);
    EmailValidatorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appEmail]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], EmailValidatorDirective);
    return EmailValidatorDirective;
}());



/***/ }),

/***/ "./src/app/Shared/password.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/Shared/password.directive.ts ***!
  \**********************************************/
/*! exports provided: SubmitValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitValidatorDirective", function() { return SubmitValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmitValidatorDirective = /** @class */ (function () {
    function SubmitValidatorDirective(elr, renderer) {
        this.elr = elr;
        this.renderer = renderer;
        this.emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    }
    Object.defineProperty(SubmitValidatorDirective.prototype, "appSubmit", {
        set: function (emailArr) {
            var email = emailArr[0];
            var password = emailArr[1];
            if (!this.emailRegex.test(email) ||
                email === '' ||
                email === undefined ||
                password === '' ||
                password === undefined) {
                // this.elr.nativeElement.style.border = 'red solid 2px';
                this.renderer.setAttribute(this.elr.nativeElement, 'disabled', 'true');
            }
            else {
                this.renderer.removeAttribute(this.elr.nativeElement, 'disabled');
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SubmitValidatorDirective.prototype, "appSubmit", null);
    SubmitValidatorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSubmit]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], SubmitValidatorDirective);
    return SubmitValidatorDirective;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task-list/task-list.component.ts");
/* harmony import */ var _login_login_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login-guard.service */ "./src/app/login/login-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    {
        path: 'tasks',
        component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskListComponent"],
        canActivate: [_login_login_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"main-toolbar\">\n  ToDo List\n  <span class=\"rightOptions\">\n    <button [disabled]=\"!this._login.id\" mat-stroked-button class=\"main-toolbar-button\" (click)=\"this.logOut($event)\">Log Out</button>\n    <button [disabled]=\"!this._login.id\" mat-stroked-button class=\"main-toolbar-button\">History</button>\n  </span>\n</mat-toolbar>\n<br />\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-toolbar .rightOptions {\n  display: inline-block;\n  margin-left: auto;\n  margin-right: 0; }\n\n.main-toolbar .main-toolbar-button {\n  margin: 0 4px;\n  border-radius: 5%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_login) {
        this._login = _login;
    }
    AppComponent.prototype.logOut = function (event) {
        this._login.logOut();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _AngularMaterial_angularmaterial_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AngularMaterial/angularmaterial.module */ "./src/app/AngularMaterial/angularmaterial.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_list_task_list_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./task-list/task-list.module */ "./src/app/task-list/task-list.module.ts");
/* harmony import */ var _login_login_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login-guard.service */ "./src/app/login/login-guard.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _AngularMaterial_angularmaterial_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
                _task_list_task_list_module__WEBPACK_IMPORTED_MODULE_12__["TaskListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"]
            ],
            providers: [_login_login_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/login/login-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(login, router) {
        this.login = login;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.login.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-main\">\n  <div [appEmail]=\"[this.email,this.password]\" class=\"login-holder container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"label-center\">Sign in</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"example-container col-md-10 col-md-offset-5\">\n        <mat-form-field>\n          <input type=\"email\" [(ngModel)]=\"this.email\" matInput placeholder=\"Email\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"password\" [(ngModel)]=\"this.password\" matInput placeholder=\"Password\">\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div style=\"margin: 0 auto;\">\n        <button disabled=\"true\" [appSubmit]=\"[this.email, this.password]\" mat-raised-button (click)=\"this.login($event)\" color=\"primary\"\n          class=\"submit-button\">Submit</button>\n        <button disabled=\"true\" [appSubmit]=\"[this.email, this.password]\" mat-raised-button (click)=\"this.signUp($event)\" class=\"submit-button\">Sign\n          Up</button>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"or\">\n        <b>OR</b>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <button mat-raised-button (click)=\"this.googleLogin($event)\"\n              class=\"submit-button\"> <mat-icon class=\"google-icon\" svgIcon=\"google\"></mat-icon>Sign in with Google\n      </button>\n    </div>\n  </div>\n  <div class=\"container\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-main {\n  width: 100%;\n  height: 100vh; }\n  .login-main .login-holder {\n    display: relative;\n    padding: 15px 10px;\n    width: 100%;\n    border: black solid 3px;\n    top: 50%;\n    -webkit-transform: translateY(50%);\n            transform: translateY(50%); }\n  .login-main .login-holder .content-before::before {\n      content: 'asdf'; }\n  .login-main .login-holder .example-container {\n      display: flex;\n      flex-direction: column;\n      float: none;\n      margin: 0 auto; }\n  .login-main .login-holder .example-container > * {\n      width: 100%; }\n  .login-main .login-holder .or {\n      margin: 15px auto; }\n  .login-main .login-holder .submit-button {\n      margin: 0 10px; }\n  .login-main .login-holder .label-center {\n      margin: 0 auto; }\n  .login-main .login-holder .google-icon {\n      -webkit-transform: translateY(-8px) translateX(-5px);\n      transform: translateY(-8px) translateX(-5px); }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_login, iconRegistry, sanitizer) {
        this._login = _login;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.iconRegistry.addSvgIcon('google', this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/google.svg'));
    }
    LoginComponent.prototype.googleLogin = function (event) {
        this._login.GoogleLogin();
    };
    LoginComponent.prototype.login = function (event) {
        this._login.login(this.email, this.password);
    };
    LoginComponent.prototype.signUp = function (event) {
        this._login.signUp(this.email, this.password);
    };
    LoginComponent.prototype.ngOnInit = function () {
        // this.email = 'sammyalhashemi1@outlook.com';
        // this.password = 'rfin1ihe';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _AngularMaterial_angularmaterial_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AngularMaterial/angularmaterial.module */ "./src/app/AngularMaterial/angularmaterial.module.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Shared_email_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/email.directive */ "./src/app/Shared/email.directive.ts");
/* harmony import */ var _Shared_password_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Shared/password.directive */ "./src/app/Shared/password.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _AngularMaterial_angularmaterial_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _Shared_email_directive__WEBPACK_IMPORTED_MODULE_6__["EmailValidatorDirective"],
                _Shared_password_directive__WEBPACK_IMPORTED_MODULE_7__["SubmitValidatorDirective"]
            ],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = /** @class */ (function () {
    function LoginService(router, firestore, http, afAuth) {
        this.router = router;
        this.firestore = firestore;
        this.http = http;
        this.afAuth = afAuth;
        this.url = 'http://localhost:4200/api/users/user/add';
    }
    LoginService.prototype.isAuthenticated = function () {
        return this.id !== null && this.id !== '' && this.id !== undefined;
    };
    LoginService.prototype.logOut = function () {
        this.id = null;
        this.router.navigate(['/login']);
    };
    LoginService.prototype.signUp = function (email, password) {
        var _this = this;
        var user = { email: email, password: password };
        this.http
            .post(this.url, user)
            .subscribe(function (data) {
            console.log('data: ' + data);
            _this.id = data.id;
            _this.data = {
                email: data.email,
                password: data.password,
                id: data.id
            };
            _this.router.navigate(['/tasks']);
        }, function (err) {
            console.log('err: ' + err);
            _this.router.navigate(['/login']);
        });
    };
    LoginService.prototype.login = function (email, password) {
        var _this = this;
        var id;
        var data;
        var userDoc = this.firestore
            .collection('ToDo-tasks', function (ref) { return ref.where('email', '==', email); })
            .snapshotChanges();
        userDoc.forEach(function (user) {
            if (user.length > 0) {
                console.log(user[0].payload.doc.id);
                id = user[0].payload.doc.id;
                data = user[0].payload.doc.data();
                _this.id = id;
                _this.data = data;
                _this.router.navigate(['/tasks']);
            }
            else {
                alert('account does not exist, please sign up for an account');
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginService.prototype.GoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                var alreadyAccount = false;
                console.log(res);
                var docRef = _this.firestore.collection('ToDo-tasks');
                docRef
                    .snapshotChanges()
                    .subscribe(function (docChange) {
                    docChange.forEach(function (doc) {
                        console.log(doc.payload.doc.data());
                        var data = doc.payload.doc.data();
                        if (data.email === res.user.email) {
                            alreadyAccount = true;
                        }
                    });
                    if (!alreadyAccount) {
                        _this.signUp(res.user.email, 'google');
                    }
                    else {
                        _this.login(res.user.email, 'google');
                    }
                    resolve(res);
                });
            });
        });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/task-list/task-list.animations.ts":
/*!***************************************************!*\
  !*** ./src/app/task-list/task-list.animations.ts ***!
  \***************************************************/
/*! exports provided: animationsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationsList", function() { return animationsList; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var animationsList = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-50px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0px)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ])
    ])
];



/***/ }),

/***/ "./src/app/task-list/task-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-list/task-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"this.addTask($event)\" class=\"add-task-button\" mat-fab>+</button><div class=\"holder\">\n  <mat-card [@listAnimation] *ngFor=\"let task of this.tasks\" class=\"container mat-card-holder\">\n    <div class=\"row dataHolder\">\n      <div class=\"col-4\"><b>Task</b></div>\n      <div class=\"col-4\"><b>Priority</b></div>\n      <div class=\"col-4\">\n        <button mat-raised-button color=\"primary\" class=\"submit-button\" (click)=\"this.editTask($event, task.id)\">Edit</button>\n        <button mat-raised-button color=\"accent\" class=\"submit-button\" (click)=\"this.deleteTask($event, task.id)\">Delete</button>\n      </div>\n    </div>\n    <div class=\"row dataHolder\">\n      <div class=\"col-4\">{{task.task}}</div>\n      <div class=\"col-4\">{{task.priority}}</div>\n    </div>\n  </mat-card>\n  <mat-card [@listAnimation] *ngIf=\"this.taskAdding\" class=\"container mat-card-holder\">\n    <div class=\"row\">\n      <mat-form-field class=\"col\">\n        <input [(ngModel)]=\"this.newTask\" class=\"inputField\" matInput placeholder=\"Task\">\n      </mat-form-field>\n    </div>\n    <div class=\"row\">\n      <mat-form-field class=\"col\">\n        <input [(ngModel)]=\"this.newPriority\" class=\"inputField\" matInput placeholder=\"Priority\">\n      </mat-form-field>\n    </div>\n    <div class=\"row justify-content-end\">\n      <div class=\"col-10\"></div>\n      <button mat-raised-button color=\"primary\" (click)=\"this.submitNewTask($event)\" class=\"col-2 align-self-end submit-button2\">Submit</button>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/task-list/task-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/task-list/task-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-task-button {\n  position: fixed;\n  z-index: 999; }\n\n@media only screen and (max-height: 399px) {\n  .add-task-button {\n    position: fixed;\n    top: 80%; } }\n\n@media only screen and (min-height: 400px) and (max-height: 599px) {\n  .add-task-button {\n    position: fixed;\n    top: 85%; } }\n\n@media only screen and (min-height: 600px) {\n  .add-task-button {\n    position: fixed;\n    top: 90%; } }\n\n@media only screen and (max-width: 599px) {\n  .add-task-button {\n    left: 83%; } }\n\n@media only screen and (max-width: 764px) and (min-width: 600px) {\n  .add-task-button {\n    left: 85%; } }\n\n@media only screen and (min-width: 765px) {\n  .add-task-button {\n    left: 90%; } }\n\n.holder .mat-card-holder {\n  margin: 10px auto; }\n\n.holder .dataHolder {\n  margin: 10px 0; }\n\n.holder .submit-button {\n  margin-left: 5px; }\n\n.holder .submit-button2 {\n  margin-right: 15px; }\n\n.holder .inputField {\n  margin: 0 auto;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/task-list/task-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-list/task-list.component.ts ***!
  \**************************************************/
/*! exports provided: TaskListComponent, EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.service */ "./src/app/task-list/tasks.service.ts");
/* harmony import */ var _task_list_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-list.animations */ "./src/app/task-list/task-list.animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(task, dialog, snackBar) {
        this.task = task;
        this.dialog = dialog;
        this.snackBar = snackBar;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasks = [];
        this.newTask = '';
        this.newPriority = '';
        this.task.getTasks().subscribe(function (data) {
            data.forEach(function (task) {
                console.log(task);
                _this.tasks.push(task);
            });
        });
    };
    TaskListComponent.prototype.addTask = function (event) {
        this.taskAdding = true;
    };
    TaskListComponent.prototype.submitNewTask = function (event) {
        var _this = this;
        this.taskAdding = false;
        this.task.addTask(this.newTask, this.newPriority).subscribe(function (resp) {
            console.log(resp);
            _this.tasks.push(resp);
            _this.openSnackBar('add', resp.id);
        });
    };
    TaskListComponent.prototype.deleteTask = function (event, id) {
        var _this = this;
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) {
                this.tasks.splice(i, 1);
            }
        }
        this.task.deleteTask(id).subscribe(function (data) {
            console.log(data);
            _this.openSnackBar('delete', id);
        });
    };
    TaskListComponent.prototype.editTask = function (event, id) {
        var _this = this;
        var taskRef;
        console.log(this.tasks);
        for (var i = 0; i < this.tasks.length; i++) {
            var task = this.tasks[i];
            if (task['id'] === id) {
                taskRef = this.tasks[i];
            }
        }
        var dialogRef = this.dialog.open(EditDialogComponent, {
            width: '500px',
            data: { task: taskRef.task, priority: taskRef.priority }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result) {
                taskRef.task = result[0];
                taskRef.priority = result[1];
                _this.task.updateTask(id, result[0], result[1]).subscribe(function (resp) {
                    console.log(resp);
                });
                _this.openSnackBar('edit', id);
            }
        });
    };
    TaskListComponent.prototype.openSnackBar = function (task) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var message;
        if (task === 'edit') {
            message = "Task " + args[0] + " edited";
        }
        if (task === 'delete') {
            message = "Task " + args[0] + " deleted";
        }
        if (task === 'add') {
            message = "Task " + args[0] + " added";
        }
        this.snackBar.open(message, null, {
            duration: 2000,
        });
    };
    TaskListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ./task-list.component.scss */ "./src/app/task-list/task-list.component.scss")],
            animations: _task_list_animations__WEBPACK_IMPORTED_MODULE_2__["animationsList"]
        }),
        __metadata("design:paramtypes", [_tasks_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], TaskListComponent);
    return TaskListComponent;
}());

var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-dialog',
            template: "\n        <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"example-container col-md-10 col-md-offset-5\">\n                  <mat-form-field>\n                      <input [(ngModel)]=\"data.task\" matInput placeholder=\"Task\">\n                  </mat-form-field>\n  \n                  <mat-form-field>\n                      <input [(ngModel)]=\"data.priority\" matInput placeholder=\"Priority\">\n                  </mat-form-field>\n              </div>\n          </div>\n            <div mat-dialog-actions>\n                <button mat-button color=\"warn\" (click)=\"onNoClick()\">Cancel</button>\n                <button mat-button color=\"primary\" [mat-dialog-close]=\"[data.task, data.priority]\" cdkFocusInitial>Update</button>\n            </div>\n        </div>\n    ",
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/app/task-list/task-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/task-list/task-list.module.ts ***!
  \***********************************************/
/*! exports provided: TaskListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListModule", function() { return TaskListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _task_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-list.component */ "./src/app/task-list/task-list.component.ts");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.service */ "./src/app/task-list/tasks.service.ts");
/* harmony import */ var _AngularMaterial_angularmaterial_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AngularMaterial/angularmaterial.module */ "./src/app/AngularMaterial/angularmaterial.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TaskListModule = /** @class */ (function () {
    function TaskListModule() {
    }
    TaskListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _AngularMaterial_angularmaterial_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            declarations: [_task_list_component__WEBPACK_IMPORTED_MODULE_2__["TaskListComponent"], _task_list_component__WEBPACK_IMPORTED_MODULE_2__["EditDialogComponent"]],
            entryComponents: [_task_list_component__WEBPACK_IMPORTED_MODULE_2__["EditDialogComponent"]],
            providers: [_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]]
        })
    ], TaskListModule);
    return TaskListModule;
}());



/***/ }),

/***/ "./src/app/task-list/tasks.service.ts":
/*!********************************************!*\
  !*** ./src/app/task-list/tasks.service.ts ***!
  \********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskService = /** @class */ (function () {
    function TaskService(router, firestore, http, login) {
        this.router = router;
        this.firestore = firestore;
        this.http = http;
        this.login = login;
        this.url = 'api/';
    }
    TaskService.prototype.getTasks = function () {
        var userID = this.login.id;
        return this.http.get(this.url + "tasks/" + userID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(err.toString()); }));
    };
    TaskService.prototype.addTask = function (Task, Priority) {
        var userID = this.login.id;
        return this.http.post(this.url + "task/add", {
            userID: userID,
            task: Task,
            priority: Priority
        });
    };
    TaskService.prototype.updateTask = function (id, task, priority) {
        var userID = this.login.id;
        return this.http.put(this.url + "task/update", {
            userID: userID,
            id: id,
            task: task,
            priority: priority
        });
    };
    TaskService.prototype.deleteTask = function (id) {
        var userID = this.login.id;
        return this.http.post(this.url + "task/delete", {
            id: id,
            userID: userID
        });
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCxphKRAyD-qjMTcHC4-9KeyHxvmj3hanA',
        authDomain: 'todolist-b99fa.firebaseapp.com',
        databaseURL: 'https://todolist-b99fa.firebaseio.com',
        projectId: 'todolist-b99fa',
        storageBucket: 'todolist-b99fa.appspot.com',
        messagingSenderId: '988277545118'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sammyalhashemi/Desktop/TodoList/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map