(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{JHeh:function(t,e,n){"use strict";n.r(e),n.d(e,"ProbaModule",(function(){return T}));var b=n("ofXK"),c=n("3Pt+"),o=n("tyNb"),l=n("fXoL");function a(t,e){if(1&t&&(l.Sb(0,"th"),l.Bc(1),l.Rb()),2&t){const t=e.$implicit,n=e.index,b=l.ec(2);l.xc("width: ",0===n?5:95/b.tableNormal.head.length,"%;"),l.zb(1),l.Cc(t.label)}}function i(t,e){if(1&t&&(l.Sb(0,"th",20),l.Bc(1),l.Rb()),2&t){const t=l.ec().$implicit;l.zb(1),l.Cc(t.label)}}function r(t,e){if(1&t&&(l.Sb(0,"td"),l.Bc(1),l.Rb()),2&t){const t=l.ec().$implicit;l.zb(1),l.Dc(" ",t.label," ")}}function d(t,e){if(1&t&&(l.zc(0,i,2,1,"th",18),l.zc(1,r,2,1,"td",19)),2&t){const t=e.index;l.kc("ngIf",0===t),l.zb(1),l.kc("ngIf",0!==t)}}function s(t,e){if(1&t&&(l.Sb(0,"tr"),l.zc(1,d,2,2,"ng-template",17),l.Rb()),2&t){const t=e.$implicit;l.zb(1),l.kc("ngForOf",t)}}function f(t,e){if(1&t&&(l.Sb(0,"table",14),l.Sb(1,"thead"),l.Sb(2,"tr"),l.zc(3,a,2,4,"th",15),l.Rb(),l.Rb(),l.Sb(4,"tbody"),l.zc(5,s,2,1,"tr",16),l.Rb(),l.Rb()),2&t){const t=l.ec();l.zb(3),l.kc("ngForOf",t.tableNormal.head),l.zb(2),l.kc("ngForOf",t.tableNormal.body)}}function h(t,e){if(1&t&&(l.Sb(0,"th"),l.Bc(1),l.Rb()),2&t){const t=e.$implicit,n=e.index,b=l.ec(2);l.xc("width: ",0===n?5:95/b.tableNormal.head.length,"%;"),l.zb(1),l.Cc(t.label)}}function g(t,e){if(1&t&&(l.Sb(0,"th",20),l.Bc(1),l.Rb()),2&t){const t=l.ec().$implicit;l.zb(1),l.Cc(t.label)}}function u(t,e){if(1&t&&(l.Sb(0,"td"),l.Bc(1),l.Rb()),2&t){const t=l.ec().$implicit;l.zb(1),l.Dc(" ",t.label," ")}}function m(t,e){if(1&t&&(l.zc(0,g,2,1,"th",18),l.zc(1,u,2,1,"td",19)),2&t){const t=e.index;l.kc("ngIf",0===t),l.zb(1),l.kc("ngIf",0!==t)}}function p(t,e){if(1&t&&(l.Sb(0,"tr"),l.zc(1,m,2,2,"ng-template",17),l.Rb()),2&t){const t=e.$implicit;l.zb(1),l.kc("ngForOf",t)}}function R(t,e){if(1&t&&(l.Sb(0,"table",14),l.Sb(1,"thead"),l.Sb(2,"tr"),l.zc(3,h,2,4,"th",15),l.Rb(),l.Rb(),l.Sb(4,"tbody"),l.zc(5,p,2,1,"tr",16),l.Rb(),l.Rb()),2&t){const t=l.ec();l.zb(3),l.kc("ngForOf",t.tableAdvantage.head),l.zb(2),l.kc("ngForOf",t.tableAdvantage.body)}}function z(t,e){if(1&t&&(l.Sb(0,"th"),l.Bc(1),l.Rb()),2&t){const t=e.$implicit,n=e.index,b=l.ec(2);l.xc("width: ",0===n?5:95/b.tableNormal.head.length,"%;"),l.zb(1),l.Cc(t.label)}}function S(t,e){if(1&t&&(l.Sb(0,"th",20),l.Bc(1),l.Rb()),2&t){const t=l.ec().$implicit;l.zb(1),l.Cc(t.label)}}function v(t,e){if(1&t&&(l.Sb(0,"td"),l.Bc(1),l.Rb()),2&t){const t=l.ec().$implicit;l.zb(1),l.Dc(" ",t.label," ")}}function y(t,e){if(1&t&&(l.zc(0,S,2,1,"th",18),l.zc(1,v,2,1,"td",19)),2&t){const t=e.index;l.kc("ngIf",0===t),l.zb(1),l.kc("ngIf",0!==t)}}function k(t,e){if(1&t&&(l.Sb(0,"tr"),l.zc(1,y,2,2,"ng-template",17),l.Rb()),2&t){const t=e.$implicit;l.zb(1),l.kc("ngForOf",t)}}function F(t,e){if(1&t&&(l.Sb(0,"table",14),l.Sb(1,"thead"),l.Sb(2,"tr"),l.zc(3,z,2,4,"th",15),l.Rb(),l.Rb(),l.Sb(4,"tbody"),l.zc(5,k,2,1,"tr",16),l.Rb(),l.Rb()),2&t){const t=l.ec();l.zb(3),l.kc("ngForOf",t.tableDisadvantage.head),l.zb(2),l.kc("ngForOf",t.tableDisadvantage.body)}}const M=[{path:"",component:(()=>{class t{constructor(){this.playerFrom=-1,this.playerTo=7,this.dcFrom=10,this.dcTo=20,this.updateTables()}updateTables(){this.tableNormal=null,this.tableAdvantage=null,this.tableDisadvantage=null,setTimeout(()=>{this.tableNormal=this.buildTable(),this.tableAdvantage=this.buildTable("advantage"),this.tableDisadvantage=this.buildTable("disadvantage")})}buildTable(t=null){const e={head:[{label:"you \\ DC"}],body:[]};for(let n=this.dcFrom;n<=this.dcTo;n++)e.head.push({label:n});for(let n=this.playerFrom;n<=this.playerTo;n++){const b=[{label:n}];for(let e=this.dcFrom;e<=this.dcTo;e++)b.push({label:this.calcProba(n,e,t)});e.body.push(b)}return e}calcProba(t,e,n){const b=this.makeRolls(1e5,t,e,n)/1e3;return b>=100||b<=0?"":parseFloat(b).toFixed(1)+"%"}makeRolls(t,e,n,b){let c=0;for(let o=0;o<t;o++){let t=0;if("advantage"===b){const e=this.rand(1,20),n=this.rand(1,20);t=e>n?e:n}else if("disadvantage"===b){const e=this.rand(1,20),n=this.rand(1,20);t=e>n?n:e}else t=this.rand(1,20);t+=+e,t>n&&c++}return c}rand(t,e){return Math.floor(Math.random()*(e-t+1))+t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Hb({type:t,selectors:[["app-proba"]],decls:32,vars:7,consts:[[1,"container"],[1,"form-group","row"],["for","player-from",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["id","player-from",1,"form-control",3,"ngModel","ngModelChange"],["for","player-to",1,"col-sm-2","col-form-label"],["id","player-to",1,"form-control",3,"ngModel","ngModelChange"],["for","dc-from",1,"col-sm-2","col-form-label"],["id","dc-from",1,"form-control",3,"ngModel","ngModelChange"],["for","dc-to",1,"col-sm-2","col-form-label"],["id","dc-to",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary","mb-2",3,"click"],[1,"center-align"],["class","table table-bordered table-hover table-sm",4,"ngIf"],[1,"table","table-bordered","table-hover","table-sm"],[3,"style",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["ngFor","",3,"ngForOf"],["class","text-bold text-center",4,"ngIf"],[4,"ngIf"],[1,"text-bold","text-center"]],template:function(t,e){1&t&&(l.Sb(0,"div",0),l.Sb(1,"div",1),l.Sb(2,"label",2),l.Bc(3,"PLAYER FROM"),l.Rb(),l.Sb(4,"div",3),l.Sb(5,"input",4),l.ac("ngModelChange",(function(t){return e.playerFrom=t})),l.Rb(),l.Rb(),l.Rb(),l.Sb(6,"div",1),l.Sb(7,"label",5),l.Bc(8,"PLAYER TO"),l.Rb(),l.Sb(9,"div",3),l.Sb(10,"input",6),l.ac("ngModelChange",(function(t){return e.playerTo=t})),l.Rb(),l.Rb(),l.Rb(),l.Sb(11,"div",1),l.Sb(12,"label",7),l.Bc(13,"DC FROM"),l.Rb(),l.Sb(14,"div",3),l.Sb(15,"input",8),l.ac("ngModelChange",(function(t){return e.dcFrom=t})),l.Rb(),l.Rb(),l.Rb(),l.Sb(16,"div",1),l.Sb(17,"label",9),l.Bc(18,"DC TO"),l.Rb(),l.Sb(19,"div",3),l.Sb(20,"input",10),l.ac("ngModelChange",(function(t){return e.dcTo=t})),l.Rb(),l.Rb(),l.Rb(),l.Sb(21,"button",11),l.ac("click",(function(){return e.updateTables()})),l.Bc(22,"Redo tables"),l.Rb(),l.Sb(23,"h5",12),l.Bc(24,"Normal"),l.Rb(),l.zc(25,f,6,2,"table",13),l.Sb(26,"h5",12),l.Bc(27,"Avec Avantage"),l.Rb(),l.zc(28,R,6,2,"table",13),l.Sb(29,"h5",12),l.Bc(30,"Avec D\xe9savantage"),l.Rb(),l.zc(31,F,6,2,"table",13),l.Rb()),2&t&&(l.zb(5),l.kc("ngModel",e.playerFrom),l.zb(5),l.kc("ngModel",e.playerTo),l.zb(5),l.kc("ngModel",e.dcFrom),l.zb(5),l.kc("ngModel",e.dcTo),l.zb(5),l.kc("ngIf",e.tableNormal),l.zb(3),l.kc("ngIf",e.tableAdvantage),l.zb(3),l.kc("ngIf",e.tableDisadvantage))},directives:[c.b,c.e,c.f,b.k,b.j],styles:["table[_ngcontent-%COMP%]{font-size:14px}"]}),t})()}];let C=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(e){return new(e||t)},imports:[[o.f.forChild(M)],o.f]}),t})(),T=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(e){return new(e||t)},imports:[[b.c,C,c.c]]}),t})()}}]);