(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JHeh:function(t,n,e){"use strict";e.r(n),e.d(n,"ProbaModule",(function(){return C}));var b=e("ofXK"),c=e("3Pt+"),o=e("tyNb"),a=e("fXoL");function l(t,n){if(1&t&&(a.Pb(0,"th"),a.pc(1),a.Ob()),2&t){const t=n.$implicit,e=n.index,b=a.ac(2);a.mc("width: ",0===e?5:95/b.tableNormal.head.length,"%;"),a.zb(1),a.qc(t.label)}}function i(t,n){if(1&t&&(a.Pb(0,"th",20),a.pc(1),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.qc(t.label)}}function r(t,n){if(1&t&&(a.Pb(0,"td"),a.pc(1),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.rc(" ",t.label," ")}}function d(t,n){if(1&t&&(a.nc(0,i,2,1,"th",18),a.nc(1,r,2,1,"td",19)),2&t){const t=n.index;a.dc("ngIf",0===t),a.zb(1),a.dc("ngIf",0!==t)}}function s(t,n){if(1&t&&(a.Pb(0,"tr"),a.nc(1,d,2,2,"ng-template",17),a.Ob()),2&t){const t=n.$implicit;a.zb(1),a.dc("ngForOf",t)}}function f(t,n){if(1&t&&(a.Pb(0,"table",14),a.Pb(1,"thead"),a.Pb(2,"tr"),a.nc(3,l,2,4,"th",15),a.Ob(),a.Ob(),a.Pb(4,"tbody"),a.nc(5,s,2,1,"tr",16),a.Ob(),a.Ob()),2&t){const t=a.ac();a.zb(3),a.dc("ngForOf",t.tableNormal.head),a.zb(2),a.dc("ngForOf",t.tableNormal.body)}}function h(t,n){if(1&t&&(a.Pb(0,"th"),a.pc(1),a.Ob()),2&t){const t=n.$implicit,e=n.index,b=a.ac(2);a.mc("width: ",0===e?5:95/b.tableNormal.head.length,"%;"),a.zb(1),a.qc(t.label)}}function g(t,n){if(1&t&&(a.Pb(0,"th",20),a.pc(1),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.qc(t.label)}}function p(t,n){if(1&t&&(a.Pb(0,"td"),a.pc(1),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.rc(" ",t.label," ")}}function u(t,n){if(1&t&&(a.nc(0,g,2,1,"th",18),a.nc(1,p,2,1,"td",19)),2&t){const t=n.index;a.dc("ngIf",0===t),a.zb(1),a.dc("ngIf",0!==t)}}function m(t,n){if(1&t&&(a.Pb(0,"tr"),a.nc(1,u,2,2,"ng-template",17),a.Ob()),2&t){const t=n.$implicit;a.zb(1),a.dc("ngForOf",t)}}function O(t,n){if(1&t&&(a.Pb(0,"table",14),a.Pb(1,"thead"),a.Pb(2,"tr"),a.nc(3,h,2,4,"th",15),a.Ob(),a.Ob(),a.Pb(4,"tbody"),a.nc(5,m,2,1,"tr",16),a.Ob(),a.Ob()),2&t){const t=a.ac();a.zb(3),a.dc("ngForOf",t.tableAdvantage.head),a.zb(2),a.dc("ngForOf",t.tableAdvantage.body)}}function P(t,n){if(1&t&&(a.Pb(0,"th"),a.pc(1),a.Ob()),2&t){const t=n.$implicit,e=n.index,b=a.ac(2);a.mc("width: ",0===e?5:95/b.tableNormal.head.length,"%;"),a.zb(1),a.qc(t.label)}}function v(t,n){if(1&t&&(a.Pb(0,"th",20),a.pc(1),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.qc(t.label)}}function y(t,n){if(1&t&&(a.Pb(0,"td"),a.pc(1),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.rc(" ",t.label," ")}}function z(t,n){if(1&t&&(a.nc(0,v,2,1,"th",18),a.nc(1,y,2,1,"td",19)),2&t){const t=n.index;a.dc("ngIf",0===t),a.zb(1),a.dc("ngIf",0!==t)}}function F(t,n){if(1&t&&(a.Pb(0,"tr"),a.nc(1,z,2,2,"ng-template",17),a.Ob()),2&t){const t=n.$implicit;a.zb(1),a.dc("ngForOf",t)}}function M(t,n){if(1&t&&(a.Pb(0,"table",14),a.Pb(1,"thead"),a.Pb(2,"tr"),a.nc(3,P,2,4,"th",15),a.Ob(),a.Ob(),a.Pb(4,"tbody"),a.nc(5,F,2,1,"tr",16),a.Ob(),a.Ob()),2&t){const t=a.ac();a.zb(3),a.dc("ngForOf",t.tableDisadvantage.head),a.zb(2),a.dc("ngForOf",t.tableDisadvantage.body)}}const T=[{path:"",component:(()=>{class t{constructor(){this.playerFrom=-1,this.playerTo=7,this.dcFrom=8,this.dcTo=20,this.updateTables()}updateTables(){this.tableNormal=null,this.tableAdvantage=null,this.tableDisadvantage=null,setTimeout(()=>{this.tableNormal=this.buildTable(),this.tableAdvantage=this.buildTable("advantage"),this.tableDisadvantage=this.buildTable("disadvantage")})}buildTable(t=null){const n={head:[{label:"you \\ DC"}],body:[]};for(let e=this.dcFrom;e<=this.dcTo;e++)n.head.push({label:e});for(let e=this.playerFrom;e<=this.playerTo;e++){const b=[{label:e}];for(let n=this.dcFrom;n<=this.dcTo;n++)b.push({label:this.calcProba(e,n,t)});n.body.push(b)}return n}calcProba(t,n,e){const b=this.makeRolls(1e5,t,n,e)/1e3;return b>=100||b<=0?"":parseFloat(b).toFixed(1)+"%"}makeRolls(t,n,e,b){let c=0;for(let o=0;o<t;o++){let t=0;if("advantage"===b){const n=this.rand(1,20),e=this.rand(1,20);t=n>e?n:e}else if("disadvantage"===b){const n=this.rand(1,20),e=this.rand(1,20);t=n>e?e:n}else t=this.rand(1,20);t+=+n,t>e&&c++}return c}rand(t,n){return Math.floor(Math.random()*(n-t+1))+t}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Gb({type:t,selectors:[["app-proba"]],decls:32,vars:7,consts:[[1,"container"],[1,"form-group","row"],["for","player-from",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["id","player-from",1,"form-control",3,"ngModel","ngModelChange"],["for","player-to",1,"col-sm-2","col-form-label"],["id","player-to",1,"form-control",3,"ngModel","ngModelChange"],["for","dc-from",1,"col-sm-2","col-form-label"],["id","dc-from",1,"form-control",3,"ngModel","ngModelChange"],["for","dc-to",1,"col-sm-2","col-form-label"],["id","dc-to",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary","mb-2",3,"click"],[1,"center-align"],["class","table table-bordered table-hover table-sm",4,"ngIf"],[1,"table","table-bordered","table-hover","table-sm"],[3,"style",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["ngFor","",3,"ngForOf"],["class","text-bold text-center",4,"ngIf"],[4,"ngIf"],[1,"text-bold","text-center"]],template:function(t,n){1&t&&(a.Pb(0,"div",0),a.Pb(1,"div",1),a.Pb(2,"label",2),a.pc(3,"PLAYER FROM"),a.Ob(),a.Pb(4,"div",3),a.Pb(5,"input",4),a.Xb("ngModelChange",(function(t){return n.playerFrom=t})),a.Ob(),a.Ob(),a.Ob(),a.Pb(6,"div",1),a.Pb(7,"label",5),a.pc(8,"PLAYER TO"),a.Ob(),a.Pb(9,"div",3),a.Pb(10,"input",6),a.Xb("ngModelChange",(function(t){return n.playerTo=t})),a.Ob(),a.Ob(),a.Ob(),a.Pb(11,"div",1),a.Pb(12,"label",7),a.pc(13,"DC FROM"),a.Ob(),a.Pb(14,"div",3),a.Pb(15,"input",8),a.Xb("ngModelChange",(function(t){return n.dcFrom=t})),a.Ob(),a.Ob(),a.Ob(),a.Pb(16,"div",1),a.Pb(17,"label",9),a.pc(18,"DC TO"),a.Ob(),a.Pb(19,"div",3),a.Pb(20,"input",10),a.Xb("ngModelChange",(function(t){return n.dcTo=t})),a.Ob(),a.Ob(),a.Ob(),a.Pb(21,"button",11),a.Xb("click",(function(){return n.updateTables()})),a.pc(22,"Redo tables"),a.Ob(),a.Pb(23,"h5",12),a.pc(24,"Normal"),a.Ob(),a.nc(25,f,6,2,"table",13),a.Pb(26,"h5",12),a.pc(27,"Avec Avantage"),a.Ob(),a.nc(28,O,6,2,"table",13),a.Pb(29,"h5",12),a.pc(30,"Avec D\xe9savantage"),a.Ob(),a.nc(31,M,6,2,"table",13),a.Ob()),2&t&&(a.zb(5),a.dc("ngModel",n.playerFrom),a.zb(5),a.dc("ngModel",n.playerTo),a.zb(5),a.dc("ngModel",n.dcFrom),a.zb(5),a.dc("ngModel",n.dcTo),a.zb(5),a.dc("ngIf",n.tableNormal),a.zb(3),a.dc("ngIf",n.tableAdvantage),a.zb(3),a.dc("ngIf",n.tableDisadvantage))},directives:[c.b,c.e,c.f,b.j,b.i],styles:["table[_ngcontent-%COMP%]{font-size:14px}"]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)},imports:[[o.e.forChild(T)],o.e]}),t})(),C=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)},imports:[[b.c,w,c.c]]}),t})()}}]);