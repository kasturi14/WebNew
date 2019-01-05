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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.image-conatiner {\r\n    position: absolute;\r\n}\r\n.carousel-1 .item {\r\n    width: 100%; /*slider width*/\r\n    max-height: 600px; /*slider height*/\r\n}\r\n.carousel-1 .item img {\r\n    width: 100%; /*img width*/\r\n}\r\n.carousel-caption {\r\n    padding-bottom: 250px;\r\n}\r\n.carousel-caption p {\r\n    font-size: 50px;\r\n    text-transform: uppercase;\r\n    font-weight: 20px;\r\n}\r\n/*footer*/\r\n.black-foot {\r\n    background: #060606;\r\n    color: white;\r\n    margin: 0;\r\n    padding:2em;\r\n}\r\ndiv.row{\r\n    width: 100%;\r\n    padding-top: 50px;\r\n}\r\n.black-foot ul{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.black-foot .big {\r\n    font-size: 25px;\r\n}\r\n.black-foot .big,\r\n.black-foot .small{\r\n    width: 95%;\r\n\tdisplay: flex;\r\n    justify-content: space-around;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}\r\n.black-foot ul li {\r\n    list-style: none;\r\n    font-size: 20px;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\ttext-align: center;\r\n\tline-height: 30px;\r\n\tmargin: 0 50px;\r\n\tborder-radius: 50%;\r\n\tcolor: #000635;\r\n\ttransition: 0.5s;\r\n}\r\nul.small.first{\r\n    text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='complete'>\r\n  <div class=\"image-container\">\r\n      <ngb-carousel *ngIf=\"images\">\r\n        <ng-template ngbSlide>\r\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/3/35/State_Engineering_University_of_Armenia.jpg\" width='100%' height=\"555\">\r\n          <div class=\"carousel-caption\">\r\n            <p style='color: white;'>In our University</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img src=\"https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c035f34c035a8690da777211f1e66d59&auto=format&fit=crop&w=750&q=80\" width='100%' height=\"555\">\r\n          <div class=\"carousel-caption\">\r\n            <p>You get the only the best.</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img src=\"https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-0.3.5&s=0e32bd285188b457d433a620c5aa3d10&auto=format&fit=crop&w=750&q=80\" width='100%' height=\"555\">\r\n          <div class=\"carousel-caption\">\r\n            <p style='color: white;'>With the best resources.</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img src=\"https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=044e5d85cd16e79671287971a06be066&auto=format&fit=crop&w=750&q=80\" width='100%' height=\"555\">\r\n          <div class=\"carousel-caption\">\r\n            <p style='color: white;'>And the best teachers for you.</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n            <img src=\"https://images.unsplash.com/photo-1462536943532-57a629f6cc60?ixlib=rb-0.3.5&s=37850d7f8bfa357982d3e0f6ab410022&auto=format&fit=crop&w=752&q=80\" width='100%' height=\"555\">\r\n            <div class=\"carousel-caption\">\r\n              <p>To welcome a new beginning.</p>\r\n            </div>\r\n          </ng-template>\r\n      </ngb-carousel>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <div class=\"black-foot\">\r\n          <div class=\"row\">\r\n            <ul class=\"big link\">LINKS</ul>\r\n          </div>\r\n          <div class=\"row\">\r\n            <ul class=\"small first\">\r\n              <li><a routerLink=\"/\">Home</a></li>\r\n              <li><a routerLink=\"/about\">About</a></li>\r\n              <li><a routerLink=\"/products\">Events</a></li>\r\n              <li><a routerLink=\"/about\">JoinUs</a></li>\r\n    \r\n            </ul>       \r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin-guard.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin-guard.service.ts ***!
  \****************************************/
/*! exports provided: AdminGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuardService", function() { return AdminGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGuardService = /** @class */ (function () {
    function AdminGuardService(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    AdminGuardService.prototype.canActivate = function () {
        return this.auth.appUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (appUser) { return appUser.isAdmin; }));
    };
    AdminGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AdminGuardService);
    return AdminGuardService;
}());



/***/ }),

/***/ "./src/app/admin-login/admin-login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n\r\n.contain{\r\n    position: absolute;\r\n    width: 100%;\r\n    background: url('https://us.123rf.com/450wm/crazyass/crazyass1602/crazyass160200025/54248995-blur-abstract-bokeh-of-street-city-night-light-background-abstract-traffic-background-black-and-whit.jpg?ver=6');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    height: 556px;\r\n}\r\n\r\n.inner-contain {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    background: #ddd;\r\n    padding: 50px;\r\n    border-radius: 20px;\r\n    width: 500px;\r\n}\r\n\r\nlabel {\r\n    font-size: 18px;\r\n}\r\n\r\n.btn {\r\n    margin: 20px;\r\n    margin-left: 150px;\r\n    width: 100px;\r\n}\r\n\r\ninput:hover{\r\n    background-color: #bbb;\r\n}"

/***/ }),

