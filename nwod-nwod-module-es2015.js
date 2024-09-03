(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nwod-nwod-module"],{

/***/ "./src/app/nwod/mage/game.component.ts":
/*!*********************************************!*\
  !*** ./src/app/nwod/mage/game.component.ts ***!
  \*********************************************/
/*! exports provided: NwodMageGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwodMageGameComponent", function() { return NwodMageGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











function NwodMageGameComponent_div_9_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "lien");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", "https://raphaelyan.github.io/rpg-digital-tools/nwod/mage/" + player_r6.ownerUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NwodMageGameComponent_div_9_div_9_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageGameComponent_div_9_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NwodMageGameComponent_div_9_div_9_div_1_span_5_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !player_r6.steel_vigor);
} }
function NwodMageGameComponent_div_9_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_div_9_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r20 = ctx.index; const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.openModal(player_r6, player_r6.health, i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NwodMageGameComponent_div_9_div_9_div_1_Template, 6, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const box_r19 = ctx.$implicit;
    const last_r21 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("box ", box_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r21);
} }
function NwodMageGameComponent_div_9_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_div_9_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const i_r29 = ctx.index; const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.toggleBox(player_r6, player_r6.willpower, i_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const box_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("box ", box_r28, "");
} }
function NwodMageGameComponent_div_9_ng_container_14_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_div_9_ng_container_14_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const i_r35 = ctx.index; const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.toggleBox(player_r6, player_r6.mana, i_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const box_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("box ", box_r34, "");
} }
function NwodMageGameComponent_div_9_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NwodMageGameComponent_div_9_ng_container_14_div_4_Template, 1, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", player_r6.mana);
} }
function NwodMageGameComponent_div_9_ng_container_15_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_div_9_ng_container_15_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const i_r42 = ctx.index; const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.toggleBox(player_r6, player_r6.destinee, i_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const box_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("box ", box_r41, "");
} }
function NwodMageGameComponent_div_9_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Destin\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NwodMageGameComponent_div_9_ng_container_15_div_4_Template, 1, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", player_r6.destinee);
} }
function NwodMageGameComponent_div_9_ng_container_16_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bonus_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bonus_r48);
} }
function NwodMageGameComponent_div_9_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NwodMageGameComponent_div_9_ng_container_16_li_4_Template, 2, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", player_r6.bonus);
} }
function NwodMageGameComponent_div_9_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Actif max = ", player_r6.spells_max, " / Sur soi = ", player_r6.spells_self, "");
} }
function NwodMageGameComponent_div_9_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const spell_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", spell_r51.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", spell_r51.name, " ");
} }
function NwodMageGameComponent_div_9_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aucun !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageGameComponent_div_9_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_div_9_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.openSpellsModal(player_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageGameComponent_div_9_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_div_9_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.resetSpells(player_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageGameComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NwodMageGameComponent_div_9_ng_container_5_Template, 5, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sant\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NwodMageGameComponent_div_9_div_9_Template, 2, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Volont\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NwodMageGameComponent_div_9_div_13_Template, 1, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NwodMageGameComponent_div_9_ng_container_14_Template, 5, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NwodMageGameComponent_div_9_ng_container_15_Template, 5, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NwodMageGameComponent_div_9_ng_container_16_Template, 5, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sorts Actifs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NwodMageGameComponent_div_9_div_19_Template, 3, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NwodMageGameComponent_div_9_ng_container_20_Template, 4, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NwodMageGameComponent_div_9_div_21_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NwodMageGameComponent_div_9_button_22_Template, 2, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NwodMageGameComponent_div_9_button_23_Template, 2, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", player_r6.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r6.ownerUrl && ctx_r0.hasAccessToSheet(player_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", player_r6.health);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", player_r6.willpower);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r6.mana);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r6.destinee);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r6.bonus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasAccessToSheet(player_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", player_r6.active_spells);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !player_r6.active_spells.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasAccessToSheet(player_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin());
} }
function NwodMageGameComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.showInput = !ctx_r58.showInput; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageGameComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.updateText(ctx_r60.currentText); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enregistrer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageGameComponent_div_24_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_div_24_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const i_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.staticData[i_r63].showInput = !ctx_r66.staticData[i_r63].showInput; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageGameComponent_div_24_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_div_24_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const player_r62 = ctx_r70.$implicit; const i_r63 = ctx_r70.index; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.updatePlayerText(player_r62, ctx_r69.staticData[i_r63].text, i_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enregistrer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageGameComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NwodMageGameComponent_div_24_button_4_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NwodMageGameComponent_div_24_button_7_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageGameComponent_div_24_Template_textarea_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const i_r63 = ctx.index; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.staticData[i_r63].text = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r62 = ctx.$implicit;
    const i_r63 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Notes de ", player_r62.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.hasAccessToSheet(player_r62) && ctx_r3.staticData[i_r63].showInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.hasAccessToSheet(player_r62));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", player_r62.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r3.hasAccessToSheet(player_r62) || ctx_r3.hasAccessToSheet(player_r62) && !ctx_r3.staticData[i_r63].showInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.hasAccessToSheet(player_r62));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.staticData[i_r63].text);
} }
function NwodMageGameComponent_ng_container_27_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tes notes priv\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_ng_container_27_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const i_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.staticData[i_r75].showPrivateInput = !ctx_r77.staticData[i_r75].showPrivateInput; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Editer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_ng_container_27_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const player_r74 = ctx_r81.$implicit; const i_r75 = ctx_r81.index; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.updatePlayerPrivateText(player_r74, ctx_r80.staticData[i_r75].privateText, i_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enregistrer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageGameComponent_ng_container_27_div_1_Template_textarea_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const i_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.staticData[i_r75].privateText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r75 = ctx_r84.index;
    const player_r74 = ctx_r84.$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("col-sm-12", !ctx_r76.isAdmin())("col-sm-3", ctx_r76.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r76.staticData[i_r75].showPrivateInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", player_r74.privateText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r76.staticData[i_r75].showPrivateInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r76.staticData[i_r75].privateText);
} }
function NwodMageGameComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NwodMageGameComponent_ng_container_27_div_1_Template, 12, 8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r74 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.hasAccessToSheet(player_r74));
} }
function NwodMageGameComponent_div_56_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_div_56_ng_container_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const i_r89 = ctx.index; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.removeSpell(i_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const spell_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", spell_r88.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", spell_r88.name, " ");
} }
function NwodMageGameComponent_div_56_hr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function NwodMageGameComponent_div_56_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", player_r92.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r92.name, " ");
} }
function NwodMageGameComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NwodMageGameComponent_div_56_ng_container_1_Template, 6, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NwodMageGameComponent_div_56_hr_2_Template, 1, 0, "hr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nom du sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageGameComponent_div_56_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.formSpell.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sur qui ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageGameComponent_div_56_Template_select_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.formSpell.color = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NwodMageGameComponent_div_56_option_11_Template, 2, 2, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Autre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_div_56_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.addSpell(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ajouter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.currentPlayer.active_spells);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currentPlayer.active_spells.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.formSpell.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.formSpell.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.staticData);
} }
class NwodMageGameComponent {
    constructor(auth, afs, titleService) {
        this.auth = auth;
        this.afs = afs;
        this.titleService = titleService;
        this.staticData = [];
        this.showInput = false;
        this.formSpell = {
            name: '',
            color: ''
        };
        this.titleService.setTitle('Mage - Partie en cours');
        auth.authState.subscribe((user) => {
            if (!user) {
                window.alert('Va sur https://raphaelyan.github.io/rpg-digital-tools et connecte toi !');
                return;
            }
            this.currentUser = user;
            const playersCollection = this.afs.collection('game');
            this.players = playersCollection.valueChanges();
            this.players.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe((a) => {
                this.staticData = a;
            });
            this.textDoc = this.afs.doc('texts/mage-2');
            this.text = this.textDoc.valueChanges();
            this.text.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe((a) => {
                this.currentText = a.text;
            });
        });
    }
    toggleBox(player, box, index) {
        if (box[index] === 'bg-danger') {
            return;
        }
        box[index] = box[index] === '' ? 'bg-primary' : '';
        this.afs.doc('game/' + player.id).update(player);
    }
    openModal(player, box, index) {
        this.currentBox = box;
        this.currentIndex = index;
        this.currentPlayer = player;
        $('#staticBackdrop').modal('show');
    }
    openSpellsModal(player) {
        this.currentPlayer = player;
        this.formSpell.color = player.color;
        $('#staticSpellsBackdrop').modal('show');
    }
    setBox(value) {
        this.currentBox[this.currentIndex] = value;
        this.afs.doc('game/' + this.currentPlayer.id).update(this.currentPlayer);
        $('#staticBackdrop').modal('hide');
    }
    hasAccessToSheet(player) {
        return this.currentUser && this.currentUser.uid === player.ownerUid || this.isAdmin();
    }
    isAdmin() {
        return this.currentUser && this.currentUser.email === 'maferyt@gmail.com';
    }
    updateText(text) {
        this.showInput = !this.showInput;
        this.textDoc.update({ text });
    }
    updatePlayerText(player, text, i) {
        this.staticData[i].showInput = !this.staticData[i].showInput;
        this.afs.doc('game/' + player.id).update({ text });
    }
    updatePlayerPrivateText(player, privateText, i) {
        this.staticData[i].showPrivateInput = !this.staticData[i].showPrivateInput;
        this.afs.doc('game/' + player.id).update({ privateText });
    }
    addSpell() {
        const activeSpells = this.currentPlayer.active_spells;
        activeSpells.push(this.formSpell);
        this.afs.doc('game/' + this.currentPlayer.id).update({ active_spells: activeSpells });
        $('#staticSpellsBackdrop').modal('hide');
        this.formSpell = {
            name: '',
            color: ''
        };
    }
    removeSpell(index) {
        const activeSpells = this.currentPlayer.active_spells;
        activeSpells.splice(index, 1);
        this.afs.doc('game/' + this.currentPlayer.id).update({ active_spells: activeSpells });
    }
    resetSpells(player) {
        this.afs.doc('game/' + player.id).update({ active_spells: [] });
    }
}
NwodMageGameComponent.ɵfac = function NwodMageGameComponent_Factory(t) { return new (t || NwodMageGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
NwodMageGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NwodMageGameComponent, selectors: [["app-nwod-mage-game"]], decls: 57, vars: 18, consts: [[1, "row"], [1, "col-12"], [1, "box", "bg-success"], [1, "box", "bg-warning"], [1, "box", "bg-danger"], ["class", "col-sm-3 col-xs-12", 4, "ngFor", "ngForOf"], [3, "hidden"], ["type", "button", "class", "btn btn-outline-primary btn-block mb-1 btn-sm", 3, "click", 4, "ngIf"], [1, "notes", 3, "innerHtml"], ["type", "button", "class", "btn btn-success btn-block mb-1 btn-sm", 3, "click", 4, "ngIf"], ["rows", "10", 1, "col-12", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["id", "staticBackdrop", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "role", "dialog", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["id", "staticSpellsBackdrop", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "role", "dialog", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], ["class", "modal-body", 4, "ngIf"], [1, "col-sm-3", "col-xs-12"], [1, "card", "text-center"], [1, "box"], [4, "ngIf"], [1, "col-12", "boxes"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "col-12", 4, "ngIf"], ["class", "col-12 mb-3", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary mb-3 btn-sm", 3, "click", 4, "ngIf"], ["target", "_blank"], [3, "click"], ["class", "health_malus", 4, "ngIf"], [1, "health_malus"], [1, "col-12", "text-center"], [1, "col-12", "boxes", "boxes-mana"], [1, "col-12", "mb-3"], ["type", "button", 1, "btn", "btn-outline-primary", "mb-3", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-block", "mb-1", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-success", "btn-block", "mb-1", "btn-sm", 3, "click"], [3, "col-sm-12", "col-sm-3", 4, "ngIf"], [1, "modal-body"], [1, "form-group"], ["for", "spell-name"], ["type", "text", "id", "spell-name", "placeholder", "Nom du sort ...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "spell-target"], ["id", "spell-target", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "#ccc"], [1, "text-center"], [3, "value"]], template: function NwodMageGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Contondant (15 minutes) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " L\u00E9thal (2 jours) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Aggrav\u00E9 (1 semaine) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NwodMageGameComponent_div_9_Template, 24, 15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Notes du DM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NwodMageGameComponent_button_16_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NwodMageGameComponent_button_20_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageGameComponent_Template_textarea_ngModelChange_21_listener($event) { return ctx.currentText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NwodMageGameComponent_div_24_Template, 10, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NwodMageGameComponent_ng_container_27_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Modifier la case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_Template_button_click_39_listener() { return ctx.setBox(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Vider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_Template_button_click_41_listener() { return ctx.setBox("bg-success"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Contondant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_Template_button_click_43_listener() { return ctx.setBox("bg-warning"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "L\u00E9thal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageGameComponent_Template_button_click_45_listener() { return ctx.setBox("bg-danger"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Aggrav\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Modifier les sorts actifs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, NwodMageGameComponent_div_56_Template, 16, 5, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_3_0 = null;
        const currVal_3 = (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 12, ctx.text)) == null ? null : tmp_3_0.text;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, ctx.players));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isAdmin() && ctx.showInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", currVal_3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isAdmin() || ctx.isAdmin() && !ctx.showInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 14, ctx.players));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 16, ctx.players));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPlayer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".box[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid black;\n  display: inline-block;\n  border-radius: 5px;\n  cursor: pointer;\n  position: relative;\n}\n\n.box[_ngcontent-%COMP%]    + .box[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.modal[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-height: 38px;\n  min-width: 40px;\n}\n\n.health_malus[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3px;\n  width: 70px;\n  text-align: right;\n  font-size: 12px;\n  top: 18px;\n}\n\n.health_malus[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.boxes[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.boxes-mana[_ngcontent-%COMP%] {\n  max-width: 210px !important;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.notes[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 1200px) {\n  [_nghost-%COMP%] {\n    margin: 0 -50px;\n    display: block;\n  }\n}\n\ntextarea[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\n.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL253b2QvbWFnZS9nYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ud29kL21hZ2UvZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREFFO0VBQ0UsaUJBQUE7QUNFSjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ud29kL21hZ2UvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm94ICsgLmJveCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tb2RhbCAuYnRuIHtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgbWluLXdpZHRoOiA0MHB4Oztcbn1cblxuLmhlYWx0aF9tYWx1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDNweDtcbiAgd2lkdGg6IDcwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogMThweDtcbiAgc3BhbiArIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB9XG59XG5cbi5ib3hlcyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYm94ZXMtbWFuYSB7XG4gIG1heC13aWR0aDogMjEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm5vdGVzIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIG1hcmdpbjogMCAtNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG50ZXh0YXJlYSB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uY2FyZCAuYnRuIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiIsIi5ib3gge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm94ICsgLmJveCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tb2RhbCAuYnRuIHtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgbWluLXdpZHRoOiA0MHB4O1xufVxuXG4uaGVhbHRoX21hbHVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogM3B4O1xuICB3aWR0aDogNzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiAxOHB4O1xufVxuLmhlYWx0aF9tYWx1cyBzcGFuICsgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uYm94ZXMge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYm94ZXMtbWFuYSB7XG4gIG1heC13aWR0aDogMjEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm5vdGVzIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIG1hcmdpbjogMCAtNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxudGV4dGFyZWEge1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLmNhcmQgLmJ0biB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NwodMageGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nwod-mage-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nwod/mage/leader.component.ts":
/*!***********************************************!*\
  !*** ./src/app/nwod/mage/leader.component.ts ***!
  \***********************************************/
/*! exports provided: NwodMageLeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwodMageLeaderComponent", function() { return NwodMageLeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NwodMageLeaderComponent {
}
NwodMageLeaderComponent.ɵfac = function NwodMageLeaderComponent_Factory(t) { return new (t || NwodMageLeaderComponent)(); };
NwodMageLeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NwodMageLeaderComponent, selectors: [["app-nwod-mage-leader"]], decls: 177, vars: 0, template: function NwodMageLeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Capacit\u00E9s gratos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "L'atout \"statut 1 (Consilium)\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "te permet d'\u00EAtre invit\u00E9 aux r\u00E9unions du Consilium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00E7a te permet de connaitre les derniers \u00E9v\u00E9nements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "et o\u00F9 sont dispos\u00E9es les Cabales dans le coin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "et potentiellement d'autres infos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "L'atout \"Haute Langue 1\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "tu connais la langue Atlante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "lors d'un lancer de sort, tu peux incanter avec cette langue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "il faut parler \u00E0 haute voix pour que ca marche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ca permet d'ajouter +2 \u00E0 un lancer de sort, mais tu perds ta d\u00E9fense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "tu peux l'apprendre aux autres, qui pourront l'acheter \u00E0 la fin du 1er sc\u00E9nario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "La comp\u00E9tence \"Occulte\", 1 point gratuit dedans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "tu peux mettre + si tu veux, maximum 3 en tout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "les autres ne peuvent PAS prendre cette comp\u00E9tence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00E7a repr\u00E9sente les connaissances/exp\u00E9riences du surnaturel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "La gnose \u00E0 2 pour d\u00E9marrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "C'est le degr\u00E9 de compr\u00E9hension de la magie ainsi que la puissance brute du personnage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Les noms d'ombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "En tant que leader :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "tu connais le \"vrai\" nom/pr\u00E9nom de tes camarades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00E0 toi de d\u00E9terminer s'ils connaissent le tien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "tu dois leur faire prendre un \"nom d'ombre\", un pseudo, afin que leur \"vrai\" nom/pr\u00E9nom ne soit pas d\u00E9voil\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "btw, pas oublier de te trouver un nom d'ombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Le Consilium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Le consilium, c'est un peu comme le minist\u00E8re de la magie dans Harry Potter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\nIl est compos\u00E9 de :\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "1 hi\u00E9rarque (le chef)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "4 conseillers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "ces 5 personnes sont chacun d'une voie diff\u00E9rente, pour que tous soient repr\u00E9sent\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "5 pr\u00E9v\u00F4ts (1 pour chaque personne ci-dessus), qui sont les \"secr\u00E9taires\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "des h\u00E9rauts, qui sont des repr\u00E9sentants du Consilium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "des sentinelles, la police du Consilium, qu'on envoi venir te voir quand \u00E7a va pas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "La Lex Magica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "C'est la loi, fond\u00E9e sur l'ancien code de la grande cit\u00E9 d'Atlantide.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "La loi la plus sacr\u00E9e, est celle du \"voile\", le fait de cacher la magie aux humains \"normaux\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "A ce qu'on dit, il y aurait des punitions paradoxales imm\u00E9diates lorsqu'un humain voit de la magie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sinon le reste des lois, c'est relativement \"pas faire de la merde\", \"pas tuer les gens\", etc...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Le sanctuaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "C'est votre forteresse, votre hutte de sorcier, votre tour de magicien.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "L\u00E0 o\u00F9 vous exp\u00E9riment\u00E9s vos pouvoirs, \u00E0 \"moindre\" risque. (y parait)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Et ca permet aussi de lancer des sorts plus facilement. (bonus de +1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Les mages, c'est quoi leur but ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " L'Ascension\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "La plupart des mages ont pour objectif de faire \"l'Ascension\", de transcender le corps humain pour aller vivre dans les royaumes c\u00E9lestes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Certains pensent que pour cela, il faudrait atteindre 10 en gnose, d'autres 10 en Sagesse, d'autres encore parlent d'une porte situ\u00E9e dans les ruines perdues de l'Atlantide.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " L'histoire\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "C'est un autre but de certains mages, retrouver l'histoire perdue de la grande cit\u00E9 d'Atlantide.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Tr\u00E8s peux de d\u00E9tails restent, ou sont cach\u00E9s, sur ce qu'il s'est pass\u00E9 le jour de la chute de la cit\u00E9.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " La puissance\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Eh oui, il n'y a pas que l'argent qui peut rendre puissant, la magie ouvre beaucoup de portes...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Certaines rumeurs parlent m\u00EAme de \"lign\u00E9es\" de mage, ou d'h\u00E9ritage que l'on pourrait obtenir aupr\u00E8s de certaines familles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "La mana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " De ce que tu en sais, elle est n\u00E9cessaire pour :\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "lancer un sort qu'on ne connait pas parfaitement (qui n'est pas une routine OU pas d'une arcane majeure)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "lancer un sort qui fait des d\u00E9g\u00E2ts / des soins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "augmenter la puissance d'un sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "att\u00E9nuer les chances de paradoxe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "lancer un sort de bouclier pour la journ\u00E9e (ce sera utilis\u00E9 tr\u00E8s souvent)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "les conditions ci-dessus sont toutes \"cumulables\" :troll:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Pour en regagner on peut :\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "faire un rituel d'1h sur une fontaine de mana (X point d'atout = X mana par jour)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "choisir de d\u00E9grader son corps physique pour 24h (tu n'as pas encore exp\u00E9riment\u00E9 cela, mais beaucoup de mages le font)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "sacrifier un \u00EAtre vivant, mais y parait que c'est pas bien (tu n'as pas encore exp\u00E9riment\u00E9 cela)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Les sorts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Par d\u00E9faut, voil\u00E0 les caract\u00E9ristiques d'un sort\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Puissance = 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Nombre de cible = 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Zone = 1m rayon/cube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Dur\u00E9e = 1 tour ou 1 sc\u00E8ne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Un mage en g\u00E9n\u00E9ral utilise un focalisateur pour lancer un sort, il parait que ca att\u00E9nue les chances de paradoxe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Exemple : baguette magique, montre, collier, gemme, pi\u00E8ce, livre\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Les rituels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Certaines actions d\u00E9passent les comp\u00E9tences qui sont utilis\u00E9es dans l'instant.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\nUn rituel est une action complexe, qui permet d'attendre un but pr\u00E9cis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\nLe d\u00E9savantage, c'est que cela prendra un certain temps, en fonction de la Gnose du mage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\nExemple : lancer un sort de bouclier qui dure 1h, c'est une action instantan\u00E9 qui demande 1 succ\u00E8s.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\nExemple : lancer un sort de bouclier qui dure 2 jours, c'est un rituel qui demande 5 succ\u00E8s.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\nPlus le but \u00E0 atteindre est compliqu\u00E9, plus le nombre de succ\u00E8s requis augmente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\nToutes les caract\u00E9ristiques d'un sort peuvent \u00EAtre augment\u00E9es (cf. ci-dessus)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Gnose 1-2 = 3h par jet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Gnose 3-4 = 1h par jet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Gnose 5-6 = 30min par jet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Gnose 7-8 = 10min par jet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Gnose 9-10 = 1min par jet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL253b2QvbWFnZS9sZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NwodMageLeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nwod-mage-leader',
                templateUrl: './leader.component.html',
                styleUrls: ['./leader.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/nwod/mage/new.component.ts":
/*!********************************************!*\
  !*** ./src/app/nwod/mage/new.component.ts ***!
  \********************************************/
/*! exports provided: NwodMageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwodMageNewComponent", function() { return NwodMageNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");















function NwodMageNewComponent_li_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resume_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", resume_r10.resumeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", resume_r10.title, " (", resume_r10.timestampStr, ") ");
} }
function NwodMageNewComponent_ng_template_233_ng_template_0_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageNewComponent_ng_template_233_ng_template_0_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const score_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const attribute_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.clickDot(attribute_r11, score_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const attribute_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("dot ", attribute_r11, "-", score_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r14.form[attribute_r11] + (ctx_r14.form.favoredAttribute === attribute_r11 ? 1 : 0) >= score_r13)("favored", ctx_r14.form.favoredAttribute === attribute_r11 && score_r13 === 2);
} }
function NwodMageNewComponent_ng_template_233_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NwodMageNewComponent_ng_template_233_ng_template_0_ng_template_0_Template, 1, 8, "ng-template", 74);
} if (rf & 2) {
    const score_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", score_r13 > 1);
} }
function NwodMageNewComponent_ng_template_233_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NwodMageNewComponent_ng_template_233_ng_template_0_Template, 1, 1, "ng-template", 45);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arrayOfFive);
} }
function NwodMageNewComponent_ng_template_234_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageNewComponent_ng_template_234_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const score_r23 = ctx.$implicit; const skill_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.clickDot(skill_r21, score_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r23 = ctx.$implicit;
    const skill_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("dot ", skill_r21, "-", score_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r22.form[skill_r21] >= score_r23);
} }
function NwodMageNewComponent_ng_template_234_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NwodMageNewComponent_ng_template_234_ng_template_1_Template, 1, 6, "ng-template", 45);
} if (rf & 2) {
    const skill_r21 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("square rote ", skill_r21, "-rote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r2.form.skillRotes[skill_r21]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.arrayOfFive);
} }
function NwodMageNewComponent_ng_template_235_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageNewComponent_ng_template_235_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const score_r30 = ctx.$implicit; const nb_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.clickDot("merits-" + nb_r28, score_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r30 = ctx.$implicit;
    const nb_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("dot merit-", nb_r28, "-", score_r30, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r29.form["merits-" + nb_r28] >= score_r30);
} }
function NwodMageNewComponent_ng_template_235_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_ng_template_235_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const nb_r28 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r35.form.merits[nb_r28 + "-name"] = $event); })("ngModelChange", function NwodMageNewComponent_ng_template_235_Template_input_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.formChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NwodMageNewComponent_ng_template_235_ng_template_1_Template, 1, 6, "ng-template", 45);
} if (rf & 2) {
    const nb_r28 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.form.merits[nb_r28 + "-name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", "merit-" + nb_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.arrayOfFive);
} }
function NwodMageNewComponent_ng_template_243_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageNewComponent_ng_template_243_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const score_r40 = ctx.$implicit; const arcana_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.clickDot(arcana_r38, score_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r40 = ctx.$implicit;
    const arcana_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("dot ", arcana_r38, "-", score_r40, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r39.form[arcana_r38] >= score_r40);
} }
function NwodMageNewComponent_ng_template_243_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_ng_template_243_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const arcana_r38 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r45.form["arcana-" + arcana_r38] = $event); })("ngModelChange", function NwodMageNewComponent_ng_template_243_Template_input_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.formChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NwodMageNewComponent_ng_template_243_ng_template_1_Template, 1, 6, "ng-template", 45);
} if (rf & 2) {
    const arcana_r38 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.form["arcana-" + arcana_r38]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", "arcana-" + arcana_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.arrayOfFive);
} }
function NwodMageNewComponent_ng_template_244_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const score_r48 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dot health health-", score_r48, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r5.form.health >= score_r48);
} }
function NwodMageNewComponent_ng_template_245_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const score_r49 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dot willpower willpower-", score_r49, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r6.form.willpower >= score_r49);
} }
function NwodMageNewComponent_ng_template_246_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const score_r50 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("square mana mana-", score_r50, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r7.form.mana >= score_r50)("white", !ctx_r7.hasManaAccess(score_r50));
} }
function NwodMageNewComponent_ng_template_248_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageNewComponent_ng_template_248_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const score_r51 = ctx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.clickDot("gnosis", score_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r51 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dot gnosis gnosis-", score_r51, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r8.form.gnosis >= score_r51);
} }
function NwodMageNewComponent_ng_template_249_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_ng_template_249_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const index_r55 = ctx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r56.form["morality_" + index_r55] = $event); })("ngModelChange", function NwodMageNewComponent_ng_template_249_Template_input_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.formChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageNewComponent_ng_template_249_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const score_r54 = ctx.$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.clickDot("morality", score_r54); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r54 = ctx.$implicit;
    const index_r55 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx_r9.form["morality_" + index_r55] && ctx_r9.form["morality_" + index_r55].length > 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.form["morality_" + index_r55]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", "morality_" + index_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dot morality-", score_r54, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r9.form.morality >= score_r54);
} }
class NwodMageNewComponent {
    constructor(activatedRoute, router, auth, afs, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.auth = auth;
        this.afs = afs;
        this.titleService = titleService;
        this.infosDisplayed = false;
        this.resumesDisplayed = false;
        this.form = {
            skillRotes: {},
            merits: {}
        };
        this.arrayOfFive = [1, 2, 3, 4, 5];
        this.arrayOfEight = [1, 2, 3, 4, 5, 6, 7, 8];
        this.arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.arrayOfFifteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        this.arrayOfTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        this.arrayOfAttributes = [
            'intelligence',
            'wits',
            'resolve',
            'strength',
            'dexterity',
            'stamina',
            'presence',
            'manipulation',
            'composure',
        ];
        this.arrayOfSkills = [
            'academics',
            'computer',
            'crafts',
            'investigation',
            'medicine',
            'occult',
            'politics',
            'science',
            'athletics',
            'brawl',
            'drive',
            'firearms',
            'larceny',
            'stealth',
            'survival',
            'weaponry',
            'animalken',
            'empathy',
            'expression',
            'intimidation',
            'persuasion',
            'socialize',
            'streetwise',
            'subterfuge'
        ];
        this.arrayOfArcanas = [
            'destin',
            'espace',
            'esprit',
            'forces',
            'matiere',
            'mort',
            'prime',
            'psyche',
            'temps',
            'vie',
        ];
        this.debug = false;
        this.displayPrintMode = false;
        this.timeout = null;
        this.lastUpdate = null;
        this.resetSheet();
        auth.authState.subscribe((user) => {
            if (!user) {
                window.alert('Va sur https://raphaelyan.github.io/rpg-digital-tools et connecte toi !');
                return;
            }
            const routeParams = this.activatedRoute.snapshot.params;
            if (!routeParams.id) {
                this.router.navigateByUrl('/nwod');
                return;
            }
            this.characterDoc = this.afs.doc('characters/' + routeParams.id);
            this.character = this.characterDoc.snapshotChanges();
            this.character.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe((a) => {
                this.form = Object.assign(this.form, a.payload.data());
                this.formChanged();
            });
            this.resumesCollection = afs.collection('resumes', (ref) => {
                return ref.where('character', '==', routeParams.id)
                    .orderBy('timestamp', 'desc');
            });
            this.resumes = this.resumesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                const date = new Date(data['timestamp']);
                const timestampStr = date.getDate() + '/' + (1 + date.getMonth());
                const resumeUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl}resumes/${id}`;
                return Object.assign({ id, timestampStr, resumeUrl }, data);
            })));
        });
    }
    printMode() {
        document.getElementsByClassName('login')[0].classList.add('hidden');
        document.getElementsByClassName('link-github')[0].classList.add('hidden');
        document.getElementsByTagName('header')[0].classList.add('hidden');
        document.getElementsByTagName('main')[0].classList.remove('container');
        this.displayPrintMode = true;
        this.debug = false;
    }
    clickDot(dotName, score) {
        if (dotName === 'gnosis' && score === 1 && this.form.gnosis === 1) {
            return;
        }
        if (this.form.favoredAttribute === dotName) {
            if (this.form[dotName] === 1 && score <= 2) {
                return; // Can't be less than 2
            }
            score -= 1;
        }
        if (this.form[dotName] < score) {
            this.form[dotName]++;
        }
        else {
            this.form[dotName]--;
        }
        this.formChanged();
    }
    selectChanged() {
        if (this.form.path) {
            const composure = ['acanthus', 'moros', 'thyrsus'];
            const resolve = ['mastigos', 'obrimos'];
            if (composure.includes(this.form.path)) {
                this.form.favoredAttribute = 'composure';
            }
            else if (resolve.includes(this.form.path)) {
                this.form.favoredAttribute = 'resolve';
            }
        }
        if (this.form.order) {
            this.form.skillRotes = {};
            if (this.form.order === 'adamantine_arrow') {
                this.form.skillRotes['athletics'] = true;
                this.form.skillRotes['intimidation'] = true;
                this.form.skillRotes['medicine'] = true;
            }
            else if (this.form.order === 'free_council') {
                this.form.skillRotes['crafts'] = true;
                this.form.skillRotes['persuasion'] = true;
                this.form.skillRotes['science'] = true;
            }
            else if (this.form.order === 'guardians_of_the__veil') {
                this.form.skillRotes['investigation'] = true;
                this.form.skillRotes['stealth'] = true;
                this.form.skillRotes['subterfuge'] = true;
            }
            else if (this.form.order === 'mysterium') {
                this.form.skillRotes['investigation'] = true;
                this.form.skillRotes['occult'] = true;
                this.form.skillRotes['survival'] = true;
            }
            else if (this.form.order === 'silver_ldder') {
                this.form.skillRotes['expression'] = true;
                this.form.skillRotes['persuasion'] = true;
                this.form.skillRotes['subterfuge'] = true;
            }
        }
        this.formChanged();
    }
    formChanged(fromReset = false) {
        this.form.speed = this.form.strength + this.form.dexterity + 5;
        this.form.initiative = this.form.dexterity + this.form.composure;
        this.form.defense = Math.min(this.form.dexterity, this.form.wits);
        this.form.health = this.form.size + this.form.stamina;
        this.form.willpower = this.form.resolve + this.form.composure + (!!this.form.path ? 1 : 0);
        this.form.mana = this.form.morality;
        let manaPerTurn = this.form.gnosis;
        if (this.form.gnosis === 9) {
            manaPerTurn = 10;
        }
        else if (this.form.gnosis === 10) {
            manaPerTurn = 15;
        }
        this.form['mana-per-turn'] = manaPerTurn;
        if (!fromReset) {
            this.saveSheet();
        }
        this.titleService.setTitle('Mage - ' + this.form.name);
    }
    hasManaAccess(score) {
        if (this.form.gnosis <= 6) {
            return score <= +this.form.gnosis + 9;
        }
        else if (this.form.gnosis === 7) {
            return score <= 20;
        }
        else if (this.form.gnosis === 8) {
            return score <= 30;
        }
        else if (this.form.gnosis === 9) {
            return score <= 50;
        }
        else if (this.form.gnosis === 10) {
            return score <= 100;
        }
        return false;
    }
    eraseSheet() {
        if (!window.confirm('Tu es sûr de vouloir tout remettre à 0 ?')) {
            return;
        }
        this.resetSheet();
        this.formChanged(false);
    }
    resetSheet() {
        for (const attribute of this.arrayOfAttributes) {
            this.form[attribute] = 1;
        }
        for (const skill of this.arrayOfSkills) {
            this.form[skill] = 0;
        }
        for (const arcana of this.arrayOfArcanas) {
            this.form[arcana] = 0;
            this.form['arcana-' + arcana] = 0;
        }
        this.form.merits = {};
        for (const nb of this.arrayOfEight) {
            this.form['merits-' + nb] = 0;
        }
        this.form.name = '';
        this.form.player = '';
        this.form.chronicle = '';
        this.form.concept = '';
        this.form.cabal = '';
        this.form['flaw-1'] = '';
        this.form['flaw-2'] = '';
        this.form['flaw-3'] = '';
        this.form.vice = '';
        this.form.virtue = '';
        this.form.path = '';
        this.form.order = '';
        this.form.skillRotes = {};
        this.form.size = 5;
        this.form.morality = 7;
        this.form.gnosis = 1;
        this.form.favoredAttribute = '';
        this.form['experience'] = 0;
        this.form['experience-arcana'] = 0;
        this.formChanged(true);
    }
    saveSheet() {
        if (this.lastUpdate === null || JSON.stringify(this.form) === this.lastUpdate) {
            this.lastUpdate = JSON.stringify(this.form);
            return;
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            clearTimeout(this.timeout);
            const doc = Object.assign(this.form, {
                lastUpdate: Date.now()
            });
            this.characterDoc.update(doc);
        }, 1000);
    }
}
NwodMageNewComponent.ɵfac = function NwodMageNewComponent_Factory(t) { return new (t || NwodMageNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"])); };
NwodMageNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NwodMageNewComponent, selectors: [["app-nwod-mage-new"]], decls: 269, vars: 95, consts: [["type", "button", 1, "btn", "btn-primary", 3, "hidden", "click"], [1, "row", 3, "hidden"], [1, "col-12", "col-sm-6"], [1, "scrollable"], [1, "li-empty"], [3, "hidden"], [1, "col-12", "col-sm-4"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "hidden", "click"], [1, "sheet-container"], ["src", "assets/nwod/mage_eveil_vf-1.jpg", 1, "sheet"], ["src", "assets/nwod/mage_eveil_vf-2.jpg", 1, "sheet"], ["type", "text", "maxlength", "50", "name", "name", 1, "border-bottom", 3, "ngModel", "ngModelChange"], ["type", "text", "maxlength", "25", "name", "player", 1, "border-bottom", 3, "ngModel", "ngModelChange"], ["type", "text", "maxlength", "25", "name", "chronicle", 1, "border-bottom", 3, "ngModel", "ngModelChange"], ["type", "text", "maxlength", "21", "name", "concept", 1, "border-bottom", 3, "ngModel", "ngModelChange"], ["type", "text", "maxlength", "24", "name", "cabal", 1, "border-bottom", 3, "ngModel", "ngModelChange"], ["name", "virtue", 3, "ngModel", "ngModelChange"], ["value", "charite"], ["value", "foi"], ["value", "courage"], ["value", "espoir"], ["value", "justice"], ["value", "prudence"], ["value", "temperance"], ["name", "vice", 3, "ngModel", "ngModelChange"], ["value", "envie"], ["value", "gourmandise"], ["value", "avidite"], ["value", "luxure"], ["value", "orgueil"], ["value", "paresse"], ["value", "colere"], ["name", "path", 3, "ngModel", "ngModelChange"], ["value", "acanthus"], ["value", "mastigos"], ["value", "moros"], ["value", "obrimos"], ["value", "thyrsus"], ["name", "order", 3, "ngModel", "ngModelChange"], ["value", "adamantine_arrow"], ["value", "free_council"], ["value", "guardians_of_the__veil"], ["value", "mysterium"], ["value", "silver_ldder"], ["ngFor", "", 3, "ngForOf"], ["type", "text", "name", "flaw-1", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "flaw-2", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "flaw-3", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "size", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "defense", "disabled", "", 3, "ngModel"], ["type", "number", "name", "initiative", "disabled", "", 3, "ngModel"], ["type", "number", "name", "speed", "disabled", "", 3, "ngModel"], ["type", "number", "name", "mana-per-turn", "disabled", "", 3, "ngModel"], ["type", "text", "name", "routine_1", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_2", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_3", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_4", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_5", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_7", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_8", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_9", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_10", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_11", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_12", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_13", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "routine_14", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "weapon_1", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "weapon_2", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "equipement_1", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "experience", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "experience-arcana", 3, "ngModel", "ngModelChange"], ["target", "_blank"], [3, "ngIf"], [3, "click"], ["type", "text", 3, "ngModel", "ngModelChange"], ["type", "number", 3, "ngModel", "ngModelChange"]], template: function NwodMageNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageNewComponent_Template_button_click_0_listener() { return ctx.infosDisplayed = !ctx.infosDisplayed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Etape 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Choisir un \"concept\" de personnage, votre nom et votre \u00E2ge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Le concept est souvent bas\u00E9 sur un m\u00E9tier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Exemples : journaliste, policier, SDF, hacker, ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Etape 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Choisir les \"attributs\", qui sont r\u00E9partis en en 3 groupes :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " - Mental: Intelligence, Astuce, R\u00E9soluution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " - Physique : Force, Dext\u00E9rit\u00E9, Vigueur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " - Social : Pr\u00E9sence, Manipulation, Calme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "5 points \u00E0 mettre dans un groupe, 4 dans un autre et 3 dans le dernier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Le 1er point est d\u00E9j\u00E0 gris\u00E9, il ne compte pas dans les points \u00E0 mettre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Vous ne pouvez prendre le 5\u00E8me point dans un attribut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Etape 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Choisir les \"comp\u00E9tences\", qui sont r\u00E9partis en 3 groupes (Mental, Physique, Social)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "11 points pour un groupe, 7 pour un autre et 4 pour le dernier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Vous ne pouvez prendre le 5\u00E8me point dans une comp\u00E9tence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Vous ne pouvez prendre la comp\u00E9tence \"occult\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Lexique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Intelligence : capacit\u00E9s cognitives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Astuce : capacit\u00E9s de r\u00E9flexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "R\u00E9solution : concentration, d\u00E9termination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Force : puissance physique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Dext\u00E9rit\u00E9 : rapidit\u00E9, finesse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Vigueur : vigueur, r\u00E9sistance physique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Pr\u00E9sence : prestance, stature, attrait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Manipulation : charme, persuasion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Calme : calme, assurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Artisanat : r\u00E9parations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Erudition : connaissances");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Informatique : informatique, programmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Investigation : recherche, \u00E9nigmes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "M\u00E9dicine : physiologie humaine, blessures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Occulte : surnaturel, l\u00E9gendes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Politique : bureaucratie, contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Science : physique, chimie, biologie, ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Armes \u00E0 feu : pistolets, fusils d'assault");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Armes blanches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Athl\u00E9tisme : escalade, course, jeter un truc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Bagarre : combat \u00E0 mains nues");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Conduite : voitures, bateaux, course poursuite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Furtivit\u00E9 : discr\u00E9tion, d\u00E9placement silencieux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Larcin : crochetage, vol \u00E0 la tire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Survie : trouver \u00E0 manger, un refuge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Animaux : comportement des animaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Empathie : intuition, lire les \u00E9motions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Expression : art de la communication, oratoire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Intimidation : via la peur, la force");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Persuasion : via le charme, la diplomatie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Entregent : \u00E9tiquette, sociabilit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Conn. de la rue : connaissance de la rue, march\u00E9 noir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Subterfuge : mensonges, cacher des \u00E9motions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Sant\u00E9 : vos \"points de vie\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Volont\u00E9 : votre \"volont\u00E9\"; d\u00E9penser 1 point ajoute 3 d\u00E9s \u00E0 un jet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Sagesse : votre \"humanit\u00E9\", \u00E9vitez de d\u00E9capiter des gens ;)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Attributs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "1 = faible, non pratiqu\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "2 = moyen, efforts occasionnels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "3 = bon, pratique r\u00E9guli\u00E8rement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "4 = exceptionnel, don naturel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "5 = hors du commun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Comp\u00E9tences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "1 = novice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "2 = praticien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "3 = professionnel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "4 = expert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "5 = ma\u00EEtre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Sant\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "D\u00E9g\u00E2ts \"contondants\", r\u00E9cup\u00E8re 1 point / 15 min (ex: batte de baseball)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "D\u00E9g\u00E2ts \"l\u00E9taux\", r\u00E9cup\u00E8re 1 point / 2 jours (ex: pistolet)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "D\u00E9g\u00E2ts \"aggrav\u00E9s\", r\u00E9cup\u00E8re 1 point / 2 semaines (ex: lance-flamme)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageNewComponent_Template_button_click_161_listener() { return ctx.resumesDisplayed = !ctx.resumesDisplayed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](164, NwodMageNewComponent_li_164_Template, 3, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](165, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageNewComponent_Template_button_click_167_listener() { return ctx.debug = !ctx.debug; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "toggle DEBUG mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageNewComponent_Template_button_click_169_listener() { return ctx.eraseSheet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Reset sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMageNewComponent_Template_button_click_171_listener() { return ctx.printMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Print mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_176_listener($event) { return ctx.form.name = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_176_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_177_listener($event) { return ctx.form.player = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_177_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_178_listener($event) { return ctx.form.chronicle = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_178_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_179_listener($event) { return ctx.form.concept = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_179_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_180_listener($event) { return ctx.form.cabal = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_180_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_select_ngModelChange_181_listener($event) { return ctx.form.virtue = $event; })("ngModelChange", function NwodMageNewComponent_Template_select_ngModelChange_181_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Charit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Foi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Courage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Espoir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Justice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Prudence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Temp\u00E9rance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_select_ngModelChange_196_listener($event) { return ctx.form.vice = $event; })("ngModelChange", function NwodMageNewComponent_Template_select_ngModelChange_196_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Envie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Gourmandise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Avidit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Luxure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Orgueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Paresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Col\u00E8re");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_select_ngModelChange_211_listener($event) { return ctx.form.path = $event; })("ngModelChange", function NwodMageNewComponent_Template_select_ngModelChange_211_listener() { return ctx.selectChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Acanthus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Mastigos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Moros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Obrimos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Thyrsus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_select_ngModelChange_222_listener($event) { return ctx.form.order = $event; })("ngModelChange", function NwodMageNewComponent_Template_select_ngModelChange_222_listener() { return ctx.selectChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Fl\u00E8che d'adamantine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Conseil libre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Gardiens du voile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Mysterium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Echelle d'argent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](233, NwodMageNewComponent_ng_template_233_Template, 1, 1, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](234, NwodMageNewComponent_ng_template_234_Template, 2, 6, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](235, NwodMageNewComponent_ng_template_235_Template, 2, 3, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_236_listener($event) { return (ctx.form["flaw-1"] = $event); })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_236_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_237_listener($event) { return (ctx.form["flaw-2"] = $event); })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_237_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_238_listener($event) { return (ctx.form["flaw-3"] = $event); })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_238_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_239_listener($event) { return (ctx.form["size"] = $event); })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_239_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](243, NwodMageNewComponent_ng_template_243_Template, 2, 3, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](244, NwodMageNewComponent_ng_template_244_Template, 1, 5, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](245, NwodMageNewComponent_ng_template_245_Template, 1, 5, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](246, NwodMageNewComponent_ng_template_246_Template, 1, 7, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](248, NwodMageNewComponent_ng_template_248_Template, 1, 5, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](249, NwodMageNewComponent_ng_template_249_Template, 2, 9, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_250_listener($event) { return ctx.form.routine_1 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_250_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_251_listener($event) { return ctx.form.routine_2 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_251_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_252_listener($event) { return ctx.form.routine_3 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_252_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_253_listener($event) { return ctx.form.routine_4 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_253_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_254_listener($event) { return ctx.form.routine_5 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_254_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_255_listener($event) { return ctx.form.routine_6 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_255_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_256_listener($event) { return ctx.form.routine_7 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_256_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_257_listener($event) { return ctx.form.routine_8 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_257_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_258_listener($event) { return ctx.form.routine_9 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_258_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_259_listener($event) { return ctx.form.routine_10 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_259_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_260_listener($event) { return ctx.form.routine_11 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_260_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_261_listener($event) { return ctx.form.routine_12 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_261_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_262_listener($event) { return ctx.form.routine_13 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_262_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_263_listener($event) { return ctx.form.routine_14 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_263_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_264_listener($event) { return ctx.form.weapon_1 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_264_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_265_listener($event) { return ctx.form.weapon_2 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_265_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_266_listener($event) { return ctx.form.equipement_1 = $event; })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_266_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_267_listener($event) { return (ctx.form["experience"] = $event); })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_267_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_268_listener($event) { return (ctx.form["experience-arcana"] = $event); })("ngModelChange", function NwodMageNewComponent_Template_input_ngModelChange_268_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.displayPrintMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.infosDisplayed ? "Cacher" : "Afficher", " infos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.displayPrintMode || !ctx.infosDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.displayPrintMode || !ctx.infosDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.displayPrintMode || !ctx.infosDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.displayPrintMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.displayPrintMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.resumesDisplayed ? "Cacher" : "Afficher", " r\u00E9sum\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.displayPrintMode || !ctx.resumesDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](165, 93, ctx.resumes));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.displayPrintMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.displayPrintMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.displayPrintMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.displayPrintMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("debug", ctx.debug);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.name && ctx.form.name.length > 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.player);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.chronicle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.concept);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.cabal && ctx.form.cabal.length > 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.cabal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.virtue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.vice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.path);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfAttributes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfSkills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfEight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["flaw-1"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["flaw-2"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["flaw-3"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["size"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["defense"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["initiative"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["speed"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfArcanas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfFifteen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfTen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfTwenty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["mana-per-turn"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfTen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfTen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_1 && ctx.form.routine_1.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_2 && ctx.form.routine_2.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_3 && ctx.form.routine_3.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_4 && ctx.form.routine_4.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_5 && ctx.form.routine_5.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_6 && ctx.form.routine_6.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_7 && ctx.form.routine_7.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_8 && ctx.form.routine_8.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_9 && ctx.form.routine_9.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_10 && ctx.form.routine_10.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_11 && ctx.form.routine_11.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_12 && ctx.form.routine_12.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_13 && ctx.form.routine_13.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("small", ctx.form.routine_14 && ctx.form.routine_14.length > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.routine_14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.weapon_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.weapon_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.equipement_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["experience"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["experience-arcana"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".debug[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .debug[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.debug[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:not(.filled), .debug[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]:not(.filled) {\n  background: red;\n}\n.sheet-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sheet[_ngcontent-%COMP%] {\n  width: 970px;\n}\n@media (min-width: 576px) {\n  .scrollable[_ngcontent-%COMP%] {\n    height: 293px;\n    overflow-y: scroll;\n  }\n}\n@media (max-width: 576px) {\n  ul[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  width: 140px;\n  padding: 0 2px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  outline: none;\n  font-size: 14px;\n}\ninput[_ngcontent-%COMP%]:hover, select[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\ninput[_ngcontent-%COMP%] {\n  cursor: text;\n}\nselect[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\ninput.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding-top: 3px;\n}\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n}\n.dot[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  width: 11px;\n  height: 14px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.dot[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.dot.filled[_ngcontent-%COMP%] {\n  background: black;\n}\n.dot.health[_ngcontent-%COMP%], .dot.willpower[_ngcontent-%COMP%], .dot.gnosis[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 16px;\n}\n.dot.favored[_ngcontent-%COMP%] {\n  background-color: lightcoral;\n}\n.square[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n.square[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.square.filled[_ngcontent-%COMP%] {\n  background: black;\n}\n.square.white[_ngcontent-%COMP%] {\n  background: white;\n  margin: -3px;\n  width: 22px;\n  height: 21px;\n}\n.square.rote[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\ninput[name=name][_ngcontent-%COMP%] {\n  top: 215px;\n  left: 175px;\n  width: 219px;\n}\ninput[name=player][_ngcontent-%COMP%] {\n  top: 255px;\n  left: 175px;\n  width: 219px;\n}\ninput[name=chronicle][_ngcontent-%COMP%] {\n  top: 295px;\n  left: 175px;\n  width: 219px;\n}\ninput[name=concept][_ngcontent-%COMP%] {\n  top: 215px;\n  left: 503px;\n  width: 164px;\n}\nselect[name=virtue][_ngcontent-%COMP%] {\n  top: 255px;\n  left: 503px;\n  width: 164px;\n}\nselect[name=vice][_ngcontent-%COMP%] {\n  top: 295px;\n  left: 503px;\n  width: 164px;\n}\nselect[name=path][_ngcontent-%COMP%] {\n  top: 215px;\n  left: 773px;\n  width: 170px;\n}\nselect[name=order][_ngcontent-%COMP%] {\n  top: 255px;\n  left: 773px;\n  width: 170px;\n}\ninput[name=cabal][_ngcontent-%COMP%] {\n  top: 295px;\n  left: 773px;\n  width: 170px;\n}\n.intelligence-2[_ngcontent-%COMP%] {\n  top: 401px;\n  left: 325px;\n}\n.intelligence-3[_ngcontent-%COMP%] {\n  top: 401px;\n  left: 342px;\n}\n.intelligence-4[_ngcontent-%COMP%] {\n  top: 401px;\n  left: 358px;\n}\n.intelligence-5[_ngcontent-%COMP%] {\n  top: 401px;\n  left: 375px;\n}\n.wits-2[_ngcontent-%COMP%] {\n  top: 437px;\n  left: 325px;\n}\n.wits-3[_ngcontent-%COMP%] {\n  top: 437px;\n  left: 342px;\n}\n.wits-4[_ngcontent-%COMP%] {\n  top: 437px;\n  left: 358px;\n}\n.wits-5[_ngcontent-%COMP%] {\n  top: 437px;\n  left: 375px;\n}\n.resolve-2[_ngcontent-%COMP%] {\n  top: 474px;\n  left: 325px;\n}\n.resolve-3[_ngcontent-%COMP%] {\n  top: 474px;\n  left: 342px;\n}\n.resolve-4[_ngcontent-%COMP%] {\n  top: 474px;\n  left: 358px;\n}\n.resolve-5[_ngcontent-%COMP%] {\n  top: 474px;\n  left: 375px;\n}\n.strength-2[_ngcontent-%COMP%] {\n  top: 401px;\n  left: 568px;\n}\n.strength-3[_ngcontent-%COMP%] {\n  top: 401px;\n  left: 585px;\n}\n.strength-4[_ngcontent-%COMP%] {\n  top: 401px;\n  left: 602px;\n}\n.strength-5[_ngcontent-%COMP%] {\n  top: 401px;\n  left: 618px;\n}\n.dexterity-2[_ngcontent-%COMP%] {\n  top: 437px;\n  left: 568px;\n}\n.dexterity-3[_ngcontent-%COMP%] {\n  top: 437px;\n  left: 585px;\n}\n.dexterity-4[_ngcontent-%COMP%] {\n  top: 437px;\n  left: 602px;\n}\n.dexterity-5[_ngcontent-%COMP%] {\n  top: 437px;\n  left: 618px;\n}\n.stamina-2[_ngcontent-%COMP%] {\n  top: 474px;\n  left: 568px;\n}\n.stamina-3[_ngcontent-%COMP%] {\n  top: 474px;\n  left: 585px;\n}\n.stamina-4[_ngcontent-%COMP%] {\n  top: 474px;\n  left: 602px;\n}\n.stamina-5[_ngcontent-%COMP%] {\n  top: 474px;\n  left: 618px;\n}\n.presence-2[_ngcontent-%COMP%] {\n  top: 401px;\n  left: 835px;\n}\n.presence-3[_ngcontent-%COMP%] {\n  top: 401px;\n  left: 851px;\n}\n.presence-4[_ngcontent-%COMP%] {\n  top: 401px;\n  left: 868px;\n}\n.presence-5[_ngcontent-%COMP%] {\n  top: 401px;\n  left: 885px;\n}\n.manipulation-2[_ngcontent-%COMP%] {\n  top: 437px;\n  left: 835px;\n}\n.manipulation-3[_ngcontent-%COMP%] {\n  top: 437px;\n  left: 851px;\n}\n.manipulation-4[_ngcontent-%COMP%] {\n  top: 437px;\n  left: 868px;\n}\n.manipulation-5[_ngcontent-%COMP%] {\n  top: 437px;\n  left: 885px;\n}\n.composure-2[_ngcontent-%COMP%] {\n  top: 474px;\n  left: 835px;\n}\n.composure-3[_ngcontent-%COMP%] {\n  top: 474px;\n  left: 851px;\n}\n.composure-4[_ngcontent-%COMP%] {\n  top: 474px;\n  left: 868px;\n}\n.composure-5[_ngcontent-%COMP%] {\n  top: 474px;\n  left: 885px;\n}\n.crafts-rote[_ngcontent-%COMP%] {\n  top: 590px;\n  left: 51px;\n}\n.crafts-1[_ngcontent-%COMP%] {\n  top: 595px;\n  left: 212px;\n}\n.crafts-2[_ngcontent-%COMP%] {\n  top: 595px;\n  left: 229px;\n}\n.crafts-3[_ngcontent-%COMP%] {\n  top: 595px;\n  left: 246px;\n}\n.crafts-4[_ngcontent-%COMP%] {\n  top: 595px;\n  left: 264px;\n}\n.crafts-5[_ngcontent-%COMP%] {\n  top: 595px;\n  left: 281px;\n}\n.academics-rote[_ngcontent-%COMP%] {\n  top: 617px;\n  left: 51px;\n}\n.academics-1[_ngcontent-%COMP%] {\n  top: 622px;\n  left: 212px;\n}\n.academics-2[_ngcontent-%COMP%] {\n  top: 622px;\n  left: 229px;\n}\n.academics-3[_ngcontent-%COMP%] {\n  top: 622px;\n  left: 246px;\n}\n.academics-4[_ngcontent-%COMP%] {\n  top: 622px;\n  left: 264px;\n}\n.academics-5[_ngcontent-%COMP%] {\n  top: 622px;\n  left: 281px;\n}\n.computer-rote[_ngcontent-%COMP%] {\n  top: 644px;\n  left: 51px;\n}\n.computer-1[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 212px;\n}\n.computer-2[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 229px;\n}\n.computer-3[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 246px;\n}\n.computer-4[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 264px;\n}\n.computer-5[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 281px;\n}\n.investigation-rote[_ngcontent-%COMP%] {\n  top: 671px;\n  left: 51px;\n}\n.investigation-1[_ngcontent-%COMP%] {\n  top: 676px;\n  left: 212px;\n}\n.investigation-2[_ngcontent-%COMP%] {\n  top: 676px;\n  left: 229px;\n}\n.investigation-3[_ngcontent-%COMP%] {\n  top: 676px;\n  left: 246px;\n}\n.investigation-4[_ngcontent-%COMP%] {\n  top: 676px;\n  left: 264px;\n}\n.investigation-5[_ngcontent-%COMP%] {\n  top: 676px;\n  left: 281px;\n}\n.medicine-rote[_ngcontent-%COMP%] {\n  top: 697px;\n  left: 51px;\n}\n.medicine-1[_ngcontent-%COMP%] {\n  top: 703px;\n  left: 212px;\n}\n.medicine-2[_ngcontent-%COMP%] {\n  top: 703px;\n  left: 229px;\n}\n.medicine-3[_ngcontent-%COMP%] {\n  top: 703px;\n  left: 246px;\n}\n.medicine-4[_ngcontent-%COMP%] {\n  top: 703px;\n  left: 264px;\n}\n.medicine-5[_ngcontent-%COMP%] {\n  top: 703px;\n  left: 281px;\n}\n.occult-rote[_ngcontent-%COMP%] {\n  top: 723px;\n  left: 51px;\n}\n.occult-1[_ngcontent-%COMP%] {\n  top: 730px;\n  left: 212px;\n}\n.occult-2[_ngcontent-%COMP%] {\n  top: 730px;\n  left: 229px;\n}\n.occult-3[_ngcontent-%COMP%] {\n  top: 730px;\n  left: 246px;\n}\n.occult-4[_ngcontent-%COMP%] {\n  top: 730px;\n  left: 264px;\n}\n.occult-5[_ngcontent-%COMP%] {\n  top: 730px;\n  left: 281px;\n}\n.politics-rote[_ngcontent-%COMP%] {\n  top: 751px;\n  left: 51px;\n}\n.politics-1[_ngcontent-%COMP%] {\n  top: 757px;\n  left: 212px;\n}\n.politics-2[_ngcontent-%COMP%] {\n  top: 757px;\n  left: 229px;\n}\n.politics-3[_ngcontent-%COMP%] {\n  top: 757px;\n  left: 246px;\n}\n.politics-4[_ngcontent-%COMP%] {\n  top: 757px;\n  left: 264px;\n}\n.politics-5[_ngcontent-%COMP%] {\n  top: 757px;\n  left: 281px;\n}\n.science-rote[_ngcontent-%COMP%] {\n  top: 778px;\n  left: 51px;\n}\n.science-1[_ngcontent-%COMP%] {\n  top: 783px;\n  left: 212px;\n}\n.science-2[_ngcontent-%COMP%] {\n  top: 783px;\n  left: 229px;\n}\n.science-3[_ngcontent-%COMP%] {\n  top: 783px;\n  left: 246px;\n}\n.science-4[_ngcontent-%COMP%] {\n  top: 783px;\n  left: 264px;\n}\n.science-5[_ngcontent-%COMP%] {\n  top: 783px;\n  left: 281px;\n}\n.firearms-rote[_ngcontent-%COMP%] {\n  top: 860px;\n  left: 51px;\n}\n.firearms-1[_ngcontent-%COMP%] {\n  top: 863px;\n  left: 212px;\n}\n.firearms-2[_ngcontent-%COMP%] {\n  top: 863px;\n  left: 229px;\n}\n.firearms-3[_ngcontent-%COMP%] {\n  top: 863px;\n  left: 246px;\n}\n.firearms-4[_ngcontent-%COMP%] {\n  top: 863px;\n  left: 264px;\n}\n.firearms-5[_ngcontent-%COMP%] {\n  top: 863px;\n  left: 281px;\n}\n.weaponry-rote[_ngcontent-%COMP%] {\n  top: 887px;\n  left: 51px;\n}\n.weaponry-1[_ngcontent-%COMP%] {\n  top: 890px;\n  left: 212px;\n}\n.weaponry-2[_ngcontent-%COMP%] {\n  top: 890px;\n  left: 229px;\n}\n.weaponry-3[_ngcontent-%COMP%] {\n  top: 890px;\n  left: 246px;\n}\n.weaponry-4[_ngcontent-%COMP%] {\n  top: 890px;\n  left: 264px;\n}\n.weaponry-5[_ngcontent-%COMP%] {\n  top: 890px;\n  left: 281px;\n}\n.athletics-rote[_ngcontent-%COMP%] {\n  top: 913px;\n  left: 51px;\n}\n.athletics-1[_ngcontent-%COMP%] {\n  top: 917px;\n  left: 212px;\n}\n.athletics-2[_ngcontent-%COMP%] {\n  top: 917px;\n  left: 229px;\n}\n.athletics-3[_ngcontent-%COMP%] {\n  top: 917px;\n  left: 246px;\n}\n.athletics-4[_ngcontent-%COMP%] {\n  top: 917px;\n  left: 264px;\n}\n.athletics-5[_ngcontent-%COMP%] {\n  top: 917px;\n  left: 281px;\n}\n.brawl-rote[_ngcontent-%COMP%] {\n  top: 941px;\n  left: 51px;\n}\n.brawl-1[_ngcontent-%COMP%] {\n  top: 944px;\n  left: 212px;\n}\n.brawl-2[_ngcontent-%COMP%] {\n  top: 944px;\n  left: 229px;\n}\n.brawl-3[_ngcontent-%COMP%] {\n  top: 944px;\n  left: 246px;\n}\n.brawl-4[_ngcontent-%COMP%] {\n  top: 944px;\n  left: 264px;\n}\n.brawl-5[_ngcontent-%COMP%] {\n  top: 944px;\n  left: 281px;\n}\n.drive-rote[_ngcontent-%COMP%] {\n  top: 967px;\n  left: 51px;\n}\n.drive-1[_ngcontent-%COMP%] {\n  top: 971px;\n  left: 212px;\n}\n.drive-2[_ngcontent-%COMP%] {\n  top: 971px;\n  left: 229px;\n}\n.drive-3[_ngcontent-%COMP%] {\n  top: 971px;\n  left: 246px;\n}\n.drive-4[_ngcontent-%COMP%] {\n  top: 971px;\n  left: 264px;\n}\n.drive-5[_ngcontent-%COMP%] {\n  top: 971px;\n  left: 281px;\n}\n.stealth-rote[_ngcontent-%COMP%] {\n  top: 994px;\n  left: 51px;\n}\n.stealth-1[_ngcontent-%COMP%] {\n  top: 999px;\n  left: 212px;\n}\n.stealth-2[_ngcontent-%COMP%] {\n  top: 999px;\n  left: 229px;\n}\n.stealth-3[_ngcontent-%COMP%] {\n  top: 999px;\n  left: 246px;\n}\n.stealth-4[_ngcontent-%COMP%] {\n  top: 999px;\n  left: 264px;\n}\n.stealth-5[_ngcontent-%COMP%] {\n  top: 999px;\n  left: 281px;\n}\n.larceny-rote[_ngcontent-%COMP%] {\n  top: 1021px;\n  left: 51px;\n}\n.larceny-1[_ngcontent-%COMP%] {\n  top: 1026px;\n  left: 212px;\n}\n.larceny-2[_ngcontent-%COMP%] {\n  top: 1026px;\n  left: 229px;\n}\n.larceny-3[_ngcontent-%COMP%] {\n  top: 1026px;\n  left: 246px;\n}\n.larceny-4[_ngcontent-%COMP%] {\n  top: 1026px;\n  left: 264px;\n}\n.larceny-5[_ngcontent-%COMP%] {\n  top: 1026px;\n  left: 281px;\n}\n.survival-rote[_ngcontent-%COMP%] {\n  top: 1048px;\n  left: 51px;\n}\n.survival-1[_ngcontent-%COMP%] {\n  top: 1052px;\n  left: 212px;\n}\n.survival-2[_ngcontent-%COMP%] {\n  top: 1052px;\n  left: 229px;\n}\n.survival-3[_ngcontent-%COMP%] {\n  top: 1052px;\n  left: 246px;\n}\n.survival-4[_ngcontent-%COMP%] {\n  top: 1052px;\n  left: 264px;\n}\n.survival-5[_ngcontent-%COMP%] {\n  top: 1052px;\n  left: 281px;\n}\n.animalken-rote[_ngcontent-%COMP%] {\n  top: 1109px;\n  left: 51px;\n}\n.animalken-1[_ngcontent-%COMP%] {\n  top: 1113px;\n  left: 212px;\n}\n.animalken-2[_ngcontent-%COMP%] {\n  top: 1113px;\n  left: 229px;\n}\n.animalken-3[_ngcontent-%COMP%] {\n  top: 1113px;\n  left: 246px;\n}\n.animalken-4[_ngcontent-%COMP%] {\n  top: 1113px;\n  left: 264px;\n}\n.animalken-5[_ngcontent-%COMP%] {\n  top: 1113px;\n  left: 281px;\n}\n.empathy-rote[_ngcontent-%COMP%] {\n  top: 1135px;\n  left: 51px;\n}\n.empathy-1[_ngcontent-%COMP%] {\n  top: 1140px;\n  left: 212px;\n}\n.empathy-2[_ngcontent-%COMP%] {\n  top: 1140px;\n  left: 229px;\n}\n.empathy-3[_ngcontent-%COMP%] {\n  top: 1140px;\n  left: 246px;\n}\n.empathy-4[_ngcontent-%COMP%] {\n  top: 1140px;\n  left: 264px;\n}\n.empathy-5[_ngcontent-%COMP%] {\n  top: 1140px;\n  left: 281px;\n}\n.expression-rote[_ngcontent-%COMP%] {\n  top: 1162px;\n  left: 51px;\n}\n.expression-1[_ngcontent-%COMP%] {\n  top: 1167px;\n  left: 212px;\n}\n.expression-2[_ngcontent-%COMP%] {\n  top: 1167px;\n  left: 229px;\n}\n.expression-3[_ngcontent-%COMP%] {\n  top: 1167px;\n  left: 246px;\n}\n.expression-4[_ngcontent-%COMP%] {\n  top: 1167px;\n  left: 264px;\n}\n.expression-5[_ngcontent-%COMP%] {\n  top: 1167px;\n  left: 281px;\n}\n.intimidation-rote[_ngcontent-%COMP%] {\n  top: 1190px;\n  left: 51px;\n}\n.intimidation-1[_ngcontent-%COMP%] {\n  top: 1195px;\n  left: 212px;\n}\n.intimidation-2[_ngcontent-%COMP%] {\n  top: 1195px;\n  left: 229px;\n}\n.intimidation-3[_ngcontent-%COMP%] {\n  top: 1195px;\n  left: 246px;\n}\n.intimidation-4[_ngcontent-%COMP%] {\n  top: 1195px;\n  left: 264px;\n}\n.intimidation-5[_ngcontent-%COMP%] {\n  top: 1195px;\n  left: 281px;\n}\n.persuasion-rote[_ngcontent-%COMP%] {\n  top: 1217px;\n  left: 51px;\n}\n.persuasion-1[_ngcontent-%COMP%] {\n  top: 1222px;\n  left: 212px;\n}\n.persuasion-2[_ngcontent-%COMP%] {\n  top: 1222px;\n  left: 229px;\n}\n.persuasion-3[_ngcontent-%COMP%] {\n  top: 1222px;\n  left: 246px;\n}\n.persuasion-4[_ngcontent-%COMP%] {\n  top: 1222px;\n  left: 264px;\n}\n.persuasion-5[_ngcontent-%COMP%] {\n  top: 1222px;\n  left: 281px;\n}\n.socialize-rote[_ngcontent-%COMP%] {\n  top: 1243px;\n  left: 51px;\n}\n.socialize-1[_ngcontent-%COMP%] {\n  top: 1248px;\n  left: 212px;\n}\n.socialize-2[_ngcontent-%COMP%] {\n  top: 1248px;\n  left: 229px;\n}\n.socialize-3[_ngcontent-%COMP%] {\n  top: 1248px;\n  left: 246px;\n}\n.socialize-4[_ngcontent-%COMP%] {\n  top: 1248px;\n  left: 264px;\n}\n.socialize-5[_ngcontent-%COMP%] {\n  top: 1248px;\n  left: 281px;\n}\n.streetwise-rote[_ngcontent-%COMP%] {\n  top: 1269px;\n  left: 51px;\n}\n.streetwise-1[_ngcontent-%COMP%] {\n  top: 1276px;\n  left: 212px;\n}\n.streetwise-2[_ngcontent-%COMP%] {\n  top: 1276px;\n  left: 229px;\n}\n.streetwise-3[_ngcontent-%COMP%] {\n  top: 1276px;\n  left: 246px;\n}\n.streetwise-4[_ngcontent-%COMP%] {\n  top: 1276px;\n  left: 264px;\n}\n.streetwise-5[_ngcontent-%COMP%] {\n  top: 1276px;\n  left: 281px;\n}\n.subterfuge-rote[_ngcontent-%COMP%] {\n  top: 1296px;\n  left: 51px;\n}\n.subterfuge-1[_ngcontent-%COMP%] {\n  top: 1303px;\n  left: 212px;\n}\n.subterfuge-2[_ngcontent-%COMP%] {\n  top: 1303px;\n  left: 229px;\n}\n.subterfuge-3[_ngcontent-%COMP%] {\n  top: 1303px;\n  left: 246px;\n}\n.subterfuge-4[_ngcontent-%COMP%] {\n  top: 1303px;\n  left: 264px;\n}\n.subterfuge-5[_ngcontent-%COMP%] {\n  top: 1303px;\n  left: 281px;\n}\n.destin-1[_ngcontent-%COMP%] {\n  top: 1105px;\n  left: 517px;\n}\n.destin-2[_ngcontent-%COMP%] {\n  top: 1105px;\n  left: 534px;\n}\n.destin-3[_ngcontent-%COMP%] {\n  top: 1105px;\n  left: 552px;\n}\n.destin-4[_ngcontent-%COMP%] {\n  top: 1105px;\n  left: 569px;\n}\n.destin-5[_ngcontent-%COMP%] {\n  top: 1105px;\n  left: 586px;\n}\n.espace-1[_ngcontent-%COMP%] {\n  top: 1126px;\n  left: 517px;\n}\n.espace-2[_ngcontent-%COMP%] {\n  top: 1126px;\n  left: 534px;\n}\n.espace-3[_ngcontent-%COMP%] {\n  top: 1126px;\n  left: 552px;\n}\n.espace-4[_ngcontent-%COMP%] {\n  top: 1126px;\n  left: 569px;\n}\n.espace-5[_ngcontent-%COMP%] {\n  top: 1126px;\n  left: 586px;\n}\n.esprit-1[_ngcontent-%COMP%] {\n  top: 1147px;\n  left: 517px;\n}\n.esprit-2[_ngcontent-%COMP%] {\n  top: 1147px;\n  left: 534px;\n}\n.esprit-3[_ngcontent-%COMP%] {\n  top: 1147px;\n  left: 552px;\n}\n.esprit-4[_ngcontent-%COMP%] {\n  top: 1147px;\n  left: 569px;\n}\n.esprit-5[_ngcontent-%COMP%] {\n  top: 1147px;\n  left: 586px;\n}\n.forces-1[_ngcontent-%COMP%] {\n  top: 1169px;\n  left: 517px;\n}\n.forces-2[_ngcontent-%COMP%] {\n  top: 1169px;\n  left: 534px;\n}\n.forces-3[_ngcontent-%COMP%] {\n  top: 1169px;\n  left: 552px;\n}\n.forces-4[_ngcontent-%COMP%] {\n  top: 1169px;\n  left: 569px;\n}\n.forces-5[_ngcontent-%COMP%] {\n  top: 1169px;\n  left: 586px;\n}\n.matiere-1[_ngcontent-%COMP%] {\n  top: 1190px;\n  left: 517px;\n}\n.matiere-2[_ngcontent-%COMP%] {\n  top: 1190px;\n  left: 534px;\n}\n.matiere-3[_ngcontent-%COMP%] {\n  top: 1190px;\n  left: 552px;\n}\n.matiere-4[_ngcontent-%COMP%] {\n  top: 1190px;\n  left: 569px;\n}\n.matiere-5[_ngcontent-%COMP%] {\n  top: 1190px;\n  left: 586px;\n}\n.mort-1[_ngcontent-%COMP%] {\n  top: 1212px;\n  left: 517px;\n}\n.mort-2[_ngcontent-%COMP%] {\n  top: 1212px;\n  left: 534px;\n}\n.mort-3[_ngcontent-%COMP%] {\n  top: 1212px;\n  left: 552px;\n}\n.mort-4[_ngcontent-%COMP%] {\n  top: 1212px;\n  left: 569px;\n}\n.mort-5[_ngcontent-%COMP%] {\n  top: 1212px;\n  left: 586px;\n}\n.prime-1[_ngcontent-%COMP%] {\n  top: 1233px;\n  left: 517px;\n}\n.prime-2[_ngcontent-%COMP%] {\n  top: 1233px;\n  left: 534px;\n}\n.prime-3[_ngcontent-%COMP%] {\n  top: 1233px;\n  left: 552px;\n}\n.prime-4[_ngcontent-%COMP%] {\n  top: 1233px;\n  left: 569px;\n}\n.prime-5[_ngcontent-%COMP%] {\n  top: 1233px;\n  left: 586px;\n}\n.psyche-1[_ngcontent-%COMP%] {\n  top: 1254px;\n  left: 517px;\n}\n.psyche-2[_ngcontent-%COMP%] {\n  top: 1254px;\n  left: 534px;\n}\n.psyche-3[_ngcontent-%COMP%] {\n  top: 1254px;\n  left: 552px;\n}\n.psyche-4[_ngcontent-%COMP%] {\n  top: 1254px;\n  left: 569px;\n}\n.psyche-5[_ngcontent-%COMP%] {\n  top: 1254px;\n  left: 586px;\n}\n.temps-1[_ngcontent-%COMP%] {\n  top: 1276px;\n  left: 517px;\n}\n.temps-2[_ngcontent-%COMP%] {\n  top: 1276px;\n  left: 534px;\n}\n.temps-3[_ngcontent-%COMP%] {\n  top: 1276px;\n  left: 552px;\n}\n.temps-4[_ngcontent-%COMP%] {\n  top: 1276px;\n  left: 569px;\n}\n.temps-5[_ngcontent-%COMP%] {\n  top: 1276px;\n  left: 586px;\n}\n.vie-1[_ngcontent-%COMP%] {\n  top: 1297px;\n  left: 517px;\n}\n.vie-2[_ngcontent-%COMP%] {\n  top: 1297px;\n  left: 534px;\n}\n.vie-3[_ngcontent-%COMP%] {\n  top: 1297px;\n  left: 552px;\n}\n.vie-4[_ngcontent-%COMP%] {\n  top: 1297px;\n  left: 569px;\n}\n.vie-5[_ngcontent-%COMP%] {\n  top: 1297px;\n  left: 586px;\n}\n.health-1[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 631px;\n}\n.health-2[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 648px;\n}\n.health-3[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 666px;\n}\n.health-4[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 684px;\n}\n.health-5[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 702px;\n}\n.health-6[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 719px;\n}\n.health-7[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 737px;\n}\n.health-8[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 755px;\n}\n.health-9[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 773px;\n}\n.health-10[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 790px;\n}\n.health-11[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 808px;\n}\n.health-12[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 825px;\n}\n.health-13[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 843px;\n}\n.health-14[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 861px;\n}\n.health-15[_ngcontent-%COMP%] {\n  top: 577px;\n  left: 878px;\n}\n.willpower-1[_ngcontent-%COMP%] {\n  top: 642px;\n  left: 630px;\n}\n.willpower-2[_ngcontent-%COMP%] {\n  top: 642px;\n  left: 658px;\n}\n.willpower-3[_ngcontent-%COMP%] {\n  top: 642px;\n  left: 686px;\n}\n.willpower-4[_ngcontent-%COMP%] {\n  top: 642px;\n  left: 713px;\n}\n.willpower-5[_ngcontent-%COMP%] {\n  top: 642px;\n  left: 740px;\n}\n.willpower-6[_ngcontent-%COMP%] {\n  top: 642px;\n  left: 769px;\n}\n.willpower-7[_ngcontent-%COMP%] {\n  top: 642px;\n  left: 796px;\n}\n.willpower-8[_ngcontent-%COMP%] {\n  top: 642px;\n  left: 824px;\n}\n.willpower-9[_ngcontent-%COMP%] {\n  top: 642px;\n  left: 851px;\n}\n.willpower-10[_ngcontent-%COMP%] {\n  top: 642px;\n  left: 878px;\n}\n.mana-1[_ngcontent-%COMP%] {\n  top: 701px;\n  left: 631px;\n}\n.mana-2[_ngcontent-%COMP%] {\n  top: 701px;\n  left: 658px;\n}\n.mana-3[_ngcontent-%COMP%] {\n  top: 701px;\n  left: 686px;\n}\n.mana-4[_ngcontent-%COMP%] {\n  top: 701px;\n  left: 713px;\n}\n.mana-5[_ngcontent-%COMP%] {\n  top: 701px;\n  left: 740px;\n}\n.mana-6[_ngcontent-%COMP%] {\n  top: 701px;\n  left: 769px;\n}\n.mana-7[_ngcontent-%COMP%] {\n  top: 701px;\n  left: 796px;\n}\n.mana-8[_ngcontent-%COMP%] {\n  top: 701px;\n  left: 824px;\n}\n.mana-9[_ngcontent-%COMP%] {\n  top: 701px;\n  left: 851px;\n}\n.mana-10[_ngcontent-%COMP%] {\n  top: 701px;\n  left: 878px;\n}\n.mana-11[_ngcontent-%COMP%] {\n  top: 721px;\n  left: 631px;\n}\n.mana-12[_ngcontent-%COMP%] {\n  top: 721px;\n  left: 658px;\n}\n.mana-13[_ngcontent-%COMP%] {\n  top: 721px;\n  left: 686px;\n}\n.mana-14[_ngcontent-%COMP%] {\n  top: 721px;\n  left: 713px;\n}\n.mana-15[_ngcontent-%COMP%] {\n  top: 721px;\n  left: 740px;\n}\n.mana-16[_ngcontent-%COMP%] {\n  top: 721px;\n  left: 769px;\n}\n.mana-17[_ngcontent-%COMP%] {\n  top: 721px;\n  left: 796px;\n}\n.mana-18[_ngcontent-%COMP%] {\n  top: 721px;\n  left: 824px;\n}\n.mana-19[_ngcontent-%COMP%] {\n  top: 721px;\n  left: 851px;\n}\n.mana-20[_ngcontent-%COMP%] {\n  top: 721px;\n  left: 878px;\n}\n.gnosis-1[_ngcontent-%COMP%] {\n  top: 789px;\n  left: 630px;\n}\n.gnosis-2[_ngcontent-%COMP%] {\n  top: 789px;\n  left: 658px;\n}\n.gnosis-3[_ngcontent-%COMP%] {\n  top: 789px;\n  left: 686px;\n}\n.gnosis-4[_ngcontent-%COMP%] {\n  top: 789px;\n  left: 713px;\n}\n.gnosis-5[_ngcontent-%COMP%] {\n  top: 789px;\n  left: 740px;\n}\n.gnosis-6[_ngcontent-%COMP%] {\n  top: 789px;\n  left: 769px;\n}\n.gnosis-7[_ngcontent-%COMP%] {\n  top: 789px;\n  left: 796px;\n}\n.gnosis-8[_ngcontent-%COMP%] {\n  top: 789px;\n  left: 824px;\n}\n.gnosis-9[_ngcontent-%COMP%] {\n  top: 789px;\n  left: 851px;\n}\n.gnosis-10[_ngcontent-%COMP%] {\n  top: 789px;\n  left: 878px;\n}\n.morality-10[_ngcontent-%COMP%] {\n  top: 842px;\n  left: 868px;\n}\n.morality-9[_ngcontent-%COMP%] {\n  top: 865px;\n  left: 868px;\n}\n.morality-8[_ngcontent-%COMP%] {\n  top: 888px;\n  left: 868px;\n}\n.morality-7[_ngcontent-%COMP%] {\n  top: 912px;\n  left: 868px;\n}\n.morality-6[_ngcontent-%COMP%] {\n  top: 935px;\n  left: 868px;\n}\n.morality-5[_ngcontent-%COMP%] {\n  top: 960px;\n  left: 868px;\n}\n.morality-4[_ngcontent-%COMP%] {\n  top: 982px;\n  left: 868px;\n}\n.morality-3[_ngcontent-%COMP%] {\n  top: 1006px;\n  left: 868px;\n}\n.morality-2[_ngcontent-%COMP%] {\n  top: 1029px;\n  left: 868px;\n}\n.morality-1[_ngcontent-%COMP%] {\n  top: 1052px;\n  left: 868px;\n}\ninput[name=merit-1][_ngcontent-%COMP%] {\n  top: 584px;\n  left: 328px;\n  width: 176px;\n}\n.merit-1-1[_ngcontent-%COMP%] {\n  top: 594px;\n  left: 516px;\n}\n.merit-1-2[_ngcontent-%COMP%] {\n  top: 594px;\n  left: 534px;\n}\n.merit-1-3[_ngcontent-%COMP%] {\n  top: 594px;\n  left: 551px;\n}\n.merit-1-4[_ngcontent-%COMP%] {\n  top: 594px;\n  left: 569px;\n}\n.merit-1-5[_ngcontent-%COMP%] {\n  top: 594px;\n  left: 586px;\n}\ninput[name=merit-2][_ngcontent-%COMP%] {\n  top: 611px;\n  left: 328px;\n  width: 176px;\n}\n.merit-2-1[_ngcontent-%COMP%] {\n  top: 621px;\n  left: 516px;\n}\n.merit-2-2[_ngcontent-%COMP%] {\n  top: 621px;\n  left: 534px;\n}\n.merit-2-3[_ngcontent-%COMP%] {\n  top: 621px;\n  left: 551px;\n}\n.merit-2-4[_ngcontent-%COMP%] {\n  top: 621px;\n  left: 569px;\n}\n.merit-2-5[_ngcontent-%COMP%] {\n  top: 621px;\n  left: 586px;\n}\ninput[name=merit-3][_ngcontent-%COMP%] {\n  top: 638px;\n  left: 328px;\n  width: 176px;\n}\n.merit-3-1[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 516px;\n}\n.merit-3-2[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 534px;\n}\n.merit-3-3[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 551px;\n}\n.merit-3-4[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 569px;\n}\n.merit-3-5[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 586px;\n}\ninput[name=merit-4][_ngcontent-%COMP%] {\n  top: 665px;\n  left: 328px;\n  width: 176px;\n}\n.merit-4-1[_ngcontent-%COMP%] {\n  top: 676px;\n  left: 516px;\n}\n.merit-4-2[_ngcontent-%COMP%] {\n  top: 676px;\n  left: 534px;\n}\n.merit-4-3[_ngcontent-%COMP%] {\n  top: 676px;\n  left: 551px;\n}\n.merit-4-4[_ngcontent-%COMP%] {\n  top: 676px;\n  left: 569px;\n}\n.merit-4-5[_ngcontent-%COMP%] {\n  top: 676px;\n  left: 586px;\n}\ninput[name=merit-5][_ngcontent-%COMP%] {\n  top: 692px;\n  left: 328px;\n  width: 176px;\n}\n.merit-5-1[_ngcontent-%COMP%] {\n  top: 703px;\n  left: 516px;\n}\n.merit-5-2[_ngcontent-%COMP%] {\n  top: 703px;\n  left: 534px;\n}\n.merit-5-3[_ngcontent-%COMP%] {\n  top: 703px;\n  left: 551px;\n}\n.merit-5-4[_ngcontent-%COMP%] {\n  top: 703px;\n  left: 569px;\n}\n.merit-5-5[_ngcontent-%COMP%] {\n  top: 703px;\n  left: 586px;\n}\ninput[name=merit-6][_ngcontent-%COMP%] {\n  top: 719px;\n  left: 328px;\n  width: 176px;\n}\n.merit-6-1[_ngcontent-%COMP%] {\n  top: 729px;\n  left: 516px;\n}\n.merit-6-2[_ngcontent-%COMP%] {\n  top: 729px;\n  left: 534px;\n}\n.merit-6-3[_ngcontent-%COMP%] {\n  top: 729px;\n  left: 551px;\n}\n.merit-6-4[_ngcontent-%COMP%] {\n  top: 729px;\n  left: 569px;\n}\n.merit-6-5[_ngcontent-%COMP%] {\n  top: 729px;\n  left: 586px;\n}\ninput[name=merit-7][_ngcontent-%COMP%] {\n  top: 746px;\n  left: 328px;\n  width: 176px;\n}\n.merit-7-1[_ngcontent-%COMP%] {\n  top: 757px;\n  left: 516px;\n}\n.merit-7-2[_ngcontent-%COMP%] {\n  top: 757px;\n  left: 534px;\n}\n.merit-7-3[_ngcontent-%COMP%] {\n  top: 757px;\n  left: 551px;\n}\n.merit-7-4[_ngcontent-%COMP%] {\n  top: 757px;\n  left: 569px;\n}\n.merit-7-5[_ngcontent-%COMP%] {\n  top: 757px;\n  left: 586px;\n}\ninput[name=merit-8][_ngcontent-%COMP%] {\n  top: 773px;\n  left: 328px;\n  width: 176px;\n}\n.merit-8-1[_ngcontent-%COMP%] {\n  top: 784px;\n  left: 516px;\n}\n.merit-8-2[_ngcontent-%COMP%] {\n  top: 784px;\n  left: 534px;\n}\n.merit-8-3[_ngcontent-%COMP%] {\n  top: 784px;\n  left: 551px;\n}\n.merit-8-4[_ngcontent-%COMP%] {\n  top: 784px;\n  left: 569px;\n}\n.merit-8-5[_ngcontent-%COMP%] {\n  top: 784px;\n  left: 586px;\n}\ninput[name=arcana-destin][_ngcontent-%COMP%] {\n  top: 1093px;\n  left: 427px;\n  width: 76px;\n}\ninput[name=arcana-espace][_ngcontent-%COMP%] {\n  top: 1115px;\n  left: 427px;\n  width: 76px;\n}\ninput[name=arcana-esprit][_ngcontent-%COMP%] {\n  top: 1136px;\n  left: 427px;\n  width: 76px;\n}\ninput[name=arcana-forces][_ngcontent-%COMP%] {\n  top: 1157px;\n  left: 427px;\n  width: 76px;\n}\ninput[name=arcana-matiere][_ngcontent-%COMP%] {\n  top: 1179px;\n  left: 427px;\n  width: 76px;\n}\ninput[name=arcana-mort][_ngcontent-%COMP%] {\n  top: 1200px;\n  left: 427px;\n  width: 76px;\n}\ninput[name=arcana-prime][_ngcontent-%COMP%] {\n  top: 1222px;\n  left: 427px;\n  width: 76px;\n}\ninput[name=arcana-psyche][_ngcontent-%COMP%] {\n  top: 1243px;\n  left: 427px;\n  width: 76px;\n}\ninput[name=arcana-temps][_ngcontent-%COMP%] {\n  top: 1264px;\n  left: 427px;\n  width: 76px;\n}\ninput[name=arcana-vie][_ngcontent-%COMP%] {\n  top: 1285px;\n  left: 427px;\n  width: 76px;\n}\ninput[name=flaw-1][_ngcontent-%COMP%] {\n  top: 841px;\n  left: 328px;\n  width: 176px;\n}\ninput[name=flaw-2][_ngcontent-%COMP%] {\n  top: 869px;\n  left: 328px;\n  width: 176px;\n}\ninput[name=flaw-3][_ngcontent-%COMP%] {\n  top: 898px;\n  left: 328px;\n  width: 176px;\n}\ninput[name=size][_ngcontent-%COMP%] {\n  top: 925px;\n  left: 381px;\n  width: 176px;\n}\ninput[name=defense][_ngcontent-%COMP%] {\n  top: 953px;\n  left: 399px;\n  width: 151px;\n}\ninput[name=initiative][_ngcontent-%COMP%] {\n  top: 980px;\n  left: 409px;\n  width: 113px;\n}\ninput[name=speed][_ngcontent-%COMP%] {\n  top: 1007px;\n  left: 396px;\n  width: 167px;\n}\ninput[name=mana-per-turn][_ngcontent-%COMP%] {\n  top: 739px;\n  left: 766px;\n  width: 56px;\n}\ninput[name=experience][_ngcontent-%COMP%] {\n  top: 2626px;\n  left: 149px;\n  width: 75px;\n  font-size: 25px;\n}\ninput[name=experience-arcana][_ngcontent-%COMP%] {\n  top: 2765px;\n  left: 149px;\n  width: 75px;\n  font-size: 25px;\n}\n.li-empty[_ngcontent-%COMP%] {\n  list-style: none;\n  height: 15px;\n}\ninput[name=routine_1][_ngcontent-%COMP%] {\n  top: 1734px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_2][_ngcontent-%COMP%] {\n  top: 1759px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_3][_ngcontent-%COMP%] {\n  top: 1784px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_4][_ngcontent-%COMP%] {\n  top: 1810px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_5][_ngcontent-%COMP%] {\n  top: 1834px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_6][_ngcontent-%COMP%] {\n  top: 1859px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_7][_ngcontent-%COMP%] {\n  top: 1885px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_8][_ngcontent-%COMP%] {\n  top: 1909px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_9][_ngcontent-%COMP%] {\n  top: 1935px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_10][_ngcontent-%COMP%] {\n  top: 1961px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_11][_ngcontent-%COMP%] {\n  top: 1985px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_12][_ngcontent-%COMP%] {\n  top: 2010px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_13][_ngcontent-%COMP%] {\n  top: 2036px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=routine_14][_ngcontent-%COMP%] {\n  top: 2060px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=weapon_1][_ngcontent-%COMP%] {\n  top: 2139px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=weapon_2][_ngcontent-%COMP%] {\n  top: 2164px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=equipement_1][_ngcontent-%COMP%] {\n  top: 2408px;\n  left: 339px;\n  width: 565px;\n}\ninput[name=morality_0][_ngcontent-%COMP%] {\n  top: 1040px;\n  left: 648px;\n  width: 205px;\n}\ninput[name=morality_1][_ngcontent-%COMP%] {\n  top: 1017px;\n  left: 648px;\n  width: 205px;\n}\ninput[name=morality_2][_ngcontent-%COMP%] {\n  top: 994px;\n  left: 648px;\n  width: 205px;\n}\ninput[name=morality_3][_ngcontent-%COMP%] {\n  top: 970px;\n  left: 648px;\n  width: 205px;\n}\ninput[name=morality_4][_ngcontent-%COMP%] {\n  top: 946px;\n  left: 648px;\n  width: 205px;\n}\ninput[name=morality_5][_ngcontent-%COMP%] {\n  top: 923px;\n  left: 648px;\n  width: 205px;\n}\ninput[name=morality_6][_ngcontent-%COMP%] {\n  top: 899px;\n  left: 648px;\n  width: 205px;\n}\ninput[name=morality_7][_ngcontent-%COMP%] {\n  top: 876px;\n  left: 648px;\n  width: 205px;\n}\ninput[name=morality_8][_ngcontent-%COMP%] {\n  top: 853px;\n  left: 648px;\n  width: 205px;\n}\ninput[name=morality_9][_ngcontent-%COMP%] {\n  top: 830px;\n  left: 658px;\n  width: 195px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL253b2QvbWFnZS9uZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL253b2QvbWFnZS9uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUscUJBQUE7QUNBSjtBREVFOztFQUVFLGVBQUE7QUNBSjtBRElBO0VBQ0Usa0JBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtBQ0RGO0FESUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFO0lBQ0Usa0JBQUE7RUNGRjtBQUNGO0FES0E7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0hGO0FESUU7O0VBQ0Usb0NBQUE7QUNESjtBRElBO0VBQ0UsWUFBQTtBQ0RGO0FER0E7RUFDRSw2QkFBQTtBQ0FGO0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0Usd0JBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjtBREFFO0VBQ0Usb0NBQUE7QUNFSjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBRENBOzs7RUFHRSxXQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEQUE7RUFDRSw0QkFBQTtBQ0dGO0FEQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNHRjtBREZFO0VBQ0Usb0NBQUE7QUNJSjtBREZFO0VBQ0UsaUJBQUE7QUNJSjtBREZFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNJSjtBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNJRjtBREFBO0VBQW1CLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQ001QztBRExBO0VBQXFCLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQ1c5QztBRFZBO0VBQXdCLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQ2dCakQ7QURmQTtFQUFzQixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNxQi9DO0FEcEJBO0VBQXNCLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQzBCL0M7QUR6QkE7RUFBb0IsVUFBQTtFQUFZLFdBQUE7RUFBYSxZQUFBO0FDK0I3QztBRDlCQTtFQUFvQixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNvQzdDO0FEbkNBO0VBQXFCLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQ3lDOUM7QUR4Q0E7RUFBb0IsVUFBQTtFQUFZLFdBQUE7RUFBYSxZQUFBO0FDOEM3QztBRHZDQTtFQUFrQixVQUFBO0VBQVksV0FBQTtBQzRDOUI7QUQzQ0E7RUFBa0IsVUFBQTtFQUFZLFdBQUE7QUNnRDlCO0FEL0NBO0VBQWtCLFVBQUE7RUFBWSxXQUFBO0FDb0Q5QjtBRG5EQTtFQUFrQixVQUFBO0VBQVksV0FBQTtBQ3dEOUI7QUR2REE7RUFBVSxVQUFBO0VBQVksV0FBQTtBQzREdEI7QUQzREE7RUFBVSxVQUFBO0VBQVksV0FBQTtBQ2dFdEI7QUQvREE7RUFBVSxVQUFBO0VBQVksV0FBQTtBQ29FdEI7QURuRUE7RUFBVSxVQUFBO0VBQVksV0FBQTtBQ3dFdEI7QUR2RUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQzRFekI7QUQzRUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ2dGekI7QUQvRUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ29GekI7QURuRkE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3dGekI7QUR0RkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzJGMUI7QUQxRkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQytGMUI7QUQ5RkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ21HMUI7QURsR0E7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3VHMUI7QUR0R0E7RUFBZSxVQUFBO0VBQVksV0FBQTtBQzJHM0I7QUQxR0E7RUFBZSxVQUFBO0VBQVksV0FBQTtBQytHM0I7QUQ5R0E7RUFBZSxVQUFBO0VBQVksV0FBQTtBQ21IM0I7QURsSEE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQ3VIM0I7QUR0SEE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQzJIekI7QUQxSEE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQytIekI7QUQ5SEE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ21JekI7QURsSUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3VJekI7QURySUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzBJMUI7QUR6SUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzhJMUI7QUQ3SUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ2tKMUI7QURqSkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3NKMUI7QURySkE7RUFBa0IsVUFBQTtFQUFZLFdBQUE7QUMwSjlCO0FEekpBO0VBQWtCLFVBQUE7RUFBWSxXQUFBO0FDOEo5QjtBRDdKQTtFQUFrQixVQUFBO0VBQVksV0FBQTtBQ2tLOUI7QURqS0E7RUFBa0IsVUFBQTtFQUFZLFdBQUE7QUNzSzlCO0FEcktBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUMwSzNCO0FEektBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUM4SzNCO0FEN0tBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUNrTDNCO0FEakxBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUNzTDNCO0FEOUtBO0VBQWUsVUFBQTtFQUFZLFVBQUE7QUNtTDNCO0FEbExBO0VBQVksVUFBQTtFQUFZLFdBTmY7QUM2TFQ7QUR0TEE7RUFBWSxVQUFBO0VBQVksV0FOZjtBQ2lNVDtBRDFMQTtFQUFZLFVBQUE7RUFBWSxXQU5mO0FDcU1UO0FEOUxBO0VBQVksVUFBQTtFQUFZLFdBTmY7QUN5TVQ7QURsTUE7RUFBWSxVQUFBO0VBQVksV0FOZjtBQzZNVDtBRHRNQTtFQUFrQixVQUFBO0VBQVksVUFBQTtBQzJNOUI7QUQxTUE7RUFBZSxVQUFBO0VBQVksV0FabEI7QUMyTlQ7QUQ5TUE7RUFBZSxVQUFBO0VBQVksV0FabEI7QUMrTlQ7QURsTkE7RUFBZSxVQUFBO0VBQVksV0FabEI7QUNtT1Q7QUR0TkE7RUFBZSxVQUFBO0VBQVksV0FabEI7QUN1T1Q7QUQxTkE7RUFBZSxVQUFBO0VBQVksV0FabEI7QUMyT1Q7QUQ5TkE7RUFBaUIsVUFBQTtFQUFZLFVBQUE7QUNtTzdCO0FEbE9BO0VBQWMsVUFBQTtFQUFZLFdBbEJqQjtBQ3lQVDtBRHRPQTtFQUFjLFVBQUE7RUFBWSxXQWxCakI7QUM2UFQ7QUQxT0E7RUFBYyxVQUFBO0VBQVksV0FsQmpCO0FDaVFUO0FEOU9BO0VBQWMsVUFBQTtFQUFZLFdBbEJqQjtBQ3FRVDtBRGxQQTtFQUFjLFVBQUE7RUFBWSxXQWxCakI7QUN5UVQ7QUR0UEE7RUFBc0IsVUFBQTtFQUFZLFVBQUE7QUMyUGxDO0FEMVBBO0VBQW1CLFVBQUE7RUFBWSxXQXhCdEI7QUN1UlQ7QUQ5UEE7RUFBbUIsVUFBQTtFQUFZLFdBeEJ0QjtBQzJSVDtBRGxRQTtFQUFtQixVQUFBO0VBQVksV0F4QnRCO0FDK1JUO0FEdFFBO0VBQW1CLFVBQUE7RUFBWSxXQXhCdEI7QUNtU1Q7QUQxUUE7RUFBbUIsVUFBQTtFQUFZLFdBeEJ0QjtBQ3VTVDtBRDlRQTtFQUFpQixVQUFBO0VBQVksVUFBQTtBQ21SN0I7QURsUkE7RUFBYyxVQUFBO0VBQVksV0E5QmpCO0FDcVRUO0FEdFJBO0VBQWMsVUFBQTtFQUFZLFdBOUJqQjtBQ3lUVDtBRDFSQTtFQUFjLFVBQUE7RUFBWSxXQTlCakI7QUM2VFQ7QUQ5UkE7RUFBYyxVQUFBO0VBQVksV0E5QmpCO0FDaVVUO0FEbFNBO0VBQWMsVUFBQTtFQUFZLFdBOUJqQjtBQ3FVVDtBRHRTQTtFQUFlLFVBQUE7RUFBWSxVQUFBO0FDMlMzQjtBRDFTQTtFQUFZLFVBQUE7RUFBWSxXQXBDZjtBQ21WVDtBRDlTQTtFQUFZLFVBQUE7RUFBWSxXQXBDZjtBQ3VWVDtBRGxUQTtFQUFZLFVBQUE7RUFBWSxXQXBDZjtBQzJWVDtBRHRUQTtFQUFZLFVBQUE7RUFBWSxXQXBDZjtBQytWVDtBRDFUQTtFQUFZLFVBQUE7RUFBWSxXQXBDZjtBQ21XVDtBRDlUQTtFQUFpQixVQUFBO0VBQVksVUFBQTtBQ21VN0I7QURsVUE7RUFBYyxVQUFBO0VBQVksV0ExQ2pCO0FDaVhUO0FEdFVBO0VBQWMsVUFBQTtFQUFZLFdBMUNqQjtBQ3FYVDtBRDFVQTtFQUFjLFVBQUE7RUFBWSxXQTFDakI7QUN5WFQ7QUQ5VUE7RUFBYyxVQUFBO0VBQVksV0ExQ2pCO0FDNlhUO0FEbFZBO0VBQWMsVUFBQTtFQUFZLFdBMUNqQjtBQ2lZVDtBRHRWQTtFQUFnQixVQUFBO0VBQVksVUFBQTtBQzJWNUI7QUQxVkE7RUFBYSxVQUFBO0VBQVksV0FoRGhCO0FDK1lUO0FEOVZBO0VBQWEsVUFBQTtFQUFZLFdBaERoQjtBQ21aVDtBRGxXQTtFQUFhLFVBQUE7RUFBWSxXQWhEaEI7QUN1WlQ7QUR0V0E7RUFBYSxVQUFBO0VBQVksV0FoRGhCO0FDMlpUO0FEMVdBO0VBQWEsVUFBQTtFQUFZLFdBaERoQjtBQytaVDtBRDdXQTtFQUFpQixVQUFBO0VBQVksVUFBQTtBQ2tYN0I7QURqWEE7RUFBYyxVQUFBO0VBQVksV0F2RGpCO0FDNmFUO0FEclhBO0VBQWMsVUFBQTtFQUFZLFdBdkRqQjtBQ2liVDtBRHpYQTtFQUFjLFVBQUE7RUFBWSxXQXZEakI7QUNxYlQ7QUQ3WEE7RUFBYyxVQUFBO0VBQVksV0F2RGpCO0FDeWJUO0FEallBO0VBQWMsVUFBQTtFQUFZLFdBdkRqQjtBQzZiVDtBRHJZQTtFQUFpQixVQUFBO0VBQVksVUFBQTtBQzBZN0I7QUR6WUE7RUFBYyxVQUFBO0VBQVksV0E3RGpCO0FDMmNUO0FEN1lBO0VBQWMsVUFBQTtFQUFZLFdBN0RqQjtBQytjVDtBRGpaQTtFQUFjLFVBQUE7RUFBWSxXQTdEakI7QUNtZFQ7QURyWkE7RUFBYyxVQUFBO0VBQVksV0E3RGpCO0FDdWRUO0FEelpBO0VBQWMsVUFBQTtFQUFZLFdBN0RqQjtBQzJkVDtBRDdaQTtFQUFrQixVQUFBO0VBQVksVUFBQTtBQ2thOUI7QURqYUE7RUFBZSxVQUFBO0VBQVksV0FuRWxCO0FDeWVUO0FEcmFBO0VBQWUsVUFBQTtFQUFZLFdBbkVsQjtBQzZlVDtBRHphQTtFQUFlLFVBQUE7RUFBWSxXQW5FbEI7QUNpZlQ7QUQ3YUE7RUFBZSxVQUFBO0VBQVksV0FuRWxCO0FDcWZUO0FEamJBO0VBQWUsVUFBQTtFQUFZLFdBbkVsQjtBQ3lmVDtBRHJiQTtFQUFjLFVBQUE7RUFBWSxVQUFBO0FDMGIxQjtBRHpiQTtFQUFXLFVBQUE7RUFBWSxXQXpFZDtBQ3VnQlQ7QUQ3YkE7RUFBVyxVQUFBO0VBQVksV0F6RWQ7QUMyZ0JUO0FEamNBO0VBQVcsVUFBQTtFQUFZLFdBekVkO0FDK2dCVDtBRHJjQTtFQUFXLFVBQUE7RUFBWSxXQXpFZDtBQ21oQlQ7QUR6Y0E7RUFBVyxVQUFBO0VBQVksV0F6RWQ7QUN1aEJUO0FEN2NBO0VBQWMsVUFBQTtFQUFZLFVBQUE7QUNrZDFCO0FEamRBO0VBQVcsVUFBQTtFQUFZLFdBL0VkO0FDcWlCVDtBRHJkQTtFQUFXLFVBQUE7RUFBWSxXQS9FZDtBQ3lpQlQ7QUR6ZEE7RUFBVyxVQUFBO0VBQVksV0EvRWQ7QUM2aUJUO0FEN2RBO0VBQVcsVUFBQTtFQUFZLFdBL0VkO0FDaWpCVDtBRGplQTtFQUFXLFVBQUE7RUFBWSxXQS9FZDtBQ3FqQlQ7QURyZUE7RUFBZ0IsVUFBQTtFQUFZLFVBQUE7QUMwZTVCO0FEemVBO0VBQWEsVUFBQTtFQUFZLFdBckZoQjtBQ21rQlQ7QUQ3ZUE7RUFBYSxVQUFBO0VBQVksV0FyRmhCO0FDdWtCVDtBRGpmQTtFQUFhLFVBQUE7RUFBWSxXQXJGaEI7QUMya0JUO0FEcmZBO0VBQWEsVUFBQTtFQUFZLFdBckZoQjtBQytrQlQ7QUR6ZkE7RUFBYSxVQUFBO0VBQVksV0FyRmhCO0FDbWxCVDtBRDdmQTtFQUFnQixXQUFBO0VBQWEsVUFBQTtBQ2tnQjdCO0FEamdCQTtFQUFhLFdBQUE7RUFBYSxXQTNGakI7QUNpbUJUO0FEcmdCQTtFQUFhLFdBQUE7RUFBYSxXQTNGakI7QUNxbUJUO0FEemdCQTtFQUFhLFdBQUE7RUFBYSxXQTNGakI7QUN5bUJUO0FEN2dCQTtFQUFhLFdBQUE7RUFBYSxXQTNGakI7QUM2bUJUO0FEamhCQTtFQUFhLFdBQUE7RUFBYSxXQTNGakI7QUNpbkJUO0FEcmhCQTtFQUFpQixXQUFBO0VBQWEsVUFBQTtBQzBoQjlCO0FEemhCQTtFQUFjLFdBQUE7RUFBYSxXQWpHbEI7QUMrbkJUO0FEN2hCQTtFQUFjLFdBQUE7RUFBYSxXQWpHbEI7QUNtb0JUO0FEamlCQTtFQUFjLFdBQUE7RUFBYSxXQWpHbEI7QUN1b0JUO0FEcmlCQTtFQUFjLFdBQUE7RUFBYSxXQWpHbEI7QUMyb0JUO0FEemlCQTtFQUFjLFdBQUE7RUFBYSxXQWpHbEI7QUMrb0JUO0FENWlCQTtFQUFrQixXQUFBO0VBQWEsVUFBQTtBQ2lqQi9CO0FEaGpCQTtFQUFlLFdBQUE7RUFBYSxXQXhHbkI7QUM2cEJUO0FEcGpCQTtFQUFlLFdBQUE7RUFBYSxXQXhHbkI7QUNpcUJUO0FEeGpCQTtFQUFlLFdBQUE7RUFBYSxXQXhHbkI7QUNxcUJUO0FENWpCQTtFQUFlLFdBQUE7RUFBYSxXQXhHbkI7QUN5cUJUO0FEaGtCQTtFQUFlLFdBQUE7RUFBYSxXQXhHbkI7QUM2cUJUO0FEcGtCQTtFQUFnQixXQUFBO0VBQWEsVUFBQTtBQ3lrQjdCO0FEeGtCQTtFQUFhLFdBQUE7RUFBYSxXQTlHakI7QUMyckJUO0FENWtCQTtFQUFhLFdBQUE7RUFBYSxXQTlHakI7QUMrckJUO0FEaGxCQTtFQUFhLFdBQUE7RUFBYSxXQTlHakI7QUNtc0JUO0FEcGxCQTtFQUFhLFdBQUE7RUFBYSxXQTlHakI7QUN1c0JUO0FEeGxCQTtFQUFhLFdBQUE7RUFBYSxXQTlHakI7QUMyc0JUO0FENWxCQTtFQUFtQixXQUFBO0VBQWEsVUFBQTtBQ2ltQmhDO0FEaG1CQTtFQUFnQixXQUFBO0VBQWEsV0FwSHBCO0FDeXRCVDtBRHBtQkE7RUFBZ0IsV0FBQTtFQUFhLFdBcEhwQjtBQzZ0QlQ7QUR4bUJBO0VBQWdCLFdBQUE7RUFBYSxXQXBIcEI7QUNpdUJUO0FENW1CQTtFQUFnQixXQUFBO0VBQWEsV0FwSHBCO0FDcXVCVDtBRGhuQkE7RUFBZ0IsV0FBQTtFQUFhLFdBcEhwQjtBQ3l1QlQ7QURwbkJBO0VBQXFCLFdBQUE7RUFBYSxVQUFBO0FDeW5CbEM7QUR4bkJBO0VBQWtCLFdBQUE7RUFBYSxXQTFIdEI7QUN1dkJUO0FENW5CQTtFQUFrQixXQUFBO0VBQWEsV0ExSHRCO0FDMnZCVDtBRGhvQkE7RUFBa0IsV0FBQTtFQUFhLFdBMUh0QjtBQyt2QlQ7QURwb0JBO0VBQWtCLFdBQUE7RUFBYSxXQTFIdEI7QUNtd0JUO0FEeG9CQTtFQUFrQixXQUFBO0VBQWEsV0ExSHRCO0FDdXdCVDtBRDVvQkE7RUFBbUIsV0FBQTtFQUFhLFVBQUE7QUNpcEJoQztBRGhwQkE7RUFBZ0IsV0FBQTtFQUFhLFdBaElwQjtBQ3F4QlQ7QURwcEJBO0VBQWdCLFdBQUE7RUFBYSxXQWhJcEI7QUN5eEJUO0FEeHBCQTtFQUFnQixXQUFBO0VBQWEsV0FoSXBCO0FDNnhCVDtBRDVwQkE7RUFBZ0IsV0FBQTtFQUFhLFdBaElwQjtBQ2l5QlQ7QURocUJBO0VBQWdCLFdBQUE7RUFBYSxXQWhJcEI7QUNxeUJUO0FEcHFCQTtFQUFrQixXQUFBO0VBQWEsVUFBQTtBQ3lxQi9CO0FEeHFCQTtFQUFlLFdBQUE7RUFBYSxXQXRJbkI7QUNtekJUO0FENXFCQTtFQUFlLFdBQUE7RUFBYSxXQXRJbkI7QUN1ekJUO0FEaHJCQTtFQUFlLFdBQUE7RUFBYSxXQXRJbkI7QUMyekJUO0FEcHJCQTtFQUFlLFdBQUE7RUFBYSxXQXRJbkI7QUMrekJUO0FEeHJCQTtFQUFlLFdBQUE7RUFBYSxXQXRJbkI7QUNtMEJUO0FENXJCQTtFQUFtQixXQUFBO0VBQWEsVUFBQTtBQ2lzQmhDO0FEaHNCQTtFQUFnQixXQUFBO0VBQWEsV0E1SXBCO0FDaTFCVDtBRHBzQkE7RUFBZ0IsV0FBQTtFQUFhLFdBNUlwQjtBQ3ExQlQ7QUR4c0JBO0VBQWdCLFdBQUE7RUFBYSxXQTVJcEI7QUN5MUJUO0FENXNCQTtFQUFnQixXQUFBO0VBQWEsV0E1SXBCO0FDNjFCVDtBRGh0QkE7RUFBZ0IsV0FBQTtFQUFhLFdBNUlwQjtBQ2kyQlQ7QURwdEJBO0VBQW1CLFdBQUE7RUFBYSxVQUFBO0FDeXRCaEM7QUR4dEJBO0VBQWdCLFdBQUE7RUFBYSxXQWxKcEI7QUMrMkJUO0FENXRCQTtFQUFnQixXQUFBO0VBQWEsV0FsSnBCO0FDbTNCVDtBRGh1QkE7RUFBZ0IsV0FBQTtFQUFhLFdBbEpwQjtBQ3UzQlQ7QURwdUJBO0VBQWdCLFdBQUE7RUFBYSxXQWxKcEI7QUMyM0JUO0FEeHVCQTtFQUFnQixXQUFBO0VBQWEsV0FsSnBCO0FDKzNCVDtBRHB1QkE7RUFBWSxXQUFBO0VBQWEsV0FMVjtBQzh1QmY7QUR4dUJBO0VBQVksV0FBQTtFQUFhLFdBTFY7QUNrdkJmO0FENXVCQTtFQUFZLFdBQUE7RUFBYSxXQUxWO0FDc3ZCZjtBRGh2QkE7RUFBWSxXQUFBO0VBQWEsV0FMVjtBQzB2QmY7QURwdkJBO0VBQVksV0FBQTtFQUFhLFdBTFY7QUM4dkJmO0FEeHZCQTtFQUFZLFdBQUE7RUFBYSxXQVZWO0FDdXdCZjtBRDV2QkE7RUFBWSxXQUFBO0VBQWEsV0FWVjtBQzJ3QmY7QURod0JBO0VBQVksV0FBQTtFQUFhLFdBVlY7QUMrd0JmO0FEcHdCQTtFQUFZLFdBQUE7RUFBYSxXQVZWO0FDbXhCZjtBRHh3QkE7RUFBWSxXQUFBO0VBQWEsV0FWVjtBQ3V4QmY7QUQ1d0JBO0VBQVksV0FBQTtFQUFhLFdBZlY7QUNneUJmO0FEaHhCQTtFQUFZLFdBQUE7RUFBYSxXQWZWO0FDb3lCZjtBRHB4QkE7RUFBWSxXQUFBO0VBQWEsV0FmVjtBQ3d5QmY7QUR4eEJBO0VBQVksV0FBQTtFQUFhLFdBZlY7QUM0eUJmO0FENXhCQTtFQUFZLFdBQUE7RUFBYSxXQWZWO0FDZ3pCZjtBRGh5QkE7RUFBWSxXQUFBO0VBQWEsV0FwQlY7QUN5ekJmO0FEcHlCQTtFQUFZLFdBQUE7RUFBYSxXQXBCVjtBQzZ6QmY7QUR4eUJBO0VBQVksV0FBQTtFQUFhLFdBcEJWO0FDaTBCZjtBRDV5QkE7RUFBWSxXQUFBO0VBQWEsV0FwQlY7QUNxMEJmO0FEaHpCQTtFQUFZLFdBQUE7RUFBYSxXQXBCVjtBQ3kwQmY7QURwekJBO0VBQWEsV0FBQTtFQUFhLFdBekJYO0FDazFCZjtBRHh6QkE7RUFBYSxXQUFBO0VBQWEsV0F6Qlg7QUNzMUJmO0FENXpCQTtFQUFhLFdBQUE7RUFBYSxXQXpCWDtBQzAxQmY7QURoMEJBO0VBQWEsV0FBQTtFQUFhLFdBekJYO0FDODFCZjtBRHAwQkE7RUFBYSxXQUFBO0VBQWEsV0F6Qlg7QUNrMkJmO0FEeDBCQTtFQUFVLFdBQUE7RUFBYSxXQTlCUjtBQzIyQmY7QUQ1MEJBO0VBQVUsV0FBQTtFQUFhLFdBOUJSO0FDKzJCZjtBRGgxQkE7RUFBVSxXQUFBO0VBQWEsV0E5QlI7QUNtM0JmO0FEcDFCQTtFQUFVLFdBQUE7RUFBYSxXQTlCUjtBQ3UzQmY7QUR4MUJBO0VBQVUsV0FBQTtFQUFhLFdBOUJSO0FDMjNCZjtBRDUxQkE7RUFBVyxXQUFBO0VBQWEsV0FuQ1Q7QUNvNEJmO0FEaDJCQTtFQUFXLFdBQUE7RUFBYSxXQW5DVDtBQ3c0QmY7QURwMkJBO0VBQVcsV0FBQTtFQUFhLFdBbkNUO0FDNDRCZjtBRHgyQkE7RUFBVyxXQUFBO0VBQWEsV0FuQ1Q7QUNnNUJmO0FENTJCQTtFQUFXLFdBQUE7RUFBYSxXQW5DVDtBQ281QmY7QURoM0JBO0VBQVksV0FBQTtFQUFhLFdBeENWO0FDNjVCZjtBRHAzQkE7RUFBWSxXQUFBO0VBQWEsV0F4Q1Y7QUNpNkJmO0FEeDNCQTtFQUFZLFdBQUE7RUFBYSxXQXhDVjtBQ3E2QmY7QUQ1M0JBO0VBQVksV0FBQTtFQUFhLFdBeENWO0FDeTZCZjtBRGg0QkE7RUFBWSxXQUFBO0VBQWEsV0F4Q1Y7QUM2NkJmO0FEcDRCQTtFQUFXLFdBQUE7RUFBYSxXQTdDVDtBQ3M3QmY7QUR4NEJBO0VBQVcsV0FBQTtFQUFhLFdBN0NUO0FDMDdCZjtBRDU0QkE7RUFBVyxXQUFBO0VBQWEsV0E3Q1Q7QUM4N0JmO0FEaDVCQTtFQUFXLFdBQUE7RUFBYSxXQTdDVDtBQ2s4QmY7QURwNUJBO0VBQVcsV0FBQTtFQUFhLFdBN0NUO0FDczhCZjtBRHg1QkE7RUFBUyxXQUFBO0VBQWEsV0FsRFA7QUMrOEJmO0FENTVCQTtFQUFTLFdBQUE7RUFBYSxXQWxEUDtBQ205QmY7QURoNkJBO0VBQVMsV0FBQTtFQUFhLFdBbERQO0FDdTlCZjtBRHA2QkE7RUFBUyxXQUFBO0VBQWEsV0FsRFA7QUMyOUJmO0FEeDZCQTtFQUFTLFdBQUE7RUFBYSxXQWxEUDtBQys5QmY7QUR4NkJBO0VBQWEsVUFERDtFQUNrQixXQUFBO0FDNjZCOUI7QUQ1NkJBO0VBQWEsVUFGRDtFQUVrQixXQUFBO0FDaTdCOUI7QURoN0JBO0VBQWEsVUFIRDtFQUdrQixXQUFBO0FDcTdCOUI7QURwN0JBO0VBQWEsVUFKRDtFQUlrQixXQUFBO0FDeTdCOUI7QUR4N0JBO0VBQWEsVUFMRDtFQUtrQixXQUFBO0FDNjdCOUI7QUQ1N0JBO0VBQWEsVUFORDtFQU1rQixXQUFBO0FDaThCOUI7QURoOEJBO0VBQWEsVUFQRDtFQU9rQixXQUFBO0FDcThCOUI7QURwOEJBO0VBQWEsVUFSRDtFQVFrQixXQUFBO0FDeThCOUI7QUR4OEJBO0VBQWEsVUFURDtFQVNrQixXQUFBO0FDNjhCOUI7QUQ1OEJBO0VBQWEsVUFWRDtFQVVrQixXQUFBO0FDaTlCOUI7QURoOUJBO0VBQWEsVUFYRDtFQVdrQixXQUFBO0FDcTlCOUI7QURwOUJBO0VBQWEsVUFaRDtFQVlrQixXQUFBO0FDeTlCOUI7QUR4OUJBO0VBQWEsVUFiRDtFQWFrQixXQUFBO0FDNjlCOUI7QUQ1OUJBO0VBQWEsVUFkRDtFQWNrQixXQUFBO0FDaStCOUI7QURoK0JBO0VBQWEsVUFmRDtFQWVrQixXQUFBO0FDcStCOUI7QURsK0JBO0VBQWdCLFVBREQ7RUFDcUIsV0FBQTtBQ3UrQnBDO0FEdCtCQTtFQUFnQixVQUZEO0VBRXFCLFdBQUE7QUMyK0JwQztBRDErQkE7RUFBZ0IsVUFIRDtFQUdxQixXQUFBO0FDKytCcEM7QUQ5K0JBO0VBQWdCLFVBSkQ7RUFJcUIsV0FBQTtBQ20vQnBDO0FEbC9CQTtFQUFnQixVQUxEO0VBS3FCLFdBQUE7QUN1L0JwQztBRHQvQkE7RUFBZ0IsVUFORDtFQU1xQixXQUFBO0FDMi9CcEM7QUQxL0JBO0VBQWdCLFVBUEQ7RUFPcUIsV0FBQTtBQysvQnBDO0FEOS9CQTtFQUFnQixVQVJEO0VBUXFCLFdBQUE7QUNtZ0NwQztBRGxnQ0E7RUFBZ0IsVUFURDtFQVNxQixXQUFBO0FDdWdDcEM7QUR0Z0NBO0VBQWdCLFVBVkQ7RUFVcUIsV0FBQTtBQzJnQ3BDO0FEdmdDQTtFQUFXLFVBRkE7RUFFZ0IsV0FBQTtBQzRnQzNCO0FEM2dDQTtFQUFXLFVBSEE7RUFHZ0IsV0FBQTtBQ2doQzNCO0FEL2dDQTtFQUFXLFVBSkE7RUFJZ0IsV0FBQTtBQ29oQzNCO0FEbmhDQTtFQUFXLFVBTEE7RUFLZ0IsV0FBQTtBQ3doQzNCO0FEdmhDQTtFQUFXLFVBTkE7RUFNZ0IsV0FBQTtBQzRoQzNCO0FEM2hDQTtFQUFXLFVBUEE7RUFPZ0IsV0FBQTtBQ2dpQzNCO0FEL2hDQTtFQUFXLFVBUkE7RUFRZ0IsV0FBQTtBQ29pQzNCO0FEbmlDQTtFQUFXLFVBVEE7RUFTZ0IsV0FBQTtBQ3dpQzNCO0FEdmlDQTtFQUFXLFVBVkE7RUFVZ0IsV0FBQTtBQzRpQzNCO0FEM2lDQTtFQUFXLFVBWEE7RUFXZ0IsV0FBQTtBQ2dqQzNCO0FEL2lDQTtFQUFXLFVBWEE7RUFXZ0IsV0FBQTtBQ29qQzNCO0FEbmpDQTtFQUFXLFVBWkE7RUFZZ0IsV0FBQTtBQ3dqQzNCO0FEdmpDQTtFQUFXLFVBYkE7RUFhZ0IsV0FBQTtBQzRqQzNCO0FEM2pDQTtFQUFXLFVBZEE7RUFjZ0IsV0FBQTtBQ2drQzNCO0FEL2pDQTtFQUFXLFVBZkE7RUFlZ0IsV0FBQTtBQ29rQzNCO0FEbmtDQTtFQUFXLFVBaEJBO0VBZ0JnQixXQUFBO0FDd2tDM0I7QUR2a0NBO0VBQVcsVUFqQkE7RUFpQmdCLFdBQUE7QUM0a0MzQjtBRDNrQ0E7RUFBVyxVQWxCQTtFQWtCZ0IsV0FBQTtBQ2dsQzNCO0FEL2tDQTtFQUFXLFVBbkJBO0VBbUJnQixXQUFBO0FDb2xDM0I7QURubENBO0VBQVcsVUFwQkE7RUFvQmdCLFdBQUE7QUN3bEMzQjtBRHJsQ0E7RUFBYSxVQUREO0VBQ2tCLFdBQUE7QUMwbEM5QjtBRHpsQ0E7RUFBYSxVQUZEO0VBRWtCLFdBQUE7QUM4bEM5QjtBRDdsQ0E7RUFBYSxVQUhEO0VBR2tCLFdBQUE7QUNrbUM5QjtBRGptQ0E7RUFBYSxVQUpEO0VBSWtCLFdBQUE7QUNzbUM5QjtBRHJtQ0E7RUFBYSxVQUxEO0VBS2tCLFdBQUE7QUMwbUM5QjtBRHptQ0E7RUFBYSxVQU5EO0VBTWtCLFdBQUE7QUM4bUM5QjtBRDdtQ0E7RUFBYSxVQVBEO0VBT2tCLFdBQUE7QUNrbkM5QjtBRGpuQ0E7RUFBYSxVQVJEO0VBUWtCLFdBQUE7QUNzbkM5QjtBRHJuQ0E7RUFBYSxVQVREO0VBU2tCLFdBQUE7QUMwbkM5QjtBRHpuQ0E7RUFBYSxVQVZEO0VBVWtCLFdBQUE7QUM4bkM5QjtBRDNuQ0E7RUFBZSxVQUFBO0VBQVksV0FEWjtBQ2lvQ2Y7QUQvbkNBO0VBQWUsVUFBQTtFQUFZLFdBRlo7QUNzb0NmO0FEbm9DQTtFQUFlLFVBQUE7RUFBWSxXQUhaO0FDMm9DZjtBRHZvQ0E7RUFBZSxVQUFBO0VBQVksV0FKWjtBQ2dwQ2Y7QUQzb0NBO0VBQWUsVUFBQTtFQUFZLFdBTFo7QUNxcENmO0FEL29DQTtFQUFlLFVBQUE7RUFBWSxXQU5aO0FDMHBDZjtBRG5wQ0E7RUFBZSxVQUFBO0VBQVksV0FQWjtBQytwQ2Y7QUR2cENBO0VBQWUsV0FBQTtFQUFhLFdBUmI7QUNvcUNmO0FEM3BDQTtFQUFlLFdBQUE7RUFBYSxXQVRiO0FDeXFDZjtBRC9wQ0E7RUFBZSxXQUFBO0VBQWEsV0FWYjtBQzhxQ2Y7QUQ1cENBO0VBQXNCLFVBQUE7RUFBWSxXQU50QjtFQU13QyxZQUFBO0FDa3FDcEQ7QURqcUNBO0VBQWEsVUFBQTtFQUFZLFdBTlo7QUM0cUNiO0FEcnFDQTtFQUFhLFVBQUE7RUFBWSxXQU5aO0FDZ3JDYjtBRHpxQ0E7RUFBYSxVQUFBO0VBQVksV0FOWjtBQ29yQ2I7QUQ3cUNBO0VBQWEsVUFBQTtFQUFZLFdBTlo7QUN3ckNiO0FEanJDQTtFQUFhLFVBQUE7RUFBWSxXQU5aO0FDNHJDYjtBRHJyQ0E7RUFBc0IsVUFBQTtFQUFZLFdBWnRCO0VBWXdDLFlBQUE7QUMyckNwRDtBRDFyQ0E7RUFBYSxVQUFBO0VBQVksV0FaWjtBQzJzQ2I7QUQ5ckNBO0VBQWEsVUFBQTtFQUFZLFdBWlo7QUMrc0NiO0FEbHNDQTtFQUFhLFVBQUE7RUFBWSxXQVpaO0FDbXRDYjtBRHRzQ0E7RUFBYSxVQUFBO0VBQVksV0FaWjtBQ3V0Q2I7QUQxc0NBO0VBQWEsVUFBQTtFQUFZLFdBWlo7QUMydENiO0FEOXNDQTtFQUFzQixVQUFBO0VBQVksV0FsQnRCO0VBa0J3QyxZQUFBO0FDb3RDcEQ7QURudENBO0VBQWEsVUFBQTtFQUFZLFdBbEJaO0FDMHVDYjtBRHZ0Q0E7RUFBYSxVQUFBO0VBQVksV0FsQlo7QUM4dUNiO0FEM3RDQTtFQUFhLFVBQUE7RUFBWSxXQWxCWjtBQ2t2Q2I7QUQvdENBO0VBQWEsVUFBQTtFQUFZLFdBbEJaO0FDc3ZDYjtBRG51Q0E7RUFBYSxVQUFBO0VBQVksV0FsQlo7QUMwdkNiO0FEdnVDQTtFQUFzQixVQUFBO0VBQVksV0F4QnRCO0VBd0J3QyxZQUFBO0FDNnVDcEQ7QUQ1dUNBO0VBQWEsVUFBQTtFQUFZLFdBeEJaO0FDeXdDYjtBRGh2Q0E7RUFBYSxVQUFBO0VBQVksV0F4Qlo7QUM2d0NiO0FEcHZDQTtFQUFhLFVBQUE7RUFBWSxXQXhCWjtBQ2l4Q2I7QUR4dkNBO0VBQWEsVUFBQTtFQUFZLFdBeEJaO0FDcXhDYjtBRDV2Q0E7RUFBYSxVQUFBO0VBQVksV0F4Qlo7QUN5eENiO0FEaHdDQTtFQUFzQixVQUFBO0VBQVksV0E5QnRCO0VBOEJ3QyxZQUFBO0FDc3dDcEQ7QURyd0NBO0VBQWEsVUFBQTtFQUFZLFdBOUJaO0FDd3lDYjtBRHp3Q0E7RUFBYSxVQUFBO0VBQVksV0E5Qlo7QUM0eUNiO0FEN3dDQTtFQUFhLFVBQUE7RUFBWSxXQTlCWjtBQ2d6Q2I7QURqeENBO0VBQWEsVUFBQTtFQUFZLFdBOUJaO0FDb3pDYjtBRHJ4Q0E7RUFBYSxVQUFBO0VBQVksV0E5Qlo7QUN3ekNiO0FEenhDQTtFQUFzQixVQUFBO0VBQVksV0FwQ3RCO0VBb0N3QyxZQUFBO0FDK3hDcEQ7QUQ5eENBO0VBQWEsVUFBQTtFQUFZLFdBcENaO0FDdTBDYjtBRGx5Q0E7RUFBYSxVQUFBO0VBQVksV0FwQ1o7QUMyMENiO0FEdHlDQTtFQUFhLFVBQUE7RUFBWSxXQXBDWjtBQyswQ2I7QUQxeUNBO0VBQWEsVUFBQTtFQUFZLFdBcENaO0FDbTFDYjtBRDl5Q0E7RUFBYSxVQUFBO0VBQVksV0FwQ1o7QUN1MUNiO0FEbHpDQTtFQUFzQixVQUFBO0VBQVksV0ExQ3RCO0VBMEN3QyxZQUFBO0FDd3pDcEQ7QUR2ekNBO0VBQWEsVUFBQTtFQUFZLFdBMUNaO0FDczJDYjtBRDN6Q0E7RUFBYSxVQUFBO0VBQVksV0ExQ1o7QUMwMkNiO0FEL3pDQTtFQUFhLFVBQUE7RUFBWSxXQTFDWjtBQzgyQ2I7QURuMENBO0VBQWEsVUFBQTtFQUFZLFdBMUNaO0FDazNDYjtBRHYwQ0E7RUFBYSxVQUFBO0VBQVksV0ExQ1o7QUNzM0NiO0FEMzBDQTtFQUFzQixVQUFBO0VBQVksV0FoRHRCO0VBZ0R3QyxZQUFBO0FDaTFDcEQ7QURoMUNBO0VBQWEsVUFBQTtFQUFZLFdBaERaO0FDcTRDYjtBRHAxQ0E7RUFBYSxVQUFBO0VBQVksV0FoRFo7QUN5NENiO0FEeDFDQTtFQUFhLFVBQUE7RUFBWSxXQWhEWjtBQzY0Q2I7QUQ1MUNBO0VBQWEsVUFBQTtFQUFZLFdBaERaO0FDaTVDYjtBRGgyQ0E7RUFBYSxVQUFBO0VBQVksV0FoRFo7QUNxNUNiO0FEbjJDQTtFQUE0QixXQUFBO0VBQWEsV0FBQTtFQUFhLFdBQUE7QUN5MkN0RDtBRHgyQ0E7RUFBNEIsV0FBQTtFQUFhLFdBQUE7RUFBYSxXQUFBO0FDODJDdEQ7QUQ3MkNBO0VBQTRCLFdBQUE7RUFBYSxXQUFBO0VBQWEsV0FBQTtBQ20zQ3REO0FEbDNDQTtFQUE0QixXQUFBO0VBQWEsV0FBQTtFQUFhLFdBQUE7QUN3M0N0RDtBRHYzQ0E7RUFBNkIsV0FBQTtFQUFhLFdBQUE7RUFBYSxXQUFBO0FDNjNDdkQ7QUQ1M0NBO0VBQTBCLFdBQUE7RUFBYSxXQUFBO0VBQWEsV0FBQTtBQ2s0Q3BEO0FEajRDQTtFQUEyQixXQUFBO0VBQWEsV0FBQTtFQUFhLFdBQUE7QUN1NENyRDtBRHQ0Q0E7RUFBNEIsV0FBQTtFQUFhLFdBQUE7RUFBYSxXQUFBO0FDNDRDdEQ7QUQzNENBO0VBQTJCLFdBQUE7RUFBYSxXQUFBO0VBQWEsV0FBQTtBQ2k1Q3JEO0FEaDVDQTtFQUF5QixXQUFBO0VBQWEsV0FBQTtFQUFhLFdBQUE7QUNzNUNuRDtBRHA1Q0E7RUFBcUIsVUFBQTtFQUFZLFdBQUE7RUFBYSxZQUFBO0FDMDVDOUM7QUR6NUNBO0VBQXFCLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQys1QzlDO0FEOTVDQTtFQUFxQixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNvNkM5QztBRGw2Q0E7RUFBbUIsVUFBQTtFQUFZLFdBQUE7RUFBYSxZQUFBO0FDdzZDNUM7QUR2NkNBO0VBQXNCLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQzY2Qy9DO0FENTZDQTtFQUF5QixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNrN0NsRDtBRGo3Q0E7RUFBb0IsV0FBQTtFQUFhLFdBQUE7RUFBYSxZQUFBO0FDdTdDOUM7QURyN0NBO0VBQTRCLFVBQUE7RUFBWSxXQUFBO0VBQWEsV0FBQTtBQzI3Q3JEO0FEejdDQTtFQUF5QixXQUFBO0VBQWEsV0FBQTtFQUFhLFdBQUE7RUFBYSxlQUFBO0FDZzhDaEU7QUQvN0NBO0VBQWdDLFdBQUE7RUFBYSxXQUFBO0VBQWEsV0FBQTtFQUFhLGVBQUE7QUNzOEN2RTtBRHA4Q0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUN1OENGO0FEcDhDQTtFQUF3QixXQUFBO0VBQWEsV0FBQTtFQUFhLFlBQUE7QUMwOENsRDtBRHo4Q0E7RUFBd0IsV0FBQTtFQUFhLFdBQUE7RUFBYSxZQUFBO0FDKzhDbEQ7QUQ5OENBO0VBQXdCLFdBQUE7RUFBYSxXQUFBO0VBQWEsWUFBQTtBQ285Q2xEO0FEbjlDQTtFQUF3QixXQUFBO0VBQWEsV0FBQTtFQUFhLFlBQUE7QUN5OUNsRDtBRHg5Q0E7RUFBd0IsV0FBQTtFQUFhLFdBQUE7RUFBYSxZQUFBO0FDODlDbEQ7QUQ3OUNBO0VBQXdCLFdBQUE7RUFBYSxXQUFBO0VBQWEsWUFBQTtBQ20rQ2xEO0FEbCtDQTtFQUF3QixXQUFBO0VBQWEsV0FBQTtFQUFhLFlBQUE7QUN3K0NsRDtBRHYrQ0E7RUFBd0IsV0FBQTtFQUFhLFdBQUE7RUFBYSxZQUFBO0FDNitDbEQ7QUQ1K0NBO0VBQXdCLFdBQUE7RUFBYSxXQUFBO0VBQWEsWUFBQTtBQ2svQ2xEO0FEai9DQTtFQUF5QixXQUFBO0VBQWEsV0FBQTtFQUFhLFlBQUE7QUN1L0NuRDtBRHQvQ0E7RUFBeUIsV0FBQTtFQUFhLFdBQUE7RUFBYSxZQUFBO0FDNC9DbkQ7QUQzL0NBO0VBQXlCLFdBQUE7RUFBYSxXQUFBO0VBQWEsWUFBQTtBQ2lnRG5EO0FEaGdEQTtFQUF5QixXQUFBO0VBQWEsV0FBQTtFQUFhLFlBQUE7QUNzZ0RuRDtBRHJnREE7RUFBeUIsV0FBQTtFQUFhLFdBQUE7RUFBYSxZQUFBO0FDMmdEbkQ7QUR6Z0RBO0VBQXVCLFdBQUE7RUFBYSxXQUFBO0VBQWEsWUFBQTtBQytnRGpEO0FEOWdEQTtFQUF1QixXQUFBO0VBQWEsV0FBQTtFQUFhLFlBQUE7QUNvaERqRDtBRG5oREE7RUFBMkIsV0FBQTtFQUFhLFdBQUE7RUFBYSxZQUFBO0FDeWhEckQ7QUR2aERBO0VBQXlCLFdBQUE7RUFBYSxXQUFBO0VBQWEsWUFBQTtBQzZoRG5EO0FENWhEQTtFQUF5QixXQUFBO0VBQWEsV0FBQTtFQUFhLFlBQUE7QUNraURuRDtBRGppREE7RUFBeUIsVUFBQTtFQUFZLFdBQUE7RUFBYSxZQUFBO0FDdWlEbEQ7QUR0aURBO0VBQXlCLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQzRpRGxEO0FEM2lEQTtFQUF5QixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNpakRsRDtBRGhqREE7RUFBeUIsVUFBQTtFQUFZLFdBQUE7RUFBYSxZQUFBO0FDc2pEbEQ7QURyakRBO0VBQXlCLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQzJqRGxEO0FEMWpEQTtFQUF5QixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNna0RsRDtBRC9qREE7RUFBeUIsVUFBQTtFQUFZLFdBQUE7RUFBYSxZQUFBO0FDcWtEbEQ7QURwa0RBO0VBQXlCLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQzBrRGxEIiwiZmlsZSI6InNyYy9hcHAvbndvZC9tYWdlL25ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWJ1ZyB7XG4gIGlucHV0LFxuICBzZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICAuZG90Om5vdCguZmlsbGVkKSxcbiAgLnNxdWFyZTpub3QoLmZpbGxlZCkge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgfVxufVxuXG4uc2hlZXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2hlZXQge1xuICB3aWR0aDogOTcwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuc2Nyb2xsYWJsZSB7XG4gICAgaGVpZ2h0OiAyOTNweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbn1cblxuaW5wdXQsXG5zZWxlY3Qge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTQwcHg7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDApO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuMSk7XG4gIH1cbn1cbmlucHV0IHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuc2VsZWN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5pbnB1dC5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbi5kb3Qge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTFweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC4zKTtcbiAgfVxuICAmLmZpbGxlZCB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gIH1cbn1cbi5kb3QuaGVhbHRoLFxuLmRvdC53aWxscG93ZXIsXG4uZG90Lmdub3NpcyB7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG4uZG90LmZhdm9yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4uc3F1YXJlIHtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjMpO1xuICB9XG4gICYuZmlsbGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuICAmLndoaXRlIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW46IC0zcHg7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICB9XG59XG4uc3F1YXJlLnJvdGUge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG5cbmlucHV0W25hbWU9bmFtZV0geyB0b3A6IDIxNXB4OyBsZWZ0OiAxNzVweDsgd2lkdGg6IDIxOXB4OyB9XG5pbnB1dFtuYW1lPXBsYXllcl0geyB0b3A6IDI1NXB4OyBsZWZ0OiAxNzVweDsgd2lkdGg6IDIxOXB4OyB9XG5pbnB1dFtuYW1lPWNocm9uaWNsZV0geyB0b3A6IDI5NXB4OyBsZWZ0OiAxNzVweDsgd2lkdGg6IDIxOXB4OyB9XG5pbnB1dFtuYW1lPWNvbmNlcHRdIHsgdG9wOiAyMTVweDsgbGVmdDogNTAzcHg7IHdpZHRoOiAxNjRweDsgfVxuc2VsZWN0W25hbWU9dmlydHVlXSB7IHRvcDogMjU1cHg7IGxlZnQ6IDUwM3B4OyB3aWR0aDogMTY0cHg7IH1cbnNlbGVjdFtuYW1lPXZpY2VdIHsgdG9wOiAyOTVweDsgbGVmdDogNTAzcHg7IHdpZHRoOiAxNjRweDsgfVxuc2VsZWN0W25hbWU9cGF0aF0geyB0b3A6IDIxNXB4OyBsZWZ0OiA3NzNweDsgd2lkdGg6IDE3MHB4OyB9XG5zZWxlY3RbbmFtZT1vcmRlcl0geyB0b3A6IDI1NXB4OyBsZWZ0OiA3NzNweDsgd2lkdGg6IDE3MHB4OyB9XG5pbnB1dFtuYW1lPWNhYmFsXSB7IHRvcDogMjk1cHg7IGxlZnQ6IDc3M3B4OyB3aWR0aDogMTcwcHg7IH1cblxuLy8gQVRUUklCVVRFU1xuXG4vLyArMTI2XG4vLyAtNjJcblxuLmludGVsbGlnZW5jZS0yIHsgdG9wOiA0MDFweDsgbGVmdDogMzI1cHg7IH1cbi5pbnRlbGxpZ2VuY2UtMyB7IHRvcDogNDAxcHg7IGxlZnQ6IDM0MnB4OyB9XG4uaW50ZWxsaWdlbmNlLTQgeyB0b3A6IDQwMXB4OyBsZWZ0OiAzNThweDsgfVxuLmludGVsbGlnZW5jZS01IHsgdG9wOiA0MDFweDsgbGVmdDogMzc1cHg7IH1cbi53aXRzLTIgeyB0b3A6IDQzN3B4OyBsZWZ0OiAzMjVweDsgfVxuLndpdHMtMyB7IHRvcDogNDM3cHg7IGxlZnQ6IDM0MnB4OyB9XG4ud2l0cy00IHsgdG9wOiA0MzdweDsgbGVmdDogMzU4cHg7IH1cbi53aXRzLTUgeyB0b3A6IDQzN3B4OyBsZWZ0OiAzNzVweDsgfVxuLnJlc29sdmUtMiB7IHRvcDogNDc0cHg7IGxlZnQ6IDMyNXB4OyB9XG4ucmVzb2x2ZS0zIHsgdG9wOiA0NzRweDsgbGVmdDogMzQycHg7IH1cbi5yZXNvbHZlLTQgeyB0b3A6IDQ3NHB4OyBsZWZ0OiAzNThweDsgfVxuLnJlc29sdmUtNSB7IHRvcDogNDc0cHg7IGxlZnQ6IDM3NXB4OyB9XG5cbi5zdHJlbmd0aC0yIHsgdG9wOiA0MDFweDsgbGVmdDogNTY4cHg7IH1cbi5zdHJlbmd0aC0zIHsgdG9wOiA0MDFweDsgbGVmdDogNTg1cHg7IH1cbi5zdHJlbmd0aC00IHsgdG9wOiA0MDFweDsgbGVmdDogNjAycHg7IH1cbi5zdHJlbmd0aC01IHsgdG9wOiA0MDFweDsgbGVmdDogNjE4cHg7IH1cbi5kZXh0ZXJpdHktMiB7IHRvcDogNDM3cHg7IGxlZnQ6IDU2OHB4OyB9XG4uZGV4dGVyaXR5LTMgeyB0b3A6IDQzN3B4OyBsZWZ0OiA1ODVweDsgfVxuLmRleHRlcml0eS00IHsgdG9wOiA0MzdweDsgbGVmdDogNjAycHg7IH1cbi5kZXh0ZXJpdHktNSB7IHRvcDogNDM3cHg7IGxlZnQ6IDYxOHB4OyB9XG4uc3RhbWluYS0yIHsgdG9wOiA0NzRweDsgbGVmdDogNTY4cHg7IH1cbi5zdGFtaW5hLTMgeyB0b3A6IDQ3NHB4OyBsZWZ0OiA1ODVweDsgfVxuLnN0YW1pbmEtNCB7IHRvcDogNDc0cHg7IGxlZnQ6IDYwMnB4OyB9XG4uc3RhbWluYS01IHsgdG9wOiA0NzRweDsgbGVmdDogNjE4cHg7IH1cblxuLnByZXNlbmNlLTIgeyB0b3A6IDQwMXB4OyBsZWZ0OiA4MzVweDsgfVxuLnByZXNlbmNlLTMgeyB0b3A6IDQwMXB4OyBsZWZ0OiA4NTFweDsgfVxuLnByZXNlbmNlLTQgeyB0b3A6IDQwMXB4OyBsZWZ0OiA4NjhweDsgfVxuLnByZXNlbmNlLTUgeyB0b3A6IDQwMXB4OyBsZWZ0OiA4ODVweDsgfVxuLm1hbmlwdWxhdGlvbi0yIHsgdG9wOiA0MzdweDsgbGVmdDogODM1cHg7IH1cbi5tYW5pcHVsYXRpb24tMyB7IHRvcDogNDM3cHg7IGxlZnQ6IDg1MXB4OyB9XG4ubWFuaXB1bGF0aW9uLTQgeyB0b3A6IDQzN3B4OyBsZWZ0OiA4NjhweDsgfVxuLm1hbmlwdWxhdGlvbi01IHsgdG9wOiA0MzdweDsgbGVmdDogODg1cHg7IH1cbi5jb21wb3N1cmUtMiB7IHRvcDogNDc0cHg7IGxlZnQ6IDgzNXB4OyB9XG4uY29tcG9zdXJlLTMgeyB0b3A6IDQ3NHB4OyBsZWZ0OiA4NTFweDsgfVxuLmNvbXBvc3VyZS00IHsgdG9wOiA0NzRweDsgbGVmdDogODY4cHg7IH1cbi5jb21wb3N1cmUtNSB7IHRvcDogNDc0cHg7IGxlZnQ6IDg4NXB4OyB9XG5cbi8vIFNLSUxMU1xuJHJpZ2h0MTogMjEycHg7XG4kcmlnaHQyOiAyMjlweDtcbiRyaWdodDM6IDI0NnB4O1xuJHJpZ2h0NDogMjY0cHg7XG4kcmlnaHQ1OiAyODFweDtcbi5jcmFmdHMtcm90ZSB7IHRvcDogNTkwcHg7IGxlZnQ6IDUxcHg7IH1cbi5jcmFmdHMtMSB7IHRvcDogNTk1cHg7IGxlZnQ6ICRyaWdodDE7IH1cbi5jcmFmdHMtMiB7IHRvcDogNTk1cHg7IGxlZnQ6ICRyaWdodDI7IH1cbi5jcmFmdHMtMyB7IHRvcDogNTk1cHg7IGxlZnQ6ICRyaWdodDM7IH1cbi5jcmFmdHMtNCB7IHRvcDogNTk1cHg7IGxlZnQ6ICRyaWdodDQ7IH1cbi5jcmFmdHMtNSB7IHRvcDogNTk1cHg7IGxlZnQ6ICRyaWdodDU7IH1cbi5hY2FkZW1pY3Mtcm90ZSB7IHRvcDogNjE3cHg7IGxlZnQ6IDUxcHg7IH1cbi5hY2FkZW1pY3MtMSB7IHRvcDogNjIycHg7IGxlZnQ6ICRyaWdodDE7IH1cbi5hY2FkZW1pY3MtMiB7IHRvcDogNjIycHg7IGxlZnQ6ICRyaWdodDI7IH1cbi5hY2FkZW1pY3MtMyB7IHRvcDogNjIycHg7IGxlZnQ6ICRyaWdodDM7IH1cbi5hY2FkZW1pY3MtNCB7IHRvcDogNjIycHg7IGxlZnQ6ICRyaWdodDQ7IH1cbi5hY2FkZW1pY3MtNSB7IHRvcDogNjIycHg7IGxlZnQ6ICRyaWdodDU7IH1cbi5jb21wdXRlci1yb3RlIHsgdG9wOiA2NDRweDsgbGVmdDogNTFweDsgfVxuLmNvbXB1dGVyLTEgeyB0b3A6IDY0OXB4OyBsZWZ0OiAkcmlnaHQxOyB9XG4uY29tcHV0ZXItMiB7IHRvcDogNjQ5cHg7IGxlZnQ6ICRyaWdodDI7IH1cbi5jb21wdXRlci0zIHsgdG9wOiA2NDlweDsgbGVmdDogJHJpZ2h0MzsgfVxuLmNvbXB1dGVyLTQgeyB0b3A6IDY0OXB4OyBsZWZ0OiAkcmlnaHQ0OyB9XG4uY29tcHV0ZXItNSB7IHRvcDogNjQ5cHg7IGxlZnQ6ICRyaWdodDU7IH1cbi5pbnZlc3RpZ2F0aW9uLXJvdGUgeyB0b3A6IDY3MXB4OyBsZWZ0OiA1MXB4OyB9XG4uaW52ZXN0aWdhdGlvbi0xIHsgdG9wOiA2NzZweDsgbGVmdDogJHJpZ2h0MTsgfVxuLmludmVzdGlnYXRpb24tMiB7IHRvcDogNjc2cHg7IGxlZnQ6ICRyaWdodDI7IH1cbi5pbnZlc3RpZ2F0aW9uLTMgeyB0b3A6IDY3NnB4OyBsZWZ0OiAkcmlnaHQzOyB9XG4uaW52ZXN0aWdhdGlvbi00IHsgdG9wOiA2NzZweDsgbGVmdDogJHJpZ2h0NDsgfVxuLmludmVzdGlnYXRpb24tNSB7IHRvcDogNjc2cHg7IGxlZnQ6ICRyaWdodDU7IH1cbi5tZWRpY2luZS1yb3RlIHsgdG9wOiA2OTdweDsgbGVmdDogNTFweDsgfVxuLm1lZGljaW5lLTEgeyB0b3A6IDcwM3B4OyBsZWZ0OiAkcmlnaHQxOyB9XG4ubWVkaWNpbmUtMiB7IHRvcDogNzAzcHg7IGxlZnQ6ICRyaWdodDI7IH1cbi5tZWRpY2luZS0zIHsgdG9wOiA3MDNweDsgbGVmdDogJHJpZ2h0MzsgfVxuLm1lZGljaW5lLTQgeyB0b3A6IDcwM3B4OyBsZWZ0OiAkcmlnaHQ0OyB9XG4ubWVkaWNpbmUtNSB7IHRvcDogNzAzcHg7IGxlZnQ6ICRyaWdodDU7IH1cbi5vY2N1bHQtcm90ZSB7IHRvcDogNzIzcHg7IGxlZnQ6IDUxcHg7IH1cbi5vY2N1bHQtMSB7IHRvcDogNzMwcHg7IGxlZnQ6ICRyaWdodDE7IH1cbi5vY2N1bHQtMiB7IHRvcDogNzMwcHg7IGxlZnQ6ICRyaWdodDI7IH1cbi5vY2N1bHQtMyB7IHRvcDogNzMwcHg7IGxlZnQ6ICRyaWdodDM7IH1cbi5vY2N1bHQtNCB7IHRvcDogNzMwcHg7IGxlZnQ6ICRyaWdodDQ7IH1cbi5vY2N1bHQtNSB7IHRvcDogNzMwcHg7IGxlZnQ6ICRyaWdodDU7IH1cbi5wb2xpdGljcy1yb3RlIHsgdG9wOiA3NTFweDsgbGVmdDogNTFweDsgfVxuLnBvbGl0aWNzLTEgeyB0b3A6IDc1N3B4OyBsZWZ0OiAkcmlnaHQxOyB9XG4ucG9saXRpY3MtMiB7IHRvcDogNzU3cHg7IGxlZnQ6ICRyaWdodDI7IH1cbi5wb2xpdGljcy0zIHsgdG9wOiA3NTdweDsgbGVmdDogJHJpZ2h0MzsgfVxuLnBvbGl0aWNzLTQgeyB0b3A6IDc1N3B4OyBsZWZ0OiAkcmlnaHQ0OyB9XG4ucG9saXRpY3MtNSB7IHRvcDogNzU3cHg7IGxlZnQ6ICRyaWdodDU7IH1cbi5zY2llbmNlLXJvdGUgeyB0b3A6IDc3OHB4OyBsZWZ0OiA1MXB4OyB9XG4uc2NpZW5jZS0xIHsgdG9wOiA3ODNweDsgbGVmdDogJHJpZ2h0MTsgfVxuLnNjaWVuY2UtMiB7IHRvcDogNzgzcHg7IGxlZnQ6ICRyaWdodDI7IH1cbi5zY2llbmNlLTMgeyB0b3A6IDc4M3B4OyBsZWZ0OiAkcmlnaHQzOyB9XG4uc2NpZW5jZS00IHsgdG9wOiA3ODNweDsgbGVmdDogJHJpZ2h0NDsgfVxuLnNjaWVuY2UtNSB7IHRvcDogNzgzcHg7IGxlZnQ6ICRyaWdodDU7IH1cblxuLmZpcmVhcm1zLXJvdGUgeyB0b3A6IDg2MHB4OyBsZWZ0OiA1MXB4OyB9XG4uZmlyZWFybXMtMSB7IHRvcDogODYzcHg7IGxlZnQ6ICRyaWdodDE7IH1cbi5maXJlYXJtcy0yIHsgdG9wOiA4NjNweDsgbGVmdDogJHJpZ2h0MjsgfVxuLmZpcmVhcm1zLTMgeyB0b3A6IDg2M3B4OyBsZWZ0OiAkcmlnaHQzOyB9XG4uZmlyZWFybXMtNCB7IHRvcDogODYzcHg7IGxlZnQ6ICRyaWdodDQ7IH1cbi5maXJlYXJtcy01IHsgdG9wOiA4NjNweDsgbGVmdDogJHJpZ2h0NTsgfVxuLndlYXBvbnJ5LXJvdGUgeyB0b3A6IDg4N3B4OyBsZWZ0OiA1MXB4OyB9XG4ud2VhcG9ucnktMSB7IHRvcDogODkwcHg7IGxlZnQ6ICRyaWdodDE7IH1cbi53ZWFwb25yeS0yIHsgdG9wOiA4OTBweDsgbGVmdDogJHJpZ2h0MjsgfVxuLndlYXBvbnJ5LTMgeyB0b3A6IDg5MHB4OyBsZWZ0OiAkcmlnaHQzOyB9XG4ud2VhcG9ucnktNCB7IHRvcDogODkwcHg7IGxlZnQ6ICRyaWdodDQ7IH1cbi53ZWFwb25yeS01IHsgdG9wOiA4OTBweDsgbGVmdDogJHJpZ2h0NTsgfVxuLmF0aGxldGljcy1yb3RlIHsgdG9wOiA5MTNweDsgbGVmdDogNTFweDsgfVxuLmF0aGxldGljcy0xIHsgdG9wOiA5MTdweDsgbGVmdDogJHJpZ2h0MTsgfVxuLmF0aGxldGljcy0yIHsgdG9wOiA5MTdweDsgbGVmdDogJHJpZ2h0MjsgfVxuLmF0aGxldGljcy0zIHsgdG9wOiA5MTdweDsgbGVmdDogJHJpZ2h0MzsgfVxuLmF0aGxldGljcy00IHsgdG9wOiA5MTdweDsgbGVmdDogJHJpZ2h0NDsgfVxuLmF0aGxldGljcy01IHsgdG9wOiA5MTdweDsgbGVmdDogJHJpZ2h0NTsgfVxuLmJyYXdsLXJvdGUgeyB0b3A6IDk0MXB4OyBsZWZ0OiA1MXB4OyB9XG4uYnJhd2wtMSB7IHRvcDogOTQ0cHg7IGxlZnQ6ICRyaWdodDE7IH1cbi5icmF3bC0yIHsgdG9wOiA5NDRweDsgbGVmdDogJHJpZ2h0MjsgfVxuLmJyYXdsLTMgeyB0b3A6IDk0NHB4OyBsZWZ0OiAkcmlnaHQzOyB9XG4uYnJhd2wtNCB7IHRvcDogOTQ0cHg7IGxlZnQ6ICRyaWdodDQ7IH1cbi5icmF3bC01IHsgdG9wOiA5NDRweDsgbGVmdDogJHJpZ2h0NTsgfVxuLmRyaXZlLXJvdGUgeyB0b3A6IDk2N3B4OyBsZWZ0OiA1MXB4OyB9XG4uZHJpdmUtMSB7IHRvcDogOTcxcHg7IGxlZnQ6ICRyaWdodDE7IH1cbi5kcml2ZS0yIHsgdG9wOiA5NzFweDsgbGVmdDogJHJpZ2h0MjsgfVxuLmRyaXZlLTMgeyB0b3A6IDk3MXB4OyBsZWZ0OiAkcmlnaHQzOyB9XG4uZHJpdmUtNCB7IHRvcDogOTcxcHg7IGxlZnQ6ICRyaWdodDQ7IH1cbi5kcml2ZS01IHsgdG9wOiA5NzFweDsgbGVmdDogJHJpZ2h0NTsgfVxuLnN0ZWFsdGgtcm90ZSB7IHRvcDogOTk0cHg7IGxlZnQ6IDUxcHg7IH1cbi5zdGVhbHRoLTEgeyB0b3A6IDk5OXB4OyBsZWZ0OiAkcmlnaHQxOyB9XG4uc3RlYWx0aC0yIHsgdG9wOiA5OTlweDsgbGVmdDogJHJpZ2h0MjsgfVxuLnN0ZWFsdGgtMyB7IHRvcDogOTk5cHg7IGxlZnQ6ICRyaWdodDM7IH1cbi5zdGVhbHRoLTQgeyB0b3A6IDk5OXB4OyBsZWZ0OiAkcmlnaHQ0OyB9XG4uc3RlYWx0aC01IHsgdG9wOiA5OTlweDsgbGVmdDogJHJpZ2h0NTsgfVxuLmxhcmNlbnktcm90ZSB7IHRvcDogMTAyMXB4OyBsZWZ0OiA1MXB4OyB9XG4ubGFyY2VueS0xIHsgdG9wOiAxMDI2cHg7IGxlZnQ6ICRyaWdodDE7IH1cbi5sYXJjZW55LTIgeyB0b3A6IDEwMjZweDsgbGVmdDogJHJpZ2h0MjsgfVxuLmxhcmNlbnktMyB7IHRvcDogMTAyNnB4OyBsZWZ0OiAkcmlnaHQzOyB9XG4ubGFyY2VueS00IHsgdG9wOiAxMDI2cHg7IGxlZnQ6ICRyaWdodDQ7IH1cbi5sYXJjZW55LTUgeyB0b3A6IDEwMjZweDsgbGVmdDogJHJpZ2h0NTsgfVxuLnN1cnZpdmFsLXJvdGUgeyB0b3A6IDEwNDhweDsgbGVmdDogNTFweDsgfVxuLnN1cnZpdmFsLTEgeyB0b3A6IDEwNTJweDsgbGVmdDogJHJpZ2h0MTsgfVxuLnN1cnZpdmFsLTIgeyB0b3A6IDEwNTJweDsgbGVmdDogJHJpZ2h0MjsgfVxuLnN1cnZpdmFsLTMgeyB0b3A6IDEwNTJweDsgbGVmdDogJHJpZ2h0MzsgfVxuLnN1cnZpdmFsLTQgeyB0b3A6IDEwNTJweDsgbGVmdDogJHJpZ2h0NDsgfVxuLnN1cnZpdmFsLTUgeyB0b3A6IDEwNTJweDsgbGVmdDogJHJpZ2h0NTsgfVxuXG4uYW5pbWFsa2VuLXJvdGUgeyB0b3A6IDExMDlweDsgbGVmdDogNTFweDsgfVxuLmFuaW1hbGtlbi0xIHsgdG9wOiAxMTEzcHg7IGxlZnQ6ICRyaWdodDE7IH1cbi5hbmltYWxrZW4tMiB7IHRvcDogMTExM3B4OyBsZWZ0OiAkcmlnaHQyOyB9XG4uYW5pbWFsa2VuLTMgeyB0b3A6IDExMTNweDsgbGVmdDogJHJpZ2h0MzsgfVxuLmFuaW1hbGtlbi00IHsgdG9wOiAxMTEzcHg7IGxlZnQ6ICRyaWdodDQ7IH1cbi5hbmltYWxrZW4tNSB7IHRvcDogMTExM3B4OyBsZWZ0OiAkcmlnaHQ1OyB9XG4uZW1wYXRoeS1yb3RlIHsgdG9wOiAxMTM1cHg7IGxlZnQ6IDUxcHg7IH1cbi5lbXBhdGh5LTEgeyB0b3A6IDExNDBweDsgbGVmdDogJHJpZ2h0MTsgfVxuLmVtcGF0aHktMiB7IHRvcDogMTE0MHB4OyBsZWZ0OiAkcmlnaHQyOyB9XG4uZW1wYXRoeS0zIHsgdG9wOiAxMTQwcHg7IGxlZnQ6ICRyaWdodDM7IH1cbi5lbXBhdGh5LTQgeyB0b3A6IDExNDBweDsgbGVmdDogJHJpZ2h0NDsgfVxuLmVtcGF0aHktNSB7IHRvcDogMTE0MHB4OyBsZWZ0OiAkcmlnaHQ1OyB9XG4uZXhwcmVzc2lvbi1yb3RlIHsgdG9wOiAxMTYycHg7IGxlZnQ6IDUxcHg7IH1cbi5leHByZXNzaW9uLTEgeyB0b3A6IDExNjdweDsgbGVmdDogJHJpZ2h0MTsgfVxuLmV4cHJlc3Npb24tMiB7IHRvcDogMTE2N3B4OyBsZWZ0OiAkcmlnaHQyOyB9XG4uZXhwcmVzc2lvbi0zIHsgdG9wOiAxMTY3cHg7IGxlZnQ6ICRyaWdodDM7IH1cbi5leHByZXNzaW9uLTQgeyB0b3A6IDExNjdweDsgbGVmdDogJHJpZ2h0NDsgfVxuLmV4cHJlc3Npb24tNSB7IHRvcDogMTE2N3B4OyBsZWZ0OiAkcmlnaHQ1OyB9XG4uaW50aW1pZGF0aW9uLXJvdGUgeyB0b3A6IDExOTBweDsgbGVmdDogNTFweDsgfVxuLmludGltaWRhdGlvbi0xIHsgdG9wOiAxMTk1cHg7IGxlZnQ6ICRyaWdodDE7IH1cbi5pbnRpbWlkYXRpb24tMiB7IHRvcDogMTE5NXB4OyBsZWZ0OiAkcmlnaHQyOyB9XG4uaW50aW1pZGF0aW9uLTMgeyB0b3A6IDExOTVweDsgbGVmdDogJHJpZ2h0MzsgfVxuLmludGltaWRhdGlvbi00IHsgdG9wOiAxMTk1cHg7IGxlZnQ6ICRyaWdodDQ7IH1cbi5pbnRpbWlkYXRpb24tNSB7IHRvcDogMTE5NXB4OyBsZWZ0OiAkcmlnaHQ1OyB9XG4ucGVyc3Vhc2lvbi1yb3RlIHsgdG9wOiAxMjE3cHg7IGxlZnQ6IDUxcHg7IH1cbi5wZXJzdWFzaW9uLTEgeyB0b3A6IDEyMjJweDsgbGVmdDogJHJpZ2h0MTsgfVxuLnBlcnN1YXNpb24tMiB7IHRvcDogMTIyMnB4OyBsZWZ0OiAkcmlnaHQyOyB9XG4ucGVyc3Vhc2lvbi0zIHsgdG9wOiAxMjIycHg7IGxlZnQ6ICRyaWdodDM7IH1cbi5wZXJzdWFzaW9uLTQgeyB0b3A6IDEyMjJweDsgbGVmdDogJHJpZ2h0NDsgfVxuLnBlcnN1YXNpb24tNSB7IHRvcDogMTIyMnB4OyBsZWZ0OiAkcmlnaHQ1OyB9XG4uc29jaWFsaXplLXJvdGUgeyB0b3A6IDEyNDNweDsgbGVmdDogNTFweDsgfVxuLnNvY2lhbGl6ZS0xIHsgdG9wOiAxMjQ4cHg7IGxlZnQ6ICRyaWdodDE7IH1cbi5zb2NpYWxpemUtMiB7IHRvcDogMTI0OHB4OyBsZWZ0OiAkcmlnaHQyOyB9XG4uc29jaWFsaXplLTMgeyB0b3A6IDEyNDhweDsgbGVmdDogJHJpZ2h0MzsgfVxuLnNvY2lhbGl6ZS00IHsgdG9wOiAxMjQ4cHg7IGxlZnQ6ICRyaWdodDQ7IH1cbi5zb2NpYWxpemUtNSB7IHRvcDogMTI0OHB4OyBsZWZ0OiAkcmlnaHQ1OyB9XG4uc3RyZWV0d2lzZS1yb3RlIHsgdG9wOiAxMjY5cHg7IGxlZnQ6IDUxcHg7IH1cbi5zdHJlZXR3aXNlLTEgeyB0b3A6IDEyNzZweDsgbGVmdDogJHJpZ2h0MTsgfVxuLnN0cmVldHdpc2UtMiB7IHRvcDogMTI3NnB4OyBsZWZ0OiAkcmlnaHQyOyB9XG4uc3RyZWV0d2lzZS0zIHsgdG9wOiAxMjc2cHg7IGxlZnQ6ICRyaWdodDM7IH1cbi5zdHJlZXR3aXNlLTQgeyB0b3A6IDEyNzZweDsgbGVmdDogJHJpZ2h0NDsgfVxuLnN0cmVldHdpc2UtNSB7IHRvcDogMTI3NnB4OyBsZWZ0OiAkcmlnaHQ1OyB9XG4uc3VidGVyZnVnZS1yb3RlIHsgdG9wOiAxMjk2cHg7IGxlZnQ6IDUxcHg7IH1cbi5zdWJ0ZXJmdWdlLTEgeyB0b3A6IDEzMDNweDsgbGVmdDogJHJpZ2h0MTsgfVxuLnN1YnRlcmZ1Z2UtMiB7IHRvcDogMTMwM3B4OyBsZWZ0OiAkcmlnaHQyOyB9XG4uc3VidGVyZnVnZS0zIHsgdG9wOiAxMzAzcHg7IGxlZnQ6ICRyaWdodDM7IH1cbi5zdWJ0ZXJmdWdlLTQgeyB0b3A6IDEzMDNweDsgbGVmdDogJHJpZ2h0NDsgfVxuLnN1YnRlcmZ1Z2UtNSB7IHRvcDogMTMwM3B4OyBsZWZ0OiAkcmlnaHQ1OyB9XG5cbi8vLyBBUkNBTkFTXG5cbiRhcmNhbmFSaWdodDE6IDUxN3B4O1xuJGFyY2FuYVJpZ2h0MjogNTM0cHg7XG4kYXJjYW5hUmlnaHQzOiA1NTJweDtcbiRhcmNhbmFSaWdodDQ6IDU2OXB4O1xuJGFyY2FuYVJpZ2h0NTogNTg2cHg7XG4uZGVzdGluLTEgeyB0b3A6IDExMDVweDsgbGVmdDogJGFyY2FuYVJpZ2h0MTsgfVxuLmRlc3Rpbi0yIHsgdG9wOiAxMTA1cHg7IGxlZnQ6ICRhcmNhbmFSaWdodDI7IH1cbi5kZXN0aW4tMyB7IHRvcDogMTEwNXB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQzOyB9XG4uZGVzdGluLTQgeyB0b3A6IDExMDVweDsgbGVmdDogJGFyY2FuYVJpZ2h0NDsgfVxuLmRlc3Rpbi01IHsgdG9wOiAxMTA1cHg7IGxlZnQ6ICRhcmNhbmFSaWdodDU7IH1cbi5lc3BhY2UtMSB7IHRvcDogMTEyNnB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQxOyB9XG4uZXNwYWNlLTIgeyB0b3A6IDExMjZweDsgbGVmdDogJGFyY2FuYVJpZ2h0MjsgfVxuLmVzcGFjZS0zIHsgdG9wOiAxMTI2cHg7IGxlZnQ6ICRhcmNhbmFSaWdodDM7IH1cbi5lc3BhY2UtNCB7IHRvcDogMTEyNnB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQ0OyB9XG4uZXNwYWNlLTUgeyB0b3A6IDExMjZweDsgbGVmdDogJGFyY2FuYVJpZ2h0NTsgfVxuLmVzcHJpdC0xIHsgdG9wOiAxMTQ3cHg7IGxlZnQ6ICRhcmNhbmFSaWdodDE7IH1cbi5lc3ByaXQtMiB7IHRvcDogMTE0N3B4OyBsZWZ0OiAkYXJjYW5hUmlnaHQyOyB9XG4uZXNwcml0LTMgeyB0b3A6IDExNDdweDsgbGVmdDogJGFyY2FuYVJpZ2h0MzsgfVxuLmVzcHJpdC00IHsgdG9wOiAxMTQ3cHg7IGxlZnQ6ICRhcmNhbmFSaWdodDQ7IH1cbi5lc3ByaXQtNSB7IHRvcDogMTE0N3B4OyBsZWZ0OiAkYXJjYW5hUmlnaHQ1OyB9XG4uZm9yY2VzLTEgeyB0b3A6IDExNjlweDsgbGVmdDogJGFyY2FuYVJpZ2h0MTsgfVxuLmZvcmNlcy0yIHsgdG9wOiAxMTY5cHg7IGxlZnQ6ICRhcmNhbmFSaWdodDI7IH1cbi5mb3JjZXMtMyB7IHRvcDogMTE2OXB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQzOyB9XG4uZm9yY2VzLTQgeyB0b3A6IDExNjlweDsgbGVmdDogJGFyY2FuYVJpZ2h0NDsgfVxuLmZvcmNlcy01IHsgdG9wOiAxMTY5cHg7IGxlZnQ6ICRhcmNhbmFSaWdodDU7IH1cbi5tYXRpZXJlLTEgeyB0b3A6IDExOTBweDsgbGVmdDogJGFyY2FuYVJpZ2h0MTsgfVxuLm1hdGllcmUtMiB7IHRvcDogMTE5MHB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQyOyB9XG4ubWF0aWVyZS0zIHsgdG9wOiAxMTkwcHg7IGxlZnQ6ICRhcmNhbmFSaWdodDM7IH1cbi5tYXRpZXJlLTQgeyB0b3A6IDExOTBweDsgbGVmdDogJGFyY2FuYVJpZ2h0NDsgfVxuLm1hdGllcmUtNSB7IHRvcDogMTE5MHB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQ1OyB9XG4ubW9ydC0xIHsgdG9wOiAxMjEycHg7IGxlZnQ6ICRhcmNhbmFSaWdodDE7IH1cbi5tb3J0LTIgeyB0b3A6IDEyMTJweDsgbGVmdDogJGFyY2FuYVJpZ2h0MjsgfVxuLm1vcnQtMyB7IHRvcDogMTIxMnB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQzOyB9XG4ubW9ydC00IHsgdG9wOiAxMjEycHg7IGxlZnQ6ICRhcmNhbmFSaWdodDQ7IH1cbi5tb3J0LTUgeyB0b3A6IDEyMTJweDsgbGVmdDogJGFyY2FuYVJpZ2h0NTsgfVxuLnByaW1lLTEgeyB0b3A6IDEyMzNweDsgbGVmdDogJGFyY2FuYVJpZ2h0MTsgfVxuLnByaW1lLTIgeyB0b3A6IDEyMzNweDsgbGVmdDogJGFyY2FuYVJpZ2h0MjsgfVxuLnByaW1lLTMgeyB0b3A6IDEyMzNweDsgbGVmdDogJGFyY2FuYVJpZ2h0MzsgfVxuLnByaW1lLTQgeyB0b3A6IDEyMzNweDsgbGVmdDogJGFyY2FuYVJpZ2h0NDsgfVxuLnByaW1lLTUgeyB0b3A6IDEyMzNweDsgbGVmdDogJGFyY2FuYVJpZ2h0NTsgfVxuLnBzeWNoZS0xIHsgdG9wOiAxMjU0cHg7IGxlZnQ6ICRhcmNhbmFSaWdodDE7IH1cbi5wc3ljaGUtMiB7IHRvcDogMTI1NHB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQyOyB9XG4ucHN5Y2hlLTMgeyB0b3A6IDEyNTRweDsgbGVmdDogJGFyY2FuYVJpZ2h0MzsgfVxuLnBzeWNoZS00IHsgdG9wOiAxMjU0cHg7IGxlZnQ6ICRhcmNhbmFSaWdodDQ7IH1cbi5wc3ljaGUtNSB7IHRvcDogMTI1NHB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQ1OyB9XG4udGVtcHMtMSB7IHRvcDogMTI3NnB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQxOyB9XG4udGVtcHMtMiB7IHRvcDogMTI3NnB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQyOyB9XG4udGVtcHMtMyB7IHRvcDogMTI3NnB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQzOyB9XG4udGVtcHMtNCB7IHRvcDogMTI3NnB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQ0OyB9XG4udGVtcHMtNSB7IHRvcDogMTI3NnB4OyBsZWZ0OiAkYXJjYW5hUmlnaHQ1OyB9XG4udmllLTEgeyB0b3A6IDEyOTdweDsgbGVmdDogJGFyY2FuYVJpZ2h0MTsgfVxuLnZpZS0yIHsgdG9wOiAxMjk3cHg7IGxlZnQ6ICRhcmNhbmFSaWdodDI7IH1cbi52aWUtMyB7IHRvcDogMTI5N3B4OyBsZWZ0OiAkYXJjYW5hUmlnaHQzOyB9XG4udmllLTQgeyB0b3A6IDEyOTdweDsgbGVmdDogJGFyY2FuYVJpZ2h0NDsgfVxuLnZpZS01IHsgdG9wOiAxMjk3cHg7IGxlZnQ6ICRhcmNhbmFSaWdodDU7IH1cblxuLy8gU1RBVFNcblxuJGhlYWx0aFRvcDogNTc3cHg7XG4uaGVhbHRoLTEgeyAgdG9wOiAkaGVhbHRoVG9wOyBsZWZ0OiA2MzFweDsgfVxuLmhlYWx0aC0yIHsgIHRvcDogJGhlYWx0aFRvcDsgbGVmdDogNjQ4cHg7IH1cbi5oZWFsdGgtMyB7ICB0b3A6ICRoZWFsdGhUb3A7IGxlZnQ6IDY2NnB4OyB9XG4uaGVhbHRoLTQgeyAgdG9wOiAkaGVhbHRoVG9wOyBsZWZ0OiA2ODRweDsgfVxuLmhlYWx0aC01IHsgIHRvcDogJGhlYWx0aFRvcDsgbGVmdDogNzAycHg7IH1cbi5oZWFsdGgtNiB7ICB0b3A6ICRoZWFsdGhUb3A7IGxlZnQ6IDcxOXB4OyB9XG4uaGVhbHRoLTcgeyAgdG9wOiAkaGVhbHRoVG9wOyBsZWZ0OiA3MzdweDsgfVxuLmhlYWx0aC04IHsgIHRvcDogJGhlYWx0aFRvcDsgbGVmdDogNzU1cHg7IH1cbi5oZWFsdGgtOSB7ICB0b3A6ICRoZWFsdGhUb3A7IGxlZnQ6IDc3M3B4OyB9XG4uaGVhbHRoLTEwIHsgdG9wOiAkaGVhbHRoVG9wOyBsZWZ0OiA3OTBweDsgfVxuLmhlYWx0aC0xMSB7IHRvcDogJGhlYWx0aFRvcDsgbGVmdDogODA4cHg7IH1cbi5oZWFsdGgtMTIgeyB0b3A6ICRoZWFsdGhUb3A7IGxlZnQ6IDgyNXB4OyB9XG4uaGVhbHRoLTEzIHsgdG9wOiAkaGVhbHRoVG9wOyBsZWZ0OiA4NDNweDsgfVxuLmhlYWx0aC0xNCB7IHRvcDogJGhlYWx0aFRvcDsgbGVmdDogODYxcHg7IH1cbi5oZWFsdGgtMTUgeyB0b3A6ICRoZWFsdGhUb3A7IGxlZnQ6IDg3OHB4OyB9XG5cbiR3aWxscG93ZXJUb3A6IDY0MnB4O1xuLndpbGxwb3dlci0xIHsgIHRvcDogJHdpbGxwb3dlclRvcDsgbGVmdDogNjMwcHg7IH1cbi53aWxscG93ZXItMiB7ICB0b3A6ICR3aWxscG93ZXJUb3A7IGxlZnQ6IDY1OHB4OyB9XG4ud2lsbHBvd2VyLTMgeyAgdG9wOiAkd2lsbHBvd2VyVG9wOyBsZWZ0OiA2ODZweDsgfVxuLndpbGxwb3dlci00IHsgIHRvcDogJHdpbGxwb3dlclRvcDsgbGVmdDogNzEzcHg7IH1cbi53aWxscG93ZXItNSB7ICB0b3A6ICR3aWxscG93ZXJUb3A7IGxlZnQ6IDc0MHB4OyB9XG4ud2lsbHBvd2VyLTYgeyAgdG9wOiAkd2lsbHBvd2VyVG9wOyBsZWZ0OiA3NjlweDsgfVxuLndpbGxwb3dlci03IHsgIHRvcDogJHdpbGxwb3dlclRvcDsgbGVmdDogNzk2cHg7IH1cbi53aWxscG93ZXItOCB7ICB0b3A6ICR3aWxscG93ZXJUb3A7IGxlZnQ6IDgyNHB4OyB9XG4ud2lsbHBvd2VyLTkgeyAgdG9wOiAkd2lsbHBvd2VyVG9wOyBsZWZ0OiA4NTFweDsgfVxuLndpbGxwb3dlci0xMCB7IHRvcDogJHdpbGxwb3dlclRvcDsgbGVmdDogODc4cHg7IH1cblxuJG1hbmFUb3AxOiA3MDFweDtcbiRtYW5hVG9wMjogNzIxcHg7XG4ubWFuYS0xIHsgIHRvcDogJG1hbmFUb3AxOyBsZWZ0OiA2MzFweDsgfVxuLm1hbmEtMiB7ICB0b3A6ICRtYW5hVG9wMTsgbGVmdDogNjU4cHg7IH1cbi5tYW5hLTMgeyAgdG9wOiAkbWFuYVRvcDE7IGxlZnQ6IDY4NnB4OyB9XG4ubWFuYS00IHsgIHRvcDogJG1hbmFUb3AxOyBsZWZ0OiA3MTNweDsgfVxuLm1hbmEtNSB7ICB0b3A6ICRtYW5hVG9wMTsgbGVmdDogNzQwcHg7IH1cbi5tYW5hLTYgeyAgdG9wOiAkbWFuYVRvcDE7IGxlZnQ6IDc2OXB4OyB9XG4ubWFuYS03IHsgIHRvcDogJG1hbmFUb3AxOyBsZWZ0OiA3OTZweDsgfVxuLm1hbmEtOCB7ICB0b3A6ICRtYW5hVG9wMTsgbGVmdDogODI0cHg7IH1cbi5tYW5hLTkgeyAgdG9wOiAkbWFuYVRvcDE7IGxlZnQ6IDg1MXB4OyB9XG4ubWFuYS0xMCB7IHRvcDogJG1hbmFUb3AxOyBsZWZ0OiA4NzhweDsgfVxuLm1hbmEtMTEgeyB0b3A6ICRtYW5hVG9wMjsgbGVmdDogNjMxcHg7IH1cbi5tYW5hLTEyIHsgdG9wOiAkbWFuYVRvcDI7IGxlZnQ6IDY1OHB4OyB9XG4ubWFuYS0xMyB7IHRvcDogJG1hbmFUb3AyOyBsZWZ0OiA2ODZweDsgfVxuLm1hbmEtMTQgeyB0b3A6ICRtYW5hVG9wMjsgbGVmdDogNzEzcHg7IH1cbi5tYW5hLTE1IHsgdG9wOiAkbWFuYVRvcDI7IGxlZnQ6IDc0MHB4OyB9XG4ubWFuYS0xNiB7IHRvcDogJG1hbmFUb3AyOyBsZWZ0OiA3NjlweDsgfVxuLm1hbmEtMTcgeyB0b3A6ICRtYW5hVG9wMjsgbGVmdDogNzk2cHg7IH1cbi5tYW5hLTE4IHsgdG9wOiAkbWFuYVRvcDI7IGxlZnQ6IDgyNHB4OyB9XG4ubWFuYS0xOSB7IHRvcDogJG1hbmFUb3AyOyBsZWZ0OiA4NTFweDsgfVxuLm1hbmEtMjAgeyB0b3A6ICRtYW5hVG9wMjsgbGVmdDogODc4cHg7IH1cblxuJGdub3Npc1RvcDogNzg5cHg7XG4uZ25vc2lzLTEgeyAgdG9wOiAkZ25vc2lzVG9wOyBsZWZ0OiA2MzBweDsgfVxuLmdub3Npcy0yIHsgIHRvcDogJGdub3Npc1RvcDsgbGVmdDogNjU4cHg7IH1cbi5nbm9zaXMtMyB7ICB0b3A6ICRnbm9zaXNUb3A7IGxlZnQ6IDY4NnB4OyB9XG4uZ25vc2lzLTQgeyAgdG9wOiAkZ25vc2lzVG9wOyBsZWZ0OiA3MTNweDsgfVxuLmdub3Npcy01IHsgIHRvcDogJGdub3Npc1RvcDsgbGVmdDogNzQwcHg7IH1cbi5nbm9zaXMtNiB7ICB0b3A6ICRnbm9zaXNUb3A7IGxlZnQ6IDc2OXB4OyB9XG4uZ25vc2lzLTcgeyAgdG9wOiAkZ25vc2lzVG9wOyBsZWZ0OiA3OTZweDsgfVxuLmdub3Npcy04IHsgIHRvcDogJGdub3Npc1RvcDsgbGVmdDogODI0cHg7IH1cbi5nbm9zaXMtOSB7ICB0b3A6ICRnbm9zaXNUb3A7IGxlZnQ6IDg1MXB4OyB9XG4uZ25vc2lzLTEwIHsgdG9wOiAkZ25vc2lzVG9wOyBsZWZ0OiA4NzhweDsgfVxuXG4kbW9yYWxpdHlMZWZ0OiA4NjhweDtcbi5tb3JhbGl0eS0xMCB7IHRvcDogODQycHg7IGxlZnQ6ICRtb3JhbGl0eUxlZnQ7IH1cbi5tb3JhbGl0eS05IHsgIHRvcDogODY1cHg7IGxlZnQ6ICRtb3JhbGl0eUxlZnQ7IH1cbi5tb3JhbGl0eS04IHsgIHRvcDogODg4cHg7IGxlZnQ6ICRtb3JhbGl0eUxlZnQ7IH1cbi5tb3JhbGl0eS03IHsgIHRvcDogOTEycHg7IGxlZnQ6ICRtb3JhbGl0eUxlZnQ7IH1cbi5tb3JhbGl0eS02IHsgIHRvcDogOTM1cHg7IGxlZnQ6ICRtb3JhbGl0eUxlZnQ7IH1cbi5tb3JhbGl0eS01IHsgIHRvcDogOTYwcHg7IGxlZnQ6ICRtb3JhbGl0eUxlZnQ7IH1cbi5tb3JhbGl0eS00IHsgIHRvcDogOTgycHg7IGxlZnQ6ICRtb3JhbGl0eUxlZnQ7IH1cbi5tb3JhbGl0eS0zIHsgIHRvcDogMTAwNnB4OyBsZWZ0OiAkbW9yYWxpdHlMZWZ0OyB9XG4ubW9yYWxpdHktMiB7ICB0b3A6IDEwMjlweDsgbGVmdDogJG1vcmFsaXR5TGVmdDsgfVxuLm1vcmFsaXR5LTEgeyAgdG9wOiAxMDUycHg7IGxlZnQ6ICRtb3JhbGl0eUxlZnQ7IH1cblxuJG1lcml0TGVmdDogMzI4cHg7XG4kbWVyaXQxTGVmdDogNTE2cHg7XG4kbWVyaXQyTGVmdDogNTM0cHg7XG4kbWVyaXQzTGVmdDogNTUxcHg7XG4kbWVyaXQ0TGVmdDogNTY5cHg7XG4kbWVyaXQ1TGVmdDogNTg2cHg7XG5pbnB1dFtuYW1lPW1lcml0LTFdIHsgdG9wOiA1ODRweDsgbGVmdDogJG1lcml0TGVmdDsgd2lkdGg6IDE3NnB4OyB9XG4ubWVyaXQtMS0xIHsgdG9wOiA1OTRweDsgbGVmdDogJG1lcml0MUxlZnQ7IH1cbi5tZXJpdC0xLTIgeyB0b3A6IDU5NHB4OyBsZWZ0OiAkbWVyaXQyTGVmdDsgfVxuLm1lcml0LTEtMyB7IHRvcDogNTk0cHg7IGxlZnQ6ICRtZXJpdDNMZWZ0OyB9XG4ubWVyaXQtMS00IHsgdG9wOiA1OTRweDsgbGVmdDogJG1lcml0NExlZnQ7IH1cbi5tZXJpdC0xLTUgeyB0b3A6IDU5NHB4OyBsZWZ0OiAkbWVyaXQ1TGVmdDsgfVxuaW5wdXRbbmFtZT1tZXJpdC0yXSB7IHRvcDogNjExcHg7IGxlZnQ6ICRtZXJpdExlZnQ7IHdpZHRoOiAxNzZweDsgfVxuLm1lcml0LTItMSB7IHRvcDogNjIxcHg7IGxlZnQ6ICRtZXJpdDFMZWZ0OyB9XG4ubWVyaXQtMi0yIHsgdG9wOiA2MjFweDsgbGVmdDogJG1lcml0MkxlZnQ7IH1cbi5tZXJpdC0yLTMgeyB0b3A6IDYyMXB4OyBsZWZ0OiAkbWVyaXQzTGVmdDsgfVxuLm1lcml0LTItNCB7IHRvcDogNjIxcHg7IGxlZnQ6ICRtZXJpdDRMZWZ0OyB9XG4ubWVyaXQtMi01IHsgdG9wOiA2MjFweDsgbGVmdDogJG1lcml0NUxlZnQ7IH1cbmlucHV0W25hbWU9bWVyaXQtM10geyB0b3A6IDYzOHB4OyBsZWZ0OiAkbWVyaXRMZWZ0OyB3aWR0aDogMTc2cHg7IH1cbi5tZXJpdC0zLTEgeyB0b3A6IDY0OXB4OyBsZWZ0OiAkbWVyaXQxTGVmdDsgfVxuLm1lcml0LTMtMiB7IHRvcDogNjQ5cHg7IGxlZnQ6ICRtZXJpdDJMZWZ0OyB9XG4ubWVyaXQtMy0zIHsgdG9wOiA2NDlweDsgbGVmdDogJG1lcml0M0xlZnQ7IH1cbi5tZXJpdC0zLTQgeyB0b3A6IDY0OXB4OyBsZWZ0OiAkbWVyaXQ0TGVmdDsgfVxuLm1lcml0LTMtNSB7IHRvcDogNjQ5cHg7IGxlZnQ6ICRtZXJpdDVMZWZ0OyB9XG5pbnB1dFtuYW1lPW1lcml0LTRdIHsgdG9wOiA2NjVweDsgbGVmdDogJG1lcml0TGVmdDsgd2lkdGg6IDE3NnB4OyB9XG4ubWVyaXQtNC0xIHsgdG9wOiA2NzZweDsgbGVmdDogJG1lcml0MUxlZnQ7IH1cbi5tZXJpdC00LTIgeyB0b3A6IDY3NnB4OyBsZWZ0OiAkbWVyaXQyTGVmdDsgfVxuLm1lcml0LTQtMyB7IHRvcDogNjc2cHg7IGxlZnQ6ICRtZXJpdDNMZWZ0OyB9XG4ubWVyaXQtNC00IHsgdG9wOiA2NzZweDsgbGVmdDogJG1lcml0NExlZnQ7IH1cbi5tZXJpdC00LTUgeyB0b3A6IDY3NnB4OyBsZWZ0OiAkbWVyaXQ1TGVmdDsgfVxuaW5wdXRbbmFtZT1tZXJpdC01XSB7IHRvcDogNjkycHg7IGxlZnQ6ICRtZXJpdExlZnQ7IHdpZHRoOiAxNzZweDsgfVxuLm1lcml0LTUtMSB7IHRvcDogNzAzcHg7IGxlZnQ6ICRtZXJpdDFMZWZ0OyB9XG4ubWVyaXQtNS0yIHsgdG9wOiA3MDNweDsgbGVmdDogJG1lcml0MkxlZnQ7IH1cbi5tZXJpdC01LTMgeyB0b3A6IDcwM3B4OyBsZWZ0OiAkbWVyaXQzTGVmdDsgfVxuLm1lcml0LTUtNCB7IHRvcDogNzAzcHg7IGxlZnQ6ICRtZXJpdDRMZWZ0OyB9XG4ubWVyaXQtNS01IHsgdG9wOiA3MDNweDsgbGVmdDogJG1lcml0NUxlZnQ7IH1cbmlucHV0W25hbWU9bWVyaXQtNl0geyB0b3A6IDcxOXB4OyBsZWZ0OiAkbWVyaXRMZWZ0OyB3aWR0aDogMTc2cHg7IH1cbi5tZXJpdC02LTEgeyB0b3A6IDcyOXB4OyBsZWZ0OiAkbWVyaXQxTGVmdDsgfVxuLm1lcml0LTYtMiB7IHRvcDogNzI5cHg7IGxlZnQ6ICRtZXJpdDJMZWZ0OyB9XG4ubWVyaXQtNi0zIHsgdG9wOiA3MjlweDsgbGVmdDogJG1lcml0M0xlZnQ7IH1cbi5tZXJpdC02LTQgeyB0b3A6IDcyOXB4OyBsZWZ0OiAkbWVyaXQ0TGVmdDsgfVxuLm1lcml0LTYtNSB7IHRvcDogNzI5cHg7IGxlZnQ6ICRtZXJpdDVMZWZ0OyB9XG5pbnB1dFtuYW1lPW1lcml0LTddIHsgdG9wOiA3NDZweDsgbGVmdDogJG1lcml0TGVmdDsgd2lkdGg6IDE3NnB4OyB9XG4ubWVyaXQtNy0xIHsgdG9wOiA3NTdweDsgbGVmdDogJG1lcml0MUxlZnQ7IH1cbi5tZXJpdC03LTIgeyB0b3A6IDc1N3B4OyBsZWZ0OiAkbWVyaXQyTGVmdDsgfVxuLm1lcml0LTctMyB7IHRvcDogNzU3cHg7IGxlZnQ6ICRtZXJpdDNMZWZ0OyB9XG4ubWVyaXQtNy00IHsgdG9wOiA3NTdweDsgbGVmdDogJG1lcml0NExlZnQ7IH1cbi5tZXJpdC03LTUgeyB0b3A6IDc1N3B4OyBsZWZ0OiAkbWVyaXQ1TGVmdDsgfVxuaW5wdXRbbmFtZT1tZXJpdC04XSB7IHRvcDogNzczcHg7IGxlZnQ6ICRtZXJpdExlZnQ7IHdpZHRoOiAxNzZweDsgfVxuLm1lcml0LTgtMSB7IHRvcDogNzg0cHg7IGxlZnQ6ICRtZXJpdDFMZWZ0OyB9XG4ubWVyaXQtOC0yIHsgdG9wOiA3ODRweDsgbGVmdDogJG1lcml0MkxlZnQ7IH1cbi5tZXJpdC04LTMgeyB0b3A6IDc4NHB4OyBsZWZ0OiAkbWVyaXQzTGVmdDsgfVxuLm1lcml0LTgtNCB7IHRvcDogNzg0cHg7IGxlZnQ6ICRtZXJpdDRMZWZ0OyB9XG4ubWVyaXQtOC01IHsgdG9wOiA3ODRweDsgbGVmdDogJG1lcml0NUxlZnQ7IH1cblxuaW5wdXRbbmFtZT1hcmNhbmEtZGVzdGluXSB7IHRvcDogMTA5M3B4OyBsZWZ0OiA0MjdweDsgd2lkdGg6IDc2cHg7IH1cbmlucHV0W25hbWU9YXJjYW5hLWVzcGFjZV0geyB0b3A6IDExMTVweDsgbGVmdDogNDI3cHg7IHdpZHRoOiA3NnB4OyB9XG5pbnB1dFtuYW1lPWFyY2FuYS1lc3ByaXRdIHsgdG9wOiAxMTM2cHg7IGxlZnQ6IDQyN3B4OyB3aWR0aDogNzZweDsgfVxuaW5wdXRbbmFtZT1hcmNhbmEtZm9yY2VzXSB7IHRvcDogMTE1N3B4OyBsZWZ0OiA0MjdweDsgd2lkdGg6IDc2cHg7IH1cbmlucHV0W25hbWU9YXJjYW5hLW1hdGllcmVdIHsgdG9wOiAxMTc5cHg7IGxlZnQ6IDQyN3B4OyB3aWR0aDogNzZweDsgfVxuaW5wdXRbbmFtZT1hcmNhbmEtbW9ydF0geyB0b3A6IDEyMDBweDsgbGVmdDogNDI3cHg7IHdpZHRoOiA3NnB4OyB9XG5pbnB1dFtuYW1lPWFyY2FuYS1wcmltZV0geyB0b3A6IDEyMjJweDsgbGVmdDogNDI3cHg7IHdpZHRoOiA3NnB4OyB9XG5pbnB1dFtuYW1lPWFyY2FuYS1wc3ljaGVdIHsgdG9wOiAxMjQzcHg7IGxlZnQ6IDQyN3B4OyB3aWR0aDogNzZweDsgfVxuaW5wdXRbbmFtZT1hcmNhbmEtdGVtcHNdIHsgdG9wOiAxMjY0cHg7IGxlZnQ6IDQyN3B4OyB3aWR0aDogNzZweDsgfVxuaW5wdXRbbmFtZT1hcmNhbmEtdmllXSB7IHRvcDogMTI4NXB4OyBsZWZ0OiA0MjdweDsgd2lkdGg6IDc2cHg7IH1cblxuaW5wdXRbbmFtZT1mbGF3LTFdIHsgdG9wOiA4NDFweDsgbGVmdDogMzI4cHg7IHdpZHRoOiAxNzZweDsgfVxuaW5wdXRbbmFtZT1mbGF3LTJdIHsgdG9wOiA4NjlweDsgbGVmdDogMzI4cHg7IHdpZHRoOiAxNzZweDsgfVxuaW5wdXRbbmFtZT1mbGF3LTNdIHsgdG9wOiA4OThweDsgbGVmdDogMzI4cHg7IHdpZHRoOiAxNzZweDsgfVxuXG5pbnB1dFtuYW1lPXNpemVdIHsgdG9wOiA5MjVweDsgbGVmdDogMzgxcHg7IHdpZHRoOiAxNzZweDsgfVxuaW5wdXRbbmFtZT1kZWZlbnNlXSB7IHRvcDogOTUzcHg7IGxlZnQ6IDM5OXB4OyB3aWR0aDogMTUxcHg7IH1cbmlucHV0W25hbWU9aW5pdGlhdGl2ZV0geyB0b3A6IDk4MHB4OyBsZWZ0OiA0MDlweDsgd2lkdGg6IDExM3B4OyB9XG5pbnB1dFtuYW1lPXNwZWVkXSB7IHRvcDogMTAwN3B4OyBsZWZ0OiAzOTZweDsgd2lkdGg6IDE2N3B4OyB9XG5cbmlucHV0W25hbWU9bWFuYS1wZXItdHVybl0geyB0b3A6IDczOXB4OyBsZWZ0OiA3NjZweDsgd2lkdGg6IDU2cHg7IH1cblxuaW5wdXRbbmFtZT1leHBlcmllbmNlXSB7IHRvcDogMjYyNnB4OyBsZWZ0OiAxNDlweDsgd2lkdGg6IDc1cHg7IGZvbnQtc2l6ZTogMjVweDsgfVxuaW5wdXRbbmFtZT1leHBlcmllbmNlLWFyY2FuYV0geyB0b3A6IDI3NjVweDsgbGVmdDogMTQ5cHg7IHdpZHRoOiA3NXB4OyBmb250LXNpemU6IDI1cHg7IH1cblxuLmxpLWVtcHR5IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG5pbnB1dFtuYW1lPXJvdXRpbmVfMV0geyB0b3A6IDE3MzRweDsgbGVmdDogMzM5cHg7IHdpZHRoOiA1NjVweDsgfVxuaW5wdXRbbmFtZT1yb3V0aW5lXzJdIHsgdG9wOiAxNzU5cHg7IGxlZnQ6IDMzOXB4OyB3aWR0aDogNTY1cHg7IH1cbmlucHV0W25hbWU9cm91dGluZV8zXSB7IHRvcDogMTc4NHB4OyBsZWZ0OiAzMzlweDsgd2lkdGg6IDU2NXB4OyB9XG5pbnB1dFtuYW1lPXJvdXRpbmVfNF0geyB0b3A6IDE4MTBweDsgbGVmdDogMzM5cHg7IHdpZHRoOiA1NjVweDsgfVxuaW5wdXRbbmFtZT1yb3V0aW5lXzVdIHsgdG9wOiAxODM0cHg7IGxlZnQ6IDMzOXB4OyB3aWR0aDogNTY1cHg7IH1cbmlucHV0W25hbWU9cm91dGluZV82XSB7IHRvcDogMTg1OXB4OyBsZWZ0OiAzMzlweDsgd2lkdGg6IDU2NXB4OyB9XG5pbnB1dFtuYW1lPXJvdXRpbmVfN10geyB0b3A6IDE4ODVweDsgbGVmdDogMzM5cHg7IHdpZHRoOiA1NjVweDsgfVxuaW5wdXRbbmFtZT1yb3V0aW5lXzhdIHsgdG9wOiAxOTA5cHg7IGxlZnQ6IDMzOXB4OyB3aWR0aDogNTY1cHg7IH1cbmlucHV0W25hbWU9cm91dGluZV85XSB7IHRvcDogMTkzNXB4OyBsZWZ0OiAzMzlweDsgd2lkdGg6IDU2NXB4OyB9XG5pbnB1dFtuYW1lPXJvdXRpbmVfMTBdIHsgdG9wOiAxOTYxcHg7IGxlZnQ6IDMzOXB4OyB3aWR0aDogNTY1cHg7IH1cbmlucHV0W25hbWU9cm91dGluZV8xMV0geyB0b3A6IDE5ODVweDsgbGVmdDogMzM5cHg7IHdpZHRoOiA1NjVweDsgfVxuaW5wdXRbbmFtZT1yb3V0aW5lXzEyXSB7IHRvcDogMjAxMHB4OyBsZWZ0OiAzMzlweDsgd2lkdGg6IDU2NXB4OyB9XG5pbnB1dFtuYW1lPXJvdXRpbmVfMTNdIHsgdG9wOiAyMDM2cHg7IGxlZnQ6IDMzOXB4OyB3aWR0aDogNTY1cHg7IH1cbmlucHV0W25hbWU9cm91dGluZV8xNF0geyB0b3A6IDIwNjBweDsgbGVmdDogMzM5cHg7IHdpZHRoOiA1NjVweDsgfVxuXG5pbnB1dFtuYW1lPXdlYXBvbl8xXSB7IHRvcDogMjEzOXB4OyBsZWZ0OiAzMzlweDsgd2lkdGg6IDU2NXB4OyB9XG5pbnB1dFtuYW1lPXdlYXBvbl8yXSB7IHRvcDogMjE2NHB4OyBsZWZ0OiAzMzlweDsgd2lkdGg6IDU2NXB4OyB9XG5pbnB1dFtuYW1lPWVxdWlwZW1lbnRfMV0geyB0b3A6IDI0MDhweDsgbGVmdDogMzM5cHg7IHdpZHRoOiA1NjVweDsgfVxuXG5pbnB1dFtuYW1lPW1vcmFsaXR5XzBdIHsgdG9wOiAxMDQwcHg7IGxlZnQ6IDY0OHB4OyB3aWR0aDogMjA1cHg7fVxuaW5wdXRbbmFtZT1tb3JhbGl0eV8xXSB7IHRvcDogMTAxN3B4OyBsZWZ0OiA2NDhweDsgd2lkdGg6IDIwNXB4O31cbmlucHV0W25hbWU9bW9yYWxpdHlfMl0geyB0b3A6IDk5NHB4OyBsZWZ0OiA2NDhweDsgd2lkdGg6IDIwNXB4O31cbmlucHV0W25hbWU9bW9yYWxpdHlfM10geyB0b3A6IDk3MHB4OyBsZWZ0OiA2NDhweDsgd2lkdGg6IDIwNXB4O31cbmlucHV0W25hbWU9bW9yYWxpdHlfNF0geyB0b3A6IDk0NnB4OyBsZWZ0OiA2NDhweDsgd2lkdGg6IDIwNXB4O31cbmlucHV0W25hbWU9bW9yYWxpdHlfNV0geyB0b3A6IDkyM3B4OyBsZWZ0OiA2NDhweDsgd2lkdGg6IDIwNXB4O31cbmlucHV0W25hbWU9bW9yYWxpdHlfNl0geyB0b3A6IDg5OXB4OyBsZWZ0OiA2NDhweDsgd2lkdGg6IDIwNXB4O31cbmlucHV0W25hbWU9bW9yYWxpdHlfN10geyB0b3A6IDg3NnB4OyBsZWZ0OiA2NDhweDsgd2lkdGg6IDIwNXB4O31cbmlucHV0W25hbWU9bW9yYWxpdHlfOF0geyB0b3A6IDg1M3B4OyBsZWZ0OiA2NDhweDsgd2lkdGg6IDIwNXB4O31cbmlucHV0W25hbWU9bW9yYWxpdHlfOV0geyB0b3A6IDgzMHB4OyBsZWZ0OiA2NThweDsgd2lkdGg6IDE5NXB4O31cbiIsIi5kZWJ1ZyBpbnB1dCxcbi5kZWJ1ZyBzZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4uZGVidWcgLmRvdDpub3QoLmZpbGxlZCksXG4uZGVidWcgLnNxdWFyZTpub3QoLmZpbGxlZCkge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5zaGVldC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaGVldCB7XG4gIHdpZHRoOiA5NzBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5zY3JvbGxhYmxlIHtcbiAgICBoZWlnaHQ6IDI5M3B4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbn1cbmlucHV0LFxuc2VsZWN0IHtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE0MHB4O1xuICBwYWRkaW5nOiAwIDJweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pbnB1dDpob3ZlcixcbnNlbGVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaW5wdXQge1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbnNlbGVjdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG5pbnB1dC5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbi5kb3Qge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTFweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kb3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uZG90LmZpbGxlZCB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4uZG90LmhlYWx0aCxcbi5kb3Qud2lsbHBvd2VyLFxuLmRvdC5nbm9zaXMge1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uZG90LmZhdm9yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4uc3F1YXJlIHtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNxdWFyZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5zcXVhcmUuZmlsbGVkIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG4uc3F1YXJlLndoaXRlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogLTNweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjFweDtcbn1cblxuLnNxdWFyZS5yb3RlIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuaW5wdXRbbmFtZT1uYW1lXSB7XG4gIHRvcDogMjE1cHg7XG4gIGxlZnQ6IDE3NXB4O1xuICB3aWR0aDogMjE5cHg7XG59XG5cbmlucHV0W25hbWU9cGxheWVyXSB7XG4gIHRvcDogMjU1cHg7XG4gIGxlZnQ6IDE3NXB4O1xuICB3aWR0aDogMjE5cHg7XG59XG5cbmlucHV0W25hbWU9Y2hyb25pY2xlXSB7XG4gIHRvcDogMjk1cHg7XG4gIGxlZnQ6IDE3NXB4O1xuICB3aWR0aDogMjE5cHg7XG59XG5cbmlucHV0W25hbWU9Y29uY2VwdF0ge1xuICB0b3A6IDIxNXB4O1xuICBsZWZ0OiA1MDNweDtcbiAgd2lkdGg6IDE2NHB4O1xufVxuXG5zZWxlY3RbbmFtZT12aXJ0dWVdIHtcbiAgdG9wOiAyNTVweDtcbiAgbGVmdDogNTAzcHg7XG4gIHdpZHRoOiAxNjRweDtcbn1cblxuc2VsZWN0W25hbWU9dmljZV0ge1xuICB0b3A6IDI5NXB4O1xuICBsZWZ0OiA1MDNweDtcbiAgd2lkdGg6IDE2NHB4O1xufVxuXG5zZWxlY3RbbmFtZT1wYXRoXSB7XG4gIHRvcDogMjE1cHg7XG4gIGxlZnQ6IDc3M3B4O1xuICB3aWR0aDogMTcwcHg7XG59XG5cbnNlbGVjdFtuYW1lPW9yZGVyXSB7XG4gIHRvcDogMjU1cHg7XG4gIGxlZnQ6IDc3M3B4O1xuICB3aWR0aDogMTcwcHg7XG59XG5cbmlucHV0W25hbWU9Y2FiYWxdIHtcbiAgdG9wOiAyOTVweDtcbiAgbGVmdDogNzczcHg7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuLmludGVsbGlnZW5jZS0yIHtcbiAgdG9wOiA0MDFweDtcbiAgbGVmdDogMzI1cHg7XG59XG5cbi5pbnRlbGxpZ2VuY2UtMyB7XG4gIHRvcDogNDAxcHg7XG4gIGxlZnQ6IDM0MnB4O1xufVxuXG4uaW50ZWxsaWdlbmNlLTQge1xuICB0b3A6IDQwMXB4O1xuICBsZWZ0OiAzNThweDtcbn1cblxuLmludGVsbGlnZW5jZS01IHtcbiAgdG9wOiA0MDFweDtcbiAgbGVmdDogMzc1cHg7XG59XG5cbi53aXRzLTIge1xuICB0b3A6IDQzN3B4O1xuICBsZWZ0OiAzMjVweDtcbn1cblxuLndpdHMtMyB7XG4gIHRvcDogNDM3cHg7XG4gIGxlZnQ6IDM0MnB4O1xufVxuXG4ud2l0cy00IHtcbiAgdG9wOiA0MzdweDtcbiAgbGVmdDogMzU4cHg7XG59XG5cbi53aXRzLTUge1xuICB0b3A6IDQzN3B4O1xuICBsZWZ0OiAzNzVweDtcbn1cblxuLnJlc29sdmUtMiB7XG4gIHRvcDogNDc0cHg7XG4gIGxlZnQ6IDMyNXB4O1xufVxuXG4ucmVzb2x2ZS0zIHtcbiAgdG9wOiA0NzRweDtcbiAgbGVmdDogMzQycHg7XG59XG5cbi5yZXNvbHZlLTQge1xuICB0b3A6IDQ3NHB4O1xuICBsZWZ0OiAzNThweDtcbn1cblxuLnJlc29sdmUtNSB7XG4gIHRvcDogNDc0cHg7XG4gIGxlZnQ6IDM3NXB4O1xufVxuXG4uc3RyZW5ndGgtMiB7XG4gIHRvcDogNDAxcHg7XG4gIGxlZnQ6IDU2OHB4O1xufVxuXG4uc3RyZW5ndGgtMyB7XG4gIHRvcDogNDAxcHg7XG4gIGxlZnQ6IDU4NXB4O1xufVxuXG4uc3RyZW5ndGgtNCB7XG4gIHRvcDogNDAxcHg7XG4gIGxlZnQ6IDYwMnB4O1xufVxuXG4uc3RyZW5ndGgtNSB7XG4gIHRvcDogNDAxcHg7XG4gIGxlZnQ6IDYxOHB4O1xufVxuXG4uZGV4dGVyaXR5LTIge1xuICB0b3A6IDQzN3B4O1xuICBsZWZ0OiA1NjhweDtcbn1cblxuLmRleHRlcml0eS0zIHtcbiAgdG9wOiA0MzdweDtcbiAgbGVmdDogNTg1cHg7XG59XG5cbi5kZXh0ZXJpdHktNCB7XG4gIHRvcDogNDM3cHg7XG4gIGxlZnQ6IDYwMnB4O1xufVxuXG4uZGV4dGVyaXR5LTUge1xuICB0b3A6IDQzN3B4O1xuICBsZWZ0OiA2MThweDtcbn1cblxuLnN0YW1pbmEtMiB7XG4gIHRvcDogNDc0cHg7XG4gIGxlZnQ6IDU2OHB4O1xufVxuXG4uc3RhbWluYS0zIHtcbiAgdG9wOiA0NzRweDtcbiAgbGVmdDogNTg1cHg7XG59XG5cbi5zdGFtaW5hLTQge1xuICB0b3A6IDQ3NHB4O1xuICBsZWZ0OiA2MDJweDtcbn1cblxuLnN0YW1pbmEtNSB7XG4gIHRvcDogNDc0cHg7XG4gIGxlZnQ6IDYxOHB4O1xufVxuXG4ucHJlc2VuY2UtMiB7XG4gIHRvcDogNDAxcHg7XG4gIGxlZnQ6IDgzNXB4O1xufVxuXG4ucHJlc2VuY2UtMyB7XG4gIHRvcDogNDAxcHg7XG4gIGxlZnQ6IDg1MXB4O1xufVxuXG4ucHJlc2VuY2UtNCB7XG4gIHRvcDogNDAxcHg7XG4gIGxlZnQ6IDg2OHB4O1xufVxuXG4ucHJlc2VuY2UtNSB7XG4gIHRvcDogNDAxcHg7XG4gIGxlZnQ6IDg4NXB4O1xufVxuXG4ubWFuaXB1bGF0aW9uLTIge1xuICB0b3A6IDQzN3B4O1xuICBsZWZ0OiA4MzVweDtcbn1cblxuLm1hbmlwdWxhdGlvbi0zIHtcbiAgdG9wOiA0MzdweDtcbiAgbGVmdDogODUxcHg7XG59XG5cbi5tYW5pcHVsYXRpb24tNCB7XG4gIHRvcDogNDM3cHg7XG4gIGxlZnQ6IDg2OHB4O1xufVxuXG4ubWFuaXB1bGF0aW9uLTUge1xuICB0b3A6IDQzN3B4O1xuICBsZWZ0OiA4ODVweDtcbn1cblxuLmNvbXBvc3VyZS0yIHtcbiAgdG9wOiA0NzRweDtcbiAgbGVmdDogODM1cHg7XG59XG5cbi5jb21wb3N1cmUtMyB7XG4gIHRvcDogNDc0cHg7XG4gIGxlZnQ6IDg1MXB4O1xufVxuXG4uY29tcG9zdXJlLTQge1xuICB0b3A6IDQ3NHB4O1xuICBsZWZ0OiA4NjhweDtcbn1cblxuLmNvbXBvc3VyZS01IHtcbiAgdG9wOiA0NzRweDtcbiAgbGVmdDogODg1cHg7XG59XG5cbi5jcmFmdHMtcm90ZSB7XG4gIHRvcDogNTkwcHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5jcmFmdHMtMSB7XG4gIHRvcDogNTk1cHg7XG4gIGxlZnQ6IDIxMnB4O1xufVxuXG4uY3JhZnRzLTIge1xuICB0b3A6IDU5NXB4O1xuICBsZWZ0OiAyMjlweDtcbn1cblxuLmNyYWZ0cy0zIHtcbiAgdG9wOiA1OTVweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5jcmFmdHMtNCB7XG4gIHRvcDogNTk1cHg7XG4gIGxlZnQ6IDI2NHB4O1xufVxuXG4uY3JhZnRzLTUge1xuICB0b3A6IDU5NXB4O1xuICBsZWZ0OiAyODFweDtcbn1cblxuLmFjYWRlbWljcy1yb3RlIHtcbiAgdG9wOiA2MTdweDtcbiAgbGVmdDogNTFweDtcbn1cblxuLmFjYWRlbWljcy0xIHtcbiAgdG9wOiA2MjJweDtcbiAgbGVmdDogMjEycHg7XG59XG5cbi5hY2FkZW1pY3MtMiB7XG4gIHRvcDogNjIycHg7XG4gIGxlZnQ6IDIyOXB4O1xufVxuXG4uYWNhZGVtaWNzLTMge1xuICB0b3A6IDYyMnB4O1xuICBsZWZ0OiAyNDZweDtcbn1cblxuLmFjYWRlbWljcy00IHtcbiAgdG9wOiA2MjJweDtcbiAgbGVmdDogMjY0cHg7XG59XG5cbi5hY2FkZW1pY3MtNSB7XG4gIHRvcDogNjIycHg7XG4gIGxlZnQ6IDI4MXB4O1xufVxuXG4uY29tcHV0ZXItcm90ZSB7XG4gIHRvcDogNjQ0cHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5jb21wdXRlci0xIHtcbiAgdG9wOiA2NDlweDtcbiAgbGVmdDogMjEycHg7XG59XG5cbi5jb21wdXRlci0yIHtcbiAgdG9wOiA2NDlweDtcbiAgbGVmdDogMjI5cHg7XG59XG5cbi5jb21wdXRlci0zIHtcbiAgdG9wOiA2NDlweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5jb21wdXRlci00IHtcbiAgdG9wOiA2NDlweDtcbiAgbGVmdDogMjY0cHg7XG59XG5cbi5jb21wdXRlci01IHtcbiAgdG9wOiA2NDlweDtcbiAgbGVmdDogMjgxcHg7XG59XG5cbi5pbnZlc3RpZ2F0aW9uLXJvdGUge1xuICB0b3A6IDY3MXB4O1xuICBsZWZ0OiA1MXB4O1xufVxuXG4uaW52ZXN0aWdhdGlvbi0xIHtcbiAgdG9wOiA2NzZweDtcbiAgbGVmdDogMjEycHg7XG59XG5cbi5pbnZlc3RpZ2F0aW9uLTIge1xuICB0b3A6IDY3NnB4O1xuICBsZWZ0OiAyMjlweDtcbn1cblxuLmludmVzdGlnYXRpb24tMyB7XG4gIHRvcDogNjc2cHg7XG4gIGxlZnQ6IDI0NnB4O1xufVxuXG4uaW52ZXN0aWdhdGlvbi00IHtcbiAgdG9wOiA2NzZweDtcbiAgbGVmdDogMjY0cHg7XG59XG5cbi5pbnZlc3RpZ2F0aW9uLTUge1xuICB0b3A6IDY3NnB4O1xuICBsZWZ0OiAyODFweDtcbn1cblxuLm1lZGljaW5lLXJvdGUge1xuICB0b3A6IDY5N3B4O1xuICBsZWZ0OiA1MXB4O1xufVxuXG4ubWVkaWNpbmUtMSB7XG4gIHRvcDogNzAzcHg7XG4gIGxlZnQ6IDIxMnB4O1xufVxuXG4ubWVkaWNpbmUtMiB7XG4gIHRvcDogNzAzcHg7XG4gIGxlZnQ6IDIyOXB4O1xufVxuXG4ubWVkaWNpbmUtMyB7XG4gIHRvcDogNzAzcHg7XG4gIGxlZnQ6IDI0NnB4O1xufVxuXG4ubWVkaWNpbmUtNCB7XG4gIHRvcDogNzAzcHg7XG4gIGxlZnQ6IDI2NHB4O1xufVxuXG4ubWVkaWNpbmUtNSB7XG4gIHRvcDogNzAzcHg7XG4gIGxlZnQ6IDI4MXB4O1xufVxuXG4ub2NjdWx0LXJvdGUge1xuICB0b3A6IDcyM3B4O1xuICBsZWZ0OiA1MXB4O1xufVxuXG4ub2NjdWx0LTEge1xuICB0b3A6IDczMHB4O1xuICBsZWZ0OiAyMTJweDtcbn1cblxuLm9jY3VsdC0yIHtcbiAgdG9wOiA3MzBweDtcbiAgbGVmdDogMjI5cHg7XG59XG5cbi5vY2N1bHQtMyB7XG4gIHRvcDogNzMwcHg7XG4gIGxlZnQ6IDI0NnB4O1xufVxuXG4ub2NjdWx0LTQge1xuICB0b3A6IDczMHB4O1xuICBsZWZ0OiAyNjRweDtcbn1cblxuLm9jY3VsdC01IHtcbiAgdG9wOiA3MzBweDtcbiAgbGVmdDogMjgxcHg7XG59XG5cbi5wb2xpdGljcy1yb3RlIHtcbiAgdG9wOiA3NTFweDtcbiAgbGVmdDogNTFweDtcbn1cblxuLnBvbGl0aWNzLTEge1xuICB0b3A6IDc1N3B4O1xuICBsZWZ0OiAyMTJweDtcbn1cblxuLnBvbGl0aWNzLTIge1xuICB0b3A6IDc1N3B4O1xuICBsZWZ0OiAyMjlweDtcbn1cblxuLnBvbGl0aWNzLTMge1xuICB0b3A6IDc1N3B4O1xuICBsZWZ0OiAyNDZweDtcbn1cblxuLnBvbGl0aWNzLTQge1xuICB0b3A6IDc1N3B4O1xuICBsZWZ0OiAyNjRweDtcbn1cblxuLnBvbGl0aWNzLTUge1xuICB0b3A6IDc1N3B4O1xuICBsZWZ0OiAyODFweDtcbn1cblxuLnNjaWVuY2Utcm90ZSB7XG4gIHRvcDogNzc4cHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5zY2llbmNlLTEge1xuICB0b3A6IDc4M3B4O1xuICBsZWZ0OiAyMTJweDtcbn1cblxuLnNjaWVuY2UtMiB7XG4gIHRvcDogNzgzcHg7XG4gIGxlZnQ6IDIyOXB4O1xufVxuXG4uc2NpZW5jZS0zIHtcbiAgdG9wOiA3ODNweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5zY2llbmNlLTQge1xuICB0b3A6IDc4M3B4O1xuICBsZWZ0OiAyNjRweDtcbn1cblxuLnNjaWVuY2UtNSB7XG4gIHRvcDogNzgzcHg7XG4gIGxlZnQ6IDI4MXB4O1xufVxuXG4uZmlyZWFybXMtcm90ZSB7XG4gIHRvcDogODYwcHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5maXJlYXJtcy0xIHtcbiAgdG9wOiA4NjNweDtcbiAgbGVmdDogMjEycHg7XG59XG5cbi5maXJlYXJtcy0yIHtcbiAgdG9wOiA4NjNweDtcbiAgbGVmdDogMjI5cHg7XG59XG5cbi5maXJlYXJtcy0zIHtcbiAgdG9wOiA4NjNweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5maXJlYXJtcy00IHtcbiAgdG9wOiA4NjNweDtcbiAgbGVmdDogMjY0cHg7XG59XG5cbi5maXJlYXJtcy01IHtcbiAgdG9wOiA4NjNweDtcbiAgbGVmdDogMjgxcHg7XG59XG5cbi53ZWFwb25yeS1yb3RlIHtcbiAgdG9wOiA4ODdweDtcbiAgbGVmdDogNTFweDtcbn1cblxuLndlYXBvbnJ5LTEge1xuICB0b3A6IDg5MHB4O1xuICBsZWZ0OiAyMTJweDtcbn1cblxuLndlYXBvbnJ5LTIge1xuICB0b3A6IDg5MHB4O1xuICBsZWZ0OiAyMjlweDtcbn1cblxuLndlYXBvbnJ5LTMge1xuICB0b3A6IDg5MHB4O1xuICBsZWZ0OiAyNDZweDtcbn1cblxuLndlYXBvbnJ5LTQge1xuICB0b3A6IDg5MHB4O1xuICBsZWZ0OiAyNjRweDtcbn1cblxuLndlYXBvbnJ5LTUge1xuICB0b3A6IDg5MHB4O1xuICBsZWZ0OiAyODFweDtcbn1cblxuLmF0aGxldGljcy1yb3RlIHtcbiAgdG9wOiA5MTNweDtcbiAgbGVmdDogNTFweDtcbn1cblxuLmF0aGxldGljcy0xIHtcbiAgdG9wOiA5MTdweDtcbiAgbGVmdDogMjEycHg7XG59XG5cbi5hdGhsZXRpY3MtMiB7XG4gIHRvcDogOTE3cHg7XG4gIGxlZnQ6IDIyOXB4O1xufVxuXG4uYXRobGV0aWNzLTMge1xuICB0b3A6IDkxN3B4O1xuICBsZWZ0OiAyNDZweDtcbn1cblxuLmF0aGxldGljcy00IHtcbiAgdG9wOiA5MTdweDtcbiAgbGVmdDogMjY0cHg7XG59XG5cbi5hdGhsZXRpY3MtNSB7XG4gIHRvcDogOTE3cHg7XG4gIGxlZnQ6IDI4MXB4O1xufVxuXG4uYnJhd2wtcm90ZSB7XG4gIHRvcDogOTQxcHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5icmF3bC0xIHtcbiAgdG9wOiA5NDRweDtcbiAgbGVmdDogMjEycHg7XG59XG5cbi5icmF3bC0yIHtcbiAgdG9wOiA5NDRweDtcbiAgbGVmdDogMjI5cHg7XG59XG5cbi5icmF3bC0zIHtcbiAgdG9wOiA5NDRweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5icmF3bC00IHtcbiAgdG9wOiA5NDRweDtcbiAgbGVmdDogMjY0cHg7XG59XG5cbi5icmF3bC01IHtcbiAgdG9wOiA5NDRweDtcbiAgbGVmdDogMjgxcHg7XG59XG5cbi5kcml2ZS1yb3RlIHtcbiAgdG9wOiA5NjdweDtcbiAgbGVmdDogNTFweDtcbn1cblxuLmRyaXZlLTEge1xuICB0b3A6IDk3MXB4O1xuICBsZWZ0OiAyMTJweDtcbn1cblxuLmRyaXZlLTIge1xuICB0b3A6IDk3MXB4O1xuICBsZWZ0OiAyMjlweDtcbn1cblxuLmRyaXZlLTMge1xuICB0b3A6IDk3MXB4O1xuICBsZWZ0OiAyNDZweDtcbn1cblxuLmRyaXZlLTQge1xuICB0b3A6IDk3MXB4O1xuICBsZWZ0OiAyNjRweDtcbn1cblxuLmRyaXZlLTUge1xuICB0b3A6IDk3MXB4O1xuICBsZWZ0OiAyODFweDtcbn1cblxuLnN0ZWFsdGgtcm90ZSB7XG4gIHRvcDogOTk0cHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5zdGVhbHRoLTEge1xuICB0b3A6IDk5OXB4O1xuICBsZWZ0OiAyMTJweDtcbn1cblxuLnN0ZWFsdGgtMiB7XG4gIHRvcDogOTk5cHg7XG4gIGxlZnQ6IDIyOXB4O1xufVxuXG4uc3RlYWx0aC0zIHtcbiAgdG9wOiA5OTlweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5zdGVhbHRoLTQge1xuICB0b3A6IDk5OXB4O1xuICBsZWZ0OiAyNjRweDtcbn1cblxuLnN0ZWFsdGgtNSB7XG4gIHRvcDogOTk5cHg7XG4gIGxlZnQ6IDI4MXB4O1xufVxuXG4ubGFyY2VueS1yb3RlIHtcbiAgdG9wOiAxMDIxcHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5sYXJjZW55LTEge1xuICB0b3A6IDEwMjZweDtcbiAgbGVmdDogMjEycHg7XG59XG5cbi5sYXJjZW55LTIge1xuICB0b3A6IDEwMjZweDtcbiAgbGVmdDogMjI5cHg7XG59XG5cbi5sYXJjZW55LTMge1xuICB0b3A6IDEwMjZweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5sYXJjZW55LTQge1xuICB0b3A6IDEwMjZweDtcbiAgbGVmdDogMjY0cHg7XG59XG5cbi5sYXJjZW55LTUge1xuICB0b3A6IDEwMjZweDtcbiAgbGVmdDogMjgxcHg7XG59XG5cbi5zdXJ2aXZhbC1yb3RlIHtcbiAgdG9wOiAxMDQ4cHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5zdXJ2aXZhbC0xIHtcbiAgdG9wOiAxMDUycHg7XG4gIGxlZnQ6IDIxMnB4O1xufVxuXG4uc3Vydml2YWwtMiB7XG4gIHRvcDogMTA1MnB4O1xuICBsZWZ0OiAyMjlweDtcbn1cblxuLnN1cnZpdmFsLTMge1xuICB0b3A6IDEwNTJweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5zdXJ2aXZhbC00IHtcbiAgdG9wOiAxMDUycHg7XG4gIGxlZnQ6IDI2NHB4O1xufVxuXG4uc3Vydml2YWwtNSB7XG4gIHRvcDogMTA1MnB4O1xuICBsZWZ0OiAyODFweDtcbn1cblxuLmFuaW1hbGtlbi1yb3RlIHtcbiAgdG9wOiAxMTA5cHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5hbmltYWxrZW4tMSB7XG4gIHRvcDogMTExM3B4O1xuICBsZWZ0OiAyMTJweDtcbn1cblxuLmFuaW1hbGtlbi0yIHtcbiAgdG9wOiAxMTEzcHg7XG4gIGxlZnQ6IDIyOXB4O1xufVxuXG4uYW5pbWFsa2VuLTMge1xuICB0b3A6IDExMTNweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5hbmltYWxrZW4tNCB7XG4gIHRvcDogMTExM3B4O1xuICBsZWZ0OiAyNjRweDtcbn1cblxuLmFuaW1hbGtlbi01IHtcbiAgdG9wOiAxMTEzcHg7XG4gIGxlZnQ6IDI4MXB4O1xufVxuXG4uZW1wYXRoeS1yb3RlIHtcbiAgdG9wOiAxMTM1cHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5lbXBhdGh5LTEge1xuICB0b3A6IDExNDBweDtcbiAgbGVmdDogMjEycHg7XG59XG5cbi5lbXBhdGh5LTIge1xuICB0b3A6IDExNDBweDtcbiAgbGVmdDogMjI5cHg7XG59XG5cbi5lbXBhdGh5LTMge1xuICB0b3A6IDExNDBweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5lbXBhdGh5LTQge1xuICB0b3A6IDExNDBweDtcbiAgbGVmdDogMjY0cHg7XG59XG5cbi5lbXBhdGh5LTUge1xuICB0b3A6IDExNDBweDtcbiAgbGVmdDogMjgxcHg7XG59XG5cbi5leHByZXNzaW9uLXJvdGUge1xuICB0b3A6IDExNjJweDtcbiAgbGVmdDogNTFweDtcbn1cblxuLmV4cHJlc3Npb24tMSB7XG4gIHRvcDogMTE2N3B4O1xuICBsZWZ0OiAyMTJweDtcbn1cblxuLmV4cHJlc3Npb24tMiB7XG4gIHRvcDogMTE2N3B4O1xuICBsZWZ0OiAyMjlweDtcbn1cblxuLmV4cHJlc3Npb24tMyB7XG4gIHRvcDogMTE2N3B4O1xuICBsZWZ0OiAyNDZweDtcbn1cblxuLmV4cHJlc3Npb24tNCB7XG4gIHRvcDogMTE2N3B4O1xuICBsZWZ0OiAyNjRweDtcbn1cblxuLmV4cHJlc3Npb24tNSB7XG4gIHRvcDogMTE2N3B4O1xuICBsZWZ0OiAyODFweDtcbn1cblxuLmludGltaWRhdGlvbi1yb3RlIHtcbiAgdG9wOiAxMTkwcHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5pbnRpbWlkYXRpb24tMSB7XG4gIHRvcDogMTE5NXB4O1xuICBsZWZ0OiAyMTJweDtcbn1cblxuLmludGltaWRhdGlvbi0yIHtcbiAgdG9wOiAxMTk1cHg7XG4gIGxlZnQ6IDIyOXB4O1xufVxuXG4uaW50aW1pZGF0aW9uLTMge1xuICB0b3A6IDExOTVweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5pbnRpbWlkYXRpb24tNCB7XG4gIHRvcDogMTE5NXB4O1xuICBsZWZ0OiAyNjRweDtcbn1cblxuLmludGltaWRhdGlvbi01IHtcbiAgdG9wOiAxMTk1cHg7XG4gIGxlZnQ6IDI4MXB4O1xufVxuXG4ucGVyc3Vhc2lvbi1yb3RlIHtcbiAgdG9wOiAxMjE3cHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5wZXJzdWFzaW9uLTEge1xuICB0b3A6IDEyMjJweDtcbiAgbGVmdDogMjEycHg7XG59XG5cbi5wZXJzdWFzaW9uLTIge1xuICB0b3A6IDEyMjJweDtcbiAgbGVmdDogMjI5cHg7XG59XG5cbi5wZXJzdWFzaW9uLTMge1xuICB0b3A6IDEyMjJweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5wZXJzdWFzaW9uLTQge1xuICB0b3A6IDEyMjJweDtcbiAgbGVmdDogMjY0cHg7XG59XG5cbi5wZXJzdWFzaW9uLTUge1xuICB0b3A6IDEyMjJweDtcbiAgbGVmdDogMjgxcHg7XG59XG5cbi5zb2NpYWxpemUtcm90ZSB7XG4gIHRvcDogMTI0M3B4O1xuICBsZWZ0OiA1MXB4O1xufVxuXG4uc29jaWFsaXplLTEge1xuICB0b3A6IDEyNDhweDtcbiAgbGVmdDogMjEycHg7XG59XG5cbi5zb2NpYWxpemUtMiB7XG4gIHRvcDogMTI0OHB4O1xuICBsZWZ0OiAyMjlweDtcbn1cblxuLnNvY2lhbGl6ZS0zIHtcbiAgdG9wOiAxMjQ4cHg7XG4gIGxlZnQ6IDI0NnB4O1xufVxuXG4uc29jaWFsaXplLTQge1xuICB0b3A6IDEyNDhweDtcbiAgbGVmdDogMjY0cHg7XG59XG5cbi5zb2NpYWxpemUtNSB7XG4gIHRvcDogMTI0OHB4O1xuICBsZWZ0OiAyODFweDtcbn1cblxuLnN0cmVldHdpc2Utcm90ZSB7XG4gIHRvcDogMTI2OXB4O1xuICBsZWZ0OiA1MXB4O1xufVxuXG4uc3RyZWV0d2lzZS0xIHtcbiAgdG9wOiAxMjc2cHg7XG4gIGxlZnQ6IDIxMnB4O1xufVxuXG4uc3RyZWV0d2lzZS0yIHtcbiAgdG9wOiAxMjc2cHg7XG4gIGxlZnQ6IDIyOXB4O1xufVxuXG4uc3RyZWV0d2lzZS0zIHtcbiAgdG9wOiAxMjc2cHg7XG4gIGxlZnQ6IDI0NnB4O1xufVxuXG4uc3RyZWV0d2lzZS00IHtcbiAgdG9wOiAxMjc2cHg7XG4gIGxlZnQ6IDI2NHB4O1xufVxuXG4uc3RyZWV0d2lzZS01IHtcbiAgdG9wOiAxMjc2cHg7XG4gIGxlZnQ6IDI4MXB4O1xufVxuXG4uc3VidGVyZnVnZS1yb3RlIHtcbiAgdG9wOiAxMjk2cHg7XG4gIGxlZnQ6IDUxcHg7XG59XG5cbi5zdWJ0ZXJmdWdlLTEge1xuICB0b3A6IDEzMDNweDtcbiAgbGVmdDogMjEycHg7XG59XG5cbi5zdWJ0ZXJmdWdlLTIge1xuICB0b3A6IDEzMDNweDtcbiAgbGVmdDogMjI5cHg7XG59XG5cbi5zdWJ0ZXJmdWdlLTMge1xuICB0b3A6IDEzMDNweDtcbiAgbGVmdDogMjQ2cHg7XG59XG5cbi5zdWJ0ZXJmdWdlLTQge1xuICB0b3A6IDEzMDNweDtcbiAgbGVmdDogMjY0cHg7XG59XG5cbi5zdWJ0ZXJmdWdlLTUge1xuICB0b3A6IDEzMDNweDtcbiAgbGVmdDogMjgxcHg7XG59XG5cbi5kZXN0aW4tMSB7XG4gIHRvcDogMTEwNXB4O1xuICBsZWZ0OiA1MTdweDtcbn1cblxuLmRlc3Rpbi0yIHtcbiAgdG9wOiAxMTA1cHg7XG4gIGxlZnQ6IDUzNHB4O1xufVxuXG4uZGVzdGluLTMge1xuICB0b3A6IDExMDVweDtcbiAgbGVmdDogNTUycHg7XG59XG5cbi5kZXN0aW4tNCB7XG4gIHRvcDogMTEwNXB4O1xuICBsZWZ0OiA1NjlweDtcbn1cblxuLmRlc3Rpbi01IHtcbiAgdG9wOiAxMTA1cHg7XG4gIGxlZnQ6IDU4NnB4O1xufVxuXG4uZXNwYWNlLTEge1xuICB0b3A6IDExMjZweDtcbiAgbGVmdDogNTE3cHg7XG59XG5cbi5lc3BhY2UtMiB7XG4gIHRvcDogMTEyNnB4O1xuICBsZWZ0OiA1MzRweDtcbn1cblxuLmVzcGFjZS0zIHtcbiAgdG9wOiAxMTI2cHg7XG4gIGxlZnQ6IDU1MnB4O1xufVxuXG4uZXNwYWNlLTQge1xuICB0b3A6IDExMjZweDtcbiAgbGVmdDogNTY5cHg7XG59XG5cbi5lc3BhY2UtNSB7XG4gIHRvcDogMTEyNnB4O1xuICBsZWZ0OiA1ODZweDtcbn1cblxuLmVzcHJpdC0xIHtcbiAgdG9wOiAxMTQ3cHg7XG4gIGxlZnQ6IDUxN3B4O1xufVxuXG4uZXNwcml0LTIge1xuICB0b3A6IDExNDdweDtcbiAgbGVmdDogNTM0cHg7XG59XG5cbi5lc3ByaXQtMyB7XG4gIHRvcDogMTE0N3B4O1xuICBsZWZ0OiA1NTJweDtcbn1cblxuLmVzcHJpdC00IHtcbiAgdG9wOiAxMTQ3cHg7XG4gIGxlZnQ6IDU2OXB4O1xufVxuXG4uZXNwcml0LTUge1xuICB0b3A6IDExNDdweDtcbiAgbGVmdDogNTg2cHg7XG59XG5cbi5mb3JjZXMtMSB7XG4gIHRvcDogMTE2OXB4O1xuICBsZWZ0OiA1MTdweDtcbn1cblxuLmZvcmNlcy0yIHtcbiAgdG9wOiAxMTY5cHg7XG4gIGxlZnQ6IDUzNHB4O1xufVxuXG4uZm9yY2VzLTMge1xuICB0b3A6IDExNjlweDtcbiAgbGVmdDogNTUycHg7XG59XG5cbi5mb3JjZXMtNCB7XG4gIHRvcDogMTE2OXB4O1xuICBsZWZ0OiA1NjlweDtcbn1cblxuLmZvcmNlcy01IHtcbiAgdG9wOiAxMTY5cHg7XG4gIGxlZnQ6IDU4NnB4O1xufVxuXG4ubWF0aWVyZS0xIHtcbiAgdG9wOiAxMTkwcHg7XG4gIGxlZnQ6IDUxN3B4O1xufVxuXG4ubWF0aWVyZS0yIHtcbiAgdG9wOiAxMTkwcHg7XG4gIGxlZnQ6IDUzNHB4O1xufVxuXG4ubWF0aWVyZS0zIHtcbiAgdG9wOiAxMTkwcHg7XG4gIGxlZnQ6IDU1MnB4O1xufVxuXG4ubWF0aWVyZS00IHtcbiAgdG9wOiAxMTkwcHg7XG4gIGxlZnQ6IDU2OXB4O1xufVxuXG4ubWF0aWVyZS01IHtcbiAgdG9wOiAxMTkwcHg7XG4gIGxlZnQ6IDU4NnB4O1xufVxuXG4ubW9ydC0xIHtcbiAgdG9wOiAxMjEycHg7XG4gIGxlZnQ6IDUxN3B4O1xufVxuXG4ubW9ydC0yIHtcbiAgdG9wOiAxMjEycHg7XG4gIGxlZnQ6IDUzNHB4O1xufVxuXG4ubW9ydC0zIHtcbiAgdG9wOiAxMjEycHg7XG4gIGxlZnQ6IDU1MnB4O1xufVxuXG4ubW9ydC00IHtcbiAgdG9wOiAxMjEycHg7XG4gIGxlZnQ6IDU2OXB4O1xufVxuXG4ubW9ydC01IHtcbiAgdG9wOiAxMjEycHg7XG4gIGxlZnQ6IDU4NnB4O1xufVxuXG4ucHJpbWUtMSB7XG4gIHRvcDogMTIzM3B4O1xuICBsZWZ0OiA1MTdweDtcbn1cblxuLnByaW1lLTIge1xuICB0b3A6IDEyMzNweDtcbiAgbGVmdDogNTM0cHg7XG59XG5cbi5wcmltZS0zIHtcbiAgdG9wOiAxMjMzcHg7XG4gIGxlZnQ6IDU1MnB4O1xufVxuXG4ucHJpbWUtNCB7XG4gIHRvcDogMTIzM3B4O1xuICBsZWZ0OiA1NjlweDtcbn1cblxuLnByaW1lLTUge1xuICB0b3A6IDEyMzNweDtcbiAgbGVmdDogNTg2cHg7XG59XG5cbi5wc3ljaGUtMSB7XG4gIHRvcDogMTI1NHB4O1xuICBsZWZ0OiA1MTdweDtcbn1cblxuLnBzeWNoZS0yIHtcbiAgdG9wOiAxMjU0cHg7XG4gIGxlZnQ6IDUzNHB4O1xufVxuXG4ucHN5Y2hlLTMge1xuICB0b3A6IDEyNTRweDtcbiAgbGVmdDogNTUycHg7XG59XG5cbi5wc3ljaGUtNCB7XG4gIHRvcDogMTI1NHB4O1xuICBsZWZ0OiA1NjlweDtcbn1cblxuLnBzeWNoZS01IHtcbiAgdG9wOiAxMjU0cHg7XG4gIGxlZnQ6IDU4NnB4O1xufVxuXG4udGVtcHMtMSB7XG4gIHRvcDogMTI3NnB4O1xuICBsZWZ0OiA1MTdweDtcbn1cblxuLnRlbXBzLTIge1xuICB0b3A6IDEyNzZweDtcbiAgbGVmdDogNTM0cHg7XG59XG5cbi50ZW1wcy0zIHtcbiAgdG9wOiAxMjc2cHg7XG4gIGxlZnQ6IDU1MnB4O1xufVxuXG4udGVtcHMtNCB7XG4gIHRvcDogMTI3NnB4O1xuICBsZWZ0OiA1NjlweDtcbn1cblxuLnRlbXBzLTUge1xuICB0b3A6IDEyNzZweDtcbiAgbGVmdDogNTg2cHg7XG59XG5cbi52aWUtMSB7XG4gIHRvcDogMTI5N3B4O1xuICBsZWZ0OiA1MTdweDtcbn1cblxuLnZpZS0yIHtcbiAgdG9wOiAxMjk3cHg7XG4gIGxlZnQ6IDUzNHB4O1xufVxuXG4udmllLTMge1xuICB0b3A6IDEyOTdweDtcbiAgbGVmdDogNTUycHg7XG59XG5cbi52aWUtNCB7XG4gIHRvcDogMTI5N3B4O1xuICBsZWZ0OiA1NjlweDtcbn1cblxuLnZpZS01IHtcbiAgdG9wOiAxMjk3cHg7XG4gIGxlZnQ6IDU4NnB4O1xufVxuXG4uaGVhbHRoLTEge1xuICB0b3A6IDU3N3B4O1xuICBsZWZ0OiA2MzFweDtcbn1cblxuLmhlYWx0aC0yIHtcbiAgdG9wOiA1NzdweDtcbiAgbGVmdDogNjQ4cHg7XG59XG5cbi5oZWFsdGgtMyB7XG4gIHRvcDogNTc3cHg7XG4gIGxlZnQ6IDY2NnB4O1xufVxuXG4uaGVhbHRoLTQge1xuICB0b3A6IDU3N3B4O1xuICBsZWZ0OiA2ODRweDtcbn1cblxuLmhlYWx0aC01IHtcbiAgdG9wOiA1NzdweDtcbiAgbGVmdDogNzAycHg7XG59XG5cbi5oZWFsdGgtNiB7XG4gIHRvcDogNTc3cHg7XG4gIGxlZnQ6IDcxOXB4O1xufVxuXG4uaGVhbHRoLTcge1xuICB0b3A6IDU3N3B4O1xuICBsZWZ0OiA3MzdweDtcbn1cblxuLmhlYWx0aC04IHtcbiAgdG9wOiA1NzdweDtcbiAgbGVmdDogNzU1cHg7XG59XG5cbi5oZWFsdGgtOSB7XG4gIHRvcDogNTc3cHg7XG4gIGxlZnQ6IDc3M3B4O1xufVxuXG4uaGVhbHRoLTEwIHtcbiAgdG9wOiA1NzdweDtcbiAgbGVmdDogNzkwcHg7XG59XG5cbi5oZWFsdGgtMTEge1xuICB0b3A6IDU3N3B4O1xuICBsZWZ0OiA4MDhweDtcbn1cblxuLmhlYWx0aC0xMiB7XG4gIHRvcDogNTc3cHg7XG4gIGxlZnQ6IDgyNXB4O1xufVxuXG4uaGVhbHRoLTEzIHtcbiAgdG9wOiA1NzdweDtcbiAgbGVmdDogODQzcHg7XG59XG5cbi5oZWFsdGgtMTQge1xuICB0b3A6IDU3N3B4O1xuICBsZWZ0OiA4NjFweDtcbn1cblxuLmhlYWx0aC0xNSB7XG4gIHRvcDogNTc3cHg7XG4gIGxlZnQ6IDg3OHB4O1xufVxuXG4ud2lsbHBvd2VyLTEge1xuICB0b3A6IDY0MnB4O1xuICBsZWZ0OiA2MzBweDtcbn1cblxuLndpbGxwb3dlci0yIHtcbiAgdG9wOiA2NDJweDtcbiAgbGVmdDogNjU4cHg7XG59XG5cbi53aWxscG93ZXItMyB7XG4gIHRvcDogNjQycHg7XG4gIGxlZnQ6IDY4NnB4O1xufVxuXG4ud2lsbHBvd2VyLTQge1xuICB0b3A6IDY0MnB4O1xuICBsZWZ0OiA3MTNweDtcbn1cblxuLndpbGxwb3dlci01IHtcbiAgdG9wOiA2NDJweDtcbiAgbGVmdDogNzQwcHg7XG59XG5cbi53aWxscG93ZXItNiB7XG4gIHRvcDogNjQycHg7XG4gIGxlZnQ6IDc2OXB4O1xufVxuXG4ud2lsbHBvd2VyLTcge1xuICB0b3A6IDY0MnB4O1xuICBsZWZ0OiA3OTZweDtcbn1cblxuLndpbGxwb3dlci04IHtcbiAgdG9wOiA2NDJweDtcbiAgbGVmdDogODI0cHg7XG59XG5cbi53aWxscG93ZXItOSB7XG4gIHRvcDogNjQycHg7XG4gIGxlZnQ6IDg1MXB4O1xufVxuXG4ud2lsbHBvd2VyLTEwIHtcbiAgdG9wOiA2NDJweDtcbiAgbGVmdDogODc4cHg7XG59XG5cbi5tYW5hLTEge1xuICB0b3A6IDcwMXB4O1xuICBsZWZ0OiA2MzFweDtcbn1cblxuLm1hbmEtMiB7XG4gIHRvcDogNzAxcHg7XG4gIGxlZnQ6IDY1OHB4O1xufVxuXG4ubWFuYS0zIHtcbiAgdG9wOiA3MDFweDtcbiAgbGVmdDogNjg2cHg7XG59XG5cbi5tYW5hLTQge1xuICB0b3A6IDcwMXB4O1xuICBsZWZ0OiA3MTNweDtcbn1cblxuLm1hbmEtNSB7XG4gIHRvcDogNzAxcHg7XG4gIGxlZnQ6IDc0MHB4O1xufVxuXG4ubWFuYS02IHtcbiAgdG9wOiA3MDFweDtcbiAgbGVmdDogNzY5cHg7XG59XG5cbi5tYW5hLTcge1xuICB0b3A6IDcwMXB4O1xuICBsZWZ0OiA3OTZweDtcbn1cblxuLm1hbmEtOCB7XG4gIHRvcDogNzAxcHg7XG4gIGxlZnQ6IDgyNHB4O1xufVxuXG4ubWFuYS05IHtcbiAgdG9wOiA3MDFweDtcbiAgbGVmdDogODUxcHg7XG59XG5cbi5tYW5hLTEwIHtcbiAgdG9wOiA3MDFweDtcbiAgbGVmdDogODc4cHg7XG59XG5cbi5tYW5hLTExIHtcbiAgdG9wOiA3MjFweDtcbiAgbGVmdDogNjMxcHg7XG59XG5cbi5tYW5hLTEyIHtcbiAgdG9wOiA3MjFweDtcbiAgbGVmdDogNjU4cHg7XG59XG5cbi5tYW5hLTEzIHtcbiAgdG9wOiA3MjFweDtcbiAgbGVmdDogNjg2cHg7XG59XG5cbi5tYW5hLTE0IHtcbiAgdG9wOiA3MjFweDtcbiAgbGVmdDogNzEzcHg7XG59XG5cbi5tYW5hLTE1IHtcbiAgdG9wOiA3MjFweDtcbiAgbGVmdDogNzQwcHg7XG59XG5cbi5tYW5hLTE2IHtcbiAgdG9wOiA3MjFweDtcbiAgbGVmdDogNzY5cHg7XG59XG5cbi5tYW5hLTE3IHtcbiAgdG9wOiA3MjFweDtcbiAgbGVmdDogNzk2cHg7XG59XG5cbi5tYW5hLTE4IHtcbiAgdG9wOiA3MjFweDtcbiAgbGVmdDogODI0cHg7XG59XG5cbi5tYW5hLTE5IHtcbiAgdG9wOiA3MjFweDtcbiAgbGVmdDogODUxcHg7XG59XG5cbi5tYW5hLTIwIHtcbiAgdG9wOiA3MjFweDtcbiAgbGVmdDogODc4cHg7XG59XG5cbi5nbm9zaXMtMSB7XG4gIHRvcDogNzg5cHg7XG4gIGxlZnQ6IDYzMHB4O1xufVxuXG4uZ25vc2lzLTIge1xuICB0b3A6IDc4OXB4O1xuICBsZWZ0OiA2NThweDtcbn1cblxuLmdub3Npcy0zIHtcbiAgdG9wOiA3ODlweDtcbiAgbGVmdDogNjg2cHg7XG59XG5cbi5nbm9zaXMtNCB7XG4gIHRvcDogNzg5cHg7XG4gIGxlZnQ6IDcxM3B4O1xufVxuXG4uZ25vc2lzLTUge1xuICB0b3A6IDc4OXB4O1xuICBsZWZ0OiA3NDBweDtcbn1cblxuLmdub3Npcy02IHtcbiAgdG9wOiA3ODlweDtcbiAgbGVmdDogNzY5cHg7XG59XG5cbi5nbm9zaXMtNyB7XG4gIHRvcDogNzg5cHg7XG4gIGxlZnQ6IDc5NnB4O1xufVxuXG4uZ25vc2lzLTgge1xuICB0b3A6IDc4OXB4O1xuICBsZWZ0OiA4MjRweDtcbn1cblxuLmdub3Npcy05IHtcbiAgdG9wOiA3ODlweDtcbiAgbGVmdDogODUxcHg7XG59XG5cbi5nbm9zaXMtMTAge1xuICB0b3A6IDc4OXB4O1xuICBsZWZ0OiA4NzhweDtcbn1cblxuLm1vcmFsaXR5LTEwIHtcbiAgdG9wOiA4NDJweDtcbiAgbGVmdDogODY4cHg7XG59XG5cbi5tb3JhbGl0eS05IHtcbiAgdG9wOiA4NjVweDtcbiAgbGVmdDogODY4cHg7XG59XG5cbi5tb3JhbGl0eS04IHtcbiAgdG9wOiA4ODhweDtcbiAgbGVmdDogODY4cHg7XG59XG5cbi5tb3JhbGl0eS03IHtcbiAgdG9wOiA5MTJweDtcbiAgbGVmdDogODY4cHg7XG59XG5cbi5tb3JhbGl0eS02IHtcbiAgdG9wOiA5MzVweDtcbiAgbGVmdDogODY4cHg7XG59XG5cbi5tb3JhbGl0eS01IHtcbiAgdG9wOiA5NjBweDtcbiAgbGVmdDogODY4cHg7XG59XG5cbi5tb3JhbGl0eS00IHtcbiAgdG9wOiA5ODJweDtcbiAgbGVmdDogODY4cHg7XG59XG5cbi5tb3JhbGl0eS0zIHtcbiAgdG9wOiAxMDA2cHg7XG4gIGxlZnQ6IDg2OHB4O1xufVxuXG4ubW9yYWxpdHktMiB7XG4gIHRvcDogMTAyOXB4O1xuICBsZWZ0OiA4NjhweDtcbn1cblxuLm1vcmFsaXR5LTEge1xuICB0b3A6IDEwNTJweDtcbiAgbGVmdDogODY4cHg7XG59XG5cbmlucHV0W25hbWU9bWVyaXQtMV0ge1xuICB0b3A6IDU4NHB4O1xuICBsZWZ0OiAzMjhweDtcbiAgd2lkdGg6IDE3NnB4O1xufVxuXG4ubWVyaXQtMS0xIHtcbiAgdG9wOiA1OTRweDtcbiAgbGVmdDogNTE2cHg7XG59XG5cbi5tZXJpdC0xLTIge1xuICB0b3A6IDU5NHB4O1xuICBsZWZ0OiA1MzRweDtcbn1cblxuLm1lcml0LTEtMyB7XG4gIHRvcDogNTk0cHg7XG4gIGxlZnQ6IDU1MXB4O1xufVxuXG4ubWVyaXQtMS00IHtcbiAgdG9wOiA1OTRweDtcbiAgbGVmdDogNTY5cHg7XG59XG5cbi5tZXJpdC0xLTUge1xuICB0b3A6IDU5NHB4O1xuICBsZWZ0OiA1ODZweDtcbn1cblxuaW5wdXRbbmFtZT1tZXJpdC0yXSB7XG4gIHRvcDogNjExcHg7XG4gIGxlZnQ6IDMyOHB4O1xuICB3aWR0aDogMTc2cHg7XG59XG5cbi5tZXJpdC0yLTEge1xuICB0b3A6IDYyMXB4O1xuICBsZWZ0OiA1MTZweDtcbn1cblxuLm1lcml0LTItMiB7XG4gIHRvcDogNjIxcHg7XG4gIGxlZnQ6IDUzNHB4O1xufVxuXG4ubWVyaXQtMi0zIHtcbiAgdG9wOiA2MjFweDtcbiAgbGVmdDogNTUxcHg7XG59XG5cbi5tZXJpdC0yLTQge1xuICB0b3A6IDYyMXB4O1xuICBsZWZ0OiA1NjlweDtcbn1cblxuLm1lcml0LTItNSB7XG4gIHRvcDogNjIxcHg7XG4gIGxlZnQ6IDU4NnB4O1xufVxuXG5pbnB1dFtuYW1lPW1lcml0LTNdIHtcbiAgdG9wOiA2MzhweDtcbiAgbGVmdDogMzI4cHg7XG4gIHdpZHRoOiAxNzZweDtcbn1cblxuLm1lcml0LTMtMSB7XG4gIHRvcDogNjQ5cHg7XG4gIGxlZnQ6IDUxNnB4O1xufVxuXG4ubWVyaXQtMy0yIHtcbiAgdG9wOiA2NDlweDtcbiAgbGVmdDogNTM0cHg7XG59XG5cbi5tZXJpdC0zLTMge1xuICB0b3A6IDY0OXB4O1xuICBsZWZ0OiA1NTFweDtcbn1cblxuLm1lcml0LTMtNCB7XG4gIHRvcDogNjQ5cHg7XG4gIGxlZnQ6IDU2OXB4O1xufVxuXG4ubWVyaXQtMy01IHtcbiAgdG9wOiA2NDlweDtcbiAgbGVmdDogNTg2cHg7XG59XG5cbmlucHV0W25hbWU9bWVyaXQtNF0ge1xuICB0b3A6IDY2NXB4O1xuICBsZWZ0OiAzMjhweDtcbiAgd2lkdGg6IDE3NnB4O1xufVxuXG4ubWVyaXQtNC0xIHtcbiAgdG9wOiA2NzZweDtcbiAgbGVmdDogNTE2cHg7XG59XG5cbi5tZXJpdC00LTIge1xuICB0b3A6IDY3NnB4O1xuICBsZWZ0OiA1MzRweDtcbn1cblxuLm1lcml0LTQtMyB7XG4gIHRvcDogNjc2cHg7XG4gIGxlZnQ6IDU1MXB4O1xufVxuXG4ubWVyaXQtNC00IHtcbiAgdG9wOiA2NzZweDtcbiAgbGVmdDogNTY5cHg7XG59XG5cbi5tZXJpdC00LTUge1xuICB0b3A6IDY3NnB4O1xuICBsZWZ0OiA1ODZweDtcbn1cblxuaW5wdXRbbmFtZT1tZXJpdC01XSB7XG4gIHRvcDogNjkycHg7XG4gIGxlZnQ6IDMyOHB4O1xuICB3aWR0aDogMTc2cHg7XG59XG5cbi5tZXJpdC01LTEge1xuICB0b3A6IDcwM3B4O1xuICBsZWZ0OiA1MTZweDtcbn1cblxuLm1lcml0LTUtMiB7XG4gIHRvcDogNzAzcHg7XG4gIGxlZnQ6IDUzNHB4O1xufVxuXG4ubWVyaXQtNS0zIHtcbiAgdG9wOiA3MDNweDtcbiAgbGVmdDogNTUxcHg7XG59XG5cbi5tZXJpdC01LTQge1xuICB0b3A6IDcwM3B4O1xuICBsZWZ0OiA1NjlweDtcbn1cblxuLm1lcml0LTUtNSB7XG4gIHRvcDogNzAzcHg7XG4gIGxlZnQ6IDU4NnB4O1xufVxuXG5pbnB1dFtuYW1lPW1lcml0LTZdIHtcbiAgdG9wOiA3MTlweDtcbiAgbGVmdDogMzI4cHg7XG4gIHdpZHRoOiAxNzZweDtcbn1cblxuLm1lcml0LTYtMSB7XG4gIHRvcDogNzI5cHg7XG4gIGxlZnQ6IDUxNnB4O1xufVxuXG4ubWVyaXQtNi0yIHtcbiAgdG9wOiA3MjlweDtcbiAgbGVmdDogNTM0cHg7XG59XG5cbi5tZXJpdC02LTMge1xuICB0b3A6IDcyOXB4O1xuICBsZWZ0OiA1NTFweDtcbn1cblxuLm1lcml0LTYtNCB7XG4gIHRvcDogNzI5cHg7XG4gIGxlZnQ6IDU2OXB4O1xufVxuXG4ubWVyaXQtNi01IHtcbiAgdG9wOiA3MjlweDtcbiAgbGVmdDogNTg2cHg7XG59XG5cbmlucHV0W25hbWU9bWVyaXQtN10ge1xuICB0b3A6IDc0NnB4O1xuICBsZWZ0OiAzMjhweDtcbiAgd2lkdGg6IDE3NnB4O1xufVxuXG4ubWVyaXQtNy0xIHtcbiAgdG9wOiA3NTdweDtcbiAgbGVmdDogNTE2cHg7XG59XG5cbi5tZXJpdC03LTIge1xuICB0b3A6IDc1N3B4O1xuICBsZWZ0OiA1MzRweDtcbn1cblxuLm1lcml0LTctMyB7XG4gIHRvcDogNzU3cHg7XG4gIGxlZnQ6IDU1MXB4O1xufVxuXG4ubWVyaXQtNy00IHtcbiAgdG9wOiA3NTdweDtcbiAgbGVmdDogNTY5cHg7XG59XG5cbi5tZXJpdC03LTUge1xuICB0b3A6IDc1N3B4O1xuICBsZWZ0OiA1ODZweDtcbn1cblxuaW5wdXRbbmFtZT1tZXJpdC04XSB7XG4gIHRvcDogNzczcHg7XG4gIGxlZnQ6IDMyOHB4O1xuICB3aWR0aDogMTc2cHg7XG59XG5cbi5tZXJpdC04LTEge1xuICB0b3A6IDc4NHB4O1xuICBsZWZ0OiA1MTZweDtcbn1cblxuLm1lcml0LTgtMiB7XG4gIHRvcDogNzg0cHg7XG4gIGxlZnQ6IDUzNHB4O1xufVxuXG4ubWVyaXQtOC0zIHtcbiAgdG9wOiA3ODRweDtcbiAgbGVmdDogNTUxcHg7XG59XG5cbi5tZXJpdC04LTQge1xuICB0b3A6IDc4NHB4O1xuICBsZWZ0OiA1NjlweDtcbn1cblxuLm1lcml0LTgtNSB7XG4gIHRvcDogNzg0cHg7XG4gIGxlZnQ6IDU4NnB4O1xufVxuXG5pbnB1dFtuYW1lPWFyY2FuYS1kZXN0aW5dIHtcbiAgdG9wOiAxMDkzcHg7XG4gIGxlZnQ6IDQyN3B4O1xuICB3aWR0aDogNzZweDtcbn1cblxuaW5wdXRbbmFtZT1hcmNhbmEtZXNwYWNlXSB7XG4gIHRvcDogMTExNXB4O1xuICBsZWZ0OiA0MjdweDtcbiAgd2lkdGg6IDc2cHg7XG59XG5cbmlucHV0W25hbWU9YXJjYW5hLWVzcHJpdF0ge1xuICB0b3A6IDExMzZweDtcbiAgbGVmdDogNDI3cHg7XG4gIHdpZHRoOiA3NnB4O1xufVxuXG5pbnB1dFtuYW1lPWFyY2FuYS1mb3JjZXNdIHtcbiAgdG9wOiAxMTU3cHg7XG4gIGxlZnQ6IDQyN3B4O1xuICB3aWR0aDogNzZweDtcbn1cblxuaW5wdXRbbmFtZT1hcmNhbmEtbWF0aWVyZV0ge1xuICB0b3A6IDExNzlweDtcbiAgbGVmdDogNDI3cHg7XG4gIHdpZHRoOiA3NnB4O1xufVxuXG5pbnB1dFtuYW1lPWFyY2FuYS1tb3J0XSB7XG4gIHRvcDogMTIwMHB4O1xuICBsZWZ0OiA0MjdweDtcbiAgd2lkdGg6IDc2cHg7XG59XG5cbmlucHV0W25hbWU9YXJjYW5hLXByaW1lXSB7XG4gIHRvcDogMTIyMnB4O1xuICBsZWZ0OiA0MjdweDtcbiAgd2lkdGg6IDc2cHg7XG59XG5cbmlucHV0W25hbWU9YXJjYW5hLXBzeWNoZV0ge1xuICB0b3A6IDEyNDNweDtcbiAgbGVmdDogNDI3cHg7XG4gIHdpZHRoOiA3NnB4O1xufVxuXG5pbnB1dFtuYW1lPWFyY2FuYS10ZW1wc10ge1xuICB0b3A6IDEyNjRweDtcbiAgbGVmdDogNDI3cHg7XG4gIHdpZHRoOiA3NnB4O1xufVxuXG5pbnB1dFtuYW1lPWFyY2FuYS12aWVdIHtcbiAgdG9wOiAxMjg1cHg7XG4gIGxlZnQ6IDQyN3B4O1xuICB3aWR0aDogNzZweDtcbn1cblxuaW5wdXRbbmFtZT1mbGF3LTFdIHtcbiAgdG9wOiA4NDFweDtcbiAgbGVmdDogMzI4cHg7XG4gIHdpZHRoOiAxNzZweDtcbn1cblxuaW5wdXRbbmFtZT1mbGF3LTJdIHtcbiAgdG9wOiA4NjlweDtcbiAgbGVmdDogMzI4cHg7XG4gIHdpZHRoOiAxNzZweDtcbn1cblxuaW5wdXRbbmFtZT1mbGF3LTNdIHtcbiAgdG9wOiA4OThweDtcbiAgbGVmdDogMzI4cHg7XG4gIHdpZHRoOiAxNzZweDtcbn1cblxuaW5wdXRbbmFtZT1zaXplXSB7XG4gIHRvcDogOTI1cHg7XG4gIGxlZnQ6IDM4MXB4O1xuICB3aWR0aDogMTc2cHg7XG59XG5cbmlucHV0W25hbWU9ZGVmZW5zZV0ge1xuICB0b3A6IDk1M3B4O1xuICBsZWZ0OiAzOTlweDtcbiAgd2lkdGg6IDE1MXB4O1xufVxuXG5pbnB1dFtuYW1lPWluaXRpYXRpdmVdIHtcbiAgdG9wOiA5ODBweDtcbiAgbGVmdDogNDA5cHg7XG4gIHdpZHRoOiAxMTNweDtcbn1cblxuaW5wdXRbbmFtZT1zcGVlZF0ge1xuICB0b3A6IDEwMDdweDtcbiAgbGVmdDogMzk2cHg7XG4gIHdpZHRoOiAxNjdweDtcbn1cblxuaW5wdXRbbmFtZT1tYW5hLXBlci10dXJuXSB7XG4gIHRvcDogNzM5cHg7XG4gIGxlZnQ6IDc2NnB4O1xuICB3aWR0aDogNTZweDtcbn1cblxuaW5wdXRbbmFtZT1leHBlcmllbmNlXSB7XG4gIHRvcDogMjYyNnB4O1xuICBsZWZ0OiAxNDlweDtcbiAgd2lkdGg6IDc1cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuaW5wdXRbbmFtZT1leHBlcmllbmNlLWFyY2FuYV0ge1xuICB0b3A6IDI3NjVweDtcbiAgbGVmdDogMTQ5cHg7XG4gIHdpZHRoOiA3NXB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5saS1lbXB0eSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGhlaWdodDogMTVweDtcbn1cblxuaW5wdXRbbmFtZT1yb3V0aW5lXzFdIHtcbiAgdG9wOiAxNzM0cHg7XG4gIGxlZnQ6IDMzOXB4O1xuICB3aWR0aDogNTY1cHg7XG59XG5cbmlucHV0W25hbWU9cm91dGluZV8yXSB7XG4gIHRvcDogMTc1OXB4O1xuICBsZWZ0OiAzMzlweDtcbiAgd2lkdGg6IDU2NXB4O1xufVxuXG5pbnB1dFtuYW1lPXJvdXRpbmVfM10ge1xuICB0b3A6IDE3ODRweDtcbiAgbGVmdDogMzM5cHg7XG4gIHdpZHRoOiA1NjVweDtcbn1cblxuaW5wdXRbbmFtZT1yb3V0aW5lXzRdIHtcbiAgdG9wOiAxODEwcHg7XG4gIGxlZnQ6IDMzOXB4O1xuICB3aWR0aDogNTY1cHg7XG59XG5cbmlucHV0W25hbWU9cm91dGluZV81XSB7XG4gIHRvcDogMTgzNHB4O1xuICBsZWZ0OiAzMzlweDtcbiAgd2lkdGg6IDU2NXB4O1xufVxuXG5pbnB1dFtuYW1lPXJvdXRpbmVfNl0ge1xuICB0b3A6IDE4NTlweDtcbiAgbGVmdDogMzM5cHg7XG4gIHdpZHRoOiA1NjVweDtcbn1cblxuaW5wdXRbbmFtZT1yb3V0aW5lXzddIHtcbiAgdG9wOiAxODg1cHg7XG4gIGxlZnQ6IDMzOXB4O1xuICB3aWR0aDogNTY1cHg7XG59XG5cbmlucHV0W25hbWU9cm91dGluZV84XSB7XG4gIHRvcDogMTkwOXB4O1xuICBsZWZ0OiAzMzlweDtcbiAgd2lkdGg6IDU2NXB4O1xufVxuXG5pbnB1dFtuYW1lPXJvdXRpbmVfOV0ge1xuICB0b3A6IDE5MzVweDtcbiAgbGVmdDogMzM5cHg7XG4gIHdpZHRoOiA1NjVweDtcbn1cblxuaW5wdXRbbmFtZT1yb3V0aW5lXzEwXSB7XG4gIHRvcDogMTk2MXB4O1xuICBsZWZ0OiAzMzlweDtcbiAgd2lkdGg6IDU2NXB4O1xufVxuXG5pbnB1dFtuYW1lPXJvdXRpbmVfMTFdIHtcbiAgdG9wOiAxOTg1cHg7XG4gIGxlZnQ6IDMzOXB4O1xuICB3aWR0aDogNTY1cHg7XG59XG5cbmlucHV0W25hbWU9cm91dGluZV8xMl0ge1xuICB0b3A6IDIwMTBweDtcbiAgbGVmdDogMzM5cHg7XG4gIHdpZHRoOiA1NjVweDtcbn1cblxuaW5wdXRbbmFtZT1yb3V0aW5lXzEzXSB7XG4gIHRvcDogMjAzNnB4O1xuICBsZWZ0OiAzMzlweDtcbiAgd2lkdGg6IDU2NXB4O1xufVxuXG5pbnB1dFtuYW1lPXJvdXRpbmVfMTRdIHtcbiAgdG9wOiAyMDYwcHg7XG4gIGxlZnQ6IDMzOXB4O1xuICB3aWR0aDogNTY1cHg7XG59XG5cbmlucHV0W25hbWU9d2VhcG9uXzFdIHtcbiAgdG9wOiAyMTM5cHg7XG4gIGxlZnQ6IDMzOXB4O1xuICB3aWR0aDogNTY1cHg7XG59XG5cbmlucHV0W25hbWU9d2VhcG9uXzJdIHtcbiAgdG9wOiAyMTY0cHg7XG4gIGxlZnQ6IDMzOXB4O1xuICB3aWR0aDogNTY1cHg7XG59XG5cbmlucHV0W25hbWU9ZXF1aXBlbWVudF8xXSB7XG4gIHRvcDogMjQwOHB4O1xuICBsZWZ0OiAzMzlweDtcbiAgd2lkdGg6IDU2NXB4O1xufVxuXG5pbnB1dFtuYW1lPW1vcmFsaXR5XzBdIHtcbiAgdG9wOiAxMDQwcHg7XG4gIGxlZnQ6IDY0OHB4O1xuICB3aWR0aDogMjA1cHg7XG59XG5cbmlucHV0W25hbWU9bW9yYWxpdHlfMV0ge1xuICB0b3A6IDEwMTdweDtcbiAgbGVmdDogNjQ4cHg7XG4gIHdpZHRoOiAyMDVweDtcbn1cblxuaW5wdXRbbmFtZT1tb3JhbGl0eV8yXSB7XG4gIHRvcDogOTk0cHg7XG4gIGxlZnQ6IDY0OHB4O1xuICB3aWR0aDogMjA1cHg7XG59XG5cbmlucHV0W25hbWU9bW9yYWxpdHlfM10ge1xuICB0b3A6IDk3MHB4O1xuICBsZWZ0OiA2NDhweDtcbiAgd2lkdGg6IDIwNXB4O1xufVxuXG5pbnB1dFtuYW1lPW1vcmFsaXR5XzRdIHtcbiAgdG9wOiA5NDZweDtcbiAgbGVmdDogNjQ4cHg7XG4gIHdpZHRoOiAyMDVweDtcbn1cblxuaW5wdXRbbmFtZT1tb3JhbGl0eV81XSB7XG4gIHRvcDogOTIzcHg7XG4gIGxlZnQ6IDY0OHB4O1xuICB3aWR0aDogMjA1cHg7XG59XG5cbmlucHV0W25hbWU9bW9yYWxpdHlfNl0ge1xuICB0b3A6IDg5OXB4O1xuICBsZWZ0OiA2NDhweDtcbiAgd2lkdGg6IDIwNXB4O1xufVxuXG5pbnB1dFtuYW1lPW1vcmFsaXR5XzddIHtcbiAgdG9wOiA4NzZweDtcbiAgbGVmdDogNjQ4cHg7XG4gIHdpZHRoOiAyMDVweDtcbn1cblxuaW5wdXRbbmFtZT1tb3JhbGl0eV84XSB7XG4gIHRvcDogODUzcHg7XG4gIGxlZnQ6IDY0OHB4O1xuICB3aWR0aDogMjA1cHg7XG59XG5cbmlucHV0W25hbWU9bW9yYWxpdHlfOV0ge1xuICB0b3A6IDgzMHB4O1xuICBsZWZ0OiA2NThweDtcbiAgd2lkdGg6IDE5NXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NwodMageNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nwod-mage-new',
                templateUrl: './new.component.html',
                styleUrls: ['./new.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nwod/mage/paradox.component.ts":
/*!************************************************!*\
  !*** ./src/app/nwod/mage/paradox.component.ts ***!
  \************************************************/
/*! exports provided: NwodMageParadoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwodMageParadoxComponent", function() { return NwodMageParadoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NwodMageParadoxComponent {
}
NwodMageParadoxComponent.ɵfac = function NwodMageParadoxComponent_Factory(t) { return new (t || NwodMageParadoxComponent)(); };
NwodMageParadoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NwodMageParadoxComponent, selectors: [["app-nwod-mage-paradox"]], decls: 1, vars: 0, template: function NwodMageParadoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "@TODO ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL253b2QvbWFnZS9wYXJhZG94LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NwodMageParadoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nwod-mage-paradox',
                templateUrl: './paradox.component.html',
                styleUrls: ['./paradox.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/nwod/mage/prelude.component.ts":
/*!************************************************!*\
  !*** ./src/app/nwod/mage/prelude.component.ts ***!
  \************************************************/
/*! exports provided: NwodMagePreludeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwodMagePreludeComponent", function() { return NwodMagePreludeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NwodMagePreludeComponent {
}
NwodMagePreludeComponent.ɵfac = function NwodMagePreludeComponent_Factory(t) { return new (t || NwodMagePreludeComponent)(); };
NwodMagePreludeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NwodMagePreludeComponent, selectors: [["app-nwod-mage-prelude"]], decls: 402, vars: 0, consts: [[1, "row"], [1, "col-12", "col-sm-7", "infos"], ["href", "http://letakol.free.fr/mage/arcanes.html", "target", "_blank"], [1, "col-12", "col-sm-5"], [1, "card"], [1, "card-body"], ["src", "assets/nwod/map.png", 1, "card-img-top"], [1, "col-12", "col-sm-6"], [1, "card-title"], [1, "card-text"], [1, "red"]], template: function NwodMagePreludeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quelques infos de base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Je recommande de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ne pas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " aller chercher des infos sur l'univers, \u00E7a pourrait vous spoil des \u00E9l\u00E9ments.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Vous \u00EAtes un groupe de jeunes mages, et vous vous \u00EAtes \"\u00E9veill\u00E9s\" r\u00E9cemment \u00E0 la magie, vous \u00EAtes donc des \"novices\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Vous n'\u00EAtes pas forc\u00E9ment \"soud\u00E9s\", mais votre survie peut d\u00E9pendre de vos camarades.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Vos personnages peuvent se conna\u00EEtre depuis \"avant\" votre \u00E9veil, ou depuis peu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Choses \u00E0 choisir en groupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "L'un\u2022e d'entre vous fera office de \"leader\", qui en saura \"un peu plus\", et qui aura la \"responsabilit\u00E9\" de votre groupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Certains atouts sont \u00E0 acheter collectivement. Il vous faudra donc vous organiser sur qui d\u00E9pense combien dans les atouts de \"groupe\", sachant que vous n'avez que 7 points par personne (ou + selon corruption du DM) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Il faudra vous r\u00E9partir dans les \"voies\" de magie, si vous souhaitez (ou pas) avoir acc\u00E8s \u00E0 la plupart des \"arcanes\" :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " *Nom de la voie* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Arcanes majeures = facile \u00E0 XP, max rang 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Arcane inf\u00E9rieure = difficile \u00E0 XP, max rang 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " D\u00E9finitions des arcanes : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "ici");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Acanthus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Arcanes majeures = Temps / Destin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Arcane inf\u00E9rieure = Forces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Mastigos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Arcanes majeures = Espace / Psych\u00E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Arcane inf\u00E9rieure = Mati\u00E8re ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Moros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Arcanes majeures = Mati\u00E8re / Mort ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Arcane inf\u00E9rieure = Esprit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Obrimos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Arcanes majeures = Forces / Prime ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Arcane inf\u00E9rieure = Mort ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Thyrsus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Arcanes majeures = Vie / Esprit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Arcane inf\u00E9rieure = Psych\u00E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Il faudra vous r\u00E9partir dans les \"ordres\" de magie, si vous souhaitez (ou pas) avoir acc\u00E8s \u00E0 la plupart des \"organisations\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Fl\u00E8che d'Adamantine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " : d\u00E9fend les sanctuaires et les cabales gr\u00E2ce \u00E0 sa magie de combat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Bonus : Athl\u00E9tisme, Intimidation, M\u00E9decine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Conseil Libre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " : cherche \u00E0 \u00E9chapper aux restrictions du pass\u00E9 et \u00E0 moderniser l'art de la magie. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Bonus : Artisanat, Persuasion, Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Gardiens du Voile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " : prot\u00E8gent les Myst\u00E8res de tous ceux qui voudraient les spolier ou qui oseraient ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Bonus : Investigation, Furtivit\u00E9, Subterfuge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Mysterium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " : recherche les traditions pr\u00E9cieuses et les connaissances oubli\u00E9es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Bonus : Investigation, Occulte, Survie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u00C9chelle d'Argent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " : souhaite \u00E9tablir une v\u00E9ritable hi\u00E9rarchie des mages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Bonus : Expression, Persuasion, Subterfuge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Si les portes de la perception \u00E9taient nettoy\u00E9es, chaque chose appara\u00EEtrait \u00E0 l'homme telle qu'elle est : infinie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "C'est ce que vous voyez maintenant.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "L'oeil de votre \u00E2me, l'ajna, le troisi\u00E8me oeil, s'est ouvert.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Vous percevez par la lumi\u00E8re de votre Tour de guet, qui se dresse sur la rive infiniment lointaine au-del\u00E0 des Abysses.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Vous vous \u00EAtes \u00E9veill\u00E9 et les myst\u00E8res se sont d\u00E9voil\u00E9s devant vous.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Votre imagination est aussi r\u00E9elle que votre corps, et votre volont\u00E9 est sans entrave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "C'est le pouvoir.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "C'est de la magie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Avec elle, vous allez refaire le monde.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Les mots sont puissants et les noms encore plus, car ils impliquent une connexion avec l'entit\u00E9 qu'ils d\u00E9notent.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Un ennemi qui ne peut \u00EAtre nomm\u00E9 est un ennemi qui ne peut pas \u00EAtre cibl\u00E9 avec la magie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Ainsi, les mages prennent souvent, apr\u00E8s leur initiation, un nom d'ombre, cachant leur v\u00E9ritable nom de leurs ennemis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "L'utilisation est la m\u00EAme qu'un masque lors d'un bal masqu\u00E9.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Atouts Physiques ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Ambidextre (3), enl\u00E8ve le malus de -2 pour la main secondaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Esquive de bagarre (1), ajoute \"bagarre\" \u00E0 la d\u00E9fense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " => n\u00E9cessite Force 2, Bagarre 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Esquive des armes (1), ajoute \"armes blanches\" \u00E0 la d\u00E9fense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " => n\u00E9cessite Force 2, Armes blanches 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Sens de l'orientation (1), toujours savoir o\u00F9 est le nord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " D\u00E9sarmement (2), peut d\u00E9sarmer avec une arme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " => n\u00E9cessite Dex 3, Armes blanches 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " R\u00E9flexes rapides (1 \u00E0 2), +1/+2 initiative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " => n\u00E9cessite Dex 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Combat en finesse (2), utilise la Dex \u00E0 la place de la Force");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " => n\u00E9cessite Dex 3, Armes blanches 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Style de combat : Boxe (1 \u00E0 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " => n\u00E9cessite For 3, Vig 2, Bagarre 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " - 1 : fait perdre la prochaine action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " - 2 : d\u00E9fense++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " - 3 : 2 attaques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " - 4 : rendre inconscient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " - 5 : d\u00E9g\u00E2ts l\u00E9thaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Style de combat : Kung-Fu (1 \u00E0 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " => n\u00E9cessite For 2, Dex 2, Vig 2, Bagarre 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " - 1 : cibler des parties du corps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " - 2 : armure++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " - 3 : attaque-- defense++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " - 4 : +DEX attaques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " - 5 : d\u00E9g\u00E2ts l\u00E9thaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " Style de combat : Filipino Martial Arts (1 \u00E0 4)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " => n\u00E9cessite Dex 3, Armes blanches 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " - 1 : manoeuvre d\u00E9fensive pour atraper l'adversaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " - 2 : d\u00E9sarmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " - 3 : -2 attaque, 100% d\u00E9g\u00E2ts (solar plexus)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " - 4 : ++d\u00E9fense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Pieds rapides (1 \u00E0 3), +1/+2/+3 vitesse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " => n\u00E9cessite For 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " G\u00E9ant (4), +1 \u00E0 la taille");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " Vigueur d'acier (1 \u00E0 3), annule les malus de fatigue/blessure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " => n\u00E9cessite Vig 3 OU Resolution 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " Immunit\u00E9 naturelle (1), +2 contre infection, maladie, ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " => n\u00E9cessite Vig 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " Gu\u00E9risseur rapide (4), divise par 2 le temps de gu\u00E9rison");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " => n\u00E9cessite Vig 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " Cascadeur (3), peut effectue des actions en conduisant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " => n\u00E9cessite Dex 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " R\u00E9istance aux toxines (2), +2 contre poison, drogues, ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " => n\u00E9cessite Vig 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " Atouts Communs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Sanctuaire - Taille (1 \u00E0 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " La taille de votre base.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Un minimum de 2 est requis ici, mais vous serez \u00E0 l'\u00E9troit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " (1 = 2 pi\u00E8ces, 2 = 4 pi\u00E8ces, 3 = 8 pi\u00E8ces, 4 = manoir, 5 = campus)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " Sanctuaire - S\u00E9curit\u00E9 (1 \u00E0 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " Malus pour les ennemis qui voudraient vous attaquer / espionner / ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " Fontaine de mana (1 \u00E0 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " Nombre de points de mana g\u00E9n\u00E9r\u00E9s par jour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " Biblioth\u00E8que (1 \u00E0 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Nombre de champs d'expertise de la biblioth\u00E8que (ex: d\u00E9mons, esprits, ...)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " Somnambule (1 \u00E0 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " Un humain qui conna\u00EEt l'existence de la magie, sans pour autant en poss\u00E9der les capacit\u00E9s. Il sert principalement de majordome et s'occupe de t\u00E2ches diverses, comme garder la maison en votre absence.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " (1 = Ma\u00EFt\u00E9 qui fait de la soupe, 5 = Alfred de Batman) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " Atouts Surnaturels ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " R\u00EAves (1 \u00E0 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " Permet de poser une question au DM, qui r\u00E9pond par 1 \u00E0 5 r\u00E9ponses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, " Destin\u00E9e (1 \u00E0 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " 2/4/6/8/10 d\u00E9s \"bonus\" pour une game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " Atouts Sociaux ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " Contacts (1 \u00E0 5), ex: Police, Mysterium, Maison Blanche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, " Inspirant (4), 1 fois par game, peut faire regagner 1 point de volont\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " => n\u00E9cessite Pr\u00E9sence 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " Mentor (1 \u00E0 5), quelqu'un qui forme, conseille, aide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, " Ressources (1 \u00E0 5), $1.000, $5.000, $10.000, $500.000, $5.000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, " Statut (1 \u00E0 5), hi\u00E9rarchie, ex: Police, Mysterium, Maison Blanche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " Regard saisissant (2 ou 4), +1/+2 sur le social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " Atouts Mentaux ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " Sens du danger (2), +2 sur les r\u00E9flexes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " Esprit m\u00E9ditatif (1), aucun malus pour m\u00E9diter (bruit, ...)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, " Langues (1 \u00E0 5), ex: russe, allemand, ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Exp\u00E9rience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, " Pour monter d'un niveau, il faut avoir un nombre de points d'exp\u00E9rience \u00E9gal au rang souhait\u00E9, multipli\u00E9 par sa valeur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, " Par exemple, pour passer du niveau 2 \u00E0 3 en Force (attribut), \u00E7a co\u00FBtera : 3 (rang souhait\u00E9) x 5 (valeur) = 15 Points d'exp\u00E9rience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " Attribut : rang * 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, " Comp\u00E9tence : rang * 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, " Atout : rang * 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, " Sagesse : rang * 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, " Gnose : rang * 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, " Routine : rang * 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, " Arcanes majeures : rang * 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, " Arcanes communes : rang * 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, " Arcane inf\u00E9rieure : rang * 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, " NB: l'exp\u00E9rience \"arcanique\" ne peut \u00EAtre d\u00E9pens\u00E9e que dans ce qui est magique (atouts commun/surnaturels, gnose, routines, arcanes) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Sagesse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, " On peut perdre de la sagesse, en faisant des actions \"n\u00E9fastes\" du niveau correspondant ou inf\u00E9rieur : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "10 : Avoir des pens\u00E9es \u00E9go\u00EFstes / Utiliser la magie pour une action qui aurait p\u00FB \u00EAtre r\u00E9alis\u00E9e sans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "9 : Acte \u00E9go\u00EFste mineur (refuser la charit\u00E9) / Contraindre magiquement une autre personne pour qu'elle agisse contre sa propre volon\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "8 : Blessure \u00E0 autrui accidentel / Contraindre magiquement une autre personne pour qu'elle viole son propre code moral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "7 : Vol mineur (vol \u00E0 l'\u00E9talage) / Jeter une mal\u00E9diction sur quelqu'un");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "6 : Grand vol (cambriolage) / Lier de force un esprit r\u00E9ticent \u00E0 un lieu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "5 : Dommages intentionnels et massifs (incendie volontaire) / Transformer magiquement une personne en un \u00EAtre inf\u00E9rieur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "4 : Crime passionnel (homicide involontaire) / Utiliser la magie pour faire du mal \u00E0 quelqu'un");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "3 : Crime planifi\u00E9 (meurtre) / Enl\u00E8vement forc\u00E9 d'une autre personne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "2 : Crime occasionnel (meurtre en s\u00E9rie) / Pr\u00E9venir intentionnellement un \u00E9veil de magie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "1 : Perversion totale (meurtre de masse) / Voler une \u00E2me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.card[_ngcontent-%COMP%]    + .card[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\nsection[_ngcontent-%COMP%] {\n  border-left: 1px solid;\n  padding-left: 15px;\n}\nsection[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.red[_ngcontent-%COMP%] {\n  color: red;\n}\n@media (max-width: 576px) {\n  ul[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL253b2QvbWFnZS9wcmVsdWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ud29kL21hZ2UvcHJlbHVkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7QURDSTtFQUNFLHFCQUFBO0FDQ047QURDSTtFQUNFLGdCQUFBO0FDQ047QURHQTtFQUNFLGdCQUFBO0FDQUY7QURHQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBREdBO0VBQ0UsVUFBQTtBQ0FGO0FER0E7RUFDRTtJQUNFLGtCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL253b2QvbWFnZS9wcmVsdWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgLmNhcmQtYm9keSB7XG4gICAgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG4gICAgfVxuICAgIHA6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuLmNhcmQgKyAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbnNlY3Rpb24ge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gIH1cbn1cblxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICB1bCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG59XG4iLCIuY2FyZCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmNhcmQgLmNhcmQtYm9keSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xufVxuLmNhcmQgLmNhcmQtYm9keSBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2FyZCArIC5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuc2VjdGlvbiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbnNlY3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NwodMagePreludeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nwod-mage-prelude',
                templateUrl: './prelude.component.html',
                styleUrls: ['./prelude.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/nwod/mage/rotes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nwod/mage/rotes.component.ts ***!
  \**********************************************/
/*! exports provided: NwodMageRotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwodMageRotesComponent", function() { return NwodMageRotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function NwodMageRotesComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", order_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r3);
} }
function NwodMageRotesComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const arcana_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", arcana_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](arcana_r4);
} }
function NwodMageRotesComponent_ng_template_27_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vulgaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageRotesComponent_ng_template_27_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Poss\u00E9d\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageRotesComponent_ng_template_27_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "XP r\u00E9duit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageRotesComponent_ng_template_27_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "1 mana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageRotesComponent_ng_template_27_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Artefact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodMageRotesComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NwodMageRotesComponent_ng_template_27_span_8_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NwodMageRotesComponent_ng_template_27_span_9_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NwodMageRotesComponent_ng_template_27_span_10_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NwodMageRotesComponent_ng_template_27_span_11_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NwodMageRotesComponent_ng_template_27_span_12_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spell_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spell_r5.arcana);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spell_r5.rote);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spell_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", spell_r5.vulgar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", spell_r5.alreadyOwned);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", spell_r5.costReduced);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", spell_r5.costMana);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", spell_r5.rote === "Artefact");
} }
class NwodMageRotesComponent {
    constructor() {
        this.selectedOrder = '';
        this.selectedArcana = '';
        this.orders = [
            'Gardiens du voile',
            'Mysterium',
            'Echelle d\'argent',
            'Conseil Libre',
        ];
        this.arcanas = [
            'Destin',
            'Espace',
            'Esprit',
            'Forces',
            'Matière',
            'Mort',
            'Prime',
            'Psyché',
            'Temps',
            'Vie'
        ];
        this.spells = [];
        this.allSpells = [
            {
                arcana: 'Mort 1',
                rote: '',
                description: 'Détermine les causes de la mort',
            }, {
                arcana: 'Mort 1',
                rote: 'Echelle d\'argent',
                description: 'Vision du mage',
            }, {
                arcana: 'Mort 1',
                rote: 'Gardiens du voile',
                description: 'Altère la forme d\'une ombre',
            }, {
                arcana: 'Mort 1',
                rote: '',
                description: 'Détecte les âmes dérangées (ex: paranoia)',
            }, {
                arcana: 'Mort 1',
                rote: 'Mysterium',
                description: 'Parler avec les morts',
                alreadyOwned: true,
            }, {
                arcana: 'Mort 2',
                rote: 'Mysterium',
                description: 'Anime les ombres, même sous la lumière',
                vulgar: true,
            }, {
                arcana: 'Mort 2',
                rote: 'Gardiens du voile',
                description: 'Masquer les causes de la mort',
            }, {
                arcana: 'Mort 2',
                rote: 'Gardiens du voile',
                description: 'Corroder, rouiller un objet',
                vulgar: true,
            }, {
                arcana: 'Mort 2',
                rote: '',
                description: 'Bouclier',
            }, {
                arcana: 'Mort 2',
                rote: 'Echelle d\'argent',
                description: 'Convocation de fantome',
            }, {
                arcana: 'Mort 2',
                rote: 'Echelle d\'argent',
                description: 'Créer une jarre, pour y accueilir une âme',
            }, {
                arcana: 'Mort 2',
                rote: 'Gardiens du voile / Mysterium',
                description: 'Supprime son aura',
            }, {
                arcana: 'Mort 2',
                rote: 'Mysterium',
                description: 'Interagir avec les fantomes et leur monde',
                vulgar: true,
            }, {
                arcana: 'Mort 3',
                rote: 'Echelle d\'argent / Mysterium',
                description: 'Donner un ordre à un fantome',
                vulgar: true,
            }, {
                arcana: 'Mort 3',
                rote: 'Gardiens du voile',
                description: 'Détruit un objet',
            }, {
                arcana: 'Mort 3',
                rote: 'Mysterium',
                description: 'Ouvre une porte vers le monde des fantomes',
                vulgar: true,
            }, {
                arcana: 'Mort 3',
                rote: 'Echelle d\'argent',
                description: 'Animer un cadavre #zombie',
                vulgar: true,
            }, {
                arcana: 'Mort 3',
                rote: '',
                description: 'Soigner les fantomes',
                vulgar: true,
            }, {
                arcana: 'Mort 3',
                rote: 'Gardiens du voile',
                description: 'Voler une âme',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Mort 3',
                rote: '',
                description: 'Invocation d\'ombres',
                vulgar: true,
            }, {
                arcana: 'Mort 3',
                rote: 'Gardiens du voile / Echelle d\'argent',
                description: 'Supprime sa vie (temporairement)',
            }, {
                arcana: 'Mort 4',
                rote: 'Mysterium',
                description: 'Draine la force d\'une cible',
            }, {
                arcana: 'Mort 4',
                rote: '',
                description: 'Pourrie la chair de la cible (dégâts + malus sociaux)',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Mort 4',
                rote: '',
                description: 'Détruit son aura pour un moment',
            }, {
                arcana: 'Mort 4',
                rote: 'Mysterium',
                description: 'Se téléporte sans portail dans le monde des fantomes',
                costMana: true,
            }, {
                arcana: 'Mort 5',
                rote: '',
                description: 'Détruit la mana',
            }, {
                arcana: 'Mort 5',
                rote: 'Gardiens du voile',
                description: 'Contrecart un sort de nimporte quelle arcane',
            }, {
                arcana: 'Mort 5',
                rote: 'Mysterium / Gardiens du voile',
                description: 'Améliorer un fantome',
                vulgar: true,
            }, {
                arcana: 'Mort 5',
                rote: 'Mysterium / Echelle d\'argent',
                description: 'Siphonner des années de vie',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Mort 5',
                rote: 'Mysterium / Echelle d\'argent',
                description: 'Invocation de fantome',
                vulgar: true,
            },
            {},
            {
                arcana: 'Destin 1',
                rote: 'Conseil Libre',
                description: 'Attire un léger vent de chance',
            }, {
                arcana: 'Destin 1',
                rote: 'Mysterium',
                description: 'Réduit les malus en se concentrant',
            }, {
                arcana: 'Destin 1',
                rote: 'Mysterium / Gawain',
                description: 'Vision du mage',
                costReduced: true,
            }, {
                arcana: 'Destin 2',
                rote: 'Conseil Libre',
                description: 'Attire une bonne fortune',
            }, {
                arcana: 'Destin 2',
                rote: '',
                description: 'Relance les dés sur 9+',
                costMana: true,
            }, {
                arcana: 'Destin 2',
                rote: 'Echelle d\'argent / Gardiens du voile',
                description: 'Donner des malus à une cible',
                costMana: true,
            }, {
                arcana: 'Destin 2',
                rote: 'Gardiens du voile',
                description: 'Bouclier',
            }, {
                arcana: 'Destin 3',
                rote: 'Conseil Libre',
                description: 'Donner à quelqun la relance de dés sur 9+',
                costMana: true,
            }, {
                arcana: 'Destin 3',
                rote: 'Mysterium',
                description: 'Bonus d\'utilisation d\'objet',
            }, {
                arcana: 'Destin 3',
                rote: '',
                description: 'Malus d\'utilisation d\'objet',
            }, {
                arcana: 'Destin 3',
                rote: 'Gardiens du voile / Echelle d\'argent',
                description: 'Cacher sa destinée',
            }, {
                arcana: 'Destin 3',
                rote: 'Echelle d\'argent',
                description: 'Relance les dés sur 8+',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Destin 4',
                rote: 'Gardiens du voile',
                description: 'Détruit l\'attache d\'une âme',
                vulgar: true,
            }, {
                arcana: 'Destin 5',
                rote: 'Gardiens du voile / Mysterium',
                description: 'Se forger une destinée',
                costMana: true,
            }, {
                arcana: 'Destin 5',
                rote: '',
                description: 'Forger un destin funeste',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Destin 5',
                rote: 'Mysterium',
                description: 'Protection divine',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Destin 5',
                rote: '',
                description: 'Maudit la cible',
                vulgar: true,
                costMana: true,
            },
            {},
            {
                arcana: 'Forces 1',
                rote: 'Mysterium',
                description: 'Influencer la chaleur',
            }, {
                arcana: 'Forces 1',
                rote: 'Echelle d\'argent',
                description: 'Influencer la lumière',
            }, {
                arcana: 'Forces 1',
                rote: '',
                description: 'Vision dans le noir',
            }, {
                arcana: 'Forces 1',
                rote: 'Mysterium / Echelle d\'argent',
                description: 'Vision du mage',
                alreadyOwned: true,
            }, {
                arcana: 'Forces 1',
                rote: 'Gardiens du voile / Mysterium',
                description: 'Ecouter les hautes fréquences (comme les chien)',
            }, {
                arcana: 'Forces 1',
                rote: '',
                description: 'Ecouter les ondes radio',
            }, {
                arcana: 'Forces 2',
                rote: 'Mysterium',
                description: 'Controler la chaleur',
            }, {
                arcana: 'Forces 2',
                rote: 'Gardiens du voile',
                description: 'Controler la lumière',
            }, {
                arcana: 'Forces 2',
                rote: 'Echelle d\'argent',
                description: 'Controler le son',
            }, {
                arcana: 'Forces 2',
                rote: '',
                description: 'Influencer l\'electricité',
                vulgar: true,
            }, {
                arcana: 'Forces 2',
                rote: 'Gardiens du voile',
                description: 'Influencer le feu',
                vulgar: true,
            }, {
                arcana: 'Forces 2',
                rote: 'Gardiens du voile / Echelle d\'argent',
                description: 'Rendre invisible un objet',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Forces 2',
                rote: '',
                description: 'Coup de poing kinetic à distance',
                vulgar: true,
            }, {
                arcana: 'Forces 2',
                rote: 'Mysterium / Gardiens du voile',
                description: 'Transmettre oralement sur une fréquence radio',
            }, {
                arcana: 'Forces 2',
                rote: '',
                description: 'Bouclier',
            }, {
                arcana: 'Forces 3',
                rote: 'Gardiens du voile',
                description: 'Appel la foudre et la fait s\'abatre sur une cible',
            }, {
                arcana: 'Forces 3',
                rote: 'Mysterium',
                description: 'Controler l\'electricité',
            }, {
                arcana: 'Forces 3',
                rote: '',
                description: 'Controler le feu',
            }, {
                arcana: 'Forces 3',
                rote: 'Mysterium',
                description: 'Créer de la lumière',
                vulgar: true,
            }, {
                arcana: 'Forces 3',
                rote: 'Gardiens du voile',
                description: 'Se rendre invisible',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Forces 3',
                rote: 'Gardiens du voile',
                description: 'Créer un son ou un silence',
                vulgar: true,
            }, {
                arcana: 'Forces 3',
                rote: 'Echelle d\'argent',
                description: 'Bouger un objet par telekinesie',
                vulgar: true,
            }, {
                arcana: 'Forces 3',
                rote: '',
                description: 'Lancer une boule de Force telekinetic',
                vulgar: true,
            }, {
                arcana: 'Forces 3',
                rote: '',
                description: 'Redirige des projectiles rapide',
                vulgar: true,
            }, {
                arcana: 'Forces 4',
                rote: 'Gardiens du voile / Echelle d\'argent',
                description: 'Rendre quelqun invisible',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Forces 4',
                rote: 'Mysterium / Gardiens du voile',
                description: 'Augmenter sa propre vitesse',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Forces 4',
                rote: 'Mysterium',
                description: 'Modifier la météo',
            }, {
                arcana: 'Forces 4',
                rote: '',
                description: 'Controler la vélocité d\'un objet',
                vulgar: true,
            }, {
                arcana: 'Forces 4',
                rote: 'Echelle d\'argent',
                description: 'Augmente les forces de friction de l\'air afin de trancher quelqun',
                vulgar: true,
            }, {
                arcana: 'Forces 4',
                rote: 'Gardiens du voile',
                description: 'Lévitation',
                vulgar: true,
            }, {
                arcana: 'Forces 4',
                rote: '',
                description: 'Lancer des éclairs de ses mains',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Forces 4',
                rote: 'Gardiens du voile',
                description: 'Transformer une énergie en une autre, comme du feu en électricité',
                vulgar: true,
            }, {
                arcana: 'Forces 4',
                rote: '',
                description: 'Soulever une cible vivante par telekinesie',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Forces 5',
                rote: 'Gardiens du voile',
                description: 'Créer un changement de météo majeur, comme un tsunami ou une mousson',
                vulgar: true,
            }, {
                arcana: 'Forces 5',
                rote: 'Echelle d\'argent',
                description: 'Augmenter la vitesse de la cible',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Forces 5',
                rote: 'Mysterium',
                description: 'Faire léviter un être vivant',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Forces 5',
                rote: 'Gardiens du voile',
                description: 'Devient invisible, sans besoin de rester concentrer',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Forces 5',
                rote: 'Mysterium',
                description: 'Contrôler la gravié',
                vulgar: true,
            }, {
                arcana: 'Forces 5',
                rote: 'Echelle d\'argent',
                description: 'Créer un mini-soleil',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Forces 5',
                rote: 'Gardiens du voile',
                description: 'Créer un tremblement de terre',
                vulgar: true,
            }, {
                arcana: 'Forces 5',
                rote: 'Mysterium',
                description: 'Créer un EMP',
                vulgar: true,
            }, {
                arcana: 'Forces 5',
                rote: '',
                description: 'Eradiquer les radiations',
                vulgar: true,
            }, {
                arcana: 'Forces 5',
                rote: 'Mysterium',
                description: 'Voler dans les airs comme superman',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Forces 5',
                rote: 'Mysterium',
                description: 'Annuler la gravité',
                vulgar: true,
            }, {
                arcana: 'Forces 5',
                rote: '',
                description: 'Créer des radiations',
                vulgar: true,
            }, {
                arcana: 'Forces 5',
                rote: 'Echelle d\'argent',
                description: 'Maitrise la vélocité environnante, peut arreter les balles comme dans matrix',
                vulgar: true,
            },
            {},
            {
                arcana: 'Vie 1',
                rote: 'Echelle d\'argent',
                description: 'Identifier une espèce',
            }, {
                arcana: 'Vie 1',
                rote: '',
                description: 'Purifier des drogues, toxines et poison',
            }, {
                arcana: 'Vie 1',
                rote: 'Gardiens du voile',
                description: 'Analyser l\'état de vie',
            }, {
                arcana: 'Vie 1',
                rote: 'Mysterium / Gawain',
                description: 'Vision du mage',
                costReduced: true,
                alreadyOwned: true,
            }, {
                arcana: 'Vie 1',
                rote: 'Mystetrium',
                description: 'Détecter la vie',
            }, {
                arcana: 'Vie 2',
                rote: '',
                description: 'Controler son corps : souffle, reflexes, matabolisme et coeur',
            }, {
                arcana: 'Vie 2',
                rote: 'Gardiens du voile',
                description: 'Soigner les animaux et plantes',
            }, {
                arcana: 'Vie 2',
                rote: 'Gardiens du voile / Mysterium',
                description: 'Bouclier',
            }, {
                arcana: 'Vie 2',
                rote: '',
                description: 'Transformer une plante en une autre',
                vulgar: true,
            }, {
                arcana: 'Vie 2',
                rote: 'Mysterium',
                description: 'Purifier une cible des drogues, toxines et poisons',
            }, {
                arcana: 'Vie 2',
                rote: '',
                description: 'Se soigner',
                costMana: true,
            }, {
                arcana: 'Vie 2',
                rote: 'Mysterium',
                description: 'Se purger des maladies',
            }, {
                arcana: 'Vie 2',
                rote: 'Mysterium',
                description: 'Améliorer une compétence physique',
                roll: 'Dextérité + Médecine + Vie',
            }, {
                arcana: 'Vie 3',
                rote: 'Mysterium',
                description: 'Purger les autres des maladies',
            }, {
                arcana: 'Vie 3',
                rote: 'Echelle d\'argent / Gardiens du voile',
                description: 'Donner un ordre à un animal',
            }, {
                arcana: 'Vie 3',
                rote: 'Mysterium / Gardiens du voile',
                description: 'Soigner les autres',
                alreadyOwned: true,
                costMana: true,
            }, {
                arcana: 'Vie 3',
                rote: '',
                description: 'Améliorer ses attributs physique',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Vie 3',
                rote: '',
                description: 'Transformer un animal en un autre',
                vulgar: true,
            }, {
                arcana: 'Vie 3',
                rote: '',
                description: 'Transformer des parties de son corps en plante ou animal',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Vie 3',
                rote: 'Gardiens du voile',
                description: 'Transformer ses yeux, sa couleur de peau, de cheveux, ...',
                vulgar: true,
            }, {
                arcana: 'Vie 4',
                rote: '',
                description: 'Dégrader les attributs physique d\'une plante ou animal',
                vulgar: true,
            }, {
                arcana: 'Vie 4',
                rote: '',
                description: 'Déclenche une maladie',
                costMana: true,
            }, {
                arcana: 'Vie 4',
                rote: 'Gardiens du voile',
                description: 'Copie tout le physique de la cible (doppelganger)',
                vulgar: true,
            }, {
                arcana: 'Vie 4',
                rote: 'Echelle d\'argent',
                description: 'Dégrader les attributs physique d\'une personne',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Vie 4',
                rote: '',
                description: 'Améliorer les attributs physique de la cible',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Vie 4',
                rote: '',
                description: 'Attaque la force vitale de la cible',
                vulgar: true,
            }, {
                arcana: 'Vie 4',
                rote: 'Mysterium',
                description: 'Transformer les yeux, la couleur de peau, de cheveux, ... d\'une personne',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Vie 4',
                rote: 'Echelle d\'argent',
                description: 'Améliorer plusieurs de ses attributs physique',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Vie 5',
                rote: 'Gardiens du voile',
                description: 'Créer une forme de vie',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Vie 5',
                rote: '',
                description: 'Changer une plante ou animal en humain',
                vulgar: true,
            }, {
                arcana: 'Vie 5',
                rote: 'Echelle d\'argent',
                description: 'Créer une bête mystique',
                vulgar: true,
            }, {
                arcana: 'Vie 5',
                rote: 'Echelle d\'argent / Gardiens du voile',
                description: 'Contrôle le corps de la cible',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Vie 5',
                rote: '',
                description: 'Régénération',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Vie 5',
                rote: '',
                description: 'Dégrader plusieurs attributs physiques de la cible',
                vulgar: true,
            }, {
                arcana: 'Vie 5',
                rote: '',
                description: 'Améliorer plusieurs attribts physiques de la cible',
                vulgar: true,
                costMana: true,
            },
            {},
            {
                arcana: 'Matière 1',
                rote: '',
                description: 'Altérer la conductivité',
            }, {
                arcana: 'Matière 1',
                rote: 'Mysterium',
                description: 'Découvrir le mode de fonctionnement d\'un objet',
            }, {
                arcana: 'Matière 1',
                rote: 'Gardiens du voile',
                description: 'Vision du mage',
            }, {
                arcana: 'Matière 1',
                rote: 'Echelle d\'argent',
                description: 'Déetcter les substances',
                alreadyOwned: true,
            }, {
                arcana: 'Matière 1',
                rote: 'Mysterium',
                description: 'Trouver des compartiments secrets',
            }, {
                arcana: 'Matière 2',
                rote: '',
                description: 'Altérer la précision d\'un objet, il peut relancer les dés sur 9+',
                costMana: true,
            }, {
                arcana: 'Matière 2',
                rote: 'Mysterium',
                description: 'Faconner un liquide',
            }, {
                arcana: 'Matière 2',
                rote: 'Gardiens du voile',
                description: 'Transmuter un liquide en un autre',
                vulgar: true,
            }, {
                arcana: 'Matière 2',
                rote: 'Gardiens du voile',
                description: 'Rend transparent un objet',
                vulgar: true,
            }, {
                arcana: 'Matière 2',
                rote: 'Mysterium',
                description: 'Bouclier',
            }, {
                arcana: 'Matière 3',
                rote: 'Echelle d\'argent',
                description: 'Renforcer ou dégrader la durabilité d\'un objet',
                costMana: true,
            }, {
                arcana: 'Matière 3',
                rote: 'Gardiens du voile',
                description: 'Donner des bonus sur la prochaine action',
            }, {
                arcana: 'Matière 3',
                rote: 'Mysterium',
                description: 'Altère la substance d\'un objet, comme rendre une route "plastique"',
                vulgar: true,
            }, {
                arcana: 'Matière 3',
                rote: 'Mysterium',
                description: 'Réparer un objet',
            }, {
                arcana: 'Matière 3',
                rote: 'Echelle d\'argent',
                description: 'Transmuter un solide en un autre, comme du bois en pierre',
                vulgar: true,
            }, {
                arcana: 'Matière 4',
                rote: 'Gardiens du voile',
                description: 'Altérer l\'efficacité d\'un objet',
                costMana: true,
            }, {
                arcana: 'Matière 4',
                rote: '',
                description: 'Détruire une matière',
                vulgar: true,
            }, {
                arcana: 'Matière 4',
                rote: 'Echelle d\'argent',
                description: 'Transmuter ue liquide en solide et vice-versa',
                vulgar: true,
            }, {
                arcana: 'Matière 4',
                rote: 'Echelle d\'argent',
                description: 'Reconfigurer un objet, comme une batte de baseball en épée',
                vulgar: true,
            }, {
                arcana: 'Matière 4',
                rote: '',
                description: 'Altérer l\'air et les gaz',
            }, {
                arcana: 'Matière 4',
                rote: 'Mysterium',
                description: 'Transmuter un gaz en un autre, comme du gaz sarin en oxygène',
                vulgar: true,
            }, {
                arcana: 'Matière 4',
                rote: 'Gardiens du voile',
                description: 'Transmutter unue matière précieuse en une autre, comme de l\'or en bois',
                vulgar: true,
            }, {
                arcana: 'Matière 5',
                rote: '',
                description: 'Altérer la taille d\'un objet',
                vulgar: true,
            }, {
                arcana: 'Matière 5',
                rote: '',
                description: 'Détruit la matière, même magique',
                vulgar: true,
            }, {
                arcana: 'Matière 5',
                rote: 'Gardiens du voile',
                description: 'Transmuter les gaz en solide ou en liquide, vice-versa',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Matière 5',
                rote: 'Echelle d\'argent',
                description: 'Créer un objet à partir de rien',
                vulgar: true,
            }, {
                arcana: 'Matière 5',
                rote: 'Mysterium / Echelle d\'argent',
                description: 'Donne à un objet la capacité de se réparer tout seul',
                vulgar: true,
            },
            {},
            {
                arcana: 'Psyché 1',
                rote: 'Echelle d\'argent / Conseil Libre',
                description: 'Discener l\'état émotionnel d\'une personne',
            }, {
                arcana: 'Psyché 1',
                rote: 'Mysterium / Gardiens du voile',
                description: 'Détecter les conciensce autour de soi',
                alreadyOwned: true,
            }, {
                arcana: 'Psyché 1',
                rote: 'Gardiens du voile / Conseil Libre',
                description: 'Vision du mage',
                alreadyOwned: true,
            }, {
                arcana: 'Psyché 2',
                rote: 'Gardiens du voile / Echelle d\'argent',
                description: 'Altérer son aura',
            }, {
                arcana: 'Psyché 2',
                rote: 'Echelle d\'argent',
                description: 'Manipuler l\'esprit d\'un animal',
            }, {
                arcana: 'Psyché 2',
                rote: 'Mysterium / Gardiens du voile',
                description: 'Suggérer un état émotionnel',
            }, {
                arcana: 'Psyché 2',
                rote: 'Gardiens du voile',
                description: 'Présence incognito',
                alreadyOwned: true,
            }, {
                arcana: 'Psyché 2',
                rote: 'Echelle d\'argent',
                description: 'Bouclier mental',
            }, {
                arcana: 'Psyché 2',
                rote: '',
                description: 'Bouclier',
            }, {
                arcana: 'Psyché 3',
                rote: 'Gardiens du voile',
                description: 'Augmenter l\'une de ses capacité mentale ou sociale',
                costMana: true,
            }, {
                arcana: 'Psyché 3',
                rote: 'Mysterium / Gardiens du voile',
                description: 'Altérer l\'aura d\'une autre personne',
            }, {
                arcana: 'Psyché 3',
                rote: 'Gardiens du voile',
                description: 'Faire croire à une personne que l\'on est une autre personne',
            }, {
                arcana: 'Psyché 3',
                rote: '',
                description: 'Assaut psychique',
                vulgar: true,
            }, {
                arcana: 'Psyché 3',
                rote: '',
                description: 'Parler par télépathie',
            }, {
                arcana: 'Psyché 4',
                rote: 'Echelle d\'argent',
                description: 'Augmenter une des capacité mentale ou sociale d\'une autre personne',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Psyché 4',
                rote: 'Echelle d\'argent',
                description: 'Dégrader une des capacité mentale ou sociale d\'une autre personne',
                costMana: true,
            }, {
                arcana: 'Psyché 4',
                rote: 'Gardiens du voile / Echelle d\'argent',
                description: 'Altérer la mémoie d\'une personne',
            }, {
                arcana: 'Psyché 4',
                rote: 'Mysterium',
                description: 'Entrer dans le rêve de quelqun',
            }, {
                arcana: 'Psyché 4',
                rote: 'Gardiens du voile',
                description: 'Créer une hallucination sensitive',
            }, {
                arcana: 'Psyché 4',
                rote: 'Echelle d\'argent',
                description: 'Entrer dans la conscience de la cible',
            }, {
                arcana: 'Psyché 4',
                rote: 'Mysterium',
                description: 'Projeter son esprit dans le monde des fantomes',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Psyché 4',
                rote: 'Gardiens du voile',
                description: 'Assaut psychic supérieur (léthal)',
            }, {
                arcana: 'Psyché 4',
                rote: 'Mysterium',
                description: 'Augmenter plusieurs de ses attributs mentaux et sociaux',
                costMana: true,
            }, {
                arcana: 'Psyché 4',
                rote: 'Echelle d\'argent',
                description: 'Donne des ordres téléphatique à une personne',
                costMana: true,
            }, {
                arcana: 'Psyché 5',
                rote: '',
                description: 'Créer un canal multiple de téléphatie',
            }, {
                arcana: 'Psyché 5',
                rote: 'Echelle d\'argent',
                description: 'Prendre posssession d\'une personne',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Psyché 5',
                rote: 'Gardiens du voile',
                description: 'Créer une conscience',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Psyché 5',
                rote: 'Gardiens du voile',
                description: 'Reprogrammer psychiquement une personne',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Psyché 5',
                rote: 'Mysterium',
                description: 'Projeter sa conscience à travers le Gantelet',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Psyché 5',
                rote: '',
                description: 'Créer un temple psychique dans le monde des fantome',
                vulgar: true,
            },
            {},
            {
                arcana: 'Prime 1',
                rote: '',
                description: 'Analyser un enchantement'
            }, {
                arcana: 'Prime 1',
                rote: 'Echelle d\'argent',
                description: 'Percevoir les illusions',
            }, {
                arcana: 'Prime 1',
                rote: 'Gardiens du voile',
                description: 'Dissipation de la magie (il faut posséder l\'arcane à dissiper)',
                costMana: true,
            }, {
                arcana: 'Prime 1',
                rote: 'Echelle d\'argent',
                description: 'Inscription de routine dans un grimoire',
            }, {
                arcana: 'Prime 1',
                rote: 'Mysterium / Echelle d\'argent / Gawain',
                description: 'Vision du mage',
                costReduced: true,
                alreadyOwned: true,
            }, {
                arcana: 'Prime 2',
                rote: 'Gardiens du voile / Echelle d\'argent',
                description: 'Contresort primaire',
                costMana: true,
            }, {
                arcana: 'Prime 2',
                rote: 'Echelle d\'argent',
                description: 'Bouclier',
                alreadyOwned: true,
            }, {
                arcana: 'Prime 2',
                rote: 'Gardiens du voile / Echelle d\'argent',
                description: 'Tracer le cercle pour un duel magique',
                costMana: true,
            }, {
                arcana: 'Prime 2',
                rote: 'Gardiens du voile',
                description: 'Transformer son aura',
            }, {
                arcana: 'Prime 2',
                rote: 'Gardiens du voile',
                description: 'Se cacher des détection magiques',
            }, {
                arcana: 'Prime 3',
                rote: 'Gardiens du voile',
                description: 'Bouclier qui protège son âme',
            }, {
                arcana: 'Prime 3',
                rote: '',
                description: 'Attaque au feu céleste',
                vulgar: true,
            }, {
                arcana: 'Prime 3',
                rote: 'Echelle d\'argent',
                description: 'Canaliser du mana depuis une cible, comme une fontaine',
            }, {
                arcana: 'Prime 3',
                rote: '',
                description: 'Créer de la mana solide',
            }, {
                arcana: 'Prime 3',
                rote: 'Mysterium',
                description: 'Camoufler les auras magique',
            }, {
                arcana: 'Prime 3',
                rote: 'Gardiens du voile',
                description: 'Dissoudre la mana solide',
            }, {
                arcana: 'Prime 3',
                rote: 'Mysterium',
                description: 'Echanter un objet pour attaquer ou se défendre dans le monde des fantomes et des esprits',
                vulgar: true,
            }, {
                arcana: 'Prime 3',
                rote: 'Mysterium / Echelle d\'argent',
                description: 'Echanter un objet pour lui ajouter des pouvoirs magiques',
                costMana: true,
            }, {
                arcana: 'Prime 3',
                rote: 'Echelle d\'argent',
                description: 'Créer une illusion inanimée',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Prime 3',
                rote: '',
                description: 'Transformer l\'aura d\'une personne',
            }, {
                arcana: 'Prime 4',
                rote: 'Mysterium',
                description: 'Réveiller une fontainer de mana endormie',
                costMana: true,
            }, {
                arcana: 'Prime 4',
                rote: 'Echelle d\'argent',
                description: 'Créer une illusion qui peut faire des actions mondaines',
                vulgar: true,
            }, {
                arcana: 'Prime 4',
                rote: 'Gardiens du voile',
                description: 'Siphonner l\'essence d\'un esprit, fantome ou locus, en la transformant en mana',
                vulgar: true,
            }, {
                arcana: 'Prime 4',
                rote: 'Gardiens du voile',
                description: 'Dissipation suprème, sans avoir besoin de connaitre les arcanes',
            }, {
                arcana: 'Prime 4',
                rote: 'Gardiens du voile',
                description: 'Désactiver une fontaine de mana',
            }, {
                arcana: 'Prime 5',
                rote: 'Mysterium',
                description: 'Créer une illusion complexe, qui peut copier une personne',
                vulgar: true,
            }, {
                arcana: 'Prime 5',
                rote: 'Mysterium / Echelle d\'argent',
                vulgar: true,
                description: 'Créer une fontaine de mana',
                costMana: true,
            }, {
                arcana: 'Prime 5',
                rote: 'Gardiens du voile',
                description: 'Créer une zone d\'anti-magie',
                vulgar: true,
            }, {
                arcana: 'Prime 5',
                rote: 'Echelle d\'argent / Gardiens du voile',
                description: 'Siphonner la mana à distance',
                vulgar: true,
            },
            {},
            {
                arcana: 'Espace 1',
                rote: 'Gardiens du voile',
                description: 'Analyser les connections entre les objets, personnes, lieux',
            }, {
                arcana: 'Espace 1',
                rote: 'Mysterium',
                description: 'Trouver un objet proche',
            }, {
                arcana: 'Espace 1',
                rote: 'Gawain',
                description: 'Voir à 360°',
                costReduced: true,
            }, {
                arcana: 'Espace 1',
                rote: 'Echelle d\'argent / Mysterium',
                description: 'Vision du mage',
            }, {
                arcana: 'Espace 2',
                rote: 'Mysterium',
                description: 'Traverser un portail récemment créé',
                vulgar: true,
            }, {
                arcana: 'Espace 2',
                rote: 'Gardiens du voile / Mysterium',
                description: 'Voir à distance',
                alreadyOwned: true,
            }, {
                arcana: 'Espace 2',
                rote: 'Echelle d\'argent / Gawain',
                description: 'Bouclier',
                costReduced: true,
            }, {
                arcana: 'Espace 2',
                rote: 'Echelle d\'argent',
                description: 'Barrière magique contre l\'arcane d\'Espace',
            }, {
                arcana: 'Espace 3',
                rote: 'Echelle d\'argent / Gardiens du voile',
                description: 'Barrière magique améliorée, qui combinée avec une autre arcane, bloque ce qui y est lié, exemple avec Vie bloque les humains',
            }, {
                arcana: 'Espace 3',
                rote: '',
                description: 'Voir plusieurs endroits à distance en même temps',
            }, {
                arcana: 'Espace 3',
                rote: 'Mysterium / Echelle d\'argent',
                description: 'Créer un portail',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Espace 3',
                rote: '',
                description: 'Utiliser "Bagarre" à distance',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Espace 4',
                rote: 'Gardiens du voile',
                description: 'Être à 2 endroits en même temps',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Espace 4',
                rote: '',
                description: 'Cacher des objets dans un "sac sans fond"',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Espace 4',
                rote: 'Mysterium / Echelle d\'argent / Gawain',
                description: 'Se téléporte, sans portail',
                vulgar: true,
                costReduced: true,
                costMana: true,
            }, {
                arcana: 'Espace 5',
                rote: 'Mysterium / Gardiens du voile',
                description: 'Cacher un lieu',
            }, {
                arcana: 'Espace 5',
                rote: 'Gardiens du voile',
                description: 'Transformer le lieu en labyrinthe',
                vulgar: true,
            },
            {},
            {
                arcana: 'Esprit 1',
                rote: 'Gardiens du voile / Mysterium',
                description: 'Détecter les esprits',
            }, {
                arcana: 'Esprit 1',
                rote: 'Echelle d\'argent / Mysterium',
                description: 'Vision du mage',
            }, {
                arcana: 'Esprit 1',
                rote: 'Mysterium / Echelle d\'argent',
                description: 'Parler aux esprits',
                alreadyOwned: true,
            }, {
                arcana: 'Esprit 2',
                rote: 'Gardiens du voile',
                description: 'Bouclier',
            }, {
                arcana: 'Esprit 2',
                rote: '',
                description: 'Peut physiquement interagir avec les esprits dans le monde des fantomes',
                vulgar: true,
            }, {
                arcana: 'Esprit 2',
                rote: 'Echelle d\'argent / Mysterium',
                description: 'Convocation d\'esprit',
            }, {
                arcana: 'Esprit 2',
                rote: 'Mysterium',
                description: 'Voir à travers le Gantelet',
            }, {
                arcana: 'Esprit 2',
                rote: 'Mysterium',
                description: 'Analyser un esprit pour connaitre ses forces / faiblesses / pouvoirs',
                roll: 'Intelligence + Occulte + Esprit',
                details: `
<ul>
  <li>1 = Rang + Influence majeure + ~Essence</li>
  <li>2 = Attributs + Influences</li>
  <li>3+ = Numina</li>
</ul>
      `,
            }, {
                arcana: 'Esprit 3',
                rote: 'Mysterium',
                description: 'Donner un ordre à un esprit',
            }, {
                arcana: 'Esprit 3',
                rote: 'Echelle d\'argent / Gardiens du voile',
                description: 'Convocation d\'esprit supérieur',
                vulgar: true,
            }, {
                arcana: 'Esprit 3',
                rote: 'Gardiens du voile',
                description: 'Endommager un esprit dans le monde des morts',
                vulgar: true,
            }, {
                arcana: 'Esprit 3',
                rote: 'Echelle d\'argent',
                description: 'Bouclier contre les pouvoirs des esprits',
            }, {
                arcana: 'Esprit 3',
                rote: 'Mysterium',
                description: 'Soigner un esprit',
                vulgar: true,
            }, {
                arcana: 'Esprit 3',
                rote: 'Gardiens du voile',
                description: 'Restaurer une âme perdue',
                vulgar: true,
            }, {
                arcana: 'Esprit 4',
                rote: 'Gardiens du voile / Mysterium',
                description: 'Créer un objet pour y stocker de l\'essence',
                costMana: true,
            }, {
                arcana: 'Esprit 4',
                rote: 'Mysterium',
                description: 'Canalise de l\'essence d\'une source vers une autre',
            }, {
                arcana: 'Esprit 4',
                rote: 'Mysterium',
                description: 'Appel un esprit gardien pour protéger le mage',
                vulgar: true,
            }, {
                arcana: 'Esprit 4',
                rote: 'Gardiens du voile',
                description: 'Controler la force du Gantelet',
                vulgar: true,
            }, {
                arcana: 'Esprit 5',
                rote: 'Echelle d\'argent',
                description: 'Créer une nouvelle lignée d\'esprit dont le mage en est le parent',
            }, {
                arcana: 'Esprit 5',
                rote: 'Mysterium',
                description: 'Créer un sanctuaire dans le monde des esprits',
                vulgar: true,
            },
            {},
            {
                arcana: 'Temps 1',
                rote: '',
                description: 'Effectue une action au moment parfait, bonus sur l\'action suivante',
                costMana: true,
            }, {
                arcana: 'Temps 1',
                rote: 'Gawain / Conseil Libre',
                description: 'Vision du mage',
                costReduced: true,
            }, {
                arcana: 'Temps 2',
                rote: 'Echelle d\'argent / Gawain',
                description: 'Entrevoi un avenir potentiel',
                vulgar: true,
                costReduced: true,
                costMana: true,
            }, {
                arcana: 'Temps 2',
                rote: 'Conseil Libre',
                description: 'Regarde vers l\'avenir et entrevoie l\'issue d\'une action, avec 2 variables',
                costMana: true,
            }, {
                arcana: 'Temps 2',
                rote: 'Mysterium / Gardiens du voile',
                description: 'Voir ce qu\'il s\'est passé',
                alreadyOwned: true,
            }, {
                arcana: 'Temps 2',
                rote: 'Gardiens du voile / Echelle d\'argent',
                description: 'Bouclier',
            }, {
                arcana: 'Temps 3',
                rote: 'Gawain',
                description: 'Boost tes capacités de vitesse et d\'actions.',
                vulgar: true,
                costReduced: true,
                costMana: true,
            }, {
                arcana: 'Temps 3',
                rote: 'Gardiens du voile, Echelle d\'argent',
                description: 'Entrevoi un avenir potentiel, avec + de détails',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Temps 3',
                rote: 'Echelle d\'argent',
                description: 'Revenir 1 tour en arrière',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Temps 4',
                rote: 'Echelle d\'argent / Mysterium',
                description: 'Ralenti une personne (defense, vitesse, anticipation)',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Temps 4',
                rote: 'Echelle d\'argent',
                description: 'Prévoir le futur proche avec grande précision',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Temps 5',
                rote: '',
                description: 'Envoyer un objet dans le futur',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Temps 5',
                rote: 'Echelle d\'argent',
                description: 'Réécrire l\'histoire',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Temps 5',
                rote: '',
                description: 'Arrêt du temps',
                vulgar: true,
                costMana: true,
            },
            {},
            {
                arcana: 'Destin 1 + Espace 1 + Vie 1',
                rote: 'Gardiens du voile',
                description: 'Vise un être vivant à la perfection, quelque soit la distance',
                costMana: true,
            }, {
                arcana: 'Forces 3 + Psyché 1-5',
                rote: '',
                description: 'Créé un automate magique qui peut effectuer des actions magique de Force',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Forces 4 + Vie 4',
                rote: 'Mysterium',
                description: 'Se métamorpphoser en un être d\'énergie, comme un élémentaire de feu',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Matière 5 + Prime 3',
                rote: 'Echelle d\'argent',
                description: 'Créer la matière la plus précieuse au monde, à base d\'orichalque, de lunargent et de mercure, qui brille au contact de la magie',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Prime 2 + Espace 2',
                rote: '',
                description: 'Détecter toute utilisation de magie dans les environs',
                costMana: true,
            }, {
                arcana: 'Espace 2 + ARCANE',
                rote: '',
                description: 'Lancer un sort à distance',
                costMana: true,
            }, {
                arcana: 'Espace 5 + Forces 3 + Psyché 4 + Temps 4',
                rote: 'Mysterium, Gardiens du voile',
                description: 'Efface complétement une mémoire',
                vulgar: true,
                costMana: true,
            }, {
                arcana: 'Esprit 4 + Prime 4',
                rote: 'Mysterium',
                description: 'Converti de la mana en essence et peut la donner à un esprit',
                costMana: true,
            }, {
                arcana: 'X',
                rote: 'Artefact',
                description: 'Capacité étrange de l\'artefact, sans que cela déchire l\'âme du mage',
                costMana: true,
                alreadyOwned: true,
            }
        ];
    }
    ngOnInit() {
        this.spells = JSON.parse(JSON.stringify(this.allSpells));
    }
    updateFilter() {
        this.spells = JSON.parse(JSON.stringify(this.allSpells));
        if (this.selectedOrder) {
            this.spells = this.spells.filter((spell) => {
                return spell.rote && (spell.rote.indexOf(this.selectedOrder) !== -1 || spell.rote.indexOf('Gawain') !== -1 || spell.rote.indexOf('Artefact') !== -1);
            });
        }
        if (this.selectedArcana) {
            this.spells = this.spells.filter((spell) => {
                return spell.arcana && (spell.arcana.indexOf(this.selectedArcana) !== -1 || spell.arcana === 'X');
            });
        }
    }
}
NwodMageRotesComponent.ɵfac = function NwodMageRotesComponent_Factory(t) { return new (t || NwodMageRotesComponent)(); };
NwodMageRotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NwodMageRotesComponent, selectors: [["app-nwod-mage-rotes"]], decls: 28, vars: 6, consts: [["name", "order", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "arcana", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped"], ["ngFor", "", 3, "ngForOf"], [3, "value"], [1, "special"], ["class", "text-danger", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], ["class", "text-info", 4, "ngIf"], ["class", "text-primary", 4, "ngIf"], ["class", "text-warning", 4, "ngIf"], [1, "text-danger"], [1, "text-success"], [1, "text-info"], [1, "text-primary"], [1, "text-warning"]], template: function NwodMageRotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Filter : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Par ordre :\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageRotesComponent_Template_select_ngModelChange_3_listener($event) { return ctx.selectedOrder = $event; })("ngModelChange", function NwodMageRotesComponent_Template_select_ngModelChange_3_listener() { return ctx.updateFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NwodMageRotesComponent_option_5_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Par arcane :\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMageRotesComponent_Template_select_ngModelChange_8_listener($event) { return ctx.selectedArcana = $event; })("ngModelChange", function NwodMageRotesComponent_Template_select_ngModelChange_8_listener() { return ctx.updateFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NwodMageRotesComponent_option_10_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Arcane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Routine ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sp\u00E9cial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NwodMageRotesComponent_ng_template_27_Template, 13, 8, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedArcana);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arcanas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Nombre de Routines : ", ctx.spells.length, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spells);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".special[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL253b2QvbWFnZS9yb3Rlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbndvZC9tYWdlL3JvdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL253b2QvbWFnZS9yb3Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVjaWFsIHNwYW4gKyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbiIsIi5zcGVjaWFsIHNwYW4gKyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NwodMageRotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nwod-mage-rotes',
                templateUrl: './rotes.component.html',
                styleUrls: ['./rotes.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/nwod/mortal/new.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nwod/mortal/new.component.ts ***!
  \**********************************************/
/*! exports provided: NwodMortalNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwodMortalNewComponent", function() { return NwodMortalNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function NwodMortalNewComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMortalNewComponent_ng_template_4_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r7.form[item_r6] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.form[item_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", item_r6);
} }
function NwodMortalNewComponent_ng_template_5_ng_template_0_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMortalNewComponent_ng_template_5_ng_template_0_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const score_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const atttribute_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.clickDot(atttribute_r9, score_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const atttribute_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("dot ", atttribute_r9, "-", score_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r12.form[atttribute_r9] >= score_r11);
} }
function NwodMortalNewComponent_ng_template_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NwodMortalNewComponent_ng_template_5_ng_template_0_ng_template_0_Template, 1, 6, "ng-template", 10);
} if (rf & 2) {
    const score_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", score_r11 > 1);
} }
function NwodMortalNewComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NwodMortalNewComponent_ng_template_5_ng_template_0_Template, 1, 1, "ng-template", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arrayOfFive);
} }
function NwodMortalNewComponent_ng_template_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMortalNewComponent_ng_template_6_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const score_r21 = ctx.$implicit; const skill_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.clickDot(skill_r19, score_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r21 = ctx.$implicit;
    const skill_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("dot ", skill_r19, "-", score_r21, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r20.form[skill_r19] >= score_r21);
} }
function NwodMortalNewComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NwodMortalNewComponent_ng_template_6_ng_template_0_Template, 1, 6, "ng-template", 3);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.arrayOfFive);
} }
function NwodMortalNewComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const score_r26 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dot health-", score_r26, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r3.form.health >= score_r26);
} }
function NwodMortalNewComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const score_r27 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dot willpower-", score_r27, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r4.form.willpower >= score_r27);
} }
function NwodMortalNewComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMortalNewComponent_ng_template_14_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const score_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.clickDot("morality", score_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r28 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dot morality-", score_r28, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", ctx_r5.form.morality >= score_r28);
} }
class NwodMortalNewComponent {
    constructor() {
        this.form = {};
        this.arrayOfCharacter = [
            'name',
            'age',
            'player',
            'concept',
            'virtue',
            'vice',
            'chronicle',
            'faction',
            'groupname',
        ];
        this.arrayOfFive = [1, 2, 3, 4, 5];
        this.arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.arrayOfTwelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.arrayOfAttributes = [
            'intelligence',
            'wits',
            'resolve',
            'strength',
            'dexterity',
            'stamina',
            'presence',
            'manipulation',
            'composure',
        ];
        this.arrayOfSkills = [
            'academics',
            'computer',
            'crafts',
            'investigation',
            'medicine',
            'occult',
            'politics',
            'science',
            'athletics',
            'brawl',
            'drive',
            'firearms',
            'larceny',
            'stealth',
            'survival',
            'weaponry',
            'animalken',
            'empathy',
            'expression',
            'intimidation',
            'persuasion',
            'socialize',
            'streetwise',
            'subterfuge'
        ];
        this.debug = false;
        this.resetSheet();
    }
    clickDot(dotName, score) {
        if (this.form[dotName] < score) {
            this.form[dotName]++;
        }
        else {
            this.form[dotName]--;
        }
        this.formChanged();
    }
    formChanged() {
        this.form.speed = this.form.strength + this.form.dexterity + 5;
        this.form.initiative = this.form.dexterity + this.form.composure;
        this.form.defense = Math.min(this.form.dexterity, this.form.wits);
        this.form.health = this.form.size + this.form.stamina;
        this.form.willpower = this.form.resolve + this.form.composure;
    }
    resetSheet() {
        for (const item of this.arrayOfCharacter) {
            this.form[item] = '';
        }
        for (const attribute of this.arrayOfAttributes) {
            this.form[attribute] = 1;
        }
        for (const skill of this.arrayOfSkills) {
            this.form[skill] = 0;
        }
        this.form.size = 5;
        this.form.armor = 0;
        this.form.morality = 7;
        this.formChanged();
    }
}
NwodMortalNewComponent.ɵfac = function NwodMortalNewComponent_Factory(t) { return new (t || NwodMortalNewComponent)(); };
NwodMortalNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NwodMortalNewComponent, selectors: [["app-nwod-mortal-new"]], decls: 15, vars: 13, consts: [["type", "button", 3, "click"], [1, "sheet-container"], ["src", "assets/nwod/nwod-sheet.jpg", 1, "sheet"], ["ngFor", "", 3, "ngForOf"], ["type", "number", "name", "size", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "speed", "disabled", "", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "initiative", "disabled", "", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "defense", "disabled", "", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "armor", 3, "ngModel", "ngModelChange"], ["type", "text", "maxlength", "18", 1, "border-bottom", 3, "ngModel", "ngModelChange"], [3, "ngIf"], [3, "click"]], template: function NwodMortalNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NwodMortalNewComponent_Template_button_click_0_listener() { return ctx.debug = !ctx.debug; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "toggle DEBUG mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NwodMortalNewComponent_ng_template_4_Template, 1, 2, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NwodMortalNewComponent_ng_template_5_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NwodMortalNewComponent_ng_template_6_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMortalNewComponent_Template_input_ngModelChange_7_listener($event) { return (ctx.form["size"] = $event); })("ngModelChange", function NwodMortalNewComponent_Template_input_ngModelChange_7_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMortalNewComponent_Template_input_ngModelChange_8_listener($event) { return (ctx.form["speed"] = $event); })("ngModelChange", function NwodMortalNewComponent_Template_input_ngModelChange_8_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMortalNewComponent_Template_input_ngModelChange_9_listener($event) { return (ctx.form["initiative"] = $event); })("ngModelChange", function NwodMortalNewComponent_Template_input_ngModelChange_9_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMortalNewComponent_Template_input_ngModelChange_10_listener($event) { return (ctx.form["defense"] = $event); })("ngModelChange", function NwodMortalNewComponent_Template_input_ngModelChange_10_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NwodMortalNewComponent_Template_input_ngModelChange_11_listener($event) { return (ctx.form["armor"] = $event); })("ngModelChange", function NwodMortalNewComponent_Template_input_ngModelChange_11_listener() { return ctx.formChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NwodMortalNewComponent_ng_template_12_Template, 1, 5, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NwodMortalNewComponent_ng_template_13_Template, 1, 5, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NwodMortalNewComponent_ng_template_14_Template, 1, 5, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("debug", ctx.debug);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfCharacter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfAttributes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfSkills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["size"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["speed"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["initiative"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["defense"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form["armor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfTwelve);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfTen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfTen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".debug[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.debug[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: red;\n}\n.sheet-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sheet[_ngcontent-%COMP%] {\n  width: 970px;\n}\ninput[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  width: 140px;\n  padding: 0 2px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  cursor: text;\n  outline: none;\n  font-size: 14px;\n}\ninput[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n}\n.dot[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  width: 8px;\n  height: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.dot[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.dot.filled[_ngcontent-%COMP%] {\n  background: black;\n}\ninput[name=name][_ngcontent-%COMP%] {\n  top: 160px;\n  left: 187px;\n  width: 165px;\n}\ninput[name=age][_ngcontent-%COMP%] {\n  top: 183px;\n  left: 187px;\n  width: 165px;\n}\ninput[name=player][_ngcontent-%COMP%] {\n  top: 206px;\n  left: 187px;\n  width: 165px;\n}\ninput[name=concept][_ngcontent-%COMP%] {\n  top: 160px;\n  left: 423px;\n  width: 164px;\n}\ninput[name=virtue][_ngcontent-%COMP%] {\n  top: 183px;\n  left: 423px;\n  width: 164px;\n}\ninput[name=vice][_ngcontent-%COMP%] {\n  top: 206px;\n  left: 423px;\n  width: 164px;\n}\ninput[name=chronicle][_ngcontent-%COMP%] {\n  top: 160px;\n  left: 682px;\n  width: 153px;\n}\ninput[name=faction][_ngcontent-%COMP%] {\n  top: 183px;\n  left: 682px;\n  width: 153px;\n}\ninput[name=groupname][_ngcontent-%COMP%] {\n  top: 206px;\n  left: 682px;\n  width: 153px;\n}\n.intelligence-2[_ngcontent-%COMP%] {\n  top: 275px;\n  left: 389px;\n}\n.intelligence-3[_ngcontent-%COMP%] {\n  top: 275px;\n  left: 400px;\n}\n.intelligence-4[_ngcontent-%COMP%] {\n  top: 275px;\n  left: 410px;\n}\n.intelligence-5[_ngcontent-%COMP%] {\n  top: 275px;\n  left: 421px;\n}\n.wits-2[_ngcontent-%COMP%] {\n  top: 316px;\n  left: 390px;\n}\n.wits-3[_ngcontent-%COMP%] {\n  top: 316px;\n  left: 400px;\n}\n.wits-4[_ngcontent-%COMP%] {\n  top: 316px;\n  left: 410px;\n}\n.wits-5[_ngcontent-%COMP%] {\n  top: 316px;\n  left: 421px;\n}\n.resolve-2[_ngcontent-%COMP%] {\n  top: 355px;\n  left: 389px;\n}\n.resolve-3[_ngcontent-%COMP%] {\n  top: 355px;\n  left: 400px;\n}\n.resolve-4[_ngcontent-%COMP%] {\n  top: 355px;\n  left: 410px;\n}\n.resolve-5[_ngcontent-%COMP%] {\n  top: 355px;\n  left: 421px;\n}\n.strength-2[_ngcontent-%COMP%] {\n  top: 276px;\n  left: 587px;\n}\n.strength-3[_ngcontent-%COMP%] {\n  top: 276px;\n  left: 597px;\n}\n.strength-4[_ngcontent-%COMP%] {\n  top: 276px;\n  left: 606px;\n}\n.strength-5[_ngcontent-%COMP%] {\n  top: 276px;\n  left: 617px;\n}\n.dexterity-2[_ngcontent-%COMP%] {\n  top: 316px;\n  left: 589px;\n}\n.dexterity-3[_ngcontent-%COMP%] {\n  top: 316px;\n  left: 599px;\n}\n.dexterity-4[_ngcontent-%COMP%] {\n  top: 316px;\n  left: 609px;\n}\n.dexterity-5[_ngcontent-%COMP%] {\n  top: 316px;\n  left: 619px;\n}\n.stamina-2[_ngcontent-%COMP%] {\n  top: 355px;\n  left: 589px;\n}\n.stamina-3[_ngcontent-%COMP%] {\n  top: 355px;\n  left: 598px;\n}\n.stamina-4[_ngcontent-%COMP%] {\n  top: 355px;\n  left: 608px;\n}\n.stamina-5[_ngcontent-%COMP%] {\n  top: 355px;\n  left: 619px;\n}\n.presence-2[_ngcontent-%COMP%] {\n  top: 275px;\n  left: 783px;\n}\n.presence-3[_ngcontent-%COMP%] {\n  top: 275px;\n  left: 793px;\n}\n.presence-4[_ngcontent-%COMP%] {\n  top: 275px;\n  left: 803px;\n}\n.presence-5[_ngcontent-%COMP%] {\n  top: 275px;\n  left: 813px;\n}\n.manipulation-2[_ngcontent-%COMP%] {\n  top: 318px;\n  left: 783px;\n}\n.manipulation-3[_ngcontent-%COMP%] {\n  top: 318px;\n  left: 793px;\n}\n.manipulation-4[_ngcontent-%COMP%] {\n  top: 318px;\n  left: 803px;\n}\n.manipulation-5[_ngcontent-%COMP%] {\n  top: 318px;\n  left: 813px;\n}\n.composure-2[_ngcontent-%COMP%] {\n  top: 357px;\n  left: 784px;\n}\n.composure-3[_ngcontent-%COMP%] {\n  top: 357px;\n  left: 794px;\n}\n.composure-4[_ngcontent-%COMP%] {\n  top: 357px;\n  left: 804px;\n}\n.composure-5[_ngcontent-%COMP%] {\n  top: 357px;\n  left: 813px;\n}\n.academics-1[_ngcontent-%COMP%] {\n  top: 494px;\n  left: 309px;\n}\n.academics-2[_ngcontent-%COMP%] {\n  top: 494px;\n  left: 318px;\n}\n.academics-3[_ngcontent-%COMP%] {\n  top: 494px;\n  left: 328px;\n}\n.academics-4[_ngcontent-%COMP%] {\n  top: 494px;\n  left: 338px;\n}\n.academics-5[_ngcontent-%COMP%] {\n  top: 494px;\n  left: 348px;\n}\n.computer-1[_ngcontent-%COMP%] {\n  top: 516px;\n  left: 308px;\n}\n.computer-2[_ngcontent-%COMP%] {\n  top: 516px;\n  left: 318px;\n}\n.computer-3[_ngcontent-%COMP%] {\n  top: 516px;\n  left: 328px;\n}\n.computer-4[_ngcontent-%COMP%] {\n  top: 516px;\n  left: 338px;\n}\n.computer-5[_ngcontent-%COMP%] {\n  top: 516px;\n  left: 348px;\n}\n.crafts-1[_ngcontent-%COMP%] {\n  top: 539px;\n  left: 309px;\n}\n.crafts-2[_ngcontent-%COMP%] {\n  top: 539px;\n  left: 318px;\n}\n.crafts-3[_ngcontent-%COMP%] {\n  top: 539px;\n  left: 328px;\n}\n.crafts-4[_ngcontent-%COMP%] {\n  top: 539px;\n  left: 338px;\n}\n.crafts-5[_ngcontent-%COMP%] {\n  top: 539px;\n  left: 348px;\n}\n.investigation-1[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 308px;\n}\n.investigation-2[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 318px;\n}\n.investigation-3[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 328px;\n}\n.investigation-4[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 338px;\n}\n.investigation-5[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 348px;\n}\n.medicine-1[_ngcontent-%COMP%] {\n  top: 583px;\n  left: 309px;\n}\n.medicine-2[_ngcontent-%COMP%] {\n  top: 583px;\n  left: 318px;\n}\n.medicine-3[_ngcontent-%COMP%] {\n  top: 583px;\n  left: 328px;\n}\n.medicine-4[_ngcontent-%COMP%] {\n  top: 583px;\n  left: 338px;\n}\n.medicine-5[_ngcontent-%COMP%] {\n  top: 583px;\n  left: 347px;\n}\n.occult-1[_ngcontent-%COMP%] {\n  top: 605px;\n  left: 308px;\n}\n.occult-2[_ngcontent-%COMP%] {\n  top: 605px;\n  left: 318px;\n}\n.occult-3[_ngcontent-%COMP%] {\n  top: 605px;\n  left: 328px;\n}\n.occult-4[_ngcontent-%COMP%] {\n  top: 605px;\n  left: 338px;\n}\n.occult-5[_ngcontent-%COMP%] {\n  top: 605px;\n  left: 348px;\n}\n.politics-1[_ngcontent-%COMP%] {\n  top: 627px;\n  left: 308px;\n}\n.politics-2[_ngcontent-%COMP%] {\n  top: 627px;\n  left: 318px;\n}\n.politics-3[_ngcontent-%COMP%] {\n  top: 627px;\n  left: 328px;\n}\n.politics-4[_ngcontent-%COMP%] {\n  top: 627px;\n  left: 338px;\n}\n.politics-5[_ngcontent-%COMP%] {\n  top: 627px;\n  left: 348px;\n}\n.science-1[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 308px;\n}\n.science-2[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 318px;\n}\n.science-3[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 328px;\n}\n.science-4[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 338px;\n}\n.science-5[_ngcontent-%COMP%] {\n  top: 649px;\n  left: 348px;\n}\n.athletics-1[_ngcontent-%COMP%] {\n  top: 732px;\n  left: 308px;\n}\n.athletics-2[_ngcontent-%COMP%] {\n  top: 732px;\n  left: 318px;\n}\n.athletics-3[_ngcontent-%COMP%] {\n  top: 732px;\n  left: 328px;\n}\n.athletics-4[_ngcontent-%COMP%] {\n  top: 732px;\n  left: 338px;\n}\n.athletics-5[_ngcontent-%COMP%] {\n  top: 732px;\n  left: 347px;\n}\n.brawl-1[_ngcontent-%COMP%] {\n  top: 754px;\n  left: 308px;\n}\n.brawl-2[_ngcontent-%COMP%] {\n  top: 754px;\n  left: 318px;\n}\n.brawl-3[_ngcontent-%COMP%] {\n  top: 754px;\n  left: 328px;\n}\n.brawl-4[_ngcontent-%COMP%] {\n  top: 754px;\n  left: 338px;\n}\n.brawl-5[_ngcontent-%COMP%] {\n  top: 754px;\n  left: 347px;\n}\n.drive-1[_ngcontent-%COMP%] {\n  top: 777px;\n  left: 308px;\n}\n.drive-2[_ngcontent-%COMP%] {\n  top: 777px;\n  left: 318px;\n}\n.drive-3[_ngcontent-%COMP%] {\n  top: 777px;\n  left: 328px;\n}\n.drive-4[_ngcontent-%COMP%] {\n  top: 777px;\n  left: 338px;\n}\n.drive-5[_ngcontent-%COMP%] {\n  top: 777px;\n  left: 348px;\n}\n.firearms-1[_ngcontent-%COMP%] {\n  top: 799px;\n  left: 308px;\n}\n.firearms-2[_ngcontent-%COMP%] {\n  top: 799px;\n  left: 318px;\n}\n.firearms-3[_ngcontent-%COMP%] {\n  top: 799px;\n  left: 328px;\n}\n.firearms-4[_ngcontent-%COMP%] {\n  top: 799px;\n  left: 338px;\n}\n.firearms-5[_ngcontent-%COMP%] {\n  top: 799px;\n  left: 348px;\n}\n.larceny-1[_ngcontent-%COMP%] {\n  top: 821px;\n  left: 308px;\n}\n.larceny-2[_ngcontent-%COMP%] {\n  top: 821px;\n  left: 318px;\n}\n.larceny-3[_ngcontent-%COMP%] {\n  top: 821px;\n  left: 328px;\n}\n.larceny-4[_ngcontent-%COMP%] {\n  top: 821px;\n  left: 338px;\n}\n.larceny-5[_ngcontent-%COMP%] {\n  top: 821px;\n  left: 348px;\n}\n.stealth-1[_ngcontent-%COMP%] {\n  top: 843px;\n  left: 307px;\n}\n.stealth-2[_ngcontent-%COMP%] {\n  top: 843px;\n  left: 318px;\n}\n.stealth-3[_ngcontent-%COMP%] {\n  top: 843px;\n  left: 328px;\n}\n.stealth-4[_ngcontent-%COMP%] {\n  top: 843px;\n  left: 338px;\n}\n.stealth-5[_ngcontent-%COMP%] {\n  top: 843px;\n  left: 347px;\n}\n.survival-1[_ngcontent-%COMP%] {\n  top: 865px;\n  left: 308px;\n}\n.survival-2[_ngcontent-%COMP%] {\n  top: 865px;\n  left: 318px;\n}\n.survival-3[_ngcontent-%COMP%] {\n  top: 865px;\n  left: 328px;\n}\n.survival-4[_ngcontent-%COMP%] {\n  top: 865px;\n  left: 338px;\n}\n.survival-5[_ngcontent-%COMP%] {\n  top: 865px;\n  left: 347px;\n}\n.weaponry-1[_ngcontent-%COMP%] {\n  top: 887px;\n  left: 309px;\n}\n.weaponry-2[_ngcontent-%COMP%] {\n  top: 887px;\n  left: 318px;\n}\n.weaponry-3[_ngcontent-%COMP%] {\n  top: 887px;\n  left: 328px;\n}\n.weaponry-4[_ngcontent-%COMP%] {\n  top: 887px;\n  left: 338px;\n}\n.weaponry-5[_ngcontent-%COMP%] {\n  top: 887px;\n  left: 347px;\n}\n.animalken-1[_ngcontent-%COMP%] {\n  top: 970px;\n  left: 311px;\n}\n.animalken-2[_ngcontent-%COMP%] {\n  top: 970px;\n  left: 321px;\n}\n.animalken-3[_ngcontent-%COMP%] {\n  top: 970px;\n  left: 331px;\n}\n.animalken-4[_ngcontent-%COMP%] {\n  top: 970px;\n  left: 341px;\n}\n.animalken-5[_ngcontent-%COMP%] {\n  top: 970px;\n  left: 351px;\n}\n.empathy-1[_ngcontent-%COMP%] {\n  top: 992px;\n  left: 311px;\n}\n.empathy-2[_ngcontent-%COMP%] {\n  top: 992px;\n  left: 321px;\n}\n.empathy-3[_ngcontent-%COMP%] {\n  top: 992px;\n  left: 331px;\n}\n.empathy-4[_ngcontent-%COMP%] {\n  top: 992px;\n  left: 341px;\n}\n.empathy-5[_ngcontent-%COMP%] {\n  top: 992px;\n  left: 351px;\n}\n.expression-1[_ngcontent-%COMP%] {\n  top: 1014px;\n  left: 312px;\n}\n.expression-2[_ngcontent-%COMP%] {\n  top: 1014px;\n  left: 321px;\n}\n.expression-3[_ngcontent-%COMP%] {\n  top: 1014px;\n  left: 331px;\n}\n.expression-4[_ngcontent-%COMP%] {\n  top: 1014px;\n  left: 341px;\n}\n.expression-5[_ngcontent-%COMP%] {\n  top: 1014px;\n  left: 351px;\n}\n.intimidation-1[_ngcontent-%COMP%] {\n  top: 1036px;\n  left: 311px;\n}\n.intimidation-2[_ngcontent-%COMP%] {\n  top: 1036px;\n  left: 321px;\n}\n.intimidation-3[_ngcontent-%COMP%] {\n  top: 1036px;\n  left: 331px;\n}\n.intimidation-4[_ngcontent-%COMP%] {\n  top: 1036px;\n  left: 341px;\n}\n.intimidation-5[_ngcontent-%COMP%] {\n  top: 1036px;\n  left: 351px;\n}\n.persuasion-1[_ngcontent-%COMP%] {\n  top: 1058px;\n  left: 312px;\n}\n.persuasion-2[_ngcontent-%COMP%] {\n  top: 1058px;\n  left: 321px;\n}\n.persuasion-3[_ngcontent-%COMP%] {\n  top: 1058px;\n  left: 331px;\n}\n.persuasion-4[_ngcontent-%COMP%] {\n  top: 1058px;\n  left: 341px;\n}\n.persuasion-5[_ngcontent-%COMP%] {\n  top: 1058px;\n  left: 351px;\n}\n.socialize-1[_ngcontent-%COMP%] {\n  top: 1081px;\n  left: 312px;\n}\n.socialize-2[_ngcontent-%COMP%] {\n  top: 1081px;\n  left: 321px;\n}\n.socialize-3[_ngcontent-%COMP%] {\n  top: 1081px;\n  left: 331px;\n}\n.socialize-4[_ngcontent-%COMP%] {\n  top: 1081px;\n  left: 341px;\n}\n.socialize-5[_ngcontent-%COMP%] {\n  top: 1081px;\n  left: 351px;\n}\n.streetwise-1[_ngcontent-%COMP%] {\n  top: 1103px;\n  left: 312px;\n}\n.streetwise-2[_ngcontent-%COMP%] {\n  top: 1103px;\n  left: 321px;\n}\n.streetwise-3[_ngcontent-%COMP%] {\n  top: 1103px;\n  left: 331px;\n}\n.streetwise-4[_ngcontent-%COMP%] {\n  top: 1103px;\n  left: 341px;\n}\n.streetwise-5[_ngcontent-%COMP%] {\n  top: 1103px;\n  left: 351px;\n}\n.subterfuge-1[_ngcontent-%COMP%] {\n  top: 1125px;\n  left: 311px;\n}\n.subterfuge-2[_ngcontent-%COMP%] {\n  top: 1125px;\n  left: 321px;\n}\n.subterfuge-3[_ngcontent-%COMP%] {\n  top: 1125px;\n  left: 331px;\n}\n.subterfuge-4[_ngcontent-%COMP%] {\n  top: 1125px;\n  left: 341px;\n}\n.subterfuge-5[_ngcontent-%COMP%] {\n  top: 1125px;\n  left: 351px;\n}\n.health-1[_ngcontent-%COMP%] {\n  top: 477px;\n  left: 627px;\n}\n.health-2[_ngcontent-%COMP%] {\n  top: 477px;\n  left: 644px;\n}\n.health-3[_ngcontent-%COMP%] {\n  top: 477px;\n  left: 660px;\n}\n.health-4[_ngcontent-%COMP%] {\n  top: 477px;\n  left: 677px;\n}\n.health-5[_ngcontent-%COMP%] {\n  top: 477px;\n  left: 694px;\n}\n.health-6[_ngcontent-%COMP%] {\n  top: 477px;\n  left: 710px;\n}\n.health-7[_ngcontent-%COMP%] {\n  top: 477px;\n  left: 727px;\n}\n.health-8[_ngcontent-%COMP%] {\n  top: 477px;\n  left: 744px;\n}\n.health-9[_ngcontent-%COMP%] {\n  top: 477px;\n  left: 760px;\n}\n.health-10[_ngcontent-%COMP%] {\n  top: 477px;\n  left: 777px;\n}\n.health-11[_ngcontent-%COMP%] {\n  top: 477px;\n  left: 794px;\n}\n.health-12[_ngcontent-%COMP%] {\n  top: 477px;\n  left: 810px;\n}\n.willpower-1[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 643px;\n}\n.willpower-2[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 660px;\n}\n.willpower-3[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 677px;\n}\n.willpower-4[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 693px;\n}\n.willpower-5[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 710px;\n}\n.willpower-6[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 727px;\n}\n.willpower-7[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 743px;\n}\n.willpower-8[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 760px;\n}\n.willpower-9[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 777px;\n}\n.willpower-10[_ngcontent-%COMP%] {\n  top: 561px;\n  left: 793px;\n}\n.morality-1[_ngcontent-%COMP%] {\n  top: 838px;\n  left: 794px;\n}\n.morality-2[_ngcontent-%COMP%] {\n  top: 815px;\n  left: 794px;\n}\n.morality-3[_ngcontent-%COMP%] {\n  top: 793px;\n  left: 794px;\n}\n.morality-4[_ngcontent-%COMP%] {\n  top: 771px;\n  left: 794px;\n}\n.morality-5[_ngcontent-%COMP%] {\n  top: 749px;\n  left: 794px;\n}\n.morality-6[_ngcontent-%COMP%] {\n  top: 727px;\n  left: 794px;\n}\n.morality-7[_ngcontent-%COMP%] {\n  top: 704px;\n  left: 794px;\n}\n.morality-8[_ngcontent-%COMP%] {\n  top: 682px;\n  left: 794px;\n}\n.morality-9[_ngcontent-%COMP%] {\n  top: 660px;\n  left: 794px;\n}\n.morality-10[_ngcontent-%COMP%] {\n  top: 638px;\n  left: 794px;\n}\ninput[name=size][_ngcontent-%COMP%] {\n  top: 793px;\n  left: 421px;\n  width: 176px;\n}\ninput[name=speed][_ngcontent-%COMP%] {\n  top: 819px;\n  left: 430px;\n  width: 167px;\n}\ninput[name=initiative][_ngcontent-%COMP%] {\n  top: 849px;\n  left: 484px;\n  width: 113px;\n}\ninput[name=defense][_ngcontent-%COMP%] {\n  top: 879px;\n  left: 446px;\n  width: 151px;\n}\ninput[name=armor][_ngcontent-%COMP%] {\n  top: 909px;\n  left: 434px;\n  width: 163px;\n}\n.li-empty[_ngcontent-%COMP%] {\n  list-style: none;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL253b2QvbW9ydGFsL25ldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbndvZC9tb3J0YWwvbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUNBSjtBREVFO0VBQ0UsZUFBQTtBQ0FKO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxZQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDREY7QURFRTtFQUNFLG9DQUFBO0FDQUo7QURJQTtFQUNFLHdCQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDREY7QURFRTtFQUNFLG9DQUFBO0FDQUo7QURFRTtFQUNFLGlCQUFBO0FDQUo7QURJQTtFQUFtQixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNFNUM7QUREQTtFQUFrQixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNPM0M7QUROQTtFQUFxQixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNZOUM7QURYQTtFQUFzQixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNpQi9DO0FEaEJBO0VBQXFCLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQ3NCOUM7QURyQkE7RUFBbUIsVUFBQTtFQUFZLFdBQUE7RUFBYSxZQUFBO0FDMkI1QztBRDFCQTtFQUF3QixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNnQ2pEO0FEL0JBO0VBQXNCLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQ3FDL0M7QURwQ0E7RUFBd0IsVUFBQTtFQUFZLFdBQUE7RUFBYSxZQUFBO0FDMENqRDtBRHRDQTtFQUFrQixVQUFBO0VBQVksV0FBQTtBQzJDOUI7QUQxQ0E7RUFBa0IsVUFBQTtFQUFZLFdBQUE7QUMrQzlCO0FEOUNBO0VBQWtCLFVBQUE7RUFBWSxXQUFBO0FDbUQ5QjtBRGxEQTtFQUFrQixVQUFBO0VBQVksV0FBQTtBQ3VEOUI7QUR0REE7RUFBVSxVQUFBO0VBQVksV0FBQTtBQzJEdEI7QUQxREE7RUFBVSxVQUFBO0VBQVksV0FBQTtBQytEdEI7QUQ5REE7RUFBVSxVQUFBO0VBQVksV0FBQTtBQ21FdEI7QURsRUE7RUFBVSxVQUFBO0VBQVksV0FBQTtBQ3VFdEI7QUR0RUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQzJFekI7QUQxRUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQytFekI7QUQ5RUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ21GekI7QURsRkE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3VGekI7QURyRkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzBGMUI7QUR6RkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzhGMUI7QUQ3RkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ2tHMUI7QURqR0E7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3NHMUI7QURyR0E7RUFBZSxVQUFBO0VBQVksV0FBQTtBQzBHM0I7QUR6R0E7RUFBZSxVQUFBO0VBQVksV0FBQTtBQzhHM0I7QUQ3R0E7RUFBZSxVQUFBO0VBQVksV0FBQTtBQ2tIM0I7QURqSEE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQ3NIM0I7QURySEE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQzBIekI7QUR6SEE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQzhIekI7QUQ3SEE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ2tJekI7QURqSUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3NJekI7QURwSUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3lJMUI7QUR4SUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzZJMUI7QUQ1SUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ2lKMUI7QURoSkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3FKMUI7QURwSkE7RUFBa0IsVUFBQTtFQUFZLFdBQUE7QUN5SjlCO0FEeEpBO0VBQWtCLFVBQUE7RUFBWSxXQUFBO0FDNko5QjtBRDVKQTtFQUFrQixVQUFBO0VBQVksV0FBQTtBQ2lLOUI7QURoS0E7RUFBa0IsVUFBQTtFQUFZLFdBQUE7QUNxSzlCO0FEcEtBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUN5SzNCO0FEeEtBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUM2SzNCO0FENUtBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUNpTDNCO0FEaExBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUNxTDNCO0FEakxBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUNzTDNCO0FEckxBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUMwTDNCO0FEekxBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUM4TDNCO0FEN0xBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUNrTTNCO0FEak1BO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUNzTTNCO0FEck1BO0VBQWMsVUFBQTtFQUFZLFdBQUE7QUMwTTFCO0FEek1BO0VBQWMsVUFBQTtFQUFZLFdBQUE7QUM4TTFCO0FEN01BO0VBQWMsVUFBQTtFQUFZLFdBQUE7QUNrTjFCO0FEak5BO0VBQWMsVUFBQTtFQUFZLFdBQUE7QUNzTjFCO0FEck5BO0VBQWMsVUFBQTtFQUFZLFdBQUE7QUMwTjFCO0FEek5BO0VBQVksVUFBQTtFQUFZLFdBQUE7QUM4TnhCO0FEN05BO0VBQVksVUFBQTtFQUFZLFdBQUE7QUNrT3hCO0FEak9BO0VBQVksVUFBQTtFQUFZLFdBQUE7QUNzT3hCO0FEck9BO0VBQVksVUFBQTtFQUFZLFdBQUE7QUMwT3hCO0FEek9BO0VBQVksVUFBQTtFQUFZLFdBQUE7QUM4T3hCO0FEN09BO0VBQW1CLFVBQUE7RUFBWSxXQUFBO0FDa1AvQjtBRGpQQTtFQUFtQixVQUFBO0VBQVksV0FBQTtBQ3NQL0I7QURyUEE7RUFBbUIsVUFBQTtFQUFZLFdBQUE7QUMwUC9CO0FEelBBO0VBQW1CLFVBQUE7RUFBWSxXQUFBO0FDOFAvQjtBRDdQQTtFQUFtQixVQUFBO0VBQVksV0FBQTtBQ2tRL0I7QURqUUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3NRMUI7QURyUUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzBRMUI7QUR6UUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzhRMUI7QUQ3UUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ2tSMUI7QURqUkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3NSMUI7QURyUkE7RUFBWSxVQUFBO0VBQVksV0FBQTtBQzBSeEI7QUR6UkE7RUFBWSxVQUFBO0VBQVksV0FBQTtBQzhSeEI7QUQ3UkE7RUFBWSxVQUFBO0VBQVksV0FBQTtBQ2tTeEI7QURqU0E7RUFBWSxVQUFBO0VBQVksV0FBQTtBQ3NTeEI7QURyU0E7RUFBWSxVQUFBO0VBQVksV0FBQTtBQzBTeEI7QUR6U0E7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzhTMUI7QUQ3U0E7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ2tUMUI7QURqVEE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3NUMUI7QURyVEE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzBUMUI7QUR6VEE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzhUMUI7QUQ3VEE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ2tVekI7QURqVUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3NVekI7QURyVUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQzBVekI7QUR6VUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQzhVekI7QUQ3VUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ2tWekI7QURoVkE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQ3FWM0I7QURwVkE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQ3lWM0I7QUR4VkE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQzZWM0I7QUQ1VkE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQ2lXM0I7QURoV0E7RUFBZSxVQUFBO0VBQVksV0FBQTtBQ3FXM0I7QURwV0E7RUFBVyxVQUFBO0VBQVksV0FBQTtBQ3lXdkI7QUR4V0E7RUFBVyxVQUFBO0VBQVksV0FBQTtBQzZXdkI7QUQ1V0E7RUFBVyxVQUFBO0VBQVksV0FBQTtBQ2lYdkI7QURoWEE7RUFBVyxVQUFBO0VBQVksV0FBQTtBQ3FYdkI7QURwWEE7RUFBVyxVQUFBO0VBQVksV0FBQTtBQ3lYdkI7QUR4WEE7RUFBVyxVQUFBO0VBQVksV0FBQTtBQzZYdkI7QUQ1WEE7RUFBVyxVQUFBO0VBQVksV0FBQTtBQ2lZdkI7QURoWUE7RUFBVyxVQUFBO0VBQVksV0FBQTtBQ3FZdkI7QURwWUE7RUFBVyxVQUFBO0VBQVksV0FBQTtBQ3lZdkI7QUR4WUE7RUFBVyxVQUFBO0VBQVksV0FBQTtBQzZZdkI7QUQ1WUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ2laMUI7QURoWkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3FaMUI7QURwWkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3laMUI7QUR4WkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzZaMUI7QUQ1WkE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ2lhMUI7QURoYUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3FhekI7QURwYUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3lhekI7QUR4YUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQzZhekI7QUQ1YUE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ2liekI7QURoYkE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3FiekI7QURwYkE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3liekI7QUR4YkE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQzZiekI7QUQ1YkE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ2ljekI7QURoY0E7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3FjekI7QURwY0E7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3ljekI7QUR4Y0E7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzZjMUI7QUQ1Y0E7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ2lkMUI7QURoZEE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3FkMUI7QURwZEE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3lkMUI7QUR4ZEE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzZkMUI7QUQ1ZEE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ2llMUI7QURoZUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3FlMUI7QURwZUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ3llMUI7QUR4ZUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQzZlMUI7QUQ1ZUE7RUFBYyxVQUFBO0VBQVksV0FBQTtBQ2lmMUI7QUQvZUE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQ29mM0I7QURuZkE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQ3dmM0I7QUR2ZkE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQzRmM0I7QUQzZkE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQ2dnQjNCO0FEL2ZBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUNvZ0IzQjtBRG5nQkE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3dnQnpCO0FEdmdCQTtFQUFhLFVBQUE7RUFBWSxXQUFBO0FDNGdCekI7QUQzZ0JBO0VBQWEsVUFBQTtFQUFZLFdBQUE7QUNnaEJ6QjtBRC9nQkE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ29oQnpCO0FEbmhCQTtFQUFhLFVBQUE7RUFBWSxXQUFBO0FDd2hCekI7QUR2aEJBO0VBQWdCLFdBQUE7RUFBYSxXQUFBO0FDNGhCN0I7QUQzaEJBO0VBQWdCLFdBQUE7RUFBYSxXQUFBO0FDZ2lCN0I7QUQvaEJBO0VBQWdCLFdBQUE7RUFBYSxXQUFBO0FDb2lCN0I7QURuaUJBO0VBQWdCLFdBQUE7RUFBYSxXQUFBO0FDd2lCN0I7QUR2aUJBO0VBQWdCLFdBQUE7RUFBYSxXQUFBO0FDNGlCN0I7QUQzaUJBO0VBQWtCLFdBQUE7RUFBYSxXQUFBO0FDZ2pCL0I7QUQvaUJBO0VBQWtCLFdBQUE7RUFBYSxXQUFBO0FDb2pCL0I7QURuakJBO0VBQWtCLFdBQUE7RUFBYSxXQUFBO0FDd2pCL0I7QUR2akJBO0VBQWtCLFdBQUE7RUFBYSxXQUFBO0FDNGpCL0I7QUQzakJBO0VBQWtCLFdBQUE7RUFBYSxXQUFBO0FDZ2tCL0I7QUQvakJBO0VBQWdCLFdBQUE7RUFBYSxXQUFBO0FDb2tCN0I7QURua0JBO0VBQWdCLFdBQUE7RUFBYSxXQUFBO0FDd2tCN0I7QUR2a0JBO0VBQWdCLFdBQUE7RUFBYSxXQUFBO0FDNGtCN0I7QUQza0JBO0VBQWdCLFdBQUE7RUFBYSxXQUFBO0FDZ2xCN0I7QUQva0JBO0VBQWdCLFdBQUE7RUFBYSxXQUFBO0FDb2xCN0I7QURubEJBO0VBQWUsV0FBQTtFQUFhLFdBQUE7QUN3bEI1QjtBRHZsQkE7RUFBZSxXQUFBO0VBQWEsV0FBQTtBQzRsQjVCO0FEM2xCQTtFQUFlLFdBQUE7RUFBYSxXQUFBO0FDZ21CNUI7QUQvbEJBO0VBQWUsV0FBQTtFQUFhLFdBQUE7QUNvbUI1QjtBRG5tQkE7RUFBZSxXQUFBO0VBQWEsV0FBQTtBQ3dtQjVCO0FEdm1CQTtFQUFnQixXQUFBO0VBQWEsV0FBQTtBQzRtQjdCO0FEM21CQTtFQUFnQixXQUFBO0VBQWEsV0FBQTtBQ2duQjdCO0FEL21CQTtFQUFnQixXQUFBO0VBQWEsV0FBQTtBQ29uQjdCO0FEbm5CQTtFQUFnQixXQUFBO0VBQWEsV0FBQTtBQ3duQjdCO0FEdm5CQTtFQUFnQixXQUFBO0VBQWEsV0FBQTtBQzRuQjdCO0FEM25CQTtFQUFnQixXQUFBO0VBQWEsV0FBQTtBQ2dvQjdCO0FEL25CQTtFQUFnQixXQUFBO0VBQWEsV0FBQTtBQ29vQjdCO0FEbm9CQTtFQUFnQixXQUFBO0VBQWEsV0FBQTtBQ3dvQjdCO0FEdm9CQTtFQUFnQixXQUFBO0VBQWEsV0FBQTtBQzRvQjdCO0FEM29CQTtFQUFnQixXQUFBO0VBQWEsV0FBQTtBQ2dwQjdCO0FENW9CQTtFQUFhLFVBQUE7RUFBWSxXQUFBO0FDaXBCekI7QURocEJBO0VBQWEsVUFBQTtFQUFZLFdBQUE7QUNxcEJ6QjtBRHBwQkE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3lwQnpCO0FEeHBCQTtFQUFhLFVBQUE7RUFBWSxXQUFBO0FDNnBCekI7QUQ1cEJBO0VBQWEsVUFBQTtFQUFZLFdBQUE7QUNpcUJ6QjtBRGhxQkE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ3FxQnpCO0FEcHFCQTtFQUFhLFVBQUE7RUFBWSxXQUFBO0FDeXFCekI7QUR4cUJBO0VBQWEsVUFBQTtFQUFZLFdBQUE7QUM2cUJ6QjtBRDVxQkE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQ2lyQnpCO0FEaHJCQTtFQUFhLFVBQUE7RUFBWSxXQUFBO0FDcXJCekI7QURwckJBO0VBQWEsVUFBQTtFQUFZLFdBQUE7QUN5ckJ6QjtBRHhyQkE7RUFBYSxVQUFBO0VBQVksV0FBQTtBQzZyQnpCO0FEM3JCQTtFQUFnQixVQUFBO0VBQVksV0FBQTtBQ2dzQjVCO0FEL3JCQTtFQUFnQixVQUFBO0VBQVksV0FBQTtBQ29zQjVCO0FEbnNCQTtFQUFnQixVQUFBO0VBQVksV0FBQTtBQ3dzQjVCO0FEdnNCQTtFQUFnQixVQUFBO0VBQVksV0FBQTtBQzRzQjVCO0FEM3NCQTtFQUFnQixVQUFBO0VBQVksV0FBQTtBQ2d0QjVCO0FEL3NCQTtFQUFnQixVQUFBO0VBQVksV0FBQTtBQ290QjVCO0FEbnRCQTtFQUFnQixVQUFBO0VBQVksV0FBQTtBQ3d0QjVCO0FEdnRCQTtFQUFnQixVQUFBO0VBQVksV0FBQTtBQzR0QjVCO0FEM3RCQTtFQUFnQixVQUFBO0VBQVksV0FBQTtBQ2d1QjVCO0FEL3RCQTtFQUFnQixVQUFBO0VBQVksV0FBQTtBQ291QjVCO0FEbHVCQTtFQUFlLFVBQUE7RUFBWSxXQUFBO0FDdXVCM0I7QUR0dUJBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUMydUIzQjtBRDF1QkE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQyt1QjNCO0FEOXVCQTtFQUFlLFVBQUE7RUFBWSxXQUFBO0FDbXZCM0I7QURsdkJBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUN1dkIzQjtBRHR2QkE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQzJ2QjNCO0FEMXZCQTtFQUFlLFVBQUE7RUFBWSxXQUFBO0FDK3ZCM0I7QUQ5dkJBO0VBQWUsVUFBQTtFQUFZLFdBQUE7QUNtd0IzQjtBRGx3QkE7RUFBZSxVQUFBO0VBQVksV0FBQTtBQ3V3QjNCO0FEdHdCQTtFQUFlLFVBQUE7RUFBWSxXQUFBO0FDMndCM0I7QUR4d0JBO0VBQW1CLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQzh3QjVDO0FEN3dCQTtFQUFvQixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNteEI3QztBRGx4QkE7RUFBeUIsVUFBQTtFQUFZLFdBQUE7RUFBYSxZQUFBO0FDd3hCbEQ7QUR2eEJBO0VBQXNCLFVBQUE7RUFBWSxXQUFBO0VBQWEsWUFBQTtBQzZ4Qi9DO0FENXhCQTtFQUFvQixVQUFBO0VBQVksV0FBQTtFQUFhLFlBQUE7QUNreUI3QztBRGh5QkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNteUJGIiwiZmlsZSI6InNyYy9hcHAvbndvZC9tb3J0YWwvbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlYnVnIHtcbiAgaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICAuZG90IHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gIH1cbn1cblxuLnNoZWV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNoZWV0IHtcbiAgd2lkdGg6IDk3MHB4O1xufVxuXG5pbnB1dCB7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNDBweDtcbiAgcGFkZGluZzogMCAycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMCk7XG4gIGN1cnNvcjogdGV4dDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjEpO1xuICB9XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuXG4uZG90IHtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC4zKTtcbiAgfVxuICAmLmZpbGxlZCB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gIH1cbn1cblxuaW5wdXRbbmFtZT1uYW1lXSB7IHRvcDogMTYwcHg7IGxlZnQ6IDE4N3B4OyB3aWR0aDogMTY1cHg7IH1cbmlucHV0W25hbWU9YWdlXSB7IHRvcDogMTgzcHg7IGxlZnQ6IDE4N3B4OyB3aWR0aDogMTY1cHg7IH1cbmlucHV0W25hbWU9cGxheWVyXSB7IHRvcDogMjA2cHg7IGxlZnQ6IDE4N3B4OyB3aWR0aDogMTY1cHg7IH1cbmlucHV0W25hbWU9Y29uY2VwdF0geyB0b3A6IDE2MHB4OyBsZWZ0OiA0MjNweDsgd2lkdGg6IDE2NHB4OyB9XG5pbnB1dFtuYW1lPXZpcnR1ZV0geyB0b3A6IDE4M3B4OyBsZWZ0OiA0MjNweDsgd2lkdGg6IDE2NHB4OyB9XG5pbnB1dFtuYW1lPXZpY2VdIHsgdG9wOiAyMDZweDsgbGVmdDogNDIzcHg7IHdpZHRoOiAxNjRweDsgfVxuaW5wdXRbbmFtZT1jaHJvbmljbGVdIHsgdG9wOiAxNjBweDsgbGVmdDogNjgycHg7IHdpZHRoOiAxNTNweDsgfVxuaW5wdXRbbmFtZT1mYWN0aW9uXSB7IHRvcDogMTgzcHg7IGxlZnQ6IDY4MnB4OyB3aWR0aDogMTUzcHg7IH1cbmlucHV0W25hbWU9Z3JvdXBuYW1lXSB7IHRvcDogMjA2cHg7IGxlZnQ6IDY4MnB4OyB3aWR0aDogMTUzcHg7IH1cblxuLy8gQVRUUklCVVRFU1xuXG4uaW50ZWxsaWdlbmNlLTIgeyB0b3A6IDI3NXB4OyBsZWZ0OiAzODlweDsgfVxuLmludGVsbGlnZW5jZS0zIHsgdG9wOiAyNzVweDsgbGVmdDogNDAwcHg7IH1cbi5pbnRlbGxpZ2VuY2UtNCB7IHRvcDogMjc1cHg7IGxlZnQ6IDQxMHB4OyB9XG4uaW50ZWxsaWdlbmNlLTUgeyB0b3A6IDI3NXB4OyBsZWZ0OiA0MjFweDsgfVxuLndpdHMtMiB7IHRvcDogMzE2cHg7IGxlZnQ6IDM5MHB4OyB9XG4ud2l0cy0zIHsgdG9wOiAzMTZweDsgbGVmdDogNDAwcHg7IH1cbi53aXRzLTQgeyB0b3A6IDMxNnB4OyBsZWZ0OiA0MTBweDsgfVxuLndpdHMtNSB7IHRvcDogMzE2cHg7IGxlZnQ6IDQyMXB4OyB9XG4ucmVzb2x2ZS0yIHsgdG9wOiAzNTVweDsgbGVmdDogMzg5cHg7IH1cbi5yZXNvbHZlLTMgeyB0b3A6IDM1NXB4OyBsZWZ0OiA0MDBweDsgfVxuLnJlc29sdmUtNCB7IHRvcDogMzU1cHg7IGxlZnQ6IDQxMHB4OyB9XG4ucmVzb2x2ZS01IHsgdG9wOiAzNTVweDsgbGVmdDogNDIxcHg7IH1cblxuLnN0cmVuZ3RoLTIgeyB0b3A6IDI3NnB4OyBsZWZ0OiA1ODdweDsgfVxuLnN0cmVuZ3RoLTMgeyB0b3A6IDI3NnB4OyBsZWZ0OiA1OTdweDsgfVxuLnN0cmVuZ3RoLTQgeyB0b3A6IDI3NnB4OyBsZWZ0OiA2MDZweDsgfVxuLnN0cmVuZ3RoLTUgeyB0b3A6IDI3NnB4OyBsZWZ0OiA2MTdweDsgfVxuLmRleHRlcml0eS0yIHsgdG9wOiAzMTZweDsgbGVmdDogNTg5cHg7IH1cbi5kZXh0ZXJpdHktMyB7IHRvcDogMzE2cHg7IGxlZnQ6IDU5OXB4OyB9XG4uZGV4dGVyaXR5LTQgeyB0b3A6IDMxNnB4OyBsZWZ0OiA2MDlweDsgfVxuLmRleHRlcml0eS01IHsgdG9wOiAzMTZweDsgbGVmdDogNjE5cHg7IH1cbi5zdGFtaW5hLTIgeyB0b3A6IDM1NXB4OyBsZWZ0OiA1ODlweDsgfVxuLnN0YW1pbmEtMyB7IHRvcDogMzU1cHg7IGxlZnQ6IDU5OHB4OyB9XG4uc3RhbWluYS00IHsgdG9wOiAzNTVweDsgbGVmdDogNjA4cHg7IH1cbi5zdGFtaW5hLTUgeyB0b3A6IDM1NXB4OyBsZWZ0OiA2MTlweDsgfVxuXG4ucHJlc2VuY2UtMiB7IHRvcDogMjc1cHg7IGxlZnQ6IDc4M3B4OyB9XG4ucHJlc2VuY2UtMyB7IHRvcDogMjc1cHg7IGxlZnQ6IDc5M3B4OyB9XG4ucHJlc2VuY2UtNCB7IHRvcDogMjc1cHg7IGxlZnQ6IDgwM3B4OyB9XG4ucHJlc2VuY2UtNSB7IHRvcDogMjc1cHg7IGxlZnQ6IDgxM3B4OyB9XG4ubWFuaXB1bGF0aW9uLTIgeyB0b3A6IDMxOHB4OyBsZWZ0OiA3ODNweDsgfVxuLm1hbmlwdWxhdGlvbi0zIHsgdG9wOiAzMThweDsgbGVmdDogNzkzcHg7IH1cbi5tYW5pcHVsYXRpb24tNCB7IHRvcDogMzE4cHg7IGxlZnQ6IDgwM3B4OyB9XG4ubWFuaXB1bGF0aW9uLTUgeyB0b3A6IDMxOHB4OyBsZWZ0OiA4MTNweDsgfVxuLmNvbXBvc3VyZS0yIHsgdG9wOiAzNTdweDsgbGVmdDogNzg0cHg7IH1cbi5jb21wb3N1cmUtMyB7IHRvcDogMzU3cHg7IGxlZnQ6IDc5NHB4OyB9XG4uY29tcG9zdXJlLTQgeyB0b3A6IDM1N3B4OyBsZWZ0OiA4MDRweDsgfVxuLmNvbXBvc3VyZS01IHsgdG9wOiAzNTdweDsgbGVmdDogODEzcHg7IH1cblxuLy8gU0tJTExTXG5cbi5hY2FkZW1pY3MtMSB7IHRvcDogNDk0cHg7IGxlZnQ6IDMwOXB4OyB9XG4uYWNhZGVtaWNzLTIgeyB0b3A6IDQ5NHB4OyBsZWZ0OiAzMThweDsgfVxuLmFjYWRlbWljcy0zIHsgdG9wOiA0OTRweDsgbGVmdDogMzI4cHg7IH1cbi5hY2FkZW1pY3MtNCB7IHRvcDogNDk0cHg7IGxlZnQ6IDMzOHB4OyB9XG4uYWNhZGVtaWNzLTUgeyB0b3A6IDQ5NHB4OyBsZWZ0OiAzNDhweDsgfVxuLmNvbXB1dGVyLTEgeyB0b3A6IDUxNnB4OyBsZWZ0OiAzMDhweDsgfVxuLmNvbXB1dGVyLTIgeyB0b3A6IDUxNnB4OyBsZWZ0OiAzMThweDsgfVxuLmNvbXB1dGVyLTMgeyB0b3A6IDUxNnB4OyBsZWZ0OiAzMjhweDsgfVxuLmNvbXB1dGVyLTQgeyB0b3A6IDUxNnB4OyBsZWZ0OiAzMzhweDsgfVxuLmNvbXB1dGVyLTUgeyB0b3A6IDUxNnB4OyBsZWZ0OiAzNDhweDsgfVxuLmNyYWZ0cy0xIHsgdG9wOiA1MzlweDsgbGVmdDogMzA5cHg7IH1cbi5jcmFmdHMtMiB7IHRvcDogNTM5cHg7IGxlZnQ6IDMxOHB4OyB9XG4uY3JhZnRzLTMgeyB0b3A6IDUzOXB4OyBsZWZ0OiAzMjhweDsgfVxuLmNyYWZ0cy00IHsgdG9wOiA1MzlweDsgbGVmdDogMzM4cHg7IH1cbi5jcmFmdHMtNSB7IHRvcDogNTM5cHg7IGxlZnQ6IDM0OHB4OyB9XG4uaW52ZXN0aWdhdGlvbi0xIHsgdG9wOiA1NjFweDsgbGVmdDogMzA4cHg7IH1cbi5pbnZlc3RpZ2F0aW9uLTIgeyB0b3A6IDU2MXB4OyBsZWZ0OiAzMThweDsgfVxuLmludmVzdGlnYXRpb24tMyB7IHRvcDogNTYxcHg7IGxlZnQ6IDMyOHB4OyB9XG4uaW52ZXN0aWdhdGlvbi00IHsgdG9wOiA1NjFweDsgbGVmdDogMzM4cHg7IH1cbi5pbnZlc3RpZ2F0aW9uLTUgeyB0b3A6IDU2MXB4OyBsZWZ0OiAzNDhweDsgfVxuLm1lZGljaW5lLTEgeyB0b3A6IDU4M3B4OyBsZWZ0OiAzMDlweDsgfVxuLm1lZGljaW5lLTIgeyB0b3A6IDU4M3B4OyBsZWZ0OiAzMThweDsgfVxuLm1lZGljaW5lLTMgeyB0b3A6IDU4M3B4OyBsZWZ0OiAzMjhweDsgfVxuLm1lZGljaW5lLTQgeyB0b3A6IDU4M3B4OyBsZWZ0OiAzMzhweDsgfVxuLm1lZGljaW5lLTUgeyB0b3A6IDU4M3B4OyBsZWZ0OiAzNDdweDsgfVxuLm9jY3VsdC0xIHsgdG9wOiA2MDVweDsgbGVmdDogMzA4cHg7IH1cbi5vY2N1bHQtMiB7IHRvcDogNjA1cHg7IGxlZnQ6IDMxOHB4OyB9XG4ub2NjdWx0LTMgeyB0b3A6IDYwNXB4OyBsZWZ0OiAzMjhweDsgfVxuLm9jY3VsdC00IHsgdG9wOiA2MDVweDsgbGVmdDogMzM4cHg7IH1cbi5vY2N1bHQtNSB7IHRvcDogNjA1cHg7IGxlZnQ6IDM0OHB4OyB9XG4ucG9saXRpY3MtMSB7IHRvcDogNjI3cHg7IGxlZnQ6IDMwOHB4OyB9XG4ucG9saXRpY3MtMiB7IHRvcDogNjI3cHg7IGxlZnQ6IDMxOHB4OyB9XG4ucG9saXRpY3MtMyB7IHRvcDogNjI3cHg7IGxlZnQ6IDMyOHB4OyB9XG4ucG9saXRpY3MtNCB7IHRvcDogNjI3cHg7IGxlZnQ6IDMzOHB4OyB9XG4ucG9saXRpY3MtNSB7IHRvcDogNjI3cHg7IGxlZnQ6IDM0OHB4OyB9XG4uc2NpZW5jZS0xIHsgdG9wOiA2NDlweDsgbGVmdDogMzA4cHg7IH1cbi5zY2llbmNlLTIgeyB0b3A6IDY0OXB4OyBsZWZ0OiAzMThweDsgfVxuLnNjaWVuY2UtMyB7IHRvcDogNjQ5cHg7IGxlZnQ6IDMyOHB4OyB9XG4uc2NpZW5jZS00IHsgdG9wOiA2NDlweDsgbGVmdDogMzM4cHg7IH1cbi5zY2llbmNlLTUgeyB0b3A6IDY0OXB4OyBsZWZ0OiAzNDhweDsgfVxuXG4uYXRobGV0aWNzLTEgeyB0b3A6IDczMnB4OyBsZWZ0OiAzMDhweDsgfVxuLmF0aGxldGljcy0yIHsgdG9wOiA3MzJweDsgbGVmdDogMzE4cHg7IH1cbi5hdGhsZXRpY3MtMyB7IHRvcDogNzMycHg7IGxlZnQ6IDMyOHB4OyB9XG4uYXRobGV0aWNzLTQgeyB0b3A6IDczMnB4OyBsZWZ0OiAzMzhweDsgfVxuLmF0aGxldGljcy01IHsgdG9wOiA3MzJweDsgbGVmdDogMzQ3cHg7IH1cbi5icmF3bC0xIHsgdG9wOiA3NTRweDsgbGVmdDogMzA4cHg7IH1cbi5icmF3bC0yIHsgdG9wOiA3NTRweDsgbGVmdDogMzE4cHg7IH1cbi5icmF3bC0zIHsgdG9wOiA3NTRweDsgbGVmdDogMzI4cHg7IH1cbi5icmF3bC00IHsgdG9wOiA3NTRweDsgbGVmdDogMzM4cHg7IH1cbi5icmF3bC01IHsgdG9wOiA3NTRweDsgbGVmdDogMzQ3cHg7IH1cbi5kcml2ZS0xIHsgdG9wOiA3NzdweDsgbGVmdDogMzA4cHg7IH1cbi5kcml2ZS0yIHsgdG9wOiA3NzdweDsgbGVmdDogMzE4cHg7IH1cbi5kcml2ZS0zIHsgdG9wOiA3NzdweDsgbGVmdDogMzI4cHg7IH1cbi5kcml2ZS00IHsgdG9wOiA3NzdweDsgbGVmdDogMzM4cHg7IH1cbi5kcml2ZS01IHsgdG9wOiA3NzdweDsgbGVmdDogMzQ4cHg7IH1cbi5maXJlYXJtcy0xIHsgdG9wOiA3OTlweDsgbGVmdDogMzA4cHg7IH1cbi5maXJlYXJtcy0yIHsgdG9wOiA3OTlweDsgbGVmdDogMzE4cHg7IH1cbi5maXJlYXJtcy0zIHsgdG9wOiA3OTlweDsgbGVmdDogMzI4cHg7IH1cbi5maXJlYXJtcy00IHsgdG9wOiA3OTlweDsgbGVmdDogMzM4cHg7IH1cbi5maXJlYXJtcy01IHsgdG9wOiA3OTlweDsgbGVmdDogMzQ4cHg7IH1cbi5sYXJjZW55LTEgeyB0b3A6IDgyMXB4OyBsZWZ0OiAzMDhweDsgfVxuLmxhcmNlbnktMiB7IHRvcDogODIxcHg7IGxlZnQ6IDMxOHB4OyB9XG4ubGFyY2VueS0zIHsgdG9wOiA4MjFweDsgbGVmdDogMzI4cHg7IH1cbi5sYXJjZW55LTQgeyB0b3A6IDgyMXB4OyBsZWZ0OiAzMzhweDsgfVxuLmxhcmNlbnktNSB7IHRvcDogODIxcHg7IGxlZnQ6IDM0OHB4OyB9XG4uc3RlYWx0aC0xIHsgdG9wOiA4NDNweDsgbGVmdDogMzA3cHg7IH1cbi5zdGVhbHRoLTIgeyB0b3A6IDg0M3B4OyBsZWZ0OiAzMThweDsgfVxuLnN0ZWFsdGgtMyB7IHRvcDogODQzcHg7IGxlZnQ6IDMyOHB4OyB9XG4uc3RlYWx0aC00IHsgdG9wOiA4NDNweDsgbGVmdDogMzM4cHg7IH1cbi5zdGVhbHRoLTUgeyB0b3A6IDg0M3B4OyBsZWZ0OiAzNDdweDsgfVxuLnN1cnZpdmFsLTEgeyB0b3A6IDg2NXB4OyBsZWZ0OiAzMDhweDsgfVxuLnN1cnZpdmFsLTIgeyB0b3A6IDg2NXB4OyBsZWZ0OiAzMThweDsgfVxuLnN1cnZpdmFsLTMgeyB0b3A6IDg2NXB4OyBsZWZ0OiAzMjhweDsgfVxuLnN1cnZpdmFsLTQgeyB0b3A6IDg2NXB4OyBsZWZ0OiAzMzhweDsgfVxuLnN1cnZpdmFsLTUgeyB0b3A6IDg2NXB4OyBsZWZ0OiAzNDdweDsgfVxuLndlYXBvbnJ5LTEgeyB0b3A6IDg4N3B4OyBsZWZ0OiAzMDlweDsgfVxuLndlYXBvbnJ5LTIgeyB0b3A6IDg4N3B4OyBsZWZ0OiAzMThweDsgfVxuLndlYXBvbnJ5LTMgeyB0b3A6IDg4N3B4OyBsZWZ0OiAzMjhweDsgfVxuLndlYXBvbnJ5LTQgeyB0b3A6IDg4N3B4OyBsZWZ0OiAzMzhweDsgfVxuLndlYXBvbnJ5LTUgeyB0b3A6IDg4N3B4OyBsZWZ0OiAzNDdweDsgfVxuXG4uYW5pbWFsa2VuLTEgeyB0b3A6IDk3MHB4OyBsZWZ0OiAzMTFweDsgfVxuLmFuaW1hbGtlbi0yIHsgdG9wOiA5NzBweDsgbGVmdDogMzIxcHg7IH1cbi5hbmltYWxrZW4tMyB7IHRvcDogOTcwcHg7IGxlZnQ6IDMzMXB4OyB9XG4uYW5pbWFsa2VuLTQgeyB0b3A6IDk3MHB4OyBsZWZ0OiAzNDFweDsgfVxuLmFuaW1hbGtlbi01IHsgdG9wOiA5NzBweDsgbGVmdDogMzUxcHg7IH1cbi5lbXBhdGh5LTEgeyB0b3A6IDk5MnB4OyBsZWZ0OiAzMTFweDsgfVxuLmVtcGF0aHktMiB7IHRvcDogOTkycHg7IGxlZnQ6IDMyMXB4OyB9XG4uZW1wYXRoeS0zIHsgdG9wOiA5OTJweDsgbGVmdDogMzMxcHg7IH1cbi5lbXBhdGh5LTQgeyB0b3A6IDk5MnB4OyBsZWZ0OiAzNDFweDsgfVxuLmVtcGF0aHktNSB7IHRvcDogOTkycHg7IGxlZnQ6IDM1MXB4OyB9XG4uZXhwcmVzc2lvbi0xIHsgdG9wOiAxMDE0cHg7IGxlZnQ6IDMxMnB4OyB9XG4uZXhwcmVzc2lvbi0yIHsgdG9wOiAxMDE0cHg7IGxlZnQ6IDMyMXB4OyB9XG4uZXhwcmVzc2lvbi0zIHsgdG9wOiAxMDE0cHg7IGxlZnQ6IDMzMXB4OyB9XG4uZXhwcmVzc2lvbi00IHsgdG9wOiAxMDE0cHg7IGxlZnQ6IDM0MXB4OyB9XG4uZXhwcmVzc2lvbi01IHsgdG9wOiAxMDE0cHg7IGxlZnQ6IDM1MXB4OyB9XG4uaW50aW1pZGF0aW9uLTEgeyB0b3A6IDEwMzZweDsgbGVmdDogMzExcHg7IH1cbi5pbnRpbWlkYXRpb24tMiB7IHRvcDogMTAzNnB4OyBsZWZ0OiAzMjFweDsgfVxuLmludGltaWRhdGlvbi0zIHsgdG9wOiAxMDM2cHg7IGxlZnQ6IDMzMXB4OyB9XG4uaW50aW1pZGF0aW9uLTQgeyB0b3A6IDEwMzZweDsgbGVmdDogMzQxcHg7IH1cbi5pbnRpbWlkYXRpb24tNSB7IHRvcDogMTAzNnB4OyBsZWZ0OiAzNTFweDsgfVxuLnBlcnN1YXNpb24tMSB7IHRvcDogMTA1OHB4OyBsZWZ0OiAzMTJweDsgfVxuLnBlcnN1YXNpb24tMiB7IHRvcDogMTA1OHB4OyBsZWZ0OiAzMjFweDsgfVxuLnBlcnN1YXNpb24tMyB7IHRvcDogMTA1OHB4OyBsZWZ0OiAzMzFweDsgfVxuLnBlcnN1YXNpb24tNCB7IHRvcDogMTA1OHB4OyBsZWZ0OiAzNDFweDsgfVxuLnBlcnN1YXNpb24tNSB7IHRvcDogMTA1OHB4OyBsZWZ0OiAzNTFweDsgfVxuLnNvY2lhbGl6ZS0xIHsgdG9wOiAxMDgxcHg7IGxlZnQ6IDMxMnB4OyB9XG4uc29jaWFsaXplLTIgeyB0b3A6IDEwODFweDsgbGVmdDogMzIxcHg7IH1cbi5zb2NpYWxpemUtMyB7IHRvcDogMTA4MXB4OyBsZWZ0OiAzMzFweDsgfVxuLnNvY2lhbGl6ZS00IHsgdG9wOiAxMDgxcHg7IGxlZnQ6IDM0MXB4OyB9XG4uc29jaWFsaXplLTUgeyB0b3A6IDEwODFweDsgbGVmdDogMzUxcHg7IH1cbi5zdHJlZXR3aXNlLTEgeyB0b3A6IDExMDNweDsgbGVmdDogMzEycHg7IH1cbi5zdHJlZXR3aXNlLTIgeyB0b3A6IDExMDNweDsgbGVmdDogMzIxcHg7IH1cbi5zdHJlZXR3aXNlLTMgeyB0b3A6IDExMDNweDsgbGVmdDogMzMxcHg7IH1cbi5zdHJlZXR3aXNlLTQgeyB0b3A6IDExMDNweDsgbGVmdDogMzQxcHg7IH1cbi5zdHJlZXR3aXNlLTUgeyB0b3A6IDExMDNweDsgbGVmdDogMzUxcHg7IH1cbi5zdWJ0ZXJmdWdlLTEgeyB0b3A6IDExMjVweDsgbGVmdDogMzExcHg7IH1cbi5zdWJ0ZXJmdWdlLTIgeyB0b3A6IDExMjVweDsgbGVmdDogMzIxcHg7IH1cbi5zdWJ0ZXJmdWdlLTMgeyB0b3A6IDExMjVweDsgbGVmdDogMzMxcHg7IH1cbi5zdWJ0ZXJmdWdlLTQgeyB0b3A6IDExMjVweDsgbGVmdDogMzQxcHg7IH1cbi5zdWJ0ZXJmdWdlLTUgeyB0b3A6IDExMjVweDsgbGVmdDogMzUxcHg7IH1cblxuLy8gU1RBVFNcblxuLmhlYWx0aC0xIHsgIHRvcDogNDc3cHg7IGxlZnQ6IDYyN3B4OyB9XG4uaGVhbHRoLTIgeyAgdG9wOiA0NzdweDsgbGVmdDogNjQ0cHg7IH1cbi5oZWFsdGgtMyB7ICB0b3A6IDQ3N3B4OyBsZWZ0OiA2NjBweDsgfVxuLmhlYWx0aC00IHsgIHRvcDogNDc3cHg7IGxlZnQ6IDY3N3B4OyB9XG4uaGVhbHRoLTUgeyAgdG9wOiA0NzdweDsgbGVmdDogNjk0cHg7IH1cbi5oZWFsdGgtNiB7ICB0b3A6IDQ3N3B4OyBsZWZ0OiA3MTBweDsgfVxuLmhlYWx0aC03IHsgIHRvcDogNDc3cHg7IGxlZnQ6IDcyN3B4OyB9XG4uaGVhbHRoLTggeyAgdG9wOiA0NzdweDsgbGVmdDogNzQ0cHg7IH1cbi5oZWFsdGgtOSB7ICB0b3A6IDQ3N3B4OyBsZWZ0OiA3NjBweDsgfVxuLmhlYWx0aC0xMCB7IHRvcDogNDc3cHg7IGxlZnQ6IDc3N3B4OyB9XG4uaGVhbHRoLTExIHsgdG9wOiA0NzdweDsgbGVmdDogNzk0cHg7IH1cbi5oZWFsdGgtMTIgeyB0b3A6IDQ3N3B4OyBsZWZ0OiA4MTBweDsgfVxuXG4ud2lsbHBvd2VyLTEgeyAgdG9wOiA1NjFweDsgbGVmdDogNjQzcHg7IH1cbi53aWxscG93ZXItMiB7ICB0b3A6IDU2MXB4OyBsZWZ0OiA2NjBweDsgfVxuLndpbGxwb3dlci0zIHsgIHRvcDogNTYxcHg7IGxlZnQ6IDY3N3B4OyB9XG4ud2lsbHBvd2VyLTQgeyAgdG9wOiA1NjFweDsgbGVmdDogNjkzcHg7IH1cbi53aWxscG93ZXItNSB7ICB0b3A6IDU2MXB4OyBsZWZ0OiA3MTBweDsgfVxuLndpbGxwb3dlci02IHsgIHRvcDogNTYxcHg7IGxlZnQ6IDcyN3B4OyB9XG4ud2lsbHBvd2VyLTcgeyAgdG9wOiA1NjFweDsgbGVmdDogNzQzcHg7IH1cbi53aWxscG93ZXItOCB7ICB0b3A6IDU2MXB4OyBsZWZ0OiA3NjBweDsgfVxuLndpbGxwb3dlci05IHsgIHRvcDogNTYxcHg7IGxlZnQ6IDc3N3B4OyB9XG4ud2lsbHBvd2VyLTEwIHsgdG9wOiA1NjFweDsgbGVmdDogNzkzcHg7IH1cblxuLm1vcmFsaXR5LTEgeyAgdG9wOiA4MzhweDsgbGVmdDogNzk0cHg7IH1cbi5tb3JhbGl0eS0yIHsgIHRvcDogODE1cHg7IGxlZnQ6IDc5NHB4OyB9XG4ubW9yYWxpdHktMyB7ICB0b3A6IDc5M3B4OyBsZWZ0OiA3OTRweDsgfVxuLm1vcmFsaXR5LTQgeyAgdG9wOiA3NzFweDsgbGVmdDogNzk0cHg7IH1cbi5tb3JhbGl0eS01IHsgIHRvcDogNzQ5cHg7IGxlZnQ6IDc5NHB4OyB9XG4ubW9yYWxpdHktNiB7ICB0b3A6IDcyN3B4OyBsZWZ0OiA3OTRweDsgfVxuLm1vcmFsaXR5LTcgeyAgdG9wOiA3MDRweDsgbGVmdDogNzk0cHg7IH1cbi5tb3JhbGl0eS04IHsgIHRvcDogNjgycHg7IGxlZnQ6IDc5NHB4OyB9XG4ubW9yYWxpdHktOSB7ICB0b3A6IDY2MHB4OyBsZWZ0OiA3OTRweDsgfVxuLm1vcmFsaXR5LTEwIHsgdG9wOiA2MzhweDsgbGVmdDogNzk0cHg7IH1cblxuXG5pbnB1dFtuYW1lPXNpemVdIHsgdG9wOiA3OTNweDsgbGVmdDogNDIxcHg7IHdpZHRoOiAxNzZweDsgfVxuaW5wdXRbbmFtZT1zcGVlZF0geyB0b3A6IDgxOXB4OyBsZWZ0OiA0MzBweDsgd2lkdGg6IDE2N3B4OyB9XG5pbnB1dFtuYW1lPWluaXRpYXRpdmVdIHsgdG9wOiA4NDlweDsgbGVmdDogNDg0cHg7IHdpZHRoOiAxMTNweDsgfVxuaW5wdXRbbmFtZT1kZWZlbnNlXSB7IHRvcDogODc5cHg7IGxlZnQ6IDQ0NnB4OyB3aWR0aDogMTUxcHg7IH1cbmlucHV0W25hbWU9YXJtb3JdIHsgdG9wOiA5MDlweDsgbGVmdDogNDM0cHg7IHdpZHRoOiAxNjNweDsgfVxuXG4ubGktZW1wdHkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBoZWlnaHQ6IDE1cHg7XG59XG4iLCIuZGVidWcgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4uZGVidWcgLmRvdCB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuLnNoZWV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNoZWV0IHtcbiAgd2lkdGg6IDk3MHB4O1xufVxuXG5pbnB1dCB7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNDBweDtcbiAgcGFkZGluZzogMCAycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbi5kb3Qge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRvdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5kb3QuZmlsbGVkIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlucHV0W25hbWU9bmFtZV0ge1xuICB0b3A6IDE2MHB4O1xuICBsZWZ0OiAxODdweDtcbiAgd2lkdGg6IDE2NXB4O1xufVxuXG5pbnB1dFtuYW1lPWFnZV0ge1xuICB0b3A6IDE4M3B4O1xuICBsZWZ0OiAxODdweDtcbiAgd2lkdGg6IDE2NXB4O1xufVxuXG5pbnB1dFtuYW1lPXBsYXllcl0ge1xuICB0b3A6IDIwNnB4O1xuICBsZWZ0OiAxODdweDtcbiAgd2lkdGg6IDE2NXB4O1xufVxuXG5pbnB1dFtuYW1lPWNvbmNlcHRdIHtcbiAgdG9wOiAxNjBweDtcbiAgbGVmdDogNDIzcHg7XG4gIHdpZHRoOiAxNjRweDtcbn1cblxuaW5wdXRbbmFtZT12aXJ0dWVdIHtcbiAgdG9wOiAxODNweDtcbiAgbGVmdDogNDIzcHg7XG4gIHdpZHRoOiAxNjRweDtcbn1cblxuaW5wdXRbbmFtZT12aWNlXSB7XG4gIHRvcDogMjA2cHg7XG4gIGxlZnQ6IDQyM3B4O1xuICB3aWR0aDogMTY0cHg7XG59XG5cbmlucHV0W25hbWU9Y2hyb25pY2xlXSB7XG4gIHRvcDogMTYwcHg7XG4gIGxlZnQ6IDY4MnB4O1xuICB3aWR0aDogMTUzcHg7XG59XG5cbmlucHV0W25hbWU9ZmFjdGlvbl0ge1xuICB0b3A6IDE4M3B4O1xuICBsZWZ0OiA2ODJweDtcbiAgd2lkdGg6IDE1M3B4O1xufVxuXG5pbnB1dFtuYW1lPWdyb3VwbmFtZV0ge1xuICB0b3A6IDIwNnB4O1xuICBsZWZ0OiA2ODJweDtcbiAgd2lkdGg6IDE1M3B4O1xufVxuXG4uaW50ZWxsaWdlbmNlLTIge1xuICB0b3A6IDI3NXB4O1xuICBsZWZ0OiAzODlweDtcbn1cblxuLmludGVsbGlnZW5jZS0zIHtcbiAgdG9wOiAyNzVweDtcbiAgbGVmdDogNDAwcHg7XG59XG5cbi5pbnRlbGxpZ2VuY2UtNCB7XG4gIHRvcDogMjc1cHg7XG4gIGxlZnQ6IDQxMHB4O1xufVxuXG4uaW50ZWxsaWdlbmNlLTUge1xuICB0b3A6IDI3NXB4O1xuICBsZWZ0OiA0MjFweDtcbn1cblxuLndpdHMtMiB7XG4gIHRvcDogMzE2cHg7XG4gIGxlZnQ6IDM5MHB4O1xufVxuXG4ud2l0cy0zIHtcbiAgdG9wOiAzMTZweDtcbiAgbGVmdDogNDAwcHg7XG59XG5cbi53aXRzLTQge1xuICB0b3A6IDMxNnB4O1xuICBsZWZ0OiA0MTBweDtcbn1cblxuLndpdHMtNSB7XG4gIHRvcDogMzE2cHg7XG4gIGxlZnQ6IDQyMXB4O1xufVxuXG4ucmVzb2x2ZS0yIHtcbiAgdG9wOiAzNTVweDtcbiAgbGVmdDogMzg5cHg7XG59XG5cbi5yZXNvbHZlLTMge1xuICB0b3A6IDM1NXB4O1xuICBsZWZ0OiA0MDBweDtcbn1cblxuLnJlc29sdmUtNCB7XG4gIHRvcDogMzU1cHg7XG4gIGxlZnQ6IDQxMHB4O1xufVxuXG4ucmVzb2x2ZS01IHtcbiAgdG9wOiAzNTVweDtcbiAgbGVmdDogNDIxcHg7XG59XG5cbi5zdHJlbmd0aC0yIHtcbiAgdG9wOiAyNzZweDtcbiAgbGVmdDogNTg3cHg7XG59XG5cbi5zdHJlbmd0aC0zIHtcbiAgdG9wOiAyNzZweDtcbiAgbGVmdDogNTk3cHg7XG59XG5cbi5zdHJlbmd0aC00IHtcbiAgdG9wOiAyNzZweDtcbiAgbGVmdDogNjA2cHg7XG59XG5cbi5zdHJlbmd0aC01IHtcbiAgdG9wOiAyNzZweDtcbiAgbGVmdDogNjE3cHg7XG59XG5cbi5kZXh0ZXJpdHktMiB7XG4gIHRvcDogMzE2cHg7XG4gIGxlZnQ6IDU4OXB4O1xufVxuXG4uZGV4dGVyaXR5LTMge1xuICB0b3A6IDMxNnB4O1xuICBsZWZ0OiA1OTlweDtcbn1cblxuLmRleHRlcml0eS00IHtcbiAgdG9wOiAzMTZweDtcbiAgbGVmdDogNjA5cHg7XG59XG5cbi5kZXh0ZXJpdHktNSB7XG4gIHRvcDogMzE2cHg7XG4gIGxlZnQ6IDYxOXB4O1xufVxuXG4uc3RhbWluYS0yIHtcbiAgdG9wOiAzNTVweDtcbiAgbGVmdDogNTg5cHg7XG59XG5cbi5zdGFtaW5hLTMge1xuICB0b3A6IDM1NXB4O1xuICBsZWZ0OiA1OThweDtcbn1cblxuLnN0YW1pbmEtNCB7XG4gIHRvcDogMzU1cHg7XG4gIGxlZnQ6IDYwOHB4O1xufVxuXG4uc3RhbWluYS01IHtcbiAgdG9wOiAzNTVweDtcbiAgbGVmdDogNjE5cHg7XG59XG5cbi5wcmVzZW5jZS0yIHtcbiAgdG9wOiAyNzVweDtcbiAgbGVmdDogNzgzcHg7XG59XG5cbi5wcmVzZW5jZS0zIHtcbiAgdG9wOiAyNzVweDtcbiAgbGVmdDogNzkzcHg7XG59XG5cbi5wcmVzZW5jZS00IHtcbiAgdG9wOiAyNzVweDtcbiAgbGVmdDogODAzcHg7XG59XG5cbi5wcmVzZW5jZS01IHtcbiAgdG9wOiAyNzVweDtcbiAgbGVmdDogODEzcHg7XG59XG5cbi5tYW5pcHVsYXRpb24tMiB7XG4gIHRvcDogMzE4cHg7XG4gIGxlZnQ6IDc4M3B4O1xufVxuXG4ubWFuaXB1bGF0aW9uLTMge1xuICB0b3A6IDMxOHB4O1xuICBsZWZ0OiA3OTNweDtcbn1cblxuLm1hbmlwdWxhdGlvbi00IHtcbiAgdG9wOiAzMThweDtcbiAgbGVmdDogODAzcHg7XG59XG5cbi5tYW5pcHVsYXRpb24tNSB7XG4gIHRvcDogMzE4cHg7XG4gIGxlZnQ6IDgxM3B4O1xufVxuXG4uY29tcG9zdXJlLTIge1xuICB0b3A6IDM1N3B4O1xuICBsZWZ0OiA3ODRweDtcbn1cblxuLmNvbXBvc3VyZS0zIHtcbiAgdG9wOiAzNTdweDtcbiAgbGVmdDogNzk0cHg7XG59XG5cbi5jb21wb3N1cmUtNCB7XG4gIHRvcDogMzU3cHg7XG4gIGxlZnQ6IDgwNHB4O1xufVxuXG4uY29tcG9zdXJlLTUge1xuICB0b3A6IDM1N3B4O1xuICBsZWZ0OiA4MTNweDtcbn1cblxuLmFjYWRlbWljcy0xIHtcbiAgdG9wOiA0OTRweDtcbiAgbGVmdDogMzA5cHg7XG59XG5cbi5hY2FkZW1pY3MtMiB7XG4gIHRvcDogNDk0cHg7XG4gIGxlZnQ6IDMxOHB4O1xufVxuXG4uYWNhZGVtaWNzLTMge1xuICB0b3A6IDQ5NHB4O1xuICBsZWZ0OiAzMjhweDtcbn1cblxuLmFjYWRlbWljcy00IHtcbiAgdG9wOiA0OTRweDtcbiAgbGVmdDogMzM4cHg7XG59XG5cbi5hY2FkZW1pY3MtNSB7XG4gIHRvcDogNDk0cHg7XG4gIGxlZnQ6IDM0OHB4O1xufVxuXG4uY29tcHV0ZXItMSB7XG4gIHRvcDogNTE2cHg7XG4gIGxlZnQ6IDMwOHB4O1xufVxuXG4uY29tcHV0ZXItMiB7XG4gIHRvcDogNTE2cHg7XG4gIGxlZnQ6IDMxOHB4O1xufVxuXG4uY29tcHV0ZXItMyB7XG4gIHRvcDogNTE2cHg7XG4gIGxlZnQ6IDMyOHB4O1xufVxuXG4uY29tcHV0ZXItNCB7XG4gIHRvcDogNTE2cHg7XG4gIGxlZnQ6IDMzOHB4O1xufVxuXG4uY29tcHV0ZXItNSB7XG4gIHRvcDogNTE2cHg7XG4gIGxlZnQ6IDM0OHB4O1xufVxuXG4uY3JhZnRzLTEge1xuICB0b3A6IDUzOXB4O1xuICBsZWZ0OiAzMDlweDtcbn1cblxuLmNyYWZ0cy0yIHtcbiAgdG9wOiA1MzlweDtcbiAgbGVmdDogMzE4cHg7XG59XG5cbi5jcmFmdHMtMyB7XG4gIHRvcDogNTM5cHg7XG4gIGxlZnQ6IDMyOHB4O1xufVxuXG4uY3JhZnRzLTQge1xuICB0b3A6IDUzOXB4O1xuICBsZWZ0OiAzMzhweDtcbn1cblxuLmNyYWZ0cy01IHtcbiAgdG9wOiA1MzlweDtcbiAgbGVmdDogMzQ4cHg7XG59XG5cbi5pbnZlc3RpZ2F0aW9uLTEge1xuICB0b3A6IDU2MXB4O1xuICBsZWZ0OiAzMDhweDtcbn1cblxuLmludmVzdGlnYXRpb24tMiB7XG4gIHRvcDogNTYxcHg7XG4gIGxlZnQ6IDMxOHB4O1xufVxuXG4uaW52ZXN0aWdhdGlvbi0zIHtcbiAgdG9wOiA1NjFweDtcbiAgbGVmdDogMzI4cHg7XG59XG5cbi5pbnZlc3RpZ2F0aW9uLTQge1xuICB0b3A6IDU2MXB4O1xuICBsZWZ0OiAzMzhweDtcbn1cblxuLmludmVzdGlnYXRpb24tNSB7XG4gIHRvcDogNTYxcHg7XG4gIGxlZnQ6IDM0OHB4O1xufVxuXG4ubWVkaWNpbmUtMSB7XG4gIHRvcDogNTgzcHg7XG4gIGxlZnQ6IDMwOXB4O1xufVxuXG4ubWVkaWNpbmUtMiB7XG4gIHRvcDogNTgzcHg7XG4gIGxlZnQ6IDMxOHB4O1xufVxuXG4ubWVkaWNpbmUtMyB7XG4gIHRvcDogNTgzcHg7XG4gIGxlZnQ6IDMyOHB4O1xufVxuXG4ubWVkaWNpbmUtNCB7XG4gIHRvcDogNTgzcHg7XG4gIGxlZnQ6IDMzOHB4O1xufVxuXG4ubWVkaWNpbmUtNSB7XG4gIHRvcDogNTgzcHg7XG4gIGxlZnQ6IDM0N3B4O1xufVxuXG4ub2NjdWx0LTEge1xuICB0b3A6IDYwNXB4O1xuICBsZWZ0OiAzMDhweDtcbn1cblxuLm9jY3VsdC0yIHtcbiAgdG9wOiA2MDVweDtcbiAgbGVmdDogMzE4cHg7XG59XG5cbi5vY2N1bHQtMyB7XG4gIHRvcDogNjA1cHg7XG4gIGxlZnQ6IDMyOHB4O1xufVxuXG4ub2NjdWx0LTQge1xuICB0b3A6IDYwNXB4O1xuICBsZWZ0OiAzMzhweDtcbn1cblxuLm9jY3VsdC01IHtcbiAgdG9wOiA2MDVweDtcbiAgbGVmdDogMzQ4cHg7XG59XG5cbi5wb2xpdGljcy0xIHtcbiAgdG9wOiA2MjdweDtcbiAgbGVmdDogMzA4cHg7XG59XG5cbi5wb2xpdGljcy0yIHtcbiAgdG9wOiA2MjdweDtcbiAgbGVmdDogMzE4cHg7XG59XG5cbi5wb2xpdGljcy0zIHtcbiAgdG9wOiA2MjdweDtcbiAgbGVmdDogMzI4cHg7XG59XG5cbi5wb2xpdGljcy00IHtcbiAgdG9wOiA2MjdweDtcbiAgbGVmdDogMzM4cHg7XG59XG5cbi5wb2xpdGljcy01IHtcbiAgdG9wOiA2MjdweDtcbiAgbGVmdDogMzQ4cHg7XG59XG5cbi5zY2llbmNlLTEge1xuICB0b3A6IDY0OXB4O1xuICBsZWZ0OiAzMDhweDtcbn1cblxuLnNjaWVuY2UtMiB7XG4gIHRvcDogNjQ5cHg7XG4gIGxlZnQ6IDMxOHB4O1xufVxuXG4uc2NpZW5jZS0zIHtcbiAgdG9wOiA2NDlweDtcbiAgbGVmdDogMzI4cHg7XG59XG5cbi5zY2llbmNlLTQge1xuICB0b3A6IDY0OXB4O1xuICBsZWZ0OiAzMzhweDtcbn1cblxuLnNjaWVuY2UtNSB7XG4gIHRvcDogNjQ5cHg7XG4gIGxlZnQ6IDM0OHB4O1xufVxuXG4uYXRobGV0aWNzLTEge1xuICB0b3A6IDczMnB4O1xuICBsZWZ0OiAzMDhweDtcbn1cblxuLmF0aGxldGljcy0yIHtcbiAgdG9wOiA3MzJweDtcbiAgbGVmdDogMzE4cHg7XG59XG5cbi5hdGhsZXRpY3MtMyB7XG4gIHRvcDogNzMycHg7XG4gIGxlZnQ6IDMyOHB4O1xufVxuXG4uYXRobGV0aWNzLTQge1xuICB0b3A6IDczMnB4O1xuICBsZWZ0OiAzMzhweDtcbn1cblxuLmF0aGxldGljcy01IHtcbiAgdG9wOiA3MzJweDtcbiAgbGVmdDogMzQ3cHg7XG59XG5cbi5icmF3bC0xIHtcbiAgdG9wOiA3NTRweDtcbiAgbGVmdDogMzA4cHg7XG59XG5cbi5icmF3bC0yIHtcbiAgdG9wOiA3NTRweDtcbiAgbGVmdDogMzE4cHg7XG59XG5cbi5icmF3bC0zIHtcbiAgdG9wOiA3NTRweDtcbiAgbGVmdDogMzI4cHg7XG59XG5cbi5icmF3bC00IHtcbiAgdG9wOiA3NTRweDtcbiAgbGVmdDogMzM4cHg7XG59XG5cbi5icmF3bC01IHtcbiAgdG9wOiA3NTRweDtcbiAgbGVmdDogMzQ3cHg7XG59XG5cbi5kcml2ZS0xIHtcbiAgdG9wOiA3NzdweDtcbiAgbGVmdDogMzA4cHg7XG59XG5cbi5kcml2ZS0yIHtcbiAgdG9wOiA3NzdweDtcbiAgbGVmdDogMzE4cHg7XG59XG5cbi5kcml2ZS0zIHtcbiAgdG9wOiA3NzdweDtcbiAgbGVmdDogMzI4cHg7XG59XG5cbi5kcml2ZS00IHtcbiAgdG9wOiA3NzdweDtcbiAgbGVmdDogMzM4cHg7XG59XG5cbi5kcml2ZS01IHtcbiAgdG9wOiA3NzdweDtcbiAgbGVmdDogMzQ4cHg7XG59XG5cbi5maXJlYXJtcy0xIHtcbiAgdG9wOiA3OTlweDtcbiAgbGVmdDogMzA4cHg7XG59XG5cbi5maXJlYXJtcy0yIHtcbiAgdG9wOiA3OTlweDtcbiAgbGVmdDogMzE4cHg7XG59XG5cbi5maXJlYXJtcy0zIHtcbiAgdG9wOiA3OTlweDtcbiAgbGVmdDogMzI4cHg7XG59XG5cbi5maXJlYXJtcy00IHtcbiAgdG9wOiA3OTlweDtcbiAgbGVmdDogMzM4cHg7XG59XG5cbi5maXJlYXJtcy01IHtcbiAgdG9wOiA3OTlweDtcbiAgbGVmdDogMzQ4cHg7XG59XG5cbi5sYXJjZW55LTEge1xuICB0b3A6IDgyMXB4O1xuICBsZWZ0OiAzMDhweDtcbn1cblxuLmxhcmNlbnktMiB7XG4gIHRvcDogODIxcHg7XG4gIGxlZnQ6IDMxOHB4O1xufVxuXG4ubGFyY2VueS0zIHtcbiAgdG9wOiA4MjFweDtcbiAgbGVmdDogMzI4cHg7XG59XG5cbi5sYXJjZW55LTQge1xuICB0b3A6IDgyMXB4O1xuICBsZWZ0OiAzMzhweDtcbn1cblxuLmxhcmNlbnktNSB7XG4gIHRvcDogODIxcHg7XG4gIGxlZnQ6IDM0OHB4O1xufVxuXG4uc3RlYWx0aC0xIHtcbiAgdG9wOiA4NDNweDtcbiAgbGVmdDogMzA3cHg7XG59XG5cbi5zdGVhbHRoLTIge1xuICB0b3A6IDg0M3B4O1xuICBsZWZ0OiAzMThweDtcbn1cblxuLnN0ZWFsdGgtMyB7XG4gIHRvcDogODQzcHg7XG4gIGxlZnQ6IDMyOHB4O1xufVxuXG4uc3RlYWx0aC00IHtcbiAgdG9wOiA4NDNweDtcbiAgbGVmdDogMzM4cHg7XG59XG5cbi5zdGVhbHRoLTUge1xuICB0b3A6IDg0M3B4O1xuICBsZWZ0OiAzNDdweDtcbn1cblxuLnN1cnZpdmFsLTEge1xuICB0b3A6IDg2NXB4O1xuICBsZWZ0OiAzMDhweDtcbn1cblxuLnN1cnZpdmFsLTIge1xuICB0b3A6IDg2NXB4O1xuICBsZWZ0OiAzMThweDtcbn1cblxuLnN1cnZpdmFsLTMge1xuICB0b3A6IDg2NXB4O1xuICBsZWZ0OiAzMjhweDtcbn1cblxuLnN1cnZpdmFsLTQge1xuICB0b3A6IDg2NXB4O1xuICBsZWZ0OiAzMzhweDtcbn1cblxuLnN1cnZpdmFsLTUge1xuICB0b3A6IDg2NXB4O1xuICBsZWZ0OiAzNDdweDtcbn1cblxuLndlYXBvbnJ5LTEge1xuICB0b3A6IDg4N3B4O1xuICBsZWZ0OiAzMDlweDtcbn1cblxuLndlYXBvbnJ5LTIge1xuICB0b3A6IDg4N3B4O1xuICBsZWZ0OiAzMThweDtcbn1cblxuLndlYXBvbnJ5LTMge1xuICB0b3A6IDg4N3B4O1xuICBsZWZ0OiAzMjhweDtcbn1cblxuLndlYXBvbnJ5LTQge1xuICB0b3A6IDg4N3B4O1xuICBsZWZ0OiAzMzhweDtcbn1cblxuLndlYXBvbnJ5LTUge1xuICB0b3A6IDg4N3B4O1xuICBsZWZ0OiAzNDdweDtcbn1cblxuLmFuaW1hbGtlbi0xIHtcbiAgdG9wOiA5NzBweDtcbiAgbGVmdDogMzExcHg7XG59XG5cbi5hbmltYWxrZW4tMiB7XG4gIHRvcDogOTcwcHg7XG4gIGxlZnQ6IDMyMXB4O1xufVxuXG4uYW5pbWFsa2VuLTMge1xuICB0b3A6IDk3MHB4O1xuICBsZWZ0OiAzMzFweDtcbn1cblxuLmFuaW1hbGtlbi00IHtcbiAgdG9wOiA5NzBweDtcbiAgbGVmdDogMzQxcHg7XG59XG5cbi5hbmltYWxrZW4tNSB7XG4gIHRvcDogOTcwcHg7XG4gIGxlZnQ6IDM1MXB4O1xufVxuXG4uZW1wYXRoeS0xIHtcbiAgdG9wOiA5OTJweDtcbiAgbGVmdDogMzExcHg7XG59XG5cbi5lbXBhdGh5LTIge1xuICB0b3A6IDk5MnB4O1xuICBsZWZ0OiAzMjFweDtcbn1cblxuLmVtcGF0aHktMyB7XG4gIHRvcDogOTkycHg7XG4gIGxlZnQ6IDMzMXB4O1xufVxuXG4uZW1wYXRoeS00IHtcbiAgdG9wOiA5OTJweDtcbiAgbGVmdDogMzQxcHg7XG59XG5cbi5lbXBhdGh5LTUge1xuICB0b3A6IDk5MnB4O1xuICBsZWZ0OiAzNTFweDtcbn1cblxuLmV4cHJlc3Npb24tMSB7XG4gIHRvcDogMTAxNHB4O1xuICBsZWZ0OiAzMTJweDtcbn1cblxuLmV4cHJlc3Npb24tMiB7XG4gIHRvcDogMTAxNHB4O1xuICBsZWZ0OiAzMjFweDtcbn1cblxuLmV4cHJlc3Npb24tMyB7XG4gIHRvcDogMTAxNHB4O1xuICBsZWZ0OiAzMzFweDtcbn1cblxuLmV4cHJlc3Npb24tNCB7XG4gIHRvcDogMTAxNHB4O1xuICBsZWZ0OiAzNDFweDtcbn1cblxuLmV4cHJlc3Npb24tNSB7XG4gIHRvcDogMTAxNHB4O1xuICBsZWZ0OiAzNTFweDtcbn1cblxuLmludGltaWRhdGlvbi0xIHtcbiAgdG9wOiAxMDM2cHg7XG4gIGxlZnQ6IDMxMXB4O1xufVxuXG4uaW50aW1pZGF0aW9uLTIge1xuICB0b3A6IDEwMzZweDtcbiAgbGVmdDogMzIxcHg7XG59XG5cbi5pbnRpbWlkYXRpb24tMyB7XG4gIHRvcDogMTAzNnB4O1xuICBsZWZ0OiAzMzFweDtcbn1cblxuLmludGltaWRhdGlvbi00IHtcbiAgdG9wOiAxMDM2cHg7XG4gIGxlZnQ6IDM0MXB4O1xufVxuXG4uaW50aW1pZGF0aW9uLTUge1xuICB0b3A6IDEwMzZweDtcbiAgbGVmdDogMzUxcHg7XG59XG5cbi5wZXJzdWFzaW9uLTEge1xuICB0b3A6IDEwNThweDtcbiAgbGVmdDogMzEycHg7XG59XG5cbi5wZXJzdWFzaW9uLTIge1xuICB0b3A6IDEwNThweDtcbiAgbGVmdDogMzIxcHg7XG59XG5cbi5wZXJzdWFzaW9uLTMge1xuICB0b3A6IDEwNThweDtcbiAgbGVmdDogMzMxcHg7XG59XG5cbi5wZXJzdWFzaW9uLTQge1xuICB0b3A6IDEwNThweDtcbiAgbGVmdDogMzQxcHg7XG59XG5cbi5wZXJzdWFzaW9uLTUge1xuICB0b3A6IDEwNThweDtcbiAgbGVmdDogMzUxcHg7XG59XG5cbi5zb2NpYWxpemUtMSB7XG4gIHRvcDogMTA4MXB4O1xuICBsZWZ0OiAzMTJweDtcbn1cblxuLnNvY2lhbGl6ZS0yIHtcbiAgdG9wOiAxMDgxcHg7XG4gIGxlZnQ6IDMyMXB4O1xufVxuXG4uc29jaWFsaXplLTMge1xuICB0b3A6IDEwODFweDtcbiAgbGVmdDogMzMxcHg7XG59XG5cbi5zb2NpYWxpemUtNCB7XG4gIHRvcDogMTA4MXB4O1xuICBsZWZ0OiAzNDFweDtcbn1cblxuLnNvY2lhbGl6ZS01IHtcbiAgdG9wOiAxMDgxcHg7XG4gIGxlZnQ6IDM1MXB4O1xufVxuXG4uc3RyZWV0d2lzZS0xIHtcbiAgdG9wOiAxMTAzcHg7XG4gIGxlZnQ6IDMxMnB4O1xufVxuXG4uc3RyZWV0d2lzZS0yIHtcbiAgdG9wOiAxMTAzcHg7XG4gIGxlZnQ6IDMyMXB4O1xufVxuXG4uc3RyZWV0d2lzZS0zIHtcbiAgdG9wOiAxMTAzcHg7XG4gIGxlZnQ6IDMzMXB4O1xufVxuXG4uc3RyZWV0d2lzZS00IHtcbiAgdG9wOiAxMTAzcHg7XG4gIGxlZnQ6IDM0MXB4O1xufVxuXG4uc3RyZWV0d2lzZS01IHtcbiAgdG9wOiAxMTAzcHg7XG4gIGxlZnQ6IDM1MXB4O1xufVxuXG4uc3VidGVyZnVnZS0xIHtcbiAgdG9wOiAxMTI1cHg7XG4gIGxlZnQ6IDMxMXB4O1xufVxuXG4uc3VidGVyZnVnZS0yIHtcbiAgdG9wOiAxMTI1cHg7XG4gIGxlZnQ6IDMyMXB4O1xufVxuXG4uc3VidGVyZnVnZS0zIHtcbiAgdG9wOiAxMTI1cHg7XG4gIGxlZnQ6IDMzMXB4O1xufVxuXG4uc3VidGVyZnVnZS00IHtcbiAgdG9wOiAxMTI1cHg7XG4gIGxlZnQ6IDM0MXB4O1xufVxuXG4uc3VidGVyZnVnZS01IHtcbiAgdG9wOiAxMTI1cHg7XG4gIGxlZnQ6IDM1MXB4O1xufVxuXG4uaGVhbHRoLTEge1xuICB0b3A6IDQ3N3B4O1xuICBsZWZ0OiA2MjdweDtcbn1cblxuLmhlYWx0aC0yIHtcbiAgdG9wOiA0NzdweDtcbiAgbGVmdDogNjQ0cHg7XG59XG5cbi5oZWFsdGgtMyB7XG4gIHRvcDogNDc3cHg7XG4gIGxlZnQ6IDY2MHB4O1xufVxuXG4uaGVhbHRoLTQge1xuICB0b3A6IDQ3N3B4O1xuICBsZWZ0OiA2NzdweDtcbn1cblxuLmhlYWx0aC01IHtcbiAgdG9wOiA0NzdweDtcbiAgbGVmdDogNjk0cHg7XG59XG5cbi5oZWFsdGgtNiB7XG4gIHRvcDogNDc3cHg7XG4gIGxlZnQ6IDcxMHB4O1xufVxuXG4uaGVhbHRoLTcge1xuICB0b3A6IDQ3N3B4O1xuICBsZWZ0OiA3MjdweDtcbn1cblxuLmhlYWx0aC04IHtcbiAgdG9wOiA0NzdweDtcbiAgbGVmdDogNzQ0cHg7XG59XG5cbi5oZWFsdGgtOSB7XG4gIHRvcDogNDc3cHg7XG4gIGxlZnQ6IDc2MHB4O1xufVxuXG4uaGVhbHRoLTEwIHtcbiAgdG9wOiA0NzdweDtcbiAgbGVmdDogNzc3cHg7XG59XG5cbi5oZWFsdGgtMTEge1xuICB0b3A6IDQ3N3B4O1xuICBsZWZ0OiA3OTRweDtcbn1cblxuLmhlYWx0aC0xMiB7XG4gIHRvcDogNDc3cHg7XG4gIGxlZnQ6IDgxMHB4O1xufVxuXG4ud2lsbHBvd2VyLTEge1xuICB0b3A6IDU2MXB4O1xuICBsZWZ0OiA2NDNweDtcbn1cblxuLndpbGxwb3dlci0yIHtcbiAgdG9wOiA1NjFweDtcbiAgbGVmdDogNjYwcHg7XG59XG5cbi53aWxscG93ZXItMyB7XG4gIHRvcDogNTYxcHg7XG4gIGxlZnQ6IDY3N3B4O1xufVxuXG4ud2lsbHBvd2VyLTQge1xuICB0b3A6IDU2MXB4O1xuICBsZWZ0OiA2OTNweDtcbn1cblxuLndpbGxwb3dlci01IHtcbiAgdG9wOiA1NjFweDtcbiAgbGVmdDogNzEwcHg7XG59XG5cbi53aWxscG93ZXItNiB7XG4gIHRvcDogNTYxcHg7XG4gIGxlZnQ6IDcyN3B4O1xufVxuXG4ud2lsbHBvd2VyLTcge1xuICB0b3A6IDU2MXB4O1xuICBsZWZ0OiA3NDNweDtcbn1cblxuLndpbGxwb3dlci04IHtcbiAgdG9wOiA1NjFweDtcbiAgbGVmdDogNzYwcHg7XG59XG5cbi53aWxscG93ZXItOSB7XG4gIHRvcDogNTYxcHg7XG4gIGxlZnQ6IDc3N3B4O1xufVxuXG4ud2lsbHBvd2VyLTEwIHtcbiAgdG9wOiA1NjFweDtcbiAgbGVmdDogNzkzcHg7XG59XG5cbi5tb3JhbGl0eS0xIHtcbiAgdG9wOiA4MzhweDtcbiAgbGVmdDogNzk0cHg7XG59XG5cbi5tb3JhbGl0eS0yIHtcbiAgdG9wOiA4MTVweDtcbiAgbGVmdDogNzk0cHg7XG59XG5cbi5tb3JhbGl0eS0zIHtcbiAgdG9wOiA3OTNweDtcbiAgbGVmdDogNzk0cHg7XG59XG5cbi5tb3JhbGl0eS00IHtcbiAgdG9wOiA3NzFweDtcbiAgbGVmdDogNzk0cHg7XG59XG5cbi5tb3JhbGl0eS01IHtcbiAgdG9wOiA3NDlweDtcbiAgbGVmdDogNzk0cHg7XG59XG5cbi5tb3JhbGl0eS02IHtcbiAgdG9wOiA3MjdweDtcbiAgbGVmdDogNzk0cHg7XG59XG5cbi5tb3JhbGl0eS03IHtcbiAgdG9wOiA3MDRweDtcbiAgbGVmdDogNzk0cHg7XG59XG5cbi5tb3JhbGl0eS04IHtcbiAgdG9wOiA2ODJweDtcbiAgbGVmdDogNzk0cHg7XG59XG5cbi5tb3JhbGl0eS05IHtcbiAgdG9wOiA2NjBweDtcbiAgbGVmdDogNzk0cHg7XG59XG5cbi5tb3JhbGl0eS0xMCB7XG4gIHRvcDogNjM4cHg7XG4gIGxlZnQ6IDc5NHB4O1xufVxuXG5pbnB1dFtuYW1lPXNpemVdIHtcbiAgdG9wOiA3OTNweDtcbiAgbGVmdDogNDIxcHg7XG4gIHdpZHRoOiAxNzZweDtcbn1cblxuaW5wdXRbbmFtZT1zcGVlZF0ge1xuICB0b3A6IDgxOXB4O1xuICBsZWZ0OiA0MzBweDtcbiAgd2lkdGg6IDE2N3B4O1xufVxuXG5pbnB1dFtuYW1lPWluaXRpYXRpdmVdIHtcbiAgdG9wOiA4NDlweDtcbiAgbGVmdDogNDg0cHg7XG4gIHdpZHRoOiAxMTNweDtcbn1cblxuaW5wdXRbbmFtZT1kZWZlbnNlXSB7XG4gIHRvcDogODc5cHg7XG4gIGxlZnQ6IDQ0NnB4O1xuICB3aWR0aDogMTUxcHg7XG59XG5cbmlucHV0W25hbWU9YXJtb3JdIHtcbiAgdG9wOiA5MDlweDtcbiAgbGVmdDogNDM0cHg7XG4gIHdpZHRoOiAxNjNweDtcbn1cblxuLmxpLWVtcHR5IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgaGVpZ2h0OiAxNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NwodMortalNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nwod-mortal-new',
                templateUrl: './new.component.html',
                styleUrls: ['./new.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nwod/nwod-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/nwod/nwod-routing.module.ts ***!
  \*********************************************/
/*! exports provided: NwodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwodRoutingModule", function() { return NwodRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nwod_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nwod.component */ "./src/app/nwod/nwod.component.ts");
/* harmony import */ var _mortal_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mortal/new.component */ "./src/app/nwod/mortal/new.component.ts");
/* harmony import */ var _mage_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mage/new.component */ "./src/app/nwod/mage/new.component.ts");
/* harmony import */ var _mage_prelude_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mage/prelude.component */ "./src/app/nwod/mage/prelude.component.ts");
/* harmony import */ var _mage_leader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mage/leader.component */ "./src/app/nwod/mage/leader.component.ts");
/* harmony import */ var _mage_paradox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mage/paradox.component */ "./src/app/nwod/mage/paradox.component.ts");
/* harmony import */ var _mage_rotes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mage/rotes.component */ "./src/app/nwod/mage/rotes.component.ts");
/* harmony import */ var _mage_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mage/game.component */ "./src/app/nwod/mage/game.component.ts");












const routes = [
    {
        path: '',
        component: _nwod_component__WEBPACK_IMPORTED_MODULE_2__["NwodComponent"]
    }, {
        path: 'mortal/new',
        component: _mortal_new_component__WEBPACK_IMPORTED_MODULE_3__["NwodMortalNewComponent"]
    }, {
        path: 'mage/new',
        component: _mage_new_component__WEBPACK_IMPORTED_MODULE_4__["NwodMageNewComponent"]
    }, {
        path: 'mage/prelude',
        component: _mage_prelude_component__WEBPACK_IMPORTED_MODULE_5__["NwodMagePreludeComponent"]
    }, {
        path: 'mage/leader',
        component: _mage_leader_component__WEBPACK_IMPORTED_MODULE_6__["NwodMageLeaderComponent"]
    }, {
        path: 'mage/paradox',
        component: _mage_paradox_component__WEBPACK_IMPORTED_MODULE_7__["NwodMageParadoxComponent"]
    }, {
        path: 'mage/rotes',
        component: _mage_rotes_component__WEBPACK_IMPORTED_MODULE_8__["NwodMageRotesComponent"]
    }, {
        path: 'mage/game',
        component: _mage_game_component__WEBPACK_IMPORTED_MODULE_9__["NwodMageGameComponent"]
    }, {
        path: 'mage/:id',
        component: _mage_new_component__WEBPACK_IMPORTED_MODULE_4__["NwodMageNewComponent"]
    }
];
class NwodRoutingModule {
}
NwodRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NwodRoutingModule });
NwodRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NwodRoutingModule_Factory(t) { return new (t || NwodRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NwodRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NwodRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/nwod/nwod.component.ts":
/*!****************************************!*\
  !*** ./src/app/nwod/nwod.component.ts ***!
  \****************************************/
/*! exports provided: NwodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwodComponent", function() { return NwodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function NwodComponent_div_12_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "mage/" + character_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](character_r7.name);
} }
function NwodComponent_div_12_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Aucun personnage en base de donn\u00E9e ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vos personnages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NwodComponent_div_12_li_4_Template, 3, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NwodComponent_div_12_li_6_Template, 2, 0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_1_0 = null;
    const currVal_1 = ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r0.characters)) == null ? null : tmp_1_0.length) === 0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r0.characters));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);
} }
function NwodComponent_div_14_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "mage/" + character_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](character_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (Mise \u00E0 jour le ", character_r10.lastUpdateStr, ") ");
} }
function NwodComponent_div_14_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Aucun autre personnage en base de donn\u00E9e ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NwodComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Les autres personnages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NwodComponent_div_14_li_4_Template, 4, 3, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NwodComponent_div_14_li_6_Template, 2, 0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_1_0 = null;
    const currVal_1 = ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r1.characters)) == null ? null : tmp_1_0.length) === 0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r1.otherCharacters));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);
} }
function NwodComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Connectez-vous pour acc\u00E9der \u00E0 vos persos !\n");
} }
class NwodComponent {
    constructor(auth, afs) {
        this.auth = auth;
        auth.authState.subscribe((user) => {
            if (!user) {
                return;
            }
            this.user = user;
            this.charactersCollection = afs.collection('characters', (ref) => {
                return ref.where('userid', '==', user.uid)
                    .orderBy('timestamp', 'asc');
            });
            this.characters = this.charactersCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            })));
            if (this.isAdmin()) {
                this.otherCharactersCollection = afs.collection('characters', (ref) => {
                    return ref.orderBy('timestamp', 'asc');
                });
                this.otherCharacters = this.otherCharactersCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    const date = new Date(data['lastUpdate']);
                    const lastUpdateStr = date.getDate() + '/' + (1 + date.getMonth()) + ' ' + date.getHours() + ':' + date.getMinutes();
                    return Object.assign({ id, lastUpdateStr }, data);
                })));
            }
        });
    }
    createMage() {
        this.charactersCollection.add({
            name: 'Personnage sans nom',
            userid: this.user.uid,
            timestamp: Date.now()
        });
    }
    isAdmin() {
        return this.user && this.user.email === 'maferyt@gmail.com';
    }
}
NwodComponent.ɵfac = function NwodComponent_Factory(t) { return new (t || NwodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
NwodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NwodComponent, selectors: [["app-nwod"]], decls: 17, vars: 5, consts: [["routerLink", "/nwod/mage/prelude"], ["routerLink", "/nwod/mage/rotes"], ["routerLink", "/nwod/mage/game"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["notAuth", ""], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function NwodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Chronicles of Darkness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pr\u00E9lude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Routines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NwodComponent_div_12_Template, 8, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NwodComponent_div_14_Template, 8, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NwodComponent_ng_template_15_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 3, ctx.auth.user))("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL253b2QvbndvZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NwodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nwod',
                templateUrl: './nwod.component.html',
                styleUrls: ['./nwod.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nwod/nwod.module.ts":
/*!*************************************!*\
  !*** ./src/app/nwod/nwod.module.ts ***!
  \*************************************/
/*! exports provided: NwodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwodModule", function() { return NwodModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nwod_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nwod-routing.module */ "./src/app/nwod/nwod-routing.module.ts");
/* harmony import */ var _nwod_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nwod.component */ "./src/app/nwod/nwod.component.ts");
/* harmony import */ var _mortal_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mortal/new.component */ "./src/app/nwod/mortal/new.component.ts");
/* harmony import */ var _mage_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mage/new.component */ "./src/app/nwod/mage/new.component.ts");
/* harmony import */ var _mage_prelude_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mage/prelude.component */ "./src/app/nwod/mage/prelude.component.ts");
/* harmony import */ var _mage_leader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mage/leader.component */ "./src/app/nwod/mage/leader.component.ts");
/* harmony import */ var _mage_paradox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mage/paradox.component */ "./src/app/nwod/mage/paradox.component.ts");
/* harmony import */ var _mage_rotes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mage/rotes.component */ "./src/app/nwod/mage/rotes.component.ts");
/* harmony import */ var _mage_game_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mage/game.component */ "./src/app/nwod/mage/game.component.ts");













class NwodModule {
}
NwodModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NwodModule });
NwodModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NwodModule_Factory(t) { return new (t || NwodModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _nwod_routing_module__WEBPACK_IMPORTED_MODULE_3__["NwodRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NwodModule, { declarations: [_nwod_component__WEBPACK_IMPORTED_MODULE_4__["NwodComponent"],
        _mortal_new_component__WEBPACK_IMPORTED_MODULE_5__["NwodMortalNewComponent"],
        _mage_new_component__WEBPACK_IMPORTED_MODULE_6__["NwodMageNewComponent"],
        _mage_prelude_component__WEBPACK_IMPORTED_MODULE_7__["NwodMagePreludeComponent"],
        _mage_leader_component__WEBPACK_IMPORTED_MODULE_8__["NwodMageLeaderComponent"],
        _mage_paradox_component__WEBPACK_IMPORTED_MODULE_9__["NwodMageParadoxComponent"],
        _mage_rotes_component__WEBPACK_IMPORTED_MODULE_10__["NwodMageRotesComponent"],
        _mage_game_component__WEBPACK_IMPORTED_MODULE_11__["NwodMageGameComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _nwod_routing_module__WEBPACK_IMPORTED_MODULE_3__["NwodRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NwodModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _nwod_component__WEBPACK_IMPORTED_MODULE_4__["NwodComponent"],
                    _mortal_new_component__WEBPACK_IMPORTED_MODULE_5__["NwodMortalNewComponent"],
                    _mage_new_component__WEBPACK_IMPORTED_MODULE_6__["NwodMageNewComponent"],
                    _mage_prelude_component__WEBPACK_IMPORTED_MODULE_7__["NwodMagePreludeComponent"],
                    _mage_leader_component__WEBPACK_IMPORTED_MODULE_8__["NwodMageLeaderComponent"],
                    _mage_paradox_component__WEBPACK_IMPORTED_MODULE_9__["NwodMageParadoxComponent"],
                    _mage_rotes_component__WEBPACK_IMPORTED_MODULE_10__["NwodMageRotesComponent"],
                    _mage_game_component__WEBPACK_IMPORTED_MODULE_11__["NwodMageGameComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _nwod_routing_module__WEBPACK_IMPORTED_MODULE_3__["NwodRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=nwod-nwod-module-es2015.js.map