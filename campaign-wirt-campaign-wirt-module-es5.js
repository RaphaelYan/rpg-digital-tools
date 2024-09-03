function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaign-wirt-campaign-wirt-module"], {
  /***/
  "./src/app/campaign-wirt/campaign-wirt-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/campaign-wirt/campaign-wirt-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CampaignWirtRoutingModule */

  /***/
  function srcAppCampaignWirtCampaignWirtRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampaignWirtRoutingModule", function () {
      return CampaignWirtRoutingModule;
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


    var _campaign_wirt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./campaign-wirt.component */
    "./src/app/campaign-wirt/campaign-wirt.component.ts");

    var routes = [{
      path: '',
      component: _campaign_wirt_component__WEBPACK_IMPORTED_MODULE_2__["CampaignWirtComponent"]
    }];

    var CampaignWirtRoutingModule = function CampaignWirtRoutingModule() {
      _classCallCheck(this, CampaignWirtRoutingModule);
    };

    CampaignWirtRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CampaignWirtRoutingModule
    });
    CampaignWirtRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CampaignWirtRoutingModule_Factory(t) {
        return new (t || CampaignWirtRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CampaignWirtRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampaignWirtRoutingModule, [{
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
  "./src/app/campaign-wirt/campaign-wirt.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/campaign-wirt/campaign-wirt.component.ts ***!
    \**********************************************************/

  /*! exports provided: CampaignWirtComponent */

  /***/
  function srcAppCampaignWirtCampaignWirtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampaignWirtComponent", function () {
      return CampaignWirtComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CampaignWirtComponent = /*#__PURE__*/function () {
      function CampaignWirtComponent() {
        _classCallCheck(this, CampaignWirtComponent);
      }

      _createClass(CampaignWirtComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var displayValues = true;
          var chars = [{
            name: 'Noëlie',
            proficiency: 3,
            armor_class: 15,
            pv: 67,
            strength: 2,
            dexterity: 0,
            constitution: 2,
            intelligence: 0,
            wisdom: 2,
            charisma: 5,
            masteries: ['dexterity', 'arcana', 'investigation', 'religion', 'insight', 'survival', 'charisma', 'performance'],
            expert: ['investigation', 'insight'],
            toucheATout: true
          }, {
            name: 'Julien',
            proficiency: 3,
            armor_class: 17,
            pv: 51,
            strength: -1,
            dexterity: 5,
            constitution: 1,
            intelligence: 2,
            wisdom: 1,
            charisma: 2,
            masteries: ['dexterity', 'intelligence', 'deception', 'investigation', 'perception', 'persuasion', 'sleight_of_hand', 'stealth'],
            expert: ['stealth', 'deception', 'investigation']
          }, {
            name: 'Repié',
            proficiency: 3,
            armor_class: 20,
            pv: 73,
            strength: -1,
            dexterity: 3,
            constitution: 3,
            intelligence: 5,
            wisdom: 0,
            charisma: -1,
            masteries: ['constitution', 'intelligence', 'arcana', 'history', 'investigation', 'sleight_of_hand']
          }, {
            name: 'Clément',
            proficiency: 3,
            armor_class: 18,
            pv: 60,
            strength: 3,
            dexterity: 2,
            constitution: 2,
            intelligence: 0,
            wisdom: 5,
            charisma: 0,
            masteries: ['wisdom', 'charisma', 'athletics', 'stealth', 'insight', 'deception', 'persuasion']
          }, {
            name: 'Mélodie',
            proficiency: 3,
            armor_class: 15,
            pv: 90,
            strength: 5,
            dexterity: 2,
            constitution: 3,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
            masteries: ['strength', 'constitution', 'athletics', 'nature', 'perception', 'survival', 'intimidation']
          }];

          var getHtmlForSkill = function getHtmlForSkill(_char, skill, proficiency, attribute) {
            var addClass = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

            var isMastered = _char.masteries.includes(skill);

            var isExpert = _char.expert && _char.expert.includes(skill);

            var value = attribute;

            if (isExpert) {
              value += proficiency;
              value += proficiency;
            } else if (isMastered) {
              value += proficiency;
            } else if (_char.toucheATout) {
              value += Math.trunc(proficiency / 2); // Arrondi inférieur
            }

            if (addClass) {
              return "<td class=\"value-".concat(value, " ").concat(addClass, "\">") + (displayValues ? value : '') + "</td>";
            }

            return "<td class=\"value-".concat(value, "\">") + (displayValues ? value : '') + "</td>";
          }; // Display attributes


          var html = '';

          for (var _i = 0, _chars = chars; _i < _chars.length; _i++) {
            var _char2 = _chars[_i];
            html += '<tr>';
            html += "<th>".concat(_char2.name, "</th>");
            html += "<td class=\"value-".concat(_char2.strength, "\">") + (displayValues ? _char2.strength : '') + "</td>";
            html += "<td class=\"value-".concat(_char2.dexterity, "\">") + (displayValues ? _char2.dexterity : '') + "</td>";
            html += "<td class=\"value-".concat(_char2.constitution, "\">") + (displayValues ? _char2.constitution : '') + "</td>";
            html += "<td class=\"value-".concat(_char2.intelligence, "\">") + (displayValues ? _char2.intelligence : '') + "</td>";
            html += "<td class=\"value-".concat(_char2.wisdom, "\">") + (displayValues ? _char2.wisdom : '') + "</td>";
            html += "<td class=\"value-".concat(_char2.charisma, "\">") + (displayValues ? _char2.charisma : '') + "</td>";
            html += '</tr>';
          }

          $('.attributs').html(html); // Display skills

          html = '';

          for (var _i2 = 0, _chars2 = chars; _i2 < _chars2.length; _i2++) {
            var _char3 = _chars2[_i2];
            html += '<tr>';
            html += "<th>".concat(_char3.name, "</th>");
            html += getHtmlForSkill(_char3, 'strength', _char3.proficiency, _char3.strength);
            html += getHtmlForSkill(_char3, 'athletics', _char3.proficiency, _char3.strength);
            html += getHtmlForSkill(_char3, 'dexterity', _char3.proficiency, _char3.dexterity, 'border-left');
            html += getHtmlForSkill(_char3, 'acrobatics', _char3.proficiency, _char3.dexterity);
            html += getHtmlForSkill(_char3, 'sleight_of_hand', _char3.proficiency, _char3.dexterity);
            html += getHtmlForSkill(_char3, 'stealth', _char3.proficiency, _char3.dexterity);
            html += getHtmlForSkill(_char3, 'constitution', _char3.proficiency, _char3.constitution, 'border-left');
            html += getHtmlForSkill(_char3, 'intelligence', _char3.proficiency, _char3.intelligence, 'border-left');
            html += getHtmlForSkill(_char3, 'arcana', _char3.proficiency, _char3.intelligence);
            html += getHtmlForSkill(_char3, 'history', _char3.proficiency, _char3.intelligence);
            html += getHtmlForSkill(_char3, 'investigation', _char3.proficiency, _char3.intelligence);
            html += getHtmlForSkill(_char3, 'nature', _char3.proficiency, _char3.intelligence);
            html += getHtmlForSkill(_char3, 'religion', _char3.proficiency, _char3.intelligence);
            html += getHtmlForSkill(_char3, 'wisdom', _char3.proficiency, _char3.wisdom, 'border-left');
            html += getHtmlForSkill(_char3, 'animal_handling', _char3.proficiency, _char3.wisdom);
            html += getHtmlForSkill(_char3, 'insight', _char3.proficiency, _char3.wisdom);
            html += getHtmlForSkill(_char3, 'medicine', _char3.proficiency, _char3.wisdom);
            html += getHtmlForSkill(_char3, 'perception', _char3.proficiency, _char3.wisdom);
            html += getHtmlForSkill(_char3, 'survival', _char3.proficiency, _char3.wisdom);
            html += getHtmlForSkill(_char3, 'charisma', _char3.proficiency, _char3.charisma, 'border-left');
            html += getHtmlForSkill(_char3, 'deception', _char3.proficiency, _char3.charisma);
            html += getHtmlForSkill(_char3, 'intimidation', _char3.proficiency, _char3.charisma);
            html += getHtmlForSkill(_char3, 'performance', _char3.proficiency, _char3.charisma);
            html += getHtmlForSkill(_char3, 'persuasion', _char3.proficiency, _char3.charisma);
            html += '</tr>';
          }

          $('.skills').html(html); // Display stats

          html = '';

          for (var _i3 = 0, _chars3 = chars; _i3 < _chars3.length; _i3++) {
            var _char4 = _chars3[_i3];
            html += '<tr>';
            html += "<th>".concat(_char4.name, "</th>");
            var pvValue = Math.trunc(_char4.pv / 10);
            html += "<td class=\"value-".concat(pvValue, "\">") + (displayValues ? _char4.pv : '') + "</td>";
            var armorClassValue = _char4.armor_class - 12;
            html += "<td class=\"value-".concat(armorClassValue, "\">") + (displayValues ? _char4.armor_class : '') + "</td>";
            html += '</tr>';
          }

          $('.stats').html(html);
        }
      }]);

      return CampaignWirtComponent;
    }();

    CampaignWirtComponent.ɵfac = function CampaignWirtComponent_Factory(t) {
      return new (t || CampaignWirtComponent)();
    };

    CampaignWirtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CampaignWirtComponent,
      selectors: [["app-campaign-wirt"]],
      decls: 95,
      vars: 0,
      consts: [[1, "container"], [1, "px-3", "py-3", "pt-md-5", "pb-md-4", "mx-auto", "text-center"], [1, "display-4"], [1, "row"], [1, "table"], ["scope", "col"], [1, "attributs"], [1, "table", "table-skills"], ["scope", "col", 1, "border-left"], [1, "skills"], [1, "stats"]],
      template: function CampaignWirtComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Attributs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Force");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dexterit\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Constitution");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Intelligence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sagesse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Charisme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "tbody", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Comp\xE9tences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "strength");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "athletics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "dexterity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "acrobatics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "sleight_of_hand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "stealth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "constitution");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "intelligence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "arcana");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "history");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "investigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "nature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "religion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "wisdom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "animal_handling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "insight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "medicine");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "perception");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "survival");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "charisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "deception");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "intimidation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "performance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "persuasion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "tbody", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "PV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "CA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "tbody", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  height: 1500px;\n  display: block;\n}\n\n[_nghost-%COMP%]     {\n  \n  \n}\n\n[_nghost-%COMP%]     .container {\n  max-width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50px;\n}\n\n[_nghost-%COMP%]     .table.table-skills thead th {\n  -webkit-writing-mode: vertical-rl;\n          writing-mode: vertical-rl;\n  -webkit-text-orientation: mixed;\n          text-orientation: mixed;\n}\n\n[_nghost-%COMP%]     .border-left {\n  border-left: 1px solid black !important;\n}\n\n[_nghost-%COMP%]     td.value--2 {\n  background-color: #ff0000;\n}\n\n[_nghost-%COMP%]     td.value--1 {\n  background-color: #fe5d00;\n}\n\n[_nghost-%COMP%]     td.value-0 {\n  background-color: #f88900;\n}\n\n[_nghost-%COMP%]     td.value-1 {\n  background-color: #efae00;\n}\n\n[_nghost-%COMP%]     td.value-2 {\n  background-color: #e4cf00;\n}\n\n[_nghost-%COMP%]     td.value-3 {\n  background-color: #d7de00;\n}\n\n[_nghost-%COMP%]     td.value-4 {\n  background-color: #c6ed00;\n}\n\n[_nghost-%COMP%]     td.value-5 {\n  background-color: #aefc00;\n}\n\n[_nghost-%COMP%]     td.value-6 {\n  background-color: #97fd00;\n}\n\n[_nghost-%COMP%]     td.value-7 {\n  background-color: #7cfe00;\n}\n\n[_nghost-%COMP%]     td.value-8 {\n  background-color: #58fe00;\n}\n\n[_nghost-%COMP%]     td.value-9 {\n  background-color: #00ff00;\n}\n\n[_nghost-%COMP%]     td.value-10 {\n  background-color: #00ff00;\n}\n\n[_nghost-%COMP%]     td.value-11 {\n  background-color: #00ff00;\n}\n\n[_nghost-%COMP%]     td.value-12 {\n  background-color: #00ff00;\n}\n\n[_nghost-%COMP%]     td.value-13 {\n  background-color: #00ff00;\n}\n\n[_nghost-%COMP%]     td.value-14 {\n  background-color: #00ff00;\n}\n\n[_nghost-%COMP%]     td.value-15 {\n  background-color: #00ff00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL2NhbXBhaWduLXdpcnQvY2FtcGFpZ24td2lydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FtcGFpZ24td2lydC9jYW1wYWlnbi13aXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQWlDRSwyR0FBQTtFQUNBOzs7Ozs7Ozs7OztXQUFBO0FDbkJGOztBRGRFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDZ0JKOztBRGRFO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUNnQko7O0FEZEU7RUFBZSx1Q0FBQTtBQ2lCakI7O0FEZkU7RUFBYyx5QkFBQTtBQ2tCaEI7O0FEakJFO0VBQWMseUJBQUE7QUNvQmhCOztBRG5CRTtFQUFhLHlCQUFBO0FDc0JmOztBRHJCRTtFQUFhLHlCQUFBO0FDd0JmOztBRHZCRTtFQUFhLHlCQUFBO0FDMEJmOztBRHpCRTtFQUFhLHlCQUFBO0FDNEJmOztBRDNCRTtFQUFhLHlCQUFBO0FDOEJmOztBRDdCRTtFQUFhLHlCQUFBO0FDZ0NmOztBRC9CRTtFQUFhLHlCQUFBO0FDa0NmOztBRGpDRTtFQUFhLHlCQUFBO0FDb0NmOztBRG5DRTtFQUFhLHlCQUFBO0FDc0NmOztBRHJDRTtFQUFhLHlCQUFBO0FDd0NmOztBRHZDRTtFQUFjLHlCQUFBO0FDMENoQjs7QUR6Q0U7RUFBYyx5QkFBQTtBQzRDaEI7O0FEM0NFO0VBQWMseUJBQUE7QUM4Q2hCOztBRDdDRTtFQUFjLHlCQUFBO0FDZ0RoQjs7QUQvQ0U7RUFBYyx5QkFBQTtBQ2tEaEI7O0FEakRFO0VBQWMseUJBQUE7QUNvRGhCIiwiZmlsZSI6InNyYy9hcHAvY2FtcGFpZ24td2lydC9jYW1wYWlnbi13aXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDE1MDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCA6Om5nLWRlZXAge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MHB4O1xuICB9XG4gIC50YWJsZS50YWJsZS1za2lsbHMgdGhlYWQgdGgge1xuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gICAgdGV4dC1vcmllbnRhdGlvbjogbWl4ZWQ7XG4gIH1cbiAgLmJvcmRlci1sZWZ0IHsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50OyB9XG5cbiAgdGQudmFsdWUtLTIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwOyB9XG4gIHRkLnZhbHVlLS0xIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZlNWQwMDsgfVxuICB0ZC52YWx1ZS0wIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y4ODkwMDsgfVxuICB0ZC52YWx1ZS0xIHsgYmFja2dyb3VuZC1jb2xvcjogI2VmYWUwMDsgfVxuICB0ZC52YWx1ZS0yIHsgYmFja2dyb3VuZC1jb2xvcjogI2U0Y2YwMDsgfVxuICB0ZC52YWx1ZS0zIHsgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZGUwMDsgfVxuICB0ZC52YWx1ZS00IHsgYmFja2dyb3VuZC1jb2xvcjogI2M2ZWQwMDsgfVxuICB0ZC52YWx1ZS01IHsgYmFja2dyb3VuZC1jb2xvcjogI2FlZmMwMDsgfVxuICB0ZC52YWx1ZS02IHsgYmFja2dyb3VuZC1jb2xvcjogIzk3ZmQwMDsgfVxuICB0ZC52YWx1ZS03IHsgYmFja2dyb3VuZC1jb2xvcjogIzdjZmUwMDsgfVxuICB0ZC52YWx1ZS04IHsgYmFja2dyb3VuZC1jb2xvcjogIzU4ZmUwMDsgfVxuICB0ZC52YWx1ZS05IHsgYmFja2dyb3VuZC1jb2xvcjogIzAwZmYwMDsgfVxuICB0ZC52YWx1ZS0xMCB7IGJhY2tncm91bmQtY29sb3I6ICMwMGZmMDA7IH1cbiAgdGQudmFsdWUtMTEgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZjAwOyB9XG4gIHRkLnZhbHVlLTEyIHsgYmFja2dyb3VuZC1jb2xvcjogIzAwZmYwMDsgfVxuICB0ZC52YWx1ZS0xMyB7IGJhY2tncm91bmQtY29sb3I6ICMwMGZmMDA7IH1cbiAgdGQudmFsdWUtMTQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZjAwOyB9XG4gIHRkLnZhbHVlLTE1IHsgYmFja2dyb3VuZC1jb2xvcjogIzAwZmYwMDsgfVxuXG4gIC8qIGh0dHBzOi8vbXljb2xvci5zcGFjZS9ncmFkaWVudDM/b3JpPXRvK3JpZ2h0JmhleD0lMjNGRjAwMDAmaGV4Mj0lMjNDOEZBMDAmaGV4Mz0lMjMwMEZGMDAmc3VibWl0PXN1Ym1pdCAqL1xuICAvKiAjZmYwMDAwXG4gICNmZTVkMDBcbiAgI2Y4ODkwMFxuICAjZWZhZTAwXG4gICNlNGNmMDBcbiAgI2Q3ZGUwMFxuICAjYzZlZDAwXG4gICNhZWZjMDBcbiAgIzk3ZmQwMFxuICAjN2NmZTAwXG4gICM1OGZlMDBcbiAgIzAwZmYwMCAqL1xufVxuIiwiOmhvc3Qge1xuICBoZWlnaHQ6IDE1MDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC8qIGh0dHBzOi8vbXljb2xvci5zcGFjZS9ncmFkaWVudDM/b3JpPXRvK3JpZ2h0JmhleD0lMjNGRjAwMDAmaGV4Mj0lMjNDOEZBMDAmaGV4Mz0lMjMwMEZGMDAmc3VibWl0PXN1Ym1pdCAqL1xuICAvKiAjZmYwMDAwXG4gICNmZTVkMDBcbiAgI2Y4ODkwMFxuICAjZWZhZTAwXG4gICNlNGNmMDBcbiAgI2Q3ZGUwMFxuICAjYzZlZDAwXG4gICNhZWZjMDBcbiAgIzk3ZmQwMFxuICAjN2NmZTAwXG4gICM1OGZlMDBcbiAgIzAwZmYwMCAqL1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGFibGUudGFibGUtc2tpbGxzIHRoZWFkIHRoIHtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgdGV4dC1vcmllbnRhdGlvbjogbWl4ZWQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJvcmRlci1sZWZ0IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIHRkLnZhbHVlLS0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbn1cbjpob3N0IDo6bmctZGVlcCB0ZC52YWx1ZS0tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTVkMDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQudmFsdWUtMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmODg5MDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQudmFsdWUtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmFlMDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQudmFsdWUtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGNmMDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQudmFsdWUtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2RlMDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQudmFsdWUtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNmVkMDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQudmFsdWUtNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWZjMDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQudmFsdWUtNiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5N2ZkMDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQudmFsdWUtNyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Y2ZlMDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQudmFsdWUtOCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OGZlMDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQudmFsdWUtOSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmMDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQudmFsdWUtMTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZjAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIHRkLnZhbHVlLTExIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmYwMDtcbn1cbjpob3N0IDo6bmctZGVlcCB0ZC52YWx1ZS0xMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmMDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQudmFsdWUtMTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZjAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIHRkLnZhbHVlLTE0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmYwMDtcbn1cbjpob3N0IDo6bmctZGVlcCB0ZC52YWx1ZS0xNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmMDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampaignWirtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-campaign-wirt',
          templateUrl: './campaign-wirt.component.html',
          styleUrls: ['./campaign-wirt.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/campaign-wirt/campaign-wirt.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/campaign-wirt/campaign-wirt.module.ts ***!
    \*******************************************************/

  /*! exports provided: CampaignWirtModule */

  /***/
  function srcAppCampaignWirtCampaignWirtModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampaignWirtModule", function () {
      return CampaignWirtModule;
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


    var _campaign_wirt_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./campaign-wirt-routing.module */
    "./src/app/campaign-wirt/campaign-wirt-routing.module.ts");
    /* harmony import */


    var _campaign_wirt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./campaign-wirt.component */
    "./src/app/campaign-wirt/campaign-wirt.component.ts");

    var CampaignWirtModule = function CampaignWirtModule() {
      _classCallCheck(this, CampaignWirtModule);
    };

    CampaignWirtModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CampaignWirtModule
    });
    CampaignWirtModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CampaignWirtModule_Factory(t) {
        return new (t || CampaignWirtModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _campaign_wirt_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampaignWirtRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CampaignWirtModule, {
        declarations: [_campaign_wirt_component__WEBPACK_IMPORTED_MODULE_4__["CampaignWirtComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _campaign_wirt_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampaignWirtRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampaignWirtModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_campaign_wirt_component__WEBPACK_IMPORTED_MODULE_4__["CampaignWirtComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _campaign_wirt_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampaignWirtRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=campaign-wirt-campaign-wirt-module-es5.js.map