/***/ "./src/app/admin-login/admin-login.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contain\" >\r\n  <div class=\"inner-contain\">\r\n    <h2>Login</h2>\r\n    <form #f1=\"ngForm\" >\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input #username=\"ngModel\" ngModel name=\"username\" id=\"username\" type=\"text\" class=\"form-control\" required>\r\n          <div class=\"alert alert-danger\" *ngIf=\"username.touched && username.invalid\">\r\n            Username is Required\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input #password=\"ngModel\" ngModel name=\"password\" id=\"password\" type=\"password\" class=\"form-control\" required>\r\n        <div class=\"alert alert-danger\" *ngIf=\"password.touched && password.invalid\">\r\n          Password is Required\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-success\" (click)=\"check(username.value, password.value)\" routerLink=\"/\">Save</button>\r\n      </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-login/admin-login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.ts ***!
  \******************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(user1) {
        this.user1 = user1;
    }
    AdminLoginComponent.prototype.check = function (username, password) {
        if (username == "xyz" && password == "123") {
            firebase__WEBPACK_IMPORTED_MODULE_1__["database"]().ref('/users/' + this.user1.key + '/isAdmin').set(true);
        }
    };
    AdminLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/admin-login/admin-login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\r\n    position:absolute;\r\n\r\n    background: url('https://us.123rf.com/450wm/crazyass/crazyass1602/crazyass160200025/54248995-blur-abstract-bokeh-of-street-city-night-light-background-abstract-traffic-background-black-and-whit.jpg?ver=6');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    width: 100%;\r\n    color: #fff;\r\n}\r\ntable{\r\n    margin: 50px;\r\n    margin-left: 180px;\r\n    margin-top: 70px;\r\n    width: 70%;\r\n    font-family: 'Open Sans', sans-serif;\r\n    text-align: center;\r\n}\r\nthead{\r\n    background-color: #141429;\r\n    color: #fff;\r\n    border: none;\r\n}\r\nth {\r\n    width: 400px;\r\n}\r\ntbody tr {\r\n    font-weight: bold;\r\n\r\n}\r\ntbody tr:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n    border: none;\r\n}\r\nbutton.c{\r\n    padding: 5px 10px;\r\n    max-width: 200px;\r\n    margin-right: 20px;\r\n    box-shadow: 5px 5px 20px #A6A5AC;\r\n}\r\nspan {\r\n    padding-left: 550px;\r\n    margin-bottom: 90px;\r\n}\r\na.b{\r\n    position: relative;\r\n    width: 200px;\r\n    box-shadow: 5px 5px 20px #A6A5AC;\r\n    margin-bottom: 90px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n<table class='table'>\r\n    <thead>\r\n        <tr>\r\n            <th>Event</th>\r\n            <th>Date</th>\r\n            <th>Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let p of products$ | async\">\r\n            <td>{{p.Name}}</td>\r\n            <td>{{p.dp.day}}.{{p.dp.month}}.{{p.dp.year}} - {{p.dpe.day}}.{{p.dpe.month}}.{{p.dpe.year}}</td>\r\n            <td>\r\n                <button class=\"c btn btn-light\"  (click)=\"edit(p.key)\">Edit</button>\r\n                <button class=\"c btn btn-light\" (click)=\"delete(p.key)\">Delete</button>                \r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<span>\r\n        <a class=\"b btn btn-dark\" (click)=\"unsubs()\">Add new Event</a>\r\n    </span>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usersave_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../usersave.service */ "./src/app/usersave.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../event.service */ "./src/app/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(route, usersave1, db, edit1) {
        this.route = route;
        this.usersave1 = usersave1;
        this.db = db;
        this.edit1 = edit1;
        this.productRef = db.list('/usersave');
        this.products$ = this.productRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    AdminProductsComponent.prototype.delete = function (key) {
        if (!confirm('Are you sure you want to delete this event?'))
            return;
        this.usersave1.delete(key);
        this.route.navigate(['/admin/products']);
    };
    AdminProductsComponent.prototype.edit = function (key) {
        this.edit1.setid(key);
        this.route.navigate(['/admin/products/', key]);
    };
    AdminProductsComponent.prototype.unsubs = function () {
        this.route.navigate(['/admin/products/new']);
    };
    AdminProductsComponent.prototype.ngOnInit = function () { };
    AdminProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! ./admin-products.component.html */ "./src/app/admin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin/admin-products/admin-products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _usersave_service__WEBPACK_IMPORTED_MODULE_1__["UsersaveService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-registered/admin-registered.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/admin-registered/admin-registered.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\r\n    position:absolute;\r\n    height: 555px;\r\n    background: url('https://us.123rf.com/450wm/crazyass/crazyass1602/crazyass160200025/54248995-blur-abstract-bokeh-of-street-city-night-light-background-abstract-traffic-background-black-and-whit.jpg?ver=6');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    /* background-color: #ddd; */\r\n    width: 100%;\r\n    color: #fff;\r\n}\r\ntable{\r\n    width: 100%;\r\n    /* margin-left: 180px; */\r\n    margin-top: 1px;\r\n    /* width: 70%; */\r\n    font-family: 'Open Sans', sans-serif;\r\n    text-align: center;\r\n}\r\nthead{\r\n    background-color: #141429;\r\n    color: #fff;\r\n    border: none;\r\n    font-size: 20px;\r\n}\r\nth {\r\n    width: 400px;\r\n}\r\ntbody tr:hover {\r\n    background-color: #999;\r\n    color: #000;\r\n    border: none;\r\n}\r\ntd{\r\n    font-size: 17px;\r\n}\r\n.btn{\r\n    position: relative;\r\n    width: 200px;\r\n    box-shadow: 5px 5px 20px #A6A5AC;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin-registered/admin-registered.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/admin-registered/admin-registered.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <table class='table'>\r\n        <thead>\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Event</th>\r\n                <th>Email</th>\r\n                <th>Phone</th>\r\n                <th>Skills</th>\r\n                <th>Stream</th>\r\n                <th>Year</th>\r\n                <th>Image</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let p of  registrations$ | async\">\r\n                <td>{{p.Name}}</td>\r\n                <td>{{p.event}}</td>\r\n                <td>{{p.Email}}</td>\r\n                <td>{{p.Phone}}</td>\r\n                <td>{{p.about}}</td>\r\n                <td>{{p.Stream}}</td>\r\n                <td>{{p.Year}}</td>\r\n                <td><img class=\"card-img-top\" src={{p.imageURL}} height='100' width='100' alt=\"Card image cap\"></td>\r\n                                \r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    </div>"

/***/ }),

