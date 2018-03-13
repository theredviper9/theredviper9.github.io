webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/address.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var Address = /** @class */ (function () {
    function Address(firstname, lastname, addressNew, city, state, postalcode) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.addressNew = addressNew;
        this.city = city;
        this.state = state;
        this.postalcode = postalcode;
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-tab></app-tab> -->\n<!-- <hr> -->\n<!-- <app-nav></app-nav> -->\n<!-- <div>\n  <app-menudemo></app-menudemo>\n</div> -->\n<div>\n  \n  <app-sidenavdemo>\n  </app-sidenavdemo>\n</div>\n\n <!-- <div>\n  <app-form></app-form>\n</div>  -->\n\n<!-- <div style=\"text-align:center\">\n  <app-dialog></app-dialog>\n</div> -->\n\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n\n <!-- <app-toolbar-overview-example></app-toolbar-overview-example> -->\n <!-- <p>gfgfgf</p> -->\n \n <!-- <mat-toolbar>My App</mat-toolbar> -->\n\n "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tab_tab_component__ = __webpack_require__("./src/app/tab/tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_form_component__ = __webpack_require__("./src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dialog_dialog_component__ = __webpack_require__("./src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_dialog_my_dialog_component__ = __webpack_require__("./src/app/my-dialog/my-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__menudemo_menudemo_component__ = __webpack_require__("./src/app/menudemo/menudemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sidenavdemo_sidenavdemo_component__ = __webpack_require__("./src/app/sidenavdemo/sidenavdemo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tab_tab_component__["a" /* TabComponent */],
                __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_13__my_dialog_my_dialog_component__["a" /* MyDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__menudemo_menudemo_component__["a" /* MenudemoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__sidenavdemo_sidenavdemo_component__["a" /* SidenavdemoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatIconModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card1\">\n  <mat-card-header>\n    <mat-card-title><h1>Dialog Demo</h1></mat-card-title>\n  </mat-card-header>\n  <hr>\n  <mat-card-content>\n    <button mat-raised-button (click)=\"openDialog()\">Open Dialog</button>\n    <hr>\n    <strong>Result: {{dialogResult}}</strong>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = /** @class */ (function () {
    //dialogResult: any;
    function DialogComponent(dialog) {
        this.dialog = dialog;
    }
    DialogComponent_1 = DialogComponent;
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogComponent_1, {
            width: '600px',
            data: 'This text is passed into the dialog!'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            //this.dialogResult = result;
        });
    };
    DialogComponent = DialogComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-dialog',
            template: __webpack_require__("./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], DialogComponent);
    return DialogComponent;
    var DialogComponent_1;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n    font-family: \"Times New Roman\", Times, serif;\n  }\n  \n  .example-sidenav-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  \n  .example-sidenav {\n    padding: 20px;\n  }\n  \n  .font-colour{\n      color: red;\n      font-size: 30px;\n      font-family: Comic Sans MS, cursive, sans-serif;\n  }\n  \n  table{\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n  }\n  \n  p{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\n    <h3 class=\"font-colour\">Address Form</h3>\n  </div>\n<form class=\"formwidth\" (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\n  <table class=\"fullwidth\" cellspacing=\"50\">\n    <tr>\n      <td>\n        <mat-input-container class=\"fullwidth\">\n          <input matInput placeholder=\"First Name\" id=\"firstname\" [(ngModel)]=\"address.firstname\" name=\"firstname\">\n        </mat-input-container>\n      </td>\n      <td>\n        <mat-input-container class=\"fullwidth\">\n          <input matInput placeholder=\"Last Name\" id=\"lastname\" [(ngModel)]=\"address.lastname\" name=\"lastname\">\n        </mat-input-container>\n      </td>\n    </tr>\n  </table>\n\n  <p>\n    <mat-input-container class=\"fullwidth\">\n      <textarea matInput placeholder=\"Address\" id=\"address\" [(ngModel)]=\"address.addressNew\" name=\"address\"></textarea>\n    </mat-input-container>\n  </p>\n\n  <table class=\"fullwidth\" cellspacing=\"50\">\n    <tr>\n      <td>\n        <mat-input-container class=\"fullwidth\">\n          <input matInput placeholder=\"City\" id=\"city\" [(ngModel)]=\"address.city\" name=\"city\">\n        </mat-input-container>\n      </td>\n      <td>\n        <mat-input-container class=\"fullwidth\">\n          <input matInput placeholder=\"State\" id=\"state\" [(ngModel)]=\"address.state\" name=\"state\">\n        </mat-input-container>\n      </td>\n      <td>\n        <mat-input-container class=\"fullwidth\">\n          <input matInput #postalcode maxlength=\"5\" placeholder=\"Postal Code\" id=\"postalcode\" [(ngModel)]=\"address.postalcode\" name=\"postalcode\">\n          <mat-hint align=\"end\">\n            {{postalcode.value.length}} / 5\n          </mat-hint>\n        </mat-input-container>\n      </td>\n    </tr>\n  </table>\n\n  <p>\n    <button type=\"submit\" mat-raised-button>Submit</button>\n  </p>\n</form>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address__ = __webpack_require__("./src/app/address.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.address = new __WEBPACK_IMPORTED_MODULE_1__address__["a" /* Address */]();
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.onSubmit = function () {
        alert("Thanks for submitting! Data: " + JSON.stringify(this.address));
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("./src/app/form/form.component.html"),
            styles: [__webpack_require__("./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/menudemo/menudemo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menudemo/menudemo.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>\n    Angular Material Menu Demo\n  </mat-card-title>\n  <mat-card-content>\n    <button mat-raised-button color=\"primary\" [matMenuTriggerFor]=\"menu\">\n      Open Menu\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item>\n        <mat-icon>settings</mat-icon>\n        <span>Settings</span>\n      </button>\n      <button mat-menu-item disabled>\n        <mat-icon>voicemail</mat-icon>\n        <span>Check voicemail</span>\n      </button>\n      <button mat-menu-item>\n        <mat-icon>notifications_off</mat-icon>\n        <span>Disable alerts</span>\n      </button>\n    </mat-menu>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/menudemo/menudemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenudemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenudemoComponent = /** @class */ (function () {
    function MenudemoComponent() {
    }
    MenudemoComponent.prototype.ngOnInit = function () {
    };
    MenudemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-menudemo',
            template: __webpack_require__("./src/app/menudemo/menudemo.component.html"),
            styles: [__webpack_require__("./src/app/menudemo/menudemo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenudemoComponent);
    return MenudemoComponent;
}());



/***/ }),

/***/ "./src/app/my-dialog/my-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-dialog/my-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 mat-dialog-title>MY DIALOG</h2>\n  <hr>\n  <mat-dialog-content>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam maxime cum dolorem officiis assumenda rem alias, omnis nobis nam. Ratione soluta libero architecto cupiditate at fugit consectetur sit dignissimos vitae.\n    <br>\n    <br>\n    <strong>{{data}}</strong>\n  </mat-dialog-content>\n  <hr>\n  <mat-dialog-actions>\n    <button mat-raised-button (click)=\"onCloseConfirm()\">CONFIRM</button>&nbsp;\n    <button mat-raised-button (click)=\"onCloseCancel()\">CANCEL</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/my-dialog/my-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MyDialogComponent = /** @class */ (function () {
    function MyDialogComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    MyDialogComponent.prototype.ngOnInit = function () {
    };
    MyDialogComponent.prototype.onCloseConfirm = function () {
        this.thisDialogRef.close('Confirm');
    };
    MyDialogComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    MyDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-my-dialog',
            template: __webpack_require__("./src/app/my-dialog/my-dialog.component.html"),
            styles: [__webpack_require__("./src/app/my-dialog/my-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], String])
    ], MyDialogComponent);
    return MyDialogComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n    width: 500px;\n    height: 300px;\n    border: 1px solid rgba(0, 0, 0, 0.5);\n  }\n  \n  .example-sidenav-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  \n  .example-sidenav {\n    padding: 20px;\n  }"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\" autosize color=\"primary\">\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.showFiller = false;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/sidenavdemo/sidenavdemo.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    border: 1px solid rgba(111, 111, 111, 0.50);\n}\n  \n.example-sidenav-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n  \n.example-sidenav {\n    padding: 45px;\n}\n  \n.demo-panel {\n    margin: 10px;\n}"

/***/ }),

/***/ "./src/app/sidenavdemo/sidenavdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"demo-panel\" flex layout=\"column\">\n  <mat-card-title>\n    <!-- <app-tab></app-tab> -->\n    <mat-toolbar color = \"primary\">\n      <!-- <button type=\"button\" mat-button (click)=\"sidenav.open()\"> -->\n          <button type=\"button\" mat-button (click)=\"sidenav.toggle()\">\n      Menu\n    </button>\n    <p align = \"center\">              Wharehouse           </p>\n  </mat-toolbar>\n  </mat-card-title>\n  <mat-card-content>\n    <mat-sidenav-container class=\"example-container\">\n      <mat-sidenav #sidenav class=\"example-sidenav\" mode=\"over\">\n        <app-menudemo></app-menudemo>\n      </mat-sidenav>\n    \n      <div class=\"example-sidenav-content\">\n        <!-- <button type=\"button\" mat-button (click)=\"sidenav.open()\">\n          Open Sidenav\n        </button> -->\n        <app-form></app-form>\n      </div>\n    \n    </mat-sidenav-container>\n  </mat-card-content>\n</mat-card>\n<!-- <app-tab></app-tab>\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav class=\"example-sidenav\" mode=\"over\">\n    <app-menudemo></app-menudemo>\n  </mat-sidenav>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"sidenav.open()\">\n      Open Sidenav\n    </button>\n    <app-form></app-form>\n  </div>\n\n</mat-sidenav-container> -->"

/***/ }),

/***/ "./src/app/sidenavdemo/sidenavdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavdemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavdemoComponent = /** @class */ (function () {
    function SidenavdemoComponent() {
    }
    SidenavdemoComponent.prototype.ngOnInit = function () {
    };
    SidenavdemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-sidenavdemo',
            template: __webpack_require__("./src/app/sidenavdemo/sidenavdemo.component.html"),
            styles: [__webpack_require__("./src/app/sidenavdemo/sidenavdemo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavdemoComponent);
    return SidenavdemoComponent;
}());



/***/ }),

/***/ "./src/app/tab/tab.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tab/tab.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color = \"primary\">My App</mat-toolbar>"

/***/ }),

/***/ "./src/app/tab/tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = /** @class */ (function () {
    function TabComponent() {
    }
    TabComponent.prototype.ngOnInit = function () {
    };
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tab',
            template: __webpack_require__("./src/app/tab/tab.component.html"),
            styles: [__webpack_require__("./src/app/tab/tab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map