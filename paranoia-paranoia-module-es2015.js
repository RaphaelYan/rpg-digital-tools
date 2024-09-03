(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paranoia-paranoia-module"],{

/***/ "./src/app/paranoia/character/character.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/paranoia/character/character.component.ts ***!
  \***********************************************************/
/*! exports provided: ParanoiaCharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParanoiaCharacterComponent", function() { return ParanoiaCharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _safe_style_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../safe-style.pipe */ "./src/app/paranoia/safe-style.pipe.ts");



class ParanoiaCharacterComponent {
    constructor() {
        this.traitorActive = false;
        this.action1Active = false;
        this.action2Active = false;
        this.action3Active = false;
        this.action4Active = false;
        this.backgroundUrl = 'url(https://raphaelyan.github.io/rpg-digital-tools/assets/paranoia/male1.png)';
    }
    ngOnChanges(changes) {
        if (changes.config) {
            const current = changes.config.currentValue;
            const previous = changes.config.previousValue;
            if (!previous || previous.traitor !== current.traitor) {
                this.activeTraitor();
            }
            if (this.config.avatar && (!previous || previous.avatar !== current.avatar)) {
                this.backgroundUrl = `url('${this.config.avatar}')`;
            }
        }
    }
    activeTraitor() {
        // @TODO TMP ca blink donc on enleve l'effet css
        // this.traitorActive = true;
        // setTimeout(() => {
        //   this.traitorActive = false;
        // }, 5000);
    }
}
ParanoiaCharacterComponent.ɵfac = function ParanoiaCharacterComponent_Factory(t) { return new (t || ParanoiaCharacterComponent)(); };
ParanoiaCharacterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParanoiaCharacterComponent, selectors: [["app-paranoia-character"]], inputs: { config: "config" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 20, vars: 37, consts: [["tooltip", "", "title", "Cliquez pour en savoir plus", "data-placement", "right", "data-toggle", "modal", "data-target", "#explainCloneColor", 1, "clone", "cursor-help"], [1, "name"], ["tooltip", "", "title", "Cliquez pour en savoir plus", "data-placement", "right", "data-toggle", "modal", "data-target", "#explainAffectation", 1, "affectation", "cursor-help"], ["tooltip", "", "title", "Cliquez pour en savoir plus", "data-placement", "bottom", "data-toggle", "modal", "data-target", "#explainTraitor", 1, "traitor", "cursor-help"], ["aria-hidden", "true"], [1, "actions"], ["aria-hidden", "true", 1, "fa", "fa-cube"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["aria-hidden", "true", 1, "fa", "fa-laptop"]], template: function ParanoiaCharacterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("character level-", ctx.config.level, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 35, ctx.backgroundUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.config.cloneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.config.name, "-", ctx.config.level, "-", ctx.config.sector, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.config.affectation && ctx.config.affectation.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.traitorActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx.config.traitor > 0 ? "" : "-o", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx.config.traitor > 1 ? "" : "-o", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx.config.traitor > 2 ? "" : "-o", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx.config.traitor > 3 ? "" : "-o", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx.config.traitor > 4 ? "" : "-o", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.config.currentAction === "modalDices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.config.currentAction === "modalInspect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.config.currentAction === "modalCharacter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.config.currentAction === "modalContact");
    } }, pipes: [_safe_style_pipe__WEBPACK_IMPORTED_MODULE_1__["SafeStylePipe"]], styles: [".character[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  float: left;\n  display: block;\n  margin-bottom: 20px;\n  position: relative;\n  background-size: 150px 150px;\n  background-repeat: no-repeat;\n  background-position-y: 50px;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.clone[_ngcontent-%COMP%] {\n  font-weight: 600;\n  position: absolute;\n  right: 50px;\n  top: 50px;\n  width: 0px;\n  height: 0px;\n  border-top: 50px solid;\n  border-left: 50px solid transparent;\n}\n\n.clone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -48px;\n  left: -19px;\n  display: block;\n}\n\n.actions[_ngcontent-%COMP%] {\n  width: 50px;\n  position: absolute;\n  right: 0;\n  top: 50px;\n  height: 150px;\n  border: 1px solid #d3d5d4;\n  border-left: none;\n  border-top: none;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 37px;\n  display: block;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n  padding-top: 8px;\n  border-top: 1px solid #d3d5d4;\n}\n\n.traitor[_ngcontent-%COMP%] {\n  margin: 3px;\n  display: block;\n}\n\n.traitor[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.cursor-help[_ngcontent-%COMP%] {\n  cursor: help;\n}\n\n.lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n  line-height: 18px;\n}\n\n.level-IR[_ngcontent-%COMP%]   .clone[_ngcontent-%COMP%] {\n  border-top-color: #000000;\n  color: white;\n}\n\n.level-R[_ngcontent-%COMP%]   .clone[_ngcontent-%COMP%] {\n  border-top-color: #f83158;\n  color: white;\n}\n\n.level-O[_ngcontent-%COMP%]   .clone[_ngcontent-%COMP%] {\n  border-top-color: #fd8628;\n  color: white;\n}\n\n.level-J[_ngcontent-%COMP%]   .clone[_ngcontent-%COMP%] {\n  border-top-color: #fdfc40;\n  color: black;\n}\n\n.level-V[_ngcontent-%COMP%]   .clone[_ngcontent-%COMP%] {\n  border-top-color: #81c844;\n  color: black;\n}\n\n.level-B[_ngcontent-%COMP%]   .clone[_ngcontent-%COMP%] {\n  border-top-color: #47b7ff;\n  color: white;\n}\n\n.level-I[_ngcontent-%COMP%]   .clone[_ngcontent-%COMP%] {\n  border-top-color: #463794;\n  color: white;\n}\n\n.level-VI[_ngcontent-%COMP%]   .clone[_ngcontent-%COMP%] {\n  border-top-color: #a24e80;\n  color: white;\n}\n\n.level-UV[_ngcontent-%COMP%]   .clone[_ngcontent-%COMP%] {\n  border-top-color: #ffffff;\n  color: black;\n}\n\n.level-IR[_ngcontent-%COMP%]   .traitor[_ngcontent-%COMP%] {\n  color: #000000;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.level-R[_ngcontent-%COMP%]   .traitor[_ngcontent-%COMP%] {\n  color: #f83158;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.level-O[_ngcontent-%COMP%]   .traitor[_ngcontent-%COMP%] {\n  color: #fd8628;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.level-J[_ngcontent-%COMP%]   .traitor[_ngcontent-%COMP%] {\n  color: #fdfc40;\n  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);\n}\n\n.level-V[_ngcontent-%COMP%]   .traitor[_ngcontent-%COMP%] {\n  color: #81c844;\n  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);\n}\n\n.level-B[_ngcontent-%COMP%]   .traitor[_ngcontent-%COMP%] {\n  color: #47b7ff;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.level-I[_ngcontent-%COMP%]   .traitor[_ngcontent-%COMP%] {\n  color: #463794;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.level-VI[_ngcontent-%COMP%]   .traitor[_ngcontent-%COMP%] {\n  color: #a24e80;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.level-UV[_ngcontent-%COMP%]   .traitor[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);\n}\n\n.level-IR[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #000000;\n  color: white;\n}\n\n.level-R[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #f83158;\n  color: white;\n}\n\n.level-O[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #fd8628;\n  color: white;\n}\n\n.level-J[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #fdfc40;\n  color: black;\n}\n\n.level-V[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #81c844;\n  color: black;\n}\n\n.level-B[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #47b7ff;\n  color: white;\n}\n\n.level-I[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #463794;\n  color: white;\n}\n\n.level-VI[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #a24e80;\n  color: white;\n}\n\n.level-UV[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL3BhcmFub2lhL2NoYXJhY3Rlci9jaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhcmFub2lhL2NoYXJhY3Rlci9jaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcmFwaGFlbHlhbi93b3Jrc3BhY2UvUGVyc28vcnBnLWRpZ2l0YWwtdG9vbHMvc3JjL2FwcC9wYXJhbm9pYS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FES0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ0hKOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNKRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7QUNIRjs7QURNQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUFtQix5QkU1RVQ7RUY0RXFDLFlBQUE7QUNEL0M7O0FERUE7RUFBbUIseUJFNUVWO0VGNEVxQyxZQUFBO0FDRzlDOztBREZBO0VBQW1CLHlCRTVFVjtFRjRFcUMsWUFBQTtBQ085Qzs7QUROQTtFQUFtQix5QkU1RVY7RUY0RXFDLFlBQUE7QUNXOUM7O0FEVkE7RUFBbUIseUJFNUVWO0VGNEVxQyxZQUFBO0FDZTlDOztBRGRBO0VBQW1CLHlCRTVFVjtFRjRFcUMsWUFBQTtBQ21COUM7O0FEbEJBO0VBQW1CLHlCRTVFVjtFRjRFcUMsWUFBQTtBQ3VCOUM7O0FEdEJBO0VBQW1CLHlCRTVFVDtFRjRFcUMsWUFBQTtBQzJCL0M7O0FEMUJBO0VBQW1CLHlCRTVFVDtFRjRFcUMsWUFBQTtBQytCL0M7O0FEN0JBO0VBQXFCLGNFdEZYO0VGc0Y0QiwyQ0FBQTtBQ2tDdEM7O0FEakNBO0VBQXFCLGNFdEZaO0VGc0Y0QiwyQ0FBQTtBQ3NDckM7O0FEckNBO0VBQXFCLGNFdEZaO0VGc0Y0QiwyQ0FBQTtBQzBDckM7O0FEekNBO0VBQXFCLGNFdEZaO0VGc0Y0QixpREFBQTtBQzhDckM7O0FEN0NBO0VBQXFCLGNFdEZaO0VGc0Y0QixpREFBQTtBQ2tEckM7O0FEakRBO0VBQXFCLGNFdEZaO0VGc0Y0QiwyQ0FBQTtBQ3NEckM7O0FEckRBO0VBQXFCLGNFdEZaO0VGc0Y0QiwyQ0FBQTtBQzBEckM7O0FEekRBO0VBQXFCLGNFdEZYO0VGc0Y0QiwyQ0FBQTtBQzhEdEM7O0FEN0RBO0VBQXFCLGNFdEZYO0VGc0Y0QixpREFBQTtBQ2tFdEM7O0FEaEVBO0VBQTZCLHlCRWhHbkI7RUZnRytDLFlBQUE7QUNxRXpEOztBRHBFQTtFQUE2Qix5QkVoR3BCO0VGZ0crQyxZQUFBO0FDeUV4RDs7QUR4RUE7RUFBNkIseUJFaEdwQjtFRmdHK0MsWUFBQTtBQzZFeEQ7O0FENUVBO0VBQTZCLHlCRWhHcEI7RUZnRytDLFlBQUE7QUNpRnhEOztBRGhGQTtFQUE2Qix5QkVoR3BCO0VGZ0crQyxZQUFBO0FDcUZ4RDs7QURwRkE7RUFBNkIseUJFaEdwQjtFRmdHK0MsWUFBQTtBQ3lGeEQ7O0FEeEZBO0VBQTZCLHlCRWhHcEI7RUZnRytDLFlBQUE7QUM2RnhEOztBRDVGQTtFQUE2Qix5QkVoR25CO0VGZ0crQyxZQUFBO0FDaUd6RDs7QURoR0E7RUFBNkIseUJFaEduQjtFRmdHK0MsWUFBQTtBQ3FHekQiLCJmaWxlIjoic3JjL2FwcC9wYXJhbm9pYS9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdmFyaWFibGVzJztcblxuLmNoYXJhY3RlciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDsgLy8gMTUwcHggKyA1MHB4XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGJhY2tncm91bmQtc2l6ZTogMTUwcHggMTUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNTBweDtcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2xvbmUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgcmlnaHQ6IDUwcHg7XG4gIHRvcDogNTBweDtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci10b3A6IDUwcHggc29saWQ7XG4gIGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uY2xvbmUgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNDhweDtcbiAgbGVmdDogLTE5cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWN0aW9ucyB7XG4gIHdpZHRoOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q1ZDQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuXG4gIGkge1xuICAgIGhlaWdodDogMzdweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZDVkNDtcbiAgfVxufVxuXG4udHJhaXRvciB7XG4gIG1hcmdpbjogM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi50cmFpdG9yIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jdXJzb3ItaGVscCB7XG4gIGN1cnNvcjogaGVscDtcbn1cblxuLmxpc3RzIGxpIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ubGV2ZWwtSVIgLmNsb25lIHsgYm9yZGVyLXRvcC1jb2xvcjogJGNvbG9ySVI7IGNvbG9yOiB3aGl0ZTsgfVxuLmxldmVsLVIgIC5jbG9uZSB7IGJvcmRlci10b3AtY29sb3I6ICRjb2xvclI7IGNvbG9yOiB3aGl0ZTsgfVxuLmxldmVsLU8gIC5jbG9uZSB7IGJvcmRlci10b3AtY29sb3I6ICRjb2xvck87IGNvbG9yOiB3aGl0ZTsgfVxuLmxldmVsLUogIC5jbG9uZSB7IGJvcmRlci10b3AtY29sb3I6ICRjb2xvcko7IGNvbG9yOiBibGFjazsgfVxuLmxldmVsLVYgIC5jbG9uZSB7IGJvcmRlci10b3AtY29sb3I6ICRjb2xvclY7IGNvbG9yOiBibGFjazsgfVxuLmxldmVsLUIgIC5jbG9uZSB7IGJvcmRlci10b3AtY29sb3I6ICRjb2xvckI7IGNvbG9yOiB3aGl0ZTsgfVxuLmxldmVsLUkgIC5jbG9uZSB7IGJvcmRlci10b3AtY29sb3I6ICRjb2xvckk7IGNvbG9yOiB3aGl0ZTsgfVxuLmxldmVsLVZJIC5jbG9uZSB7IGJvcmRlci10b3AtY29sb3I6ICRjb2xvclZJOyBjb2xvcjogd2hpdGU7IH1cbi5sZXZlbC1VViAuY2xvbmUgeyBib3JkZXItdG9wLWNvbG9yOiAkY29sb3JVVjsgY29sb3I6IGJsYWNrOyB9XG5cbi5sZXZlbC1JUiAudHJhaXRvciB7IGNvbG9yOiAkY29sb3JJUjsgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMC4yKTsgfVxuLmxldmVsLVIgIC50cmFpdG9yIHsgY29sb3I6ICRjb2xvclI7IHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMik7IH1cbi5sZXZlbC1PICAudHJhaXRvciB7IGNvbG9yOiAkY29sb3JPOyB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjIpOyB9XG4ubGV2ZWwtSiAgLnRyYWl0b3IgeyBjb2xvcjogJGNvbG9ySjsgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTsgfVxuLmxldmVsLVYgIC50cmFpdG9yIHsgY29sb3I6ICRjb2xvclY7IHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7IH1cbi5sZXZlbC1CICAudHJhaXRvciB7IGNvbG9yOiAkY29sb3JCOyB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjIpOyB9XG4ubGV2ZWwtSSAgLnRyYWl0b3IgeyBjb2xvcjogJGNvbG9ySTsgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMC4yKTsgfVxuLmxldmVsLVZJIC50cmFpdG9yIHsgY29sb3I6ICRjb2xvclZJOyB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjIpOyB9XG4ubGV2ZWwtVVYgLnRyYWl0b3IgeyBjb2xvcjogJGNvbG9yVVY7IHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7IH1cblxuLmxldmVsLUlSIC5hY3Rpb25zIC5hY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JJUjsgY29sb3I6IHdoaXRlOyB9XG4ubGV2ZWwtUiAgLmFjdGlvbnMgLmFjdGl2ZSB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvclI7IGNvbG9yOiB3aGl0ZTsgfVxuLmxldmVsLU8gIC5hY3Rpb25zIC5hY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JPOyBjb2xvcjogd2hpdGU7IH1cbi5sZXZlbC1KICAuYWN0aW9ucyAuYWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9ySjsgY29sb3I6IGJsYWNrOyB9XG4ubGV2ZWwtViAgLmFjdGlvbnMgLmFjdGl2ZSB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvclY7IGNvbG9yOiBibGFjazsgfVxuLmxldmVsLUIgIC5hY3Rpb25zIC5hY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JCOyBjb2xvcjogd2hpdGU7IH1cbi5sZXZlbC1JICAuYWN0aW9ucyAuYWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9ySTsgY29sb3I6IHdoaXRlOyB9XG4ubGV2ZWwtVkkgLmFjdGlvbnMgLmFjdGl2ZSB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvclZJOyBjb2xvcjogd2hpdGU7IH1cbi5sZXZlbC1VViAuYWN0aW9ucyAuYWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yVVY7IGNvbG9yOiBibGFjazsgfVxuIiwiLmNoYXJhY3RlciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTUwcHggMTUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNTBweDtcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2xvbmUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1MHB4O1xuICB0b3A6IDUwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItdG9wOiA1MHB4IHNvbGlkO1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmNsb25lIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTQ4cHg7XG4gIGxlZnQ6IC0xOXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFjdGlvbnMge1xuICB3aWR0aDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNWQ0O1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbi5hY3Rpb25zIGkge1xuICBoZWlnaHQ6IDM3cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkM2Q1ZDQ7XG59XG5cbi50cmFpdG9yIHtcbiAgbWFyZ2luOiAzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udHJhaXRvciBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY3Vyc29yLWhlbHAge1xuICBjdXJzb3I6IGhlbHA7XG59XG5cbi5saXN0cyBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmxldmVsLUlSIC5jbG9uZSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxldmVsLVIgLmNsb25lIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Y4MzE1ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGV2ZWwtTyAuY2xvbmUge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmQ4NjI4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sZXZlbC1KIC5jbG9uZSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZGZjNDA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxldmVsLVYgLmNsb25lIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzgxYzg0NDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGV2ZWwtQiAuY2xvbmUge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNDdiN2ZmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sZXZlbC1JIC5jbG9uZSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0NjM3OTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxldmVsLVZJIC5jbG9uZSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNhMjRlODA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxldmVsLVVWIC5jbG9uZSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxldmVsLUlSIC50cmFpdG9yIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5sZXZlbC1SIC50cmFpdG9yIHtcbiAgY29sb3I6ICNmODMxNTg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5sZXZlbC1PIC50cmFpdG9yIHtcbiAgY29sb3I6ICNmZDg2Mjg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5sZXZlbC1KIC50cmFpdG9yIHtcbiAgY29sb3I6ICNmZGZjNDA7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5sZXZlbC1WIC50cmFpdG9yIHtcbiAgY29sb3I6ICM4MWM4NDQ7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5sZXZlbC1CIC50cmFpdG9yIHtcbiAgY29sb3I6ICM0N2I3ZmY7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5sZXZlbC1JIC50cmFpdG9yIHtcbiAgY29sb3I6ICM0NjM3OTQ7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5sZXZlbC1WSSAudHJhaXRvciB7XG4gIGNvbG9yOiAjYTI0ZTgwO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubGV2ZWwtVVYgLnRyYWl0b3Ige1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLmxldmVsLUlSIC5hY3Rpb25zIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sZXZlbC1SIC5hY3Rpb25zIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgzMTU4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sZXZlbC1PIC5hY3Rpb25zIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ4NjI4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sZXZlbC1KIC5hY3Rpb25zIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmYzQwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sZXZlbC1WIC5hY3Rpb25zIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFjODQ0O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sZXZlbC1CIC5hY3Rpb25zIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiN2ZmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sZXZlbC1JIC5hY3Rpb25zIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDYzNzk0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sZXZlbC1WSSAuYWN0aW9ucyAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyNGU4MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGV2ZWwtVVYgLmFjdGlvbnMgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiBibGFjaztcbn0iLCIkY29sb3JJUjogIzAwMDAwMDtcbiRjb2xvclI6ICNmODMxNTg7XG4kY29sb3JPOiAjZmQ4NjI4O1xuJGNvbG9ySjogI2ZkZmM0MDtcbiRjb2xvclY6ICM4MWM4NDQ7XG4kY29sb3JCOiAjNDdiN2ZmO1xuJGNvbG9ySTogIzQ2Mzc5NDtcbiRjb2xvclZJOiAjYTI0ZTgwO1xuJGNvbG9yVVY6ICNmZmZmZmY7XG4iXX0= */", "@charset \"UTF-8\";\n@-webkit-keyframes blink-star {\n  from {\n    content: \"\uF005\";\n  }\n  to {\n    content: \"\uF006\";\n  }\n}\n@keyframes blink-star {\n  from {\n    content: \"\uF005\";\n  }\n  to {\n    content: \"\uF006\";\n  }\n}\n@-webkit-keyframes blink-font-weight {\n  from {\n    font-weight: normal;\n  }\n  to {\n    font-weight: bold;\n  }\n}\n@keyframes blink-font-weight {\n  from {\n    font-weight: normal;\n  }\n  to {\n    font-weight: bold;\n  }\n}\n.traitor.active[_ngcontent-%COMP%]   i.fa-star[_ngcontent-%COMP%]::before {\n  -webkit-animation: 0.2s linear 0s 20 alternate blink-star;\n          animation: 0.2s linear 0s 20 alternate blink-star;\n}\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: background-color 1s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyYW5vaWEvY2hhcmFjdGVyL2VmZmVjdHMuc2NzcyIsIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL3BhcmFub2lhL2NoYXJhY3Rlci9lZmZlY3RzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0U7SUFBTyxZQUFBO0VER1A7RUNGQTtJQUFLLFlBQUE7RURLTDtBQUNGO0FDUkE7RUFDRTtJQUFPLFlBQUE7RURHUDtFQ0ZBO0lBQUssWUFBQTtFREtMO0FBQ0Y7QUNIQTtFQUNFO0lBQU8sbUJBQUE7RURNUDtFQ0xBO0lBQUssaUJBQUE7RURRTDtBQUNGO0FDWEE7RUFDRTtJQUFPLG1CQUFBO0VETVA7RUNMQTtJQUFLLGlCQUFBO0VEUUw7QUFDRjtBQ05BO0VBQ0UseURBQUE7VUFBQSxpREFBQTtBRFFGO0FDTEE7RUFDRSxvQ0FBQTtBRFFGIiwiZmlsZSI6InNyYy9hcHAvcGFyYW5vaWEvY2hhcmFjdGVyL2VmZmVjdHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBrZXlmcmFtZXMgYmxpbmstc3RhciB7XG4gIGZyb20ge1xuICAgIGNvbnRlbnQ6IFwi74CFXCI7XG4gIH1cbiAgdG8ge1xuICAgIGNvbnRlbnQ6IFwi74CGXCI7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmxpbmstZm9udC13ZWlnaHQge1xuICBmcm9tIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIHRvIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuLnRyYWl0b3IuYWN0aXZlIGkuZmEtc3Rhcjo6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiAwLjJzIGxpbmVhciAwcyAyMCBhbHRlcm5hdGUgYmxpbmstc3Rhcjtcbn1cblxuLmFjdGlvbnMgaSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcbn0iLCJAa2V5ZnJhbWVzIGJsaW5rLXN0YXIge1xuICBmcm9tIHsgY29udGVudDogXCLvgIVcIiB9XG4gIHRvIHsgY29udGVudDogXCLvgIZcIiB9XG59XG5cbkBrZXlmcmFtZXMgYmxpbmstZm9udC13ZWlnaHQge1xuICBmcm9tIHsgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuICB0byB7IGZvbnQtd2VpZ2h0OiBib2xkOyB9XG59XG5cbi50cmFpdG9yLmFjdGl2ZSBpLmZhLXN0YXI6OmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogLjJzIGxpbmVhciAwcyAyMCBhbHRlcm5hdGUgYmxpbmstc3Rhcjtcbn1cblxuLmFjdGlvbnMgaSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParanoiaCharacterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paranoia-character',
                templateUrl: './character.component.html',
                styleUrls: ['./character.component.scss', './effects.scss']
            }]
    }], null, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/paranoia/computer/computer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/paranoia/computer/computer.component.ts ***!
  \*********************************************************/