/***/ "./src/app/admin/admin-registered/admin-registered.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-registered/admin-registered.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminRegisteredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegisteredComponent", function() { return AdminRegisteredComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registersave_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../registersave.service */ "./src/app/registersave.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminRegisteredComponent = /** @class */ (function () {
    function AdminRegisteredComponent(register) {
        this.register = register;
        this.registrations$ = register.getAll();
    }
    AdminRegisteredComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-registered',
            template: __webpack_require__(/*! ./admin-registered.component.html */ "./src/app/admin/admin-registered/admin-registered.component.html"),
            styles: [__webpack_require__(/*! ./admin-registered.component.css */ "./src/app/admin/admin-registered/admin-registered.component.css")]
        }),
        __metadata("design:paramtypes", [_registersave_service__WEBPACK_IMPORTED_MODULE_1__["RegistersaveService"]])
    ], AdminRegisteredComponent);
    return AdminRegisteredComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-form/user-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/user-form/user-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-contain{\r\n    position: absolute;\r\n    background: url('https://us.123rf.com/450wm/crazyass/crazyass1602/crazyass160200025/54248995-blur-abstract-bokeh-of-street-city-night-light-background-abstract-traffic-background-black-and-whit.jpg?ver=6');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    color: #fff;\r\n    width: 100%;\r\n}\r\nh1{\r\n    padding: 20px;\r\n    width: 100%;\r\n    text-align: center;\r\n\ttext-shadow: 10px 10px 15px gray;\t\r\n}\r\n.form-container  {\r\n    width: 600px;\r\n    margin-left: 370px;\r\n}\r\n*, *::before, *::after {\r\n    box-sizing: border-box;\r\n}\r\ndiv.input-group-append,\r\nbutton.btn.btn-light.calendar,\r\n.input-group > .form-control:not(:last-child), .input-group > .custom-select:not(:last-child) {\r\n    margin: 0;\r\n}\r\ndiv.input-group-append[_ngcontent-c1], \r\nbutton.btn.btn-light.calendar[_ngcontent-c1], \r\n.input-group[_ngcontent-c1] > .form-control[_ngcontent-c1]:not(:last-child), \r\n.input-group[_ngcontent-c1] > .custom-select[_ngcontent-c1]:not(:last-child) \r\n{\r\n    margin: 0;\r\n    width: 50px;\r\n}\r\ninput{\r\n    box-shadow:10px 10px 15px #A6A5AC;\r\n}\r\ninput:hover,textarea:hover,select:hover {\r\n    background-color: #ddd;\r\n}\r\n.btn{\r\n    width: 200px;\r\n    margin: 70px 200px;\r\n    padding: 15px;\r\n    box-shadow:10px 10px 15px #A6A5AC;    \r\n}\r\ntextarea,select {\r\n    box-shadow:10px 10px 15px #A6A5AC;\r\n}\r\nlabel {\r\n    padding-left: 10px;\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/admin/user-form/user-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/user-form/user-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-contain\">\r\n<div class=\"form-container\">\r\n  <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\r\n      <div class=\"form-group\">\r\n        <label for=\"Name\">Event's Name</label>\r\n        <input #Name=\"ngModel\" [(ngModel)]=\"product.Name\" name=\"Name\" id=\"Name\" type=\"text\" class=\"form-control\" required>\r\n        <div class=\"alert alert-danger\" *ngIf=\"Name.touched && Name.invalid\">\r\n          Name is Required\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"Date\">From-</label>\r\n        <div class=\"input-group\">\r\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n          name=\"dp\" [(ngModel)]=\"product.dp\" ngbDatepicker #d=\"ngbDatepicker\" (navigate)=\"date = $event.next\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-light calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"EDate\">To-</label>\r\n        <div class=\"input-group\">\r\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n          name=\"dpe\" [(ngModel)]=\"product.dpe\" ngbDatepicker #e=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-light calendar\" (click)=\"e.toggle()\" type=\"button\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    \r\n      <div class=\"form-group\">\r\n        <label for=\"category\">Category</label>\r\n        <select [(ngModel)]=\"product.category\" name=\"category\" id=\"category\" class=\"form-control\">\r\n          <option value=\"\">Select</option>\r\n          <option *ngFor=\"let c of categories$ | async\" [value]=\"c.key\">\r\n            {{c.payload.val().name}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"about\">About</label>\r\n        <textarea maxlength=\"150\" class=\"form-control\" id=\"about\" name=\"about\" [(ngModel)]=\"product.about\" #about=\"ngModel\" rows=\"3\"></textarea>\r\n      </div>\r\n    \r\n    \r\n      <div class=\"form-group\">\r\n          <label for=\"imageUrl\">Image Url</label>\r\n          <input #imageUrl=\"ngModel\" [(ngModel)]=\"product.imageUrl\" name=\"imageUrl\" id=\"imageUrl\" type=\"text\" class=\"form-control\" required url>\r\n          <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\r\n            <div *ngIf=\"imageUrl.errors.required\">*Required*</div>\r\n            <div *ngIf=\"imageUrl.errors.url\">Image url should be valid</div>\r\n          </div>\r\n      </div>\r\n    \r\n    \r\n      <button class=\"btn btn-success\">Save</button>\r\n      </form>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n  \r\n"

/***/ }),

/***/ "./src/app/admin/user-form/user-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/user-form/user-form.component.ts ***!
  \********************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var _usersave_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../usersave.service */ "./src/app/usersave.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../event.service */ "./src/app/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(edit2, db, router, categoryService, usersaveService) {
        this.edit2 = edit2;
        this.db = db;
        this.router = router;
        this.categoryService = categoryService;
        this.usersaveService = usersaveService;
        this.product = {};
        this.categories$ = categoryService.getCategories().snapshotChanges();
        this.key = this.edit2.showId();
        console.log(this.key);
    }
    UserFormComponent.prototype.save = function (user) {
        if (this.key) {
            this.usersaveService.update(this.key, this.product);
            this.eventsSubscription.unsubscribe();
        }
        this.router.navigate(['/products']);
    };
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.key) {
            this.eventsSubscription = this.usersaveService.get(this.key).subscribe(function (p) { return _this.product = p; });
        }
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/admin/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/admin/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"], _usersave_service__WEBPACK_IMPORTED_MODULE_2__["UsersaveService"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main.container{\r\n    padding:0;\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bs-navbar></bs-navbar>\r\n<main role=\"main\" class=\"container\">\r\n</main>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
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
    function AppComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        auth.user$.subscribe(function (user) {
            if (!user)
                return;
            userService.save(user);
            var returnUrl = localStorage.getItem('returnUrl');
            if (!returnUrl)
                return;
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bs-navbar/bs-navbar.component */ "./src/app/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _admin_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-guard.service */ "./src/app/admin-guard.service.ts");
/* harmony import */ var _admin_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/user-form/user-form.component */ "./src/app/admin/user-form/user-form.component.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var _usersave_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./usersave.service */ "./src/app/usersave.service.ts");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _registersave_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./registersave.service */ "./src/app/registersave.service.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./event.service */ "./src/app/event.service.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _admin_admin_registered_admin_registered_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/admin-registered/admin-registered.component */ "./src/app/admin/admin-registered/admin-registered.component.ts");
/* harmony import */ var _new_form_new_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./new-form/new-form.component */ "./src/app/new-form/new-form.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_7__["BsNavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingCartComponent"],
                _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_11__["AdminProductsComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"],
                _admin_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_20__["UserFormComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
                _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_26__["AdminLoginComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_28__["AboutComponent"],
                _admin_admin_registered_admin_registered_component__WEBPACK_IMPORTED_MODULE_29__["AdminRegisteredComponent"],
                _new_form_new_form_component__WEBPACK_IMPORTED_MODULE_30__["NewFormComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_23__["CustomFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"] },
                    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"] },
                    { path: 'shopping-cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingCartComponent"] },
                    { path: 'admin/products/new', component: _new_form_new_form_component__WEBPACK_IMPORTED_MODULE_30__["NewFormComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"], _admin_guard_service__WEBPACK_IMPORTED_MODULE_19__["AdminGuardService"]] },
                    { path: 'admin/products/:id', component: _admin_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_20__["UserFormComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"], _admin_guard_service__WEBPACK_IMPORTED_MODULE_19__["AdminGuardService"]] },
                    { path: 'admin/products', component: _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_11__["AdminProductsComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"], _admin_guard_service__WEBPACK_IMPORTED_MODULE_19__["AdminGuardService"]] },
                    { path: 'admin/login', component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_26__["AdminLoginComponent"] },
                    { path: 'admin/registered_users', component: _admin_admin_registered_admin_registered_component__WEBPACK_IMPORTED_MODULE_29__["AdminRegisteredComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"], _admin_guard_service__WEBPACK_IMPORTED_MODULE_19__["AdminGuardService"]] },
                    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"] },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_28__["AboutComponent"] },
                ])
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"], _user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _admin_guard_service__WEBPACK_IMPORTED_MODULE_19__["AdminGuardService"], _categories_service__WEBPACK_IMPORTED_MODULE_21__["CategoriesService"], _usersave_service__WEBPACK_IMPORTED_MODULE_22__["UsersaveService"], _registersave_service__WEBPACK_IMPORTED_MODULE_25__["RegistersaveService"], _event_service__WEBPACK_IMPORTED_MODULE_27__["EventService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user)
                return true;
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }));
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, route, router, userService) {
        this.afAuth = afAuth;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
                if (user)
                    return _this.userService.get(user.uid).valueChanges();
                return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }));
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle{\r\n    cursor: pointer;\r\n}\r\n.navbar{\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 70px;\r\n}\r\n.n{\r\n    font-size: 17px;\r\n    padding: 15px;\r\n    padding-left: 20px;\r\ncursor:pointer;\r\n} \r\n"

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n    <a class=\"navbar-brand n\" routerLink=\"/\">Home</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link n\" routerLink=\"/shopping-cart\">All Registrations</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link n\" routerLink=\"/products\">Events</a>\r\n          </li>\r\n       \r\n        <ng-template #anonymousUser>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link n\" (click)=\"login()\">Login with Google</a>\r\n            </li>\r\n           \r\n        </ng-template>\r\n        \r\n        <li ngbDropdown *ngIf=\"appUser; else anonymousUser\" class=\"nav-item dropdown\">\r\n          <a ngbDropdownToggle class=\" n nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            {{appUser.name}}\r\n          </a>\r\n          <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\r\n              <a *ngIf=\"appUser.isAdmin\" class=\"dropdown-item\" routerLink=\"/admin/products\">Manage Events</a>\r\n              <a *ngIf=\"appUser.isAdmin\" class=\"dropdown-item\" routerLink=\"/admin/registered_users\">Registered Users</a>\r\n              <a *ngIf=\"appUser.isAdmin\" class=\"dropdown-item\" routerLink=\"/admin/products/new\">Add New Event</a>\r\n              <a class=\"dropdown-item\" routerLink=\"/admin/login\">Admin Login</a>\r\n            <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.ts ***!
  \**************************************************/
