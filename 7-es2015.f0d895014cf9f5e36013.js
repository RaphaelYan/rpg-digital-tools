(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{EKgk:function(e,t,n){"use strict";n.r(t),n.d(t,"DdBuilderModule",(function(){return P}));var o=n("ofXK"),i=n("3Pt+"),s=n("tyNb");const c=[{label:"Demi-elfe",bonus:"+2cha, +1 \xe0 deux autres carac",racial:1},{label:"Demi-orque",bonus:"+2for, +1con",racial:2},{label:"Drak\xe9ide",bonus:"+2for, +1cha",racial:3},{label:"Elfe",subraces:[{label:"Elfe des bois",bonus:"+2dex, +1sag",racial:4},{label:"Haut-elfe",bonus:"+2dex, +1int",racial:5}]},{label:"Gnome",subraces:[{label:"Gnome des for\xeats",bonus:"+2int, +1dex",racial:6},{label:"Gnome des roches",bonus:"+2int, +1con",racial:7}]},{label:"Halfelin",subraces:[{label:"Halfelin corpulent",bonus:"+2dex, +1con",racial:8},{label:"Halfelin pieds-l\xe9ger",bonus:"+2dex, +1cha",racial:9}]},{label:"Humain",subraces:[{label:"Humain",bonus:"+1 all",racial:10},{label:"Humain (variante)",bonus:"+1 \xe0 deux carac, 1 comp\xe9tence maitris\xe9, 1 don",racial:14}]},{label:"Nain",subraces:[{label:"Nain des collines",bonus:"+2con, +1sag",racial:11},{label:"Nain des montagnes",bonus:"+2con, +2for",racial:12}]},{label:"Aasimar",subraces:[{label:"Protecteur",bonus:"+2cha, +1sag",racial:21},{label:"Fl\xe9au",bonus:"+2cha, +1con",racial:22},{label:"D\xe9chu",bonus:"+2cha, +1for",racial:23}]},{label:"Tieffelin",bonus:"+2cha, +1int",racial:13},{label:"Firbolg",bonus:"+2sag, +1for",racial:15},{label:"Goliath",bonus:"+2for, +1con",racial:16},{label:"Kenku",bonus:"+2dex, +1sag",racial:17},{label:"Tabaxi",bonus:"+2dex, +1cha",racial:18},{label:"Tortle",bonus:"+2for, +1sag",racial:19},{label:"Triton",bonus:"+1for, +1con, +1cha",racial:20},{label:"Kitsune Zenko",bonus:"+2dex, +1sag",racial:4}],a=[{label:"Force",score:8,racial:0,value:8,mod:-1,id:1,bonus:0,tooltip:"str"},{label:"Dext\xe9rit\xe9",score:8,racial:0,value:8,mod:-1,id:2,bonus:0,tooltip:"dex"},{label:"Constitution",score:8,racial:0,value:8,mod:-1,id:3,bonus:0,tooltip:"con"},{label:"Intelligence",score:8,racial:0,value:8,mod:-1,id:4,bonus:0,tooltip:"int"},{label:"Sagesse",score:8,racial:0,value:8,mod:-1,id:5,bonus:0,tooltip:"sag"},{label:"Charisme",score:8,racial:0,value:8,mod:-1,id:6,bonus:0,tooltip:"cha"}],l=[{id:1,bonus:[{id:6,bonus:2},{others:2,except:6}]},{id:2,bonus:[{id:1,bonus:2},{id:3,bonus:1}]},{id:3,bonus:[{id:1,bonus:2},{id:6,bonus:1}]},{id:4,bonus:[{id:2,bonus:2},{id:5,bonus:1}]},{id:5,bonus:[{id:2,bonus:2},{id:4,bonus:1}]},{id:6,bonus:[{id:4,bonus:2},{id:2,bonus:1}]},{id:7,bonus:[{id:4,bonus:2},{id:3,bonus:1}]},{id:8,bonus:[{id:2,bonus:2},{id:3,bonus:1}]},{id:9,bonus:[{id:2,bonus:2},{id:6,bonus:1}]},{id:10,bonus:[{id:1,bonus:1},{id:2,bonus:1},{id:3,bonus:1},{id:4,bonus:1},{id:5,bonus:1},{id:6,bonus:1}]},{id:11,bonus:[{id:3,bonus:2},{id:5,bonus:1}]},{id:12,bonus:[{id:3,bonus:2},{id:1,bonus:2}]},{id:13,bonus:[{id:6,bonus:2},{id:4,bonus:1}]},{id:14,bonus:[{others:2}]},{id:15,bonus:[{id:5,bonus:2},{id:1,bonus:1}]},{id:16,bonus:[{id:1,bonus:2},{id:3,bonus:1}]},{id:17,bonus:[{id:2,bonus:2},{id:5,bonus:1}]},{id:18,bonus:[{id:2,bonus:2},{id:6,bonus:1}]},{id:19,bonus:[{id:1,bonus:2},{id:5,bonus:1}]},{id:20,bonus:[{id:1,bonus:1},{id:3,bonus:1},{id:6,bonus:1}]},{id:21,bonus:[{id:6,bonus:2},{id:5,bonus:1}]},{id:22,bonus:[{id:6,bonus:2},{id:3,bonus:1}]},{id:23,bonus:[{id:6,bonus:2},{id:1,bonus:1}]}];var b=n("fXoL");function r(e,t){if(1&e){const e=b.Qb();b.Pb(0,"option",25),b.Xb("click",(function(){b.ic(e);const n=t.$implicit;return b.ac(3).selectRace(n)})),b.pc(1),b.Ob()}if(2&e){const e=t.$implicit;b.dc("value",e.racial),b.zb(1),b.sc("",e.label," (",e.bonus,")")}}function d(e,t){if(1&e&&(b.Pb(0,"optgroup"),b.nc(1,r,2,3,"option",24),b.Ob()),2&e){const e=b.ac().$implicit;b.Ab("label",e.label),b.zb(1),b.dc("ngForOf",e.subraces)}}function u(e,t){if(1&e){const e=b.Qb();b.Pb(0,"option",25),b.Xb("click",(function(){b.ic(e);const t=b.ac().$implicit;return b.ac().selectRace(t)})),b.pc(1),b.Ob()}if(2&e){const e=b.ac().$implicit;b.dc("value",e.racial),b.zb(1),b.sc("",e.label," (",e.bonus,")")}}function p(e,t){if(1&e&&(b.nc(0,d,2,2,"optgroup",22),b.nc(1,u,2,3,"option",23)),2&e){const e=t.$implicit;b.dc("ngIf",e.subraces),b.zb(1),b.dc("ngIf",!e.subraces)}}function h(e,t){if(1&e){const e=b.Qb();b.Pb(0,"div",31),b.Pb(1,"label"),b.Pb(2,"input",32),b.Xb("change",(function(){b.ic(e);const t=b.ac().$implicit;return b.ac().chooseBonus(t)})),b.Ob(),b.Nb(3,"span",33),b.pc(4," Bonus racial "),b.Ob(),b.Ob()}if(2&e){const e=b.ac().$implicit,t=b.ac();b.zb(1),b.Bb(e.bonus?"black-text text-bold":""),b.zb(1),b.dc("disabled",0===e.bonus&&t.othersBonus<=0)}}function g(e,t){if(1&e){const e=b.Qb();b.Pb(0,"tr"),b.Pb(1,"td"),b.pc(2),b.Pb(3,"i",26),b.pc(4,"help"),b.Ob(),b.nc(5,h,5,4,"div",27),b.Ob(),b.Pb(6,"td"),b.pc(7),b.Ob(),b.Pb(8,"td"),b.pc(9),b.Ob(),b.Pb(10,"td"),b.Pb(11,"button",28),b.Xb("click",(function(){b.ic(e);const n=t.$implicit;return b.ac().add(n)})),b.Pb(12,"i",29),b.pc(13,"add"),b.Ob(),b.Ob(),b.Pb(14,"button",30),b.Xb("click",(function(){b.ic(e);const n=t.$implicit;return b.ac().remove(n)})),b.Pb(15,"i",29),b.pc(16,"remove"),b.Ob(),b.Ob(),b.Ob(),b.Ob()}if(2&e){const e=t.$implicit,n=t.index,o=b.ac();b.Bb(n%2==1?"blue lighten-4":""),b.zb(1),b.Eb("text-bold","points"===o.mode&&15===e.score),b.zb(1),b.rc(" ",e.label," "),b.zb(1),b.Ab("title",o.tooltips[e.tooltip]),b.zb(2),b.dc("ngIf",o.raceWithBonus&&o.exceptBonus-1!==n),b.zb(1),b.Eb("text-bold","points"===o.mode&&15===e.score),b.zb(1),b.qc(e.value),b.zb(1),b.Eb("text-bold","points"===o.mode&&15===e.score),b.zb(1),b.qc(e.mod),b.zb(2),b.dc("disabled","points"===o.mode&&15===e.score||"points"===o.mode&&o.points<o.cost(e.score,e.score+1)),b.zb(3),b.dc("disabled","points"===o.mode&&8===e.score)}}function f(e,t){if(1&e&&(b.Pb(0,"div",34),b.pc(1),b.Ob()),2&e){const e=b.ac();b.zb(1),b.rc("Points : ",e.points,"")}}const O=[{path:"",component:(()=>{class e{constructor(){this.mode="points",this.races=c,this.table=JSON.parse(JSON.stringify(a)),this.points=27,this.totalMods=-6,this.othersBonus=0,this.raceWithBonus=!1,this.exceptBonus=0,this.tooltips={str:"Puissance physique, aptitude athl\xe9tique naturelle",dex:"Agilit\xe9, r\xe9flexes, \xe9quilibre",con:"Sant\xe9, endurance, force vitale",int:"Acuit\xe9 mentale, raisonnement, m\xe9moire",sag:"Perception, intuition, perspicacit\xe9",cha:"Force de personnalit\xe9, \xe9loquence, leadership"}}ngAfterViewInit(){$("#select-race").change(this.onSelectRace.bind(this)),$('[data-toggle="tooltip"]').tooltip()}onSelectRace(e){this.resetOthersBonus();const t=l[e.target.value-1].bonus;for(let n=0;n<6;n++)this.table[n].racial=0;for(let n=0;n<t.length;n++){const e=t[n];e.others?(this.raceWithBonus=!0,this.othersBonus=e.others,this.exceptBonus=e.except):this.table[e.id-1].racial=e.bonus}for(let n=0;n<6;n++)this.valueChanged(this.table[n])}between(e,t,n){return e>=t&&e<=n}cost(e,t){return this.between(e,8,13)&&this.between(t,8,13)?1:this.between(e,13,15)&&this.between(t,13,15)?2:void 0}add(e){if("free"===this.mode)return e.score+=1,this.valueChanged(e);if(e.score>=15)return;const t=this.cost(e.score,e.score+1);this.points<t||(this.points-=t,e.score+=1,this.valueChanged(e))}remove(e){if("free"===this.mode)return e.score-=1,this.valueChanged(e);e.score<=8||(this.points+=this.cost(e.score,e.score-1),e.score-=1,this.valueChanged(e))}valueChanged(e){const t=e.score+e.racial+e.bonus;e.value=t,e.mod=Math.floor(t/2-5),this.calcTotalMod()}calcTotalMod(){this.totalMods=0;for(let e=0;e<6;e++)this.totalMods+=this.table[e].mod}resetOthersBonus(){$(".other-bonus").attr("checked",!1),this.raceWithBonus=!1,this.othersBonus=0,this.exceptBonus=0;for(let e=0;e<6;e++)this.table[e].bonus=0}chooseBonus(e){0===e.bonus&&this.othersBonus<=0||(e.bonus?(e.bonus=0,this.othersBonus+=1,this.valueChanged(e)):(e.bonus=1,this.othersBonus-=1,this.valueChanged(e)))}reset(){this.table=JSON.parse(JSON.stringify(a)),this.resetOthersBonus(),$("#select-race").val("")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Gb({type:e,selectors:[["app-dd-builder"]],decls:34,vars:5,consts:[[1,"container"],[1,"row"],[1,"center-align","underlined-title"],[1,"input-field","col-6"],["id","select-race",1,"custom-select"],["value","","disabled","","selected",""],["ngFor","",3,"ngForOf"],[1,"col-6","total-mods"],[1,"center-align"],[1,"carac-table","bordered","centered","col-12"],[1,"light-blue"],["data-field","carac"],["data-field","score"],["data-field","mod"],["data-field","actions"],[1,"light-blue","lighten-5"],[3,"class",4,"ngFor","ngForOf"],[1,"text-right","col-6"],[1,"custom-select","mode",3,"ngModel","ngModelChange"],["value","points","selected",""],["value","free"],["class","center-align col-6 points",4,"ngIf"],[4,"ngIf"],[3,"value","click",4,"ngIf"],[3,"value","click",4,"ngFor","ngForOf"],[3,"value","click"],["data-placement","right","data-toggle","tooltip",1,"material-icons","tooltipped"],["class","switch",4,"ngIf"],[1,"btn-floating","waves-effect","waves-light","btn","green",3,"disabled","click"],[1,"material-icons","left"],[1,"btn-floating","waves-effect","waves-light","btn","red",3,"disabled","click"],[1,"switch"],["type","checkbox",1,"other-bonus",3,"disabled","change"],[1,"lever"],[1,"center-align","col-6","points"]],template:function(e,t){1&e&&(b.Pb(0,"div",0),b.Pb(1,"div",1),b.Pb(2,"h3",2),b.pc(3,"D&D 5 - Carac builder"),b.Ob(),b.Ob(),b.Pb(4,"div",1),b.Pb(5,"div",3),b.Pb(6,"select",4),b.Pb(7,"option",5),b.pc(8,"S\xe9lectionnez votre race"),b.Ob(),b.nc(9,p,2,2,"ng-template",6),b.Ob(),b.Ob(),b.Pb(10,"div",7),b.Pb(11,"h5",8),b.pc(12),b.Ob(),b.Ob(),b.Ob(),b.Pb(13,"div",1),b.Pb(14,"table",9),b.Pb(15,"thead",10),b.Pb(16,"tr"),b.Pb(17,"th",11),b.pc(18,"Caract\xe9ristiques"),b.Ob(),b.Pb(19,"th",12),b.pc(20,"Score"),b.Ob(),b.Pb(21,"th",13),b.pc(22,"Modificateur"),b.Ob(),b.Nb(23,"th",14),b.Ob(),b.Ob(),b.Pb(24,"tbody",15),b.nc(25,g,17,16,"tr",16),b.Ob(),b.Ob(),b.Ob(),b.Pb(26,"div",1),b.Pb(27,"div",17),b.Pb(28,"select",18),b.Xb("ngModelChange",(function(e){return t.mode=e}))("ngModelChange",(function(){return t.reset()})),b.Pb(29,"option",19),b.pc(30,"Mode par points (27)"),b.Ob(),b.Pb(31,"option",20),b.pc(32,"Libre"),b.Ob(),b.Ob(),b.Ob(),b.nc(33,f,2,1,"div",21),b.Ob(),b.Ob()),2&e&&(b.zb(9),b.dc("ngForOf",t.races),b.zb(3),b.rc("Total modificateurs : ",t.totalMods,""),b.zb(13),b.dc("ngForOf",t.table),b.zb(3),b.dc("ngModel",t.mode),b.zb(5),b.dc("ngIf","points"===t.mode))},directives:[i.g,i.j,o.i,i.i,i.e,i.f,o.j],styles:[".carac-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-radius:0}.dropdown-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#03a9f4}.select-dropdown[_ngcontent-%COMP%]   li.optgroup[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#81d4fa}.select-dropdown[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#01579b}.underlined-title[_ngcontent-%COMP%]{border-bottom:2px solid;border-color:#01579b;margin-left:auto;margin-right:auto;width:50%}.total-mods[_ngcontent-%COMP%]{margin-top:15px}.text-bold[_ngcontent-%COMP%]{font-weight:700}.tooltipped[_ngcontent-%COMP%]{cursor:pointer}table.centered[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.centered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:15px 5px;display:table-cell;vertical-align:middle}.btn-floating[_ngcontent-%COMP%]{border-radius:50%;width:37px;height:37px;line-height:37px;padding:0}.btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:37px}.btn-floating[_ngcontent-%COMP%]:disabled{background-color:#dfdfdf!important;box-shadow:none;color:#9f9f9f!important;cursor:default}.green[_ngcontent-%COMP%]{background-color:#4caf50!important}.red[_ngcontent-%COMP%]{background-color:#f44336!important}select[_ngcontent-%COMP%]{margin-top:25px}.points[_ngcontent-%COMP%]{font-size:2.28rem}.custom-select.mode[_ngcontent-%COMP%]{margin-top:10px}"]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=b.Kb({type:e}),e.\u0275inj=b.Jb({factory:function(t){return new(t||e)},imports:[[s.e.forChild(O)],s.e]}),e})(),P=(()=>{class e{}return e.\u0275mod=b.Kb({type:e}),e.\u0275inj=b.Jb({factory:function(t){return new(t||e)},imports:[[o.c,i.c,m]]}),e})()}}]);