(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{JHeh:function(t,e,n){"use strict";n.r(e),n.d(e,"ProbaModule",(function(){return w}));var c=n("ofXK"),b=n("3Pt+"),o=n("tyNb"),l=n("fXoL");function a(t,e){if(1&t&&(l.Rb(0,"th"),l.rc(1),l.Qb()),2&t){const t=e.$implicit,n=e.index,c=l.cc(2);l.oc("width: ",0===n?5:95/c.tableNormal.head.length,"%;"),l.zb(1),l.sc(t.label)}}function i(t,e){if(1&t&&(l.Rb(0,"th",20),l.rc(1),l.Qb()),2&t){const t=l.cc().$implicit;l.zb(1),l.sc(t.label)}}function r(t,e){if(1&t&&(l.Rb(0,"td"),l.rc(1),l.Qb()),2&t){const t=l.cc().$implicit;l.zb(1),l.tc(" ",t.label," ")}}function f(t,e){if(1&t&&(l.pc(0,i,2,1,"th",18),l.pc(1,r,2,1,"td",19)),2&t){const t=e.index;l.fc("ngIf",0===t),l.zb(1),l.fc("ngIf",0!==t)}}function d(t,e){if(1&t&&(l.Rb(0,"tr"),l.pc(1,f,2,2,"ng-template",17),l.Qb()),2&t){const t=e.$implicit;l.zb(1),l.fc("ngForOf",t)}}function s(t,e){if(1&t&&(l.Rb(0,"table",14),l.Rb(1,"thead"),l.Rb(2,"tr"),l.pc(3,a,2,4,"th",15),l.Qb(),l.Qb(),l.Rb(4,"tbody"),l.pc(5,d,2,1,"tr",16),l.Qb(),l.Qb()),2&t){const t=l.cc();l.zb(3),l.fc("ngForOf",t.tableNormal.head),l.zb(2),l.fc("ngForOf",t.tableNormal.body)}}function h(t,e){if(1&t&&(l.Rb(0,"th"),l.rc(1),l.Qb()),2&t){const t=e.$implicit,n=e.index,c=l.cc(2);l.oc("width: ",0===n?5:95/c.tableNormal.head.length,"%;"),l.zb(1),l.sc(t.label)}}function p(t,e){if(1&t&&(l.Rb(0,"th",20),l.rc(1),l.Qb()),2&t){const t=l.cc().$implicit;l.zb(1),l.sc(t.label)}}function g(t,e){if(1&t&&(l.Rb(0,"td"),l.rc(1),l.Qb()),2&t){const t=l.cc().$implicit;l.zb(1),l.tc(" ",t.label," ")}}function u(t,e){if(1&t&&(l.pc(0,p,2,1,"th",18),l.pc(1,g,2,1,"td",19)),2&t){const t=e.index;l.fc("ngIf",0===t),l.zb(1),l.fc("ngIf",0!==t)}}function m(t,e){if(1&t&&(l.Rb(0,"tr"),l.pc(1,u,2,2,"ng-template",17),l.Qb()),2&t){const t=e.$implicit;l.zb(1),l.fc("ngForOf",t)}}function R(t,e){if(1&t&&(l.Rb(0,"table",14),l.Rb(1,"thead"),l.Rb(2,"tr"),l.pc(3,h,2,4,"th",15),l.Qb(),l.Qb(),l.Rb(4,"tbody"),l.pc(5,m,2,1,"tr",16),l.Qb(),l.Qb()),2&t){const t=l.cc();l.zb(3),l.fc("ngForOf",t.tableAdvantage.head),l.zb(2),l.fc("ngForOf",t.tableAdvantage.body)}}function Q(t,e){if(1&t&&(l.Rb(0,"th"),l.rc(1),l.Qb()),2&t){const t=e.$implicit,n=e.index,c=l.cc(2);l.oc("width: ",0===n?5:95/c.tableNormal.head.length,"%;"),l.zb(1),l.sc(t.label)}}function v(t,e){if(1&t&&(l.Rb(0,"th",20),l.rc(1),l.Qb()),2&t){const t=l.cc().$implicit;l.zb(1),l.sc(t.label)}}function y(t,e){if(1&t&&(l.Rb(0,"td"),l.rc(1),l.Qb()),2&t){const t=l.cc().$implicit;l.zb(1),l.tc(" ",t.label," ")}}function z(t,e){if(1&t&&(l.pc(0,v,2,1,"th",18),l.pc(1,y,2,1,"td",19)),2&t){const t=e.index;l.fc("ngIf",0===t),l.zb(1),l.fc("ngIf",0!==t)}}function F(t,e){if(1&t&&(l.Rb(0,"tr"),l.pc(1,z,2,2,"ng-template",17),l.Qb()),2&t){const t=e.$implicit;l.zb(1),l.fc("ngForOf",t)}}function M(t,e){if(1&t&&(l.Rb(0,"table",14),l.Rb(1,"thead"),l.Rb(2,"tr"),l.pc(3,Q,2,4,"th",15),l.Qb(),l.Qb(),l.Rb(4,"tbody"),l.pc(5,F,2,1,"tr",16),l.Qb(),l.Qb()),2&t){const t=l.cc();l.zb(3),l.fc("ngForOf",t.tableDisadvantage.head),l.zb(2),l.fc("ngForOf",t.tableDisadvantage.body)}}const T=[{path:"",component:(()=>{class t{constructor(){this.playerFrom=-1,this.playerTo=7,this.dcFrom=8,this.dcTo=20,this.updateTables()}updateTables(){this.tableNormal=null,this.tableAdvantage=null,this.tableDisadvantage=null,setTimeout(()=>{this.tableNormal=this.buildTable(),this.tableAdvantage=this.buildTable("advantage"),this.tableDisadvantage=this.buildTable("disadvantage")})}buildTable(t=null){const e={head:[{label:"you \\ DC"}],body:[]};for(let n=this.dcFrom;n<=this.dcTo;n++)e.head.push({label:n});for(let n=this.playerFrom;n<=this.playerTo;n++){const c=[{label:n}];for(let e=this.dcFrom;e<=this.dcTo;e++)c.push({label:this.calcProba(n,e,t)});e.body.push(c)}return e}calcProba(t,e,n){const c=this.makeRolls(1e5,t,e,n)/1e3;return c>=100||c<=0?"":parseFloat(c).toFixed(1)+"%"}makeRolls(t,e,n,c){let b=0;for(let o=0;o<t;o++){let t=0;if("advantage"===c){const e=this.rand(1,20),n=this.rand(1,20);t=e>n?e:n}else if("disadvantage"===c){const e=this.rand(1,20),n=this.rand(1,20);t=e>n?n:e}else t=this.rand(1,20);t+=+e,t>n&&b++}return b}rand(t,e){return Math.floor(Math.random()*(e-t+1))+t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Gb({type:t,selectors:[["app-proba"]],decls:32,vars:7,consts:[[1,"container"],[1,"form-group","row"],["for","player-from",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["id","player-from",1,"form-control",3,"ngModel","ngModelChange"],["for","player-to",1,"col-sm-2","col-form-label"],["id","player-to",1,"form-control",3,"ngModel","ngModelChange"],["for","dc-from",1,"col-sm-2","col-form-label"],["id","dc-from",1,"form-control",3,"ngModel","ngModelChange"],["for","dc-to",1,"col-sm-2","col-form-label"],["id","dc-to",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary","mb-2",3,"click"],[1,"center-align"],["class","table table-bordered table-hover table-sm",4,"ngIf"],[1,"table","table-bordered","table-hover","table-sm"],[3,"style",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["ngFor","",3,"ngForOf"],["class","text-bold text-center",4,"ngIf"],[4,"ngIf"],[1,"text-bold","text-center"]],template:function(t,e){1&t&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"label",2),l.rc(3,"PLAYER FROM"),l.Qb(),l.Rb(4,"div",3),l.Rb(5,"input",4),l.Zb("ngModelChange",(function(t){return e.playerFrom=t})),l.Qb(),l.Qb(),l.Qb(),l.Rb(6,"div",1),l.Rb(7,"label",5),l.rc(8,"PLAYER TO"),l.Qb(),l.Rb(9,"div",3),l.Rb(10,"input",6),l.Zb("ngModelChange",(function(t){return e.playerTo=t})),l.Qb(),l.Qb(),l.Qb(),l.Rb(11,"div",1),l.Rb(12,"label",7),l.rc(13,"DC FROM"),l.Qb(),l.Rb(14,"div",3),l.Rb(15,"input",8),l.Zb("ngModelChange",(function(t){return e.dcFrom=t})),l.Qb(),l.Qb(),l.Qb(),l.Rb(16,"div",1),l.Rb(17,"label",9),l.rc(18,"DC TO"),l.Qb(),l.Rb(19,"div",3),l.Rb(20,"input",10),l.Zb("ngModelChange",(function(t){return e.dcTo=t})),l.Qb(),l.Qb(),l.Qb(),l.Rb(21,"button",11),l.Zb("click",(function(){return e.updateTables()})),l.rc(22,"Redo tables"),l.Qb(),l.Rb(23,"h5",12),l.rc(24,"Normal"),l.Qb(),l.pc(25,s,6,2,"table",13),l.Rb(26,"h5",12),l.rc(27,"Avec Avantage"),l.Qb(),l.pc(28,R,6,2,"table",13),l.Rb(29,"h5",12),l.rc(30,"Avec D\xe9savantage"),l.Qb(),l.pc(31,M,6,2,"table",13),l.Qb()),2&t&&(l.zb(5),l.fc("ngModel",e.playerFrom),l.zb(5),l.fc("ngModel",e.playerTo),l.zb(5),l.fc("ngModel",e.dcFrom),l.zb(5),l.fc("ngModel",e.dcTo),l.zb(5),l.fc("ngIf",e.tableNormal),l.zb(3),l.fc("ngIf",e.tableAdvantage),l.zb(3),l.fc("ngIf",e.tableDisadvantage))},directives:[b.b,b.e,b.f,c.j,c.i],styles:["table[_ngcontent-%COMP%]{font-size:14px}"]}),t})()}];let O=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},imports:[[o.f.forChild(T)],o.f]}),t})(),w=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},imports:[[c.c,O,b.c]]}),t})()}}]);