/*! exports provided: BsNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsNavbarComponent", function() { return BsNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsNavbarComponent = /** @class */ (function () {
    function BsNavbarComponent(auth) {
        var _this = this;
        this.auth = auth;
        auth.appUser$.subscribe(function (appUser) { return _this.appUser = appUser; });
    }
    BsNavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    BsNavbarComponent.prototype.login = function () {
        this.auth.login();
    };
    BsNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-navbar',
            template: __webpack_require__(/*! ./bs-navbar.component.html */ "./src/app/bs-navbar/bs-navbar.component.html"),
            styles: [__webpack_require__(/*! ./bs-navbar.component.css */ "./src/app/bs-navbar/bs-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());



/***/ }),

/***/ "./src/app/categories.service.ts":
/*!***************************************!*\
  !*** ./src/app/categories.service.ts ***!
  \***************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesService = /** @class */ (function () {
    function CategoriesService(db) {
        this.db = db;
    }
    CategoriesService.prototype.getCategories = function () {
        return this.db.list('/categories');
    };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/event.service.ts":
/*!**********************************!*\
  !*** ./src/app/event.service.ts ***!
  \**********************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
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

var EventService = /** @class */ (function () {
    function EventService() {
    }
    EventService.prototype.setevent = function (event) {
        this.finally = event;
    };
    EventService.prototype.show = function () {
        return this.finally;
    };
    EventService.prototype.setid = function (editId) {
        this.edit = editId;
    };
    EventService.prototype.showId = function () {
        return this.edit;
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin: 0 ;\r\n    padding: 0 ;\r\n}\r\n.carousel-1 .item {\r\n    width: 100%; /*slider width*/\r\n    max-height: 600px; /*slider height*/\r\n}\r\n.carousel-1 .item img {\r\n    width: 100%; /*img width*/\r\n}\r\n.carousel-caption {\r\n    padding-bottom: 250px;\r\n    color: #000;\r\n    font-weight: bolder;\r\n}\r\n.carousel-caption h2 {\r\n    font-size: 50px;\r\n    text-transform: uppercase;\r\n    color: #000;\r\n}\r\n.lls {\r\n    list-style: none;\r\n    position: relative;\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 50px;\r\n    font-size: 30px;\r\n    background: #060606;\r\n    opacity: 0.9;\r\n    color: white;\r\n    z-index: -1;\r\n    background: url('https://us.123rf.com/450wm/crazyass/crazyass1602/crazyass160200025/54248995-blur-abstract-bokeh-of-street-city-night-light-background-abstract-traffic-background-black-and-whit.jpg?ver=6');\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n#text {\r\n    font-size: 20px;\r\n}\r\n/*image grid */\r\n.contain {\r\n    position: relative;\r\n    background: url('photo.jpeg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover; \r\n    background-attachment: fixed;\r\n    margin:0px;\r\n}\r\n.imgs .row {\r\n    padding: 30px;\r\n    padding-left: 40px;\r\n}\r\n.item {\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n.image {\r\n    opacity: 1;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: .2s ease;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n.desc {\r\n    transition: .2s ease;\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    -ms-transform: translate(-50%,-50%);\r\n    text-align: center;\r\n}\r\n.desc p {\r\n    font-weight: 1000;\r\n}\r\n.item:hover .image {\r\n    opacity: 0.5;\r\n}\r\n.item:hover .desc {\r\n    opacity: 1;\r\n}\r\n/*flip*/\r\n/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */\r\n.flip-box {\r\n    width: 400px;\r\n    height: 300px;\r\n    -webkit-perspective: 1000px;\r\n            perspective: 1000px; /* Remove this if you don't want the 3D effect */\r\n  }\r\n/* This container is needed to position the front and back side */\r\n.flip-box-inner {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    transition: -webkit-transform 0.8s;\r\n    transition: transform 0.8s;\r\n    transition: transform 0.8s, -webkit-transform 0.8s;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n  }\r\n/* Do an horizontal flip when you move the mouse over the flip box container */\r\n.flip-box:hover .flip-box-inner {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n  }\r\n/* Position the front and back side */\r\n.flip-box-front, .flip-box-back {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n  }\r\n/* Style the front side (fallback if image is missing) */\r\n.flip-box-front {\r\n    background-color: #bbb;\r\n    color: black;\r\n  }\r\n/* Style the back side */\r\n.flip-box-back {\r\n    background-color: black;\r\n    color: white;\r\n    padding: 100px;\r\n    font-size: 20px;\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n  }\r\n.btn{\r\n      padding: 10px 20px;\r\n  }\r\n/*footer*/\r\n.black-foot {\r\n    background: #060606;\r\n    color: white;\r\n    margin: 0;\r\n    padding:2em;\r\n}\r\ndiv.row{\r\n    width: 100%;\r\n    padding-top: 50px;\r\n}\r\n.black-foot ul{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.black-foot .big {\r\n    font-size: 25px;\r\n}\r\n.black-foot .big,\r\n.black-foot .small{\r\n    width: 45%;\r\n\tdisplay: flex;\r\n    justify-content: space-around;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}\r\n.black-foot ul li {\r\n    list-style: none;\r\n    font-size: 20px;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\ttext-align: center;\r\n\tline-height: 30px;\r\n\tmargin: 0 50px;\r\n\tborder-radius: 50%;\r\n\tcolor: #000635;\r\n\ttransition: 0.5s;\r\n}\r\nul.small.first{\r\n    text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Body\">\r\n  \r\n  <link href=\"https://fonts.googleapis.com/css?family=Coiny\" rel=\"stylesheet\">\r\n  <link href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n\r\n  \r\n  <div class=\"image-container\">\r\n    <ngb-carousel *ngIf=\"images\">\r\n      <ng-template ngbSlide>\r\n        <img src=\"https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67e698aabba0e095f5a9804736866fa2&auto=format&fit=crop&w=750&q=80\" width='100%' height=\"600\">\r\n        <div class=\"carousel-caption\">\r\n          <h1>First slide label</h1>\r\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template ngbSlide>\r\n        <img src=\"https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ed355dbd6d0efe1d3c158d01f89d833&auto=format&fit=crop&w=750&q=80\" width='100%' height=\"600\">\r\n        <div class=\"carousel-caption\">\r\n          <h1>Second slide label</h1>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template ngbSlide>\r\n        <img src=\"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1d076508395c99b386351d72a95c09e&auto=format&fit=crop&w=700&q=80\" width='100%' height=\"600\">\r\n        <div class=\"carousel-caption\">\r\n          <h1>Third slide label</h1>\r\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-carousel>\r\n  </div>\r\n\r\n  <div class=\"lls\">\r\n    <p>Live | Love | Sparkle </p>\r\n    <p id=\"text\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. \r\n      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \r\n      when an unknown printer took a galley of type and scrambled it to make a type specimen book. \r\n      It has survived not only five centuries, but also the leap into electronic typesetting, \r\n      remaining essentially unchanged. It was popularised in the 1960s with the release of \r\n      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n      software like Aldus PageMaker including versions of Lorem Ipsum.</p><br/>\r\n    <p id=\"text\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. \r\n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \r\n        when an unknown printer took a galley of type and scrambled it to make a type specimen book. \r\n        It has survived not only five centuries, but also the leap into electronic typesetting, \r\n        remaining essentially unchanged. It was popularised in the 1960s with the release of \r\n        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n  </div>\r\n\r\n  <div class=\"contain\">\r\n    <div class=\"imgs\">\r\n      <div class=\"row\">\r\n        <div class=\"item col-md-4\">\r\n          <div class=\"flip-box\">\r\n            <div class=\"flip-box-inner\">\r\n              <div class=\"flip-box-front\">\r\n                <img src=\"https://c1.staticflickr.com/2/1668/25293249072_1214789e34_b.jpg\" style=\"width:400px;height:300px\">\r\n              </div>\r\n              <div class=\"flip-box-back\">\r\n                <h4>Events</h4><br>\r\n                <button type=\"button\" class=\"btn btn-info\" routerLink=\"/products\">Know more</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"item col-md-4\">\r\n          <div class=\"flip-box\">\r\n            <div class=\"flip-box-inner\">\r\n              <div class=\"flip-box-front\">\r\n                <img src=\"https://www.army.mil/e2/c/images/2016/11/16/457276/size0.jpg\" style=\"width:400px;height:300px\">\r\n              </div>\r\n              <div class=\"flip-box-back\">\r\n                <h4>Registrations</h4><br>\r\n                <button type=\"button\" class=\"btn btn-info\" routerLink=\"/shopping-cart\">Know more</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"item col-md-4\">\r\n          <div class=\"flip-box\">\r\n            <div class=\"flip-box-inner\">\r\n              <div class=\"flip-box-front\">\r\n                <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgz11SZjdHjJm1WAnHswa4S2z5pTz4mDQbXEFik17i9Qpi6WhJ\" style=\"width:400px;height:300px\">\r\n              </div>\r\n              <div class=\"flip-box-back\">\r\n                <h4>About Us</h4><br>\r\n                <button type=\"button\" class=\"btn btn-info\" routerLink=\"/about\">Know more</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"footer\">\r\n    <div class=\"black-foot\">\r\n      <div class=\"row\">\r\n        <ul class=\"big link\">LINKS</ul>\r\n        <ul class=\"big social\">SOCIAL</ul>\r\n      </div>\r\n      <div class=\"row\">\r\n        <ul class=\"small first\">\r\n            <li><a routerLink=\"/\">Home</a></li>\r\n            <li><a routerLink=\"/about\">About</a></li>\r\n            <li><a routerLink=\"/products\">Events</a></li>\r\n            <li><a routerLink=\"/about\">JoinUs</a></li>\r\n  \r\n        </ul>       \r\n        <ul class=\"small second\">\r\n            <li>\r\n              <a routerLink=\"/\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\r\n            </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  logout works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
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

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/new-form/new-form.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-form/new-form.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-contain{\r\n    position: absolute;\r\n    background: url('https://us.123rf.com/450wm/crazyass/crazyass1602/crazyass160200025/54248995-blur-abstract-bokeh-of-street-city-night-light-background-abstract-traffic-background-black-and-whit.jpg?ver=6');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    color: #fff;\r\n    width: 100%;\r\n}\r\nh1{\r\n    padding: 20px;\r\n    width: 100%;\r\n    text-align: center;\r\n\ttext-shadow: 10px 10px 15px gray;\t\r\n}\r\n.form-container  {\r\n    width: 600px;\r\n    margin-left: 370px;\r\n}\r\n*, *::before, *::after {\r\n    box-sizing: border-box;\r\n}\r\ndiv.input-group-append,\r\nbutton.btn.btn-light.calendar,\r\n.input-group > .form-control:not(:last-child), .input-group > .custom-select:not(:last-child) {\r\n    margin: 0;\r\n}\r\ndiv.input-group-append[_ngcontent-c1], \r\nbutton.btn.btn-light.calendar[_ngcontent-c1], \r\n.input-group[_ngcontent-c1] > .form-control[_ngcontent-c1]:not(:last-child), \r\n.input-group[_ngcontent-c1] > .custom-select[_ngcontent-c1]:not(:last-child) \r\n{\r\n    margin: 0;\r\n    width: 50px;\r\n}\r\ninput{\r\n    box-shadow:10px 10px 15px #A6A5AC;\r\n}\r\ninput:hover,textarea:hover,select:hover {\r\n    background-color: #ddd;\r\n}\r\n.btn{\r\n    width: 200px;\r\n    margin: 70px 200px;\r\n    padding: 15px;\r\n    box-shadow:10px 10px 15px #A6A5AC;    \r\n}\r\ntextarea,select {\r\n    box-shadow:10px 10px 15px #A6A5AC;\r\n}\r\nlabel {\r\n    padding-left: 10px;\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/new-form/new-form.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-form/new-form.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-contain\">\n  <h1>Add New Event</h1>\n  <div class=\"form-container\">\n    <form #fnew=\"ngForm\" (ngSubmit)=\"save1(fnew.value)\">\n        <div class=\"form-group\">\n          <label for=\"Name\">Event's Name</label>\n          <input #Name=\"ngModel\" ngModel name=\"Name\" id=\"Name\" type=\"text\" class=\"form-control\" required>\n          <div class=\"alert alert-danger\" *ngIf=\"Name.touched && Name.invalid\">\n            Name is Required\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"Date\">From-</label>\n          <div class=\"input-group\">\n          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n            ngModel name=\"dp\"  ngbDatepicker #d=\"ngbDatepicker\" (navigate)=\"date = $event.next\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-light calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"EDate\">To-</label>\n          <div class=\"input-group\">\n          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n             ngModel name=\"dpe\" ngbDatepicker #e=\"ngbDatepicker\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-light calendar\" (click)=\"e.toggle()\" type=\"button\"></button>\n            </div>\n          </div>\n        </div>\n        \n      \n        <div class=\"form-group\">\n          <label for=\"category\">Category</label>\n          <select ngModel name=\"category\" id=\"category\" class=\"form-control\">\n            <option value=\"\">Select</option>\n            <option *ngFor=\"let c of categories1$ | async\" [value]=\"c.key\">\n              {{c.payload.val().name}}\n            </option>\n          </select>\n        </div>\n  \n  \n        <div class=\"form-group\">\n          <label for=\"about\">About</label>\n          <textarea maxlength=\"150\" class=\"form-control\" id=\"about\"  ngModel name=\"about\"  #about=\"ngModel\" rows=\"3\"></textarea>\n        </div>\n      \n      \n        <div class=\"form-group\">\n            <label for=\"imageUrl\">Image Url</label>\n            <input #imageUrl=\"ngModel\" ngModel name=\"imageUrl\" id=\"imageUrl\" type=\"text\" class=\"form-control\" required url>\n            <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n              <div *ngIf=\"imageUrl.errors.required\">*Required*</div>\n              <div *ngIf=\"imageUrl.errors.url\">Image url should be valid</div>\n            </div>\n        </div>\n      \n      \n        <button class=\"btn btn-success\">Save</button>\n        </form>\n  </div>\n  \n  </div>\n  \n  \n  \n    \n  "

/***/ }),

/***/ "./src/app/new-form/new-form.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-form/new-form.component.ts ***!
  \************************************************/
/*! exports provided: NewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormComponent", function() { return NewFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var _usersave_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usersave.service */ "./src/app/usersave.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewFormComponent = /** @class */ (function () {
    function NewFormComponent(db, router, categoryService1, usersaveService) {
        this.db = db;
        this.router = router;
        this.categoryService1 = categoryService1;
        this.usersaveService = usersaveService;
        this.categories1$ = categoryService1.getCategories().snapshotChanges();
    }
    NewFormComponent.prototype.save1 = function (user) {
        this.router.navigate(['/products']);
        return this.usersaveService.create(user);
    };
    NewFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-form',
            template: __webpack_require__(/*! ./new-form.component.html */ "./src/app/new-form/new-form.component.html"),
            styles: [__webpack_require__(/*! ./new-form.component.css */ "./src/app/new-form/new-form.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"], _usersave_service__WEBPACK_IMPORTED_MODULE_4__["UsersaveService"]])
    ], NewFormComponent);
    return NewFormComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ndiv.col-3,div.col-9 {\r\n    padding-top: 20px;\r\n    text-align: center;\r\n    \r\n}\r\ndiv.col-3 {\r\n    margin-left: 30px;\r\n    max-width: 30%;   \r\n}\r\ndiv.col-9 {\r\n    max-width: 70%;\r\n}\r\n.list-group{\r\n    box-shadow: 10px 10px 25px gray;\r\n    border-radius: 20px;\r\n}\r\ndiv.col {\r\n    margin:0;\r\n}\r\n.card{\r\n    border-radius: 20px;\r\n    box-shadow: 10px 10px 20px gray;\r\n\r\n}\r\n.btn-light{\r\n    margin: 20px;\r\n}\r\n/*flip*/\r\n/* The flip box container - set the width and height to whatever you want. \r\nWe have added the border property to demonstrate that the flip itself goes out of the box on hover \r\n(remove perspective if you don't want the 3D effect */\r\n.flip-box {\r\n    margin: 10px;\r\n    width: 320px;\r\n    height: 342px;\r\n    -webkit-perspective: 1000px;\r\n            perspective: 1000px; /* Remove this if you don't want the 3D effect */\r\n  }\r\n/* This container is needed to position the front and back side */\r\n.flip-box-inner {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    transition: -webkit-transform 0.8s;\r\n    transition: transform 0.8s;\r\n    transition: transform 0.8s, -webkit-transform 0.8s;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n  }\r\n/* Do an horizontal flip when you move the mouse over the flip box container */\r\n.flip-box:hover .flip-box-inner {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n  }\r\n/* Position the front and back side */\r\n.flip-box-front, .flip-box-back {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    border-radius: 20px;\r\n\r\n}\r\n/* Style the front side (fallback if image is missing) */\r\n.flip-box-front {\r\n    background-color: #000;\r\n    color: black;\r\n  }\r\n/* Style the back side */\r\n.flip-box-back {\r\n    background-color: black;\r\n    color: white;\r\n    padding: 100px;\r\n    font-size: 20px;\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n  }\r\ndiv.about{\r\n    padding: 30px 30px;\r\n    text-align: center;\r\n    /* white-space: nowrap;  */\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;  \r\n}\r\n.card-body h5{\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\nimg.card-img-top{\r\n    border-radius: 20px;\r\n}"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-3\">\r\n    <div class=\"list-group\">\r\n      <a *ngFor=\"let c of categories$ | async\" routerLink=\"/products\" [queryParams]=\"{category: c.key}\"  class=\"list-group-item\"\r\n      [class.active]=\"category === c.key\">\r\n        {{c.payload.val().name}}\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-9\">\r\n    <div class=\"row\">\r\n      <ng-container *ngFor=\"let p of filteredProducts; let i=index\">\r\n        <div class=\"col\">\r\n\r\n\r\n          <div class=\"flip-box\">\r\n            <div class=\"flip-box-inner\">\r\n              <div class=\"flip-box-front\">\r\n\r\n                <div class=\"card\" style=\"width: 20rem;\">\r\n                  <img class=\"card-img-top\" src={{p.imageUrl}} height='240' width='320' alt=\"Card image cap\">\r\n                  <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">{{p.Name}}</h5>\r\n                    <p class=\"card-text\">{{p.dp.day}}.{{p.dp.month}}.{{p.dp.year}}-{{p.dpe.day}}.{{p.dpe.month}}.{{p.dpe.year}}</p>                   \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"about flip-box-back\">\r\n                {{p.about}}<br>\r\n                <a routerLink=\"/register\" class=\"btn btn-light\" (click)=\"setval(p.Name)\">Register</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"(i+1) % 2 === 0\" ></div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usersave_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../usersave.service */ "./src/app/usersave.service.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event.service */ "./src/app/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, usersave1, event1, categoryService, db) {
        var _this = this;
        this.usersave1 = usersave1;
        this.event1 = event1;
        this.categoryService = categoryService;
        this.db = db;
        this.filter = {};
        usersave1.getAll().subscribe(function (products) {
            _this.products = products;
            route.queryParamMap.subscribe(function (queryParams) {
                _this.category = queryParams.get('category');
                _this.filteredProducts = (_this.category) ?
                    _this.products.filter(function (p) { return p.category === _this.category; }) :
                    _this.products;
            });
        });
        this.categories$ = categoryService.getCategories().snapshotChanges();
    }
    ProductsComponent.prototype.setval = function (x) {
        this.event = x;
        this.event1.setevent(this.event);
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _usersave_service__WEBPACK_IMPORTED_MODULE_1__["UsersaveService"], _event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"], _categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n\tposition: absolute;\r\n    background: url('https://us.123rf.com/450wm/crazyass/crazyass1602/crazyass160200025/54248995-blur-abstract-bokeh-of-street-city-night-light-background-abstract-traffic-background-black-and-whit.jpg?ver=6');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n\twidth: 100%;\r\n\tmargin-top: 0;\r\n\tcolor: #fff;\r\n}\r\n\r\nh1{\r\n    padding: 20px;\r\n    width: 100%;\r\n\ttext-align: center;\r\n\ttext-shadow: 10px 10px 15px grey;\t\r\n}\r\n\r\n.box {\r\n\twidth: 600px;\r\n\tmargin-left: 370px;\r\n}\r\n\r\nlabel {\r\n\tpadding-left: 10px;\r\n\tfont-size: 18px;\r\n}\r\n\r\ninput,select{\r\n\tborder:none;\r\n\tborder-radius: 10px;\r\n\tpadding: 10px;\r\n\tbox-shadow: 10px 10px 30px #A6A5AC;\r\n\tfont-size: 15px;\r\n\tbackground: #eee;\r\n}\r\n\r\ntextarea {\r\n\tpadding: 10px;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 10px 10px 25px #A6A5AC;\r\n\r\n}\r\n\r\ninput:hover, select:hover,textarea:hover {\r\n\tbackground-color: #bbb;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#imageid{\r\n\tborder: 1px solid transparent;\r\n\tbox-shadow: 10px 10px 25px transparent;\r\n\tbackground: none;\r\n}\r\n\r\n.btn {\r\n\tmargin: 50px;\r\n\tmargin-left: 250px;\r\n\twidth: 100px;\r\n\tbox-shadow: 5px 5px 20px grey;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n<div class='box'>\r\n  <h1>Register</h1>\r\n  <form #f1=\"ngForm\" (ngSubmit)=\"saveus(f1.value)\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"Name\">Name</label>\r\n      <input #Name=\"ngModel\" ngModel name=\"Name\" id=\"Name\" type=\"text\" class=\"form-control\" required>\r\n      <div class=\"alert alert-danger\" *ngIf=\"Name.touched && Name.invalid\">\r\n        Name is Required\r\n      </div> \r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"Stream\">Stream</label>\r\n      <select class=\"form-control\" #Stream=\"ngModel\" ngModel name=\"Stream\" id=\"Stream\" required>\r\n        <option>CSE</option>\r\n        <option>IT</option>\r\n        <option>ME</option>\r\n        <option>ECE</option>\r\n        <option>CE</option>\r\n        <option>EE</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"Email\">Email</label>\r\n      <input #Email=\"ngModel\" ngModel name=\"Email\" id=\"Email\" type=\"email\" class=\"form-control\" required>\r\n      <div class=\"alert alert-danger\" *ngIf=\"Email.touched && Email.invalid\">\r\n        Email is Required\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"Phone\">Phone Number</label>\r\n      <input maxlength=\"10\" #Phone=\"ngModel\" ngModel name=\"Phone\" id=\"Phone\" type=\"number\" class=\"form-control\" required>\r\n      <div class=\"alert alert-danger\" *ngIf=\"Phone.touched && Phone.invalid\">\r\n        Phone Number is Required\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"Year\">Year</label>\r\n      <select class=\"form-control\" #Year=\"ngModel\" ngModel name=\"Year\" id=\"Year\">\r\n        <option>1st Year</option>\r\n        <option>2nd Year</option>\r\n        <option>3rd Year</option>\r\n        <option>4th Year</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"about\">About</label>\r\n      <textarea maxlength=\"180\" class=\"form-control\" id=\"about\" name=\"about\" ngModel #about=\"ngModel\" rows=\"3\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"facebookUrl\">Facebook Url</label>\r\n      <input #facebookUrl=\"ngModel\" ngModel name=\"facebookUrl\" id=\"facebookUrl\" type=\"text\" class=\"form-control\" required url>\r\n      <div class=\"alert alert-danger\" *ngIf=\"facebookUrl.touched && facebookUrl.invalid\">\r\n        <div *ngIf=\"facebookUrl.errors.required\">*Required*</div>\r\n        <div *ngIf=\"facebookUrl.errors.url\">Image url should be valid</div>\r\n      </div>\r\n  </div>\r\n  \r\n    <div class=\"form-group\">\r\n      <label for=\"image\">Image</label>\r\n      <input id=\"imageid\" type=\"file\" (change)=\"featuredPhotoSelected($event)\" name=\"image\" class=\"form-control\" >\r\n    </div>\r\n    <button class=\"btn btn-success\">Save</button>\r\n\r\n  </form>\r\n\r\n\r\n</div>\r\n\r\n  \r\n</body>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registersave_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registersave.service */ "./src/app/registersave.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _usersave_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../usersave.service */ "./src/app/usersave.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event.service */ "./src/app/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(usersave, router, event1, route, category, registersave, db, user1) {
        this.usersave = usersave;
        this.router = router;
        this.event1 = event1;
        this.route = route;
        this.category = category;
        this.registersave = registersave;
        this.db = db;
        this.user1 = user1;
    }
    RegisterComponent.prototype.saveus = function (user) {
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('registrations');
        this.result = this.ref.push(user);
        this.id = this.result.key;
        this.upload(this.result.key);
        this.event = this.event1.show();
        this.done(this.result.key, this.event);
        this.router.navigate(['/admin/products']);
    };
    RegisterComponent.prototype.featuredPhotoSelected = function (event) {
        this.file = event.target.files[0];
    };
    RegisterComponent.prototype.upload = function (userID) {
        console.log("Selected filename:", this.file.name);
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref('/Images/' + this.file.name);
        var uploadTask = storageRef.put(this.file);
        uploadTask.on('state_changed', function (snapshot) {
        }, function (error) {
        }, function () {
            var downloadURL = uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log(downloadURL);
                firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/registrations/' + userID + '/imageURL').set(downloadURL);
            });
        });
    };
    RegisterComponent.prototype.done = function (ID, eventName) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/registrations/' + ID + '/event').set(eventName);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_usersave_service__WEBPACK_IMPORTED_MODULE_5__["UsersaveService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _categories_service__WEBPACK_IMPORTED_MODULE_7__["CategoriesService"], _registersave_service__WEBPACK_IMPORTED_MODULE_1__["RegistersaveService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/registersave.service.ts":
/*!*****************************************!*\
  !*** ./src/app/registersave.service.ts ***!
  \*****************************************/
/*! exports provided: RegistersaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistersaveService", function() { return RegistersaveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistersaveService = /** @class */ (function () {
    function RegistersaveService(db) {
        this.db = db;
    }
    RegistersaveService.prototype.create = function (user) {
        this.db.list('/registrations').push(user);
    };
    RegistersaveService.prototype.getAll = function () {
        return this.db.list('/registrations').valueChanges();
    };
    RegistersaveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], RegistersaveService);
    return RegistersaveService;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh1{\r\n    text-align: center;\r\n    padding: 20px;\r\n    text-shadow: 10px 10px 15px gray;\t\r\n    color: #fff;\r\n}\r\n\r\n\r\ndiv.main-content {\r\n    font-family: 'Space Mono', monospace;\r\n    padding: 30px;\r\n}\r\n\r\n\r\ndiv.col-sm {\r\n    margin: 20px;\r\n    /* display: flex;\r\n    justify-content: space-around; */\r\n}\r\n\r\n\r\n.card{\r\n  border-radius: 20px;\r\n  box-shadow: 10px 10px 20px gray;\r\n\r\n}\r\n\r\n\r\n/*flip*/\r\n\r\n\r\n/* The flip box container - set the width and height to whatever you want. \r\nWe have added the border property to demonstrate that the flip itself goes out of the box on hover \r\n(remove perspective if you don't want the 3D effect */\r\n\r\n\r\n.flip-box {\r\n  margin: 10px;\r\n  width: 320px;\r\n  height: 400px;\r\n  -webkit-perspective: 1000px;\r\n          perspective: 1000px; /* Remove this if you don't want the 3D effect */\r\n}\r\n\r\n\r\n/* This container is needed to position the front and back side */\r\n\r\n\r\n.flip-box-inner {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  transition: -webkit-transform 0.8s;\r\n  transition: transform 0.8s;\r\n  transition: transform 0.8s, -webkit-transform 0.8s;\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n\r\n/* Do an horizontal flip when you move the mouse over the flip box container */\r\n\r\n\r\n.flip-box:hover .flip-box-inner {\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n}\r\n\r\n\r\n/* Position the front and back side */\r\n\r\n\r\n.flip-box-front, .flip-box-back {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  border-radius: 20px;\r\n\r\n}\r\n\r\n\r\n/* Style the front side (fallback if image is missing) */\r\n\r\n\r\n.flip-box-front {\r\n  background-color: #000;\r\n  color: black;\r\n}\r\n\r\n\r\n/* Style the back side */\r\n\r\n\r\n.flip-box-back {\r\n  background-color: black;\r\n  color: white;\r\n  padding: 100px;\r\n  font-size: 20px;\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n}\r\n\r\n\r\ndiv.about{\r\n  padding: 20px 30px;\r\n  text-align: center;\r\n  /* white-space: nowrap;  */\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;  \r\n}\r\n\r\n\r\n.card-body p{\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin: 10px 0 0 0;\r\n}\r\n\r\n\r\nimg.card-img-top{\r\n  border-radius: 20px;\r\n}\r\n\r\n\r\n.size{\r\n  font-size:40px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n<div class=\"main-content\" height='100%' width='100%'>\r\n  <h1>All Registrations</h1>\r\n  <div class=\"row\">\r\n    <ng-container *ngFor=\"let p of registrations$  | async; let i=index\">\r\n      <div class=\"col-sm\">\r\n\r\n          <div class=\"flip-box\">\r\n              <div class=\"flip-box-inner\">\r\n                <div class=\"flip-box-front\">\r\n                  <div class=\"card\" style=\"width: 20rem;\">\r\n                    <img class=\"card-img-top\" src={{p.imageURL}} height='240' width='320' alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                      <h5 class=\"card-title\">{{p.Name}}</h5>\r\n                      <p class=\"card-text\"><p>Yooo, I'm from {{p.Stream}},{{p.Year}}</p>\r\n                      <p class=\"card-text\"><p>Event: {{p.event}}</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"about flip-box-back\">\r\n                  {{p.about}}<br><br>\r\n                  <a href=\"{{p.facebookUrl}}\"><i class=\"size fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        \r\n        <div *ngIf=\"(i+1) % 2 === 0\" ></div>\r\n      </div>\r\n    </ng-container>\r\n  </div>  \r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registersave_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registersave.service */ "./src/app/registersave.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(register) {
        this.register = register;
        this.isCollapsed = true;
        this.registrations$ = register.getAll();
    }
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_registersave_service__WEBPACK_IMPORTED_MODULE_1__["RegistersaveService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
        this.key = user.uid;
        console.log(user.uid);
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/users/' + uid);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/usersave.service.ts":
/*!*************************************!*\
  !*** ./src/app/usersave.service.ts ***!
  \*************************************/
/*! exports provided: UsersaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersaveService", function() { return UsersaveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersaveService = /** @class */ (function () {
    function UsersaveService(db) {
        this.db = db;
    }
    UsersaveService.prototype.create = function (user) {
        this.db.list('/usersave').push(user);
    };
    UsersaveService.prototype.getAll = function () {
        return this.db.list('/usersave').valueChanges();
    };
    UsersaveService.prototype.get = function (productId) {
        return this.db.object('/usersave/' + productId).valueChanges();
    };
    UsersaveService.prototype.update = function (eventId, event) {
        return this.db.object('/usersave/' + eventId).update(event);
    };
    UsersaveService.prototype.delete = function (productId) {
        return this.db.object('/usersave/' + productId).remove();
    };
    UsersaveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UsersaveService);
    return UsersaveService;
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
        apiKey: "AIzaSyC2yt9UenRDO8s-ILSVsVjW9o9HzkTs1KY",
        authDomain: "ooshop-d777b.firebaseapp.com",
        databaseURL: "https://ooshop-d777b.firebaseio.com",
        projectId: "ooshop-d777b",
        storageBucket: "ooshop-d777b.appspot.com",
        messagingSenderId: "206508736937"
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! C:\Users\IGU\WebNew\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map