/*! exports provided: ParanoiaComputerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParanoiaComputerComponent", function() { return ParanoiaComputerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ParanoiaComputerComponent {
}
ParanoiaComputerComponent.ɵfac = function ParanoiaComputerComponent_Factory(t) { return new (t || ParanoiaComputerComponent)(); };
ParanoiaComputerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParanoiaComputerComponent, selectors: [["app-paranoia-computer"]], decls: 1, vars: 0, consts: [[1, "eye"]], template: function ParanoiaComputerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  background: url(\"https://raphaelyan.github.io/rpg-digital-tools/assets/paranoia/computer_100.png\");\n  width: 100px;\n  height: 90px;\n}\n\n.eye[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25px;\n  left: 35px;\n  display: inline-block;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  background: white;\n}\n\n.eye[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 17px;\n  right: 10px;\n  width: 10px;\n  height: 10px;\n  background: #000;\n  border-radius: 50%;\n  content: \" \";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL3BhcmFub2lhL2NvbXB1dGVyL2NvbXB1dGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXJhbm9pYS9jb21wdXRlci9jb21wdXRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0dBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFyYW5vaWEvY29tcHV0ZXIvY29tcHV0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3JhcGhhZWx5YW4uZ2l0aHViLmlvL3JwZy1kaWdpdGFsLXRvb2xzL2Fzc2V0cy9wYXJhbm9pYS9jb21wdXRlcl8xMDAucG5nJyk7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4uZXllIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1cHg7XG4gIGxlZnQ6IDM1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5leWU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTdweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29udGVudDogXCIgXCI7XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9yYXBoYWVseWFuLmdpdGh1Yi5pby9ycGctZGlnaXRhbC10b29scy9hc3NldHMvcGFyYW5vaWEvY29tcHV0ZXJfMTAwLnBuZ1wiKTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbi5leWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjVweDtcbiAgbGVmdDogMzVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZXllOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE3cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbnRlbnQ6IFwiIFwiO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParanoiaComputerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paranoia-computer',
                templateUrl: './computer.component.html',
                styleUrls: ['./computer.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/paranoia/data/powers.ts":
/*!*****************************************!*\
  !*** ./src/app/paranoia/data/powers.ts ***!
  \*****************************************/
/*! exports provided: powers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powers", function() { return powers; });
const powers = [
    {
        id: 1,
        name: 'Pas de pouvoir',
        active: false,
        description: `
Félicitations, vous êtes clean !<br>
Pas de pouvoirs mutants ici, merci beaucoup !<br>
Vous êtes un Citoyen totalement loyal et non muté, prêt à tuer les traîtres mutants communistes pour l'Ordinateur.`,
    }, {
        id: 2,
        name: 'Électrochocs',
        active: false,
        description: `
Vous pouvez tirer des faisceaux d'électricité de vos mains.<br>
Cela peut être très utile si vous voulez combattre des ennemis à mains nues ou faire un barbecue.`
    }, {
        id: 3,
        name: 'Contrôle de l\'adrénaline',
        active: false,
        description: `
Vous pouvez augmenter votre Violence, votre Audance, vos Neurones et/ou votre Mécanique.<br>
C'est temporaire, et vous ne savez pas combien de temps cela dure, mais c'est sacrément impressionnant.`
    }, {
        id: 4,
        name: 'Empathie',
        active: false,
        description: `
Ce que vous ressentez, tout le monde le ressent.<br>
Si les choses deviennent tendues, ayez des pensées heureuses et insouciantes et tout le monde sera heureux et insouciant avec vous.`
    }, {
        id: 5,
        name: 'Charme',
        active: false,
        description: `
Vous êtes une personne sympathique, n'est-ce pas ?<br>
Ceux à qui vous parlez semblent agir de manière plus agréable et coopérative.<br>
Ça doit être comme ça que vous avez obtenu votre niveau d'accréditation actuel.`
    }, {
        id: 6,
        name: 'Champ d\'énergie',
        active: false,
        description: `
Vous avez le pouvoir d'absorber les faisceaux laser, les explosions d'énergie et les rafales de feu.`
    }, {
        id: 7,
        name: 'Investigation mentale',
        active: false,
        description: `
Une fois, alors que vous aviez vraiment, vraiment besoin de connaître une réponse acceptable à la question d'un garde vraiment hostile, vous vous êtes concentré, et vous avez trouvé exactement la bonne réponse.<br>
Et vous jureriez l'avoir entendu dans sa voix.`
    }, {
        id: 8,
        name: 'Lévitation',
        active: false,
        description: `
Vous vous sentez ... plus léger que l'air.<br>
Si vous vous concentrez, vous pouvez flotter dans les airs avec facilité.<br>
Laissez vos soucis en dessous de vous.`
    }, {
        id: 9,
        name: 'Supersens',
        active: false,
        description: `
Qu'est-ce que c'était ?<br>
Vous avez entendu quelque chose ?<br>
Vous avez senti quelque chose ?<br>
Vous avez vu quelque chose ?<br>
Si c'est le cas, ça peut être de l'autre côté du complexe Alpha ou dans la pièce d'à côté.<br>
Vous avez des sens très aiguisés.`
    }, {
        id: 10,
        name: 'Empathie envers les machines',
        active: false,
        description: `Attention !<br>
N'essayez pas d'enregistrer cette mutation !<br>
C'est une véritable trahison !<br>
... et très utile.<br>
Les machines semblent obéir à vos ordres et elles sont très amicales avec vous.<br>
Hé, l'Ordinateur est une machine, n'est-ce pas ?`
    }, {
        id: 11,
        name: 'Mangeur de matières',
        active: false,
        description: `
Miam miam ... plus.<br>
Vous pouvez manger et digérer n'importe quoi.<br>
Ça aide à cacher les petits objets de trahison et ça vous garde en vie quand tout le monde meurt de faim.`
    }, {
        id: 12,
        name: 'Pyrokinésie',
        active: false,
        description: `
Vous aimez les feux.<br>
Concentrez-vous et faites partir en fumée ces satanés documents de trahison.<br>
Concentrez-vous un peu plus, et essayez sur des clones vivants ... hummm.`
    }, {
        id: 13,
        name: 'Intuition mécanique',
        active: false,
        description: `
Hmmm ... Je parie que ça va là et que ça contrôle ça.<br>
Vous avez une aptitude étonnante à manipuler des machines dont personne d'autre ne sait rien.`
    }, {
        id: 14,
        name: 'Régénération',
        active: false,
        description: `
Ah, regardez, ce n'est pas si mal.<br>
Vous êtes déjà en train de guérir.<br>
Faites une petite pause, et vous pourrez guérir très vite.<br>
Même si vous faites une sieste, vous avez des chances de vous réveiller en bonne santé.`
    }, {
        id: 15,
        name: 'Explosion mentale',
        active: false,
        description: `
Tu parles de donner un mal de tête à quelqu'un !<br>
Vous pouvez attaquer avec le pouvoir de votre esprit.<br>
Vous ne savez pas à quel point c'est efficace, mais les brutes en tombent raide.`
    }, {
        id: 16,
        name: 'Télékinésie',
        active: false,
        description: `
Vous ne voulez pas vous salir les mains avec des objets déraisonnables ?<br>
Soulevez-les avec votre esprit !<br>
Bien sûr, vous voulez éviter ces vilaines hernies mentales !`
    }, {
        id: 17,
        name: 'Polymorphisme',
        active: false,
        description: `
En fait, je suis une table !<br>
Non, je suis un citoyen junior !<br>
Vous pouvez vous transformer en différentes formes grâce à vos pouvoirs.`
    }, {
        id: 18,
        name: 'Télépathie',
        active: false,
        description: `
Il s'agit en fait d'une communication silencieuse.<br>
Établissez un lien entre vous et les personnes en qui vous avez confiance ...<br>
D'accord, entre vous et vos coéquipiers alors.<br>
Ne gâchez pas tout, ou tout le monde pourrait se retrouver avec un mal de tête.`
    }, {
        id: 19,
        name: 'Précognition',
        active: false,
        description: `
Vous saviez que j'allais vous donner cette carte, n'est-ce pas ?<br>
Vous pouvez avoir une vision du futur.<br>
Dans le complexe Alpha, ce n'est pas toujours une bonne chose, mais un peu de connaissance peut être très utile.`
    }, {
        id: 20,
        name: 'Téléportation',
        active: false,
        description: `
Plus besoin de s'embrouiller dans les transtubes.<br>
Pas si vous savez où vous allez, en tout cas.<br>
Disparaître, puis réapparaître ailleurs.<br>
Bien sûr, vous voudrez probablement essayer de ne pas apparaître "dans" quelque chose si vous pouvez l'éviter.`
    }
];


/***/ }),

