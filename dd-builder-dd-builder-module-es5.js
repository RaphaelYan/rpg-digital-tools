function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dd-builder-dd-builder-module"], {
  /***/
  "./src/app/dd-builder/dd-builder-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/dd-builder/dd-builder-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: DdBuilderRoutingModule */

  /***/
  function srcAppDdBuilderDdBuilderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DdBuilderRoutingModule", function () {
      return DdBuilderRoutingModule;
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


    var _dd_builder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dd-builder.component */
    "./src/app/dd-builder/dd-builder.component.ts");

    var routes = [{
      path: '',
      component: _dd_builder_component__WEBPACK_IMPORTED_MODULE_2__["DdBuilderComponent"]
    }];

    var DdBuilderRoutingModule = function DdBuilderRoutingModule() {
      _classCallCheck(this, DdBuilderRoutingModule);
    };

    DdBuilderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DdBuilderRoutingModule
    });
    DdBuilderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DdBuilderRoutingModule_Factory(t) {
        return new (t || DdBuilderRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DdBuilderRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DdBuilderRoutingModule, [{
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
  "./src/app/dd-builder/dd-builder.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/dd-builder/dd-builder.component.ts ***!
    \****************************************************/

  /*! exports provided: DdBuilderComponent */

  /***/
  function srcAppDdBuilderDdBuilderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DdBuilderComponent", function () {
      return DdBuilderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _races__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./races */
    "./src/app/dd-builder/races.ts");
    /* harmony import */


    var _table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./table */
    "./src/app/dd-builder/table.ts");
    /* harmony import */


    var _racial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./racial */
    "./src/app/dd-builder/racial.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DdBuilderComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Points : ", ctx_r0.points, "");
      }
    }

    function DdBuilderComponent_ng_template_21_optgroup_0_option_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DdBuilderComponent_ng_template_21_optgroup_0_option_1_Template_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var subrace_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r8.selectRace(subrace_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subrace_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subrace_r7.racial);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", subrace_r7.label, " (", subrace_r7.bonus, ")");
      }
    }

    function DdBuilderComponent_ng_template_21_optgroup_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "optgroup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DdBuilderComponent_ng_template_21_optgroup_0_option_1_Template, 2, 3, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var race_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("label", race_r3.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", race_r3.subraces);
      }
    }

    function DdBuilderComponent_ng_template_21_option_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DdBuilderComponent_ng_template_21_option_1_Template_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var race_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.selectRace(race_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var race_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", race_r3.racial);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", race_r3.label, " (", race_r3.bonus, ")");
      }
    }

    function DdBuilderComponent_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DdBuilderComponent_ng_template_21_optgroup_0_Template, 2, 2, "optgroup", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DdBuilderComponent_ng_template_21_option_1_Template, 2, 3, "option", 25);
      }

      if (rf & 2) {
        var race_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", race_r3.subraces);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !race_r3.subraces);
      }
    }

    function DdBuilderComponent_tr_37_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DdBuilderComponent_tr_37_div_5_Template_input_change_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var line_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.chooseBonus(line_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Bonus racial ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var line_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](line_r15.bonus ? "black-text text-bold" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", line_r15.bonus === 0 && ctx_r17.othersBonus <= 0);
      }
    }

    function DdBuilderComponent_tr_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DdBuilderComponent_tr_37_div_5_Template, 5, 4, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DdBuilderComponent_tr_37_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var line_r15 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.add(line_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DdBuilderComponent_tr_37_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var line_r15 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.remove(line_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var line_r15 = ctx.$implicit;
        var i_r16 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r16 % 2 === 1 ? "blue lighten-4" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-bold", ctx_r2.mode === "points27" && line_r15.score === 15 || ctx_r2.mode === "points35" && line_r15.score === 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", line_r15.label, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r2.tooltips[line_r15.tooltip]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.raceWithBonus && ctx_r2.exceptBonus - 1 !== i_r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-bold", ctx_r2.mode === "points27" && line_r15.score === 15 || ctx_r2.mode === "points35" && line_r15.score === 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r15.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-bold", ctx_r2.mode === "points27" && line_r15.score === 15 || ctx_r2.mode === "points35" && line_r15.score === 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r15.mod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.mode === "points27" && line_r15.score === 15 || ctx_r2.mode === "points35" && line_r15.score === 17 || (ctx_r2.mode === "points27" || ctx_r2.mode === "points35") && ctx_r2.points < ctx_r2.cost(line_r15.score, line_r15.score + 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.mode === "points27" && line_r15.score === 8 || ctx_r2.mode === "points35" && line_r15.score === 6);
      }
    }

    var DdBuilderComponent = /*#__PURE__*/function () {
      function DdBuilderComponent() {
        _classCallCheck(this, DdBuilderComponent);

        this.mode = 'points27';
        this.races = _races__WEBPACK_IMPORTED_MODULE_1__["races"];
        this.table = JSON.parse(JSON.stringify(_table__WEBPACK_IMPORTED_MODULE_2__["table"]));
        this.points = 27;
        this.totalMods = -6;
        this.othersBonus = 0;
        this.raceWithBonus = false;
        this.exceptBonus = 0;
        this.tooltips = {
          str: 'Puissance physique, aptitude athlétique naturelle',
          dex: 'Agilité, réflexes, équilibre',
          con: 'Santé, endurance, force vitale',
          "int": 'Acuité mentale, raisonnement, mémoire',
          sag: 'Perception, intuition, perspicacité',
          cha: 'Force de personnalité, éloquence, leadership'
        };
      }

      _createClass(DdBuilderComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $('#select-race').change(this.onSelectRace.bind(this));
          $('[data-toggle="tooltip"]').tooltip();
        }
      }, {
        key: "onSelectRace",
        value: function onSelectRace(event) {
          this.resetOthersBonus();
          var racialId = event.target.value;
          var bonuses = _racial__WEBPACK_IMPORTED_MODULE_3__["racial"][racialId - 1].bonus;

          for (var i = 0; i < 6; i++) {
            this.table[i].racial = 0;
          }

          for (var _i = 0; _i < bonuses.length; _i++) {
            var bonus = bonuses[_i];

            if (bonus.others) {
              this.raceWithBonus = true;
              this.othersBonus = bonus.others;
              this.exceptBonus = bonus.except;
            } else {
              this.table[bonus.id - 1].racial = bonus.bonus;
            }
          }

          for (var _i2 = 0; _i2 < 6; _i2++) {
            this.valueChanged(this.table[_i2]);
          }
        }
      }, {
        key: "between",
        value: function between(value, a, b) {
          return value >= a && value <= b;
        }
      }, {
        key: "cost",
        value: function cost(from, to) {
          // 8 = 0; 9 = 1; 10 = 2; 11 = 3; 12 = 4; 13 = 5; 14 = 7; 15 = 9
          if (this.between(from, 8, 13) && this.between(to, 8, 13)) {
            return 1;
          } else if (this.between(from, 13, 15) && this.between(to, 13, 15)) {
            // 13 => 14 | 14 => 15 | 15 => 14 | 14 => 13
            return 2;
          } else if (this.between(from, 15, 17) && this.between(to, 15, 17)) {
            // 15 => 16 | 16 => 17 | 17 => 16 | 16 => 15
            return 3;
          } else if (this.between(from, 6, 8) && this.between(to, 6, 8)) {
            // 6 => 7 | 7 => 8 | 8 => 7 | 7 => 6
            return 2;
          }
        }
      }, {
        key: "add",
        value: function add(carac) {
          if (this.mode === 'free') {
            carac.score += 1;
            return this.valueChanged(carac);
          }

          if (this.mode === 'points27' && carac.score >= 15) {
            return;
          }

          if (this.mode === 'points35' && carac.score >= 17) {
            return;
          }

          var cost = this.cost(carac.score, carac.score + 1);

          if (this.points < cost) {
            return;
          }

          this.points -= cost;
          carac.score += 1;
          this.valueChanged(carac);
        }
      }, {
        key: "remove",
        value: function remove(carac) {
          if (this.mode === 'free') {
            carac.score -= 1;
            return this.valueChanged(carac);
          }

          if (this.mode === 'points27' && carac.score <= 8) {
            return;
          }

          if (this.mode === 'points35' && carac.score <= 6) {
            return;
          }

          this.points += this.cost(carac.score, carac.score - 1);
          carac.score -= 1;
          this.valueChanged(carac);
        }
      }, {
        key: "valueChanged",
        value: function valueChanged(carac) {
          var value = carac.score + carac.racial + carac.bonus;
          carac.value = value;
          carac.mod = Math.floor(value / 2 - 5);
          this.calcTotalMod();
        }
      }, {
        key: "calcTotalMod",
        value: function calcTotalMod() {
          this.totalMods = 0;

          for (var i = 0; i < 6; i++) {
            this.totalMods += this.table[i].mod;
          }
        }
      }, {
        key: "resetOthersBonus",
        value: function resetOthersBonus() {
          $('.other-bonus').attr('checked', false);
          this.raceWithBonus = false;
          this.othersBonus = 0;
          this.exceptBonus = 0;

          for (var i = 0; i < 6; i++) {
            this.table[i].bonus = 0;
          }
        }
      }, {
        key: "chooseBonus",
        value: function chooseBonus(carac) {
          if (carac.bonus === 0 && this.othersBonus <= 0) {
            return;
          }

          if (carac.bonus) {
            carac.bonus = 0;
            this.othersBonus += 1;
            this.valueChanged(carac);
          } else {
            carac.bonus = 1;
            this.othersBonus -= 1;
            this.valueChanged(carac);
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.table = JSON.parse(JSON.stringify(_table__WEBPACK_IMPORTED_MODULE_2__["table"]));
          this.resetOthersBonus();
          $('#select-race').val('');

          if (this.mode === 'points27') {
            this.points = 27;
          } else if (this.mode === 'points35') {
            this.points = 35;
          }
        }
      }]);

      return DdBuilderComponent;
    }();

    DdBuilderComponent.ɵfac = function DdBuilderComponent_Factory(t) {
      return new (t || DdBuilderComponent)();
    };

    DdBuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DdBuilderComponent,
      selectors: [["app-dd-builder"]],
      decls: 38,
      vars: 5,
      consts: [[1, "container"], [1, "row"], [1, "center-align", "underlined-title"], [1, "text-left", "col-6"], [1, "custom-select", "mode", 3, "ngModel", "ngModelChange"], ["value", "points27", "selected", ""], ["value", "points35", "selected", ""], ["value", "free"], ["class", "center-align col-6 points", 4, "ngIf"], [1, "input-field", "col-6"], ["id", "select-race", 1, "custom-select"], ["value", "", "disabled", "", "selected", ""], ["ngFor", "", 3, "ngForOf"], [1, "col-6", "total-mods"], [1, "center-align"], [1, "carac-table", "bordered", "centered", "col-12"], [1, "light-blue"], ["data-field", "carac"], ["data-field", "score"], ["data-field", "mod"], ["data-field", "actions"], [1, "light-blue", "lighten-5"], [3, "class", 4, "ngFor", "ngForOf"], [1, "center-align", "col-6", "points"], [4, "ngIf"], [3, "value", "click", 4, "ngIf"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["data-placement", "right", "data-toggle", "tooltip", 1, "material-icons", "tooltipped"], ["class", "switch", 4, "ngIf"], [1, "btn-floating", "waves-effect", "waves-light", "btn", "green", 3, "disabled", "click"], [1, "material-icons", "left"], [1, "btn-floating", "waves-effect", "waves-light", "btn", "red", 3, "disabled", "click"], [1, "switch"], ["type", "checkbox", 1, "other-bonus", 3, "disabled", "change"], [1, "lever"]],
      template: function DdBuilderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "D&D 5 - Carac builder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DdBuilderComponent_Template_select_ngModelChange_6_listener($event) {
            return ctx.mode = $event;
          })("ngModelChange", function DdBuilderComponent_Template_select_ngModelChange_6_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mode par points (27 points, min 8, max 15)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mode par points h\xE9ro\xEFque (35 points, min 6, max 17)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Libre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "* Changer ce champs reset le formulaire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DdBuilderComponent_div_15_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "S\xE9lectionnez votre race");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DdBuilderComponent_ng_template_21_Template, 2, 2, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Caract\xE9ristiques");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Modificateur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DdBuilderComponent_tr_37_Template, 17, 16, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "points27" || ctx.mode === "points35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.races);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total modificateurs : ", ctx.totalMods, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.table);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".carac-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #03a9f4;\n  \n}\n\n.select-dropdown[_ngcontent-%COMP%]   li.optgroup[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #81d4fa;\n  \n}\n\n.select-dropdown[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #01579b;\n  \n}\n\n.underlined-title[_ngcontent-%COMP%] {\n  border-bottom: 2px solid;\n  border-color: #01579b;\n  \n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.total-mods[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.tooltipped[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ntable.centered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.centered[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 15px 5px;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.btn-floating[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 37px;\n  height: 37px;\n  line-height: 37px;\n  padding: 0;\n}\n\n.btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: inherit;\n  display: inline-block;\n  text-align: center;\n  color: #fff;\n  font-size: 1.6rem;\n  line-height: 37px;\n}\n\n.btn-floating[_ngcontent-%COMP%]:disabled {\n  background-color: #DFDFDF !important;\n  box-shadow: none;\n  color: #9F9F9F !important;\n  cursor: default;\n}\n\n.green[_ngcontent-%COMP%] {\n  background-color: #4CAF50 !important;\n}\n\n.red[_ngcontent-%COMP%] {\n  background-color: #F44336 !important;\n}\n\nselect[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.points[_ngcontent-%COMP%] {\n  font-size: 2.28rem;\n}\n\n.custom-select.mode[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL2RkLWJ1aWxkZXIvZGQtYnVpbGRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGQtYnVpbGRlci9kZC1idWlsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFBZ0IsYUFBQTtBQ0NsQjs7QURDQTtFQUNFLGNBQUE7RUFBZ0IsdUJBQUE7QUNHbEI7O0FEREE7RUFDRSxjQUFBO0VBQWdCLHNCQUFBO0FDS2xCOztBREZBO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUF1QixzQkFBQTtFQUN2QixpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ01GOztBREpBO0VBQ0UsZ0JBQUE7QUNPRjs7QURKQTtFQUNFLGVBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0FDUUY7O0FETkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNTRjs7QUROQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNTRjs7QURQQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNVRjs7QURSQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNXRjs7QURUQTtFQUNFLG9DQUFBO0FDWUY7O0FEVkE7RUFDRSxvQ0FBQTtBQ2FGOztBRFhBO0VBQ0UsZ0JBQUE7QUNjRjs7QURWQTtFQUNFLGtCQUFBO0FDYUY7O0FEWEE7RUFDRSxnQkFBQTtBQ2NGIiwiZmlsZSI6InNyYy9hcHAvZGQtYnVpbGRlci9kZC1idWlsZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyYWMtdGFibGUgdGhlYWQgdGgge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBsaT5zcGFuIHtcbiAgY29sb3I6ICMwM2E5ZjQ7IC8qbGlnaHQtYmx1ZSovXG59XG4uc2VsZWN0LWRyb3Bkb3duIGxpLm9wdGdyb3VwPnNwYW4ge1xuICBjb2xvcjogIzgxZDRmYTsgLypsaWdodC1ibHVlIGxpZ2h0ZW4tMyovXG59XG4uc2VsZWN0LWRyb3Bkb3duIGxpLmRpc2FibGVkPnNwYW4ge1xuICBjb2xvcjogIzAxNTc5YjsgLypsaWdodC1ibHVlIGRhcmtlbi00Ki9cbn1cblxuLnVuZGVybGluZWQtdGl0bGUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzAxNTc5YjsgLypsaWdodC1ibHVlIGRhcmtlbi00Ki9cbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cbi50b3RhbC1tb2RzIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnRvb2x0aXBwZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG50YWJsZS5jZW50ZXJlZCB0aGVhZCB0ciB0aCwgdGFibGUuY2VudGVyZWQgdGJvZHkgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG50ZCwgdGgge1xuICBwYWRkaW5nOiAxNXB4IDVweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmJ0bi1mbG9hdGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDM3cHg7XG4gIGhlaWdodDogMzdweDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4uYnRuLWZsb2F0aW5nIGkge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG59XG4uYnRuLWZsb2F0aW5nOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGREZERiAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogIzlGOUY5RiAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwICFpbXBvcnRhbnQ7XG59XG4ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNiAhaW1wb3J0YW50O1xufVxuc2VsZWN0IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuXG4ucG9pbnRzIHtcbiAgZm9udC1zaXplOiAyLjI4cmVtO1xufVxuLmN1c3RvbS1zZWxlY3QubW9kZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4iLCIuY2FyYWMtdGFibGUgdGhlYWQgdGgge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBsaSA+IHNwYW4ge1xuICBjb2xvcjogIzAzYTlmNDtcbiAgLypsaWdodC1ibHVlKi9cbn1cblxuLnNlbGVjdC1kcm9wZG93biBsaS5vcHRncm91cCA+IHNwYW4ge1xuICBjb2xvcjogIzgxZDRmYTtcbiAgLypsaWdodC1ibHVlIGxpZ2h0ZW4tMyovXG59XG5cbi5zZWxlY3QtZHJvcGRvd24gbGkuZGlzYWJsZWQgPiBzcGFuIHtcbiAgY29sb3I6ICMwMTU3OWI7XG4gIC8qbGlnaHQtYmx1ZSBkYXJrZW4tNCovXG59XG5cbi51bmRlcmxpbmVkLXRpdGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMwMTU3OWI7XG4gIC8qbGlnaHQtYmx1ZSBkYXJrZW4tNCovXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi50b3RhbC1tb2RzIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnRvb2x0aXBwZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRhYmxlLmNlbnRlcmVkIHRoZWFkIHRyIHRoLCB0YWJsZS5jZW50ZXJlZCB0Ym9keSB0ciB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGQsIHRoIHtcbiAgcGFkZGluZzogMTVweCA1cHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5idG4tZmxvYXRpbmcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYnRuLWZsb2F0aW5nIGkge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG59XG5cbi5idG4tZmxvYXRpbmc6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZERkRGICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjOUY5RjlGICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MCAhaW1wb3J0YW50O1xufVxuXG4ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNiAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Qge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ucG9pbnRzIHtcbiAgZm9udC1zaXplOiAyLjI4cmVtO1xufVxuXG4uY3VzdG9tLXNlbGVjdC5tb2RlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DdBuilderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dd-builder',
          templateUrl: './dd-builder.component.html',
          styleUrls: ['./dd-builder.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dd-builder/dd-builder.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/dd-builder/dd-builder.module.ts ***!
    \*************************************************/

  /*! exports provided: DdBuilderModule */

  /***/
  function srcAppDdBuilderDdBuilderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DdBuilderModule", function () {
      return DdBuilderModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _dd_builder_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dd-builder-routing.module */
    "./src/app/dd-builder/dd-builder-routing.module.ts");
    /* harmony import */


    var _dd_builder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dd-builder.component */
    "./src/app/dd-builder/dd-builder.component.ts");

    var DdBuilderModule = function DdBuilderModule() {
      _classCallCheck(this, DdBuilderModule);
    };

    DdBuilderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DdBuilderModule
    });
    DdBuilderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DdBuilderModule_Factory(t) {
        return new (t || DdBuilderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _dd_builder_routing_module__WEBPACK_IMPORTED_MODULE_3__["DdBuilderRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DdBuilderModule, {
        declarations: [_dd_builder_component__WEBPACK_IMPORTED_MODULE_4__["DdBuilderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _dd_builder_routing_module__WEBPACK_IMPORTED_MODULE_3__["DdBuilderRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DdBuilderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dd_builder_component__WEBPACK_IMPORTED_MODULE_4__["DdBuilderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _dd_builder_routing_module__WEBPACK_IMPORTED_MODULE_3__["DdBuilderRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dd-builder/races.ts":
  /*!*************************************!*\
    !*** ./src/app/dd-builder/races.ts ***!
    \*************************************/

  /*! exports provided: races */

  /***/
  function srcAppDdBuilderRacesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "races", function () {
      return races;
    });

    var races = [{
      label: 'Demi-elfe',
      bonus: '+2cha, +1 à deux autres carac',
      racial: 1
    }, {
      label: 'Demi-orque',
      bonus: '+2for, +1con',
      racial: 2
    }, {
      label: 'Drakéide',
      bonus: '+2for, +1cha',
      racial: 3
    }, {
      label: 'Elfe',
      subraces: [{
        label: 'Elfe des bois',
        bonus: '+2dex, +1sag',
        racial: 4
      }, {
        label: 'Haut-elfe',
        bonus: '+2dex, +1int',
        racial: 5
      }]
    }, {
      label: 'Gnome',
      subraces: [{
        label: 'Gnome des forêts',
        bonus: '+2int, +1dex',
        racial: 6
      }, {
        label: 'Gnome des roches',
        bonus: '+2int, +1con',
        racial: 7
      }, {
        label: 'Gnome des profondeurs',
        bonus: '+2int, +1dex',
        racial: 6
      }]
    }, {
      label: 'Halfelin',
      subraces: [{
        label: 'Halfelin corpulent',
        bonus: '+2dex, +1con',
        racial: 8
      }, {
        label: 'Halfelin pieds-léger',
        bonus: '+2dex, +1cha',
        racial: 9
      }]
    }, {
      label: 'Humain',
      subraces: [{
        label: 'Humain',
        bonus: '+1 all',
        racial: 10
      }, {
        label: 'Humain (variante)',
        bonus: '+1 à deux carac, 1 compétence maitrisé, 1 don',
        racial: 14
      }]
    }, {
      label: 'Nain',
      subraces: [{
        label: 'Nain des collines',
        bonus: '+2con, +1sag',
        racial: 11
      }, {
        label: 'Nain des montagnes',
        bonus: '+2con, +2for',
        racial: 12
      }]
    }, {
      label: 'Aasimar',
      subraces: [{
        label: 'Protecteur',
        bonus: '+2cha, +1sag',
        racial: 21
      }, {
        label: 'Fléau',
        bonus: '+2cha, +1con',
        racial: 22
      }, {
        label: 'Déchu',
        bonus: '+2cha, +1for',
        racial: 23
      }]
    }, {
      label: 'Tieffelin',
      subraces: [{
        label: 'standard',
        bonus: '+2cha, +1int',
        racial: 13
      }, {
        label: 'Bloodline of Glasya',
        bonus: '+2cha, +1dex',
        racial: 24
      }]
    }, {
      label: 'Firbolg',
      bonus: '+2sag, +1for',
      racial: 15
    }, {
      label: 'Goliath',
      bonus: '+2for, +1con',
      racial: 16
    }, {
      label: 'Goliath "sage"',
      bonus: '+1con, +2sag',
      racial: 25
    }, {
      label: 'Kenku',
      bonus: '+2dex, +1sag',
      racial: 17
    }, {
      label: 'Tabaxi',
      bonus: '+2dex, +1cha',
      racial: 18
    }, {
      label: 'Tortle',
      bonus: '+2for, +1sag',
      racial: 19
    }, {
      label: 'Triton',
      bonus: '+1for, +1con, +1cha',
      racial: 20
    }, {
      label: 'Kitsune Zenko',
      bonus: '+2dex, +1sag',
      racial: 4
    }];
    /***/
  },

  /***/
  "./src/app/dd-builder/racial.ts":
  /*!**************************************!*\
    !*** ./src/app/dd-builder/racial.ts ***!
    \**************************************/

  /*! exports provided: racial */

  /***/
  function srcAppDdBuilderRacialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "racial", function () {
      return racial;
    });

    var racial = [{
      id: 1,
      bonus: [{
        id: 6,
        bonus: 2
      }, {
        others: 2,
        except: 6
      }]
    }, {
      id: 2,
      bonus: [{
        id: 1,
        bonus: 2
      }, {
        id: 3,
        bonus: 1
      }]
    }, {
      id: 3,
      bonus: [{
        id: 1,
        bonus: 2
      }, {
        id: 6,
        bonus: 1
      }]
    }, {
      id: 4,
      bonus: [{
        id: 2,
        bonus: 2
      }, {
        id: 5,
        bonus: 1
      }]
    }, {
      id: 5,
      bonus: [{
        id: 2,
        bonus: 2
      }, {
        id: 4,
        bonus: 1
      }]
    }, {
      id: 6,
      bonus: [{
        id: 4,
        bonus: 2
      }, {
        id: 2,
        bonus: 1
      }]
    }, {
      id: 7,
      bonus: [{
        id: 4,
        bonus: 2
      }, {
        id: 3,
        bonus: 1
      }]
    }, {
      id: 8,
      bonus: [{
        id: 2,
        bonus: 2
      }, {
        id: 3,
        bonus: 1
      }]
    }, {
      id: 9,
      bonus: [{
        id: 2,
        bonus: 2
      }, {
        id: 6,
        bonus: 1
      }]
    }, {
      id: 10,
      bonus: [{
        id: 1,
        bonus: 1
      }, {
        id: 2,
        bonus: 1
      }, {
        id: 3,
        bonus: 1
      }, {
        id: 4,
        bonus: 1
      }, {
        id: 5,
        bonus: 1
      }, {
        id: 6,
        bonus: 1
      }]
    }, {
      id: 11,
      bonus: [{
        id: 3,
        bonus: 2
      }, {
        id: 5,
        bonus: 1
      }]
    }, {
      id: 12,
      bonus: [{
        id: 3,
        bonus: 2
      }, {
        id: 1,
        bonus: 2
      }]
    }, {
      id: 13,
      bonus: [{
        id: 6,
        bonus: 2
      }, {
        id: 4,
        bonus: 1
      }]
    }, {
      id: 14,
      bonus: [{
        others: 2
      }]
    }, {
      id: 15,
      bonus: [{
        id: 5,
        bonus: 2
      }, {
        id: 1,
        bonus: 1
      }]
    }, {
      id: 16,
      bonus: [{
        id: 1,
        bonus: 2
      }, {
        id: 3,
        bonus: 1
      }]
    }, {
      id: 17,
      bonus: [{
        id: 2,
        bonus: 2
      }, {
        id: 5,
        bonus: 1
      }]
    }, {
      id: 18,
      bonus: [{
        id: 2,
        bonus: 2
      }, {
        id: 6,
        bonus: 1
      }]
    }, {
      id: 19,
      bonus: [{
        id: 1,
        bonus: 2
      }, {
        id: 5,
        bonus: 1
      }]
    }, {
      id: 20,
      bonus: [{
        id: 1,
        bonus: 1
      }, {
        id: 3,
        bonus: 1
      }, {
        id: 6,
        bonus: 1
      }]
    }, {
      id: 21,
      bonus: [{
        id: 6,
        bonus: 2
      }, {
        id: 5,
        bonus: 1
      }]
    }, {
      id: 22,
      bonus: [{
        id: 6,
        bonus: 2
      }, {
        id: 3,
        bonus: 1
      }]
    }, {
      id: 23,
      bonus: [{
        id: 6,
        bonus: 2
      }, {
        id: 1,
        bonus: 1
      }]
    }, {
      id: 24,
      bonus: [{
        id: 6,
        bonus: 2
      }, {
        id: 2,
        bonus: 1
      }]
    }, {
      id: 25,
      bonus: [{
        id: 3,
        bonus: 1
      }, {
        id: 5,
        bonus: 2
      }]
    }];
    /***/
  },

  /***/
  "./src/app/dd-builder/table.ts":
  /*!*************************************!*\
    !*** ./src/app/dd-builder/table.ts ***!
    \*************************************/

  /*! exports provided: table */

  /***/
  function srcAppDdBuilderTableTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "table", function () {
      return table;
    });

    var table = [{
      label: 'Force',
      score: 8,
      racial: 0,
      value: 8,
      mod: -1,
      id: 1,
      bonus: 0,
      tooltip: 'str'
    }, {
      label: 'Dextérité',
      score: 8,
      racial: 0,
      value: 8,
      mod: -1,
      id: 2,
      bonus: 0,
      tooltip: 'dex'
    }, {
      label: 'Constitution',
      score: 8,
      racial: 0,
      value: 8,
      mod: -1,
      id: 3,
      bonus: 0,
      tooltip: 'con'
    }, {
      label: 'Intelligence',
      score: 8,
      racial: 0,
      value: 8,
      mod: -1,
      id: 4,
      bonus: 0,
      tooltip: 'int'
    }, {
      label: 'Sagesse',
      score: 8,
      racial: 0,
      value: 8,
      mod: -1,
      id: 5,
      bonus: 0,
      tooltip: 'sag'
    }, {
      label: 'Charisme',
      score: 8,
      racial: 0,
      value: 8,
      mod: -1,
      id: 6,
      bonus: 0,
      tooltip: 'cha'
    }];
    /***/
  }
}]);
//# sourceMappingURL=dd-builder-dd-builder-module-es5.js.map