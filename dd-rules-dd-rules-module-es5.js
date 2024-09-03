function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dd-rules-dd-rules-module"], {
  /***/
  "./src/app/dd-rules/dd-rules-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/dd-rules/dd-rules-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: DdRulesRoutingModule */

  /***/
  function srcAppDdRulesDdRulesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DdRulesRoutingModule", function () {
      return DdRulesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dd_rules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dd-rules.component */
    "./src/app/dd-rules/dd-rules.component.ts");

    var routes = [{
      path: '',
      component: _dd_rules_component__WEBPACK_IMPORTED_MODULE_2__["DdRulesComponent"]
    }];

    var DdRulesRoutingModule = function DdRulesRoutingModule() {
      _classCallCheck(this, DdRulesRoutingModule);
    };

    DdRulesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DdRulesRoutingModule
    });
    DdRulesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DdRulesRoutingModule_Factory(t) {
        return new (t || DdRulesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DdRulesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DdRulesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dd-rules/dd-rules.component.ts":
  /*!************************************************!*\
    !*** ./src/app/dd-rules/dd-rules.component.ts ***!
    \************************************************/

  /*! exports provided: DdRulesComponent */

  /***/
  function srcAppDdRulesDdRulesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DdRulesComponent", function () {
      return DdRulesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DdRulesComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rule_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rule_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", rule_r1.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var DdRulesComponent = function DdRulesComponent() {
      _classCallCheck(this, DdRulesComponent);

      this.rules = [// ennemis avec actions speciales et/ou capacités spéciales
      // les ennemis peuvent fuir de temps en temps
      // decrire le terrain et l'environnement pour interaction
      //     }, {
      //       title: '',
      //       body: `Tomber à 0 points de vie<br>
      //           - dégâts à l'armure : CA -2, doit passer 10 minutes à réparer<br>
      //           - dégâts à l'arme : touché -2, doit passer 10 minutes à réparer<br>
      //           - 1 niveau de fatigue<br>
      //           - caractéristique réduite de 2, doit passer un repos long<br>
      //           - perte de la moitié des dés de repos<br>
      //     }
      {
        title: 'Roleplay & surprises',
        body: "Entre chaque round, possibilit\xE9 de faire 1 minute de discussion tactique/m\xE9tagame.\n<br>\nAucune discussion au tour de chaque joueur."
      }, {
        title: 'Personnages très inspirés',
        body: "Suppression de la limite de 1 point pour le \"point d'inspiration\".\n<br>\nLib\xE9rez votre cr\xE9ativit\xE9 et votre ing\xE9niosit\xE9."
      }, {
        title: 'La mort reste un secret',
        body: "Les jets de sauvegarde contre la mort se font en secret."
      }, {
        title: 'Boire une potion',
        body: "Boire une potion ne co\xFBte qu'une action bonus, \xE0 la place de prendre l'action principale"
      }, {
        title: 'Action : Attaquer sur la défensive',
        body: "Idem que l'action \"Esquiver\", mais en pouvant attaquer avec un d\xE9savantage"
      }, {
        title: 'Action : Défense totale',
        body: "Idem que l'action \"Esquiver\", mais ajoute aussi +2 \xE0 la classe d'armure"
      }, {
        title: 'Lanceur de sort versatile',
        body: "Le personnage peut lancer 1 sort en d\xE9pensant 2 emplacements de niveau inf\xE9rieur\n<br>\n<br>\nExemple : Lancer un sort de niveau 2 en d\xE9pensant 2 emplacement de sort niveau 1"
      }, {
        title: 'Lanceur de sort protecteur',
        body: "Les sorts de protection / am\xE9lioration peuvent \xEAtre lanc\xE9s sur le \"groupe\" en d\xE9pensant un emplacement de sort d\u2019un niveau +1\n<br>\nLa dur\xE9e du sort est divis\xE9e par le nombre de cible.<br>\n<br>\nExemple : Le sort \"protection-contre-une-energie\" ou \"amelioration-de-caracteristique\""
      }, {
        title: 'Identification des objets magiques',
        body: "Il faut soit utiliser le sort identification,\n<br>\nsoit exp\xE9rimenter l'objet pour trouver ses fonctionnalit\xE9s."
      }, {
        title: 'Guérison naturelle',
        body: "Les joueurs ne regagnent pas TOUS leurs pv lors d'un repos long.\n<br>\n<br>\nIls doivent d\xE9penser leurs d\xE9s de vies comme lors d'un repos court pour se soigner naturellement."
      }, {
        title: 'Gain de niveau pour les points de vies',
        body: "\nPour le niveau 1, c'est le maximum sur le d\xE9.\n<br>\nEnsuite pour chaque niveau :\n<ul>\n    <li>on lance le d\xE9</li>\n    <li>si le r\xE9sultat ne plait pas :</li>\n    <li style=\"list-style: none;\">\n    <ul>\n        <li>soit on relance le d\xE9</li>\n        <li>soit on prend la moiti\xE9 du maximum du d\xE9</li>\n    </ul>\n    </li>\n</ul>"
      }];
    };

    DdRulesComponent.ɵfac = function DdRulesComponent_Factory(t) {
      return new (t || DdRulesComponent)();
    };

    DdRulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DdRulesComponent,
      selectors: [["app-dd-rules"]],
      decls: 3,
      vars: 1,
      consts: [[1, "container"], [1, "row"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "card", "mb-4", "shadow-sm"], [1, "card-body"], [1, "card-title"], [1, "card-text", 3, "innerHtml"]],
      template: function DdRulesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DdRulesComponent_div_2_Template, 6, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rules);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RkLXJ1bGVzL2RkLXJ1bGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DdRulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dd-rules',
          templateUrl: './dd-rules.component.html',
          styleUrls: ['./dd-rules.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dd-rules/dd-rules.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/dd-rules/dd-rules.module.ts ***!
    \*********************************************/

  /*! exports provided: DdRulesModule */

  /***/
  function srcAppDdRulesDdRulesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DdRulesModule", function () {
      return DdRulesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dd_rules_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dd-rules-routing.module */
    "./src/app/dd-rules/dd-rules-routing.module.ts");
    /* harmony import */


    var _dd_rules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dd-rules.component */
    "./src/app/dd-rules/dd-rules.component.ts");

    var DdRulesModule = function DdRulesModule() {
      _classCallCheck(this, DdRulesModule);
    };

    DdRulesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DdRulesModule
    });
    DdRulesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DdRulesModule_Factory(t) {
        return new (t || DdRulesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dd_rules_routing_module__WEBPACK_IMPORTED_MODULE_2__["DdRulesRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DdRulesModule, {
        declarations: [_dd_rules_component__WEBPACK_IMPORTED_MODULE_3__["DdRulesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dd_rules_routing_module__WEBPACK_IMPORTED_MODULE_2__["DdRulesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DdRulesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dd_rules_component__WEBPACK_IMPORTED_MODULE_3__["DdRulesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dd_rules_routing_module__WEBPACK_IMPORTED_MODULE_2__["DdRulesRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=dd-rules-dd-rules-module-es5.js.map