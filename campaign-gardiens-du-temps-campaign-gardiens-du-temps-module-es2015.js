(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaign-gardiens-du-temps-campaign-gardiens-du-temps-module"],{

/***/ "./src/app/campaign-gardiens-du-temps/campaign-gardiens-du-temps-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/campaign-gardiens-du-temps/campaign-gardiens-du-temps-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CampaignGardiensDuTempsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignGardiensDuTempsRoutingModule", function() { return CampaignGardiensDuTempsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _campaign_gardiens_du_temps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campaign-gardiens-du-temps.component */ "./src/app/campaign-gardiens-du-temps/campaign-gardiens-du-temps.component.ts");





const routes = [
    {
        path: '',
        component: _campaign_gardiens_du_temps_component__WEBPACK_IMPORTED_MODULE_2__["CampaignGardiensDuTempsComponent"]
    }
];
class CampaignGardiensDuTempsRoutingModule {
}
CampaignGardiensDuTempsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CampaignGardiensDuTempsRoutingModule });
CampaignGardiensDuTempsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CampaignGardiensDuTempsRoutingModule_Factory(t) { return new (t || CampaignGardiensDuTempsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CampaignGardiensDuTempsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampaignGardiensDuTempsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/campaign-gardiens-du-temps/campaign-gardiens-du-temps.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/campaign-gardiens-du-temps/campaign-gardiens-du-temps.component.ts ***!
  \************************************************************************************/
/*! exports provided: CampaignGardiensDuTempsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignGardiensDuTempsComponent", function() { return CampaignGardiensDuTempsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function CampaignGardiensDuTempsComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampaignGardiensDuTempsComponent_div_68_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.currentZoom = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.currentZoom, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CampaignGardiensDuTempsComponent {
    constructor() {
        this.showScenars = {};
        this.currentZoom = null;
    }
    ngAfterViewInit() {
        const displayValues = true;
        const chars = [
            {
                name: 'Noëlie',
                proficiency: 3, armor_class: 15, pv: 67,
                strength: 2, dexterity: 0, constitution: 2, intelligence: 0, wisdom: 2, charisma: 5,
                masteries: ['dexterity', 'arcana', 'investigation', 'religion', 'insight', 'survival', 'charisma', 'performance'],
                expert: ['investigation', 'insight'],
                toucheATout: true,
            },
            {
                name: 'Julien',
                proficiency: 3, armor_class: 17, pv: 51,
                strength: -1, dexterity: 5, constitution: 1, intelligence: 2, wisdom: 1, charisma: 2,
                masteries: ['dexterity', 'intelligence', 'deception', 'investigation', 'perception', 'persuasion', 'sleight_of_hand', 'stealth'],
                expert: ['stealth', 'deception', 'investigation'],
            },
            {
                name: 'Repié',
                proficiency: 3, armor_class: 20, pv: 73,
                strength: -1, dexterity: 3, constitution: 3, intelligence: 5, wisdom: 0, charisma: -1,
                masteries: ['constitution', 'intelligence', 'arcana', 'history', 'investigation', 'sleight_of_hand'],
            },
            {
                name: 'Clément',
                proficiency: 3, armor_class: 18, pv: 60,
                strength: 3, dexterity: 2, constitution: 2, intelligence: 0, wisdom: 5, charisma: 0,
                masteries: ['wisdom', 'charisma', 'athletics', 'stealth', 'insight', 'deception', 'persuasion'],
            },
            {
                name: 'Mélodie',
                proficiency: 3, armor_class: 15, pv: 90,
                strength: 5, dexterity: 2, constitution: 3, intelligence: 0, wisdom: 0, charisma: 0,
                masteries: ['strength', 'constitution', 'athletics', 'nature', 'perception', 'survival', 'intimidation'],
            },
        ];
        const getHtmlForSkill = function (char, skill, proficiency, attribute, addClass = null) {
            const isMastered = char.masteries.includes(skill);
            const isExpert = char.expert && char.expert.includes(skill);
            let value = attribute;
            if (isExpert) {
                value += proficiency;
                value += proficiency;
            }
            else if (isMastered) {
                value += proficiency;
            }
            else if (char.toucheATout) {
                value += Math.trunc(proficiency / 2); // Arrondi inférieur
            }
            if (addClass) {
                return `<td class="value-${value} ${addClass}">` + (displayValues ? value : '') + `</td>`;
            }
            return `<td class="value-${value}">` + (displayValues ? value : '') + `</td>`;
        };
        // Display attributes
        let html = '';
        for (const char of chars) {
            html += '<tr>';
            html += `<th>${char.name}</th>`;
            html += `<td class="value-${char.strength}">` + (displayValues ? char.strength : '') + `</td>`;
            html += `<td class="value-${char.dexterity}">` + (displayValues ? char.dexterity : '') + `</td>`;
            html += `<td class="value-${char.constitution}">` + (displayValues ? char.constitution : '') + `</td>`;
            html += `<td class="value-${char.intelligence}">` + (displayValues ? char.intelligence : '') + `</td>`;
            html += `<td class="value-${char.wisdom}">` + (displayValues ? char.wisdom : '') + `</td>`;
            html += `<td class="value-${char.charisma}">` + (displayValues ? char.charisma : '') + `</td>`;
            html += '</tr>';
        }
        $('.attributs').html(html);
        // Display skills
        html = '';
        for (const char of chars) {
            html += '<tr>';
            html += `<th>${char.name}</th>`;
            html += getHtmlForSkill(char, 'strength', char.proficiency, char.strength);
            html += getHtmlForSkill(char, 'athletics', char.proficiency, char.strength);
            html += getHtmlForSkill(char, 'dexterity', char.proficiency, char.dexterity, 'border-left');
            html += getHtmlForSkill(char, 'acrobatics', char.proficiency, char.dexterity);
            html += getHtmlForSkill(char, 'sleight_of_hand', char.proficiency, char.dexterity);
            html += getHtmlForSkill(char, 'stealth', char.proficiency, char.dexterity);
            html += getHtmlForSkill(char, 'constitution', char.proficiency, char.constitution, 'border-left');
            html += getHtmlForSkill(char, 'intelligence', char.proficiency, char.intelligence, 'border-left');
            html += getHtmlForSkill(char, 'arcana', char.proficiency, char.intelligence);
            html += getHtmlForSkill(char, 'history', char.proficiency, char.intelligence);
            html += getHtmlForSkill(char, 'investigation', char.proficiency, char.intelligence);
            html += getHtmlForSkill(char, 'nature', char.proficiency, char.intelligence);
            html += getHtmlForSkill(char, 'religion', char.proficiency, char.intelligence);
            html += getHtmlForSkill(char, 'wisdom', char.proficiency, char.wisdom, 'border-left');
            html += getHtmlForSkill(char, 'animal_handling', char.proficiency, char.wisdom);
            html += getHtmlForSkill(char, 'insight', char.proficiency, char.wisdom);
            html += getHtmlForSkill(char, 'medicine', char.proficiency, char.wisdom);
            html += getHtmlForSkill(char, 'perception', char.proficiency, char.wisdom);
            html += getHtmlForSkill(char, 'survival', char.proficiency, char.wisdom);
            html += getHtmlForSkill(char, 'charisma', char.proficiency, char.charisma, 'border-left');
            html += getHtmlForSkill(char, 'deception', char.proficiency, char.charisma);
            html += getHtmlForSkill(char, 'intimidation', char.proficiency, char.charisma);
            html += getHtmlForSkill(char, 'performance', char.proficiency, char.charisma);
            html += getHtmlForSkill(char, 'persuasion', char.proficiency, char.charisma);
            html += '</tr>';
        }
        $('.skills').html(html);
        // Display stats
        html = '';
        for (const char of chars) {
            html += '<tr>';
            html += `<th>${char.name}</th>`;
            const pvValue = Math.trunc(char.pv / 10);
            html += `<td class="value-${pvValue}">` + (displayValues ? char.pv : '') + `</td>`;
            const armorClassValue = char.armor_class - 12;
            html += `<td class="value-${armorClassValue}">` + (displayValues ? char.armor_class : '') + `</td>`;
            html += '</tr>';
        }
        $('.stats').html(html);
    }
}
CampaignGardiensDuTempsComponent.ɵfac = function CampaignGardiensDuTempsComponent_Factory(t) { return new (t || CampaignGardiensDuTempsComponent)(); };
CampaignGardiensDuTempsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CampaignGardiensDuTempsComponent, selectors: [["app-campaign-gardiens-du-temps"]], decls: 69, vars: 2, consts: [[1, "container"], [1, "card", "mt-3"], [1, "card-body"], [1, "btn", "btn-primary", "mt-3", 3, "click"], [1, "card", "mt-3", 3, "hidden"], [1, "row"], [1, "col-12", "col-md-3"], ["src", "assets/gardiens/Tauren Chasseur - stats.png", 3, "click"], ["src", "assets/gardiens/Tauren Chasseur - img.png", 3, "click"], ["src", "assets/gardiens/Orc Shaman - img.png", 3, "click"], ["src", "assets/gardiens/Orc Shaman - stats.png", 3, "click"], ["href", "https://raphaelyan.github.io/rpg-digital-tools/dd-spells/TkmDqCnoTZYktJJWizlv", "target", "_blank"], ["href", "https://raphaelyan.github.io/rpg-digital-tools/dd-spells/PFXVQ847hUXu9tlvnodk", "target", "_blank"], ["href", "https://raphaelyan.github.io/rpg-digital-tools/dd-spells/0KfUmZiZdk37wie91Pra", "target", "_blank"], ["href", "https://raphaelyan.github.io/rpg-digital-tools/dd-spells/oCir6EM2L6zyMe40bqCF", "target", "_blank"], ["href", "https://raphaelyan.github.io/rpg-digital-tools/dd-spells/HeV4ZFSd2XtzZFvmwGjg", "target", "_blank"], ["src", "assets/gardiens/Orc Maitre-lame - stats.png", 3, "click"], ["src", "assets/gardiens/Orc Maitre-lame - img.png", 3, "click"], ["src", "assets/gardiens/Gobelin Bricoleur - img.png", 3, "click"], ["src", "assets/gardiens/Gobelin Bricoleur - stats.png", 3, "click"], ["class", "zoom", 3, "click", 4, "ngIf"], [1, "zoom", 3, "click"], [3, "src"]], template: function CampaignGardiensDuTempsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Bienvenue dans un lointain futur !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Vous \u00EAtes des agents d'une organisation secr\u00E8te connue sous le nom des \"Gardiens du Temps\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Votre mission est de voyager dans le temps pour r\u00E9soudre des myst\u00E8res et emp\u00EAcher des anomalies temporelles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Votre esprit sera s\u00E9par\u00E9 de votre corps, qui sera projet\u00E9 dans un r\u00E9ceptacle adapt\u00E9 \u00E0 l\u2019\u00E9poque que vous allez visiter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Vous devrez mener une enqu\u00EAte en explorant des lieux, en interagissant avec des personnages et en r\u00E9solvant des \u00E9nigmes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Vous n'aurez que 3h pour r\u00E9soudre le sc\u00E9nario, au del\u00E0, vous serez automatiquement renvoy\u00E9s \u00E0 votre \u00E9poque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Le destin du temps repose entre vos mains !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampaignGardiensDuTempsComponent_Template_button_click_23_listener() { return ctx.showScenars.tarides = !ctx.showScenars.tarides; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sc\u00E9nar 1 : les tarides");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Sc\u00E9nar 1 : les tarides");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampaignGardiensDuTempsComponent_Template_img_click_32_listener() { return ctx.currentZoom = "assets/gardiens/Tauren Chasseur - stats.png"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampaignGardiensDuTempsComponent_Template_img_click_34_listener() { return ctx.currentZoom = "assets/gardiens/Tauren Chasseur - img.png"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampaignGardiensDuTempsComponent_Template_img_click_36_listener() { return ctx.currentZoom = "assets/gardiens/Orc Shaman - img.png"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampaignGardiensDuTempsComponent_Template_img_click_38_listener() { return ctx.currentZoom = "assets/gardiens/Orc Shaman - stats.png"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Pluie de gu\u00E9rison : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "lien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Soif de sang : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "lien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Totem de gu\u00E9rison : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "lien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Bouclier de foudre : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "lien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Totem serpent : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "lien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampaignGardiensDuTempsComponent_Template_img_click_61_listener() { return ctx.currentZoom = "assets/gardiens/Orc Maitre-lame - stats.png"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampaignGardiensDuTempsComponent_Template_img_click_63_listener() { return ctx.currentZoom = "assets/gardiens/Orc Maitre-lame - img.png"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampaignGardiensDuTempsComponent_Template_img_click_65_listener() { return ctx.currentZoom = "assets/gardiens/Gobelin Bricoleur - img.png"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampaignGardiensDuTempsComponent_Template_img_click_67_listener() { return ctx.currentZoom = "assets/gardiens/Gobelin Bricoleur - stats.png"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, CampaignGardiensDuTempsComponent_div_68_Template, 2, 1, "div", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showScenars.tarides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentZoom);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  height: 1500px;\n  display: block;\n}\n\n[_nghost-%COMP%]     .container {\n  max-width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50px;\n}\n\n.card-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  cursor: pointer;\n}\n\n.zoom[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  background: black;\n}\n\n.zoom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100vh;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL2NhbXBhaWduLWdhcmRpZW5zLWR1LXRlbXBzL2NhbXBhaWduLWdhcmRpZW5zLWR1LXRlbXBzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW1wYWlnbi1nYXJkaWVucy1kdS10ZW1wcy9jYW1wYWlnbi1nYXJkaWVucy1kdS10ZW1wcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDSjs7QURLSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDRk47O0FET0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0pGOztBREtFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jYW1wYWlnbi1nYXJkaWVucy1kdS10ZW1wcy9jYW1wYWlnbi1nYXJkaWVucy1kdS10ZW1wcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxNTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTBweDtcbiAgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgLnJvdyB7XG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLnpvb20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxNTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MHB4O1xufVxuXG4uY2FyZC1ib2R5IC5yb3cgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi56b29tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuLnpvb20gaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwdmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampaignGardiensDuTempsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-campaign-gardiens-du-temps',
                templateUrl: './campaign-gardiens-du-temps.component.html',
                styleUrls: ['./campaign-gardiens-du-temps.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/campaign-gardiens-du-temps/campaign-gardiens-du-temps.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/campaign-gardiens-du-temps/campaign-gardiens-du-temps.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CampaignGardiensDuTempsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignGardiensDuTempsModule", function() { return CampaignGardiensDuTempsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _campaign_gardiens_du_temps_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaign-gardiens-du-temps-routing.module */ "./src/app/campaign-gardiens-du-temps/campaign-gardiens-du-temps-routing.module.ts");
/* harmony import */ var _campaign_gardiens_du_temps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campaign-gardiens-du-temps.component */ "./src/app/campaign-gardiens-du-temps/campaign-gardiens-du-temps.component.ts");






class CampaignGardiensDuTempsModule {
}
CampaignGardiensDuTempsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CampaignGardiensDuTempsModule });
CampaignGardiensDuTempsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CampaignGardiensDuTempsModule_Factory(t) { return new (t || CampaignGardiensDuTempsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _campaign_gardiens_du_temps_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampaignGardiensDuTempsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CampaignGardiensDuTempsModule, { declarations: [_campaign_gardiens_du_temps_component__WEBPACK_IMPORTED_MODULE_4__["CampaignGardiensDuTempsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _campaign_gardiens_du_temps_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampaignGardiensDuTempsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampaignGardiensDuTempsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_campaign_gardiens_du_temps_component__WEBPACK_IMPORTED_MODULE_4__["CampaignGardiensDuTempsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _campaign_gardiens_du_temps_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampaignGardiensDuTempsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=campaign-gardiens-du-temps-campaign-gardiens-du-temps-module-es2015.js.map