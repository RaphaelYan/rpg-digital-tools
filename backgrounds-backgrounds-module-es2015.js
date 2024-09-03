(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["backgrounds-backgrounds-module"],{

/***/ "./src/app/backgrounds/backgrounds-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/backgrounds/backgrounds-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BackgroundsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundsRoutingModule", function() { return BackgroundsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _backgrounds_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backgrounds.component */ "./src/app/backgrounds/backgrounds.component.ts");





const routes = [
    {
        path: '',
        component: _backgrounds_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundsComponent"]
    }
];
class BackgroundsRoutingModule {
}
BackgroundsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BackgroundsRoutingModule });
BackgroundsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BackgroundsRoutingModule_Factory(t) { return new (t || BackgroundsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BackgroundsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/backgrounds/backgrounds.component.ts":
/*!******************************************************!*\
  !*** ./src/app/backgrounds/backgrounds.component.ts ***!
  \******************************************************/
/*! exports provided: BackgroundsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundsComponent", function() { return BackgroundsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function BackgroundsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const background_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", background_r1, " ");
} }
class BackgroundsComponent {
    constructor() {
        this.backgrounds = [
            {
                name: 'Alexander Barca',
                concept: 'Terran Marine - Starcraft RPG',
                owner: 'Carl T.',
                date: '2009-12-18',
                description: `
Alexander Barca est un Terran Marine tout ce qu'il y'a de plus
ordinaire à part un léger accent tarsonien peut-être. Survivant de
la chute de Tarsonis comme on s'en doute, il s'est retrouvé embarqué
avec des loyalistes de la Confédération Terranne qui ont tourné
mercenaires.

Juste un détail quand même, Alexander Barca s'appelle en fait
Alexander Terra. Il a profité de la chute de Tarsonis et de la perte
de données qui l'a inévitablement accompagnée pour changer
d'identité. La raison est que la famille Terra est l'une des plus
anciennes du secteur Koprulu, descendante du commandant du Naggflar,
l'un des trois vaisseaux qui ont amené tous les humains du secteur.
Étant celui à avoir subit le moins de dommages, les tarsoniens ont
bénéficié d'une avance technologique qui leur a permis de conquérir
leurs voisins à partir de 2360, créant ainsi la Confédération
Terranne. Le nom de Terran vient de là d'ailleurs, Terra. Bien
évidemment la famille Terra était un poids lourd économique,
politique et militaire. À la fois membre du Conseil, du Sénat,
propriétaire d'un des plus gros trust multi-planétaires et disposant
de troupes privées, elle était considérée comme une cible
prioritaire par les Sons of Korhal. La branche principale de la
famille a donc été assassinée avant même la chute de Tarsonis (à
l'exception de sa cousine November Annabella Terra plus connue sous le
nom de Nova).

Sinon comme dans presque toutes les vieilles familles, on a décidé de
tout pour lui depuis son plus jeune âge. Jugé insuffisamment
impitoyable pour les affaires par son père, il a été destiné très
tôt à la politique. Histoire quand même de ne pas avoir l'air d'un
parvenu qui débarque avec sa campagne électorale payée par papa, on
l'a d'abord envoyé à l'académie militaire. L'opinion publique a
toujours eu un faible pour les héros et ça permettrai de l'endurcir
un peu. À la surprise générale il s'en est plutôt bien tiré et,
avec l'appui de la famille, est devenu le plus jeune cadet de
l'histoire de l'académie. L'invasion zerg n'a pas permis de savoir si
il serait sorti major de sa promotion.

Sa proximité du pouvoir lui a permis en revanche de connaître
certains secrets de la Confédération Terranne et d'en soupçonner
nombre d'autres. Lors de la phase initiale de l'invasion zerg, et
pendant que les forces confédérées étaient plongées dans le chaos,
lui a pu évaluer rapidement l'ampleur de la menace et agir en
conséquence. Après avoir récupéré un équipement de Marine à
l'académie, il a détalé comme un lapin vers les docks dans le but
d'embarquer dans le premier croiseur venu.

Côté vie privée, il est marié à la fille du Général Mah Sakai,
le chef des forces armées du Combinat Kel-Morian. Il s'agissait d'un
mariage arrangé par sa famille ayant aussi bien une valeur politique
(après la Guerre des Guildes) qu'économique (le Combinat est un poids
lourd dans les matières premières). Sa femme était retournée sur
Moria avant la chute de Tarsonis et a donc eu la vie sauve. Il ignore
en revanche si il est père d'un fils où d'une fille. Étant devenu un
gendre encombrant, il a préféré éviter le Combinat Kel-Morian afin
de ne pas se faire assassiner. Son beau-père aurait préféré se
débarrasser de lui que de riquer de provoquer le Terran Dominion.
`
            }
        ];
    }
}
BackgroundsComponent.ɵfac = function BackgroundsComponent_Factory(t) { return new (t || BackgroundsComponent)(); };
BackgroundsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackgroundsComponent, selectors: [["app-backgrounds"]], decls: 3, vars: 1, consts: [[1, "container"], [1, "list-group"], ["class", "list-group-item row", 4, "ngFor", "ngForOf"], [1, "list-group-item", "row"]], template: function BackgroundsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BackgroundsComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.backgrounds);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tncm91bmRzL2JhY2tncm91bmRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-backgrounds',
                templateUrl: './backgrounds.component.html',
                styleUrls: ['./backgrounds.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/backgrounds/backgrounds.module.ts":
/*!***************************************************!*\
  !*** ./src/app/backgrounds/backgrounds.module.ts ***!
  \***************************************************/
/*! exports provided: BackgroundsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundsModule", function() { return BackgroundsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _backgrounds_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backgrounds-routing.module */ "./src/app/backgrounds/backgrounds-routing.module.ts");
/* harmony import */ var _backgrounds_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backgrounds.component */ "./src/app/backgrounds/backgrounds.component.ts");






class BackgroundsModule {
}
BackgroundsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BackgroundsModule });
BackgroundsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BackgroundsModule_Factory(t) { return new (t || BackgroundsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _backgrounds_routing_module__WEBPACK_IMPORTED_MODULE_3__["BackgroundsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BackgroundsModule, { declarations: [_backgrounds_component__WEBPACK_IMPORTED_MODULE_4__["BackgroundsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _backgrounds_routing_module__WEBPACK_IMPORTED_MODULE_3__["BackgroundsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_backgrounds_component__WEBPACK_IMPORTED_MODULE_4__["BackgroundsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _backgrounds_routing_module__WEBPACK_IMPORTED_MODULE_3__["BackgroundsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=backgrounds-backgrounds-module-es2015.js.map