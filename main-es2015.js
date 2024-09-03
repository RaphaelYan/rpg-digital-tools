(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@sentry/angular/node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@sentry/angular/node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy namespace object ***!
  \*************************************************************************************************************/
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
webpackEmptyAsyncContext.id = "./node_modules/@sentry/angular/node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive";

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: 'dd-builder',
        loadChildren: () => Promise.all(/*! import() | dd-builder-dd-builder-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("dd-builder-dd-builder-module")]).then(__webpack_require__.bind(null, /*! ./dd-builder/dd-builder.module */ "./src/app/dd-builder/dd-builder.module.ts")).then(m => m.DdBuilderModule)
    }, {
        path: 'dd-rules',
        loadChildren: () => __webpack_require__.e(/*! import() | dd-rules-dd-rules-module */ "dd-rules-dd-rules-module").then(__webpack_require__.bind(null, /*! ./dd-rules/dd-rules.module */ "./src/app/dd-rules/dd-rules.module.ts")).then(m => m.DdRulesModule)
    }, {
        path: 'dd-spells',
        loadChildren: () => Promise.all(/*! import() | dd-spells-dd-spells-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("dd-spells-dd-spells-module")]).then(__webpack_require__.bind(null, /*! ./dd-spells/dd-spells.module */ "./src/app/dd-spells/dd-spells.module.ts")).then(m => m.DdSpellsModule)
    }, {
        path: 'init',
        loadChildren: () => Promise.all(/*! import() | init-init-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("init-init-module")]).then(__webpack_require__.bind(null, /*! ./init/init.module */ "./src/app/init/init.module.ts")).then(m => m.InitModule)
    }, {
        path: 'resumes',
        loadChildren: () => Promise.all(/*! import() | resumes-resumes-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("resumes-resumes-module")]).then(__webpack_require__.bind(null, /*! ./resumes/resumes.module */ "./src/app/resumes/resumes.module.ts")).then(m => m.ResumesModule)
    }, {
        path: 'backgrounds',
        loadChildren: () => Promise.all(/*! import() | backgrounds-backgrounds-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("backgrounds-backgrounds-module")]).then(__webpack_require__.bind(null, /*! ./backgrounds/backgrounds.module */ "./src/app/backgrounds/backgrounds.module.ts")).then(m => m.BackgroundsModule)
    }, {
        path: 'proba',
        loadChildren: () => Promise.all(/*! import() | proba-proba-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("proba-proba-module")]).then(__webpack_require__.bind(null, /*! ./proba/proba.module */ "./src/app/proba/proba.module.ts")).then(m => m.ProbaModule)
    }, {
        path: 'escape',
        loadChildren: () => Promise.all(/*! import() | escape-escape-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("escape-escape-module")]).then(__webpack_require__.bind(null, /*! ./escape/escape.module */ "./src/app/escape/escape.module.ts")).then(m => m.EscapeModule)
    }, {
        path: 'nwod',
        loadChildren: () => Promise.all(/*! import() | nwod-nwod-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("nwod-nwod-module")]).then(__webpack_require__.bind(null, /*! ./nwod/nwod.module */ "./src/app/nwod/nwod.module.ts")).then(m => m.NwodModule)
    }, {
        path: 'paranoia',
        loadChildren: () => Promise.all(/*! import() | paranoia-paranoia-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("paranoia-paranoia-module")]).then(__webpack_require__.bind(null, /*! ./paranoia/paranoia.module */ "./src/app/paranoia/paranoia.module.ts")).then(m => m.ParanoiaModule)
    }, {
        path: 'auctions',
        loadChildren: () => Promise.all(/*! import() | auctions-auctions-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("auctions-auctions-module")]).then(__webpack_require__.bind(null, /*! ./auctions/auctions.module */ "./src/app/auctions/auctions.module.ts")).then(m => m.AuctionsModule)
    }, {
        path: 'auctions',
        loadChildren: () => Promise.all(/*! import() | auctions-auctions-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("auctions-auctions-module")]).then(__webpack_require__.bind(null, /*! ./auctions/auctions.module */ "./src/app/auctions/auctions.module.ts")).then(m => m.AuctionsModule)
    }, {
        path: 'l-homme-a-la-jambe-de-bois',
        loadChildren: () => Promise.all(/*! import() | campaign-wirt-campaign-wirt-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("campaign-wirt-campaign-wirt-module")]).then(__webpack_require__.bind(null, /*! ./campaign-wirt/campaign-wirt.module */ "./src/app/campaign-wirt/campaign-wirt.module.ts")).then(m => m.CampaignWirtModule)
    }, {
        path: 'dd-gardiens-du-temps',
        loadChildren: () => Promise.all(/*! import() | campaign-gardiens-du-temps-campaign-gardiens-du-temps-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("campaign-gardiens-du-temps-campaign-gardiens-du-temps-module")]).then(__webpack_require__.bind(null, /*! ./campaign-gardiens-du-temps/campaign-gardiens-du-temps.module */ "./src/app/campaign-gardiens-du-temps/campaign-gardiens-du-temps.module.ts")).then(m => m.CampaignGardiensDuTempsModule)
    }, {
        path: '',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~auctions-auctions-module~backgrounds-backgrounds-module~campaign-gardiens-du-temps-campaign-~59107db0"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: false })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: false })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ "./src/app/components/side-nav/side-nav.component.ts");












function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r4.displayName, " ");
} }
function AppComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login with Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_11_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" doc id: ", log_r10.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" uid: ", log_r10.uid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" displayName: ", log_r10.displayName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" timestamp: ", log_r10.timestampStr, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" url: ", log_r10.url, "");
} }
function AppComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_11_p_2_Template, 11, 5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r3.logs));
} }
class AppComponent {
    constructor(angularFireAuth, afs, router) {
        this.angularFireAuth = angularFireAuth;
        this.afs = afs;
        this.router = router;
        this.trackInit = false;
    }
    ngOnInit() {
        $('[data-toggle="tooltip"]').tooltip();
        this.angularFireAuth.authState.subscribe((user) => {
            if (!user) {
                return;
            }
            this.user = user;
            this.logsCollection = this.afs.collection('logs', (ref) => {
                return ref.orderBy('timestamp', 'desc');
            });
            this.logs = this.logsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                const date = new Date(data['timestamp']);
                const timestampStr = date.getDate() + '/' + (1 + date.getMonth()) + ' ' + date.getHours() + ':' + date.getMinutes();
                return Object.assign({ id, timestampStr }, data);
            })));
            this.logUserAction();
            this.trackRouteChange();
        });
    }
    login() {
        this.angularFireAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    }
    logout() {
        this.angularFireAuth.signOut();
    }
    isAdmin() {
        return this.user && this.user.email === 'maferyt@gmail.com';
    }
    trackRouteChange() {
        if (this.trackInit) {
            return;
        }
        this.trackInit = true;
        this.router.events.subscribe((event) => {
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"])) {
                return;
            }
            setTimeout(() => {
                this.logUserAction();
            }, 1000);
        });
    }
    logUserAction() {
        if (!this.user || this.isAdmin()) {
            return;
        }
        this.logsCollection.add({
            uid: this.user.uid,
            email: this.user.email,
            displayName: this.user.displayName,
            photoURL: this.user.photoURL,
            timestamp: Date.now(),
            url: location.pathname
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 5, consts: [[1, "login"], [4, "ngIf", "ngIfElse"], ["showLogin", ""], ["target", "_blank", "href", "https://github.com/RaphaelYan/rpg-digital-tools", "data-placement", "left", "data-toggle", "tooltip", "title", "Check me on Github !", 1, "link-github", "tooltipped"], ["src", "assets/Octocat.png"], [1, "container"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [2, "clear", "both"], [4, "ngFor", "ngForOf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-side-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "main", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_11_Template, 4, 3, "div", 6);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.angularFireAuth.user))("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__["SideNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".link-github[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 15px;\n}\n.link-github[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.container[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n.login[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 100px;\n  top: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0FDRUo7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rLWdpdGh1YiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmxvZ2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTAwcHg7XG4gIHRvcDogOXB4O1xufVxuIiwiLmxpbmstZ2l0aHViIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgcmlnaHQ6IDE1cHg7XG59XG4ubGluay1naXRodWIgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmxvZ2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTAwcHg7XG4gIHRvcDogOXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ "./src/app/components/side-nav/side-nav.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _sentry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sentry */ "./src/app/sentry.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");












class AppModule {
    constructor() {
        Object(_sentry__WEBPACK_IMPORTED_MODULE_8__["initSentry"])();
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _sentry__WEBPACK_IMPORTED_MODULE_8__["SentryErrorHandler"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__["SideNavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__["SideNavComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _sentry__WEBPACK_IMPORTED_MODULE_8__["SentryErrorHandler"] },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function SideNavComponent_ng_template_1_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 7);
} }
const _c0 = function () { return { exact: true }; };
function SideNavComponent_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_ng_template_1_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.hideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", menu_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r1.title);
} }
function SideNavComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SideNavComponent_ng_template_1_li_0_Template, 1, 0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_template_1_li_1_Template, 3, 4, "li", 6);
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r1.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menu_r1.separator);
} }
class SideNavComponent {
    constructor() {
        this.toggleSideMenu = false;
        this.menus = [
            {
                title: 'Accueil',
                url: ''
            }, {
                separator: true
            }, {
                title: 'D&D 5 - Builder',
                url: '/dd-builder'
            }, {
                title: 'D&D 5 - Règles custom',
                url: '/dd-rules'
            }, {
                title: 'D&D 5 - Init',
                url: '/init'
            }, {
                title: 'D&D 5 - Probas',
                url: '/proba'
            }, {
                title: 'D&D 5 - Spells',
                url: '/dd-spells'
            }, {
                separator: true
            }, {
                title: 'D&D 5 - Campagne - Wirt',
                url: '/l-homme-a-la-jambe-de-bois'
            }, {
                title: 'D&D 5 - Campagne - Gardiens du Temps',
                url: '/dd-gardiens-du-temps'
            }, {
                separator: true
            }, {
                title: 'Chronicles of Darkness',
                url: '/nwod'
            }, {
                separator: true
            }, {
                title: 'Résumés des parties',
                url: '/resumes'
            }, {
                separator: true
            }, {
                title: 'Escape games',
                url: '/escape'
            }, {
                separator: true
            }, {
                title: 'WOW Auctions',
                url: '/auctions'
            }, {
                separator: true
            }, {
                title: 'Paranoia',
                url: '/paranoia'
            }
        ];
    }
    hideMenu() {
        this.toggleSideMenu = false;
    }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], decls: 6, vars: 7, consts: [[1, "side-nav"], ["ngFor", "", 3, "ngForOf"], [1, "menu-icon", 3, "click"], ["x", "0", "y", "0", "width", "54px", "height", "54px", "viewBox", "0 0 54 54"], ["d", "M16.500,27.000 C16.500,27.000 24.939,27.000 38.500,27.000 C52.061,27.000 49.945,15.648 46.510,11.367 C41.928,5.656 34.891,2.000 27.000,2.000 C13.193,2.000 2.000,13.193 2.000,27.000 C2.000,40.807 13.193,52.000 27.000,52.000 C40.807,52.000 52.000,40.807 52.000,27.000 C52.000,13.000 40.837,2.000 27.000,2.000 "], ["class", "separator", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions", "click", 4, "ngIf"], [1, "separator"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions", "click"], [3, "routerLink"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_template_1_Template, 2, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_Template_div_click_2_listener() { return ctx.toggleSideMenu = !ctx.toggleSideMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fixed", ctx.toggleSideMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-closed", !ctx.toggleSideMenu)("is-opened", ctx.toggleSideMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@-webkit-keyframes pathanimation {\n  40% {\n    stroke-dasharray: 22 230;\n  }\n  60% {\n    stroke-dashoffset: -65;\n  }\n  100% {\n    stroke-dashoffset: -65;\n    stroke-dasharray: 160;\n  }\n}\n@keyframes pathanimation {\n  40% {\n    stroke-dasharray: 22 230;\n  }\n  60% {\n    stroke-dashoffset: -65;\n  }\n  100% {\n    stroke-dashoffset: -65;\n    stroke-dasharray: 160;\n  }\n}\n@-webkit-keyframes pathanimation-out {\n  100% {\n    stroke-dashoffset: 0;\n  }\n  60% {\n    stroke-dasharray: 22 230;\n  }\n  40% {\n    stroke-dashoffset: -65;\n  }\n  0% {\n    stroke-dashoffset: -65;\n    stroke-dasharray: 160;\n  }\n}\n@keyframes pathanimation-out {\n  100% {\n    stroke-dashoffset: 0;\n  }\n  60% {\n    stroke-dasharray: 22 230;\n  }\n  40% {\n    stroke-dashoffset: -65;\n  }\n  0% {\n    stroke-dashoffset: -65;\n    stroke-dasharray: 160;\n  }\n}\n.side-nav[_ngcontent-%COMP%] {\n  transition: transform 0.5s;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  transition: left 0.5s;\n}\n.menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: background 1s steps(1, end);\n  transform: translateX(-50%) translateY(-50%);\n}\n.menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  transform: translateY(-6px);\n  transition: transform 1s;\n  transform-origin: 100% 50%;\n}\n.menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  transform: translateY(6px);\n}\n.menu-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: opacity 1s steps(1, end);\n}\n.menu-icon.is-opened[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: background 1s steps(1, start);\n}\n.menu-icon.is-opened[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  transition: background 1s, transform 1s;\n  transform: translateX(-3px) translateY(-8px) rotate(-45deg);\n}\n.menu-icon.is-opened[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  transition: background 1s, transform 1s;\n  transform: translateX(-3px) translateY(8px) rotate(45deg);\n}\n.menu-icon.is-opened[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: opacity 1s steps(1, start);\n  -webkit-animation: pathanimation 1s linear;\n  animation: pathanimation 1s linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n.menu-icon.is-closed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .menu-icon.is-closed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  transition: background 1s, transform 1s;\n}\n.menu-icon.is-closed[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  -webkit-animation: pathanimation-out 1s linear;\n  animation: pathanimation-out 1s linear;\n}\n.menu-icon.is-closed[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::before {\n  transition: transform 0.5s;\n  transform: translateY(-10px);\n}\n.menu-icon.is-closed[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::after {\n  transition: transform 0.5s;\n  transform: translateY(10px);\n}\n.side-nav[_ngcontent-%COMP%] {\n  width: 250px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  margin: 0;\n  height: calc(100% + 60px);\n  height: 100%;\n  padding-bottom: 60px;\n  background-color: #fff;\n  z-index: 999;\n  overflow-y: auto;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform: translateX(-105%);\n}\n.side-nav.fixed[_ngcontent-%COMP%] {\n  left: 0;\n  transform: translateX(0);\n  position: fixed;\n}\n.side-nav[_ngcontent-%COMP%]   .router-link-active[_ngcontent-%COMP%] {\n  background-color: #BBDEFB;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  z-index: 99;\n  cursor: pointer;\n  font-size: 42px;\n}\n.menu-icon.is-opened[_ngcontent-%COMP%] {\n  left: 250px;\n}\n.menu-icon.is-opened[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .menu-icon.is-opened[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n.menu-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: 7px;\n  width: 40px;\n  height: 40px;\n  vertical-align: inherit;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border-radius: 50%;\n}\n.menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  position: absolute;\n  display: block;\n  width: 22px;\n  height: 2px;\n  background-color: black;\n}\n.menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n}\n.menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  top: 0;\n  left: 0;\n}\n.menu-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0;\n  fill: transparent;\n  stroke-width: 2px;\n  stroke: black;\n  stroke-dasharray: 22 230;\n}\n.menu-icon.is-opened[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.menu-icon.is-opened[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style-type: none;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  float: none;\n  list-style-type: none;\n  margin-top: 5px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.87);\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  padding: 5px 32px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\nul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.separator[_ngcontent-%COMP%] {\n  height: 30px;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1uYXYva2V5ZnJhbWVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcmFwaGFlbHlhbi93b3Jrc3BhY2UvUGVyc28vcnBnLWRpZ2l0YWwtdG9vbHMvc3JjL2FwcC9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3JhcGhhZWx5YW4vd29ya3NwYWNlL1BlcnNvL3JwZy1kaWdpdGFsLXRvb2xzL3NyYy9hcHAvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRTtJQUNFLHdCQU5jO0VDR2hCO0VES0E7SUFDRSxzQkFQUztFQ0lYO0VES0E7SUFDRSxzQkFWUztJQVdULHFCQVpZO0VDU2Q7QUFDRjtBRE1BO0VBQ0U7SUFDRSx3QkFuQmM7RUNlaEI7RURNQTtJQUNFLHNCQXBCUztFQ2dCWDtFRE1BO0lBQ0Usc0JBdkJTO0lBd0JULHFCQXpCWTtFQ3FCZDtBQUNGO0FET0E7RUFDRTtJQUNFLG9CQUFBO0VDTEY7RURPQTtJQUNFLHdCQW5DYztFQzhCaEI7RURPQTtJQUNFLHNCQXBDUztFQytCWDtFRE9BO0lBQ0Usc0JBdkNTO0lBd0NULHFCQXpDWTtFQ29DZDtBQUNGO0FEUUE7RUFDRTtJQUNFLG9CQUFBO0VDTkY7RURRQTtJQUNFLHdCQW5EYztFQzZDaEI7RURRQTtJQUNFLHNCQXBEUztFQzhDWDtFRFFBO0lBQ0Usc0JBdkRTO0lBd0RULHFCQXpEWTtFQ21EZDtBQUNGO0FDdkNBO0VDWEUsMEJEWUE7QUQyQ0Y7QUN6Q0E7RUNkRSxxQkRlQTtBRDhDRjtBQzdDRTtFQ2hCQSx1Q0RpQkU7RUNYRiw0Q0RZcUI7QURtRHZCO0FDbERJO0VDYkYsMkJEY3VCO0VDSHZCLHdCQUFBO0VBTEEsMEJEVThCO0FEeURoQztBQ3ZESTtFQ2xCRiwwQkRtQnVCO0FEMkR6QjtBQ3hERTtFQzVCQSxvQ0Q2QkU7QUQ0REo7QUN6REk7RUNoQ0YseUNEaUNJO0FENkROO0FDNURNO0VDbENKLHVDRG1DTTtFQzdCTiwyREQ4QnlCO0FEa0UzQjtBQ2hFTTtFQ3RDSix1Q0R1Q007RUNqQ04seUREa0N5QjtBRHNFM0I7QUNuRUk7RUMzQ0Ysc0NENENJO0VDdkJKLDBDRHdCdUI7RUN2QnZCLGtDRHVCdUI7RUNuQnZCLHFDRG9CaUM7RUNuQmpDLDZCRG1CaUM7QUR5RW5DO0FDckVJO0VDbERGLHVDRG1ESTtBRHlFTjtBQ3ZFSTtFQ2hDRiw4Q0RpQ3VCO0VDaEN2QixzQ0RnQ3VCO0FEMEV6QjtBQ3ZFTTtFQ3pESiwwQkQwRE07RUNwRE4sNEJEcUR5QjtBRDZFM0I7QUMzRU07RUM3REosMEJEOERNO0VDeEROLDJCRHlEeUI7QURpRjNCO0FDMUVBO0VBQ0UsWUF2RVc7RUF3RVgsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUM3RUEsNEJEOEVtQjtBRCtFckI7QUM3RUU7RUFDRSxPQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FEK0VKO0FDNUVFO0VBQ0UseUJBeEZnQjtBRHNLcEI7QUMzRUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBT0EsZUFBQTtFQUNBLGVBQUE7QUR3RUY7QUMvRUU7RUFDRSxXQXJHUztBRHNMYjtBQ2hGSTtFQUNFLHFCQXJHbUI7QUR1THpCO0FDN0VFO0VBQ0UsV0F0R1U7RUF1R1YsV0F4R1E7RUF5R1IsWUF6R1E7RUEwR1IsdUJBQUE7QUQrRUo7QUMzRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEOEVGO0FDN0VFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBcEhnQjtFQXFIaEIsdUJBNUhjO0FEMk1sQjtBQzdFRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0FEK0VKO0FDOUVJO0VBQ0UsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FEZ0ZOO0FDN0VFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBbklnQjtFQW9JaEIsYUEzSWM7RUE0SWQsd0JBQUE7QUQrRUo7QUM1RUk7RUFDRSw2QkFBQTtBRDhFTjtBQzVFSTtFQUNFLFVBQUE7QUQ4RU47QUN6RUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUQ0RUY7QUMzRUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRDZFSjtBQzVFSTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRDhFTjtBQzdFTTtFQUNFLHFDQUFBO0FEK0VSO0FDN0VNO0VBRUUsVUFBQTtBRDhFUjtBQzNFSTtFQUNFLG9DQUFBO0FENkVOO0FDeEVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUQyRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhc2hhcnJheS1zdGFydDogMjIgMjMwO1xuJGRhc2hhcnJheS1lbmQ6IDE2MDtcbiRkYXNob2Zmc2V0OiAtNjU7XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwYXRoYW5pbWF0aW9uIHtcbiAgNDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAkZGFzaGFycmF5LXN0YXJ0O1xuICB9XG4gIDYwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6ICRkYXNob2Zmc2V0O1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAkZGFzaG9mZnNldDtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAkZGFzaGFycmF5LWVuZDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHBhdGhhbmltYXRpb24ge1xuICA0MCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6ICRkYXNoYXJyYXktc3RhcnQ7XG4gIH1cbiAgNjAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogJGRhc2hvZmZzZXQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6ICRkYXNob2Zmc2V0O1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6ICRkYXNoYXJyYXktZW5kO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwYXRoYW5pbWF0aW9uLW91dCB7XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDYwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogJGRhc2hhcnJheS1zdGFydDtcbiAgfVxuICA0MCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAkZGFzaG9mZnNldDtcbiAgfVxuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6ICRkYXNob2Zmc2V0O1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6ICRkYXNoYXJyYXktZW5kO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcGF0aGFuaW1hdGlvbi1vdXQge1xuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICA2MCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6ICRkYXNoYXJyYXktc3RhcnQ7XG4gIH1cbiAgNDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogJGRhc2hvZmZzZXQ7XG4gIH1cbiAgMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAkZGFzaG9mZnNldDtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAkZGFzaGFycmF5LWVuZDtcbiAgfVxufVxuIiwiQC13ZWJraXQta2V5ZnJhbWVzIHBhdGhhbmltYXRpb24ge1xuICA0MCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDIyIDIzMDtcbiAgfVxuICA2MCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtNjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC02NTtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxNjA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcGF0aGFuaW1hdGlvbiB7XG4gIDQwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjIgMjMwO1xuICB9XG4gIDYwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC02NTtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTY1O1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE2MDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHBhdGhhbmltYXRpb24tb3V0IHtcbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbiAgNjAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyMiAyMzA7XG4gIH1cbiAgNDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTY1O1xuICB9XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTY1O1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE2MDtcbiAgfVxufVxuQGtleWZyYW1lcyBwYXRoYW5pbWF0aW9uLW91dCB7XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDYwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjIgMjMwO1xuICB9XG4gIDQwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC02NTtcbiAgfVxuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC02NTtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxNjA7XG4gIH1cbn1cbi5zaWRlLW5hdiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xufVxuXG4ubWVudS1pY29uIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogbGVmdCAwLjVzO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXM7XG59XG4ubWVudS1pY29uIHNwYW4ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMXMgc3RlcHMoMSwgZW5kKTtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzIHN0ZXBzKDEsIGVuZCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXMgc3RlcHMoMSwgZW5kKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5tZW51LWljb24gc3Bhbjo6YmVmb3JlLCAubWVudS1pY29uIHNwYW46OmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAxcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xufVxuLm1lbnUtaWNvbiBzcGFuOjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG59XG4ubWVudS1pY29uIHN2ZyB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBzdGVwcygxLCBlbmQpO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgc3RlcHMoMSwgZW5kKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBzdGVwcygxLCBlbmQpO1xufVxuLm1lbnUtaWNvbi5pcy1vcGVuZWQgc3BhbiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcyBzdGVwcygxLCBzdGFydCk7XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcyBzdGVwcygxLCBzdGFydCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXMgc3RlcHMoMSwgc3RhcnQpO1xufVxuLm1lbnUtaWNvbi5pcy1vcGVuZWQgc3Bhbjo6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzLCB0cmFuc2Zvcm0gMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcywgdHJhbnNmb3JtIDFzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzLCB0cmFuc2Zvcm0gMXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHRyYW5zbGF0ZVkoLThweCkgcm90YXRlKC00NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgdHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHRyYW5zbGF0ZVkoLThweCkgcm90YXRlKC00NWRlZyk7XG59XG4ubWVudS1pY29uLmlzLW9wZW5lZCBzcGFuOjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcywgdHJhbnNmb3JtIDFzO1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMXMsIHRyYW5zZm9ybSAxcztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcywgdHJhbnNmb3JtIDFzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHRyYW5zbGF0ZVkoOHB4KSByb3RhdGUoNDVkZWcpO1xufVxuLm1lbnUtaWNvbi5pcy1vcGVuZWQgc3ZnIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIHN0ZXBzKDEsIHN0YXJ0KTtcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIHN0ZXBzKDEsIHN0YXJ0KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBzdGVwcygxLCBzdGFydCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXRoYW5pbWF0aW9uIDFzIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBwYXRoYW5pbWF0aW9uIDFzIGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4ubWVudS1pY29uLmlzLWNsb3NlZCBzcGFuOjpiZWZvcmUsIC5tZW51LWljb24uaXMtY2xvc2VkIHNwYW46OmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzLCB0cmFuc2Zvcm0gMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcywgdHJhbnNmb3JtIDFzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzLCB0cmFuc2Zvcm0gMXM7XG59XG4ubWVudS1pY29uLmlzLWNsb3NlZCBzdmcge1xuICAtd2Via2l0LWFuaW1hdGlvbjogcGF0aGFuaW1hdGlvbi1vdXQgMXMgbGluZWFyO1xuICBhbmltYXRpb246IHBhdGhhbmltYXRpb24tb3V0IDFzIGxpbmVhcjtcbn1cbi5tZW51LWljb24uaXMtY2xvc2VkOmhvdmVyIHNwYW46OmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xufVxuLm1lbnUtaWNvbi5pcy1jbG9zZWQ6aG92ZXIgc3Bhbjo6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbn1cblxuLnNpZGUtbmF2IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDYwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiA5OTk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwNSUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDUlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDUlKTtcbn1cbi5zaWRlLW5hdi5maXhlZCB7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLnNpZGUtbmF2IC5yb3V0ZXItbGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJERUZCO1xufVxuXG4ubWVudS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDQycHg7XG59XG4ubWVudS1pY29uLmlzLW9wZW5lZCB7XG4gIGxlZnQ6IDI1MHB4O1xufVxuLm1lbnUtaWNvbi5pcy1vcGVuZWQgc3Bhbjo6YmVmb3JlLCAubWVudS1pY29uLmlzLW9wZW5lZCBzcGFuOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5tZW51LWljb24gc3ZnIHtcbiAgbWFyZ2luOiA3cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xufVxuXG4ubWVudS1pY29uIHtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogNTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1lbnUtaWNvbiBzcGFuLCAubWVudS1pY29uIHNwYW46OmJlZm9yZSwgLm1lbnUtaWNvbiBzcGFuOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4ubWVudS1pY29uIHNwYW4ge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxuLm1lbnUtaWNvbiBzcGFuOjpiZWZvcmUsIC5tZW51LWljb24gc3Bhbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4ubWVudS1pY29uIHN2ZyB7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbGw6IHRyYW5zcGFyZW50O1xuICBzdHJva2Utd2lkdGg6IDJweDtcbiAgc3Ryb2tlOiBibGFjaztcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjIgMjMwO1xufVxuLm1lbnUtaWNvbi5pcy1vcGVuZWQgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm1lbnUtaWNvbi5pcy1vcGVuZWQgc3ZnIHtcbiAgb3BhY2l0eTogMTtcbn1cblxudWwge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbnVsIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbm9uZTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG51bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAzMnB4O1xufVxudWwgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG51bCBsaSBhOmFjdGl2ZSwgdWwgbGkgYTpob3ZlciB7XG4gIG91dGxpbmU6IDA7XG59XG51bCBsaS5hY3RpdmUgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnNlcGFyYXRvciB7XG4gIGhlaWdodDogMzBweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufSIsIkBpbXBvcnQgJy4uLy4uL21peGlucyc7XG5AaW1wb3J0ICcuL2tleWZyYW1lcyc7XG5cbiRtZW51LXdpZHRoOiAyNTBweDtcbiRtZW51LWljb24tY29sb3I6IGJsYWNrO1xuJG1lbnUtaWNvbi1jb2xvci1hY3RpdmU6IHJlZDtcbiR0cmFuc2l0aW9uLWFzaWRlOiAwLjVzO1xuJHRyYW5zaXRpb24taWNvbjogMXM7XG4kbWVudS1yb3V0ZS1hY3RpdmU6ICNCQkRFRkI7XG4kaWNvbi1zaXplOiA0MHB4O1xuJGljb24tbWFyZ2luOiA3cHg7XG4kaWNvbi1zdHJva2Utd2lkdGg6IDJweDtcblxuLy8gVFJBTlNJVElPTlMgJiBUUkFOU0ZPUk1TICYgQU5JTUFUSU9OU1xuLnNpZGUtbmF2IHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbih0cmFuc2Zvcm0gJHRyYW5zaXRpb24tYXNpZGUpO1xufVxuLm1lbnUtaWNvbiB7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24obGVmdCAkdHJhbnNpdGlvbi1hc2lkZSk7XG4gIHNwYW4ge1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYmFja2dyb3VuZCAkdHJhbnNpdGlvbi1pY29uIHN0ZXBzKDEsIGVuZCkpO1xuICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkpO1xuICAgICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xuICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTZweCkpO1xuICAgICAgQGluY2x1ZGUgZml4LXdlYmtpdC10cmFuc2l0aW9uKCR0cmFuc2l0aW9uLWljb24pO1xuICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLW9yaWdpbigxMDAlIDUwJSk7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKDZweCkpO1xuICAgIH1cbiAgfVxuICBzdmcge1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24ob3BhY2l0eSAkdHJhbnNpdGlvbi1pY29uIHN0ZXBzKDEsIGVuZCkpO1xuICB9XG4gICYuaXMtb3BlbmVkIHtcbiAgICBzcGFuIHtcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYmFja2dyb3VuZCAkdHJhbnNpdGlvbi1pY29uIHN0ZXBzKDEsIHN0YXJ0KSk7XG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGJhY2tncm91bmQgJHRyYW5zaXRpb24taWNvbiwgdHJhbnNmb3JtICR0cmFuc2l0aW9uLWljb24pO1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtM3B4KSB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpKTtcbiAgICAgIH1cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihiYWNrZ3JvdW5kICR0cmFuc2l0aW9uLWljb24sIHRyYW5zZm9ybSAkdHJhbnNpdGlvbi1pY29uKTtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoLTNweCkgdHJhbnNsYXRlWSg4cHgpIHJvdGF0ZSg0NWRlZykpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdmcge1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihvcGFjaXR5ICR0cmFuc2l0aW9uLWljb24gc3RlcHMoMSwgc3RhcnQpKTtcbiAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbihwYXRoYW5pbWF0aW9uICR0cmFuc2l0aW9uLWljb24gbGluZWFyKTtcbiAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbi1maWxsLW1vZGUoZm9yd2FyZHMpO1xuICAgIH1cbiAgfVxuICAmLmlzLWNsb3NlZCB7XG4gICAgc3Bhbjo6YmVmb3JlLCBzcGFuOjphZnRlciB7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGJhY2tncm91bmQgJHRyYW5zaXRpb24taWNvbiwgdHJhbnNmb3JtICR0cmFuc2l0aW9uLWljb24pO1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKHBhdGhhbmltYXRpb24tb3V0ICR0cmFuc2l0aW9uLWljb24gbGluZWFyKTtcbiAgICB9XG4gICAgJjpob3ZlciBzcGFuIHtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24odHJhbnNmb3JtICR0cmFuc2l0aW9uLWFzaWRlKTtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTEwcHgpKTtcbiAgICAgIH1cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbih0cmFuc2Zvcm0gJHRyYW5zaXRpb24tYXNpZGUpO1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgxMHB4KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFNUWUxFU1xuLnNpZGUtbmF2IHtcbiAgd2lkdGg6ICRtZW51LXdpZHRoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDYwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiA5OTk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoLTEwNSUpKTtcblxuICAmLmZpeGVkIHtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cblxuICAucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1yb3V0ZS1hY3RpdmU7XG4gIH1cbn1cbi5tZW51LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5O1xuICAmLmlzLW9wZW5lZCB7XG4gICAgbGVmdDogJG1lbnUtd2lkdGg7XG4gICAgc3Bhbjo6YmVmb3JlLCBzcGFuOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1pY29uLWNvbG9yLWFjdGl2ZTtcbiAgICB9XG4gIH1cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDQycHg7XG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAkaWNvbi1tYXJnaW47XG4gICAgd2lkdGg6ICRpY29uLXNpemU7XG4gICAgaGVpZ2h0OiAkaWNvbi1zaXplO1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xuICB9XG59XG5cbi5tZW51LWljb24ge1xuICB3aWR0aDogJGljb24tc2l6ZSArICRpY29uLW1hcmdpbiAqIDI7XG4gIGhlaWdodDogJGljb24tc2l6ZSArICRpY29uLW1hcmdpbiAqIDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgc3Bhbiwgc3Bhbjo6YmVmb3JlLCBzcGFuOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogJGljb24tc3Ryb2tlLXdpZHRoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWljb24tY29sb3I7XG4gIH1cbiAgc3BhbiB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgfVxuICBzdmcge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlLXdpZHRoOiAkaWNvbi1zdHJva2Utd2lkdGg7XG4gICAgc3Ryb2tlOiAkbWVudS1pY29uLWNvbG9yO1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDIyIDIzMDtcbiAgfVxuICAmLmlzLW9wZW5lZCB7XG4gICAgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG5cbnVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGxpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIHBhZGRpbmc6IDVweCAzMnB4O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTtcbiAgICAgIH1cbiAgICAgICY6YWN0aXZlLFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYWN0aXZlIGEge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMjApO1xuICAgIH1cbiAgfVxufVxuXG4uc2VwYXJhdG9yIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4iLCJAbWl4aW4gdHJhbnNpdGlvbigkdmFsdWUuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdmFsdWU7XG4gIC1tb3otdHJhbnNpdGlvbjogJHZhbHVlO1xuICB0cmFuc2l0aW9uOiAkdmFsdWU7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHZhbHVlKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdmFsdWU7XG4gIC1tcy10cmFuc2Zvcm06ICR2YWx1ZTtcbiAgdHJhbnNmb3JtOiAkdmFsdWU7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR2YWx1ZSkge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICR2YWx1ZTtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICR2YWx1ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogJHZhbHVlO1xufVxuXG5AbWl4aW4gZml4LXdlYmtpdC10cmFuc2l0aW9uKCR2YWx1ZSkge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtICR2YWx1ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR2YWx1ZTtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb246ICR2YWx1ZTtcbiAgYW5pbWF0aW9uOiAkdmFsdWU7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZmlsbC1tb2RlKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogJHZhbHVlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-nav',
                styleUrls: ['./side-nav.component.scss'],
                templateUrl: './side-nav.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/sentry.ts":
/*!***************************!*\
  !*** ./src/app/sentry.ts ***!
  \***************************/
/*! exports provided: initSentry, SentryErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSentry", function() { return initSentry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentryErrorHandler", function() { return SentryErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/angular */ "./node_modules/@sentry/angular/esm/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/tracing */ "./node_modules/@sentry/tracing/esm/index.js");





const beforeSend = (event, hint) => {
    console.log('Error sent to sentry');
    return event;
};
function initSentry() {
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        return;
    }
    _sentry_angular__WEBPACK_IMPORTED_MODULE_1__["init"]({
        dsn: 'https://a06fcd68143b41588286bf0e86dd55ff@o443697.ingest.sentry.io/5417793',
        integrations: [
            new _sentry_tracing__WEBPACK_IMPORTED_MODULE_3__["Integrations"].BrowserTracing({
                tracingOrigins: ['localhost', 'https://raphaelyan.github.io'],
                routingInstrumentation: _sentry_angular__WEBPACK_IMPORTED_MODULE_1__["routingInstrumentation"],
            }),
        ],
        tracesSampleRate: 1.0,
        beforeSend,
        environment: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? 'PROD' : 'DEV'
    });
}
class SentryErrorHandler {
    handleError(error) {
        _sentry_angular__WEBPACK_IMPORTED_MODULE_1__["captureException"](error.originalError || error);
        throw error;
    }
}
SentryErrorHandler.ɵfac = function SentryErrorHandler_Factory(t) { return new (t || SentryErrorHandler)(); };
SentryErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SentryErrorHandler, factory: SentryErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SentryErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://localhost:4200/',
    firebase: {
        apiKey: 'AIzaSyDdpDIFSxmlqRuPuGwy3Hp0cNFG5dzmVhU',
        authDomain: 'rpg-digital-tools.firebaseapp.com',
        databaseURL: 'https://rpg-digital-tools.firebaseio.com',
        projectId: 'rpg-digital-tools',
        storageBucket: 'rpg-digital-tools.appspot.com',
        messagingSenderId: '458341049809',
        appId: '1:458341049809:web:13436d9f93ff1ed4106cf0',
        measurementId: 'G-60NXTP7WVM'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raphaelyan/workspace/Perso/rpg-digital-tools/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map