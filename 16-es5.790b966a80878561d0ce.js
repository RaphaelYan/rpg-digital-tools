function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JHeh:function(e,t,a){"use strict";a.r(t),a.d(t,"ProbaModule",(function(){return w}));var n=a("ofXK"),b=a("3Pt+"),l=a("tyNb"),c=a("fXoL");function o(e,t){if(1&e&&(c.Sb(0,"th"),c.Bc(1),c.Rb()),2&e){var a=t.$implicit,n=t.index,b=c.ec(2);c.xc("width: ",0===n?5:95/b.tableNormal.head.length,"%;"),c.zb(1),c.Cc(a.label)}}function r(e,t){if(1&e&&(c.Sb(0,"th",20),c.Bc(1),c.Rb()),2&e){var a=c.ec().$implicit;c.zb(1),c.Cc(a.label)}}function i(e,t){if(1&e&&(c.Sb(0,"td"),c.Bc(1),c.Rb()),2&e){var a=c.ec().$implicit;c.zb(1),c.Dc(" ",a.label," ")}}function d(e,t){if(1&e&&(c.zc(0,r,2,1,"th",18),c.zc(1,i,2,1,"td",19)),2&e){var a=t.index;c.kc("ngIf",0===a),c.zb(1),c.kc("ngIf",0!==a)}}function f(e,t){if(1&e&&(c.Sb(0,"tr"),c.zc(1,d,2,2,"ng-template",17),c.Rb()),2&e){var a=t.$implicit;c.zb(1),c.kc("ngForOf",a)}}function s(e,t){if(1&e&&(c.Sb(0,"table",14),c.Sb(1,"thead"),c.Sb(2,"tr"),c.zc(3,o,2,4,"th",15),c.Rb(),c.Rb(),c.Sb(4,"tbody"),c.zc(5,f,2,1,"tr",16),c.Rb(),c.Rb()),2&e){var a=c.ec();c.zb(3),c.kc("ngForOf",a.tableNormal.head),c.zb(2),c.kc("ngForOf",a.tableNormal.body)}}function u(e,t){if(1&e&&(c.Sb(0,"th"),c.Bc(1),c.Rb()),2&e){var a=t.$implicit,n=t.index,b=c.ec(2);c.xc("width: ",0===n?5:95/b.tableNormal.head.length,"%;"),c.zb(1),c.Cc(a.label)}}function h(e,t){if(1&e&&(c.Sb(0,"th",20),c.Bc(1),c.Rb()),2&e){var a=c.ec().$implicit;c.zb(1),c.Cc(a.label)}}function g(e,t){if(1&e&&(c.Sb(0,"td"),c.Bc(1),c.Rb()),2&e){var a=c.ec().$implicit;c.zb(1),c.Dc(" ",a.label," ")}}function v(e,t){if(1&e&&(c.zc(0,h,2,1,"th",18),c.zc(1,g,2,1,"td",19)),2&e){var a=t.index;c.kc("ngIf",0===a),c.zb(1),c.kc("ngIf",0!==a)}}function m(e,t){if(1&e&&(c.Sb(0,"tr"),c.zc(1,v,2,2,"ng-template",17),c.Rb()),2&e){var a=t.$implicit;c.zb(1),c.kc("ngForOf",a)}}function p(e,t){if(1&e&&(c.Sb(0,"table",14),c.Sb(1,"thead"),c.Sb(2,"tr"),c.zc(3,u,2,4,"th",15),c.Rb(),c.Rb(),c.Sb(4,"tbody"),c.zc(5,m,2,1,"tr",16),c.Rb(),c.Rb()),2&e){var a=c.ec();c.zb(3),c.kc("ngForOf",a.tableAdvantage.head),c.zb(2),c.kc("ngForOf",a.tableAdvantage.body)}}function R(e,t){if(1&e&&(c.Sb(0,"th"),c.Bc(1),c.Rb()),2&e){var a=t.$implicit,n=t.index,b=c.ec(2);c.xc("width: ",0===n?5:95/b.tableNormal.head.length,"%;"),c.zb(1),c.Cc(a.label)}}function z(e,t){if(1&e&&(c.Sb(0,"th",20),c.Bc(1),c.Rb()),2&e){var a=c.ec().$implicit;c.zb(1),c.Cc(a.label)}}function S(e,t){if(1&e&&(c.Sb(0,"td"),c.Bc(1),c.Rb()),2&e){var a=c.ec().$implicit;c.zb(1),c.Dc(" ",a.label," ")}}function y(e,t){if(1&e&&(c.zc(0,z,2,1,"th",18),c.zc(1,S,2,1,"td",19)),2&e){var a=t.index;c.kc("ngIf",0===a),c.zb(1),c.kc("ngIf",0!==a)}}function k(e,t){if(1&e&&(c.Sb(0,"tr"),c.zc(1,y,2,2,"ng-template",17),c.Rb()),2&e){var a=t.$implicit;c.zb(1),c.kc("ngForOf",a)}}function C(e,t){if(1&e&&(c.Sb(0,"table",14),c.Sb(1,"thead"),c.Sb(2,"tr"),c.zc(3,R,2,4,"th",15),c.Rb(),c.Rb(),c.Sb(4,"tbody"),c.zc(5,k,2,1,"tr",16),c.Rb(),c.Rb()),2&e){var a=c.ec();c.zb(3),c.kc("ngForOf",a.tableDisadvantage.head),c.zb(2),c.kc("ngForOf",a.tableDisadvantage.body)}}var F,M,T,O=[{path:"",component:(F=function(){function e(){_classCallCheck(this,e),this.playerFrom=-1,this.playerTo=7,this.dcFrom=10,this.dcTo=20,this.updateTables()}return _createClass(e,[{key:"updateTables",value:function(){var e=this;this.tableNormal=null,this.tableAdvantage=null,this.tableDisadvantage=null,setTimeout((function(){e.tableNormal=e.buildTable(),e.tableAdvantage=e.buildTable("advantage"),e.tableDisadvantage=e.buildTable("disadvantage")}))}},{key:"buildTable",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t={head:[{label:"you \\ DC"}],body:[]},a=this.dcFrom;a<=this.dcTo;a++)t.head.push({label:a});for(var n=this.playerFrom;n<=this.playerTo;n++){for(var b=[{label:n}],l=this.dcFrom;l<=this.dcTo;l++)b.push({label:this.calcProba(n,l,e)});t.body.push(b)}return t}},{key:"calcProba",value:function(e,t,a){var n=this.makeRolls(1e5,e,t,a)/1e3;return n>=100||n<=0?"":parseFloat(n).toFixed(1)+"%"}},{key:"makeRolls",value:function(e,t,a,n){for(var b=0,l=0;l<e;l++){var c=0;if("advantage"===n){var o=this.rand(1,20),r=this.rand(1,20);c=o>r?o:r}else if("disadvantage"===n){var i=this.rand(1,20),d=this.rand(1,20);c=i>d?d:i}else c=this.rand(1,20);(c+=+t)>a&&b++}return b}},{key:"rand",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}}]),e}(),F.\u0275fac=function(e){return new(e||F)},F.\u0275cmp=c.Hb({type:F,selectors:[["app-proba"]],decls:32,vars:7,consts:[[1,"container"],[1,"form-group","row"],["for","player-from",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["id","player-from",1,"form-control",3,"ngModel","ngModelChange"],["for","player-to",1,"col-sm-2","col-form-label"],["id","player-to",1,"form-control",3,"ngModel","ngModelChange"],["for","dc-from",1,"col-sm-2","col-form-label"],["id","dc-from",1,"form-control",3,"ngModel","ngModelChange"],["for","dc-to",1,"col-sm-2","col-form-label"],["id","dc-to",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary","mb-2",3,"click"],[1,"center-align"],["class","table table-bordered table-hover table-sm",4,"ngIf"],[1,"table","table-bordered","table-hover","table-sm"],[3,"style",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["ngFor","",3,"ngForOf"],["class","text-bold text-center",4,"ngIf"],[4,"ngIf"],[1,"text-bold","text-center"]],template:function(e,t){1&e&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Sb(2,"label",2),c.Bc(3,"PLAYER FROM"),c.Rb(),c.Sb(4,"div",3),c.Sb(5,"input",4),c.ac("ngModelChange",(function(e){return t.playerFrom=e})),c.Rb(),c.Rb(),c.Rb(),c.Sb(6,"div",1),c.Sb(7,"label",5),c.Bc(8,"PLAYER TO"),c.Rb(),c.Sb(9,"div",3),c.Sb(10,"input",6),c.ac("ngModelChange",(function(e){return t.playerTo=e})),c.Rb(),c.Rb(),c.Rb(),c.Sb(11,"div",1),c.Sb(12,"label",7),c.Bc(13,"DC FROM"),c.Rb(),c.Sb(14,"div",3),c.Sb(15,"input",8),c.ac("ngModelChange",(function(e){return t.dcFrom=e})),c.Rb(),c.Rb(),c.Rb(),c.Sb(16,"div",1),c.Sb(17,"label",9),c.Bc(18,"DC TO"),c.Rb(),c.Sb(19,"div",3),c.Sb(20,"input",10),c.ac("ngModelChange",(function(e){return t.dcTo=e})),c.Rb(),c.Rb(),c.Rb(),c.Sb(21,"button",11),c.ac("click",(function(){return t.updateTables()})),c.Bc(22,"Redo tables"),c.Rb(),c.Sb(23,"h5",12),c.Bc(24,"Normal"),c.Rb(),c.zc(25,s,6,2,"table",13),c.Sb(26,"h5",12),c.Bc(27,"Avec Avantage"),c.Rb(),c.zc(28,p,6,2,"table",13),c.Sb(29,"h5",12),c.Bc(30,"Avec D\xe9savantage"),c.Rb(),c.zc(31,C,6,2,"table",13),c.Rb()),2&e&&(c.zb(5),c.kc("ngModel",t.playerFrom),c.zb(5),c.kc("ngModel",t.playerTo),c.zb(5),c.kc("ngModel",t.dcFrom),c.zb(5),c.kc("ngModel",t.dcTo),c.zb(5),c.kc("ngIf",t.tableNormal),c.zb(3),c.kc("ngIf",t.tableAdvantage),c.zb(3),c.kc("ngIf",t.tableDisadvantage))},directives:[b.b,b.e,b.f,n.k,n.j],styles:["table[_ngcontent-%COMP%]{font-size:14px}"]}),F)}],B=((T=function e(){_classCallCheck(this,e)}).\u0275mod=c.Lb({type:T}),T.\u0275inj=c.Kb({factory:function(e){return new(e||T)},imports:[[l.f.forChild(O)],l.f]}),T),w=((M=function e(){_classCallCheck(this,e)}).\u0275mod=c.Lb({type:M}),M.\u0275inj=c.Kb({factory:function(e){return new(e||M)},imports:[[n.c,B,b.c]]}),M)}}]);