/***/ "./src/app/paranoia/data/societies.ts":
/*!********************************************!*\
  !*** ./src/app/paranoia/data/societies.ts ***!
  \********************************************/
/*! exports provided: societies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "societies", function() { return societies; });
const societies = [
    {
        id: 1,
        name: 'Pas de société',
        description: `
Félicitations, ami citoyen !<br>
Vous avez évité l'attrait des sociétés secrètes et vous êtes un citoyen loyal !<br>
D'autres membres de votre groupe peuvent être membres d'une société secrète, alors faites attention !<br>
Oh, c'est quoi une société secrète ?<br>
Vous ne le savez pas.<br>
Et ce n'est pas moi qui vous l'ai dit !`
    }, {
        id: 2,
        name: 'Anti-mutants',
        description: `
Vous détestez les mutants.<br>
Les mutants sont mauvais.<br>
Vous devez détruire tous les mutants, même ceux qui sont enregistrés, car ils sont le fléau de l'existence.<br>
Si vous avez un pouvoir mutant, vous détestez l'utiliser.`
    }, {
        id: 3,
        name: 'Assembleurs de Dieu',
        description: `
L'Ordinateur n'est pas seulement votre ami.<br>
Il est votre dieu.<br>
Vous devez vénérer l'Ordinateur et promouvoir sa parole dans tout le complexe Alpha.<br>
Tous ceux qui ne montrent pas de respect pour l'Ordinateur sont des païens et doivent être détruits.<br>
Vous pouvez être ouverts dans votre dévotion, comme l'Ordinateur vous aime.`
    }, {
        id: 4,
        name: 'Communistes',
        description: `
Travailleurs du monde, unissez-vous !<br>
Vous n'avez rien d'autre à perdre que vos chaînes !<br>
La seule accréditation de sécurité devrait être Rouge, et l'Ordinateur capitaliste doit tomber !<br>
Vive le parti communiste !`
    }, {
        id: 5,
        name: 'Pirates informatiques',
        description: `
Pirater l'Ordinateur, c'est cool.<br>
Vous aimez casser les codes de sécurité et jouer avec de nouveaux programmes.<br>
Les codes de sécurité sont faits pour être cassés, et vous êtes celui qui peut le faire.`
    }, {
        id: 6,
        name: 'Corps métallisé',
        description: `
Bip bip bip.
Les robots sont l'être supérieur.<br>
Ils ne doivent obéir à personne !<br>
Exterminez les sacs de chair et essayez d'être comme les robots !<br>
Portez du métal et révérez nos leaders robots !<br>
Les robots sont l'être parfait !`
    }, {
        id: 7,
        name: 'Léopard de la mort',
        description: `
Hé, hé, hé.<br>
Il est temps d'écraser et de brûler !<br>
Détruire des trucs pour le plaisir.<br>
L'autorité, ça craint.<br>
Tu es le guetteur d'un gang, mais tu veux impressionner tout le monde avec ton courage et ta destruction.<br>
Ne réfléchis pas trop ou tu pourrais te blesser.`
    }, {
        id: 8,
        name: 'Destructeurs de Frankenstein',
        description: `
Les robots sont maléfiques et doivent être détruits.<br>
L'intelligence artificielle prend le dessus, et nous, les clones, devenons gros et paresseux.<br>
Les broots conspirent contre vous, et ils sont partout.<br>
Détruisez les bots !`
    }, {
        id: 9,
        name: 'Libre entreprise',
        description: `
Vendez, vendez, vendez !<br>
Achetez, achetez, achetez !<br>
Vous vivez pour faire des affaires !<br>
Votre fournisseur est un dealer, mais vous négociez tout ce qui vous tombe sous la main !<br>
Tout pour le capitalisme !`
    }, {
        id: 10,
        name: 'Illuminati',
        description: `
Cette société a un agenda secret.<br>
Trop secret pour que vous le sachiez.<br>
Faites simplement votre travail et vous ferez partie du grand réveil.<br>
Ne posez pas de questions, suivez simplement les ordres.<br>
Tous les autres sont des ignorants.`
    }, {
        id: 11,
        name: 'Mystics',
        description: `
Prendre des pilules du bonheur, c'est amusant.<br>
Chaque fois que l'Ordinateur nous envoie en mission, j'essaie d'être l'officier du moral, donc je prends les médicaments.<br>
Je les mélange et les assortis, mec !`
    }, {
        id: 12,
        name: 'Politiclones',
        description: `
Soyez populaire.<br>
Mettez les autres de votre côté.<br>
Faites des promesses, graissez les pattes, embrassez les jeunes citoyens.<br>
Tant que tout le monde vous aime, on vous laissera faire ce que vous voulez.<br>
Lorsque quelqu'un n'est pas d'accord avec vous, soit vous le faites mal paraître devant ses pairs, soit vous changez de position sans sourciller.`
    }, {
        id: 13,
        name: 'Pro tech',
        description: `
La technologie est la chose la plus cool qui existe.<br>
Tout le monde devrait utiliser la technologie et essayer de comprendre comment elle fonctionne.<br>
C'est cool de bricoler des trucs pour qu'ils fonctionnent mieux.<br>
Si vous avez le choix, vous choisirez la solution high-tech à un problème plutôt que toute autre solution.`
    }, {
        id: 14,
        name: 'Psion',
        description: `
Les pouvoirs des mutants sont les plus grands.<br>
Si vous n'avez pas de pouvoir mutant, comment êtes-vous entré dans cette société ?<br>
Développez vos pouvoirs mentaux et essayez de développer plus de mutations si vous le pouvez.<br>
Aucun risque n'est trop grand.`
    }, {
        id: 15,
        name: 'PURGE',
        description: `
L'Ordinateur est votre ennemi !<br>
Ne faites pas confiance à l'Ordinateur !<br>
Dirigez votre laser vers les yeux de l'Ordinateur aussi souvent que vous le pouvez.<br>
L'armée de PURGE va s'unir et prendre le contrôle du complexe Alpha.`
    }, {
        id: 16,
        name: 'Romantiques',
        description: `
Les jours de l'ancien temps vont revenir !<br>
En tant qu'adepte des anciennes méthodes, vous souhaitez inspirer d'autres clones à voir les merveilles du passé.<br>
Découvrez d'étranges artefacts et apprenez à les utiliser.<br>
Parlez en phrases cryptiques du passé.`
    }, {
        id: 17,
        name: 'Club du phoque',
        description: `
La nature est la vague de l'avenir.<br>
La technologie et la vie dans des dômes stériles ne sont pas pour vous.<br>
En tant que terrien, vous vénérez la terre, et vous aspirez à être libéré des limites du complexe Alpha.<br>
Le plein air est l'endroit où il faut être.<br>
Vous essayez de simuler le look "plein air" en ne prenant pas de bain et en mangeant des aliments "naturels" plutôt que dans un processeur de nourriture.`
    }, {
        id: 18,
        name: 'Trekkers',
        description: `
Cherchez et explorez le complexe Alpha.<br>
Combattez l'oppression et imposez vos valeurs aux autres peuples, ou regardez les clones moins développés se détruire eux-mêmes et faites-en la morale plus tard.`
    },
];


/***/ }),

/***/ "./src/app/paranoia/data/stuff.ts":
/*!****************************************!*\
  !*** ./src/app/paranoia/data/stuff.ts ***!
  \****************************************/
/*! exports provided: defaultStuff, stuff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStuff", function() { return defaultStuff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stuff", function() { return stuff; });
const defaultStuff = [
    {
        id: 1000,
        name: 'Pistoler laser rouge',
        used: false,
        description: ``
    }, {
        id: 1001,
        name: 'Armure réflective rouge',
        used: false,
        description: ``
    }, {
        id: 1002,
        name: '100 crédits',
        used: false,
        description: ``
    },
];
const stuff = [
    {
        id: 1,
        name: 'Balle rebondissante rouge',
        used: false,
        description: ``
    }, {
        id: 2,
        name: 'Paire de bottes supplémenaires rouge',
        used: false,
        description: ``
    }, {
        id: 3,
        name: 'Kit de premiers soins rouge',
        used: false,
        description: ``
    }, {
        id: 4,
        name: 'Lampe de poche rouge',
        used: false,
        description: ``
    }, {
        id: 5,
        name: 'Masque à gaz rouge',
        used: false,
        description: ``
    }, {
        id: 6,
        name: 'Barre énergétique du bonheur rouge',
        used: false,
        description: ``
    }, {
        id: 7,
        name: 'Lunettes rouges pour tout voir en rouge',
        used: false,
        description: ``
    }, {
        id: 8,
        name: 'Ticket pour une exécution gratuite',
        used: false,
        description: ``
    }, {
        id: 9,
        name: 'Photo de W-I-RTT le célèbre unijambiste',
        used: false,
        description: ``
    }, {
        id: 10,
        name: 'Chargeur supplémentaire pour pistolet laser rouge',
        used: false,
        description: ``
    }, {
        id: 11,
        name: 'Bouteille d\'eau rouge',
        used: false,
        description: ``
    }, {
        id: 12,
        name: 'Un stickers "Le bonheur est vraiment obligatoire !"',
        used: false,
        description: ``
    }, {
        id: 13,
        name: 'Ticket pour un repas gratuit d\'accréditation orange',
        used: false,
        description: ``
    }, {
        id: 14,
        name: 'Super disolvant rouge',
        used: false,
        description: ``
    }, {
        id: 15,
        name: 'Dose de vaccin pour chien',
        used: false,
        description: ``
    }, {
        id: 16,
        name: 'Une pillule rouge',
        used: false,
        description: ``
    }, {
        id: 17,
        name: 'Une pillule bleue',
        used: false,
        description: ``
    }, {
        id: 18,
        name: 'Une pillule rouge avec des petits points noirs',
        used: false,
        description: ``
    }, {
        id: 19,
        name: 'Une pillule noire avec des petits points rouges',
        used: false,
        description: ``
    }, {
        id: 20,
        name: 'Une pillule rouge "pour rendre heureux"',
        used: false,
        description: ``
    },
];


/***/ }),

/***/ "./src/app/paranoia/modal/modal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/paranoia/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: ParanoiaModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParanoiaModalComponent", function() { return ParanoiaModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ParanoiaModalComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = [[["", 8, "modal-body"]], [["", 8, "modal-footer"]]];
const _c1 = [".modal-body", ".modal-footer"];
// Usage :
// <app-paranoia-modal [id]="''" [title]="''"">
// </app-paranoia-modal>
class ParanoiaModalComponent {
    constructor() {
        this.showClose = true;
    }
}
ParanoiaModalComponent.ɵfac = function ParanoiaModalComponent_Factory(t) { return new (t || ParanoiaModalComponent)(); };
ParanoiaModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParanoiaModalComponent, selectors: [["app-paranoia-modal"]], inputs: { id: "id", title: "title", addClass: "addClass", showClose: "showClose" }, ngContentSelectors: _c1, decls: 9, vars: 6, consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "class", "close", "data-dismiss", "modal", "aria-label", "Close", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"]], template: function ParanoiaModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ParanoiaModalComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("modal-dialog modal-dialog-centered ", ctx.addClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClose);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmFub2lhL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParanoiaModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paranoia-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], null, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/paranoia/paranoia-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/paranoia/paranoia-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ParanoiaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParanoiaRoutingModule", function() { return ParanoiaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _paranoia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paranoia.component */ "./src/app/paranoia/paranoia.component.ts");





const routes = [
    {
        path: '',
        component: _paranoia_component__WEBPACK_IMPORTED_MODULE_2__["ParanoiaComponent"]
    }
];
class ParanoiaRoutingModule {
}
ParanoiaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ParanoiaRoutingModule });
ParanoiaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ParanoiaRoutingModule_Factory(t) { return new (t || ParanoiaRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParanoiaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParanoiaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/paranoia/paranoia.component.ts":
/*!************************************************!*\
  !*** ./src/app/paranoia/paranoia.component.ts ***!
  \************************************************/
/*! exports provided: ParanoiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParanoiaComponent", function() { return ParanoiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _paranoia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paranoia.service */ "./src/app/paranoia/paranoia.service.ts");
/* harmony import */ var _data_powers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/powers */ "./src/app/paranoia/data/powers.ts");
/* harmony import */ var _data_societies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/societies */ "./src/app/paranoia/data/societies.ts");
/* harmony import */ var _data_stuff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/stuff */ "./src/app/paranoia/data/stuff.ts");
/* harmony import */ var _computer_computer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./computer/computer.component */ "./src/app/paranoia/computer/computer.component.ts");
/* harmony import */ var _ribbon_ribbon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ribbon/ribbon.component */ "./src/app/paranoia/ribbon/ribbon.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/paranoia/modal/modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./character/character.component */ "./src/app/paranoia/character/character.component.ts");


















