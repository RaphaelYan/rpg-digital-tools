(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resumes-resumes-module"],{

/***/ "./src/app/resumes/resume/resume.component.ts":
/*!****************************************************!*\
  !*** ./src/app/resumes/resume/resume.component.ts ***!
  \****************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sanitize_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sanitize.pipe */ "./src/app/resumes/sanitize.pipe.ts");












function ResumeComponent_textarea_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResumeComponent_textarea_5_Template_textarea_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.currentText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.currentText);
} }
function ResumeComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateText(ctx_r4.currentText); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sauvegarder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ResumeComponent {
    constructor(activatedRoute, auth, afs) {
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.afs = afs;
        auth.authState.subscribe((user) => {
            if (!user) {
                window.alert('Va sur https://raphaelyan.github.io/rpg-digital-tools et connecte toi !');
                return;
            }
            this.currentUser = user;
            const routeParams = this.activatedRoute.snapshot.params;
            if (!routeParams.id) {
                return;
            }
            this.textDoc = this.afs.doc(`resumes/${routeParams.id}`);
            this.text = this.textDoc.valueChanges();
            this.text.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe((a) => {
                if (a) {
                    this.currentText = a.text;
                }
            });
        });
    }
    isAdmin() {
        return this.currentUser && this.currentUser.email === 'maferyt@gmail.com';
    }
    updateText(text) {
        this.textDoc.update({ text });
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 7, vars: 7, consts: [[1, "row"], [1, "col-12"], [1, "notes", 3, "innerHtml"], ["class", "col-12", "rows", "5", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "button", "class", "col-12 btn-primary", 3, "click", 4, "ngIf"], ["rows", "5", 1, "col-12", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "col-12", "btn-primary", 3, "click"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "sanitize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ResumeComponent_textarea_5_Template, 2, 1, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResumeComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_0_0 = null;
        const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.text)) == null ? null : tmp_0_0.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", currVal_0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], pipes: [_sanitize_pipe__WEBPACK_IMPORTED_MODULE_7__["SanitizePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%]     code {\n  display: block;\n  border: 1px solid;\n  border-radius: 15px;\n  padding: 15px;\n}\n[_nghost-%COMP%]     h4 {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL3Jlc3VtZXMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lcy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQUo7QURHRTtFQUNFLDBCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWVzL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICBjb2RlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICBoNCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cbiIsIjpob3N0IDo6bmctZGVlcCBjb2RlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIGg0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/resumes/resumes-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/resumes/resumes-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ResumesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumesRoutingModule", function() { return ResumesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resumes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resumes.component */ "./src/app/resumes/resumes.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resumes/resume/resume.component.ts");






const routes = [
    {
        path: ':id',
        component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"]
    }, {
        path: '',
        component: _resumes_component__WEBPACK_IMPORTED_MODULE_2__["ResumesComponent"]
    }
];
class ResumesRoutingModule {
}
ResumesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResumesRoutingModule });
ResumesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResumesRoutingModule_Factory(t) { return new (t || ResumesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResumesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/resumes/resumes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/resumes/resumes.component.ts ***!
  \**********************************************/
/*! exports provided: ResumesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumesComponent", function() { return ResumesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ResumesComponent_div_9_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " R\u00E9sum\u00E9 ici ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resume_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", resume_r1.pdf, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ResumesComponent_div_9_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Replay vid\u00E9o ici ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resume_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", resume_r1.youtube, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ResumesComponent_div_9_small_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resume_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resume_r1.chars);
} }
function ResumesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResumesComponent_div_9_a_4_Template, 3, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ResumesComponent_div_9_a_5_Template, 3, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResumesComponent_div_9_small_9_Template, 2, 1, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resume_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resume_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", resume_r1.pdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", resume_r1.youtube);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resume_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", resume_r1.chars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resume_r1.dm, " ");
} }
class ResumesComponent {
    constructor() {
        this.resumes = [
            {
                date: '31 Janvier 2026',
                title: 'Le calm delilah - partie 3',
                chars: 'MaFeRyT, Noëlie, Romain, Syccor, Yaz',
                dm: 'Dreagann',
            }, {
                date: '24 Janvier 2026',
                title: 'Le festivale de womford - partie 2',
                chars: 'Alexandre, Lorenzo, Lyes, MaFeRyT, Yaz',
                dm: 'Dreagann',
            }, {
                date: '20 Décembre 2025',
                title: 'Le festivale de womford - partie 1',
                chars: 'Alexandre, Lorenzo, Lyes, MaFeRyT, Yaz',
                dm: 'Dreagann',
            }, {
                date: '22 Novembre 2025',
                title: 'Le calm delilah - partie 2',
                chars: 'MaFeRyT, Noëlie, Romain, Syccor, Yaz',
                dm: 'Dreagann',
            }, {
                date: '13 Juillet 2025',
                title: 'Le calm delilah - partie 1',
                chars: 'MaFeRyT, Noëlie, Romain, Syccor, Yaz',
                dm: 'Dreagann',
            }, {
                date: '14 Décembre 2023',
                title: 'Les tarides',
                chars: 'Dreagann, Noëlie, Syccor, Yaz',
                dm: 'MaFeRyT',
            }, {
                date: '20 Avril 2023',
                title: 'La chasse aux oeufs de pâques',
                chars: 'Mélo, Raph, Tommy',
                dm: 'Clem',
            }, {
                date: '16 Décembre 2022',
                title: 'D&D5 : La Fondation S.C.E - partie 4',
                chars: 'Clem, Mélo, Raph, Tommy',
                dm: 'Repié',
            }, {
                date: '18 Novembre 2022',
                title: 'D&D5 : La Fondation S.C.E - partie 3',
                chars: 'Clem, Mélo, Raph, Tommy',
                dm: 'Repié',
            }, {
                date: '4 Novembre 2022',
                title: 'D&D5 : La Fondation S.C.E - partie 2',
                chars: 'Clem, Mélo, Raph, Tommy',
                dm: 'Repié',
            }, {
                date: '24 Septembre 2022',
                title: 'D&D5 : La Fondation S.C.E - partie 1',
                chars: 'Clem, Mélo, Raph, Tommy',
                dm: 'Repié',
            }, {
                date: '19 Aout 2022',
                title: 'D&D5 : L\'homme à la jambre de bois - partie 9 (fin)',
                chars: 'Clem, Mélo, Noëlie, Repié, Syccor',
                dm: 'MaFeRyT',
            }, {
                date: '24 Juin 2022',
                title: 'D&D5 : L\'homme à la jambre de bois - partie 8',
                chars: 'Clem, Mélo, Noëlie, Repié, Syccor',
                dm: 'MaFeRyT',
            }, {
                date: '10 Juin 2022',
                title: 'D&D5 : L\'homme à la jambre de bois - partie 7',
                chars: 'Clem, Mélo, Noëlie, Repié, Syccor',
                dm: 'MaFeRyT',
            }, {
                date: '20 Mai 2022',
                title: 'D&D5 : L\'homme à la jambre de bois - partie 6',
                chars: 'Clem, Mélo, Noëlie, Repié, Syccor',
                dm: 'MaFeRyT',
            }, {
                date: '22 Avril 2022',
                title: 'D&D5 : L\'homme à la jambre de bois - partie 5',
                chars: 'Clem, Mélo, Noëlie, Repié, Syccor',
                dm: 'MaFeRyT',
            }, {
                date: '8 Avril 2022',
                title: 'D&D5 : L\'homme à la jambre de bois - partie 4',
                chars: 'Clem, Mélo, Noëlie, Repié, Syccor',
                dm: 'MaFeRyT',
            }, {
                date: '25 Mars 2022',
                title: 'D&D5 : L\'homme à la jambre de bois - partie 3',
                chars: 'Clem, Mélo, Noëlie, Repié, Syccor',
                dm: 'MaFeRyT',
            }, {
                date: '12 Mars 2022',
                title: 'D&D5 : L\'homme à la jambre de bois - partie 2',
                chars: 'Clem, Mélo, Noëlie, Repié, Syccor',
                dm: 'MaFeRyT',
            }, {
                date: '26 Février 2022',
                title: 'D&D5 : L\'homme à la jambre de bois - partie 1',
                chars: 'Clem, Mélo, Noëlie, Repié, Syccor',
                dm: 'MaFeRyT',
            }, {
                date: '19 Février 2022',
                title: 'HonyHeist - Las Vegas',
                chars: 'Clem, Jean, Mélo, Raph, Tommy',
                dm: 'Repié',
            }, {
                date: '18 Décembre 2021',
                title: 'Les Foudres du Roi-Tonnerre - partie 28',
                chars: 'Clem, Mélo, Raph, Rémi, Tommy',
                dm: 'Repié',
            }, {
                date: '3 Décembre 2021',
                title: 'Les Foudres du Roi-Tonnerre - partie 27',
                chars: 'Clem, Coran, Raph, Rémi, Tommy',
                dm: 'Repié',
            }, {
                date: '24 Septembre 2021',
                title: 'Le sceau de lune - partie 2',
                chars: 'Clem, Mélo, Repié',
                dm: 'MaFeRyT',
            }, {
                date: '18 Septembre 2021',
                title: 'Le sceau de lune - partie 1',
                chars: 'Clem, Mélo, Repié',
                dm: 'MaFeRyT',
            }, {
                date: '31 Juillet 2021',
                title: 'Les Foudres du Roi-Tonnerre - partie 26',
                chars: 'Clem, Coran, Mélo, Raph, Rémi, Tommy',
                dm: 'Repié',
            }, {
                date: '24 Juin 2021',
                title: 'Paranoia - Coupure de courant',
                chars: 'Clem, Constance, Mélo, Pierre',
                dm: 'MaFeRyT',
            }, {
                date: '11 Juin 2021',
                title: 'Les Foudres du Roi-Tonnerre - partie 25',
                pdf: 'assets/resumes/repie/2021-06-11-partie-25.png',
                chars: 'Clem, Coran, Mélo, Raph, Rémi, Tommy',
                dm: 'Repié',
            }, {
                date: '19 Mai 2021',
                title: 'Tales of Felgia - Session 16',
                chars: 'Ba\'Hekin, Guelrath, Karli\'ah, Lobor, Nessira, Skenris',
                dm: 'Clem',
            }, {
                date: '10 Avril 2021',
                title: 'Les Foudres du Roi-Tonnerre - partie 24',
                pdf: 'assets/resumes/repie/2021-05-10-partie-24.pdf',
                chars: 'Clem, Mélo, Raph, Rémi, Tommy',
                dm: 'Repié',
            }, {
                date: '4 Avril 2021',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 5, Acte 2',
                chars: 'Clem, Mélo, Repié, Amandine',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/rKcVoyDYKjQ',
            }, {
                date: '27 Février 2021',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 5, Acte 1',
                chars: 'Clem, Mélo, Repié, Amandine',
                pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre5-acte1',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/kpPJ2YohmnU',
            }, {
                date: '20 Février 2021',
                title: 'Les Foudres du Roi-Tonnerre - partie 23',
                chars: 'Clem, Coran, Mélo, Raph, Rémi, Tommy',
                dm: 'Repié',
            }, {
                date: '05 Février 2021',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 4, Acte 5',
                chars: 'Clem, Mélo, Repié, Amandine',
                pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre4-acte5',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/6jHaFLdKjHM',
            }, {
                date: '15 Janvier 2021',
                title: 'Les Foudres du Roi-Tonnerre - partie 22',
                chars: 'Clem, Coran, Mélo, Raph, Rémi, Thamos, Tommy',
                dm: 'Repié',
            }, {
                date: '09 Janvier 2021',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 4, Acte 4',
                chars: 'Clem, Mélo, Repié, Amandine',
                pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre4-acte4',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/o6ZskoIPsR4',
            }, {
                date: '10 Décembre 2020',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 4, Acte 3',
                chars: 'Repié',
                pdf: 'assets/resumes/mage/chapitre4-acte3.pdf',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/BP70XUmsoqU',
            }, {
                date: '05 Décembre 2020',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 4, Acte 2',
                chars: 'Clem, Mélo, Repié, Amandine',
                pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre4-acte2',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/VzqCrysfMYo',
            }, {
                date: '28 Novembre 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 21',
                chars: 'Clem, Mélo, Raph, Rémi, Thamos, Tommy',
                dm: 'Repié',
            }, {
                date: '25 Novembre 2020',
                title: 'Tales of Felgia - Session 5',
                chars: 'Ba\'Hekin, Charles de Rasseau, Karli\'ah, Lobor, Nessira, Skenris',
                pdf: 'https://www.notion.so/Session-5-8460712ed3f84318a8fcddeb007bbd80',
                dm: 'Clem',
            }, {
                date: '19 Novembre 2020',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 4, Acte 1',
                chars: 'Clem, Mélo, Repié, Amandine',
                pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre4-acte1',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/_x3NUIWAeNg',
            }, {
                date: '13 Novembre 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 20',
                chars: 'Clem, Mélo, Raph, Coran',
                dm: 'Repié',
                youtube: 'https://www.youtube.com/watch?v=3wPZv7a8Qkk',
            }, {
                date: '24 Octobre 2020',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 3, Acte 3',
                chars: 'Clem, Mélo, Repié, Amandine',
                pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre3-acte3',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/gB593DX4bMQ',
            }, {
                date: '17 Octobre 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 19',
                chars: 'Clem, Mélo, Raph, Coran, Rémi, Thamos',
                dm: 'Repié',
                youtube: 'https://www.youtube.com/watch?v=Fedof_5Cwqs',
            }, {
                date: '15 Octobre 2020',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 3, Acte 2',
                chars: 'Clem, Mélo, Repié, Amandine',
                pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre3-acte2',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/gqZHtEucA80',
            }, {
                date: '7 Octobre 2020',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 3, Acte 1',
                chars: 'Clem, Mélo, Repié, Amandine',
                pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre3-acte1',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/BWWIw13X6B8',
            }, {
                date: '4 Septembre 2020',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 2, Acte 2 (fin)',
                chars: 'Clem, Mélo, Repié, Amandine',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/TacmyAtL-p0',
            }, {
                date: '29 Août 2020',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 2, Acte 2',
                chars: 'Clem, Mélo, Repié',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/3CTqD_1XLTU',
            }, {
                date: '22 Août 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 18',
                chars: 'Clem, Mélo, Raph, Coran, Rémi',
                pdf: 'https://homebrewery.naturalcrit.com/share/1vWTPZeO-QyI',
                dm: 'Repié',
                youtube: 'https://www.youtube.com/watch?v=6inn_M5hEfY',
            }, {
                date: '31 Juillet 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 17',
                dm: 'Repié',
                youtube: 'https://www.youtube.com/watch?v=NQFjC5tNnkU&feature=youtu.be',
            }, {
                date: '24 Juillet 2020',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 2, Acte 1',
                chars: 'Clem, Mélo, Repié',
                pdf: 'assets/resumes/mage/mage-partie4.pdf',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/YMjRM-vSruQ',
            }, {
                date: '10 Juillet 2020',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 1, Acte 4',
                chars: 'Clem, Mélo, Repié',
                pdf: 'assets/resumes/mage/mage-partie3.pdf',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/6n4SyGCa1Ko',
            }, {
                date: '02 Juillet 2020',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 1, Acte 2 & 3',
                chars: 'Clem, Mélo, Repié',
                pdf: 'assets/resumes/mage/mage-partie2.pdf',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/AFDfhlr0PrQ',
            }, {
                date: '26 Juin 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 16',
                dm: 'Repié',
            }, {
                date: '24 Juin 2020',
                title: 'Mage - Le mythe de la Reine détrônée - Chapitre 1, Acte 1',
                chars: 'Clem, Mélo, Repié, Thamos',
                pdf: 'assets/resumes/mage/mage-partie1.pdf',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/XgmJegM8bcE',
            }, {
                date: '12 Juin 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 15',
                dm: 'Repié',
            }, {
                date: '6 Juin 2020',
                title: 'Initiation au Monde des Ténèbres',
                chars: 'Jean, Repié, Thamos, Roro, Rémi',
                dm: 'MaFeRyT',
                youtube: 'https://youtu.be/JHuRavxKhN8',
            }, {
                date: '30 Mai 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 14',
                dm: 'Repié',
            }, {
                date: '22 Mai 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 13',
                dm: 'Repié',
            }, {
                date: '20 Mai 2020',
                title: 'Les tréfonds aux mille dragons - Team 2',
                pdf: 'assets/resumes/les-trefonds-aux-mille-dragons-book.pdf',
                dm: 'MaFeRyT',
            }, {
                date: '16 Mai 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 12',
                pdf: 'assets/resumes/repie/2020-05-16.pdf',
                dm: 'Repié',
            }, {
                date: '14 Mai 2020',
                title: 'Les tréfonds aux mille dragons - Team 1',
                pdf: 'assets/resumes/les-trefonds-aux-mille-dragons-book.pdf',
                dm: 'MaFeRyT',
            }, {
                date: '9 Mai 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 11',
                pdf: 'assets/resumes/repie/2020-05-09.pdf',
                dm: 'Repié',
            }, {
                date: '2 Mai 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 10',
                dm: 'Repié',
            }, {
                date: '25 Avril 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 9',
                dm: 'Repié',
            }, {
                date: '17 Avril 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 8',
                dm: 'Repié',
            }, {
                date: '10 Avril 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 7',
                pdf: 'assets/resumes/repie/2020-04-10.pdf',
                dm: 'Repié',
            }, {
                date: '4 Avril 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 6',
                dm: 'Repié',
            }, {
                date: '1 Avril 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 5',
                dm: 'Repié',
            }, {
                date: '28 Mars 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 4',
                pdf: 'assets/resumes/repie/2020-03-28.pdf',
                dm: 'Repié',
            }, {
                date: '25 Mars 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 3',
                pdf: 'assets/resumes/repie/2020-03-25.pdf',
                dm: 'Repié',
            }, {
                date: '21 Mars 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 2',
                pdf: 'assets/resumes/repie/2020-03-21.pdf',
                dm: 'Repié',
            }, {
                date: '19 Mars 2020',
                title: 'Les Foudres du Roi-Tonnerre - partie 1',
                pdf: 'assets/resumes/repie/2020-03-19.pdf',
                dm: 'Repié',
            }, {
                date: '28 Septembre 2019',
                title: 'ROT - A la rescousse du château volant (partie 2)',
                pdf: 'assets/resumes/2019-09-28.pdf',
                chars: 'Noelie (8.5), Shinden (8.5), Syccor (8.5), Thibault (8.5), Vador (8.5) : +0.5 niveau',
                dm: 'MaFeRyT',
            }, {
                date: '28 juillet 2019',
                title: 'The game - partie 1',
                chars: 'Jean, Pierre, Thamos, Tommy',
                dm: 'MaFeRyT',
            }, {
                date: '6 Avril 2019',
                title: 'ROT - A la rescousse du château volant (partie 1)',
                pdf: 'assets/resumes/2019-04-06.pdf',
                chars: 'Noelie (8), Shinden (8), Syccor (8), Thibault (8), Vador (8), Yann (8) : +0.5 niveau',
                dm: 'MaFeRyT',
            }, {
                date: '23 février 2019',
                title: 'Microlite20 - La cuite',
                dm: 'Jean D.',
                chars: 'Maferyt, Repié, Rémi, Thamos, Tommy'
            }, {
                date: '17 Novembre 2018',
                title: 'D&D 3.5 - Diplomatie Drow (partie 3)',
                dm: 'Syccor',
            }, {
                date: '22 Juillet 2018',
                title: 'D&D 5 - Les monstres de la tempête',
                dm: 'MaFeRyT',
            }, {
                date: '8 Avril 2018',
                title: 'D&D 3.5 - Diplomatie Drow (partie 2)',
                dm: 'Syccor',
            }, {
                date: '18 Mars 2018',
                title: 'D&D 3.5 - Diplomatie Drow (partie 1)',
                dm: 'Syccor',
                description: `
- un mago qui ne prépare pas les bons sorts sauf pour fuir
- un élu divin fanatique qui boit du lait avec une masse qui brille
- un corbeau fufu qui répète tout ce qu'on dit et trop curieux
- un croisé qui rêvait d'être barbare pour lancer des sorts
- un druide maitre de la lumière qui aime les rhinocéros
- un barde qui veut rendre sourd les autres et qui apprend le ukulélé
`
            }, {
                date: '7 Octobre 2017',
                title: 'Savage World - Les 6 nains de la main',
                chars: 'Julien, Darth, Noelie, Baptiste, clément, Yann',
                dm: 'MaFeRyT',
            }, {
                date: '29 Avril 2017',
                title: 'HOTQ - Partie 10 : la fin du chateau volant, combat pour reprendre le truc',
                dm: 'MaFeRyT',
            }, {
                date: '12 Mars 2017',
                title: 'HOTQ - Partie 9 : L\'assaut',
                dm: 'MaFeRyT',
            }, {
                date: '05 Février 2017',
                title: 'HOTQ - Partie 8 : La révolte',
                dm: 'MaFeRyT',
            }, {
                date: '07 Janvier 2017',
                title: 'HOTQ - Partie 7 : La mine (part2)',
                dm: 'MaFeRyT',
            }, {
                date: '17 Décember 2016',
                title: 'HOTQ - Partie 6 : La mine',
                dm: 'MaFeRyT',
            }, {
                date: '20 Novembre 2016',
                title: 'HOTQ - Partie 5 : L\'infiltration',
                dm: 'MaFeRyT',
            }, {
                date: '24 Septembre 2016',
                title: 'HOTQ - Inter-Partie : Manigances',
                dm: 'MaFeRyT',
            }, {
                date: '07 Aout 2016',
                title: 'HOTQ - Partie 4 : La caravane',
                dm: 'MaFeRyT',
            }, {
                date: '31 Juillet 2016',
                title: 'HOTQ - Partie 3 : La couveuse & le début du voyage',
                dm: 'MaFeRyT',
            }, {
                date: '12 Juin 2016',
                title: 'HOTQ - Partie 2 : Le campement des assaillants',
                dm: 'MaFeRyT',
            }, {
                date: '22 Mai 2016',
                title: 'HOTQ - Partie 1 : Les flammes du culte',
                dm: 'MaFeRyT',
            }, {
                date: '5 Juillet 2015',
                title: 'D&D - Le sceau de lune',
                dm: 'MaFeRyT',
                chars: 'Dallo, FiBoot, Syccor, Vador',
            }, {
                date: '14 Mai 2015',
                title: 'Donj de glace',
                dm: 'Syccor',
                chars: 'FiBoot, MaFeRyT, Vador',
            }, {
                date: '10 Aout 2014',
                title: 'D&D 3.5 - La pyramide des tenebres - part 5',
                dm: 'MaFeRyT',
                chars: 'Syccor (Vaiana), Vador (Elesia), Fiboot (Galak), Shinden (Kay), Azrael (), Dallo (Alben)',
            }, {
                date: '21 Juin 2014',
                title: 'D&D 3.5 - La pyramide des tenebres - part 5',
                dm: 'MaFeRyT',
                chars: 'Syccor (Vaiana), Vador (Elesia), Fiboot (Galak), Dallo (Alben)',
            }, {
                date: '21 Juin 2014',
                title: 'D&D 3.5 - La pyramide des tenebres - part 4',
                dm: 'MaFeRyT',
                chars: 'Syccor (Vaiana), Fiboot (Galak), Vador (Elesia), Shinden (Kay), Azrael (?)',
            }, {
                date: '6 Avril 2014',
                title: 'D&D 3.5 - La pyramide des tenebres - part 3',
                dm: 'MaFeRyT',
                chars: 'Syccor (Vaiana), Fiboot (Galak), Vador (Elesia), Shinden (Kay)',
            }, {
                date: '6 Avril 2014',
                title: 'D&D 3.5 - La pyramide des tenebres - part 2',
                dm: 'MaFeRyT',
                chars: 'Syccor (Vaiana), Fiboot (Galak), Azrael (?), Vador (Elesia), Shinden (Kay)',
            }, {
                date: '6 Avril 2014',
                title: 'D&D 3.5 - La pyramide des tenebres - part 1',
                dm: 'MaFeRyT',
                chars: 'Syccor (Vaiana), Fiboot (Galak), Azrael (?), Vador (Elesia), Shinden (Kay)',
            }, {
                date: '2 Mars 2014',
                title: 'D&D 3.5 - Fallcrest et la malédiction de la pyramide',
                dm: 'MaFeRyT',
                chars: 'Syccor (Vaiana), Fiboot (Galak), Raogi (?), Vador (Elesia)',
            }, {
                date: '21 Février 2014',
                title: 'D&D 3.5 - La tour des mystères',
                dm: 'MaFeRyT',
                chars: 'Syccor (Vaiana), Fiboot (Hippias), Quentin (?), Shinden (Kai), Dallo (Carnak)',
            }, {
                date: '7 Février 2014',
                title: 'D&D 3.5 - La chasse au profane',
                dm: 'MaFeRyT',
                chars: 'Vador (Elesia), Syccor (Vaiana), Fiboot (Galak), Beldom (Beldomï), Makkura (Rose), ShadowMaso (Goultard), Dallo (Alben)',
            }, {
                date: '15 Décembre 2013',
                title: 'Dragonia Guilds - Partie 6',
                dm: 'MaFeRyT',
                chars: 'Syccor, Shinden, Azrael, Vador',
            }, {
                date: '20 Octobre 2013',
                title: 'D&D 3.5 - D\'eau et de feu (Le dragon du marécage)',
                dm: 'MaFeRyT',
                chars: 'Vador (Elesia), Syccor (Vaiana), Fiboot (Galak), Shinden (Kay)',
            }, {
                date: '20 Octobre 2013',
                title: 'D&D 3.5 - D\'eau et de feu (prologue)',
                dm: 'MaFeRyT',
                chars: 'Vador (Elesia), Syccor (Vaiana), Fiboot (Galak), Shinden (Kay)',
            }, {
                date: '1 Septembre 2013',
                title: 'Dragonia Guilds - Partie 5',
                dm: 'MaFeRyT',
                chars: 'Syccor, Fiboot, Shinden, Gibli, Azrael, Vador',
            }, {
                date: '25 Août 2013',
                title: 'Dragonia Guilds - Partie 4',
                dm: 'MaFeRyT',
                chars: 'Syccor, Fiboot, Aldaric, Gibli, Bazhul',
            }, {
                date: '4 Août 2013',
                title: 'Dragonia Guilds - Partie 3',
                dm: 'MaFeRyT',
                chars: 'Syccor, Aldaric, Vador',
            }, {
                date: '22 Juillet 2013',
                title: 'Dragonia Guilds - Partie 2',
                dm: 'MaFeRyT',
                chars: 'Syccor, Azrael, Gibli, Aldaric, Vador',
            }, {
                date: '21 Juillet 2013',
                title: 'Dragonia Guilds - Partie 1',
                dm: 'MaFeRyT',
                chars: 'Azrael, Aldaric, Vador, Syccor, Gibli',
            }, {
                date: 'Février - Mars 2013',
                title: 'Hellfrost',
                dm: 'Nemesis',
                chars: 'Lama, Glarf, Nounours, Bazuhl, MaFeRyT, Mekap',
            }, {
                date: 'Décembre 2012',
                title: 'D&D',
                dm: 'Idriss',
                chars: 'MaFeRyT, Noelie, Vador, Denis, Syccor',
            }, {
                date: 'Septembre - Décembre 2012',
                title: 'D&D 3.5 - L\'éritier draconique',
                dm: 'MaFeRyT',
                chars: 'Idriss (Pardav, nain guerrier), Noelie (?, elfe rodeuse), Syccor (Vaiana, humaine roublarde), Denis (?, demi-elfe moine), Vador (Elesia, elfe magicienne)',
            }, {
                date: '10 Août 2012',
                title: 'D&D 3.5 - The Game',
                dm: 'MaFeRyT',
                chars: 'Vador (Elesia), Jinashi (Aedan), Fiboot (Galak), (Chalam), (Miya)',
            }, {
                date: '27 Juillet 2012',
                title: 'D&D 3.5 - Une forteresse naine mysterieuse',
                dm: 'MaFeRyT',
                chars: 'Jinashi (Nain Rodeur), Shinden (Skiwi), Wellan (Demi-Orc Barbare), Fiboot (Galak), Syccor (Vaiana), Vador (Elfe Magicien)',
            }, {
                date: '13 Juillet 2012',
                title: 'D&D 3.5 - Une nouvelle magie',
                dm: 'MaFeRyT',
                chars: 'Karnad(barde), Marty(guerrier/pretre), Wellan(barbare), Aralicia(spadassin/guerrier/magicien), Vador(magicien)',
            }, {
                date: '29 Juin 2012',
                title: 'D&D 3.5 - Un voyage palpitant',
                dm: 'MaFeRyT',
                chars: 'KevinJoJo(Humain Pretre), Shinden(gnome ensorceleur), FiBoot(halfelin roublard/ensorceleur), Toxicat(Goliath Guerrier), ToxiGF(Elfe Rodeur)',
            }, {
                date: '24 Juin 2012',
                title: 'D&D 3.5 - Un problème colossal',
                dm: 'MaFeRyT',
                chars: 'Vador(magicien), Shinden(guerrier), Toxicat(barbare), Fiboot(Galak), Syccor(Vaiana), Zesso(Pretre)',
            }, {
                date: '15 Juin 2012',
                title: 'D&D 3.5 - L\'eau ca mouille',
                dm: 'MaFeRyT',
                chars: 'Vador(magicien), Shinden(spadassin), Fiboot(Galak), Syccor(Vaiana), Karnad(Pretre)',
            }, {
                date: '4 Mai 2012',
                title: 'MdT2 Mortels - Y a pas le feu',
                dm: 'MaFeRyT',
                chars: 'Syccor, Shinden, Fiboot, Vador, Naglareph',
            }, {
                date: '24 Février 2012',
                title: 'D&D 3.5 - La bête',
                dm: 'MaFeRyT',
                chars: 'Nemesis, Fiboot, Shinden, Backslash, Jin',
            }, {
                date: '20 Janvier 2012',
                title: 'D&D 3.5 - Les tréfonds aux milles dragons',
                dm: 'MaFeRyT',
                chars: 'Fiboot(barde), Syccor(roublard), Shinden(Druide), Vador(guerrier)',
            }, {
                date: 'Août - Octobre 2011',
                title: 'Mage - Le mythe de la Reine détrônée',
                dm: 'MaFeRyT',
                chars: 'Syccor, Bazuhl, Vador, Fiboot, Shinden',
            }, {
                date: 'Avril - Mai 2011',
                title: 'StarWars',
                dm: 'Aralicia',
                chars: 'Harold, Vador, Kilsen, Ali, MaFeRyT, Têtu',
            }, {
                date: 'Février - Mai 2011',
                title: 'Ambre',
                dm: 'Beldom',
                chars: 'Kilsen, Lasanis, Syccor, Harold, Maferyt, Lasanis',
            }, {
                date: '17 Décembre 2010',
                title: 'Crossover Mage / Vampire',
                dm: 'MaFeRyT + Nemesis + Syccor + Beldom',
                chars: '~24 joueurs',
                pdf: 'assets/resumes/2010-12-17.pdf',
            },
        ];
    }
}
ResumesComponent.ɵfac = function ResumesComponent_Factory(t) { return new (t || ResumesComponent)(); };
ResumesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumesComponent, selectors: [["app-resumes"]], decls: 10, vars: 1, consts: [[1, "container"], [1, "list-group"], [1, "list-group-item", "row", "text-bold"], [1, "col-sm", "date-resume"], [1, "col-sm"], [1, "col-sm-2"], ["class", "list-group-item row", 4, "ngFor", "ngForOf"], [1, "list-group-item", "row"], [1, "date"], ["target", "_blank", 4, "ngIf"], [4, "ngIf"], ["target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-file-pdf-o", "text-warning"], ["aria-hidden", "true", 1, "fa", "fa-youtube", "text-danger"]], template: function ResumesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " DATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Titre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Ma\u00EEtre du jeu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResumesComponent_div_9_Template, 12, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resumes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".list-group-item.row[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  display: flex;\n}\n\n.date-resume[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.date[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL3Jlc3VtZXMvcmVzdW1lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lcy9yZXN1bWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lcy9yZXN1bWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbS5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGF0ZS1yZXN1bWUge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4uZGF0ZSArIGEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIi5saXN0LWdyb3VwLWl0ZW0ucm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRhdGUtcmVzdW1lIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLmRhdGUgKyBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resumes',
                templateUrl: './resumes.component.html',
                styleUrls: ['./resumes.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/resumes/resumes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/resumes/resumes.module.ts ***!
  \*******************************************/
/*! exports provided: ResumesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumesModule", function() { return ResumesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _resumes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resumes-routing.module */ "./src/app/resumes/resumes-routing.module.ts");
/* harmony import */ var _resumes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resumes.component */ "./src/app/resumes/resumes.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resumes/resume/resume.component.ts");
/* harmony import */ var _sanitize_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sanitize.pipe */ "./src/app/resumes/sanitize.pipe.ts");








class ResumesModule {
}
ResumesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResumesModule });
ResumesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResumesModule_Factory(t) { return new (t || ResumesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _resumes_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResumesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResumesModule, { declarations: [_resumes_component__WEBPACK_IMPORTED_MODULE_4__["ResumesComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"],
        _sanitize_pipe__WEBPACK_IMPORTED_MODULE_6__["SanitizePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _resumes_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResumesRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _resumes_component__WEBPACK_IMPORTED_MODULE_4__["ResumesComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"],
                    _sanitize_pipe__WEBPACK_IMPORTED_MODULE_6__["SanitizePipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _resumes_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResumesRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/resumes/sanitize.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/resumes/sanitize.pipe.ts ***!
  \******************************************/
/*! exports provided: SanitizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizePipe", function() { return SanitizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




class SanitizePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
SanitizePipe.ɵfac = function SanitizePipe_Factory(t) { return new (t || SanitizePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SanitizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sanitize", type: SanitizePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SanitizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sanitize'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=resumes-resumes-module-es2015.js.map