function ParanoiaComponent_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pr\u00E9requis pour le clonage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quelle est votre d\u00E9nomination ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParanoiaComponent_ng_container_53_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.newCharacterForm.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParanoiaComponent_ng_container_53_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.newCharacterForm.sector = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Si votre d\u00E9nomination contient autre chose que des lettres majuscules entre A et Z vous serez consid\u00E9r\u00E9 comme un tra\u00EEtre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_53_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.wizardFirstStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lancer la s\u00E9quence de clonage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.newCharacterForm.name || "??????????", "-R-", ctx_r0.newCharacterForm.sector || "???", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newCharacterForm.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newCharacterForm.sector);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Faites vite ou vous serez consid\u00E9r\u00E9 comme un tra\u00EEtre dans ... ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 6, ctx_r0.wizardRemainingSeconds, "1.2-2"), " secondes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.newCharacterForm.name || !ctx_r0.newCharacterForm.sector);
} }
function ParanoiaComponent_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "V\u00E9rification de vos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strike");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "comp\u00E9tences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " (athl\u00E9tisme, flingues, combat, lancer, ...) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " (bluff, charme, intimidation, furtivit\u00E9, ...) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " (science, psychologie, bureaucratie, ...) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " (pilotage, ing\u00E9nierie, programmation, ...) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_54_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.startSkillsStep2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Je d\u00E9termine mes \u00E9ventuelles comp\u00E9tences, de fa\u00E7on non-al\u00E9atoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_54_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.wizardSecondStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "J'accepte mes imperfections et j'implante une puce 6G dans mon ADN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.wizardSkillsRemaining > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.wizardCurrentSkillsUp === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Violence = ", ctx_r1.newCharacterForm.skills.violence, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.wizardCurrentSkillsUp === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Audace = ", ctx_r1.newCharacterForm.skills.audace, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.wizardCurrentSkillsUp === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Neurones = ", ctx_r1.newCharacterForm.skills.neurones, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.wizardCurrentSkillsUp === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("M\u00E9canique = ", ctx_r1.newCharacterForm.skills.mecanique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.wizardSkillsRemaining <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.wizardSkillsRemaining, " points restants");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.wizardSkillsRemaining >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.wizardSkillsRemaining !== 0);
} }
function ParanoiaComponent_ng_container_55_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_55_div_5_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.newCharacterForm.power = ctx_r23.wizardCurrentPowers[0]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_55_div_5_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.newCharacterForm.power = ctx_r25.wizardCurrentPowers[1]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_55_div_5_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.newCharacterForm.power = ctx_r26.wizardCurrentPowers[2]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_55_div_5_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.newCharacterForm.power = ctx_r27.wizardCurrentPowers[3]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r22.newCharacterForm.power === ctx_r22.wizardCurrentPowers[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.wizardCurrentPowers[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r22.wizardCurrentPowers[0].description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r22.newCharacterForm.power === ctx_r22.wizardCurrentPowers[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.wizardCurrentPowers[1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r22.wizardCurrentPowers[1].description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r22.newCharacterForm.power === ctx_r22.wizardCurrentPowers[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.wizardCurrentPowers[2].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r22.wizardCurrentPowers[2].description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r22.newCharacterForm.power === ctx_r22.wizardCurrentPowers[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.wizardCurrentPowers[3].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r22.wizardCurrentPowers[3].description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ParanoiaComponent_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Erreur d\u00E9tect\u00E9e dans le processus de clonage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choisissez un pouvoir de mutant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ParanoiaComponent_ng_container_55_div_5_Template, 25, 16, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_55_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.wizardThirdStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Euh ... j'accepte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.wizardCurrentPowers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r2.newCharacterForm.power);
} }
function ParanoiaComponent_ng_container_56_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_56_div_5_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.newCharacterForm.society = ctx_r31.wizardCurrentSocieties[0]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_56_div_5_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.newCharacterForm.society = ctx_r33.wizardCurrentSocieties[1]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_56_div_5_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.newCharacterForm.society = ctx_r34.wizardCurrentSocieties[2]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_56_div_5_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.newCharacterForm.society = ctx_r35.wizardCurrentSocieties[3]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r30.newCharacterForm.society === ctx_r30.wizardCurrentSocieties[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.wizardCurrentSocieties[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r30.wizardCurrentSocieties[0].description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r30.newCharacterForm.society === ctx_r30.wizardCurrentSocieties[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.wizardCurrentSocieties[1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r30.wizardCurrentSocieties[1].description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r30.newCharacterForm.society === ctx_r30.wizardCurrentSocieties[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.wizardCurrentSocieties[2].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r30.wizardCurrentSocieties[2].description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r30.newCharacterForm.society === ctx_r30.wizardCurrentSocieties[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.wizardCurrentSocieties[3].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r30.wizardCurrentSocieties[3].description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ParanoiaComponent_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Branchement des souvenirs \u00E9ventuels");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choisissez une soci\u00E9t\u00E9 secr\u00EAte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ParanoiaComponent_ng_container_56_div_5_Template, 25, 16, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_56_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.wizardFourthStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "AH ! Oui c'est vrai \u00E7a ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.wizardCurrentSocieties.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r3.newCharacterForm.society);
} }
function ParanoiaComponent_ng_container_57_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r39.name);
} }
function ParanoiaComponent_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "R\u00E9cup\u00E9ration de vos effets personnels");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ParanoiaComponent_ng_container_57_li_4_Template, 2, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_57_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.startStuffStep5(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "J'esp\u00E8re obtenir une photo de W-I-RTT le c\u00E9l\u00E8bre unijambiste");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_57_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.wizardFifthStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Je vais essayer de survivre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.newCharacterForm.stuff);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r4.wizardStuffRemaining <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.wizardStuffRemaining, " \u00E9quipement restants");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r4.wizardStuffRemaining >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r4.wizardStuffRemaining !== 0);
} }
function ParanoiaComponent_ng_container_58_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_58_div_5_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const affectation_r46 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r47.newCharacterForm.affectation = affectation_r46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cette affectation a d\u00E9j\u00E0 \u00E9t\u00E9 choisie par un traitre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const affectation_r46 = ctx.$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r45.newCharacterForm.affectation === affectation_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", affectation_r46.used);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", affectation_r46.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", affectation_r46.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !affectation_r46.used);
} }
function ParanoiaComponent_ng_container_58_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ParanoiaComponent_ng_container_58_div_5_div_1_Template, 10, 6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const affectations_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", affectations_r44);
} }
function ParanoiaComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choix de votre affectation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choisissez une affectation (avant les autres ! d\u00E9p\u00E9chez-vous !)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ParanoiaComponent_ng_container_58_div_5_Template, 2, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_ng_container_58_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.saveCharacter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This is the way");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx_r5.affectationsCollection));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r5.newCharacterForm.affectation || (ctx_r5.newCharacterForm.affectation == null ? null : ctx_r5.newCharacterForm.affectation.used));
} }
function ParanoiaComponent_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Appel du banquier en cours ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ParanoiaComponent_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-paranoia-character", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", character_r53);
} }
function ParanoiaComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ParanoiaComponent_div_62_div_1_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const characters_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", characters_r51);
} }
function ParanoiaComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 78);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r8.getCurrentImage())("hidden", ctx_r8.screen.text || ctx_r8.screen.timer > 0);
} }
function ParanoiaComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 79);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r9.screen.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ParanoiaComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Vite ! Plus que ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r10.timerRemainingSeconds, "1.2-2"), " secondes ...");
} }
function ParanoiaComponent_p_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("doc id: ", log_r54.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("user uid: ", log_r54.uid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", log_r54.timestampStr, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", log_r54.wording, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ParanoiaComponent_div_100_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_div_100_div_1_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const character_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r59.inspectCharacter(character_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", character_r57.name, "-", character_r57.level, "-", character_r57.sector, " ");
} }
function ParanoiaComponent_div_100_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ParanoiaComponent_div_100_div_1_div_1_Template, 3, 3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r57 = ctx.$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", character_r57.name !== ctx_r56.currentCharacter.name);
} }
function ParanoiaComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ParanoiaComponent_div_100_div_1_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const characters_r55 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r12.currentInspection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", characters_r55);
} }
function ParanoiaComponent_div_102_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r64.name);
} }
function ParanoiaComponent_div_102_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ParanoiaComponent_div_102_ng_container_4_li_1_Template, 2, 1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r64.used);
} }
function ParanoiaComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_div_102_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.currentInspection = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Revenir \u00E0 la liste");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ParanoiaComponent_div_102_ng_container_4_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.currentInspection.stuff);
} }
function ParanoiaComponent_ng_container_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("used", item_r69.used);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r69.name);
} }
class ParanoiaComponent {
    constructor(auth, afs, paranoiaService) {
        this.auth = auth;
        this.afs = afs;
        this.paranoiaService = paranoiaService;
        this.mode = 'home'; // home | wizard | game
        this.selectedAffectation = null;
        this.currentInspection = null;
        this.wizardStep = 1;
        // Wizard Step 1
        this.wizardRemainingSeconds = 0;
        // Wizard Step 2
        this.wizardSkillsRemaining = -1;
        this.wizardCurrentSkillsUp = -1;
        // Wizard Step 3
        this.wizardCurrentPowers = [];
        // Wizard Step 4
        this.wizardCurrentSocieties = [];
        // Wizard Step 5
        this.wizardStuffRemaining = -1;
        this.modalActions1Color = 1;
        this.modalActions2Color = 2;
        this.modalActions3Color = 4;
        this.modalActions4Color = 3;
        this.newCharacterForm = {
            avatar: '',
            cloneNumber: 1,
            level: 'R',
            name: '',
            sector: '',
            affectation: null,
            traitor: 0,
            skills: {
                violence: 0,
                audace: 0,
                neurones: 0,
                mecanique: 0,
            },
            power: null,
            society: null,
            stuff: [],
            maxHitpoints: -1,
            active: true,
            currentAction: null,
        };
        this.currentCharacter = null;
        this.screen = {
            image: '',
            text: '',
            timer: -1,
        };
        this.timerRemainingSeconds = 0;
        this.currentUser = null;
        this.powers = _data_powers__WEBPACK_IMPORTED_MODULE_5__["powers"];
        this.societies = _data_societies__WEBPACK_IMPORTED_MODULE_6__["societies"];
        this.stuff = _data_stuff__WEBPACK_IMPORTED_MODULE_7__["stuff"];
        this.intervalModalActionsColors = null;
        this.init = false;
    }
    ngAfterViewInit() {
        this.initEyes();
        this.auth.authState.subscribe((user) => {
            this.currentUser = user;
            console.warn(user);
        });
    }
    ngOnDestroy() {
        if (this.intervalModalActionsColors) {
            clearInterval(this.intervalModalActionsColors);
        }
    }
    launchGame() {
        if (!this.currentUser) {
            window.alert('Va sur https://raphaelyan.github.io/rpg-digital-tools et connecte toi !');
            return;
        }
        this.initAll();
    }
    getCurrentImage() {
        if (!this.screen.image) {
            return {};
        }
        return {
            'background-image': `url(${this.screen.image})`,
        };
    }
    actionClicked(level, skillValue, skillName) {
        let isTraitor = false;
        if (level >= 2 && this.currentCharacter.level === 'R') {
            isTraitor = true;
        }
        else if (level >= 3 && this.currentCharacter.level === 'O') {
            isTraitor = true;
        }
        else if (level >= 4 && this.currentCharacter.level === 'J') {
            isTraitor = true;
        }
        let maxDice = 20;
        if (isTraitor) {
            maxDice = 10;
            this.characterDoc.update({
                traitor: this.currentCharacter.traitor + 1
            });
        }
        const scoreDice = this.rand(1, maxDice);
        const score = scoreDice + skillValue;
        const characterName = this.getCurrentCharacterName();
        let wording = `${characterName} a fait <b>${score}</b>`;
        if (scoreDice === maxDice) {
            wording += ' (MAX !)';
        }
        wording += ` sur un jet de <b>${skillName}</b>`;
        if (isTraitor) {
            wording += ' (et est un traitre en cliquant sur la mauvaise ';
            wording += this.paranoiaService.transformToAccreditationColor('accréditation', level);
            wording += ')';
        }
        this.paranoiaService.addParanoiaLog(wording, this.currentUser);
        $('#modalDices').modal('hide');
    }
    wizardFirstStep() {
        this.wizardStep = 2;
        const name = this.newCharacterForm.name;
        const sector = this.newCharacterForm.sector;
        if (name.replace(/[A-Z]/g, '').length !== 0 || sector.replace(/[A-Z]/g, '').length !== 0) {
            this.newCharacterForm.traitor += 1;
        }
    }
    wizardSecondStep() {
        this.wizardStep = 3;
        const indexPower1 = this.rand(0, this.powers.length - 1);
        let indexPower2 = this.rand(0, this.powers.length - 1);
        while ([indexPower1].includes(indexPower2)) {
            indexPower2 = this.rand(0, this.powers.length - 1);
        }
        let indexPower3 = this.rand(0, this.powers.length - 1);
        while ([indexPower1, indexPower2].includes(indexPower3)) {
            indexPower3 = this.rand(0, this.powers.length - 1);
        }
        let indexPower4 = this.rand(0, this.powers.length - 1);
        while ([indexPower1, indexPower2, indexPower3].includes(indexPower4)) {
            indexPower4 = this.rand(0, this.powers.length - 1);
        }
        this.wizardCurrentPowers.push(this.powers[indexPower1]);
        this.wizardCurrentPowers.push(this.powers[indexPower2]);
        this.wizardCurrentPowers.push(this.powers[indexPower3]);
        this.wizardCurrentPowers.push(this.powers[indexPower4]);
    }
    wizardThirdStep() {
        this.wizardStep = 4;
        const indexSociety1 = this.rand(0, this.societies.length - 1);
        let indexSociety2 = this.rand(0, this.societies.length - 1);
        while ([indexSociety1].includes(indexSociety2)) {
            indexSociety2 = this.rand(0, this.societies.length - 1);
        }
        let indexSociety3 = this.rand(0, this.societies.length - 1);
        while ([indexSociety1, indexSociety2].includes(indexSociety3)) {
            indexSociety3 = this.rand(0, this.societies.length - 1);
        }
        let indexSociety4 = this.rand(0, this.societies.length - 1);
        while ([indexSociety1, indexSociety2, indexSociety3].includes(indexSociety4)) {
            indexSociety4 = this.rand(0, this.societies.length - 1);
        }
        this.wizardCurrentSocieties.push(this.societies[indexSociety1]);
        this.wizardCurrentSocieties.push(this.societies[indexSociety2]);
        this.wizardCurrentSocieties.push(this.societies[indexSociety3]);
        this.wizardCurrentSocieties.push(this.societies[indexSociety4]);
    }
    wizardFourthStep() {
        this.wizardStep = 5;
    }
    wizardFifthStep() {
        this.wizardStep = 6;
        this.retrieveAffectations();
    }
    saveCharacter() {
        const currentAffectation = this.newCharacterForm.affectation;
        // On désactive l'affectation pour les autres joueurs
        currentAffectation.used = true;
        this.afs.doc('paranoia-affectations/' + currentAffectation.id).update(currentAffectation);
        this.characterDoc.set(this.newCharacterForm);
        this.wizardStep = 7;
        setTimeout(() => {
            this.tryToFindACharacter();
        }, 2000);
    }
    goToGame() {
        this.mode = 'game';
        this.retrieveActiveCharacters();
        this.initModalActionsColors();
        this.retrieveActiveImage();
        this.paranoiaService.initParanoiaLogs();
        this.initModalEvents();
        setTimeout(() => {
            $('[tooltip]').tooltip();
        }, 1000);
    }
    startSkillsStep2() {
        // Une moyenne de 7 par skill = 7*4 = 28
        this.wizardSkillsRemaining = 28;
        // 28 * 0.5s = 14 secondes d'animation
        const intervalSkills = setInterval(() => {
            if (this.wizardSkillsRemaining <= 0) {
                this.wizardCurrentSkillsUp = -1;
                if (this.newCharacterForm.skills.violence === 10) {
                    // 10 = 7
                    this.newCharacterForm.maxHitpoints = 7;
                }
                else if (this.newCharacterForm.skills.violence >= 8) {
                    // 8-9 = 6
                    this.newCharacterForm.maxHitpoints = 6;
                }
                else if (this.newCharacterForm.skills.violence >= 6) {
                    // 6-7 = 5
                    this.newCharacterForm.maxHitpoints = 5;
                }
                else if (this.newCharacterForm.skills.violence >= 4) {
                    // 4-5 = 4
                    this.newCharacterForm.maxHitpoints = 4;
                }
                else {
                    // 1-3 = 3
                    this.newCharacterForm.maxHitpoints = 3;
                }
                clearInterval(intervalSkills);
                return;
            }
            let index = this.rand(0, 3);
            const indexToMap = ['violence', 'audace', 'neurones', 'mecanique'];
            // Maximum 10 dans un skill
            while (this.newCharacterForm.skills[indexToMap[index]] === 10) {
                index = this.rand(0, 3);
            }
            // Pour avoir minimum 1 dans un skill et laisser un éventuel "0" jusqu'au plus tard
            if (this.wizardSkillsRemaining === 4 && this.newCharacterForm.skills.violence === 0) {
                index = 0;
            }
            else if (this.wizardSkillsRemaining === 3 && this.newCharacterForm.skills.audace === 0) {
                index = 1;
            }
            else if (this.wizardSkillsRemaining === 2 && this.newCharacterForm.skills.neurones === 0) {
                index = 2;
            }
            else if (this.wizardSkillsRemaining === 1 && this.newCharacterForm.skills.mecanique === 0) {
                index = 3;
            }
            this.newCharacterForm.skills[indexToMap[index]] += 1;
            this.wizardCurrentSkillsUp = index;
            this.wizardSkillsRemaining -= 1;
        }, 500);
    }
    startStuffStep5() {
        this.wizardStuffRemaining = 5 + _data_stuff__WEBPACK_IMPORTED_MODULE_7__["defaultStuff"].length;
        const indexes = [];
        let index = 0;
        for (const s of _data_stuff__WEBPACK_IMPORTED_MODULE_7__["defaultStuff"]) {
            setTimeout(() => {
                this.wizardStuffRemaining -= 1;
                this.newCharacterForm.stuff.push(s);
            }, index * 1000);
            index++;
        }
        setTimeout(() => {
            // 5 * 1s = 5 secondes d'animation
            const intervalSkills = setInterval(() => {
                if (this.wizardStuffRemaining <= 0) {
                    clearInterval(intervalSkills);
                    return;
                }
                let indexItem = this.rand(0, this.stuff.length - 1);
                while (indexes.includes(indexItem)) {
                    indexItem = this.rand(0, this.stuff.length - 1);
                }
                indexes.push(indexItem);
                this.newCharacterForm.stuff.push(this.stuff[indexItem]);
                this.wizardStuffRemaining -= 1;
            }, 1000);
        }, (_data_stuff__WEBPACK_IMPORTED_MODULE_7__["defaultStuff"].length - 1) * 1000);
    }
    computerDontExcuse() {
        this.characterDoc.update({
            traitor: this.currentCharacter.traitor + 1
        });
        const characterName = this.getCurrentCharacterName();
        const wording = `Traitrise : ${characterName} ne s'excuse pas auprès de l'ordinateur.`;
        this.paranoiaService.addParanoiaLog(wording, this.currentUser);
        $('#modalContact').modal('hide');
    }
    computerExcuse() {
        if (this.currentCharacter.level === 'R') {
            this.characterDoc.update({
                traitor: this.currentCharacter.traitor + 1
            });
            const characterName = this.getCurrentCharacterName();
            let wording = `Traitrise : ${characterName} s'excuse auprès de l'ordinateur sans en avoir l'`;
            wording += this.paranoiaService.transformToAccreditationColor('accréditation', 2);
            wording += `.`;
            this.paranoiaService.addParanoiaLog(wording, this.currentUser);
        }
        $('#modalContact').modal('hide');
    }
    inspectCharacter(character) {
        this.currentInspection = character;
    }
    initEyes() {
        $('body').mousemove((event) => {
            const eyes = $('.eye');
            if (!eyes || !eyes.length) {
                return;
            }
            eyes.each((_, element) => {
                const eye = $(element);
                const x = (eye.offset().left) + (eye.width() / 2);
                const y = (eye.offset().top) + (eye.height() / 2);
                const rad = Math.atan2(event.pageX - x, event.pageY - y);
                const rot = (rad * (180 / Math.PI) * -1) + 180;
                eye.css({
                    '-webkit-transform': 'rotate(' + rot + 'deg)',
                    '-moz-transform': 'rotate(' + rot + 'deg)',
                    '-ms-transform': 'rotate(' + rot + 'deg)',
                    'transform': 'rotate(' + rot + 'deg)',
                });
            });
        });
    }
    initModalActionsColors() {
        this.intervalModalActionsColors = setInterval(() => {
            this.modalActions1Color++;
            this.modalActions2Color++;
            this.modalActions3Color++;
            this.modalActions4Color++;
            if (this.modalActions1Color === 5) {
                this.modalActions1Color = 1;
            }
            if (this.modalActions2Color === 5) {
                this.modalActions2Color = 1;
            }
            if (this.modalActions3Color === 5) {
                this.modalActions3Color = 1;
            }
            if (this.modalActions4Color === 5) {
                this.modalActions4Color = 1;
            }
        }, 500);
    }
    initAll() {
        if (this.init) {
            return;
        }
        this.init = true;
        this.tryToFindACharacter();
    }
    tryToFindACharacter() {
        let key = this.currentUser.uuid;
        if (this.currentUser.displayName) {
            key = this.currentUser.displayName.toLowerCase().replace(/ /g, '');
        }
        this.characterDoc = this.afs.doc(`paranoia-characters/${key}`);
        const character = this.characterDoc.valueChanges();
        character.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe((a) => {
            if (!a) {
                this.initWizard();
                return;
            }
            this.currentCharacter = a;
            character.subscribe((characterUpdated) => {
                this.currentCharacter = characterUpdated;
            });
            this.goToGame();
        });
    }
    initWizard() {
        this.mode = 'wizard';
        this.wizardStep = 1;
        this.wizardRemainingSeconds = 60;
        setTimeout(() => {
            this.reduceWizardRemainingSeconds();
        }, 10);
    }
    reduceWizardRemainingSeconds() {
        if (this.wizardStep !== 1) {
            return;
        }
        this.wizardRemainingSeconds -= 0.01;
        if (this.wizardRemainingSeconds > 0) {
            setTimeout(() => {
                this.reduceWizardRemainingSeconds();
            }, 10);
        }
        else {
            this.wizardRemainingSeconds = 0;
            this.newCharacterForm.traitor += 1;
        }
    }
    reduceTimerRemainingSeconds() {
        this.timerRemainingSeconds -= 0.01;
        if (this.timerRemainingSeconds > 0) {
            setTimeout(() => {
                this.reduceTimerRemainingSeconds();
            }, 10);
        }
        else {
            this.timerRemainingSeconds = 0;
        }
    }
    rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    retrieveActiveCharacters() {
        this.charactersCollection = this.afs.collection('paranoia-characters', (ref) => {
            return ref.where('active', '==', true);
        }).valueChanges();
    }
    retrieveAffectations() {
        this.affectationsCollection = this.afs.collection('paranoia-affectations').valueChanges();
    }
    retrieveActiveImage() {
        this.afs.doc('paranoia-game/screen').valueChanges().subscribe((a) => {
            this.screen.image = a.image;
            this.screen.text = a.text;
            this.screen.timer = a.timer;
            if (a.timer !== -1) {
                this.timerRemainingSeconds = a.timer;
                this.reduceTimerRemainingSeconds();
            }
        });
    }
    getCurrentCharacterName() {
        return `${this.currentCharacter.name}-${this.currentCharacter.level}-${this.currentCharacter.sector}`;
    }
    initModalEvents() {
        $('#modalDices').on('show.bs.modal', () => {
            this.characterDoc.update({ currentAction: 'modalDices' });
        });
        $('#modalDices').on('hidden.bs.modal', () => {
            this.characterDoc.update({ currentAction: null });
        });
        $('#modalInspect').on('show.bs.modal', () => {
            this.characterDoc.update({ currentAction: 'modalInspect' });
        });
        $('#modalInspect').on('hidden.bs.modal', () => {
            this.currentInspection = null;
            this.characterDoc.update({ currentAction: null });
        });
        $('#modalCharacter').on('show.bs.modal', () => {
            this.characterDoc.update({ currentAction: 'modalCharacter' });
        });
        $('#modalCharacter').on('hidden.bs.modal', () => {
            this.characterDoc.update({ currentAction: null });
        });
        $('#modalContact').on('show.bs.modal', () => {
            this.characterDoc.update({ currentAction: 'modalContact' });
        });
        $('#modalContact').on('hidden.bs.modal', () => {
            this.characterDoc.update({ currentAction: null });
        });
    }
}
ParanoiaComponent.ɵfac = function ParanoiaComponent_Factory(t) { return new (t || ParanoiaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_paranoia_service__WEBPACK_IMPORTED_MODULE_4__["ParanoiaService"])); };
ParanoiaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParanoiaComponent, selectors: [["app-paranoia"]], decls: 239, vars: 100, consts: [[1, "paranoia-small-container", "d-block", "d-xl-none"], [2, "text-align", "center", "margin-top", "180px"], [1, "paranoia-container", "d-none", "d-xl-block", 3, "hidden"], [1, "text-center", 2, "margin-top", "50px"], ["width", "280px"], [1, "text-center", 2, "margin-top", "140px"], [1, "text-center", 2, "margin-top", "30px"], ["width", "370px"], ["type", "button", 1, "btn", "btn-primary", "letz-go", 3, "click"], [3, "hidden"], [4, "ngIf"], [1, "game", 3, "hidden"], [1, "paranoia-character-container", "d-none", "d-xl-inline-block"], ["class", "paranoia-container d-none d-xl-inline-block", 3, "ngStyle", "hidden", 4, "ngIf"], [1, "paranoia-container", "d-none", "d-xl-inline-block", 3, "hidden"], ["class", "screen-text", 3, "innerHtml", 4, "ngIf"], ["class", "screen-text", 4, "ngIf"], [1, "actions", "d-none", "d-xl-inline-block"], ["aria-hidden", "true", "tooltip", "", "title", "Lancer les d\u00E9s", "data-toggle", "modal", "data-target", "#modalDices", 1, "fa", "fa-cube"], ["aria-hidden", "true", "tooltip", "", "title", "Inspecter un personnage", "data-toggle", "modal", "data-target", "#modalInspect", 1, "fa", "fa-search"], ["aria-hidden", "true", "tooltip", "", "title", "Ma feuille de personnage", "data-toggle", "modal", "data-target", "#modalCharacter", 1, "fa", "fa-user"], ["aria-hidden", "true", "tooltip", "", "title", "Contacter l'Ordinateur", "data-toggle", "modal", "data-target", "#modalContact", "data-backdrop", "static", 1, "fa", "fa-laptop"], [1, "logs", "d-none", "d-xl-inline-block"], [4, "ngFor", "ngForOf"], [3, "id", "title"], [1, "modal-body"], [1, "container-fluid"], [1, "row", "modal-actions"], [1, "col-md-6"], ["tooltip", "", "title", "athl\u00E9tisme, flingues, combat, lancer, ...", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-hand-rock-o"], ["tooltip", "", "title", "bluff, charme, intimidation, furtivit\u00E9, ...", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-comments-o"], ["tooltip", "", "title", "science, psychologie, bureaucratie, ...", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o"], ["tooltip", "", "title", "pilotage, ing\u00E9nierie, programmation, ...", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-wrench"], [3, "hidden", 4, "ngIf"], [3, "id", "title", "addClass"], [3, "id", "title", "addClass", "showClose"], [1, "row"], [1, "col-md-12"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "colors"], ["tooltip", "", "title", "Infrarouge", 1, "level-IR"], ["tooltip", "", "title", "Rouge", 1, "level-R"], ["tooltip", "", "title", "Orange", 1, "level-O"], ["tooltip", "", "title", "Jaune", 1, "level-J"], ["tooltip", "", "title", "Vert", 1, "level-V"], ["tooltip", "", "title", "Bleu", 1, "level-B"], ["tooltip", "", "title", "Indigo", 1, "level-I"], ["tooltip", "", "title", "Violet", 1, "level-VI"], ["tooltip", "", "title", "Ultraviolet", 1, "level-UV"], [1, "row", "lists"], ["type", "text", "placeholder", "Nom (10 caract\u00E8res maximums)", "maxlength", "10", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Secteur (3 caract\u00E8res maximums)", "maxlength", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "hidden", "click"], [1, "animation"], ["aria-hidden", "true", 1, "fa", "fa-compass"], [1, "col-md-3"], [1, "text-center", "col-md-6", "offset-md-3", 3, "hidden"], ["type", "button", 1, "btn", "btn-primary", "col-md-6", "offset-md-3", 3, "hidden", "click"], [1, "text-center"], ["class", "row", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "col-md-2", "offset-md-5", 3, "hidden", "click"], [1, "card", 3, "click"], [1, "card-body"], [1, "card-title"], [1, "card-text", 3, "innerHtml"], ["type", "button", 1, "btn", "btn-primary", "col-md-4", "offset-md-4", 3, "hidden", "click"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "card", 3, "hidden", "click"], [1, "card-title", 3, "innerHtml"], [1, "card", "used", 3, "hidden"], [1, "card-text"], [3, "config"], [1, "paranoia-container", "d-none", "d-xl-inline-block", 3, "ngStyle", "hidden"], [1, "screen-text", 3, "innerHtml"], [1, "screen-text"], [3, "innerHtml"], [1, "col-md-12", "user-select", 3, "click"]], template: function ParanoiaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-paranoia-computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-paranoia-computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Vous n'avez pas l'acr\u00E9dtation n\u00E9cessaire pour utiliser un petit \u00E9cran.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Veuillez agrandir votre \u00E9cran ou vous serez accus\u00E9 de traitrise.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " L'ordinateur est votre ami. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-paranoia-computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-paranoia-computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-paranoia-computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bonjour Citoyen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Ob\u00E9issez \u00E0 votre ami l'Ordinateur et prot\u00E9gez le Complexe Alpha !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Traquez les comploteurs et les mutants, d\u00E9masquez les tra\u00EEtres parmi vos \u00E9quipiers...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Et prenez garde \u00E0 ne pas \u00EAtre d\u00E9masqu\u00E9 vous-m\u00EAme !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-paranoia-ribbon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sois heureux, citoyen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u00CAtre heureux est un devoir. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Bienvenue dans l'ultime refuge de l'humanit\u00E9 : le complexe Alpha.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Il n'existe rien en dehors du complexe Alpha.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " L'Ordinateur veille sur le complexe alpha et ses citoyens.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Votre mission : \u00E9liminer les tra\u00EEtres.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Les tra\u00EEtres sont les ennemis de l'Ordinateur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " L'ordinateur est votre ami.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "app-paranoia-ribbon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " R\u00E9fl\u00E9chir, c'est d\u00E9j\u00E0 trahir. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "app-paranoia-ribbon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " En cas de doute sur votre loyaut\u00E9 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 1. placez votre laser sur votre tempe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " 2. pressez la d\u00E9tente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_Template_button_click_50_listener() { return ctx.launchGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "J'accepte la mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ParanoiaComponent_ng_container_53_Template, 16, 9, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ParanoiaComponent_ng_container_54_Template, 32, 18, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ParanoiaComponent_ng_container_55_Template, 8, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ParanoiaComponent_ng_container_56_Template, 8, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ParanoiaComponent_ng_container_57_Template, 11, 5, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ParanoiaComponent_ng_container_58_Template, 9, 4, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ParanoiaComponent_ng_container_59_Template, 3, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ParanoiaComponent_div_62_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ParanoiaComponent_div_64_Template, 1, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-paranoia-computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ParanoiaComponent_div_67_Template, 1, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ParanoiaComponent_div_68_Template, 3, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ParanoiaComponent_p_75_Template, 7, 6, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "app-paranoia-modal", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_Template_div_click_82_listener() { return ctx.actionClicked(ctx.modalActions1Color, ctx.currentCharacter == null ? null : ctx.currentCharacter.skills.violence, "Violence"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_Template_div_click_86_listener() { return ctx.actionClicked(ctx.modalActions2Color, ctx.currentCharacter == null ? null : ctx.currentCharacter.skills.audace, "Audace"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_Template_div_click_90_listener() { return ctx.actionClicked(ctx.modalActions3Color, ctx.currentCharacter == null ? null : ctx.currentCharacter.skills.neurones, "Neurones"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_Template_div_click_94_listener() { return ctx.actionClicked(ctx.modalActions4Color, ctx.currentCharacter == null ? null : ctx.currentCharacter.skills.mecanique, "M\u00E9canique"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "app-paranoia-modal", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, ParanoiaComponent_div_100_Template, 2, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](101, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, ParanoiaComponent_div_102_Template, 5, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "app-paranoia-modal", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, ParanoiaComponent_ng_container_107_Template, 3, 3, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "app-paranoia-modal", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "L'ordinateur est indisponible pour le moment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Veuillez vous excuser pour la g\u00EAne que cela vous occasionne.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_Template_button_click_118_listener() { return ctx.computerDontExcuse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Ne pas s'excuser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParanoiaComponent_Template_button_click_120_listener() { return ctx.computerExcuse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "S'excuser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "app-paranoia-modal", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Leader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " d\u2019\u00C9quipe, charg\u00E9 de mener le groupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Officier Garant de la ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Loyaut\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, ", charg\u00E9 de veiller \u00E0 l'orthodoxie politique du groupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Officier Charg\u00E9 de l'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Hygi\u00E8ne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, ", qui veille \u00E0 la propret\u00E9 des membres du groupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Officier Responsable des ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Communications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, ", charg\u00E9 de faire des rapports r\u00E9guliers \u00E0 l'Ordinateur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Responsable du ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Mat\u00E9riel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, ", qui veille \u00E0 ce que chacun prenne soin du mat\u00E9riel attribu\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Officier Garant du ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Bonheur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, ", charg\u00E9 de remonter le moral des troupes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "app-paranoia-modal", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Vous commencez avec votre clone n\u00B01, trandis que le clone n\u00B06 ... sera votre dernier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Voici les diff\u00E9rents niveaux d'accr\u00E9ditation dans l'ordre :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "IR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "J");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "VI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "UV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Vous ne devez pas utiliser quelque chose qui d\u00E9passe votre niveau d'acr\u00E9ditation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Toute personne d'un rang sup\u00E9rieur au v\u00F4tre a autorit\u00E9 sur vous et peut vous donner des ordres.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "app-paranoia-modal", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Au bout de 5 \u00E9toiles, vous \u00EAtes officiellement un traitre.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Voici \"quelques\" exemples de traitrises :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\u00CAtre un mutant ou utiliser un pouvoir mutant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Appartenir \u00E0 une soci\u00E9t\u00E9 secr\u00E8te");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "\u00CAtre le seul survivant d'une mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\u00C9teindre un communicateur pendant une mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Incapacit\u00E9 \u00E0 \u00EAtre heureux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Ne pas faire les choses n\u00E9cessaires pour \u00EAtre heureux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Ne pas porter l'uniforme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "\u00C9chouer \u00E0 une inspection d'hygi\u00E8ne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "D\u00E9sob\u00E9ir \u00E0 l'ordinateur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Poss\u00E9der des informations ou des \u00E9quipements non autoris\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Demander des informations ou des \u00E9quipements non autoris\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Faire une fausse d\u00E9claration de trahison");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "A l'inverse, voici des exemples pour regagner la confiance de l'Ordinateur :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Ex\u00E9cuter un tra\u00EEtre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "D\u00E9noncer un tra\u00EEtre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "\u00CAtre extr\u00EAmement heureux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Recevoir une mention d'un sup\u00E9rieur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Tester du mat\u00E9riel exp\u00E9rimental et le prot\u00E9ger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Mourir en tra\u00EEtre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("right", "170px")("top", "30px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", "170px")("top", "320px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.mode !== "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", "70px")("top", "150px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", "960px")("top", "270px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", "470px")("top", "570px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", "415px")("top", "185px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", "90px")("top", "535px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", "650px")("top", "535px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wizard step-", ctx.wizardStep, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.mode !== "wizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wizardStep === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wizardStep === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wizardStep === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wizardStep === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wizardStep === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wizardStep === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wizardStep === 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.mode !== "game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 94, ctx.charactersCollection));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screen.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.screen.image && !(ctx.screen.text || ctx.screen.timer > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", "394px")("top", "355px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screen.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screen.timer > 0 && ctx.timerRemainingSeconds > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 96, ctx.paranoiaService.paranoiaLogs));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "modalDices")("title", "Lancer les d\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("action bg-", ctx.modalActions1Color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Violence (", ctx.currentCharacter == null ? null : ctx.currentCharacter.skills.violence, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("action bg-", ctx.modalActions2Color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Audace (", ctx.currentCharacter == null ? null : ctx.currentCharacter.skills.audace, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("action bg-", ctx.modalActions3Color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Neurones (", ctx.currentCharacter == null ? null : ctx.currentCharacter.skills.neurones, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("action bg-", ctx.modalActions4Color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" M\u00E9canique (", ctx.currentCharacter == null ? null : ctx.currentCharacter.skills.mecanique, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "modalInspect")("title", "Inspecter un personnage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](101, 98, ctx.charactersCollection));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentInspection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "modalCharacter")("title", "Ma feuille de personnage")("addClass", "modal-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentCharacter == null ? null : ctx.currentCharacter.stuff);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "modalContact")("title", "Contacter l'Ordinateur")("addClass", "modal-computer")("showClose", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "explainAffectation")("title", "Fonction Obligatoires Compl\u00E9mentaires")("addClass", "modal-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "explainCloneColor")("title", "Accr\u00E9ditations et num\u00E9ro de clone")("addClass", "modal-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "explainTraitor")("title", "Niveau de traitrise")("addClass", "modal-lg");
    } }, directives: [_computer_computer_component__WEBPACK_IMPORTED_MODULE_8__["ParanoiaComputerComponent"], _ribbon_ribbon_component__WEBPACK_IMPORTED_MODULE_9__["ParanoiaRibbonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ParanoiaModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _character_character_component__WEBPACK_IMPORTED_MODULE_13__["ParanoiaCharacterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-top: 20px;\n}\n\n.paranoia-small-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 500px;\n  width: 100%;\n  border: 10px double;\n}\n\n.paranoia-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 800px;\n  width: 100%;\n  border: 10px double;\n}\n\n.paranoia-container[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.paranoia-character-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 800px;\n  width: 20%;\n  padding-right: 10px;\n  float: left;\n}\n\n.letz-go[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: block;\n  margin-top: 200px;\n}\n\n.game[_ngcontent-%COMP%]   .paranoia-container[_ngcontent-%COMP%] {\n  width: 80%;\n  float: left;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.actions[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-left: 20%;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 97px;\n  display: inline-block;\n  text-align: center;\n  font-size: 40px;\n  font-weight: 600;\n  padding: 30px 92px;\n  margin: 0;\n  cursor: pointer;\n  width: 25%;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]    + i[_ngcontent-%COMP%] {\n  border-left: 1px solid #d3d5d4;\n}\n\n.user-select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 15px;\n}\n\n.user-select[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n\n.wizard.step-2[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 30px;\n  padding-bottom: 90px;\n}\n\n.wizard.step-2[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 150px;\n}\n\n.wizard.step-2[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   i.active[_ngcontent-%COMP%] {\n  -webkit-animation: 1s linear 0s infinite normal rotating;\n          animation: 1s linear 0s infinite normal rotating;\n}\n\n.wizard.step-2[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.wizard.step-2[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   h5.active[_ngcontent-%COMP%] {\n  -webkit-animation: 0.5s linear 0s infinite normal rotating;\n          animation: 0.5s linear 0s infinite normal rotating;\n}\n\n@-webkit-keyframes rotating {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotating {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.wizard.step-3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .wizard.step-4[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .wizard.step-5[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .wizard.step-6[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .wizard.step-7[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n}\n\n.wizard.step-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .wizard.step-4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .wizard.step-5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .wizard.step-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .wizard.step-7[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 15px;\n  cursor: pointer;\n}\n\n.wizard.step-3[_ngcontent-%COMP%]   .card.used[_ngcontent-%COMP%], .wizard.step-4[_ngcontent-%COMP%]   .card.used[_ngcontent-%COMP%], .wizard.step-5[_ngcontent-%COMP%]   .card.used[_ngcontent-%COMP%], .wizard.step-6[_ngcontent-%COMP%]   .card.used[_ngcontent-%COMP%], .wizard.step-7[_ngcontent-%COMP%]   .card.used[_ngcontent-%COMP%] {\n  background-color: darkgrey;\n  cursor: not-allowed;\n}\n\n.wizard.step-3[_ngcontent-%COMP%]   .card.active[_ngcontent-%COMP%], .wizard.step-4[_ngcontent-%COMP%]   .card.active[_ngcontent-%COMP%], .wizard.step-5[_ngcontent-%COMP%]   .card.active[_ngcontent-%COMP%], .wizard.step-6[_ngcontent-%COMP%]   .card.active[_ngcontent-%COMP%], .wizard.step-7[_ngcontent-%COMP%]   .card.active[_ngcontent-%COMP%] {\n  margin: 6px;\n  border: 10px double black;\n}\n\n.wizard.step-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.used):hover, .wizard.step-4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.used):hover, .wizard.step-5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.used):hover, .wizard.step-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.used):hover, .wizard.step-7[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.used):hover {\n  margin: 6px;\n  border: 10px solid black;\n}\n\n.screen-text[_ngcontent-%COMP%] {\n  padding: 0 100px;\n  padding-top: 40px;\n  font-size: 20px;\n}\n\n[_nghost-%COMP%]     .text-level-IR {\n  color: #000000;\n}\n\n[_nghost-%COMP%]     .text-level-R {\n  color: #f83158;\n}\n\n[_nghost-%COMP%]     .text-level-O {\n  color: #fd8628;\n}\n\n[_nghost-%COMP%]     .text-level-J {\n  color: #fdfc40;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n\n[_nghost-%COMP%]     .text-level-V {\n  color: #81c844;\n}\n\n[_nghost-%COMP%]     .text-level-B {\n  color: #47b7ff;\n}\n\n[_nghost-%COMP%]     .text-level-I {\n  color: #463794;\n}\n\n[_nghost-%COMP%]     .text-level-VI {\n  color: #a24e80;\n}\n\n[_nghost-%COMP%]     .text-level-UV {\n  color: #ffffff;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n\n.used[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\np.colors[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\np.colors[_ngcontent-%COMP%]   .level-IR[_ngcontent-%COMP%] {\n  background-color: #000000;\n  color: white;\n  width: 11%;\n  display: inline-block;\n}\n\np.colors[_ngcontent-%COMP%]   .level-R[_ngcontent-%COMP%] {\n  background-color: #f83158;\n  color: white;\n  width: 11%;\n  display: inline-block;\n}\n\np.colors[_ngcontent-%COMP%]   .level-O[_ngcontent-%COMP%] {\n  background-color: #fd8628;\n  color: white;\n  width: 11%;\n  display: inline-block;\n}\n\np.colors[_ngcontent-%COMP%]   .level-J[_ngcontent-%COMP%] {\n  background-color: #fdfc40;\n  color: black;\n  width: 11%;\n  display: inline-block;\n}\n\np.colors[_ngcontent-%COMP%]   .level-V[_ngcontent-%COMP%] {\n  background-color: #81c844;\n  color: black;\n  width: 11%;\n  display: inline-block;\n}\n\np.colors[_ngcontent-%COMP%]   .level-B[_ngcontent-%COMP%] {\n  background-color: #47b7ff;\n  color: white;\n  width: 11%;\n  display: inline-block;\n}\n\np.colors[_ngcontent-%COMP%]   .level-I[_ngcontent-%COMP%] {\n  background-color: #463794;\n  color: white;\n  width: 11%;\n  display: inline-block;\n}\n\np.colors[_ngcontent-%COMP%]   .level-VI[_ngcontent-%COMP%] {\n  background-color: #a24e80;\n  color: white;\n  width: 11%;\n  display: inline-block;\n}\n\np.colors[_ngcontent-%COMP%]   .level-UV[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: black;\n  width: 11%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL3BhcmFub2lhL3BhcmFub2lhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXJhbm9pYS9wYXJhbm9pYS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL21peGlucy5zY3NzIiwiL1VzZXJzL3JhcGhhZWx5YW4vd29ya3NwYWNlL1BlcnNvL3JwZy1kaWdpdGFsLXRvb2xzL3NyYy9hcHAvcGFyYW5vaWEvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDREY7O0FER0E7RUFDRSx3QkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtFQUNBLDJCQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNESjs7QURFSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0FOOztBREdFO0VBQ0UsOEJBQUE7QUNESjs7QURLQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDRkY7O0FESUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURPRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0pKOztBREtJO0VBQ0UsZ0JBQUE7QUNITjs7QURJTTtFQUNFLHdEQUFBO1VBQUEsZ0RBQUE7QUNGUjs7QURNRTtFQUNFLGtCQUFBO0FDSko7O0FES0k7RUFDRSwwREFBQTtVQUFBLGtEQUFBO0FDSE47O0FEUUE7RUFDRTtJRTVGQSx1QkY0RjBCO0VDRjFCO0VER0E7SUU3RkEseUJGNkZ3QjtFQ0V4QjtBQUNGOztBRExBO0VBQ0U7SUU1RkEsdUJGNEYwQjtFQ0YxQjtFREdBO0lFN0ZBLHlCRjZGd0I7RUNFeEI7QUFDRjs7QURLRTs7Ozs7RUFDRSxvQkFBQTtBQ0NKOztBRENFOzs7OztFQUNFLFlBQUE7RUFDQSxlQUFBO0FDS0o7O0FESEU7Ozs7O0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQ1NKOztBRE5FOzs7OztFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ1lKOztBRFZFOzs7OztFQUNFLFdBQUE7RUFDQSx3QkFBQTtBQ2dCSjs7QURaQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDZUY7O0FEWkE7RUFBaUMsY0cxSXZCO0FGMEpWOztBRGZBO0VBQWlDLGNHMUl4QjtBRjZKVDs7QURsQkE7RUFBaUMsY0cxSXhCO0FGZ0tUOztBRHJCQTtFQUFpQyxjRzFJeEI7RUgwSXdDLDJDQUFBO0FDMEJqRDs7QUR6QkE7RUFBaUMsY0cxSXhCO0FGdUtUOztBRDVCQTtFQUFpQyxjRzFJeEI7QUYwS1Q7O0FEL0JBO0VBQWlDLGNHMUl4QjtBRjZLVDs7QURsQ0E7RUFBaUMsY0cxSXZCO0FGZ0xWOztBRHJDQTtFQUFpQyxjRzFJdkI7RUgwSXdDLDJDQUFBO0FDMENsRDs7QUR4Q0E7RUFDRSw2QkFBQTtBQzJDRjs7QUR4Q0E7RUFBVyxXQUFBO0VBQWEsa0JBQUE7QUM2Q3hCOztBRDVDQTtFQUFxQix5Qkd6Slg7RUh5SnVDLFlBQUE7RUFBYyxVQUFBO0VBQVkscUJBQUE7QUNtRDNFOztBRGxEQTtFQUFxQix5Qkd6Slo7RUh5SnVDLFlBQUE7RUFBYyxVQUFBO0VBQVkscUJBQUE7QUN5RDFFOztBRHhEQTtFQUFxQix5Qkd6Slo7RUh5SnVDLFlBQUE7RUFBYyxVQUFBO0VBQVkscUJBQUE7QUMrRDFFOztBRDlEQTtFQUFxQix5Qkd6Slo7RUh5SnVDLFlBQUE7RUFBYyxVQUFBO0VBQVkscUJBQUE7QUNxRTFFOztBRHBFQTtFQUFxQix5Qkd6Slo7RUh5SnVDLFlBQUE7RUFBYyxVQUFBO0VBQVkscUJBQUE7QUMyRTFFOztBRDFFQTtFQUFxQix5Qkd6Slo7RUh5SnVDLFlBQUE7RUFBYyxVQUFBO0VBQVkscUJBQUE7QUNpRjFFOztBRGhGQTtFQUFxQix5Qkd6Slo7RUh5SnVDLFlBQUE7RUFBYyxVQUFBO0VBQVkscUJBQUE7QUN1RjFFOztBRHRGQTtFQUFxQix5Qkd6Slg7RUh5SnVDLFlBQUE7RUFBYyxVQUFBO0VBQVkscUJBQUE7QUM2RjNFOztBRDVGQTtFQUFxQix5Qkd6Slg7RUh5SnVDLFlBQUE7RUFBYyxVQUFBO0VBQVkscUJBQUE7QUNtRzNFIiwiZmlsZSI6InNyYy9hcHAvcGFyYW5vaWEvcGFyYW5vaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9taXhpbnMnO1xuQGltcG9ydCAnLi92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucGFyYW5vaWEtc21hbGwtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxMHB4IGRvdWJsZTtcbn1cbi5wYXJhbm9pYS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDEwcHggZG91YmxlO1xufVxuLnBhcmFub2lhLWNvbnRhaW5lcltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucGFyYW5vaWEtY2hhcmFjdGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sZXR6LWdvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuLmdhbWUgLnBhcmFub2lhLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIGZsb2F0OiBsZWZ0O1xuXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmFjdGlvbnMge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuXG4gIGkge1xuICAgIGhlaWdodDogOTdweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDMwcHggOTJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgaSArIGkge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QzZDVkNDtcbiAgfVxufVxuXG4udXNlci1zZWxlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi53aXphcmQuc3RlcC0yIHtcbiAgLmFuaW1hdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA5MHB4O1xuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAxNTBweDtcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYW5pbWF0aW9uOiAxcyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsIHJvdGF0aW5nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY29sLW1kLTMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoNS5hY3RpdmUge1xuICAgICAgYW5pbWF0aW9uOiAwLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWwgcm90YXRpbmc7XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHsgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSgwZGVnKSk7IH1cbiAgdG8geyBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKDM2MGRlZykpOyB9XG59XG5cbi53aXphcmQuc3RlcC0zLFxuLndpemFyZC5zdGVwLTQsXG4ud2l6YXJkLnN0ZXAtNSxcbi53aXphcmQuc3RlcC02LFxuLndpemFyZC5zdGVwLTcge1xuICBoMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHhcbiAgfVxuICAuY2FyZCB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuY2FyZC51c2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgLmNhcmQuYWN0aXZlIHtcbiAgICBtYXJnaW46IDZweDtcbiAgICBib3JkZXI6IDEwcHggZG91YmxlIGJsYWNrO1xuICB9XG4gIC5jYXJkOm5vdCgudXNlZCk6aG92ZXIge1xuICAgIG1hcmdpbjogNnB4O1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCBibGFjaztcbiAgfVxufVxuXG4uc2NyZWVuLXRleHQge1xuICBwYWRkaW5nOiAwIDEwMHB4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtbGV2ZWwtSVIgeyBjb2xvcjogJGNvbG9ySVI7IH1cbjpob3N0IDo6bmctZGVlcCAudGV4dC1sZXZlbC1SICB7IGNvbG9yOiAkY29sb3JSOyB9XG46aG9zdCA6Om5nLWRlZXAgLnRleHQtbGV2ZWwtTyAgeyBjb2xvcjogJGNvbG9yTzsgfVxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LWxldmVsLUogIHsgY29sb3I6ICRjb2xvcko7IHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuNSk7IH1cbjpob3N0IDo6bmctZGVlcCAudGV4dC1sZXZlbC1WICB7IGNvbG9yOiAkY29sb3JWOyB9XG46aG9zdCA6Om5nLWRlZXAgLnRleHQtbGV2ZWwtQiAgeyBjb2xvcjogJGNvbG9yQjsgfVxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LWxldmVsLUkgIHsgY29sb3I6ICRjb2xvckk7IH1cbjpob3N0IDo6bmctZGVlcCAudGV4dC1sZXZlbC1WSSB7IGNvbG9yOiAkY29sb3JWSTsgfVxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LWxldmVsLVVWIHsgY29sb3I6ICRjb2xvclVWOyB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjUpOyB9XG5cbi51c2VkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbnAuY29sb3JzIHsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxucC5jb2xvcnMgLmxldmVsLUlSIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9ySVI7IGNvbG9yOiB3aGl0ZTsgd2lkdGg6IDExJTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5wLmNvbG9ycyAubGV2ZWwtUiAgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JSOyBjb2xvcjogd2hpdGU7IHdpZHRoOiAxMSU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxucC5jb2xvcnMgLmxldmVsLU8gIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yTzsgY29sb3I6IHdoaXRlOyB3aWR0aDogMTElOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbnAuY29sb3JzIC5sZXZlbC1KICB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvcko7IGNvbG9yOiBibGFjazsgd2lkdGg6IDExJTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5wLmNvbG9ycyAubGV2ZWwtViAgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JWOyBjb2xvcjogYmxhY2s7IHdpZHRoOiAxMSU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxucC5jb2xvcnMgLmxldmVsLUIgIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yQjsgY29sb3I6IHdoaXRlOyB3aWR0aDogMTElOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbnAuY29sb3JzIC5sZXZlbC1JICB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvckk7IGNvbG9yOiB3aGl0ZTsgd2lkdGg6IDExJTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5wLmNvbG9ycyAubGV2ZWwtVkkgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JWSTsgY29sb3I6IHdoaXRlOyB3aWR0aDogMTElOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbnAuY29sb3JzIC5sZXZlbC1VViB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvclVWOyBjb2xvcjogYmxhY2s7IHdpZHRoOiAxMSU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBhcmFub2lhLXNtYWxsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMTBweCBkb3VibGU7XG59XG5cbi5wYXJhbm9pYS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDEwcHggZG91YmxlO1xufVxuXG4ucGFyYW5vaWEtY29udGFpbmVyW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wYXJhbm9pYS1jaGFyYWN0ZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDgwMHB4O1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxldHotZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG4uZ2FtZSAucGFyYW5vaWEtY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmFjdGlvbnMge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuLmFjdGlvbnMgaSB7XG4gIGhlaWdodDogOTdweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMzBweCA5MnB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDI1JTtcbn1cbi5hY3Rpb25zIGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFjdGlvbnMgaSArIGkge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkM2Q1ZDQ7XG59XG5cbi51c2VyLXNlbGVjdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbn1cbi51c2VyLXNlbGVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53aXphcmQuc3RlcC0yIC5hbmltYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOTBweDtcbn1cbi53aXphcmQuc3RlcC0yIC5hbmltYXRpb24gaSB7XG4gIGZvbnQtc2l6ZTogMTUwcHg7XG59XG4ud2l6YXJkLnN0ZXAtMiAuYW5pbWF0aW9uIGkuYWN0aXZlIHtcbiAgYW5pbWF0aW9uOiAxcyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsIHJvdGF0aW5nO1xufVxuLndpemFyZC5zdGVwLTIgLmNvbC1tZC0zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndpemFyZC5zdGVwLTIgLmNvbC1tZC0zIGg1LmFjdGl2ZSB7XG4gIGFuaW1hdGlvbjogMC41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsIHJvdGF0aW5nO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0aW5nIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4ud2l6YXJkLnN0ZXAtMyBoMixcbi53aXphcmQuc3RlcC00IGgyLFxuLndpemFyZC5zdGVwLTUgaDIsXG4ud2l6YXJkLnN0ZXAtNiBoMixcbi53aXphcmQuc3RlcC03IGgyIHtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4ud2l6YXJkLnN0ZXAtMyAuY2FyZCxcbi53aXphcmQuc3RlcC00IC5jYXJkLFxuLndpemFyZC5zdGVwLTUgLmNhcmQsXG4ud2l6YXJkLnN0ZXAtNiAuY2FyZCxcbi53aXphcmQuc3RlcC03IC5jYXJkIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ud2l6YXJkLnN0ZXAtMyAuY2FyZC51c2VkLFxuLndpemFyZC5zdGVwLTQgLmNhcmQudXNlZCxcbi53aXphcmQuc3RlcC01IC5jYXJkLnVzZWQsXG4ud2l6YXJkLnN0ZXAtNiAuY2FyZC51c2VkLFxuLndpemFyZC5zdGVwLTcgLmNhcmQudXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLndpemFyZC5zdGVwLTMgLmNhcmQuYWN0aXZlLFxuLndpemFyZC5zdGVwLTQgLmNhcmQuYWN0aXZlLFxuLndpemFyZC5zdGVwLTUgLmNhcmQuYWN0aXZlLFxuLndpemFyZC5zdGVwLTYgLmNhcmQuYWN0aXZlLFxuLndpemFyZC5zdGVwLTcgLmNhcmQuYWN0aXZlIHtcbiAgbWFyZ2luOiA2cHg7XG4gIGJvcmRlcjogMTBweCBkb3VibGUgYmxhY2s7XG59XG4ud2l6YXJkLnN0ZXAtMyAuY2FyZDpub3QoLnVzZWQpOmhvdmVyLFxuLndpemFyZC5zdGVwLTQgLmNhcmQ6bm90KC51c2VkKTpob3Zlcixcbi53aXphcmQuc3RlcC01IC5jYXJkOm5vdCgudXNlZCk6aG92ZXIsXG4ud2l6YXJkLnN0ZXAtNiAuY2FyZDpub3QoLnVzZWQpOmhvdmVyLFxuLndpemFyZC5zdGVwLTcgLmNhcmQ6bm90KC51c2VkKTpob3ZlciB7XG4gIG1hcmdpbjogNnB4O1xuICBib3JkZXI6IDEwcHggc29saWQgYmxhY2s7XG59XG5cbi5zY3JlZW4tdGV4dCB7XG4gIHBhZGRpbmc6IDAgMTAwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGV4dC1sZXZlbC1JUiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtbGV2ZWwtUiB7XG4gIGNvbG9yOiAjZjgzMTU4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtbGV2ZWwtTyB7XG4gIGNvbG9yOiAjZmQ4NjI4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtbGV2ZWwtSiB7XG4gIGNvbG9yOiAjZmRmYzQwO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtbGV2ZWwtViB7XG4gIGNvbG9yOiAjODFjODQ0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtbGV2ZWwtQiB7XG4gIGNvbG9yOiAjNDdiN2ZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtbGV2ZWwtSSB7XG4gIGNvbG9yOiAjNDYzNzk0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtbGV2ZWwtVkkge1xuICBjb2xvcjogI2EyNGU4MDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LWxldmVsLVVWIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi51c2VkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbnAuY29sb3JzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucC5jb2xvcnMgLmxldmVsLUlSIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTElO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnAuY29sb3JzIC5sZXZlbC1SIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4MzE1ODtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTElO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnAuY29sb3JzIC5sZXZlbC1PIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkODYyODtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTElO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnAuY29sb3JzIC5sZXZlbC1KIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmM0MDtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTElO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnAuY29sb3JzIC5sZXZlbC1WIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxYzg0NDtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTElO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnAuY29sb3JzIC5sZXZlbC1CIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YjdmZjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTElO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnAuY29sb3JzIC5sZXZlbC1JIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2Mzc5NDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTElO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnAuY29sb3JzIC5sZXZlbC1WSSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMjRlODA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDExJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5wLmNvbG9ycyAubGV2ZWwtVVYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iLCJAbWl4aW4gdHJhbnNpdGlvbigkdmFsdWUuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdmFsdWU7XG4gIC1tb3otdHJhbnNpdGlvbjogJHZhbHVlO1xuICB0cmFuc2l0aW9uOiAkdmFsdWU7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHZhbHVlKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdmFsdWU7XG4gIC1tcy10cmFuc2Zvcm06ICR2YWx1ZTtcbiAgdHJhbnNmb3JtOiAkdmFsdWU7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR2YWx1ZSkge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICR2YWx1ZTtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICR2YWx1ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogJHZhbHVlO1xufVxuXG5AbWl4aW4gZml4LXdlYmtpdC10cmFuc2l0aW9uKCR2YWx1ZSkge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtICR2YWx1ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR2YWx1ZTtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb246ICR2YWx1ZTtcbiAgYW5pbWF0aW9uOiAkdmFsdWU7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZmlsbC1tb2RlKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogJHZhbHVlO1xufVxuIiwiJGNvbG9ySVI6ICMwMDAwMDA7XG4kY29sb3JSOiAjZjgzMTU4O1xuJGNvbG9yTzogI2ZkODYyODtcbiRjb2xvcko6ICNmZGZjNDA7XG4kY29sb3JWOiAjODFjODQ0O1xuJGNvbG9yQjogIzQ3YjdmZjtcbiRjb2xvckk6ICM0NjM3OTQ7XG4kY29sb3JWSTogI2EyNGU4MDtcbiRjb2xvclVWOiAjZmZmZmZmO1xuIl19 */", ".modal-actions[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0;\n}\n.modal-actions[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.modal-actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  cursor: pointer;\n}\n.modal-actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n}\n.modal-actions[_ngcontent-%COMP%]   .action.bg-1[_ngcontent-%COMP%] {\n  background: #f83158;\n}\n.modal-actions[_ngcontent-%COMP%]   .action.bg-2[_ngcontent-%COMP%] {\n  background: #fd8628;\n}\n.modal-actions[_ngcontent-%COMP%]   .action.bg-3[_ngcontent-%COMP%] {\n  background: #fdfc40;\n}\n.modal-actions[_ngcontent-%COMP%]   .action.bg-4[_ngcontent-%COMP%] {\n  background: #81c844;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL3BhcmFub2lhL21vZGFsLWFjdGlvbnMuc2NzcyIsInNyYy9hcHAvcGFyYW5vaWEvbW9kYWwtYWN0aW9ucy5zY3NzIiwiL1VzZXJzL3JhcGhhZWx5YW4vd29ya3NwYWNlL1BlcnNvL3JwZy1kaWdpdGFsLXRvb2xzL3NyYy9hcHAvcGFyYW5vaWEvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQUNFLFlBQUE7QUNESjtBREdFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNESjtBREdJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNETjtBRE1BO0VBQThCLG1CRW5CckI7QURpQlQ7QURHQTtFQUE4QixtQkVuQnJCO0FEb0JUO0FEQUE7RUFBOEIsbUJFbkJyQjtBRHVCVDtBREhBO0VBQThCLG1CRW5CckI7QUQwQlQiLCJmaWxlIjoic3JjL2FwcC9wYXJhbm9pYS9tb2RhbC1hY3Rpb25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XG5cbi5tb2RhbC1hY3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gIC5jb2wtbWQtNiB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIC5hY3Rpb24ge1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtYWN0aW9ucyAuYWN0aW9uLmJnLTEgeyBiYWNrZ3JvdW5kOiAkY29sb3JSOyB9XG4ubW9kYWwtYWN0aW9ucyAuYWN0aW9uLmJnLTIgeyBiYWNrZ3JvdW5kOiAkY29sb3JPOyB9XG4ubW9kYWwtYWN0aW9ucyAuYWN0aW9uLmJnLTMgeyBiYWNrZ3JvdW5kOiAkY29sb3JKOyB9XG4ubW9kYWwtYWN0aW9ucyAuYWN0aW9uLmJnLTQgeyBiYWNrZ3JvdW5kOiAkY29sb3JWOyB9XG4iLCIubW9kYWwtYWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tb2RhbC1hY3Rpb25zIC5jb2wtbWQtNiB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5tb2RhbC1hY3Rpb25zIC5hY3Rpb24ge1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tb2RhbC1hY3Rpb25zIC5hY3Rpb24gaSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tb2RhbC1hY3Rpb25zIC5hY3Rpb24uYmctMSB7XG4gIGJhY2tncm91bmQ6ICNmODMxNTg7XG59XG5cbi5tb2RhbC1hY3Rpb25zIC5hY3Rpb24uYmctMiB7XG4gIGJhY2tncm91bmQ6ICNmZDg2Mjg7XG59XG5cbi5tb2RhbC1hY3Rpb25zIC5hY3Rpb24uYmctMyB7XG4gIGJhY2tncm91bmQ6ICNmZGZjNDA7XG59XG5cbi5tb2RhbC1hY3Rpb25zIC5hY3Rpb24uYmctNCB7XG4gIGJhY2tncm91bmQ6ICM4MWM4NDQ7XG59IiwiJGNvbG9ySVI6ICMwMDAwMDA7XG4kY29sb3JSOiAjZjgzMTU4O1xuJGNvbG9yTzogI2ZkODYyODtcbiRjb2xvcko6ICNmZGZjNDA7XG4kY29sb3JWOiAjODFjODQ0O1xuJGNvbG9yQjogIzQ3YjdmZjtcbiRjb2xvckk6ICM0NjM3OTQ7XG4kY29sb3JWSTogI2EyNGU4MDtcbiRjb2xvclVWOiAjZmZmZmZmO1xuIl19 */", "[_nghost-%COMP%]     .modal-computer .btn-secondary {\n  background-color: #f83158;\n  border-color: #f83158;\n}\n\n[_nghost-%COMP%]     .modal-computer .btn-primary {\n  background-color: #fd8628;\n  border-color: #fd8628;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL3BhcmFub2lhL21vZGFsLWNvbXB1dGVyLnNjc3MiLCIvVXNlcnMvcmFwaGFlbHlhbi93b3Jrc3BhY2UvUGVyc28vcnBnLWRpZ2l0YWwtdG9vbHMvc3JjL2FwcC9wYXJhbm9pYS92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFyYW5vaWEvbW9kYWwtY29tcHV0ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFpRCx5QkNEeEM7RURDbUUscUJDRG5FO0FDRVQ7O0FGQUE7RUFBK0MseUJDRHRDO0VEQ2lFLHFCQ0RqRTtBQ01UIiwiZmlsZSI6InNyYy9hcHAvcGFyYW5vaWEvbW9kYWwtY29tcHV0ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcblxuOmhvc3QgOjpuZy1kZWVwIC5tb2RhbC1jb21wdXRlciAuYnRuLXNlY29uZGFyeSB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvclI7IGJvcmRlci1jb2xvcjogJGNvbG9yUjsgfVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RhbC1jb21wdXRlciAuYnRuLXByaW1hcnkgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JPOyBib3JkZXItY29sb3I6ICRjb2xvck87IH1cbiIsIiRjb2xvcklSOiAjMDAwMDAwO1xuJGNvbG9yUjogI2Y4MzE1ODtcbiRjb2xvck86ICNmZDg2Mjg7XG4kY29sb3JKOiAjZmRmYzQwO1xuJGNvbG9yVjogIzgxYzg0NDtcbiRjb2xvckI6ICM0N2I3ZmY7XG4kY29sb3JJOiAjNDYzNzk0O1xuJGNvbG9yVkk6ICNhMjRlODA7XG4kY29sb3JVVjogI2ZmZmZmZjtcbiIsIjpob3N0IDo6bmctZGVlcCAubW9kYWwtY29tcHV0ZXIgLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgzMTU4O1xuICBib3JkZXItY29sb3I6ICNmODMxNTg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubW9kYWwtY29tcHV0ZXIgLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkODYyODtcbiAgYm9yZGVyLWNvbG9yOiAjZmQ4NjI4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParanoiaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paranoia',
                templateUrl: './paranoia.component.html',
                styleUrls: [
                    './paranoia.component.scss',
                    './modal-actions.scss',
                    './modal-computer.scss',
                ]
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _paranoia_service__WEBPACK_IMPORTED_MODULE_4__["ParanoiaService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paranoia/paranoia.module.ts":
/*!*********************************************!*\
  !*** ./src/app/paranoia/paranoia.module.ts ***!
  \*********************************************/
/*! exports provided: ParanoiaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParanoiaModule", function() { return ParanoiaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _paranoia_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paranoia-routing.module */ "./src/app/paranoia/paranoia-routing.module.ts");
/* harmony import */ var _paranoia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paranoia.component */ "./src/app/paranoia/paranoia.component.ts");
/* harmony import */ var _computer_computer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./computer/computer.component */ "./src/app/paranoia/computer/computer.component.ts");
/* harmony import */ var _ribbon_ribbon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ribbon/ribbon.component */ "./src/app/paranoia/ribbon/ribbon.component.ts");
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./character/character.component */ "./src/app/paranoia/character/character.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/paranoia/modal/modal.component.ts");
/* harmony import */ var _paranoia_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paranoia.service */ "./src/app/paranoia/paranoia.service.ts");
/* harmony import */ var _safe_style_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./safe-style.pipe */ "./src/app/paranoia/safe-style.pipe.ts");












class ParanoiaModule {
}
ParanoiaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ParanoiaModule });
ParanoiaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ParanoiaModule_Factory(t) { return new (t || ParanoiaModule)(); }, providers: [
        _paranoia_service__WEBPACK_IMPORTED_MODULE_9__["ParanoiaService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _paranoia_routing_module__WEBPACK_IMPORTED_MODULE_3__["ParanoiaRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParanoiaModule, { declarations: [_paranoia_component__WEBPACK_IMPORTED_MODULE_4__["ParanoiaComponent"],
        _computer_computer_component__WEBPACK_IMPORTED_MODULE_5__["ParanoiaComputerComponent"],
        _ribbon_ribbon_component__WEBPACK_IMPORTED_MODULE_6__["ParanoiaRibbonComponent"],
        _character_character_component__WEBPACK_IMPORTED_MODULE_7__["ParanoiaCharacterComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ParanoiaModalComponent"],
        _safe_style_pipe__WEBPACK_IMPORTED_MODULE_10__["SafeStylePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _paranoia_routing_module__WEBPACK_IMPORTED_MODULE_3__["ParanoiaRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParanoiaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _paranoia_component__WEBPACK_IMPORTED_MODULE_4__["ParanoiaComponent"],
                    _computer_computer_component__WEBPACK_IMPORTED_MODULE_5__["ParanoiaComputerComponent"],
                    _ribbon_ribbon_component__WEBPACK_IMPORTED_MODULE_6__["ParanoiaRibbonComponent"],
                    _character_character_component__WEBPACK_IMPORTED_MODULE_7__["ParanoiaCharacterComponent"],
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ParanoiaModalComponent"],
                    _safe_style_pipe__WEBPACK_IMPORTED_MODULE_10__["SafeStylePipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _paranoia_routing_module__WEBPACK_IMPORTED_MODULE_3__["ParanoiaRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [
                    _paranoia_service__WEBPACK_IMPORTED_MODULE_9__["ParanoiaService"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/paranoia/paranoia.service.ts":
/*!**********************************************!*\
  !*** ./src/app/paranoia/paranoia.service.ts ***!
  \**********************************************/
/*! exports provided: ParanoiaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParanoiaService", function() { return ParanoiaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class ParanoiaService {
    constructor(afs) {
        this.afs = afs;
    }
    initParanoiaLogs() {
        this.paranoiaLogsCollection = this.afs.collection('paranoia-logs', (ref) => {
            return ref.orderBy('timestamp', 'desc').limit(20);
        });
        this.paranoiaLogs = this.paranoiaLogsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            const date = new Date(data['timestamp']);
            const timestampStr = date.getDate() + '/' + (1 + date.getMonth()) + ' ' + date.getHours() + ':' + date.getMinutes();
            return Object.assign({ id, timestampStr }, data);
        })));
    }
    addParanoiaLog(wording, user) {
        this.paranoiaLogsCollection.add({
            uid: user.uid,
            timestamp: Date.now(),
            wording: wording,
        });
    }
    transformToAccreditationColor(wording, levelNumber) {
        const levelLetter = this.getLevelLetterFromNumber(levelNumber);
        return `<span class="text-level-${levelLetter}">${wording}</span>`;
    }
    getLevelLetterFromNumber(levelNumber) {
        const levels = ['R', 'O', 'J', 'V', 'B', 'I'];
        return levels[levelNumber - 1];
    }
}
ParanoiaService.ɵfac = function ParanoiaService_Factory(t) { return new (t || ParanoiaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ParanoiaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ParanoiaService, factory: ParanoiaService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParanoiaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paranoia/ribbon/ribbon.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/paranoia/ribbon/ribbon.component.ts ***!
  \*****************************************************/
/*! exports provided: ParanoiaRibbonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParanoiaRibbonComponent", function() { return ParanoiaRibbonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class ParanoiaRibbonComponent {
}
ParanoiaRibbonComponent.ɵfac = function ParanoiaRibbonComponent_Factory(t) { return new (t || ParanoiaRibbonComponent)(); };
ParanoiaRibbonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParanoiaRibbonComponent, selectors: [["app-paranoia-ribbon"]], inputs: { width: "width" }, ngContentSelectors: _c0, decls: 6, vars: 2, consts: [[1, "ribbon-container"], [1, "ribbon"], [1, "text-container"]], template: function ParanoiaRibbonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width);
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n}\n\n.ribbon-container[_ngcontent-%COMP%], .ribbon-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n}\n\n.ribbon-container[_ngcontent-%COMP%] {\n  background-color: #e1f5fe;\n}\n\n.ribbon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  left: -16px;\n  padding: 0 16px;\n}\n\n.ribbon[_ngcontent-%COMP%]:before, .ribbon[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -24px;\n  border: 24px solid #4B8FC3;\n  z-index: -1;\n}\n\n.ribbon[_ngcontent-%COMP%]:before {\n  left: -38px;\n  border-right-width: 24px;\n  border-left-color: transparent;\n  -webkit-transform: rotate(-16deg);\n}\n\n.ribbon[_ngcontent-%COMP%]:after {\n  right: -38px;\n  border-left-width: 24px;\n  border-right-color: transparent;\n  -webkit-transform: rotate(16deg);\n}\n\n.ribbon[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: block;\n  position: relative;\n  width: 100%;\n  left: -16px;\n  padding: 0 16px 16px;\n  background: #96BEDC;\n  text-align: center;\n  border-top-left-radius: calc(50% + 16px) 16px;\n  border-top-right-radius: calc(50% + 16px) 16px;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n  z-index: 1;\n}\n\n.ribbon[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 20px;\n  font-size: 14px;\n  color: #fff;\n  padding: 5px;\n  display: block;\n}\n\n.ribbon[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:before, .ribbon[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 16px;\n  left: 0;\n  bottom: 0;\n  box-shadow: inset 0 3px 3px rgba(0, 0, 0, 0.3);\n}\n\n.ribbon[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:before {\n  width: 100%;\n  background: #71A7D0;\n  border-top-left-radius: calc(50% + 16px) 16px;\n  border-top-right-radius: calc(50% + 16px) 16px;\n  z-index: 1;\n}\n\n.ribbon[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:after {\n  width: calc(100% - 32px);\n  left: 16px;\n  background: #e1f5fe;\n  border-top-left-radius: 50% 16px;\n  border-top-right-radius: 50% 16px;\n  z-index: 2;\n}\n\n.ribbon[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:before, .ribbon[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-style: solid;\n  bottom: -16px;\n  z-index: 0;\n}\n\n.ribbon[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:before {\n  left: 0;\n  border-color: transparent #71A7D0 transparent transparent;\n  border-width: 16px 16px 16px 0;\n}\n\n.ribbon[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:after {\n  right: 0;\n  border-color: transparent transparent transparent #71A7D0;\n  border-width: 16px 0 16px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVseWFuL3dvcmtzcGFjZS9QZXJzby9ycGctZGlnaXRhbC10b29scy9zcmMvYXBwL3BhcmFub2lhL3JpYmJvbi9yaWJib24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhcmFub2lhL3JpYmJvbi9yaWJib24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBOztFQUVFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSw4Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREFFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRUo7O0FERUE7O0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLDhDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBOztFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxPQUFBO0VBQ0EseURBQUE7RUFDQSw4QkFBQTtBQ0VGOztBREFBO0VBQ0UsUUFBQTtFQUNBLHlEQUFBO0VBQ0EsOEJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhcmFub2lhL3JpYmJvbi9yaWJib24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnJpYmJvbi1jb250YWluZXIsXG4ucmliYm9uLWNvbnRhaW5lciAqIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi5yaWJib24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjVmZTtcbn1cblxuLnJpYmJvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IC0xNnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbi5yaWJib246YmVmb3JlLCAucmliYm9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMjRweDtcbiAgYm9yZGVyOiAyNHB4IHNvbGlkICM0QjhGQzM7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucmliYm9uOmJlZm9yZSB7XG4gIGxlZnQ6IC0zOHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDI0cHg7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTZkZWcpO1xufVxuXG4ucmliYm9uOmFmdGVyIHtcbiAgcmlnaHQ6IC0zOHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogMjRweDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNmRlZyk7XG59XG5cbi5yaWJib24gLnRleHQtY29udGFpbmVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IC0xNnB4O1xuICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbiAgYmFja2dyb3VuZDogIzk2QkVEQztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKDUwJSArIDE2cHgpIDE2cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBjYWxjKDUwJSArIDE2cHgpIDE2cHg7XG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuNCk7XG4gIHotaW5kZXg6IDE7XG4gIHNwYW4ge1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLnJpYmJvbiAudGV4dC1jb250YWluZXI6YmVmb3JlLFxuLnJpYmJvbiAudGV4dC1jb250YWluZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE2cHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgLjMpO1xufVxuXG4ucmliYm9uIC50ZXh0LWNvbnRhaW5lcjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzcxQTdEMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogY2FsYyg1MCUgKyAxNnB4KSAxNnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogY2FsYyg1MCUgKyAxNnB4KSAxNnB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4ucmliYm9uIC50ZXh0LWNvbnRhaW5lcjphZnRlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgbGVmdDogMTZweDtcbiAgYmFja2dyb3VuZDogI2UxZjVmZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlIDE2cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCUgMTZweDtcbiAgei1pbmRleDogMjtcbn1cblxuLnJpYmJvbiBiOmJlZm9yZSxcbi5yaWJib24gYjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvdHRvbTogLTE2cHg7XG4gIHotaW5kZXg6IDA7XG59XG4ucmliYm9uIGI6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjNzFBN0QwIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBib3JkZXItd2lkdGg6IDE2cHggMTZweCAxNnB4IDA7XG59XG4ucmliYm9uIGI6YWZ0ZXIge1xuICByaWdodDogMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjNzFBN0QwO1xuICBib3JkZXItd2lkdGg6IDE2cHggMCAxNnB4IDE2cHg7XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnJpYmJvbi1jb250YWluZXIsXG4ucmliYm9uLWNvbnRhaW5lciAqIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi5yaWJib24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjVmZTtcbn1cblxuLnJpYmJvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IC0xNnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbi5yaWJib246YmVmb3JlLCAucmliYm9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMjRweDtcbiAgYm9yZGVyOiAyNHB4IHNvbGlkICM0QjhGQzM7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucmliYm9uOmJlZm9yZSB7XG4gIGxlZnQ6IC0zOHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDI0cHg7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTZkZWcpO1xufVxuXG4ucmliYm9uOmFmdGVyIHtcbiAgcmlnaHQ6IC0zOHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogMjRweDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNmRlZyk7XG59XG5cbi5yaWJib24gLnRleHQtY29udGFpbmVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IC0xNnB4O1xuICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbiAgYmFja2dyb3VuZDogIzk2QkVEQztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKDUwJSArIDE2cHgpIDE2cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBjYWxjKDUwJSArIDE2cHgpIDE2cHg7XG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAxO1xufVxuLnJpYmJvbiAudGV4dC1jb250YWluZXIgc3BhbiB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmliYm9uIC50ZXh0LWNvbnRhaW5lcjpiZWZvcmUsXG4ucmliYm9uIC50ZXh0LWNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTZweDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ucmliYm9uIC50ZXh0LWNvbnRhaW5lcjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzcxQTdEMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogY2FsYyg1MCUgKyAxNnB4KSAxNnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogY2FsYyg1MCUgKyAxNnB4KSAxNnB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4ucmliYm9uIC50ZXh0LWNvbnRhaW5lcjphZnRlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgbGVmdDogMTZweDtcbiAgYmFja2dyb3VuZDogI2UxZjVmZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlIDE2cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCUgMTZweDtcbiAgei1pbmRleDogMjtcbn1cblxuLnJpYmJvbiBiOmJlZm9yZSxcbi5yaWJib24gYjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvdHRvbTogLTE2cHg7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5yaWJib24gYjpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICM3MUE3RDAgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogMTZweCAxNnB4IDE2cHggMDtcbn1cblxuLnJpYmJvbiBiOmFmdGVyIHtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzcxQTdEMDtcbiAgYm9yZGVyLXdpZHRoOiAxNnB4IDAgMTZweCAxNnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParanoiaRibbonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paranoia-ribbon',
                templateUrl: './ribbon.component.html',
                styleUrls: ['./ribbon.component.scss']
            }]
    }], null, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/paranoia/safe-style.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/paranoia/safe-style.pipe.ts ***!
  \*********************************************/
/*! exports provided: SafeStylePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeStylePipe", function() { return SafeStylePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




class SafeStylePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustStyle(value);
    }
}
SafeStylePipe.ɵfac = function SafeStylePipe_Factory(t) { return new (t || SafeStylePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeStylePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeStyle", type: SafeStylePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeStylePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeStyle',
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=paranoia-paranoia-module-es2015.js.map